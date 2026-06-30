export default function NumberStep({

  country,
  number,
  setNumber,
  onSubmit,
  onChangeCountry

}) {

  const digitLen = country?.digits || 10;

  const handleChange = (e) => {

    const cleanNumber =
      e.target.value
        .replace(/\D/g, "")
        .slice(0, digitLen);

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

      <button
        className="selected-country"
        onClick={onChangeCountry}
        type="button"
      >

        <span>{country?.flag}</span>

        <span>{country?.name}</span>

        <span className="selected-country-change">
          Change
        </span>

      </button>

      <div className="number-input-wrapper">

        <div className="country-prefix">
          {country?.code}
        </div>

        <input

          className="number-input"

          type="tel"

          inputMode="numeric"

          maxLength={digitLen}

          value={number}

          placeholder={"X".repeat(digitLen)}

          onChange={handleChange}

          autoFocus

        />

      </div>

      <div className="digit-counter">

        {number.length}/{digitLen}

      </div>

      <button

        className="analyze-button"

        disabled={number.length !== digitLen}

        onClick={onSubmit}

      >
        Analyze Number
      </button>

    </div>

  );

}