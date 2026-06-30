import "./ReportPreview.css";

export default function ReportPreview() {

  return (

    <section className="report-preview">

      <p className="section-kicker">
        REPORT PREVIEW
      </p>

      <h2 className="section-title">
        A Sample of NUMERA Report
      </h2>

      <div className="report-grid">

        {/* MAIN INSIGHT */}

        <div className="report-card report-large">

          <span className="report-label">
            DOMINANT FREQUENCY
          </span>

          <h3>
            Leadership & Influence
          </h3>

          <p>
            Your number carries a strong
            leadership vibration associated
            with initiative, confidence and
            decision making.
          </p>

        </div>

        {/* SCORE */}

        <div className="report-card report-score">
          <div className="score-ring">
            <svg viewBox="0 0 120 120" className="score-svg">
              <circle className="score-track" cx="60" cy="60" r="52" />
              <circle className="score-fill" cx="60" cy="60" r="52" />
            </svg>
            <div className="score-inner">
              <span>87</span>
              <small>OVERALL SCORE</small>
            </div>
          </div>
        </div>

        {/* MISSING NUMBERS */}

        <div className="report-card">

          <span className="report-label">
            MISSING DIGITS
          </span>

          <h4>
            4 • 7
          </h4>

          <p>
            Areas requiring conscious
            development.
          </p>

        </div>

        {/* REPEATED NUMBERS */}

        <div className="report-card">

          <span className="report-label">
            POWER PATTERN
          </span>

          <h4>
            8 • 8 • 8
          </h4>

          <p>
            Repetition amplifies influence
            and ambition.
          </p>

        </div>

        {/* AI INSIGHT */}

        <div className="report-card report-wide">
          <div className="pulse-dot" />

          <span className="report-label">
            AI INSIGHT
          </span>

          <p>
            Strong communication tendencies
            combine with ambitious energy.
            The report identifies strengths,
            blind spots and hidden numerical
            patterns unique to your mobile
            number.
          </p>

        </div>

        {/* METRICS */}

        <div className="report-card metric">
          <span>72%</span>
          <small>Wealth</small>
          <div className="metric-bar-wrap">
            <div className="metric-bar" style={{ "--pct": "72%" }} />
          </div>
        </div>

        <div className="report-card metric">
          <span>81%</span>
          <small>Career</small>
          <div className="metric-bar-wrap">
            <div className="metric-bar" style={{ "--pct": "81%" }} />
          </div>
        </div>

        <div className="report-card metric">
          <span>76%</span>
          <small>Relationships</small>
          <div className="metric-bar-wrap">
            <div className="metric-bar" style={{ "--pct": "76%" }} />
          </div>
        </div>

      </div>

    </section>

  );

}