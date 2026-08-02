"use client";

import * as React from "react";
import { MapPin, Plus, Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { StarRating } from "@/components/ui/star-rating";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { REVIEWS } from "@/lib/content";

/**
 * Reviews — a single-strip auto-scrolling marquee (weekend-movers
 * style). WHITE section (user-directed black/white mix): dark text on
 * white, light glass review cards. Infinite left scroll via
 * `animate-reviews-scroll`. Factual aggregate: rated by Melbourne
 * locals — no invented review counts. A small "Add a review" button
 * next to the aggregate opens a dialog (name + job ID + review) that
 * posts to /api/reviews.
 */
export default function ReviewsSection() {
  const doubled = [...REVIEWS, ...REVIEWS];

  const [open, setOpen] = React.useState(false);
  const [status, setStatus] = React.useState<"idle" | "loading" | "success" | "error">("idle");
  const [form, setForm] = React.useState({ name: "", jobId: "", review: "" });

  const set =
    <K extends keyof typeof form>(key: K) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [key]: e.target.value }));

  const canSubmit = form.name.trim().length > 1 && form.jobId.trim().length > 1 && form.review.trim().length > 4;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!canSubmit) return;
    setStatus("loading");
    try {
      const res = await fetch("/api/reviews", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name.trim(),
          jobId: form.jobId.trim(),
          review: form.review.trim(),
          source: "reviews-section",
        }),
      });
      if (!res.ok) throw new Error("Failed");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="reviews" className="relative scroll-mt-24 overflow-hidden bg-white py-14 md:py-20">
      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        {/* Compact header — aggregate + heading on one line */}
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-olive-deep">
              Reviews
            </p>
            <h2 className="mt-3 text-balance text-[clamp(2.25rem,4.5vw,3.25rem)] font-bold leading-[1.02] tracking-[-0.03em] text-ink-dark">
              Trusted by Melbourne locals
            </h2>
          </div>
          <div className="flex items-center gap-4 pb-1">
            <div>
              <StarRating value={5} size="md" />
              <p className="mt-1 text-sm text-ink-dark/50">
                Rated by Melbourne locals
              </p>
            </div>
            {/* Small, beautiful "Add a review" button — right next to the
                aggregate rating */}
            <Button
              type="button"
              size="sm"
              onClick={() => setOpen(true)}
              className="gap-1.5"
            >
              <Plus className="h-4 w-4" />
              Add a review
            </Button>
          </div>
        </div>
      </div>

      {/* ── Single strip — infinite marquee, glass review cards ── */}
      <div className="relative marquee-mask mt-10 overflow-hidden">
        <div className="flex w-max gap-6 animate-reviews-scroll">
          {doubled.map((r, i) => (
            <figure
              key={`${r.name}-${i}`}
              className="w-[26rem] shrink-0 rounded-[var(--radius-lg)] border border-black/10 bg-white/70 p-4 shadow-[0_24px_60px_-28px_rgba(0,0,0,0.2)] backdrop-blur-md"
            >
              <div className="mb-5 flex items-center justify-between">
                <StarRating value={5} size="lg" />
                <figcaption className="mt-2 flex items-center gap-3">
                <span>
                  <span className="block text-[0.9375rem] font-semibold text-ink-dark">
                    {r.name}
                  </span>
                  <span className="mt-0.5 flex items-center gap-1 text-sm text-ink-dark/50">
                    <MapPin className="h-3.5 w-3.5 text-olive-deep" />
                    {r.location}, Melbourne
                  </span>
                </span>
              </figcaption>
              </div>
              <blockquote className="text-[1.0625rem] leading-[1.75] text-ink-dark">
                &ldquo;{r.text}&rdquo;
              </blockquote>
            </figure>
          ))}
        </div>
      </div>

      {/* ── Add a review dialog ── */}
      <Dialog
        open={open}
        onOpenChange={(o) => {
          setOpen(o);
          if (!o) {
            setStatus("idle");
            setForm({ name: "", jobId: "", review: "" });
          }
        }}
      >
        <DialogContent>
          {status === "success" ? (
            <div className="py-8 text-center">
              <CheckCircle2 className="mx-auto h-12 w-12 text-olive" />
              <h3 className="mt-5 text-xl font-medium tracking-[-0.01em] text-ink">
                Thank you!
              </h3>
              <p className="mx-auto mt-3 max-w-sm text-sm leading-relaxed text-ink-2">
                Your review has been submitted. We appreciate honest
                feedback — it helps every future Melbourne move.
              </p>
              <Button
                type="button"
                className="mt-7"
                onClick={() => setOpen(false)}
              >
                Done
              </Button>
            </div>
          ) : (
            <DialogHeader>
              <DialogTitle>Add a review</DialogTitle>
              <DialogDescription>
                Had a move with us? Tell others how it went — include your
                job ID so we can verify it.
              </DialogDescription>
            </DialogHeader>
          )}

          {status !== "success" && (
            <form onSubmit={handleSubmit} className="mt-6 space-y-5">
              <div>
                <Label htmlFor="review-name">Your name *</Label>
                <Input
                  id="review-name"
                  required
                  value={form.name}
                  onChange={set("name")}
                  placeholder="Jordan Walsh"
                  autoComplete="name"
                />
              </div>
              <div>
                <Label htmlFor="review-job">Job ID *</Label>
                <Input
                  id="review-job"
                  required
                  value={form.jobId}
                  onChange={set("jobId")}
                  placeholder="e.g. STL-0416"
                  autoComplete="off"
                />
              </div>
              <div>
                <Label htmlFor="review-text">Your review *</Label>
                <Textarea
                  id="review-text"
                  required
                  value={form.review}
                  onChange={set("review")}
                  placeholder="How was your move?"
                  rows={4}
                />
              </div>

              {status === "error" && (
                <p className="flex items-center gap-1.5 text-sm text-red-400">
                  <AlertCircle className="h-4 w-4" />
                  Something went wrong — please try again.
                </p>
              )}

              <Button
                type="submit"
                className="w-full"
                size="lg"
                disabled={!canSubmit || status === "loading"}
              >
                {status === "loading" ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin" />
                    Submitting…
                  </>
                ) : (
                  "Submit review"
                )}
              </Button>
            </form>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
