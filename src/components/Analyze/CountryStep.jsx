import { useState, useMemo } from "react";
import countries from "./Countries";

export default function CountryStep({ onSelect }) {

  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return countries;
    return countries.filter(c =>
      c.name.toLowerCase().includes(q) || c.code.includes(q)
    );
  }, [query]);

  return (

    <div className="analyze-card analyze-card--wide">

      <p className="analyze-kicker">
        STEP 01
      </p>

      <h1>
        Select Country
      </h1>

      <p className="analyze-subtitle">
        Choose the country associated with your mobile number.
      </p>

      <div className="country-search-wrap">

        <svg className="country-search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="7" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>

        <input
          className="country-search-input"
          type="text"
          placeholder="Search country or code..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />

        {query && (
          <button
            className="country-search-clear"
            onClick={() => setQuery("")}
            aria-label="Clear search"
          >
            ×
          </button>
        )}

      </div>

      {filtered.length > 0 ? (

        <div className="country-grid">

          {filtered.map((c) => (

            <button
              key={c.name}
              className="country-card"
              onClick={() => onSelect(c)}
            >
              <span className="country-flag">
                {c.flag}
              </span>

              <span className="country-name">
                {c.name}
              </span>

              <span className="country-code">
                {c.code}
              </span>
            </button>

          ))}

        </div>

      ) : (

        <div className="country-empty">
          No countries match "{query}"
        </div>

      )}

    </div>

  );

}