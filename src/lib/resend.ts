import { Resend } from "resend";

/**
 * Resend client — transactional email for lead + review notifications.
 *
 * DESIGN
 * ------
 * - Safe-by-default: if `RESEND_API_KEY` is missing (local dev, preview)
 *   the send helpers no-op with `false` and API routes fall back to their
 *   console-log behaviour. Nothing throws, no crash.
 * - Dual-path delivery: we try the branded `RESEND_FROM_EMAIL` first
 *   (e.g. hello@stellarremovals.com.au). While the sending domain is
 *   pending DNS verification Resend rejects branded sends, so on error
 *   we automatically retry via `onboarding@resend.dev` to
 *   `RESEND_ACCOUNT_EMAIL` (the account owner's inbox) — leads are
 *   never silently dropped. Once DNS is verified, the branded path
 *   succeeds and the fallback is never used.
 * - `replyTo` is set to the customer's email when provided, so the ops
 *   team can reply straight from the notification.
 *
 * Configure in `.env`:
 *   RESEND_API_KEY=re_...
 *   RESEND_FROM_EMAIL="Stellar Removals <hello@stellarremovals.com.au>"
 *   RESEND_TO_EMAIL=ops@stellarremovals.com.au
 *   RESEND_ACCOUNT_EMAIL=batraaryan03@gmail.com   // fallback inbox
 */

const apiKey = process.env.RESEND_API_KEY;

/** Never initialised when the key is absent — zero cost otherwise. */
const resend = apiKey ? new Resend(apiKey) : null;

export const RESEND_FROM =
  process.env.RESEND_FROM_EMAIL ?? "Stellar Removals <hello@stellarremovals.com.au>";

export const RESEND_TO = process.env.RESEND_TO_EMAIL ?? "ops@stellarremovals.com.au";

/** While the domain is unverified, Resend only delivers to the account
 *  owner's email — this is that inbox. */
export const RESEND_ACCOUNT_EMAIL =
  process.env.RESEND_ACCOUNT_EMAIL ?? "batraaryan03@gmail.com";

/** Fallback sender used only while the sending domain is pending DNS
 *  verification (Resend requires `onboarding@resend.dev` until a
 *  domain is verified). Overridable via env. */
export const RESEND_FALLBACK_FROM =
  process.env.RESEND_FALLBACK_FROM ?? "Stellar Removals <onboarding@resend.dev>";

/* ── Escaping — never inject raw user input into the HTML body ── */
const esc = (v: string): string =>
  v
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

/* ── Plain-text fallback (deliverability + accessibility — email
   clients and spam filters treat text/plain as a first-class part) ── */
const textBody = (lines: string[]): string => lines.join("\n");

/* ── Branded email shell (inline styles — email-safe) ─────────── */
const emailShell = (title: string, rows: string, note: string) => `
  <div style="font-family:system-ui,-apple-system,'Segoe UI',Roboto,sans-serif;background:#f2f0e9;padding:32px 16px;">
    <div style="max-width:560px;margin:0 auto;background:#ffffff;border-radius:16px;overflow:hidden;border:1px solid #e5e2d6;">
      <div style="background:#4b5320;padding:20px 28px;">
        <span style="color:#f5f3ea;font-size:18px;font-weight:700;letter-spacing:0.04em;">STELLAR</span>
        <span style="color:#a8b068;font-size:13px;font-weight:500;letter-spacing:0.14em;margin-left:10px;text-transform:uppercase;">Removals · Melbourne</span>
      </div>
      <div style="padding:28px;">
        <h2 style="margin:0 0 18px;color:#1c1c18;font-size:19px;line-height:1.3;">${title}</h2>
        <table role="presentation" cellpadding="0" cellspacing="0" style="width:100%;border-collapse:collapse;">
          ${rows}
        </table>
        <p style="margin:22px 0 0;color:#8a8a7a;font-size:12px;line-height:1.6;border-top:1px solid #eeeae0;padding-top:16px;">
          ${note}
        </p>
      </div>
    </div>
  </div>
`;

const row = (label: string, value: string) => `
  <tr>
    <td style="padding:7px 12px 7px 0;color:#8a8a7a;font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:0.08em;white-space:nowrap;vertical-align:top;width:110px;">${label}</td>
    <td style="padding:7px 0;color:#2a2a24;font-size:14px;font-weight:500;vertical-align:top;">${value}</td>
  </tr>
`;

export interface LeadEmail {
  name: string;
  phone: string;
  email?: string;
  source?: string;
  moveType?: string;
  fromSuburb?: string;
  toSuburb?: string;
  moveDate?: string;
  message?: string;
}

/**
 * Send a lead notification to the ops inbox. Returns `true` on
 * success, `false` when disabled (no key) or when every delivery path
 * fails, so the route can decide whether a failure is fatal.
 */
export async function sendLeadEmail(lead: LeadEmail): Promise<boolean> {
  const rows = [
    row("Source", esc(lead.source || "General form")),
    row("Name", esc(lead.name)),
    row("Phone", esc(lead.phone)),
    row("Email", esc(lead.email || "—")),
    row("Move", esc(lead.moveType || "—")),
    row("From", esc(lead.fromSuburb || "—")),
    row("To", esc(lead.toSuburb || "—")),
    row("Date", esc(lead.moveDate || "—")),
  ].join("");

  const note = `Sent via stellarremovals.com.au · ${new Date().toLocaleString("en-AU")}`;
  const html = emailShell(
    `New ${esc(lead.source || "lead")} from ${esc(lead.name)}`,
    rows + (lead.message ? `<tr><td style="padding:14px 12px 0 0;color:#8a8a7a;font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:0.08em;vertical-align:top;width:110px;">Note</td><td style="padding:14px 0 0;color:#2a2a24;font-size:14px;line-height:1.6;white-space:pre-wrap;vertical-align:top;">${esc(lead.message)}</td></tr>` : ""),
    note
  );

  const text = textBody([
    `New ${lead.source || "lead"} from ${lead.name}`,
    "",
    `Source: ${lead.source || "General form"}`,
    `Name: ${lead.name}`,
    `Phone: ${lead.phone}`,
    `Email: ${lead.email || "—"}`,
    `Move: ${lead.moveType || "—"}`,
    `From: ${lead.fromSuburb || "—"}`,
    `To: ${lead.toSuburb || "—"}`,
    `Date: ${lead.moveDate || "—"}`,
    lead.message ? `Note: ${lead.message}` : "",
  ]);

  return deliver({
    subject: `New lead — ${lead.name} (${lead.source || "form"})`,
    html,
    text,
    replyTo: lead.email || undefined,
    tag: lead.source || "lead",
  });
}

export interface ReviewEmail {
  name: string;
  jobId: string;
  review: string;
  source?: string;
}

/**
 * Send a review-submission notification to the ops inbox (for
 * approval + publishing later). Same dual-path delivery as leads.
 */
export async function sendReviewEmail(review: ReviewEmail): Promise<boolean> {
  const html = emailShell(
    `New review from ${esc(review.name)}`,
    row("Name", esc(review.name)) +
      row("Job ID", esc(review.jobId)) +
      row("Source", esc(review.source || "reviews-section")) +
      `<tr><td style="padding:14px 12px 0 0;color:#8a8a7a;font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:0.08em;vertical-align:top;width:110px;">Review</td><td style="padding:14px 0 0;color:#2a2a24;font-size:14px;line-height:1.7;white-space:pre-wrap;vertical-align:top;">&ldquo;${esc(review.review)}&rdquo;</td></tr>`,
    `Sent via stellarremovals.com.au · ${new Date().toLocaleString("en-AU")}`
  );

  const text = textBody([
    `New review from ${review.name}`,
    "",
    `Name: ${review.name}`,
    `Job ID: ${review.jobId}`,
    `Source: ${review.source || "reviews-section"}`,
    `Review: \u201C${review.review}\u201D`,
  ]);

  return deliver({
    subject: `New review — ${review.name} (Job ${review.jobId})`,
    html,
    text,
    tag: "review",
  });
}

/* ── Shared delivery with branded → onboarding fallback ────────── */
interface DeliverArgs {
  subject: string;
  html: string;
  text?: string;
  replyTo?: string;
  tag?: string;
}

async function deliver({ subject, html, text, replyTo, tag }: DeliverArgs): Promise<boolean> {
  if (!resend) return false;

  const common = {
    html,
    ...(text ? { text } : {}),
    ...(replyTo ? { replyTo } : {}),
    // Tags show up as filterable metadata in the Resend dashboard —
    // lets ops see every lead by source (quote-wizard, contact-page,
    // book-move-page, review) at a glance.
    ...(tag ? { tags: [{ name: "source", value: tag }] } : {}),
  };

  // Path 1 — branded domain (works once DNS is verified).
  const primary = await resend.emails.send({
    from: RESEND_FROM,
    to: [RESEND_TO],
    subject,
    ...common,
  });

  if (!primary.error) return true;

  // Path 2 — onboarding fallback while the domain is pending DNS
  // verification. Resend only allows this address to reach the account
  // owner's inbox. The `(via fallback)` marker keeps the ops trail clear.
  console.warn(
    `Resend branded send rejected (${primary.error.name}: ${primary.error.message}) — trying onboarding fallback.`
  );

  const fallback = await resend.emails.send({
    from: RESEND_FALLBACK_FROM,
    to: [RESEND_ACCOUNT_EMAIL],
    subject: `${subject} (via fallback)`,
    ...common,
  });

  if (fallback.error) {
    console.error("Resend delivery failed on all paths:", fallback.error);
    return false;
  }
  return true;
}
