import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const payload = await request.json();

    console.log("Contact submission:", {
      ...payload,
      receivedAt: new Date().toISOString(),
    });

    // TODO: Integrate Resend or SendGrid to deliver email notifications.

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { success: false, message: "Invalid request" },
      { status: 400 }
    );
  }
}
