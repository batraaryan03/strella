"use client";

import * as React from "react";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  Loader2,
  MapPin,
  Home,
  User,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/ui/section-header";
import { SUBURBS } from "@/lib/content";

type Status = "idle" | "loading" | "success" | "error";
type Step = 0 | 1 | 2;

const SIZES = ["Studio", "1–2 bed", "3–4 bed", "5+ bed"] as const;

const STEPS = [
  { num: "01", label: "Route", icon: MapPin },
  { num: "02", label: "Load", icon: Home },
  { num: "03", label: "Details", icon: User },
] as const;

/**
 * Quote wizard — the primary conversion widget, multi-step with
 * contact captured LAST (CRO). Step 1 route, step 2 load, step 3
 * details. Calm, generous spacing, phone last.
 */
export default function QuoteWizard() {
  const [step, setStep] = React.useState<Step>(0);
  const [status, setStatus] = React.useState<Status>("idle");
  const [form, setForm] = React.useState({
    fromSuburb: "",
    toSuburb: "",
    size: "1–2 bed" as (typeof SIZES)[number],
    moveDate: "",
    name: "",
    phone: "",
    email: "",
  });

  const set =
    <K extends keyof typeof form>(key: K) =>
    (e: React.ChangeEvent<HTMLInputElement>) =>
      setForm((f) => ({ ...f, [key]: e.target.value }));

  const stepValid: Record<Step, boolean> = {
    0: form.fromSuburb.trim().length > 1 && form.toSuburb.trim().length > 1,
    1: form.size.length > 0,
    2: form.name.trim().length > 1 && form.phone.trim().length >= 8,
  };

  const next = () => {
    if (!stepValid[step]) return;
    setStep((s) => Math.min(2, s + 1) as Step);
  };
  const back = () => setStep((s) => Math.max(0, s - 1) as Step);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          phone: form.phone,
          email: form.email,
          fromSuburb: form.fromSuburb,
          toSuburb: form.toSuburb,
          moveType: "House",
          moveDate: form.moveDate,
          message: `Move size: ${form.size}`,
          source: "quote-wizard",
        }),
      });
      if (!res.ok) throw new Error("Failed");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <section id="quote" className="relative scroll-mt-24 border-y border-line bg-surface/40 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="rounded-[var(--radius-lg)] border border-olive/30 bg-olive-tint/40 px-8 py-16 text-center">
            <CheckCircle2 className="mx-auto h-12 w-12 text-olive" />
            <h3 className="mt-5 text-2xl font-medium tracking-[-0.02em] text-ink">
              Your quote request is in
            </h3>
            <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-ink-2">
              We&apos;ll call{" "}
              <span className="font-medium text-ink">{form.phone}</span> within
              60 seconds with a fixed, no-obligation quote for your move from{" "}
              {form.fromSuburb} to {form.toSuburb}.
            </p>
            <p className="mt-6 font-mono text-[0.625rem] uppercase tracking-[0.18em] text-ink-3">
              No deposit · Cancel free up to 24h before
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="quote"
      className="relative scroll-mt-24 border-y border-line bg-surface/40 py-20 md:py-28"
    >
      <div className="mx-auto grid max-w-7xl gap-12 px-5 md:px-8 lg:grid-cols-[1fr_1.15fr] lg:gap-20">
        {/* ── Left: reassurance ── */}
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeader
            index="01"
            eyebrow="Free quote"
            title={
              <>
                Get a fixed quote in{" "}
                <span className="font-serif italic text-olive-bright">
                  60 seconds
                </span>
              </>
            }
            description="Tell us the route, the load, and when — we'll confirm your price before you commit to anything."
          />
          <ul className="mt-8 space-y-3.5 border-t border-line pt-7 text-sm text-ink-2">
            {[
              "Fixed hourly price, confirmed upfront",
              "No deposit, no call-out fees",
              "$20M transit insurance on every move",
              "Weekend & same-day availability included",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2.5">
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-olive" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* ── Right: wizard card ── */}
        <div className="rounded-[var(--radius-lg)] border border-line bg-surface p-6 md:p-10">
          {/* Progress rail */}
          <ol className="mb-9 flex items-center gap-2" aria-label="Quote steps">
            {STEPS.map((s, i) => {
              const Icon = s.icon;
              const state =
                i < step ? "done" : i === step ? "active" : "todo";
              return (
                <li key={s.num} className="flex flex-1 items-center gap-2">
                  <span
                    className={cn(
                      "grid h-9 w-9 shrink-0 place-items-center rounded-full border transition-colors duration-200",
                      state === "done" && "border-olive/50 bg-olive-tint text-olive",
                      state === "active" && "border-olive bg-olive text-ink-dark",
                      state === "todo" && "border-line text-ink-3"
                    )}
                  >
                    {state === "done" ? (
                      <CheckCircle2 className="h-4 w-4" />
                    ) : (
                      <Icon className="h-4 w-4" strokeWidth={1.5} />
                    )}
                  </span>
                  <span
                    className={cn(
                      "hidden text-[0.6875rem] font-medium uppercase tracking-[0.14em] sm:block",
                      state === "todo" ? "text-ink-3" : "text-ink-2"
                    )}
                  >
                    {s.label}
                  </span>
                  {i < STEPS.length - 1 && (
                    <span className="mx-1 h-px flex-1 bg-line" aria-hidden />
                  )}
                </li>
              );
            })}
          </ol>

          <form onSubmit={handleSubmit}>
            <div key={step} className="step-in">
              {step === 0 && (
                <div className="space-y-6">
                  <div>
                    <Label htmlFor="qz-from">Moving from (suburb)</Label>
                    <Input
                      id="qz-from"
                      list="suburbs"
                      required
                      value={form.fromSuburb}
                      onChange={set("fromSuburb")}
                      placeholder="e.g. Hawthorn"
                      autoComplete="off"
                    />
                  </div>
                  <div>
                    <Label htmlFor="qz-to">Moving to (suburb)</Label>
                    <Input
                      id="qz-to"
                      list="suburbs"
                      required
                      value={form.toSuburb}
                      onChange={set("toSuburb")}
                      placeholder="e.g. South Yarra"
                      autoComplete="off"
                    />
                  </div>
                </div>
              )}

              {step === 1 && (
                <div className="space-y-6">
                  <fieldset>
                    <legend className="mb-3 block text-[0.8125rem] font-medium text-ink-2">
                      How big is the move?
                    </legend>
                    <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                      {SIZES.map((s) => (
                        <button
                          key={s}
                          type="button"
                          onClick={() => setForm((f) => ({ ...f, size: s }))}
                          className={cn(
                            "rounded-[var(--radius-btn)] border px-3 py-3 text-sm font-medium transition-colors duration-150",
                            form.size === s
                              ? "border-olive bg-olive-tint text-olive-bright"
                              : "border-line text-ink-2 hover:border-line-strong hover:text-ink"
                          )}
                        >
                          {s}
                        </button>
                      ))}
                    </div>
                  </fieldset>
                  <div>
                    <Label htmlFor="qz-date">Preferred move date</Label>
                    <Input
                      id="qz-date"
                      type="date"
                      value={form.moveDate}
                      onChange={set("moveDate")}
                    />
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-6">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <Label htmlFor="qz-name">Your name *</Label>
                      <Input
                        id="qz-name"
                        required
                        value={form.name}
                        onChange={set("name")}
                        placeholder="Jordan Walsh"
                      />
                    </div>
                    <div>
                      <Label htmlFor="qz-phone">Phone *</Label>
                      <Input
                        id="qz-phone"
                        type="tel"
                        required
                        value={form.phone}
                        onChange={set("phone")}
                        placeholder="+61 400 000 000"
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="qz-email">Email (optional)</Label>
                    <Input
                      id="qz-email"
                      type="email"
                      value={form.email}
                      onChange={set("email")}
                      placeholder="you@example.com"
                    />
                  </div>
                  <p className="rounded-[var(--radius-btn)] border border-line bg-raised/50 px-4 py-3 font-mono text-[0.625rem] uppercase tracking-[0.16em] text-ink-3">
                    {form.fromSuburb || "From"} → {form.toSuburb || "To"} ·{" "}
                    {form.size} · {form.moveDate || "date TBC"}
                  </p>
                </div>
              )}
            </div>

            {/* Nav */}
            <div className="mt-9 flex items-center justify-between gap-3 border-t border-line pt-7">
              {step > 0 ? (
                <Button type="button" variant="ghost" onClick={back}>
                  <ArrowLeft className="h-4 w-4" />
                  Back
                </Button>
              ) : (
                <span />
              )}

              {step < 2 ? (
                <Button
                  type="button"
                  onClick={next}
                  disabled={!stepValid[step]}
                  className="group"
                >
                  Continue
                  <ArrowRight className="h-4 w-4 transition-transform duration-150 group-hover:translate-x-0.5" />
                </Button>
              ) : (
                <Button
                  type="submit"
                  disabled={!stepValid[step] || status === "loading"}
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Requesting…
                    </>
                  ) : (
                    "Get my fixed quote"
                  )}
                </Button>
              )}
            </div>

            {status === "error" && (
              <p className="mt-5 flex items-center justify-center gap-1.5 text-xs text-red-400">
                <AlertCircle className="h-3.5 w-3.5" />
                Something went wrong — please try again or call us directly.
              </p>
            )}
          </form>
        </div>
      </div>

      <datalist id="suburbs">
        {SUBURBS.map((s) => (
          <option key={s} value={s} />
        ))}
      </datalist>
    </section>
  );
}
