import type { Metadata } from "next";
import { Mail, MapPin } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { ContactForm } from "@/components/contact-form";
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Request a consultation with LEO IT SOLUTIONS for web development, automation, and IT services.",
};

export default function ContactPage() {
  return (
    <div className="flex flex-col gap-16 pb-24 pt-16">
      <section className="mx-auto w-full max-w-6xl px-6">
        <Reveal>
          <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">
            Contact
          </p>
          <h1 className="mt-3 text-4xl font-semibold sm:text-5xl">
            Let us plan your next digital initiative
          </h1>
          <p className="mt-4 max-w-2xl text-base text-muted-foreground">
            Share a few details and we will follow up with a tailored proposal and timeline.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <Reveal>
            <Card>
              <CardContent>
                <CardTitle className="text-2xl">Start your request</CardTitle>
                <CardDescription className="mt-2 text-sm">
                  We respond within 1-2 business days.
                </CardDescription>
                <div className="mt-6">
                  <ContactForm />
                </div>
              </CardContent>
            </Card>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="space-y-6">
              <Card>
                <CardContent>
                  <div className="flex items-start gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/15 text-primary">
                      <Mail className="h-5 w-5" />
                    </span>
                    <div>
                      <CardTitle className="text-lg">Email</CardTitle>
                      <CardDescription className="mt-1 text-sm">
                        contact@litsolution.net
                      </CardDescription>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent>
                  <div className="flex items-start gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/15 text-primary">
                      <MapPin className="h-5 w-5" />
                    </span>
                    <div>
                      <CardTitle className="text-lg">Global delivery</CardTitle>
                      <CardDescription className="mt-1 text-sm">
                        Remote-first teams serving clients worldwide.
                      </CardDescription>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent>
                  <CardTitle className="text-lg">Project coverage</CardTitle>
                  <CardDescription className="mt-2 text-sm">
                    Websites, web apps, automation, IT systems, and ongoing maintenance.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
