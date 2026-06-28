import "./Hero.css";

export default function Hero({ report }) {

  return (

    <section className="report-hero">

      <div className="hero-score-wrapper">

        <div className="hero-score-ring">

          <span className="hero-score">

            {report.hero.score}

          </span>

        </div>

      </div>

      <p className="hero-kicker">

        NUMBER INTELLIGENCE SCORE

      </p>

      <h1 className="hero-title">

        {report.hero.archetype}

      </h1>

      <p className="hero-description">

        {report.hero.summary}

      </p>

      <div className="hero-keywords">

        {

          report.keywords.map((keyword) => (

            <span
              key={keyword}
              className="keyword-pill"
            >

              {keyword}

            </span>

          ))

        }

      </div>

    </section>

  );

}