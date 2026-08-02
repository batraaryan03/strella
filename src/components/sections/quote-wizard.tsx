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
import SpotlightCard from "@/components/ui/backgrounds/SpotlightCard";
import { SUBURBS } from "@/lib/content";

type Status = "idle" | "loading" | "success" | "error";
type Step = 0 | 1 | 2;

const SIZES = ["Studio", "1–2 bed", "3–4 bed", "5+ bed"] as const;

const STEPS = [
  { num: "01", label: "Route", icon: MapPin },
  { num: "02", label: "Load", icon: Home },
  { num: "03", label: "Details", icon: User },
] as const;

interface QuoteWizardProps {
  /**
   * Bare mode — for the hero. Renders only the wizard card with no
   * section chrome, so it blends into the hero grid.
   */
  bare?: boolean;
  /**
   * Light mode — for the hero. Renders the wizard on a PURE WHITE card
   * with black text (user-directed: "pure white aur black text, to let
   * the user have focus and attention to it"). Overrides the card
   * surface + ink tones while keeping olive accents.
   */
  light?: boolean;
}

/**
 * Quote wizard — the primary conversion widget, multi-step with
 * contact captured LAST (CRO). Step 1 route, step 2 load, step 3
 * details. `light` renders the hero's high-contrast white card.
 */
export default function QuoteWizard({ bare = false, light = false }: QuoteWizardProps) {
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
        light
          ? "rounded-[var(--radius-lg)] bg-white px-6 py-12 text-center md:px-10"
          : bare
            ? "flex h-full flex-col items-center justify-center px-4 text-center"
            : "panel rounded-[var(--radius-lg)] bg-olive-tint/30 px-8 py-16 text-center"
      )}
    >
      <CheckCircle2
        className={cn("mx-auto h-14 w-14", light ? "text-olive-deep" : "text-olive")}
      />
      <h3
        className={cn(
          "mt-6 text-2xl font-medium tracking-[-0.02em]",
          light ? "text-ink-dark" : "text-ink"
        )}
      >
        Your quote request is in
      </h3>
      <p
        className={cn(
          "mx-auto mt-4 max-w-md text-base leading-relaxed",
          light ? "text-ink-dark/70" : "text-ink-2"
        )}
      >
        We&apos;ll call{" "}
        <span className={cn("font-medium", light ? "text-ink-dark" : "text-ink")}>
          {form.phone}
        </span>{" "}
        within 60 seconds with a fixed, no-obligation quote for your move
        from {form.fromSuburb} to {form.toSuburb}.
      </p>
      <p className={cn("mt-7 text-sm", light ? "text-ink-dark/50" : "text-ink-3")}>
        We&apos;ll confirm your fixed quote before you commit.
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

  const cardInner = (
    <>
      {!light && !bare && (
        <div
          aria-hidden
          className="olive-mesh pointer-events-none absolute inset-0 opacity-40"
        />
      )}
      <div className={!light && !bare ? "relative z-20" : undefined}>
        {/* Progress bar (shadcn) */}
      <div className="mb-10">
        <div className="mb-3 flex items-center justify-between text-sm">
          <span
            className={cn(
              "font-semibold",
              light ? "text-ink-dark/60" : "text-ink-3"
            )}
          >
            Step {step + 1} of 3
          </span>
          <span
            className={cn(
              "font-bold",
              light ? "text-olive-deep" : "text-olive-bright"
            )}
          >
            {STEPS[step].label}
          </span>
        </div>
        <Progress
          value={((step + 1) / 3) * 100}
          className={light ? "bg-black/10" : undefined}
        />
      </div>

      {/* Progress rail */}
      <ol className="mb-10 flex items-center gap-2" aria-label="Quote steps">
        {STEPS.map((s, i) => {
          const Icon = s.icon;
          const state = i < step ? "done" : i === step ? "active" : "todo";
          return (
            <li key={s.num} className="flex flex-1 items-center gap-2">
              <span
                className={cn(
                  "grid h-11 w-11 shrink-0 place-items-center rounded-full transition-colors duration-200",
                  state === "done" &&
                    (light ? "bg-olive-tint text-olive-deep" : "bg-olive-tint text-olive"),
                  state === "active" && "bg-olive text-ink-dark",
                  state === "todo" &&
                    (light ? "bg-black/5 text-ink-dark/40" : "bg-surface-2 text-ink-3")
                )}
              >
                {state === "done" ? (
                  <CheckCircle2 className="h-5 w-5" />
                ) : (
                  <Icon className="h-5 w-5" strokeWidth={1.5} />
                )}
              </span>
              <span
                className={cn(
                  "hidden text-sm font-medium sm:block",
                  state === "todo"
                    ? light
                      ? "text-ink-dark/40"
                      : "text-ink-3"
                    : light
                      ? "text-ink-dark/70"
                      : "text-ink-2"
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
            <div className="space-y-7">
              <div>
                <Label
                  htmlFor={id("from")}
                  className={light ? "font-semibold text-ink-dark" : undefined}
                >
                  Moving from (suburb)
                </Label>
                <Input
                  id={id("from")}
                  list={bare ? "suburbs-bare" : "suburbs"}
                  required
                  value={form.fromSuburb}
                  onChange={set("fromSuburb")}
                  placeholder="e.g. Hawthorn"
                  autoComplete="off"
                  className={
                    light
                      ? "rounded-full border border-black/10 bg-white text-ink-dark placeholder:text-ink-dark/40 hover:bg-black/5 focus:bg-white !shadow-none"
                      : undefined
                  }
                />
              </div>
              <div>
                <Label
                  htmlFor={id("to")}
                  className={light ? "font-semibold text-ink-dark" : undefined}
                >
                  Moving to (suburb)
                </Label>
                <Input
                  id={id("to")}
                  list={bare ? "suburbs-bare" : "suburbs"}
                  required
                  value={form.toSuburb}
                  onChange={set("toSuburb")}
                  placeholder="e.g. South Yarra"
                  autoComplete="off"
                  className={
                    light
                      ? "rounded-full border border-black/10 bg-white text-ink-dark placeholder:text-ink-dark/40 hover:bg-black/5 focus:bg-white !shadow-none"
                      : undefined
                  }
                />
              </div>
            </div>
          )}

          {step === 1 && (
            <div className="space-y-7">
              <fieldset>
                <legend
                  className={cn(
                    "mb-3 block text-sm font-semibold",
                    light ? "text-ink-dark" : "text-ink-2"
                  )}
                >
                  How big is the move?
                </legend>
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                  {SIZES.map((s) => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => setForm((f) => ({ ...f, size: s }))}
                      className={cn(
                        "h-13 rounded-full px-3 text-base font-semibold transition-colors duration-150",
                        form.size === s
                          ? light
                            ? "bg-olive text-ink-dark"
                            : "bg-olive-tint text-olive-bright"
                          : light
                            ? "bg-black/5 text-ink-dark/70 hover:bg-black/10 hover:text-ink-dark"
                            : "bg-surface-2 text-ink-2 hover:bg-raised hover:text-ink"
                      )}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </fieldset>
              <div>
                <Label
                  htmlFor={id("date")}
                  className={light ? "font-semibold text-ink-dark" : undefined}
                >
                  Preferred move date
                </Label>
                <DateField
                  id={id("date")}
                  value={form.moveDate}
                  onChange={(v) => setForm((f) => ({ ...f, moveDate: v }))}
                  className={
                    light
                      ? "rounded-full border border-black/10 bg-white text-ink-dark hover:bg-black/5 !shadow-none"
                      : undefined
                  }
                />
              </div>

            </div>
          )}

          {step === 2 && (
            <div className="space-y-7">
              <div className="grid gap-7 sm:grid-cols-2">
                <div>
                  <Label
                    htmlFor={id("name")}
                    className={light ? "font-semibold text-ink-dark" : undefined}
                  >
                    Your name *
                  </Label>
                  <Input
                    id={id("name")}
                    required
                    value={form.name}
                    onChange={set("name")}
                    placeholder="Jordan Walsh"
                    className={
                      light
                        ? "rounded-full border border-black/10 bg-white text-ink-dark placeholder:text-ink-dark/40 hover:bg-black/5 focus:bg-white !shadow-none"
                        : undefined
                    }
                  />
                </div>
                <div>
                  <Label
                    htmlFor={id("phone")}
                    className={light ? "font-semibold text-ink-dark" : undefined}
                  >
                    Phone *
                  </Label>
                  <Input
                    id={id("phone")}
                    type="tel"
                    required
                    value={form.phone}
                    onChange={set("phone")}
                    placeholder="+61 400 000 000"
                    className={
                      light
                        ? "rounded-full border border-black/10 bg-white text-ink-dark placeholder:text-ink-dark/40 hover:bg-black/5 focus:bg-white !shadow-none"
                        : undefined
                    }
                  />
                </div>
              </div>
              <div>
                <Label
                  htmlFor={id("email")}
                  className={light ? "font-semibold text-ink-dark" : undefined}
                >
                  Email (optional)
                </Label>
                <Input
                  id={id("email")}
                  type="email"
                  value={form.email}
                  onChange={set("email")}
                  placeholder="you@example.com"
                  className={
                    light
                      ? "rounded-full border border-black/10 bg-white text-ink-dark placeholder:text-ink-dark/40 hover:bg-black/5 focus:bg-white !shadow-none"
                      : undefined
                  }
                />
              </div>
              <div
                className={cn(                    "space-y-2 px-5 py-4",
                    light
                      ? "rounded-full bg-black/5"
                      : "rounded-[var(--radius-btn)] bg-surface-2"
                )}
              >
                <p className={cn("text-sm", light ? "text-ink-dark/50" : "text-ink-3")}>
                  {form.fromSuburb || "From"} → {form.toSuburb || "To"} ·{" "}
                  {form.size} · {form.moveDate || "date TBC"}
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Nav */}
        <div
          className={cn(
            "mt-10 flex items-center justify-between gap-3",
            !bare && !light && "border-t border-line pt-8"
          )}
        >
          {step > 0 ? (
            <Button
              type="button"
              variant="ghost"
              size="lg"
              onClick={back}
              className={light ? "text-ink-dark/60 hover:text-olive-deep" : undefined}
            >
              <ArrowLeft className="h-5 w-5" />
              Back
            </Button>
          ) : (
            <span />
          )}

          {step < 2 ? (
            <Button
              type="button"
              size="lg"
              onClick={next}
              disabled={!stepValid[step]}
              className="group"
            >
              Continue
              <ArrowRight className="h-5 w-5 transition-transform duration-150 group-hover:translate-x-0.5" />
            </Button>
          ) : (
            <Button
              type="submit"
              size="lg"
              disabled={!stepValid[step] || status === "loading"}
            >
              {status === "loading" ? (
                <>
                  <Loader2 className="h-5 w-5 animate-spin" />
                  Requesting…
                </>
              ) : (
                "Get my fixed quote"
              )}
            </Button>
          )}
        </div>

        {status === "error" && (
          <p className="mt-6 flex items-center justify-center gap-1.5 text-sm text-red-400">
            <AlertCircle className="h-4 w-4" />
            Something went wrong — please try again or call us directly.
          </p>
        )}
      </form>
      </div>
    </>
  );

  // Full quote section — olive spotlight hover (same blend as pricing,
  // subtler at 20%). Hero pill (light/bare) stays plain white.
  const card = !light && !bare ? (
    <SpotlightCard
      spotlightColor="rgba(151, 167, 90, 0.32)"
      hoverOpacity={0.2}
      className="glass-card relative overflow-hidden rounded-[var(--radius-lg)] p-6 md:p-10"
    >
      {cardInner}
    </SpotlightCard>
  ) : (
    <div
      className={
        light ? "rounded-[var(--radius-lg)] bg-white p-6 md:p-10" : undefined
      }
    >
      {cardInner}
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
    <section id="quote" className="relative scroll-mt-24 overflow-hidden py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        {/* ── Right-only: heading + wizard card ── */}
        <div className="mx-auto max-w-3xl">
          <div className="mb-10 text-center">
            <p className="text-base font-semibold uppercase tracking-[0.18em] text-olive">
              Contact
            </p>
            <h2 className="mt-4 text-balance text-[clamp(2.25rem,5vw,3.5rem)] font-bold tracking-[-0.03em] text-ink">
              Get a fixed quote in{" "}
              <span className="text-olive-bright">60 seconds</span>
            </h2>
            <p className="mx-auto mt-5 max-w-[48ch] text-lg leading-[1.7] text-ink-2">
              Tell us the route, the load, and when — we&apos;ll confirm
              your price before you commit to anything. Professional
              crews and full equipment on every move.
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
