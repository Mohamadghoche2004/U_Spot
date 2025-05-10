"use client"
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { ArrowBendDownRight } from "@phosphor-icons/react";
import IllustrationSection from "./components/IllustrationSection";
gsap.registerPlugin(TextPlugin);

export default function HeroSection() {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const arrowRef = useRef<HTMLDivElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const descriptionRef2 = useRef<HTMLParagraphElement>(null);
  const illustrationRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // Hide arrow and description initially
      gsap.set(arrowRef.current, { opacity: 0 });
      gsap.set(descriptionRef.current, { text: "", opacity: 1 });
      gsap.set(descriptionRef2.current, { opacity: 0 });
      gsap.set(illustrationRef.current, { opacity: 0 });
      // Animate heading text
      tl.to(headingRef.current, {
        text: "Welcome to U_Spot",
        duration: 2,
        ease: "none",
      })
        // Show arrow
        .to(arrowRef.current, {
          opacity: 1,
          duration: 0.5,
        })
        // Animate description text
        .to(descriptionRef.current, {
          text: "A digital hub for modern creators",
          duration: 1,
          ease: "none",
        })
        .to(descriptionRef2.current, {
          opacity: 1,
          duration: 1,
        })
        .to(illustrationRef.current, {
          opacity: 1,
          duration: 1,
        });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center mt-15 lg:mt-40 px-4 md:px-10">
      <div className="w-full flex flex-col items-center justify-center mt-15">
        <div className="flex items-center justify-center">
          <h1
            ref={headingRef}
            className="text-center font-bold text-3xl sm:text-4xl md:text-4xl lg:text-6xl xl:text-7xl"
          >
            _
          </h1>
        </div>
        <div className="flex items-center justify-center">
          <div ref={arrowRef}>
            <ArrowBendDownRight
              color="#a2a0a0"
              className="w-16 h-12 sm:w-16 sm:h-14 md:w-12 md:h-12 lg:w-20 lg:h-20"
            />
          </div>
          <p
            ref={descriptionRef}
            className="text-start mt-3 font-bold text-sm sm:text-lg md:text-lg lg:text-3xl xl:text-4xl"
          ></p>
        </div>
      </div>
      <div className="w-full flex flex-col items-center justify-center mt-10 md:mt-15">
        <p
          ref={descriptionRef2}
          className="text-center font-bold text-xs sm:text-xs md:text-sm xl:text-lg max-w-md"
        >
          U_Spot is your space to bring design, code, and video production to life — with a creative community by your side.
        </p>
      </div>
      <div className="w-full flex flex-col items-center justify-center mt-10 md:mt-15">
        <IllustrationSection ref={illustrationRef} />
      </div>
    </div>
  );
}
