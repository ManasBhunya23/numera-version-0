import { useEffect, useMemo, useRef, useState } from "react";
import gsap from "gsap";

export default function CosmicLoader({ onComplete }) {

  const progressRef = useRef({ value: 0 });

  const [progress, setProgress] = useState(0);

  const stars = useMemo(() => {

    return Array.from({ length: 180 }, () => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      size: Math.random() > 0.9 ? 3 : 2
    }));

  }, []);

  const shimmerStars = useMemo(() => {

    return Array.from({ length: 12 }, () => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: `${Math.random() * 20}s`
    }));

  }, []);

  useEffect(() => {

    gsap.to(progressRef.current, {

      value: 100,

      duration: 7,

      ease: "power2.inOut",

      onUpdate: () => {

        setProgress(
          Math.floor(
            progressRef.current.value
          )
        );

      },

      onComplete: () => {

        onComplete();

      }

    });

  }, []);

  const offset =
    140 -
    (progress / 100) * 170;

  return (

    <div className="loader">

      <div className="constellation-bg">

        {stars.map((star, i) => (

          <span
            key={i}
            className="star"
            style={{
              left: star.left,
              top: star.top,
              width: star.size,
              height: star.size
            }}
          />

        ))}

        {shimmerStars.map((star, i) => (

          <span
            key={`bright-${i}`}
            className="bright-star"
            style={{
              left: star.left,
              top: star.top,
              animationDelay: star.delay
            }}
          />

        ))}

      </div>

      <div className="loader-content">

        {/* LEFT : MOON */}

        <div className="loader-left">

          <svg
            width="300"
            height="300"
            viewBox="0 0 300 300"
          >

            <defs>

              <mask id="moonMask">

                <rect
                  width="300"
                  height="300"
                  fill="black"
                />

                <circle
                  cx="140"
                  cy="140"
                  r="95"
                  fill="white"
                />

                <circle
                  cx={140 + offset}
                  cy="140"
                  r="95"
                  fill="black"
                />

              </mask>

            </defs>

            <circle
              cx="140"
              cy="140"
              r="95"
              fill="#F5F5F0"
              mask="url(#moonMask)"
            />

          </svg>

        </div>

        {/* =====================================================
            APPLICATION NAME
            Change only this text when renaming the application
        ===================================================== */}

        <div className="loader-brand">

          NUMERA

        </div>

        {/* RIGHT : LOADING */}

        <div className="loader-number">

          {String(progress).padStart(3, "0")}

        </div>

      </div>

    </div>

  );

}