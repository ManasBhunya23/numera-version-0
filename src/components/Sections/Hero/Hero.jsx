import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ChevronDown } from "lucide-react";

import "./Hero.css";

export default function Hero({ setPage }) {

  const heroRef = useRef();

  useEffect(() => {

    const ctx = gsap.context(() => {

      // Visual fades in first as the backdrop
      gsap.from(".hero-visual", {
        scale: 0.88,
        opacity: 0,
        duration: 1.4,
        delay: 0.1,
        ease: "power2.out",
      });

      gsap.from(".hero-badge", {
        y: 20,
        opacity: 0,
        duration: 0.6,
        delay: 0.5,
      });

      gsap.from(".hero-kicker", {
        y: 20,
        opacity: 0,
        duration: 0.6,
        delay: 0.65,
      });

      gsap.from(".hero-title", {
        y: 40,
        opacity: 0,
        duration: 1,
        delay: 0.8,
      });

      gsap.from(".hero-subtitle", {
        y: 25,
        opacity: 0,
        duration: 0.8,
        delay: 1.1,
      });

      gsap.from(".hero-actions", {
        y: 20,
        opacity: 0,
        duration: 0.7,
        delay: 1.3,
      });

      gsap.from(".hero-trust", {
        y: 15,
        opacity: 0,
        duration: 0.6,
        delay: 1.5,
      });

      gsap.from(".hero-arrow", {
        y: 20,
        opacity: 0,
        duration: 0.7,
        delay: 1.7,
      });

    }, heroRef);

    return () => ctx.revert();

  }, []);

  return (

    <section
      ref={heroRef}
      className="hero"
    >

      {/* ── Planet lives at z-index 0, fills the section ── */}
      <div className="hero-visual">

        <div className="hero-orbit orbit-one" />

        <div className="hero-orbit orbit-two" />

        <div className="hero-sphere" />

        <span className="floating-number n1">8</span>
        <span className="floating-number n2">4</span>
        <span className="floating-number n3">7</span>
        <span className="floating-number n4">1</span>
        <span className="floating-number n5">9</span>

      </div>

      {/* ── All content centered above the planet ── */}
      <div className="hero-content">

        <div className="hero-badge">
          <span className="badge-dot" />
          <span>AI-Powered Numerical Intelligence</span>
        </div>

        <p className="hero-kicker">
          PREMIUM MOBILE NUMBER ANALYSIS
        </p>

        <h1 className="hero-title">
          Understand the Intelligence
          <br />
          Hidden Inside
          <br />
          Your Number
        </h1>

        <p className="hero-subtitle">
          Powered by advanced AI pattern recognition,
          NUMERA transforms your mobile number into a
          comprehensive intelligence profile covering
          leadership, wealth potential, relationships,
          career alignment and long-term decision patterns.
        </p>

        <div className="hero-actions">

          <button
            className="hero-cta"
            onClick={() => setPage("analyze")}
          >
            Analyze Number
          </button>

          <button
            className="hero-secondary"
            onClick={() =>
              document
                .querySelector(".report-preview")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Explore Sample Report
          </button>

        </div>

        <div className="hero-trust">
          <span>✓ Instant Analysis</span>
          <span>✓ AI Generated</span>
          <span>✓ Privacy Protected</span>
        </div>

      </div>

      {/* ── Scroll cue ── */}
      <div
        className="hero-arrow"
        onClick={() =>
          document
            .querySelector(".intelligence")
            ?.scrollIntoView({ behavior: "smooth" })
        }
      >
        <ChevronDown size={38} strokeWidth={1.4} />
      </div>

    </section>

  );
}