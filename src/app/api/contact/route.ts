import { NextRequest, NextResponse } from "next/server";
import { sendLeadEmail } from "@/lib/resend";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, phone, email, moveType, fromSuburb, toSuburb, moveDate, message, source } = body;

    // Validate required fields (coerce to strings — body is untyped JSON).
    const lead = {
      name: String(name ?? "").trim(),
      phone: String(phone ?? "").trim(),
      email: String(email ?? ""),
      source: String(source ?? ""),
      moveType: String(moveType ?? ""),
      fromSuburb: String(fromSuburb ?? ""),
      toSuburb: String(toSuburb ?? ""),
      moveDate: String(moveDate ?? ""),
      message: String(message ?? ""),
    };

    if (!lead.name || !lead.phone) {
      return NextResponse.json(
        { success: false, message: "Name and phone are required." },
        { status: 400 }
      );
    }

    // Always log the submission (ops trail).
    console.log("=== Stellar — New Form Submission ===");
    console.log("Source:", lead.source || "General");
    console.log("Name:", lead.name);
    console.log("Phone:", lead.phone);
    console.log("Email:", lead.email || "N/A");
    console.log("Move Type:", lead.moveType || "N/A");
    console.log("From:", lead.fromSuburb || "N/A");
    console.log("To:", lead.toSuburb || "N/A");
    console.log("Date:", lead.moveDate || "N/A");
    console.log("Message:", lead.message || "N/A");
    console.log("=====================================");

    // Deliver to the ops inbox via Resend when RESEND_API_KEY is set.
    // Without the key (local dev / preview) this no-ops — the log
    // above remains the record, and the submission is still accepted.
    const emailed = await sendLeadEmail(lead);
    if (!emailed && process.env.RESEND_API_KEY) {
      // Key configured but delivery failed — surface as a server error
      // rather than silently dropping a lead.
      console.error("Lead email delivery failed; submission still logged.");
      return NextResponse.json(
        {
          success: false,
          message: "Something went wrong. Please try again or call us directly.",
        },
        { status: 502 }
      );
    }

    return NextResponse.json({
      success: true,
      message:
        "Thank you! We'll get back to you shortly. For immediate assistance, call +61 416 828 199.",
    });
  } catch (error) {
    console.error("Form submission error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong. Please try again or call us directly.",
      },
      { status: 500 }
    );
  }
}
