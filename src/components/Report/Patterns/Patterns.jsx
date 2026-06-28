import "./Patterns.css";

export default function Patterns({ report }) {

  return (

    <section className="patterns">

      <div className="patterns-header">

        <p className="section-kicker">
          HIDDEN STRUCTURES
        </p>

        <h2>
          Pattern Detection
        </h2>

        <p className="section-description">
          The AI identified repeating numerical structures, dominant sequences,
          energetic signatures and frequency clusters that influence the overall
          behaviour of this mobile number.
        </p>

      </div>

      <div className="patterns-grid">

        {

          report.patterns.map((item)=>(

            <div
              className="pattern-card"
              key={item.title}
            >

              <div className="pattern-top">

                <div className="pattern-value">

                  {item.value}

                </div>

                <div className="pattern-strength-box">

                  <span className="pattern-strength">

                    {item.strength}%

                  </span>

                  <span className="pattern-confidence">

                    Confidence

                  </span>

                </div>

              </div>

              <h3>

                {item.title}

              </h3>

              <p>

                {item.description}

              </p>

              <div className="pattern-meta">

                <div className="meta-row">

                  <span>

                    Category

                  </span>

                  <strong>

                    {item.category}

                  </strong>

                </div>

                <div className="meta-row">

                  <span>

                    Occurrences

                  </span>

                  <strong>

                    {item.occurrences}

                  </strong>

                </div>

                <div className="meta-row">

                  <span>

                    Impact

                  </span>

                  <strong>

                    {item.impact}

                  </strong>

                </div>

              </div>

              <div className="pattern-footer">

                <span>

                  Detection Strength

                </span>

                <div className="pattern-progress">

                  <div

                    className="pattern-progress-fill"

                    style={{
                      width:`${item.strength}%`
                    }}

                  />

                </div>

              </div>

            </div>

          ))

        }

      </div>

    </section>

  );

}