"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function TheBestSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textContainerRef = useRef<HTMLDivElement>(null);
  const tireRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !textContainerRef.current || !tireRef.current) return;

    // Create horizontal scroll animation
    gsap.to(textContainerRef.current, {
      x: () => {
        // Calculate how far to scroll based on container width
        // This makes the text scroll from right to left
        return -(
          textContainerRef.current!.scrollWidth -
          window.innerWidth +
          100
        );
      },
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "+=100%", // Reduced from 300% to 100% - only 1 viewport height of scrolling
        pin: true,
        scrub: 0, // Reduced from 1 to 0.5 for faster response
        invalidateOnRefresh: true,
      },
    });

    // Add tire rotation animation
    gsap.to(tireRef.current, {
      rotation: 360 * 2, // Rotate 720 degrees (2 full rotations)
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "+=100%",
        scrub: true,
        invalidateOnRefresh: true,
      },
    });

    return () => {
      // Clean up ScrollTrigger
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div ref={sectionRef} className=" overflow-hidden">
      <div ref={textContainerRef} className="whitespace-nowrap py-70">
        <span
          className="inline-flex items-center font-bold"
          style={{ fontSize: "300px" }}
        >
          <Image
            ref={tireRef}
            src="/tire.svg"
            alt="The Best"
            width={250}
            height={200}
            className="mx-20"
          />
          We
          <Image
            src="/arrow.svg"
            alt="The Best"
            width={250}
            height={200}
            className="mx-20 rotate-320"
          />
          are the best:
        </span>
      </div>
    </div>
  );
}
