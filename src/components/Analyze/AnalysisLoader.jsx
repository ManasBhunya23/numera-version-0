import { useEffect, useState } from "react";

export default function AnalysisLoader({

  onComplete

}) {

  const messages = [

    "Mapping Frequencies",

    "Detecting Patterns",

    "Calculating Energy Matrix",

    "Analyzing Repetitions",

    "Generating Insights"

  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {

    const interval = setInterval(() => {

      setIndex((prev) => {

        if (prev < messages.length - 1) {

          return prev + 1;

        }

        clearInterval(interval);

        if (onComplete) {

          setTimeout(() => {

            onComplete();

          }, 1200);

        }

        return prev;

      });

    }, 1500);

    return () => clearInterval(interval);

  }, [onComplete]);

  return (

    <div className="loader-screen">

      <div className="loader-orb"></div>

      <h2>

        <div className="loader-digits">

            <span>8</span>

            <span>4</span>

            <span>7</span>

            <span>8</span>

            <span>2</span>

            </div>

      </h2>

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