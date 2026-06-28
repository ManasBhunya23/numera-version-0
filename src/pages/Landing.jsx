import Navbar from "../components/Navbar/Navbar";
import Starfield from "../components/Background/Starfield";

import Hero from "../components/Sections/Hero/Hero";
import HowItWorks from "../components/Sections/HowItWorks/HowItWorks";
import ReportPreview from "../components/Sections/ReportPreview/ReportPreview";
import Pricing from "../components/Sections/Pricing/Pricing";
import Footer from "../components/Sections/Footer/Footer";

export default function Landing({ setPage }) {

  return (

    <div className="landing">

      <Starfield />

      <Navbar />

      <Hero setPage={setPage} />

      <HowItWorks />

      <ReportPreview />

      <Pricing />

      <Footer />

    </div>

  );

}