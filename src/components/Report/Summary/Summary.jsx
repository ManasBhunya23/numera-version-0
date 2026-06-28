import "./Summary.css";

export default function Summary({ report }) {

  return (

    <section className="summary">

      <div className="summary-header">

        <p className="section-kicker">

          FINAL ASSESSMENT

        </p>

        <h2>

          Executive Summary

        </h2>

      </div>

      <div className="summary-grid">

        {/* LEFT */}

        <div className="summary-card large">

          <h3>

            AI Verdict

          </h3>

          <p className="summary-text">

            {report.executiveSummary}

          </p>

        </div>

        {/* RIGHT */}

        <div className="summary-card">

          <h3>

            Key Takeaways

          </h3>

          <div className="takeaway-list">

            <div className="takeaway-row">

              <span>Root Number</span>

              <strong>{report.overview.rootNumber}</strong>

            </div>

            <div className="takeaway-row">

              <span>Primary Archetype</span>

              <strong>{report.hero.archetype}</strong>

            </div>

            <div className="takeaway-row">

              <span>Strongest Frequency</span>

              <strong>{report.dominantNumbers[0].number}</strong>

            </div>

            <div className="takeaway-row">

              <span>Greatest Strength</span>

              <strong>{report.strengths[0].title}</strong>

            </div>

            <div className="takeaway-row">

              <span>Main Growth Area</span>

              <strong>{report.growthAreas[0].title}</strong>

            </div>

          </div>

        </div>

      </div>

      {/* Bottom Bento */}

      <div className="summary-bottom">

        <div className="summary-pill">

          <span>Leadership</span>

          <strong>

            {report.overview.metrics.leadership}%

          </strong>

        </div>

        <div className="summary-pill">

          <span>Wealth</span>

          <strong>

            {report.overview.metrics.wealth}%

          </strong>

        </div>

        <div className="summary-pill">

          <span>Communication</span>

          <strong>

            {report.overview.metrics.communication}%

          </strong>

        </div>

        <div className="summary-pill">

          <span>Relationships</span>

          <strong>

            {report.overview.metrics.relationships}%

          </strong>

        </div>

      </div>

    </section>

  );

}