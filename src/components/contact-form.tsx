"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { CheckCircle2, AlertTriangle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select } from "@/components/ui/select";
import { Button } from "@/components/ui/button";

const projectTypes = [
  "Website",
  "Web App",
  "Automation/IT",
  "Maintenance",
  "Consulting",
];

const budgets = ["<$500", "$500–$1k", "$1k–$3k", "$3k+"];

const contactSchema = z.object({
  fullName: z.string().min(2, "Full name is required"),
  email: z.string().email("Enter a valid email"),
  company: z.string().optional(),
  projectType: z.enum([
    "Website",
    "Web App",
    "Automation/IT",
    "Maintenance",
    "Consulting",
  ]),
  budget: z.enum(["<$500", "$500–$1k", "$1k–$3k", "$3k+"]),
  message: z.string().min(10, "Tell us a little about your project"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

type Status = "idle" | "success" | "error";

export function ContactForm() {
  const reduceMotion = useReducedMotion();
  const [status, setStatus] = React.useState<Status>("idle");
  const [statusMessage, setStatusMessage] = React.useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      projectType: "Website",
      budget: "$500–$1k",
    },
  });

  const onSubmit = async (values: ContactFormValues) => {
    setStatus("idle");
    setStatusMessage(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error("Submission failed");
      }

      setStatus("success");
      setStatusMessage("Thanks! Your request is in. We will respond shortly.");
      reset();
    } catch {
      setStatus("error");
      setStatusMessage("Something went wrong. Please try again.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6"
      aria-live="polite"
    >
      <div className="grid gap-5 md:grid-cols-2">
        <div className="space-y-2">
          <label htmlFor="fullName" className="text-sm font-medium">
            Full Name
          </label>
          <Input
            id="fullName"
            type="text"
            placeholder="Jordan Lee"
            {...register("fullName")}
          />
          {errors.fullName ? (
            <p className="text-xs text-destructive">{errors.fullName.message}</p>
          ) : null}
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium">
            Email
          </label>
          <Input
            id="email"
            type="email"
            placeholder="you@company.com"
            {...register("email")}
          />
          {errors.email ? (
            <p className="text-xs text-destructive">{errors.email.message}</p>
          ) : null}
        </div>
        <div className="space-y-2">
          <label htmlFor="company" className="text-sm font-medium">
            Company (optional)
          </label>
          <Input
            id="company"
            type="text"
            placeholder="Company name"
            {...register("company")}
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="projectType" className="text-sm font-medium">
            Project Type
          </label>
          <Select id="projectType" {...register("projectType")}>
            {projectTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </Select>
        </div>
        <div className="space-y-2">
          <label htmlFor="budget" className="text-sm font-medium">
            Budget
          </label>
          <Select id="budget" {...register("budget")}>
            {budgets.map((budget) => (
              <option key={budget} value={budget}>
                {budget}
              </option>
            ))}
          </Select>
        </div>
      </div>
      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium">
          Message
        </label>
        <Textarea
          id="message"
          placeholder="Tell us about goals, timeline, and scope."
          {...register("message")}
        />
        {errors.message ? (
          <p className="text-xs text-destructive">{errors.message.message}</p>
        ) : null}
      </div>

      <AnimatePresence mode="wait">
        {status !== "idle" ? (
          <motion.div
            key={status}
            initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className={`flex items-center gap-3 rounded-2xl border px-4 py-3 text-sm ${
              status === "success"
                ? "border-emerald-500/40 bg-emerald-500/10 text-emerald-200"
                : "border-destructive/40 bg-destructive/10 text-destructive"
            }`}
          >
            {status === "success" ? (
              <CheckCircle2 className="h-4 w-4" />
            ) : (
              <AlertTriangle className="h-4 w-4" />
            )}
            <span>{statusMessage}</span>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center">
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Sending..." : "Submit Request"}
        </Button>
        <p className="text-xs text-muted-foreground">
          Alternative contact: hello@litsolutions.com - placeholder
        </p>
      </div>
    </form>
  );
}
