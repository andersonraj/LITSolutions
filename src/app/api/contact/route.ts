import { NextResponse } from "next/server";
import { Resend } from "resend";

type ContactPayload = {
  fullName?: string;
  email?: string;
  company?: string;
  projectType?: string;
  budget?: string;
  message?: string;
};

export async function POST(request: Request) {
  try {
    const payload = (await request.json()) as ContactPayload;
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      return NextResponse.json(
        { success: false, message: "Email service is not configured." },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);
    const toEmail = process.env.CONTACT_TO_EMAIL || "contact@litsolution.net";
    const fromEmail =
      process.env.RESEND_FROM_EMAIL || "contact@litsolution.net";

    console.log("Contact submission:", {
      ...payload,
      receivedAt: new Date().toISOString(),
    });

    await resend.emails.send({
      from: `LEO IT SOLUTIONS <${fromEmail}>`,
      to: toEmail,
      replyTo: payload.email,
      subject: `New contact request: ${payload.projectType || "General"}`,
      html: `
        <h2>New Contact Request</h2>
        <p><strong>Name:</strong> ${payload.fullName || "-"}</p>
        <p><strong>Email:</strong> ${payload.email || "-"}</p>
        <p><strong>Company:</strong> ${payload.company || "-"}</p>
        <p><strong>Project Type:</strong> ${payload.projectType || "-"}</p>
        <p><strong>Budget:</strong> ${payload.budget || "-"}</p>
        <p><strong>Message:</strong></p>
        <p>${payload.message || "-"}</p>
      `,
      text: [
        "New Contact Request",
        `Name: ${payload.fullName || "-"}`,
        `Email: ${payload.email || "-"}`,
        `Company: ${payload.company || "-"}`,
        `Project Type: ${payload.projectType || "-"}`,
        `Budget: ${payload.budget || "-"}`,
        `Message: ${payload.message || "-"}`,
      ].join("\n"),
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { success: false, message: "Invalid request" },
      { status: 400 }
    );
  }
}
