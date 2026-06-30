import { useRef, useState } from "react";

import "./Pricing.css";

export default function Pricing() {

  const sliderRef = useRef(null);

  const [selected, setSelected] = useState(1);

  const plans = [

    {
      id: 0,
      name: "FREE PREVIEW",
      tag: "For Curious Users",
      launch: "FREE",
      old: "₹99",
      savings: null,
      features: [
        "Mobile Number Score",
        "Number Archetype",
        "Top Strength",
        "Top Challenge",
        "AI Verdict"
      ]
    },

    {
      id: 1,
      name: "VERDICT PRO™",
      tag: "Most Popular",
      launch: "₹159",
      old: "₹249",
      savings: "Save 36%",
      featured: true,
      features: [
        "Everything in Free",
        "Complete Intelligence Score",
        "Wealth Potential",
        "Career Alignment",
        "Relationship Compatibility",
        "Hidden Number Patterns",
        "Detailed Recommendations"
      ]
    },

    {
      id: 2,
      name: "DUEL™",
      tag: "For Decision Makers",
      launch: "₹399",
      old: "₹499",
      savings: "Save 20%",
      features: [
        "Compare Two Numbers",
        "Side-by-side Analysis",
        "Winner Recommendation",
        "Score Breakdown",
        "Opportunity Analysis"
      ]
    },

    {
      id: 3,
      name: "SELECTION™",
      tag: "For Professionals",
      launch: "₹799",
      old: "₹999",
      savings: "Save 20%",
      features: [
        "Analyze Multiple Numbers",
        "Rank Every Option",
        "Best Overall Pick",
        "Strength Matrix",
        "Risk Matrix"
      ]
    },

    {
      id: 4,
      name: "DISCOVERY™",
      tag: "Premium Research",
      launch: "₹1599",
      old: "₹1999",
      savings: "Save 20%",
      features: [
        "Find New Numbers",
        "Availability Research",
        "AI Ranking Engine",
        "Personalized Recommendations",
        "Strongest Match Discovery"
      ]
    }

  ];

  const handleSelect = (index) => {

    setSelected(index);

    const slider = sliderRef.current;
    const card = slider.children[index];

    card.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest"
    });

  };

  return (

    <section
      className="pricing"
      id="pricing"
    >

      <div className="pricing-header">

        <p className="section-kicker">
          NUMBER INTELLIGENCE PLANS
        </p>

        <h2 className="section-title">
          Choose Your Analysis Level
        </h2>

        <p className="section-description">
          Unlock progressively deeper AI intelligence,
          from an instant preview to complete numerical
          analysis and premium number discovery.
        </p>

      </div>

      <div
        className="pricing-slider"
        ref={sliderRef}
      >

        {plans.map((plan, index) => (

          <div
            key={plan.id}
            className={`
              pricing-card
              ${plan.featured ? "featured" : ""}
              ${selected === index ? "active" : ""}
            `}
            onClick={() => handleSelect(index)}
          >

            {/* Watermark plan number — echoes HowItWorks numeral signature */}
            <span className="plan-numeral">
              {String(index + 1).padStart(2, "0")}
            </span>

            <div className="pricing-card-top">

              <span className="plan-tag">
                {plan.tag}
              </span>

              {plan.featured && (
                <span className="featured-badge">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2l2.6 6.6L21 11l-6.4 2.4L12 20l-2.6-6.6L3 11l6.4-2.4z" />
                  </svg>
                  Best Value
                </span>
              )}

            </div>

            <h3>
              {plan.name}
            </h3>

            <div className="price-block">

              <span className="old-price">
                {plan.old}
              </span>

              {plan.savings && (
                <span className="savings-pill">
                  {plan.savings}
                </span>
              )}

              <div className="current-price">
                {plan.launch}
              </div>

              <span className="launch-price">
                Launch Price
              </span>

            </div>

            <ul>

              {plan.features.map(feature => (

                <li key={feature}>

                  <span className="li-dot">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>

                  {feature}

                </li>

              ))}

            </ul>

            <button className="pricing-btn">

              Unlock Intelligence

              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>

            </button>

          </div>

        ))}

      </div>

      <div className="pricing-footer">

        <div className="pricing-indicators">

          {plans.map((_, index) => (

            <button
              key={index}
              className={selected === index ? "indicator active" : "indicator"}
              onClick={() => handleSelect(index)}
              aria-label={`View plan ${index + 1}`}
            />

          ))}

        </div>

        <span className="pricing-hint">
          Drag or click to compare plans
        </span>

      </div>

    </section>

  );

}