export default function CountryStep({ onSelect }) {

  return (

    <div className="analyze-card">

      <p className="analyze-kicker">
        STEP 01
      </p>

      <h1>
        Select Country
      </h1>

      <p className="analyze-subtitle">
        Choose the country associated with your mobile number.
      </p>

      <div className="country-grid">

        <button
          className="country-card"
          onClick={() => onSelect("India")}
        >
          <span className="country-flag">
            🇮🇳
          </span>

          <span className="country-name">
            India
          </span>

          <span className="country-code">
            +91
          </span>
        </button>

      </div>

    </div>

  );

}