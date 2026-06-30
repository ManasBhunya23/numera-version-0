import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./HowItWorks.css";

gsap.registerPlugin(ScrollTrigger);

const cards = [
  {
    step: "01",
    title: "Enter Your Number",
    sample: "+91 9876543210",
    score: 100,
    insights: ["Mobile Identity", "Frequency Input", "Pattern Source"],
    text: "Your mobile number becomes the foundation of the analysis. Every digit contributes a measurable numerical frequency that feeds the entire report."
  },
  {
    step: "02",
    title: "Digit Mapping",
    sample: "8 · 8 · 4 · 2 · 7",
    score: 88,
    insights: ["Leadership", "Power", "Influence"],
    text: "Every digit is mapped into its frequency profile. Repeating numbers strengthen specific traits while absent digits reveal meaningful gaps in the pattern."
  },
  {
    step: "03",
    title: "Pattern Detection",
    sample: "888 · Mirror Pair",
    score: 92,
    insights: ["Repeating Digits", "Mirror Pairs", "Hidden Sequences"],
    text: "The system identifies repeating sequences, mirrored combinations and structural patterns that are nearly impossible to detect manually."
  },
  {
    step: "04",
    title: "AI Interpretation",
    sample: "Communication 87%",
    score: 87,
    insights: ["Strengths", "Opportunities", "Behaviour Trends"],
    text: "Detected patterns are interpreted by AI models trained to translate raw numerical structure into clear, actionable insights about personality and potential."
  },
  {
    step: "05",
    title: "Personal Report",
    sample: "Dashboard + PDF",
    score: 100,
    insights: ["Scores", "Recommendations", "Forecasts"],
    text: "Your final report delivers scores, strengths, challenges and personalised recommendations in an interactive dashboard you can download anytime."
  }
];

export default function HowItWorks() {

  const sectionRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {

    const ctx = gsap.context(() => {

      const cardEls = gsap.utils.toArray(".how-card");

      // Stack all cards after the first off-screen below
      cardEls.forEach((card, i) => {
        if (i === 0) return;
        gsap.set(card, { yPercent: 100, opacity: 0, filter: "blur(6px)" });
      });

      // ── First-card entrance choreography ──
      // Header reveals, then the first card's internals step in sequence —
      // mirrors the staggered cardAppear rhythm used in Pricing so the
      // page-load feel stays consistent across sections.
      const introTl = gsap.timeline({ delay: 0.1 });

      introTl

        .from(".how-header-left .section-kicker", {
          y: 14, opacity: 0, duration: 0.5, ease: "power2.out"
        })

        .from(".how-header-left .section-title", {
          y: 18, opacity: 0, duration: 0.6, ease: "power2.out"
        }, "<0.08")

        .from(".how-progress-pip", {
          opacity: 0, width: 0, duration: 0.4, stagger: 0.06, ease: "power2.out"
        }, "<0.1")

        .from(".how-card:first-child", {
          opacity: 0, y: 24, duration: 0.7, ease: "power2.out"
        }, "<0.1")

        .from(".how-card:first-child .how-step-label", {
          opacity: 0, x: -10, duration: 0.4, ease: "power2.out"
        }, "<0.15")

        .from(".how-card:first-child .how-score-label", {
          opacity: 0, duration: 0.4
        }, "<0.05")

        .from(".how-card:first-child .how-score-value", {
          opacity: 0, y: 10, duration: 0.5, ease: "power2.out"
        }, "<0.05")

        .fromTo(".how-card:first-child .how-score-fill", {
          scaleX: 0
        }, {
          scaleX: cards[0].score / 100,
          duration: 1,
          ease: "power2.out"
        }, "<0.1")

        .from(".how-card:first-child .how-chip", {
          opacity: 0, x: -8, duration: 0.4, stagger: 0.08, ease: "power2.out"
        }, "<0.2")

        .from(".how-card:first-child .how-card-right h3", {
          opacity: 0, y: 16, duration: 0.6, ease: "power2.out"
        }, "<0.1")

        .from(".how-card:first-child .how-sample", {
          opacity: 0, y: 10, duration: 0.5, ease: "power2.out"
        }, "<0.1")

        .from(".how-card:first-child .how-card-right p", {
          opacity: 0, y: 10, duration: 0.5, ease: "power2.out"
        }, "<0.08");

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: window.innerWidth < 768
            ? `+=${cardEls.length * 600}`
            : `+=${cardEls.length * 900}`,
          scrub: 1.2,
          pin: true,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            // Drive the active pip from scroll progress
            const idx = Math.min(
              Math.floor(self.progress * cardEls.length),
              cardEls.length - 1
            );
            setActiveIndex(idx);
          }
        }
      });

      cardEls.forEach((card, i) => {
        if (i === 0) return;

        // Outgoing card: scale + blur out
        tl.to(cardEls[i - 1], {
          scale: 0.92,
          opacity: 0,
          filter: "blur(8px)",
          duration: 1,
          ease: "power2.in"
        });

        // Incoming card: rise + unblur
        tl.to(card, {
          yPercent: 0,
          opacity: 1,
          filter: "blur(0px)",
          duration: 1,
          ease: "power2.out"
        }, "<");

        // Animate score bar of incoming card
        const scoreFill = card.querySelector(".how-score-fill");
        if (scoreFill) {
          tl.fromTo(scoreFill, {
            scaleX: 0
          }, {
            scaleX: cards[i].score / 100,
            duration: 0.6,
            ease: "power2.out"
          }, "<0.4");
        }

        // Chips on incoming card step in left-to-right, echoing the
        // intro choreography so every card transition feels intentional.
        const chips = card.querySelectorAll(".how-chip");
        if (chips.length) {
          tl.fromTo(chips, {
            opacity: 0, x: -8
          }, {
            opacity: 1, x: 0, duration: 0.4, stagger: 0.08, ease: "power2.out"
          }, "<0.1");
        }
      });

      ScrollTrigger.refresh();

    }, sectionRef);

    return () => ctx.revert();

  }, []);

  return (

    <section
      ref={sectionRef}
      className="how-it-works"
    >

      <div className="how-header">

        <div className="how-header-left">
          <p className="section-kicker">From Number to Insight</p>
          <h2 className="section-title">How NUMERA Works</h2>
        </div>

        {/* Progress pips — driven by scroll */}
        <div className="how-progress-track">
          {cards.map((_, i) => (
            <div
              key={i}
              className={`how-progress-pip${i === activeIndex ? " active" : ""}`}
            />
          ))}
        </div>

      </div>

      <div className="card-stage">

        {cards.map((card, i) => (

          <div key={card.step} className="how-card">

            {/* ── Left column ── */}
            <div className="how-card-left">

              {/* Watermark numeral */}
              <span className="how-numeral">{card.step}</span>

              <span className="how-step-label">Step {card.step}</span>

              {/* Score */}
              <div className="how-score-wrap">
                <span className="how-score-label">Intelligence Score</span>
                <span className="how-score-value">{card.score}</span>
                <div className="how-score-bar">
                  <div className="how-score-fill" style={{ transform: "scaleX(0)" }} />
                </div>
              </div>

              {/* Insight chips */}
              <div className="how-insights">
                {card.insights.map((item) => (
                  <span key={item} className="how-chip">{item}</span>
                ))}
              </div>

            </div>

            {/* ── Right column ── */}
            <div className="how-card-right">

              <h3>{card.title}</h3>

              <div className="how-sample">{card.sample}</div>

              <p>{card.text}</p>

            </div>

          </div>

        ))}

      </div>

    </section>

  );
}