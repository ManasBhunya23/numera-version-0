import "./Overview.css";

export default function Overview({ report }) {

  const overview = report.overview;

  return (

    <section className="overview">

      <div className="overview-grid">

        {/* LEFT */}

        <div className="overview-card large">

          <h3 className="card-title">
            Core Numbers
          </h3>

          <div className="core-grid">

            <div className="core-item">
              <span className="core-label">Root</span>
              <span className="core-value">
                {overview.rootNumber}
              </span>
            </div>

            <div className="core-item">
              <span className="core-label">Destiny</span>
              <span className="core-value">
                {overview.destinyNumber}
              </span>
            </div>

            <div className="core-item">
              <span className="core-label">Soul</span>
              <span className="core-value">
                {overview.soulNumber}
              </span>
            </div>

            <div className="core-item">
              <span className="core-label">Expression</span>
              <span className="core-value">
                {overview.expressionNumber}
              </span>
            </div>

          </div>

        </div>

        {/* RIGHT */}

        <div className="overview-card">

          <h3 className="card-title">
            Intelligence Metrics
          </h3>

          <div className="metric-list">

            {

              Object.entries(overview.metrics).map(([name,value])=>(

                <div key={name}>

                  <div className="metric-row">

                    <span>{name}</span>

                    <span>{value}%</span>

                  </div>

                  <div className="metric-bar">

                    <div
                      className="metric-fill"
                      style={{
                        width:`${value}%`
                      }}
                    />

                  </div>

                </div>

              ))

            }

          </div>

        </div>

      </div>

      {/* MATRIX */}

      <div className="overview-card matrix-card">

        <h3 className="card-title">
          Number Frequency Matrix
        </h3>

        <div className="matrix-grid">

          {

            report.frequencyMatrix.map(item=>(

              <div
                className="matrix-cell"
                key={item.number}
              >

                <span className="matrix-number">
                  {item.number}
                </span>

                <span className="matrix-count">
                  ×{item.count}
                </span>

              </div>

            ))

          }

        </div>

      </div>

      {/* BOTTOM */}

      <div className="overview-bottom">

        {/* Dominant */}

        <div className="overview-card">

          <h3 className="card-title">
            Dominant Numbers
          </h3>

          {

            report.dominantNumbers.map(item=>(

              <div
                key={item.number}
                className="dominant-row"
              >

                <span>

                  {item.number}

                </span>

                <div className="dominant-bar">

                  <div
                    className="dominant-fill"
                    style={{
                      width:`${item.score}%`
                    }}
                  />

                </div>

                <span>

                  {item.score}%

                </span>

              </div>

            ))

          }

        </div>

        {/* Growth */}

        <div className="overview-card">

          <h3 className="card-title">
            Growth Areas
          </h3>

          {

            report.growthAreas.map(item=>(

              <div
                key={item.title}
                className="growth-pill"
              >

                <strong>

                  {item.title}

                </strong>

                <span>

                  {" "}
                  • {item.score}%

                </span>

              </div>

            ))

          }

        </div>

      </div>

    </section>

  );

}