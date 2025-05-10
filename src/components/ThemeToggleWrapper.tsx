"use client";

import { useState, useEffect } from "react";
import ThemeToggle from "./ThemeToggleButton/ThemeToggle";

export default function ThemeToggleWrapper() {
  const [mounted, setMounted] = useState(false);

  // Only run on the client side
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  
  return <ThemeToggle />;
} 