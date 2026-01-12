import type { Metadata } from "next";
import { Globe2, Rocket, Users } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn more about LEO IT SOLUTIONS, a global remote-first IT services firm delivering premium digital experiences.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col gap-20 pb-24 pt-16">
      <section className="mx-auto w-full max-w-6xl px-6">
        <Reveal>
          <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">
            About
          </p>
          <h1 className="mt-3 text-4xl font-semibold sm:text-5xl">
            A modern, global IT partner
          </h1>
          <p className="mt-4 max-w-2xl text-base text-muted-foreground">
            LEO IT Solutions is a modern IT services firm focused on building reliable digital solutions for businesses worldwide.
            We believe technology should be simple, efficient, and aligned with real business needs.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Global reach",
              description:
                "Remote-first delivery with clear communication across time zones.",
              icon: Globe2,
            },
            {
              title: "Senior execution",
              description:
                "Experienced engineers building modern, scalable systems.",
              icon: Users,
            },
            {
              title: "Outcome driven",
              description:
                "Solutions that prioritize measurable impact and growth.",
              icon: Rocket,
            },
          ].map((item, index) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.title} delay={index * 0.05}>
                <Card className="group h-full">
                  <CardContent>
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/15 text-primary">
                      <Icon className="h-6 w-6 transition duration-300 group-hover:-rotate-6 group-hover:scale-110" />
                    </span>
                    <CardTitle className="mt-6">{item.title}</CardTitle>
                    <CardDescription className="mt-2 text-sm">
                      {item.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="mx-auto w-full max-w-4xl px-6">
        <Reveal>
          <Card>
            <CardContent>
              <CardTitle className="text-2xl">Our commitment</CardTitle>
              <CardDescription className="mt-3 text-base">
                We partner closely with stakeholders to translate goals into clean digital execution, combining strategy, design, and engineering.
                The result is a modern tech agency experience without agency overhead.
              </CardDescription>
            </CardContent>
          </Card>
        </Reveal>
      </section>
    </div>
  );
}
