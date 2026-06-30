import { useEffect, useState } from "react";
import { Sparkles, Menu, X } from "lucide-react";
import "./Navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (className) => {
    setMenuOpen(false);

    document
      .querySelector(`.${className}`)
      ?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
  };

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>

      {/* ---------- Logo ---------- */}

      <div
        className="nav-logo"
        onClick={() => scrollToSection("hero")}
      >
        <Sparkles
          size={18}
          strokeWidth={1.5}
        />

        <div className="logo-text">

          <h3>
            NUMERA
          </h3>

          {/* <span>
            AI Numerical Intelligence
          </span> */}

        </div>

      </div>

      {/* ---------- Desktop Navigation ---------- */}

      <div className="nav-links desktop-nav">

        <button
          onClick={() => scrollToSection("hero")}
        >
          Home
        </button>

        <button
          onClick={() => scrollToSection("intelligence")}
        >
          Intelligence
        </button>

        <button
          onClick={() => scrollToSection("how-it-works")}
        >
          How It Works
        </button>

        <button
          onClick={() => scrollToSection("pricing")}
        >
          Pricing
        </button>

        <button
          onClick={() => scrollToSection("faq")}
        >
          FAQ
        </button>

      </div>

      {/* ---------- Desktop Actions ---------- */}

      <div className="nav-actions desktop-nav">

        <button className="nav-login">
          Sign In
        </button>

        <button
          className="nav-cta"
          onClick={() => (window.location.href = "/analyze")}
        >
          Analyze Number
        </button>

      </div>

      {/* ---------- Mobile Toggle ---------- */}

      <button
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle Navigation"
      >
        {menuOpen ? (
          <X size={26} />
        ) : (
          <Menu size={26} />
        )}
      </button>

      {/* ---------- Mobile Menu ---------- */}

      <div
        className={`mobile-menu ${
          menuOpen ? "open" : ""
        }`}
      >

        <button
          onClick={() => scrollToSection("hero")}
        >
          Home
        </button>

        <button
          onClick={() => scrollToSection("intelligence")}
        >
          Intelligence
        </button>

        <button
          onClick={() => scrollToSection("how-it-works")}
        >
          How It Works
        </button>

        <button
          onClick={() => scrollToSection("pricing")}
        >
          Pricing
        </button>

        <button
          onClick={() => scrollToSection("faq")}
        >
          FAQ
        </button>

        <div className="mobile-divider" />

        <button className="mobile-login">
          Sign In
        </button>

        <button
          className="mobile-cta"
          onClick={() => (window.location.href = "/analyze")}
        >
          Analyze Number
        </button>

      </div>

    </nav>
  );
}