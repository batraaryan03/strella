"use client";

import * as React from "react";
import { CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

type Status = "idle" | "loading" | "success" | "error";

const initialForm = {
  name: "",
  phone: "",
  email: "",
  moveType: "House",
  moveDate: "",
  fromSuburb: "",
  toSuburb: "",
  message: "",
};

/**
 * Compact quote capture — the primary conversion widget.
 * Renders a calm success state inline after submit.
 */
export default function QuickQuoteForm() {
  const [status, setStatus] = React.useState<Status>("idle");
  const [form, setForm] = React.useState(initialForm);

  const update =
    (key: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
      setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, source: "quick-quote" }),
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
      <div className="flex flex-col items-start gap-2 py-2">
        <CheckCircle2 className="h-8 w-8 text-olive" />
        <p className="text-[0.9375rem] font-semibold text-ink">Request received</p>
        <p className="text-xs leading-relaxed text-ink-2">
          We&apos;ll get back to you within 60 seconds with a fixed quote.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <div className="grid grid-cols-2 gap-3">
        <div>
          <Label htmlFor="qq-name" className="text-xs">Name</Label>
          <Input
            id="qq-name"
            required
            value={form.name}
            onChange={update("name")}
            placeholder="Your name"
            className="h-9 text-[0.8125rem]"
          />
        </div>
        <div>
          <Label htmlFor="qq-phone" className="text-xs">Phone</Label>
          <Input
            id="qq-phone"
            type="tel"
            required
            value={form.phone}
            onChange={update("phone")}
            placeholder="+61…"
            className="h-9 text-[0.8125rem]"
          />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div>
          <Label htmlFor="qq-type" className="text-xs">Move type</Label>
          <Select
            id="qq-type"
            value={form.moveType}
            onChange={update("moveType")}
            className="h-9 text-[0.8125rem]"
          >
            <option>House</option>
            <option>Apartment</option>
            <option>Office</option>
            <option>Studio</option>
          </Select>
        </div>
        <div>
          <Label htmlFor="qq-date" className="text-xs">Move date</Label>
          <Input
            id="qq-date"
            type="date"
            value={form.moveDate}
            onChange={update("moveDate")}
            className="h-9 text-[0.8125rem]"
          />
        </div>
      </div>
      <Button
        type="submit"
        className="w-full"
        disabled={status === "loading"}
      >
        {status === "loading" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Sending…
          </>
        ) : (
          "Get my free quote"
        )}
      </Button>
      {status === "error" && (
        <p className="flex items-center gap-1.5 text-xs text-red-400">
          <AlertCircle className="h-3.5 w-3.5" />
          Something went wrong — please try again.
        </p>
      )}
    </form>
  );
}
