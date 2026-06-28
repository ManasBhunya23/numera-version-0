import { useState } from "react";
import gsap from "gsap";

import CosmicLoader from "./components/Loader/CosmicLoader";
import Starfield from "./components/Background/Starfield";
import Navbar from "./components/Navbar/Navbar";

import Landing from "./pages/Landing";
import Analyze from "./pages/Analyze";

export default function App() {

  const [loaded, setLoaded] = useState(false);

  const [page, setPage] = useState("landing");

  const handleLoaderComplete = () => {

    gsap.to(".loader", {

      opacity: 0,

      duration: 1.2,

      ease: "power2.out",

      onComplete: () => {

        setLoaded(true);

      }

    });

  };

  return (

    <div className="app">

      <Starfield />

      {
        !loaded

          ? (

            <CosmicLoader
              onComplete={handleLoaderComplete}
            />

          )

          : (

            <>

              <Navbar />

              {
                page === "landing"

                  ? (
                    <Landing
                      setPage={setPage}
                    />
                  )

                  : (
                    <Analyze
                      setPage={setPage}
                    />
                  )
              }

            </>

          )
      }

    </div>

  );

}