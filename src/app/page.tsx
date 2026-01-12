import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Bot,
  Code2,
  Layers,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { AuroraBackground } from "@/components/motion/aurora";
import { Parallax } from "@/components/motion/parallax";
import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { processSteps, services, techStack, whyChooseUs } from "@/lib/constants";

const serviceIcons = [Code2, Layers, Bot, ShieldCheck];

export default function Home() {
  return (
    <div className="flex flex-col">
      <section className="relative isolate overflow-hidden pb-20 pt-16 lg:pb-28 lg:pt-24">
        <AuroraBackground />
        <div className="relative z-10 mx-auto w-full max-w-6xl px-6">
          <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="space-y-6">
              <Reveal>
                <p className="text-sm uppercase tracking-[0.35em] text-muted-foreground">
                  Global IT services
                </p>
              </Reveal>
              <Reveal delay={0.05}>
                <h1 className="text-4xl font-semibold leading-tight text-balance sm:text-5xl lg:text-6xl">
                  Global Web, App &amp; IT Solutions Built for Modern Businesses
                </h1>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="max-w-xl text-base text-muted-foreground sm:text-lg">
                  We design and build professional websites, web applications, and custom IT solutions that help businesses grow, automate, and scale.
                </p>
              </Reveal>
              <Reveal delay={0.15}>
                <div className="flex flex-wrap gap-3">
                  <Button asChild size="lg">
                    <Link href="/contact">Get a Free Consultation</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link href="/services">View Services</Link>
                  </Button>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="glass" size="lg">
                        Delivery Standards
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Premium Delivery Standards</DialogTitle>
                        <DialogDescription>
                          Built to keep stakeholders aligned and launches smooth.
                        </DialogDescription>
                      </DialogHeader>
                      <div className="space-y-3 text-sm text-muted-foreground">
                        <p>Dedicated project lead and weekly progress updates.</p>
                        <p>Performance, accessibility, and SEO checks included.</p>
                        <p>Secure deployment workflows with rollback strategy.</p>
                        <p>Post-launch support to ensure stability and growth.</p>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </Reveal>
              <Reveal delay={0.2}>
                <div className="grid gap-4 pt-6 sm:grid-cols-3">
                  {[
                    {
                      label: "Remote-first",
                      value: "Global teams",
                    },
                    {
                      label: "Response",
                      value: "24-48 hrs",
                    },
                    {
                      label: "Delivery",
                      value: "Modern stack",
                    },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="glass-panel rounded-2xl px-4 py-3 text-sm"
                    >
                      <p className="text-muted-foreground">{item.label}</p>
                      <p className="font-semibold text-foreground">{item.value}</p>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
            <Reveal delay={0.2}>
              <Parallax>
                <div className="relative mx-auto max-w-md">
                  <div className="absolute inset-0 rounded-[48px] bg-primary/10 blur-3xl" />
                  <div className="relative rounded-[48px] border border-border/60 bg-card/60 p-6 shadow-glow">
                    <Image
                      src="/hero-orb.svg"
                      alt="Abstract tech orb"
                      width={600}
                      height={600}
                      priority
                      sizes="(min-width: 1024px) 480px, 80vw"
                      className="h-auto w-full"
                    />
                  </div>
                </div>
              </Parallax>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="relative py-20">
        <div className="mx-auto w-full max-w-6xl px-6">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">
                  Services
                </p>
                <h2 className="mt-2 text-3xl font-semibold sm:text-4xl">
                  Premium solutions tailored to your business
                </h2>
              </div>
              <Button asChild variant="ghost">
                <Link href="/services" className="inline-flex items-center gap-2">
                  Explore all services <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {services.map((service, index) => {
              const Icon = serviceIcons[index];
              return (
                <Reveal key={service.title} delay={index * 0.05}>
                  <Card className="tilt-card group relative overflow-hidden">
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
                    </CardContent>
                  </Card>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative py-20">
        <div className="mx-auto w-full max-w-6xl px-6">
          <Reveal>
            <div className="max-w-2xl">
              <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">
                How we work
              </p>
              <h2 className="mt-2 text-3xl font-semibold sm:text-4xl">
                A clear, modern delivery process
              </h2>
            </div>
          </Reveal>
          <div className="mt-10 grid gap-4 md:grid-cols-5">
            {processSteps.map((step, index) => (
              <Reveal key={step.title} delay={index * 0.05}>
                <Card className="h-full">
                  <CardContent>
                    <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                      Step {index + 1}
                    </p>
                    <CardTitle className="mt-3 text-lg">
                      {step.title}
                    </CardTitle>
                    <CardDescription className="mt-2 text-sm">
                      {step.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <Reveal>
              <div className="space-y-6">
                <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">
                  Technology
                </p>
                <h2 className="text-3xl font-semibold sm:text-4xl">
                  A future-ready stack for performance and scale
                </h2>
                <p className="text-base text-muted-foreground">
                  We provide secure, managed hosting solutions using modern cloud infrastructure, with monitoring, backups, and scalability built in.
                </p>
                <div className="rounded-3xl border border-border/60 bg-card/60 p-6">
                  <div className="flex items-start gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/15 text-primary">
                      <Sparkles className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-sm font-semibold">Always production-grade</p>
                      <p className="text-sm text-muted-foreground">
                        Secure deployments, monitoring, and performance tuning are standard.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="grid gap-4">
                {techStack.map((group) => (
                  <Card key={group.category}>
                    <CardContent>
                      <CardTitle className="text-base">
                        {group.category}
                      </CardTitle>
                      <CardDescription className="mt-2 text-sm">
                        {group.items.join(" · ")}
                      </CardDescription>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="relative py-20">
        <div className="mx-auto w-full max-w-6xl px-6">
          <Reveal>
            <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="space-y-6">
                <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">
                  Why choose us
                </p>
                <h2 className="text-3xl font-semibold sm:text-4xl">
                  Global service with modern, cost-effective delivery
                </h2>
                <p className="text-base text-muted-foreground">
                  We operate as a remote-first partner so you get senior engineering without agency overhead.
                </p>
                <ul className="grid gap-3 text-sm text-muted-foreground sm:grid-cols-2">
                  {whyChooseUs.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="text-sm text-muted-foreground">
                  We focus on solutions that deliver real value — not unnecessary complexity.
                </p>
              </div>
              <div className="space-y-4">
                {["Strategy", "Design", "Engineering"].map((label, index) => (
                  <Reveal key={label} delay={index * 0.05}>
                    <Card className="tilt-card">
                      <CardContent>
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-lg">{label}</CardTitle>
                          <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                            Precision
                          </span>
                        </div>
                        <CardDescription className="mt-2 text-sm">
                          We keep every phase aligned to outcomes, ensuring each build is ready to scale globally.
                        </CardDescription>
                      </CardContent>
                    </Card>
                  </Reveal>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="relative pb-24 pt-10">
        <div className="mx-auto w-full max-w-6xl px-6">
          <Reveal>
            <div className="glass-panel rounded-[32px] p-10 md:p-14">
              <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
                <div className="space-y-3">
                  <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">
                    Ready to build
                  </p>
                  <h2 className="text-3xl font-semibold sm:text-4xl">
                    Launch your next digital initiative with LEO IT SOLUTIONS
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    Tell us about your goals and we will map a plan built for speed, clarity, and ROI.
                  </p>
                </div>
                <Button asChild size="lg">
                  <Link href="/contact" className="inline-flex items-center gap-2">
                    Get a Free Consultation <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
