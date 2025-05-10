import { forwardRef, useEffect, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const IllustrationSection = forwardRef<HTMLDivElement>((props, ref) => {
  const [imageWidth, setImageWidth] = useState(900);
  const initialWidth = 900;
  const maxWidth = 1200;
  
  useEffect(() => {
    const image = document.querySelector(".illustration-image");
    
    if (image) {
      // Create animation that scales the image on scroll into view
      const scrollIntoView = ScrollTrigger.create({
        trigger: image,
        start: "top bottom", // Start when top of image is at bottom of viewport
        end: "center center", // End when center of image is at center of viewport
        scrub: true,
        onUpdate: (self) => {
          // Grow from initialWidth to maxWidth
          const growWidth = initialWidth + (self.progress * (maxWidth - initialWidth));
          setImageWidth(Math.round(growWidth));
        }
      });

      // Create animation that scales the image back down when scrolling past
      const scrollPast = ScrollTrigger.create({
        trigger: image,
        start: "center center", // Start when center of image is at center of viewport
        end: "bottom top", // End when bottom of image is at top of viewport
        scrub: true,
        onUpdate: (self) => {
          // Shrink from maxWidth back to initialWidth
          const shrinkWidth = maxWidth - (self.progress * (maxWidth - initialWidth));
          setImageWidth(Math.round(shrinkWidth));
        }
      });
    
      return () => {
        // Clean up ScrollTrigger
        scrollIntoView.kill();
        scrollPast.kill();
      };
    }
  }, [initialWidth, maxWidth]);

  return (
    <div ref={ref} className="flex flex-col items-center justify-center mt-20 pb-20">
      <div className="max-w-[90vw] overflow-hidden">
        <Image 
          src="/illustrationimage.png" 
          alt="Illustration" 
          width={imageWidth} 
          height={Math.round(imageWidth * 0.6)} 
          className="rounded-4xl illustration-image transition-all duration-300"
          priority
        />
      </div>
    </div>
  );
});

IllustrationSection.displayName = "IllustrationSection";

export default IllustrationSection;
