import "./Analysis.css";

export default function Analysis({ report }) {

  return (

    <section className="analysis">

      <div className="analysis-header">

        <p className="section-kicker">
          AI INTERPRETATION
        </p>

        <h2>
          Numerical Analysis
        </h2>

        <p className="section-description">
          Our intelligence engine reconstructed the energetic structure of your
          mobile number by analyzing digit frequencies, repetitions, numerical
          balance and dominant vibrational signatures.
        </p>

      </div>

      {/* AI Summary */}

      <div className="analysis-summary">

        <div className="summary-orb"></div>

        <div>

          <span className="summary-label">
            Primary Observation
          </span>

          <h3>
            {report.hero.archetype}
          </h3>

          <p>

            {report.executiveSummary}

          </p>

        </div>

      </div>

      {/* Cards */}

      <div className="analysis-grid">

        {

          report.influences.map((item)=>(

            <div
              className="analysis-card"
              key={item.number}
            >

              <div className="analysis-top">

                <div className="analysis-number">

                  {item.number}

                </div>

                <span className="analysis-badge">

                  ACTIVE

                </span>

              </div>

              <div className="analysis-content">

                <h3>

                  {item.title}

                </h3>

                <p>

                  {item.description}

                </p>

              </div>

            </div>

          ))

        }

      </div>

      {/* AI Confidence */}

      <div className="confidence-section">

        <div className="confidence-header">

          <span>

            AI Confidence

          </span>

          <span>

            {report.hero.score}%

          </span>

        </div>

        <div className="confidence-bar">

          <div
            className="confidence-fill"
            style={{
              width:`${report.hero.score}%`
            }}
          />

        </div>

      </div>

    </section>

  );

}