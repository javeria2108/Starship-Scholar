// src/sections/ProductShowcase.tsx
"use client";
import productImage from "@/assets/product-image.png";
import Image from "next/image";
import pyramidImage from "@/assets/lg.png";
import tubeImage from "@/assets/planet.png";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import RevealOnScroll from "@/components/RevealOnScroll";
import { useInView } from "react-intersection-observer";

const slideAndTiltVariants = {
  hidden: {
    opacity: 0,
    rotateY: -45,
    y: 100,
  },
  visible: {
    opacity: 1,
    rotateY: 0,
    y: 0,
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

export const ProductShowcase = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  const { ref: inViewRef, inView } = useInView({
    threshold: 0.3, // Trigger the effect earlier
    triggerOnce: true,
  });

  return (
    <section
    id="product"
      ref={sectionRef}
      className="bg-gradient-to-b from-black to-[#220828] py-24 overflow-x-clip relative"
      style={{
        borderTop: "1px solid transparent",
        borderBottom: "1px solid transparent",
      }}
    >
      <div className="container">
        <div className="section-heading">
          <RevealOnScroll>
            <div className="flex justify-center">
              <div className="tag">Innovate, research, and achieve</div>
            </div>
            <h2 className="section-title mt-5">
              Your Final Year Project Companion
            </h2>
            <p className="section-description mt-5">
              Why spend hours sifting through countless articles when AI can do
              the heavy lifting for you? ProjectPro AI harnesses the power of AI
              to recommend the most relevant research, helping you stay ahead of
              the curve.
            </p>
          </RevealOnScroll>
        </div>
        <div className="relative" style={{ perspective: 1000 }}>
          <div
            ref={inViewRef}
            className="mt-10"
            style={{
              transformOrigin: "center",
              transition: "opacity 1s ease-in-out, transform 1s ease-in-out",
              opacity: inView ? 1 : 0.2,
              transform: inView
                ? "rotateY(0) translateY(0)"
                : "rotateY(-45deg) translateY(100px)",
            }}
          >
            <Image
              src={productImage}
              alt="Product Image"
              className="glass-effect"
              style={{ opacity: inView ? 1 : 0 }}
            />
            <div
              className="glass-placeholder"
              style={{ display: inView ? "none" : "block" }}
            />
          </div>
          {/* <motion.img
            src={pyramidImage.src}
            height={262}
            width={262}
            alt="pyramid image"
            className="hidden md:block absolute -right-36 -top-32 rotate-[10deg]"
            style={{
              translateY,
            }}
          /> */}
          <motion.img
            src={tubeImage.src}
            alt="tube image"
            height={248}
            width={248}
            className="hidden md:block absolute bottom-20 -left-36"
            style={{
              translateY,
            }}
          />
        </div>
      </div>

      {/* Gradient Separator */}
      <style jsx>{`
        section::before,
        section::after {
          content: "";
          display: block;
          height: 2px;
          width: 100%;
          position: absolute;
          left: 0;
          background-image: linear-gradient(
            90deg,
            rgba(202, 171, 255, 0) 1.46%,
            rgba(202, 171, 255, 0.6) 40.83%,
            rgba(202, 171, 255, 0.3) 65.57%,
            rgba(202, 171, 255, 0) 107.92%
          );
        }

        section::before {
          top: 0;
        }

        section::after {
          bottom: 0;
        }
      `}</style>
    </section>
  );
};
