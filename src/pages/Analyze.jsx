import { useState } from "react";

import CountryStep from "../components/Analyze/CountryStep";
import NumberStep from "../components/Analyze/NumberStep";
import AnalysisLoader from "../components/Analyze/AnalysisLoader";
import Report from "../pages/Report";
import "../styles/Analyze.css";

export default function Analyze({ setPage }) {

  const [step, setStep] = useState(1);

  const [country, setCountry] = useState(null);
  const [number, setNumber] = useState("");

  // Holds the full deterministic engine output once the
  // loader finishes computing it — Report reads from this.
  const [report, setReport] = useState(null);

  const handleBack = () => {

    setStep(1);

    setCountry(null);
    setNumber("");
    setReport(null);

    setPage("landing");

  };

  return (

    <section className="analyze-page">

      <button
        className="analyze-back"
        onClick={handleBack}
      >
        ← Back
      </button>

      {

        step === 1 &&

        <CountryStep

          onSelect={(selectedCountry) => {

            setCountry(selectedCountry);

            setStep(2);

          }}

        />

      }

      {

        step === 2 &&

        <NumberStep

          country={country}

          number={number}

          setNumber={setNumber}

          onSubmit={() => setStep(3)}

        />

      }

      {

        step === 3 &&

        <AnalysisLoader

          fullNumber={number}

          onComplete={(generatedReport) => {

            // AnalysisLoader hands back the full engine report
            // the instant it finishes its staged animation —
            // store it, then move to the Report screen.
            setReport(generatedReport);

            setStep(4);

          }}

        />

      }

      {

        step === 4 &&

        <Report
          report={report}
          country={country}
          number={number}
        />

      }

    </section>

  );

}