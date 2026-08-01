"use client";

import * as React from "react";
import { CheckCircle2, AlertCircle, Loader2, Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

type Status = "idle" | "loading" | "success" | "error";

const initialForm = {
  name: "",
  phone: "",
  email: "",
  moveDate: "",
  pickupSuburb: "",
  dropoffSuburb: "",
  moveType: "House",
  message: "",
};

/**
 * Detailed booking form — generous field spacing, calm composition,
 * inline error + success states.
 */
export default function BookingForm() {
  const [status, setStatus] = React.useState<Status>("idle");
  const [form, setForm] = React.useState(initialForm);

  const update =
    (key: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, source: "booking-form" }),
      });
      if (!res.ok) throw new Error("Failed");
      setStatus("success");
      setForm(initialForm);
      setTimeout(() => setStatus("idle"), 5000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  if (status === "success") {
    return (
      <div className="mx-auto max-w-2xl rounded-[var(--radius-lg)] border border-olive/30 bg-olive-tint/40 px-8 py-14 text-center">
        <CheckCircle2 className="mx-auto h-12 w-12 text-olive" />
        <h3 className="mt-4 text-2xl font-medium tracking-[-0.02em] text-ink">
          Request submitted
        </h3>
        <p className="mt-2 text-sm text-ink-2">
          We&apos;ll be in touch within 60 seconds to confirm your booking.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5 rounded-[var(--radius-lg)] border border-line bg-surface p-6 md:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <Label htmlFor="bk-name">Full name *</Label>
          <Input id="bk-name" required value={form.name} onChange={update("name")} placeholder="Jordan Walsh" />
        </div>
        <div>
          <Label htmlFor="bk-phone">Phone *</Label>
          <Input id="bk-phone" type="tel" required value={form.phone} onChange={update("phone")} placeholder="+61 400 000 000" />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <Label htmlFor="bk-email">Email</Label>
          <Input id="bk-email" type="email" value={form.email} onChange={update("email")} placeholder="you@example.com" />
        </div>
        <div>
          <Label htmlFor="bk-date">Preferred move date</Label>
          <Input id="bk-date" type="date" value={form.moveDate} onChange={update("moveDate")} />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <Label htmlFor="bk-from">Moving from (suburb)</Label>
          <Input id="bk-from" value={form.pickupSuburb} onChange={update("pickupSuburb")} placeholder="Hawthorn" />
        </div>
        <div>
          <Label htmlFor="bk-to">Moving to (suburb)</Label>
          <Input id="bk-to" value={form.dropoffSuburb} onChange={update("dropoffSuburb")} placeholder="South Yarra" />
        </div>
      </div>

      <div>
        <Label htmlFor="bk-type">Move type</Label>
        <Select id="bk-type" value={form.moveType} onChange={update("moveType")}>
          <option>House</option>
          <option>Apartment</option>
          <option>Office</option>
          <option>Studio</option>
        </Select>
      </div>

      <div>
        <Label htmlFor="bk-msg">Additional details</Label>
        <Textarea
          id="bk-msg"
          value={form.message}
          onChange={update("message")}
          placeholder="Any special items, access issues, or questions?"
        />
      </div>

      <Button type="submit" size="lg" className="w-full" disabled={status === "loading"}>
        {status === "loading" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Submitting…
          </>
        ) : (
          <>
            <Send className="h-4 w-4" />
            Submit request
          </>
        )}
      </Button>

      {status === "error" && (
        <p className="flex items-center justify-center gap-1.5 text-xs text-red-400">
          <AlertCircle className="h-3.5 w-3.5" />
          Something went wrong — please try again or call us directly.
        </p>
      )}
    </form>
  );
}
