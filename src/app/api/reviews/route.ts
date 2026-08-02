import { NextRequest, NextResponse } from "next/server";

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
