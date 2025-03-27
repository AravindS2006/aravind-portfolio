import React, { useEffect, useRef } from "react";
import { styles } from "../styles";
import "./Hero.css"; // Import the CSS file
import Spline from "@splinetool/react-spline"; // Correct import statement

const Hero = () => {
  const spanRef = useRef(null); // Ref for the span element

  useEffect(() => {
    const adjustVerticalAlignment = () => {
      if (spanRef.current) {
        // Get the height of the "Hi, I'm" text
        const h1Element = spanRef.current.closest("h1");
        if (!h1Element) return; // Safety check

        const hiImHeight = h1Element.getBoundingClientRect().height;

        // Adjust the top margin of the span element to center it vertically
        spanRef.current.style.marginTop = `${
          (hiImHeight - spanRef.current.getBoundingClientRect().height) / 2
        }px`;
      }
    };

    adjustVerticalAlignment(); // Call initially

    window.addEventListener("resize", adjustVerticalAlignment); // Adjust on resize

    return () => {
      window.removeEventListener("resize", adjustVerticalAlignment); // Cleanup
    };
  }, []); // Run only once on mount

  return (
    <section className="relative w-full h-screen mx-auto">
      {/* Text content */}
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5 z-10`}
      >
        <div className="flex flex-col justify-center items-center mt-28 md:mt-5 lg:5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div className="aravindselvan-typewriter">
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm{" "}
            <span
              className="text-[#915EFF]"
              ref={spanRef} // Attach the ref here
            >
              Aravindselvan
            </span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop modern, user-friendly interfaces and decentralized
            applications (dApps) for the Web3 ecosystem.
          </p>
        </div>
      </div>

      {/* Spline Element */}
      <div className="absolute w-full h-full z-0">
        <Spline
          scene="https://prod.spline.design/umZsINFo7jhcNnXZ/scene.splinecode"
          style={{
            pointerEvents: "none", // Disable interactions
          }}
          className="spline-mobile"
        />
      </div>
    </section>
  );
};

export default Hero;
