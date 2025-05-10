"use client";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function FooterLogo() {
    const { resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
  
    useEffect(() => {
      setMounted(true);
    }, []);
    const logoSrc =
      mounted && resolvedTheme === "dark"
        ? "/USpotlogolight.png" 
        : "/USpotLogo.png";
  return (
    <Image src={logoSrc} alt="USpot" width={100} height={100} />
  );
}


