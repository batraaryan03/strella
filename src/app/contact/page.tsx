"use client";

import * as React from "react";
import { Phone, Mail, MapPin, Clock, CheckCircle2, AlertCircle, Loader2, Send } from "lucide-react";
import Footer from "@/components/sections/footer";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { BRAND } from "@/lib/content";

type Status = "idle" | "loading" | "success" | "error";

const initialForm = { name: "", phone: "", email: "", message: "" };

const contactCards = [
  {
    icon: Phone,
    label: "Phone",
    value: BRAND.phoneDisplay,
    sub: "Call us anytime",
    href: `tel:${BRAND.phone}`,
  },
  {
    icon: Mail,
    label: "Email",
    value: BRAND.email,
    sub: "We reply within minutes",
    href: `mailto:${BRAND.email}`,
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Melbourne, VIC",
    sub: "Serving all Melbourne suburbs",
  },
  {
    icon: Clock,
    label: "Service hours",
    value: BRAND.hoursWeekday,
    sub: BRAND.hoursWeekend,
  },
] as const;

export default function ContactPage() {
  const [status, setStatus] = React.useState<Status>("idle");
  const [form, setForm] = React.useState(initialForm);

  const update =
    (key: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, source: "contact-page" }),
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

  return (
    <>
      <div className="min-h-screen pb-20 pt-[6.5rem]">
        {/* Header — editorial kicker, no gimmick labels */}
        <div className="relative overflow-hidden border-b border-line bg-surface/50">
          <div className="relative mx-auto max-w-7xl px-5 py-16 text-center md:px-8 md:py-20">
            <ScrollReveal asGroup>
              <p className="flex items-center justify-center gap-3 text-[0.8125rem] font-medium text-olive">
                <span className="h-px w-6 bg-olive/60" aria-hidden />
                Melbourne&apos;s precision removalists
              </p>
              <h1 className="mt-4 text-balance text-[clamp(2.5rem,5.5vw,3.5rem)] font-medium tracking-[-0.04em] text-ink">
                Contact Stellar
              </h1>
              <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-ink-2">
                Ready to move? Have questions? We&apos;re here to help — reach
                out and we&apos;ll get back to you within 60 seconds.
              </p>
            </ScrollReveal>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-5 pt-14 md:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Contact info */}
            <div>
              <h2 className="text-xl font-medium tracking-[-0.01em] text-ink">
                Contact information
              </h2>
              <div className="mt-8 space-y-4">
                {contactCards.map((c) => {
                  const Icon = c.icon;
                  const inner = (
                    <>
                      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-[var(--radius-btn)] bg-surface-2 text-olive">
                        <Icon className="h-5 w-5" strokeWidth={1.5} />
                      </span>
                      <span>
                        <span className="block text-[0.8125rem] font-medium text-ink">{c.label}</span>
                        <span className="mt-0.5 block text-sm text-ink-2">{c.value}</span>
                        <span className="block text-xs text-ink-3">{c.sub}</span>
                      </span>
                    </>
                  );
                  const cls =
                    "panel panel-hover group flex items-start gap-4 rounded-[var(--radius-card)] p-5";
                  return "href" in c && c.href ? (
                    <a key={c.label} href={c.href} className={cls}>
                      {inner}
                    </a>
                  ) : (
                    <div key={c.label} className={cls}>
                      {inner}
                    </div>
                  );
                })}
              </div>

              <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a href="/book-move">
                  <Button size="lg" className="w-full sm:w-auto">
                    Book your move
                  </Button>
                </a>
                <a href={`tel:${BRAND.phone}`}>
                  <Button variant="outline" size="lg" className="w-full sm:w-auto">
                    <Phone className="h-4 w-4" />
                    {BRAND.phoneDisplay}
                  </Button>
                </a>
              </div>
            </div>

            {/* Form */}
            <div>
              <h2 className="text-xl font-medium tracking-[-0.01em] text-ink">
                Send us a message
              </h2>
              {status === "success" ? (
                <div className="panel mt-8 rounded-[var(--radius-lg)] bg-olive-tint/30 px-8 py-12 text-center">
                  <CheckCircle2 className="mx-auto h-12 w-12 text-olive" />
                  <h3 className="mt-4 text-xl font-medium text-ink">Message sent</h3>
                  <p className="mt-2 text-sm text-ink-2">
                    We&apos;ll get back to you within 60 seconds.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="panel mt-8 space-y-5 rounded-[var(--radius-lg)] p-6 md:p-8"
                >
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <Label htmlFor="ct-name">Name *</Label>
                      <Input id="ct-name" required value={form.name} onChange={update("name")} placeholder="Your name" />
                    </div>
                    <div>
                      <Label htmlFor="ct-phone">Phone *</Label>
                      <Input id="ct-phone" type="tel" required value={form.phone} onChange={update("phone")} placeholder="+61 400 000 000" />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="ct-email">Email *</Label>
                    <Input id="ct-email" type="email" required value={form.email} onChange={update("email")} placeholder="you@example.com" />
                  </div>
                  <div>
                    <Label htmlFor="ct-msg">Message *</Label>
                    <Textarea id="ct-msg" required rows={5} value={form.message} onChange={update("message")} placeholder="Tell us about your move…" />
                  </div>
                  <Button type="submit" size="lg" className="w-full" disabled={status === "loading"}>
                    {status === "loading" ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Sending…
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4" />
                        Send message
                      </>
                    )}
                  </Button>
                  {status === "error" && (
                    <p className="flex items-center justify-center gap-1.5 text-xs text-red-400">
                      <AlertCircle className="h-3.5 w-3.5" />
                      Something went wrong — please try again.
                    </p>
                  )}
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
