import "./Pricing.css";

export default function Pricing() {

const plans = [


{
  name: "FREE PREVIEW",
  tag: "For Curious Users",
  launch: "FREE",
  old: "₹99",
  features: [
    "Mobile Number Score",
    "Number Archetype",
    "Top Strength",
    "Top Challenge",
    "AI Verdict"
  ]
},

{
  name: "VERDICT PRO™",
  tag: "Most Popular",
  launch: "₹159",
  old: "₹249",
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
  name: "DUEL™",
  tag: "For Decision Makers",
  launch: "₹399",
  old: "₹499",
  features: [
    "Compare Two Numbers",
    "Side-by-side Analysis",
    "Winner Recommendation",
    "Score Breakdown",
    "Opportunity Analysis"
  ]
},

{
  name: "SELECTION™",
  tag: "For Professionals",
  launch: "₹799",
  old: "₹999",
  features: [
    "Analyze Multiple Numbers",
    "Rank Every Option",
    "Best Overall Pick",
    "Strength Matrix",
    "Risk Matrix"
  ]
},

{
  name: "DISCOVERY™",
  tag: "Premium Research",
  launch: "₹1599",
  old: "₹1999",
  features: [
    "Find New Numbers",
    "Availability Research",
    "AI Ranking Engine",
    "Personalized Recommendations",
    "Strongest Match Discovery"
  ]
}


];

return (


<section
  className="pricing"
  id="pricing"
>

  <p className="section-kicker">
    NUMBER INTELLIGENCE PLANS
  </p>

  <h2 className="section-title">
    Choose Your Analysis Level
  </h2>

  <div className="pricing-slider">

    <div className="pricing-track">

      {[...plans, ...plans].map((plan, index) => (

        <div
          key={index}
          className={`pricing-card ${
            plan.featured ? "featured" : ""
          }`}
        >

          <span className="plan-tag">
            {plan.tag}
          </span>

          <h3>
            {plan.name}
          </h3>

          <div className="price-block">

            <span className="old-price">
              {plan.old}
            </span>

            <span className="launch-price">
              Launch Price
            </span>

            <div className="current-price">
              {plan.launch}
            </div>

          </div>

          <ul>

            {plan.features.map((feature) => (

              <li key={feature}>
                ✓ {feature}
              </li>

            ))}

          </ul>

          <button className="pricing-btn">
            Unlock
          </button>

        </div>

      ))}

    </div>

  </div>

</section>


);

}
