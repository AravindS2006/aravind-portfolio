import React, { useRef } from "react";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const useGsap = (elementRef, animation, delay = 0) => {
  React.useEffect(() => {
    if (elementRef.current) {
      gsap.fromTo(
        elementRef.current,
        animation.from,
        {
          ...animation.to,
          delay,
          scrollTrigger: {
            trigger: elementRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }
  }, [elementRef, animation, delay]);
};

const TechIcon = ({ technology, index }) => {
  const iconRef = useRef(null);

  // Apply the effect
  useGsap(iconRef, {
    from: { opacity: 0, y: 100, scale: 0.8 },
    to: { opacity: 1, y: 0, scale: 1, duration: 1, ease: "power3.out" },
  }, index * 0.2);

  return (
    <div ref={iconRef} className="w-28 h-28">
      <img
        src={technology.icon}
        alt={technology.name}
        className="w-full h-full object-contain"
      />
    </div>
  );
};

const Tech = () => {
  return (
    <section>
      <div className="tech-icons-wrapper flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((technology, index) => (
          <TechIcon key={technology.name} technology={technology} index={index} />
        ))}
      </div>
    </section>
  );
};

export default SectionWrapper(Tech, "");
