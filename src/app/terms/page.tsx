import type { Metadata } from "next";
import { Reveal } from "@/components/motion/reveal";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of service for LEO IT SOLUTIONS.",
};

export default function TermsPage() {
  return (
    <div className="flex flex-col gap-12 pb-24 pt-16">
      <section className="mx-auto w-full max-w-4xl px-6">
        <Reveal>
          <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">
            Terms
          </p>
          <h1 className="mt-3 text-4xl font-semibold sm:text-5xl">
            Terms of Service
          </h1>
          <p className="mt-4 text-base text-muted-foreground">
            By engaging LEO IT SOLUTIONS, you agree to the following service terms.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto w-full max-w-4xl space-y-8 px-6 text-sm text-muted-foreground">
        <Reveal>
          <div className="space-y-2">
            <h2 className="text-lg font-semibold text-foreground">Scope of work</h2>
            <p>
              All work is scoped in writing before engagement. Changes outside the agreed scope may require a revised proposal.
            </p>
          </div>
        </Reveal>
        <Reveal>
          <div className="space-y-2">
            <h2 className="text-lg font-semibold text-foreground">Payments</h2>
            <p>
              Project payments follow the schedule outlined in your proposal or statement of work.
            </p>
          </div>
        </Reveal>
        <Reveal>
          <div className="space-y-2">
            <h2 className="text-lg font-semibold text-foreground">Intellectual property</h2>
            <p>
              Upon full payment, clients receive rights to the delivered work as outlined in the agreement.
            </p>
          </div>
        </Reveal>
        <Reveal>
          <div className="space-y-2">
            <h2 className="text-lg font-semibold text-foreground">Confidentiality</h2>
            <p>
              Both parties agree to keep sensitive business information confidential.
            </p>
          </div>
        </Reveal>
        <Reveal>
          <div className="space-y-2">
            <h2 className="text-lg font-semibold text-foreground">Service availability</h2>
            <p>
              Ongoing support is provided according to the selected maintenance plan or consulting agreement.
            </p>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
