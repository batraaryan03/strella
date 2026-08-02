import { NextRequest, NextResponse } from "next/server";
import { sendReviewEmail } from "@/lib/resend";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, jobId, review, source } = body;

    const submission = {
      name: String(name ?? "").trim(),
      jobId: String(jobId ?? "").trim(),
      review: String(review ?? "").trim(),
      source: String(source ?? ""),
    };

    if (!submission.name || !submission.jobId || !submission.review) {
      return NextResponse.json(
        { success: false, message: "Name, job ID, and review are required." },
        { status: 400 }
      );
    }

    // Always log the submission (ops trail) — the review is captured here
    // so it can be routed to the team for approval + publishing later.
    console.log("=== Stellar — New Review Submission ===");
    console.log("Source:", submission.source || "reviews-section");
    console.log("Name:", submission.name);
    console.log("Job ID:", submission.jobId);
    console.log("Review:", submission.review);
    console.log("========================================");

    // Notify the ops inbox via Resend. Failure here is not fatal to
    // the submission — the log above remains the record — but it is
    // surfaced as a 502 so the team notices a broken pipeline.
    const emailed = await sendReviewEmail(submission);
    if (!emailed && process.env.RESEND_API_KEY) {
      console.error("Review email delivery failed; submission still logged.");
      return NextResponse.json(
        {
          success: false,
          message: "Something went wrong. Please try again.",
        },
        { status: 502 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Thank you! Your review has been submitted.",
    });
  } catch (error) {
    console.error("Review submission error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong. Please try again.",
      },
      { status: 500 }
    );
  }
}
