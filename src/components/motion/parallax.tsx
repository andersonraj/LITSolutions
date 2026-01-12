"use client";

import * as React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export function Parallax({
  children,
  offset = 120,
}: {
  children: React.ReactNode;
  offset?: number;
}) {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, offset]);

  return <motion.div style={{ y }}>{children}</motion.div>;
}
