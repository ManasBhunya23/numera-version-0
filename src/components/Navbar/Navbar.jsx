import { Sparkles } from "lucide-react";

export default function Navbar() {

const scrollToSection = (className) => {


document
  .querySelector(`.${className}`)
  ?.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });


};

return (


<nav className="navbar">

  <div
    className="nav-logo"
    onClick={() =>
      scrollToSection("hero")
    }
  >

    <Sparkles
      size={18}
      strokeWidth={1.5}
    />

    <span>
      NUMERA
    </span>

  </div>

  <div className="nav-links">

    <button
      onClick={() =>
        scrollToSection("how-it-works")
      }
    >
      Methodology
    </button>

    <button
      onClick={() =>
        scrollToSection("report-preview")
      }
    >
      Sample Report
    </button>

    <button>
      Login
    </button>

    <button
      className="nav-cta"
      onClick={() =>
        window.location.href = "/analyze"
      }
    >
      Get Started
    </button>

  </div>

</nav>


);

}
