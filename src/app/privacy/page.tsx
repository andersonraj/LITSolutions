import type { Metadata } from "next";
import { Reveal } from "@/components/motion/reveal";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for LEO IT SOLUTIONS.",
};

export default function PrivacyPage() {
  return (
    <div className="flex flex-col gap-12 pb-24 pt-16">
      <section className="mx-auto w-full max-w-4xl px-6">
        <Reveal>
          <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">
            Privacy
          </p>
          <h1 className="mt-3 text-4xl font-semibold sm:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-4 text-base text-muted-foreground">
            This policy explains how LEO IT SOLUTIONS collects, uses, and protects your information.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto w-full max-w-4xl space-y-8 px-6 text-sm text-muted-foreground">
        <Reveal>
          <div className="space-y-2">
            <h2 className="text-lg font-semibold text-foreground">Information we collect</h2>
            <p>
              We collect information you submit through our contact forms, including name, email, company, and project details.
            </p>
          </div>
        </Reveal>
        <Reveal>
          <div className="space-y-2">
            <h2 className="text-lg font-semibold text-foreground">How we use data</h2>
            <p>
              Data is used to respond to inquiries, prepare proposals, and deliver services. We do not sell personal information.
            </p>
          </div>
        </Reveal>
        <Reveal>
          <div className="space-y-2">
            <h2 className="text-lg font-semibold text-foreground">Security</h2>
            <p>
              We apply industry-standard security practices to protect data. Access is limited to authorized team members.
            </p>
          </div>
        </Reveal>
        <Reveal>
          <div className="space-y-2">
            <h2 className="text-lg font-semibold text-foreground">Third-party services</h2>
            <p>
              We may use analytics or infrastructure providers to operate the website. These providers process data under strict agreements.
            </p>
          </div>
        </Reveal>
        <Reveal>
          <div className="space-y-2">
            <h2 className="text-lg font-semibold text-foreground">Contact</h2>
            <p>
              Questions about privacy can be sent to hello@litsolutions.com.
            </p>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
