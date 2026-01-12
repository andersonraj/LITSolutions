"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { motion } from "framer-motion";
import { navLinks } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/40 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="font-display text-lg font-semibold tracking-tight"
        >
          LEO IT SOLUTIONS
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative text-sm font-medium text-muted-foreground transition hover:text-foreground",
                  isActive && "text-foreground"
                )}
              >
                {link.label}
                {isActive ? (
                  <motion.span
                    layoutId="active-nav"
                    className="absolute -bottom-2 left-0 h-[2px] w-full rounded-full bg-primary"
                  />
                ) : null}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Button asChild className="hidden md:inline-flex">
            <Link href="/contact">Get a Free Consultation</Link>
          </Button>
          <div className="md:hidden">
            <Dialog open={open} onOpenChange={setOpen}>
              <DialogTrigger asChild>
                <Button variant="glass" size="icon" aria-label="Open menu">
                  <Menu className="h-5 w-5" />
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-sm">
                <DialogHeader>
                  <DialogTitle>Explore LEO IT SOLUTIONS</DialogTitle>
                  <DialogDescription>
                    Navigate our core services or start a conversation.
                  </DialogDescription>
                </DialogHeader>
                <div className="mt-4 flex flex-col gap-3">
                  {navLinks.map((link) => (
                    <Button key={link.href} variant="ghost" asChild>
                      <Link href={link.href} onClick={() => setOpen(false)}>
                        {link.label}
                      </Link>
                    </Button>
                  ))}
                  <Button asChild>
                    <Link href="/contact" onClick={() => setOpen(false)}>
                      Get a Free Consultation
                    </Link>
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </header>
  );
}
