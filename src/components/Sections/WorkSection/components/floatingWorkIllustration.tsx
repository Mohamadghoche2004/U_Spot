"use client";
import Image from "next/image";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";

export default function FloatingWorkIllustration() {
  const imageRef = useRef(null);
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    // Set mounted to true after component mounts to prevent hydration mismatch
    setMounted(true);
    
    // Initialize the timeline inside useEffect to ensure the ref is populated
    const loadTl = gsap.timeline({ repeat: -1, yoyo: true });
    
    // Now imageRef.current will be available
    loadTl.from(imageRef.current, {
      y: '-1rem',
      duration: 1,
      ease: 'power1.inOut',
    });
    
    // Clean up animation when component unmounts
    return () => {
      loadTl.kill();
    };
  }, []); // Empty dependency array means this runs once after initial render
  
  // Default logo for server-side rendering
  const logoSrc = mounted && resolvedTheme === 'dark' 
    ? "/USpotlogolight.png" // Dark mode logo (you should have this file in public folder)
    : "/USpotLogo.png";      // Light mode logo

  return (
    <div>
      <Image ref={imageRef} src={logoSrc} alt="USpot Logo" width={500} height={500} />
    </div>
  );
}
