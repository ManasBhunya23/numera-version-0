export default function NumberStep({

  country,
  number,
  setNumber,
  onSubmit

}) {

  const handleChange = (e) => {

    const cleanNumber =
      e.target.value
        .replace(/\D/g, "")
        .slice(0, 10);

    setNumber(cleanNumber);

  };

  return (

    <div className="analyze-card">

      <p className="analyze-kicker">
        STEP 02
      </p>

      <h1>
        Enter Mobile Number
      </h1>

      <div className="selected-country">

        <span>🇮🇳</span>

        <span>{country}</span>

      </div>

      <div className="number-input-wrapper">

        <div className="country-prefix">
          +91
        </div>

        <input

          className="number-input"

          type="tel"

          inputMode="numeric"

          maxLength={10}

          value={number}

          placeholder="9876543210"

          onChange={handleChange}

        />

      </div>

      <div className="digit-counter">

        {number.length}/10

      </div>

      <button

        className="analyze-button"

        disabled={number.length !== 10}

        onClick={onSubmit}

      >
        Analyze Number
      </button>

    </div>

  );

}