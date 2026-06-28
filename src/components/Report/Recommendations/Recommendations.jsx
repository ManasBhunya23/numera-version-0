import "./Recommendations.css";

export default function Recommendations({ report }) {

  return (

    <section className="recommendations">

      <div className="recommendations-header">

        <p className="section-kicker">
          PERSONALIZED GUIDANCE
        </p>

        <h2>
          Recommendations
        </h2>

        <p className="section-description">
          Practical actions based on your numerical profile to maximize your strengths
          and reduce recurring weaknesses.
        </p>

      </div>

      <div className="recommendations-grid">

        {

          report.recommendations.map((item, index) => (

            <div
              className="recommendation-card"
              key={item.title}
            >

              <h3>

                Recommendation {index + 1}

              </h3>

              <div className="recommendation-item">

                <div className="recommendation-icon">

                  ✓

                </div>

                <div>

                  <h4>

                    {item.title}

                  </h4>

                  <p>

                    {item.description}

                  </p>

                </div>

              </div>

            </div>

          ))

        }

      </div>

    </section>

  );

}