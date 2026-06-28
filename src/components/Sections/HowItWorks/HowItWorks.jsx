import { useEffect, useRef } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "./HowItWorks.css";

gsap.registerPlugin(ScrollTrigger);

export default function HowItWorks() {

  const sectionRef = useRef(null);

  useEffect(() => {

  const ctx = gsap.context(() => {

    const cards = gsap.utils.toArray(".how-card");

    cards.forEach((card, i) => {

      if(i === 0) return;

      gsap.set(card,{
        yPercent:100,
        opacity:0
      });

    });

    const tl = gsap.timeline({

      scrollTrigger:{

        trigger:sectionRef.current,

        start:"top top",

        end:window.innerWidth < 768
          ? `+=${cards.length * 700}`
          : `+=${cards.length * 1000}`,

        scrub:1,

        pin:true,

        invalidateOnRefresh:true

      }

    });

    cards.forEach((card,i)=>{

      if(i === 0) return;

      tl.to(cards[i-1],{

        scale:.85,

        opacity:0,

        duration:1

      });

      tl.to(card,{

        yPercent:0,

        opacity:1,

        duration:1

      },"<");

    });

    ScrollTrigger.refresh();

  }, sectionRef);

  return () => ctx.revert();

}, []);

const cards = [

  {
    step:"01",
    title:"Enter Your Number",
    sample:"+91 9876543210",

    score:"01",

    insights:[
      "Mobile Identity",
      "Frequency Input",
      "Pattern Source"
    ],

    text:"Your mobile number becomes the foundation of the analysis. Every digit contributes a measurable numerical frequency used throughout the report."
  },

  {
    step:"02",
    title:"Digit Mapping",
    sample:"8 • 8 • 4 • 2 • 7",

    score:"88",

    insights:[
      "Leadership",
      "Power",
      "Influence"
    ],

    text:"Every digit is mapped into its frequency profile. Repeated numbers strengthen specific traits while absent numbers reveal hidden gaps."
  },

  {
    step:"03",
    title:"Pattern Detection",
    sample:"888 • Mirror Pair",

    score:"92",

    insights:[
      "Repeating Digits",
      "Mirror Pairs",
      "Hidden Patterns"
    ],

    text:"The system identifies repeating sequences, mirrored combinations and numerical structures that are difficult to spot manually."
  },

  {
    step:"04",
    title:"AI Interpretation",
    sample:"Communication 87%",

    score:"87",

    insights:[
      "Strengths",
      "Opportunities",
      "Behavior Trends"
    ],

    text:"Detected patterns are interpreted using AI models trained to translate numerical structures into understandable insights."
  },

  {
    step:"05",
    title:"Personal Report",
    sample:"Dashboard + PDF",

    score:"100",

    insights:[
      "Scores",
      "Recommendations",
      "Forecasts"
    ],

    text:"The final report presents scores, strengths, challenges and personalized recommendations in an interactive dashboard."
  }

];

  return (

    <section
      ref={sectionRef}
      className="how-it-works"
    >

      <p className="section-kicker">
        FROM NUMBER TO INSIGHT
      </p>

      <h2 className="section-title">
        How NUMERA Works
      </h2>

      <div className="card-stage">

        {
          cards.map((card) => (

            <div
              key={card.step}
              className="how-card"
            >

              <span className="how-step">
                STEP {card.step}
              </span>

              <h3>
                {card.title}
              </h3>

              <div className="how-top-row">

                <div className="how-sample">
                  {card.sample}
                </div>

                <div className="how-score">
                  Score: {card.score}
                </div>

              </div>

              <p>
                {card.text}
              </p>

              <div className="how-insights">

                {
                  card.insights.map((item) => (

                    <span
                      key={item}
                      className="how-chip"
                    >
                      {item}
                    </span>

                  ))
                }

              </div>

            </div>

          ))
        }

      </div>

    </section>

  );

}