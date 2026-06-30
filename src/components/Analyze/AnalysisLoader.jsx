import { useEffect, useState, useMemo } from "react";
import { runEngine, ROOT_PLANETS } from "./Numerologyengine";

export default function AnalysisLoader({

  fullNumber,   // digits only, e.g. "9876543210"
  onComplete    // called with the full engine report when done

}) {

  const messages = [

    "Mapping Frequencies",

    "Detecting Patterns",

    "Calculating Energy Matrix",

    "Analyzing Repetitions",

    "Generating Insights"

  ];

  const [index, setIndex] = useState(0);
  const [revealed, setRevealed] = useState(false);

  // Engine runs synchronously and instantly — the staged
  // messages below are a deliberate pace, not a real wait.
  const report = useMemo(() => {
    if (!fullNumber) return null;
    return runEngine(fullNumber);
  }, [fullNumber]);

  useEffect(() => {

    const interval = setInterval(() => {

      setIndex((prev) => {

        if (prev < messages.length - 1) {

          return prev + 1;

        }

        clearInterval(interval);

        setRevealed(true);

        if (onComplete) {

          setTimeout(() => {

            onComplete(report);

          }, 1400);

        }

        return prev;

      });

    }, 1500);

    return () => clearInterval(interval);

  }, [onComplete, report]);

  const digits = (fullNumber || "00000").split("").slice(0, 5);

  return (

    <div className="loader-screen">

      <div className="loader-orb"></div>

      <h2>

        <div className="loader-digits">

          {digits.map((d, i) => (
            <span key={i}>{d}</span>
          ))}

        </div>

      </h2>

      {/* Root number reveal — fades/scales in once analysis settles */}
      <div className={`loader-root${revealed ? " loader-root--visible" : ""}`}>

        <span className="loader-root-label">
          Root Number
        </span>

        <div className="loader-root-value">

          <span className="loader-root-number">
            {report?.root ?? "—"}
          </span>

          <span className="loader-root-planet">
            {report ? `Ruled by ${report.rootPlanet}` : ""}
          </span>

        </div>

      </div>

      <p className="loader-message">
        {messages[index]}
      </p>

      <div className="loader-progress">

        <div
          className="loader-progress-fill"
          style={{
            width: `${((index + 1) / messages.length) * 100}%`
          }}
        />

      </div>

    </div>

  );

}