import Link from "next/link";
import { siteConfig, navLinks } from "@/lib/constants";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border/40 bg-background/80">
      <div className="mx-auto w-full max-w-6xl px-6 py-12">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div className="space-y-4">
            <p className="font-display text-lg font-semibold">
              {siteConfig.name}
            </p>
            <p className="text-sm text-muted-foreground">
              Global, remote-first IT services built for modern businesses.
            </p>
            <p className="text-sm text-muted-foreground">
              {siteConfig.email}
            </p>
          </div>
          <div className="space-y-3">
            <p className="text-sm font-semibold text-foreground">Navigate</p>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} className="hover:text-foreground">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="space-y-3">
            <p className="text-sm font-semibold text-foreground">Policies</p>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <Link href="/privacy" className="hover:text-foreground">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-foreground">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-10 flex flex-col items-start justify-between gap-4 border-t border-border/40 pt-6 text-sm text-muted-foreground md:flex-row md:items-center">
          <p>© {year} {siteConfig.name}. All rights reserved.</p>
          <p>By LEO MARKETING SERVICES.</p>
          <p>We focus on solutions that deliver real value — not unnecessary complexity.</p>
        </div>
      </div>
    </footer>
  );
}
