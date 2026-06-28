import "./Download.css";

export default function Download() {

  const handleDownload = () => {

    window.print();

  };

  return (

    <section className="download-section">

      <div className="download-card">

        <p className="section-kicker">

          EXPORT REPORT

        </p>

        <h2>

          Save Your Personalized Analysis

        </h2>

        <p className="download-description">

          Download a printable PDF version of your complete numerology
          intelligence report including analysis, strengths, recommendations
          and executive summary.

        </p>

        <button

          className="download-button"

          onClick={handleDownload}

        >

          Download PDF

        </button>

      </div>

    </section>

  );

}