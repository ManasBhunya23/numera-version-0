import "./Insights.css";

export default function Insights({ report }) {

  return (

    <section className="insights">

      <div className="insights-header">

        <p className="section-kicker">
          PRACTICAL INSIGHTS
        </p>

        <h2>
          Life Interpretation
        </h2>

        <p className="section-description">
          These insights summarize how your numerical frequencies are most likely
          to influence different areas of life.
        </p>

      </div>

      <div className="insights-grid">

        {

          report.insights.map((item) => (

            <div
              key={item.title}
              className="insight-card"
            >

              <div className="insight-top">

                  <span className="insight-icon">
                      {item.icon}
                  </span>

                  <div className="insight-score-box">

                      <span className="insight-score">
                          {item.score}%
                      </span>

                      <span className="confidence">
                          High Confidence
                      </span>

                  </div>

              </div>

              <h3>

                {item.title}

              </h3>

              <p>

                {item.description}

              </p>

              <div className="insight-highlight">

                  <span>
                      Key Takeaway
                  </span>

                  <p>
                      {item.highlight}
                  </p>

              </div>

              <div className="insight-tag">

                  Dominant Frequency · {item.frequency}

              </div>

            </div>

          ))

        }

      </div>

    </section>

  );

}