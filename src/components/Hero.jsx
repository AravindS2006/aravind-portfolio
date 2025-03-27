import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import "./Hero.css"; // Import the CSS file

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
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-28 md:mt-5 lg:5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div className="abcd">
          <h1 className={`${styles.heroHeadText} text-white style={{ marginRight: '10px' }`}>
            Hi, I'm{" "}
            <span
              ref={spanRef}
              className="text-[#915EFF] aravindselvan-typewriter"
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

      
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop"
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;