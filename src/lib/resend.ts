import { Resend } from "resend";

/**
 * Resend client — transactional email for lead notifications.
 *
 * Deliberately safe-by-default: if `RESEND_API_KEY` is not set (local
 * dev, preview), `sendLeadEmail` no-ops with `false` and the API route
 * falls back to its console-log behaviour. Nothing throws, no crash.
 *
 * Configure in `.env.local`:
 *   RESEND_API_KEY=re_...
 *   RESEND_FROM_EMAIL="Stellar Removals <hello@stellarremovals.com.au>"
 *   RESEND_TO_EMAIL=ops@stellarremovals.com.au
 */

const apiKey = process.env.RESEND_API_KEY;

/** Never initialised when the key is absent — zero cost otherwise. */
const resend = apiKey ? new Resend(apiKey) : null;

export const RESEND_FROM =
  process.env.RESEND_FROM_EMAIL ?? "Stellar Removals <onboarding@resend.dev>";

export const RESEND_TO = process.env.RESEND_TO_EMAIL ?? "ops@stellarremovals.com.au";

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
 * success, `false` when disabled (no key) or on delivery failure so
 * the route can decide whether a failure is fatal.
 */
export async function sendLeadEmail(lead: LeadEmail): Promise<boolean> {
  if (!resend) return false;

  const lines = [
    `<strong>Source:</strong> ${lead.source || "General"}`,
    `<strong>Name:</strong> ${lead.name}`,
    `<strong>Phone:</strong> ${lead.phone}`,
    `<strong>Email:</strong> ${lead.email || "—"}`,
    `<strong>Move type:</strong> ${lead.moveType || "—"}`,
    `<strong>From:</strong> ${lead.fromSuburb || "—"}`,
    `<strong>To:</strong> ${lead.toSuburb || "—"}`,
    `<strong>Date:</strong> ${lead.moveDate || "—"}`,
    lead.message ? `<p style="margin-top:12px;white-space:pre-wrap">${lead.message}</p>` : "",
  ].join("<br />");

  const { error } = await resend.emails.send({
    from: RESEND_FROM,
    to: RESEND_TO,
    subject: `New lead — ${lead.name} (${lead.source || "form"})`,
    html: `<div style="font-family:system-ui,sans-serif;font-size:14px;line-height:1.6">${lines}</div>`,
  });

  if (error) {
    console.error("Resend delivery error:", error);
    return false;
  }
  return true;
}
