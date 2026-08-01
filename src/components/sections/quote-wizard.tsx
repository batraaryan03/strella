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
import { Progress } from "@/components/ui/progress";
import { DateField } from "@/components/ui/date-field";
import { SUBURBS } from "@/lib/content";

type Status = "idle" | "loading" | "success" | "error";
type Step = 0 | 1 | 2;

const SIZES = ["Studio", "1–2 bed", "3–4 bed", "5+ bed"] as const;

/** Indicative hourly range per move size (Muval-style honesty). */
const ESTIMATE_RANGE: Record<(typeof SIZES)[number], [number, number]> = {
  Studio: [180, 260],
  "1–2 bed": [260, 380],
  "3–4 bed": [340, 480],
  "5+ bed": [440, 620],
};

const STEPS = [
  { num: "01", label: "Route", icon: MapPin },
  { num: "02", label: "Load", icon: Home },
  { num: "03", label: "Details", icon: User },
] as const;

interface QuoteWizardProps {
  /**
   * Bare mode — for the hero. Renders only the wizard card with no
   * section chrome, no panel background/border, tighter paddings so
   * it blends pagelessly into the hero.
   */
  bare?: boolean;
}

/**
 * Quote wizard — the primary conversion widget, multi-step with
 * contact captured LAST (CRO). Step 1 route, step 2 load, step 3
 * details. Borderless, calm spacing, phone last. Right-only layout:
 * no left reassurance column (user-directed).
 */
export default function QuoteWizard({ bare = false }: QuoteWizardProps) {
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

  const id = (s: string) => (bare ? `hqz-${s}` : `qz-${s}`);

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

  const success = (
    <div
      className={cn(
        bare
          ? "flex h-full flex-col items-center justify-center px-4 text-center"
          : "panel rounded-[var(--radius-lg)] bg-olive-tint/30 px-8 py-16 text-center"
      )}
    >
      <CheckCircle2 className="mx-auto h-12 w-12 text-olive" />
      <h3 className="mt-5 text-2xl font-medium tracking-[-0.02em] text-ink">
        Your quote request is in
      </h3>
      <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-ink-2">
        We&apos;ll call{" "}
        <span className="font-medium text-ink">{form.phone}</span> within 60
        seconds with a fixed, no-obligation quote for your move from{" "}
        {form.fromSuburb} to {form.toSuburb}.
      </p>
      <p className="mt-6 text-[0.8125rem] text-ink-3">
        No deposit · Cancel free up to 24h before
      </p>
    </div>
  );

  if (status === "success") {
    return bare ? (
      success
    ) : (
      <section id="quote" className="relative scroll-mt-24 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">{success}</div>
      </section>
    );
  }

  const card = (
    <div
      className={cn(
        !bare && "panel rounded-[var(--radius-lg)] p-6 md:p-10"
      )}
    >
      {/* Progress bar (shadcn) */}
      <div className="mb-9">
        <div className="mb-3 flex items-center justify-between text-[0.8125rem]">
          <span className="text-ink-3">Step {step + 1} of 3</span>
          <span className="text-olive-bright">{STEPS[step].label}</span>
        </div>
        <Progress value={((step + 1) / 3) * 100} />
      </div>

      {/* Progress rail */}
      <ol className="mb-9 flex items-center gap-2" aria-label="Quote steps">
        {STEPS.map((s, i) => {
          const Icon = s.icon;
          const state = i < step ? "done" : i === step ? "active" : "todo";
          return (
            <li key={s.num} className="flex flex-1 items-center gap-2">
              <span
                className={cn(
                  "grid h-9 w-9 shrink-0 place-items-center rounded-full transition-colors duration-200",
                  state === "done" && "bg-olive-tint text-olive",
                  state === "active" && "bg-olive text-ink-dark",
                  state === "todo" && "bg-surface-2 text-ink-3"
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
                  "hidden text-[0.8125rem] font-medium sm:block",
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
                <Label htmlFor={id("from")}>Moving from (suburb)</Label>
                <Input
                  id={id("from")}
                  list={bare ? "suburbs-bare" : "suburbs"}
                  required
                  value={form.fromSuburb}
                  onChange={set("fromSuburb")}
                  placeholder="e.g. Hawthorn"
                  autoComplete="off"
                />
              </div>
              <div>
                <Label htmlFor={id("to")}>Moving to (suburb)</Label>
                <Input
                  id={id("to")}
                  list={bare ? "suburbs-bare" : "suburbs"}
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
                        "rounded-[var(--radius-btn)] px-3 py-3 text-sm font-medium transition-colors duration-150",
                        form.size === s
                          ? "bg-olive-tint text-olive-bright"
                          : "bg-surface-2 text-ink-2 hover:bg-raised hover:text-ink"
                      )}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </fieldset>
              <div>
                <Label htmlFor={id("date")}>Preferred move date</Label>
                <DateField
                  id={id("date")}
                  value={form.moveDate}
                  onChange={(v) => setForm((f) => ({ ...f, moveDate: v }))}
                />
              </div>

              {/* Ballpark-first — price band BEFORE the contact wall */}
              <div className="space-y-2 rounded-[var(--radius-btn)] bg-surface-2 px-4 py-3">
                <p className="flex items-baseline justify-between gap-3">
                  <span className="text-[0.8125rem] text-ink-2">
                    Indicative estimate
                  </span>
                  <span className="tnum font-mono text-[0.9375rem] text-olive-bright">
                    ${ESTIMATE_RANGE[form.size][0]} – $
                    {ESTIMATE_RANGE[form.size][1]}
                  </span>
                </p>
                <p className="text-xs text-ink-3">
                  Based on similar {form.size} moves. No contact details
                  needed yet — your fixed quote is confirmed later.
                </p>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <Label htmlFor={id("name")}>Your name *</Label>
                  <Input
                    id={id("name")}
                    required
                    value={form.name}
                    onChange={set("name")}
                    placeholder="Jordan Walsh"
                  />
                </div>
                <div>
                  <Label htmlFor={id("phone")}>Phone *</Label>
                  <Input
                    id={id("phone")}
                    type="tel"
                    required
                    value={form.phone}
                    onChange={set("phone")}
                    placeholder="+61 400 000 000"
                  />
                </div>
              </div>
              <div>
                <Label htmlFor={id("email")}>Email (optional)</Label>
                <Input
                  id={id("email")}
                  type="email"
                  value={form.email}
                  onChange={set("email")}
                  placeholder="you@example.com"
                />
              </div>
              <div className="space-y-2 rounded-[var(--radius-btn)] bg-surface-2 px-4 py-3">
                <p className="text-[0.8125rem] text-ink-3">
                  {form.fromSuburb || "From"} → {form.toSuburb || "To"} ·{" "}
                  {form.size} · {form.moveDate || "date TBC"}
                </p>
                <p className="flex items-baseline justify-between gap-3">
                  <span className="text-[0.8125rem] text-ink-2">
                    Indicative estimate
                  </span>
                  <span className="tnum font-mono text-[0.9375rem] text-olive-bright">
                    ${ESTIMATE_RANGE[form.size][0]} – $
                    {ESTIMATE_RANGE[form.size][1]}
                  </span>
                </p>
                <p className="text-xs text-ink-3">
                  Based on similar {form.size} moves. Your fixed quote is
                  confirmed before you commit.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Nav */}
        <div
          className={cn(
            "mt-9 flex items-center justify-between gap-3",
            !bare && "border-t border-line pt-7"
          )}
        >
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
  );

  if (bare) {
    return (
      <>
        {card}
        <datalist id="suburbs-bare">
          {SUBURBS.map((s) => (
            <option key={s} value={s} />
          ))}
        </datalist>
      </>
    );
  }

  return (
    <section
      id="quote"
      className="relative scroll-mt-24 border-y border-line bg-surface/40 py-20 md:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        {/* ── Right-only: heading + wizard card ── */}
        <div className="mx-auto max-w-3xl">
          <div className="mb-10 text-center">
            <h2 className="text-balance text-[clamp(2rem,4.5vw,3rem)] font-bold tracking-[-0.03em] text-ink">
              Get a fixed quote in{" "}
              <span className="text-olive-bright">60 seconds</span>
            </h2>
            <p className="mx-auto mt-4 max-w-[48ch] text-base leading-[1.7] text-ink-2">
              Tell us the route, the load, and when — we&apos;ll confirm
              your price before you commit to anything. No deposit, no
              call-out fees, $20M transit insurance on every move.
            </p>
          </div>
          {card}
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
