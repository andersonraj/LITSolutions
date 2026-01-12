import type { Metadata } from "next";
import Link from "next/link";
import {
  Cpu,
  Globe,
  LayoutDashboard,
  RefreshCcw,
  Shield,
  Wrench,
} from "lucide-react";
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
  title: "Services",
  description:
    "Explore web development, web app engineering, automation, IT solutions, and managed support from LEO IT SOLUTIONS.",
};

const serviceDetails = [
  {
    title: "Web Development",
    icon: Globe,
    description:
      "Business websites, landing pages, portfolio/brand sites, and redesigns delivered with modern responsive design, fast performance, and SEO-friendly structure.",
    bullets: [
      "Modern responsive design",
      "Fast performance",
      "SEO-friendly structure",
      "Secure deployment",
    ],
    price: "From $500 USD",
  },
  {
    title: "Web Apps & Internal Tools",
    icon: LayoutDashboard,
    description:
      "Booking systems, dashboards, admin panels, internal tools, and startup MVPs (Phase 1). We start with a focused MVP and scale as your needs grow.",
    bullets: [
      "User-centric flows",
      "Role-based access",
      "Scalable architecture",
      "Analytics-ready",
    ],
    price: "From $800 USD",
  },
  {
    title: "Automation & IT Solutions",
    icon: Cpu,
    description:
      "Workflow automation, reporting and data tools, inventory tracking systems, CRM setup, and custom scripts or integrations.",
    bullets: [
      "Workflow automation",
      "Reporting and data tools",
      "Inventory tracking",
      "CRM setup",
    ],
    price: "From $300 USD",
  },
  {
    title: "Maintenance & Support",
    icon: Shield,
    description:
      "Secure, fast, updated, and reliable systems with monthly plans for continuous optimization and support.",
    bullets: [
      "Security updates",
      "Performance monitoring",
      "Content updates",
      "Priority support",
    ],
    price: "Monthly plans available",
  },
];

const faqItems = [
  {
    title: "What industries do you work with?",
    content:
      "We support startups, agencies, and enterprises across SaaS, professional services, logistics, real estate, and operational platforms.",
  },
  {
    title: "How fast can a project start?",
    content:
      "Discovery calls can start within 48 hours. Timelines depend on scope, but most web builds launch within 2-6 weeks.",
  },
  {
    title: "Do you provide hosting and monitoring?",
    content:
      "We provide secure, managed hosting solutions using modern cloud infrastructure, with monitoring, backups, and scalability built in.",
  },
  {
    title: "Can you collaborate with in-house teams?",
    content:
      "Absolutely. We integrate with existing teams and provide clear documentation so internal teams can maintain or extend the work.",
  },
];

export default function ServicesPage() {
  return (
    <div className="flex flex-col gap-20 pb-24 pt-16">
      <section className="mx-auto w-full max-w-6xl px-6">
        <Reveal>
          <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">
            Services
          </p>
          <h1 className="mt-3 text-4xl font-semibold sm:text-5xl">
            Full-service digital delivery for modern businesses
          </h1>
          <p className="mt-4 max-w-2xl text-base text-muted-foreground">
            LEO IT SOLUTIONS offers an end-to-end partner model: strategy, design, engineering, and long-term support.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6">
        <div className="grid gap-6 md:grid-cols-2">
          {serviceDetails.map((service) => {
            const Icon = service.icon;
            return (
              <Reveal key={service.title}>
                <Card className="tilt-card group h-full">
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/15 text-primary">
                        <Icon className="h-6 w-6 transition duration-300 group-hover:rotate-6 group-hover:scale-110" />
                      </span>
                      <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                        {service.price}
                      </span>
                    </div>
                    <CardTitle className="mt-6">{service.title}</CardTitle>
                    <CardDescription className="mt-3 text-sm">
                      {service.description}
                    </CardDescription>
                    <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                      {service.bullets.map((item) => (
                        <li key={item} className="flex items-center gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <div className="space-y-4">
              <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">
                Maintenance plans
              </p>
              <h2 className="text-3xl font-semibold sm:text-4xl">
                Ongoing support for stability and growth
              </h2>
              <p className="text-base text-muted-foreground">
                Choose the coverage that aligns with your goals, from simple monitoring to advanced automation support.
              </p>
              <div className="grid gap-3">
                {[
                  "Starter - Monitoring, security updates, small content changes",
                  "Growth - Speed optimization, monthly improvements, priority support",
                  "Pro - Automation support, analytics, feature updates, fast response times",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <RefreshCcw className="h-4 w-4 text-primary" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <Card className="h-full">
              <CardContent>
                <CardTitle className="text-xl">Need a custom scope?</CardTitle>
                <CardDescription className="mt-2 text-sm">
                  Combine services or create a dedicated support plan for global operations.
                </CardDescription>
                <Button asChild className="mt-6 w-full">
                  <Link href="/contact">Request a tailored proposal</Link>
                </Button>
                <div className="mt-6 flex items-start gap-3 rounded-2xl border border-border/60 bg-secondary/40 p-4">
                  <Wrench className="h-5 w-5 text-primary" />
                  <p className="text-sm text-muted-foreground">
                    Transparent pricing and clear scope before any work begins.
                  </p>
                </div>
              </CardContent>
            </Card>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6">
        <Reveal>
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">
              FAQs
            </p>
            <h2 className="text-3xl font-semibold sm:text-4xl">
              Answers to common questions
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
