import type { Metadata } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PageTransition } from "@/components/motion/page-transition";

const displayFont = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
});

const bodyFont = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://litsolutions.com"),
  title: {
    default: "LEO IT SOLUTIONS | Global IT Services",
    template: "%s | LEO IT SOLUTIONS",
  },
  description:
    "Global, remote-first IT services for modern businesses. We build premium websites, web apps, automation systems, and secure managed cloud hosting.",
  openGraph: {
    title: "LEO IT SOLUTIONS | Global IT Services",
    description:
      "Premium web, app, and IT solutions with a modern tech agency approach.",
    url: "https://litsolutions.com",
    siteName: "LEO IT SOLUTIONS",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "LEO IT SOLUTIONS | Global IT Services",
    description:
      "Premium web, app, and IT solutions with a modern tech agency approach.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${displayFont.variable} ${bodyFont.variable} antialiased`}
      >
        <ThemeProvider>
          <div className="relative min-h-screen bg-background text-foreground">
            <SiteHeader />
            <PageTransition>{children}</PageTransition>
            <SiteFooter />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
