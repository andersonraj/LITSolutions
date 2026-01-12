import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BadgeDollarSign, Layers3, Shield } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Transparent pricing for websites, web apps, automation, and managed support from LEO IT SOLUTIONS.",
};

const websitePricing = [
  "Basic website — from $500 USD",
  "Standard business website — from $800 USD",
  "Advanced/custom website — from $1,500 USD",
];

const webAppsPricing = [
  "MVP / Phase-1 app — from $800 USD",
  "Dashboards & internal tools — from $1,000 USD",
];

const automationPricing = [
  "Small automations — from $300 USD",
  "Custom IT systems — from $800 USD",
];

const maintenancePlans = [
  {
    title: "Starter",
    price: "$75/month",
    details: ["Monitoring", "Security updates", "Small content changes"],
  },
  {
    title: "Growth",
    price: "$150/month",
    details: [
      "Everything in Starter",
      "Speed optimization",
      "Monthly improvements",
      "Priority support",
    ],
  },
  {
    title: "Pro",
    price: "$300/month",
    details: [
      "Automation support",
      "Analytics & reporting",
      "Feature updates",
      "Fast response times",
    ],
  },
];

const faqItems = [
  {
    title: "Do you offer custom pricing for enterprise?",
    content:
      "Yes. We scope global initiatives with dedicated teams and a custom delivery plan tailored to your internal processes.",
  },
  {
    title: "What does hourly consulting include?",
    content:
      "Use hourly support for audits, fixes, short-term consulting, and advisory work on existing systems.",
  },
  {
    title: "Is ongoing support required?",
    content:
      "Not required, but we recommend a maintenance plan to keep performance, security, and uptime optimized.",
  },
];

export default function PricingPage() {
  return (
    <div className="flex flex-col gap-20 pb-24 pt-16">
      <section className="mx-auto w-full max-w-6xl px-6">
        <Reveal>
          <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">
            Pricing
          </p>
          <h1 className="mt-3 text-4xl font-semibold sm:text-5xl">
            Transparent pricing for premium delivery
          </h1>
          <p className="mt-4 max-w-2xl text-base text-muted-foreground">
            Every project includes discovery, clean implementation, and launch support. Exact scope is confirmed before we begin.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6">
        <div className="grid gap-6 lg:grid-cols-3">
          <Reveal>
            <Card className="h-full">
              <CardContent>
                <div className="flex items-center justify-between">
                  <CardTitle>Websites</CardTitle>
                  <Layers3 className="h-5 w-5 text-primary" />
                </div>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  {websitePricing.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </Reveal>
          <Reveal delay={0.05}>
            <Card className="h-full">
              <CardContent>
                <div className="flex items-center justify-between">
                  <CardTitle>Web Apps & Tools</CardTitle>
                  <Shield className="h-5 w-5 text-primary" />
                </div>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  {webAppsPricing.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </Reveal>
          <Reveal delay={0.1}>
            <Card className="h-full">
              <CardContent>
                <div className="flex items-center justify-between">
                  <CardTitle>Automation & IT</CardTitle>
                  <BadgeDollarSign className="h-5 w-5 text-primary" />
                </div>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  {automationPricing.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6">
        <Reveal>
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <Card className="h-full">
              <CardContent>
                <CardTitle>Hourly Consulting</CardTitle>
                <CardDescription className="mt-2 text-sm">
                  $30–50 USD / hour (for fixes, audits, short-term consulting)
                </CardDescription>
                <Button asChild className="mt-6">
                  <Link href="/contact" className="inline-flex items-center gap-2">
                    Book a consultation <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="h-full">
              <CardContent>
                <CardTitle>What is included</CardTitle>
                <CardDescription className="mt-2 text-sm">
                  Every engagement includes documentation, QA checks, and a launch handoff.
                </CardDescription>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  {["Discovery workshop", "Delivery roadmap", "Launch checklist"].map(
                    (item) => (
                      <li key={item} className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                        {item}
                      </li>
                    )
                  )}
                </ul>
              </CardContent>
            </Card>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6">
        <Reveal>
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">
              Maintenance packages
            </p>
            <h2 className="text-3xl font-semibold sm:text-4xl">
              Ongoing care for mission-critical platforms
            </h2>
          </div>
        </Reveal>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {maintenancePlans.map((plan, index) => (
            <Reveal key={plan.title} delay={index * 0.05}>
              <Card className="h-full">
                <CardContent>
                  <div className="flex items-center justify-between">
                    <CardTitle>{plan.title}</CardTitle>
                    <span className="text-sm font-semibold text-primary">
                      {plan.price}
                    </span>
                  </div>
                  <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                    {plan.details.map((detail) => (
                      <li key={detail} className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6">
        <Reveal>
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">
              FAQs
            </p>
            <h2 className="text-3xl font-semibold sm:text-4xl">
              Pricing questions answered
            </h2>
          </div>
        </Reveal>
        <div className="mt-8">
          <Accordion type="single" collapsible>
            {faqItems.map((item) => (
              <AccordionItem key={item.title} value={item.title}>
                <AccordionTrigger>{item.title}</AccordionTrigger>
                <AccordionContent>{item.content}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </div>
  );
}
