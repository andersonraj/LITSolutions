"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export function PageTransition({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <main className={cn("flex-1", className)}>{children}</main>;
}
