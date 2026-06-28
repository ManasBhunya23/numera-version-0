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

const handleBack = () => {


setStep(1);

setCountry(null);

setNumber("");

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
    onComplete={() => setStep(4)}
    />

  }

  {
  step === 4 &&

  <Report />
  }

</section>


);

}
