"use client";

import * as React from "react";
import { User, Truck, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

type Status = "idle" | "loading" | "success" | "error";

const initialForm = {
  fullName: "",
  email: "",
  phone: "",
  movingFrom: "",
  movingTo: "",
  moveDate: "",
  moveSize: 2,
  serviceType: "residential" as "residential" | "commercial",
  packing: false,
  storage: false,
  additionalInfo: "",
};

export default function BookMovePage() {
  const [status, setStatus] = React.useState<Status>("idle");
  const [form, setForm] = React.useState(initialForm);

  const set = <K extends keyof typeof form>(key: K, value: (typeof form)[K]) =>
    setForm((f) => ({ ...f, [key]: value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.fullName,
          phone: form.phone,
          email: form.email,
          moveDate: form.moveDate,
          fromSuburb: form.movingFrom,
          toSuburb: form.movingTo,
          moveType: form.serviceType === "residential" ? "House" : "Office",
          message: `Move Size: ${form.moveSize} bedrooms | Service: ${form.serviceType} | Packing: ${form.packing} | Storage: ${form.storage} | ${form.additionalInfo}`,
          source: "book-move-page",
        }),
      });
      if (!res.ok) throw new Error("Failed");
      setStatus("success");
      setTimeout(() => setStatus("idle"), 6000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  return (
    <>
      <Header />
      <div className="min-h-screen pb-20 pt-[6.5rem]">
        <div className="mx-auto max-w-3xl px-5 md:px-8">
          {/* Page header */}
          <div className="mb-10 text-center">
            <p className="font-mono text-[0.625rem] uppercase tracking-[0.24em] text-olive">
              Booking waypoint
            </p>
            <h1 className="mt-4 text-balance text-[clamp(2.25rem,5vw,3.25rem)] font-medium tracking-[-0.03em] text-ink">
              Book your move
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-ink-2">
              Let&apos;s get you moving. Fill in the details below and our team
              will confirm your booking within 60 seconds.
            </p>
          </div>

          {status === "success" ? (
            <div className="rounded-[var(--radius-lg)] border border-olive/30 bg-olive-tint/40 px-8 py-14 text-center">
              <CheckCircle2 className="mx-auto h-14 w-14 text-olive" />
              <h2 className="mt-5 text-2xl font-medium tracking-[-0.02em] text-ink">
                Booking request confirmed
              </h2>
              <p className="mt-2 text-sm text-ink-2">
                We&apos;ll contact you within 60 seconds to lock in your crew.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="overflow-hidden rounded-[var(--radius-lg)] border border-line bg-surface"
            >
              {/* Personal details */}
              <SectionHeading icon={User} title="Personal details" />
              <div className="grid gap-5 px-6 py-6 sm:grid-cols-2 md:px-8">
                <div>
                  <Label htmlFor="bm-name">Full name *</Label>
                  <Input id="bm-name" required value={form.fullName} onChange={(e) => set("fullName", e.target.value)} placeholder="Jordan Walsh" />
                </div>
                <div>
                  <Label htmlFor="bm-email">Email *</Label>
                  <Input id="bm-email" type="email" required value={form.email} onChange={(e) => set("email", e.target.value)} placeholder="you@example.com" />
                </div>
                <div className="sm:col-span-2">
                  <Label htmlFor="bm-phone">Phone *</Label>
                  <Input id="bm-phone" type="tel" required value={form.phone} onChange={(e) => set("phone", e.target.value)} placeholder="+61 400 000 000" />
                </div>
              </div>

              {/* Move details */}
              <SectionHeading icon={Truck} title="Move details" accent />
              <div className="grid gap-5 px-6 py-6 sm:grid-cols-2 md:px-8">
                <div>
                  <Label htmlFor="bm-from">Moving from *</Label>
                  <Input id="bm-from" required value={form.movingFrom} onChange={(e) => set("movingFrom", e.target.value)} placeholder="123 Old Street, Hawthorn" />
                </div>
                <div>
                  <Label htmlFor="bm-to">Moving to *</Label>
                  <Input id="bm-to" required value={form.movingTo} onChange={(e) => set("movingTo", e.target.value)} placeholder="456 New Avenue, South Yarra" />
                </div>
                <div>
                  <Label htmlFor="bm-date">Preferred move date *</Label>
                  <Input id="bm-date" type="date" required value={form.moveDate} onChange={(e) => set("moveDate", e.target.value)} />
                </div>
                <div>
                  <Label htmlFor="bm-size">Move size (bedrooms)</Label>
                  <div className="flex items-center gap-4">
                    <input
                      type="range"
                      min={1}
                      max={6}
                      value={form.moveSize}
                      onChange={(e) => set("moveSize", Number(e.target.value))}
                      className="h-1.5 flex-1 cursor-pointer appearance-none rounded-full bg-raised-2 accent-olive"
                    />
                    <span className="tnum grid h-10 w-10 shrink-0 place-items-center rounded-[var(--radius-btn)] border border-line bg-raised font-mono text-sm text-olive">
                      {form.moveSize}
                    </span>
                  </div>
                </div>
                <div>
                  <Label>Service type</Label>
                  <div className="mt-2 flex gap-6">
                    <Radio label="Residential" checked={form.serviceType === "residential"} onChange={() => set("serviceType", "residential")} />
                    <Radio label="Commercial" checked={form.serviceType === "commercial"} onChange={() => set("serviceType", "commercial")} />
                  </div>
                </div>
                <div>
                  <Label>Additional services</Label>
                  <div className="mt-2 flex gap-6">
                    <Checkbox label="Packing" checked={form.packing} onChange={(v) => set("packing", v)} />
                    <Checkbox label="Storage" checked={form.storage} onChange={(v) => set("storage", v)} />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <Label htmlFor="bm-info">Additional information *</Label>
                  <Textarea
                    id="bm-info"
                    required
                    rows={4}
                    value={form.additionalInfo}
                    onChange={(e) => set("additionalInfo", e.target.value)}
                    placeholder="Any special items, access issues, or questions?"
                  />
                </div>
              </div>

              {/* Submit */}
              <div className="border-t border-line px-6 py-6 md:px-8">
                <Button type="submit" size="lg" className="w-full" disabled={status === "loading"}>
                  {status === "loading" ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Submitting…
                    </>
                  ) : (
                    "Confirm booking request"
                  )}
                </Button>
                {status === "error" && (
                  <p className="mt-3 flex items-center justify-center gap-1.5 text-xs text-red-400">
                    <AlertCircle className="h-3.5 w-3.5" />
                    Something went wrong — please try again or call us directly.
                  </p>
                )}
              </div>
            </form>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

function SectionHeading({
  icon: Icon,
  title,
  accent,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  accent?: boolean;
}) {
  return (
    <div className={`flex items-center gap-3 border-b border-line px-6 py-4 md:px-8 ${accent ? "bg-olive-tint/30" : "bg-raised/40"}`}>
      <span className={`grid h-8 w-8 place-items-center rounded-full border ${accent ? "border-olive/40 bg-olive-tint text-olive" : "border-line bg-raised text-ink-2"}`}>
        <Icon className="h-4 w-4" />
      </span>
      <h2 className="text-[0.9375rem] font-medium text-ink">{title}</h2>
    </div>
  );
}

function Radio({
  label,
  checked,
  onChange,
}: {
  label: string;
  checked: boolean;
  onChange: () => void;
}) {
  return (
    <label className="flex cursor-pointer items-center gap-2">
      <input type="radio" checked={checked} onChange={onChange} className="h-4 w-4 accent-olive" />
      <span className="text-sm text-ink-2">{label}</span>
    </label>
  );
}

function Checkbox({
  label,
  checked,
  onChange,
}: {
  label: string;
  checked: boolean;
  onChange: (v: boolean) => void;
}) {
  return (
    <label className="flex cursor-pointer items-center gap-2">
      <input type="checkbox" checked={checked} onChange={(e) => onChange(e.target.checked)} className="h-4 w-4 accent-olive" />
      <span className="text-sm text-ink-2">{label}</span>
    </label>
  );
}
