import { useEffect, useRef } from "react";

import gsap from "gsap";
import { ChevronDown } from "lucide-react";

export default function Hero({setPage}) {

const heroRef = useRef();

// const navigate = useNavigate();

useEffect(() => {


const ctx = gsap.context(() => {

  gsap.from(".hero-kicker", {
    y: 30,
    opacity: 0,
    duration: 0.8,
    delay: 0.2
  });

  gsap.from(".hero-title", {
    y: 50,
    opacity: 0,
    duration: 1,
    delay: 0.4
  });

  gsap.from(".hero-subtitle", {
    y: 30,
    opacity: 0,
    duration: 0.8,
    delay: 0.8
  });

  gsap.from(".hero-actions", {
    y: 20,
    opacity: 0,
    duration: 0.7,
    delay: 1.1
  });

  gsap.from(".hero-arrow", {
    y: 20,
    opacity: 0,
    duration: 0.7,
    delay: 1.4
  });

}, heroRef);

return () => ctx.revert();


}, []);

return (


<section
  ref={heroRef}
  className="hero"
>

  <p className="hero-kicker">
    AI POWERED NUMEROLOGY
  </p>

  <h1 className="hero-title">
    Decode the Hidden
    <br />
    Patterns in Your
    <br />
    Mobile Number
  </h1>

  <p className="hero-subtitle">
    Discover numerical frequencies,
    strengths, opportunities and
    personalized insights through
    AI-driven analysis.
  </p>

  <div className="hero-actions">

    <button
      className="hero-cta"
      onClick={() => setPage("analyze")}
    >
      Generate Free Report
    </button>

    <button
      className="hero-secondary"
      onClick={() =>
        document
          .querySelector(".report-preview")
          ?.scrollIntoView({
            behavior: "smooth"
          })
      }
    >
      View Sample Analysis
    </button>

  </div>

  <div
    className="hero-arrow"
    onClick={() =>
      document
        .querySelector(".how-it-works")
        ?.scrollIntoView({
          behavior: "smooth"
        })
    }
  >
    <ChevronDown
      size={40}
      strokeWidth={1.5}
    />
  </div>

</section>


);

}
