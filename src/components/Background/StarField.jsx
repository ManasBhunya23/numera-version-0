import { useMemo } from "react";

export default function Starfield() {

  const stars = useMemo(() => {

    return Array.from({ length: 220 }, () => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: Math.random() > 0.95 ? 3 : 2
    }));

  }, []);

  const shimmerStars = useMemo(() => {

    return Array.from({ length: 12 }, () => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 20
    }));

  }, []);

  return (

    <div className="starfield">

      {stars.map((star, i) => (

        <span
          key={i}
          className="starfield-star"
          style={{
            left: `${star.left}%`,
            top: `${star.top}%`,
            width: `${star.size}px`,
            height: `${star.size}px`
          }}
        />

      ))}

      {shimmerStars.map((star, i) => (

        <span
          key={`bright-${i}`}
          className="starfield-bright-star"
          style={{
            left: `${star.left}%`,
            top: `${star.top}%`,
            animationDelay: `${star.delay}s`
          }}
        />

      ))}

      <svg
        className="constellation-svg"
        viewBox="0 0 1000 1000"
        preserveAspectRatio="none"
      >

        {/* constellation 1 */}

        <line x1="120" y1="180" x2="200" y2="240" />
        <line x1="200" y1="240" x2="320" y2="200" />
        <line x1="320" y1="200" x2="420" y2="270" />

        {/* constellation 2 */}

        <line x1="720" y1="140" x2="820" y2="210" />
        <line x1="820" y1="210" x2="900" y2="150" />

        {/* constellation 3 */}

        <line x1="580" y1="720" x2="660" y2="790" />
        <line x1="660" y1="790" x2="770" y2="740" />
        <line x1="770" y1="740" x2="860" y2="820" />

      </svg>

    </div>

  );

}