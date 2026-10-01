import React, { useEffect, useState } from 'react';
import './OpeningIntro.css';

/**
 * OpeningIntro Component
 *
 * Lightweight, native SVG + CSS opening brand animation.
 * Replaces the previous video intro with a minimalist, high-precision
 * hand-drawn bow and arrow symbol.
 *
 * Timeline:
 *  - 0.0s–0.4s: Pure black screen (#000000)
 *  - 0.4s–1.5s: Bow drawn using one continuous-looking stroke
 *  - 1.5s–2.3s: Arrow drawn pointing ~45° toward the upper-right
 *  - 2.3s–2.6s: Red arrowhead (#E50914) completes the mark
 *  - 2.6s–3.0s: Symbol settles with subtle scale (0.96 -> 1.0)
 *  - 3.0s onward: Smooth fade-out into the portfolio
 */
const OpeningIntro = ({ onComplete }) => {
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    // Accessibility: check for prefers-reduced-motion
    if (typeof window !== 'undefined' && window.matchMedia) {
      const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
      if (mediaQuery.matches) {
        const reducedTimer = setTimeout(() => {
          if (onComplete) onComplete();
        }, 400);
        return () => clearTimeout(reducedTimer);
      }
    }

    // Standard animation completes at 3.4s (3.0s mark + 0.4s transition)
    const completeTimer = setTimeout(() => {
      if (onComplete) onComplete();
    }, 3400);

    return () => clearTimeout(completeTimer);
  }, [onComplete]);

  const handleSkip = () => {
    if (!isFading) {
      setIsFading(true);
      setTimeout(() => {
        if (onComplete) onComplete();
      }, 300);
    }
  };

  return (
    <div
      className={`opening-intro-overlay ${isFading ? 'is-fading' : ''}`}
      onClick={handleSkip}
      role="region"
      aria-label="Portfolio Introduction Animation"
    >
      <div className="opening-logo-container">
        <svg
          viewBox="0 0 1024 935"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="opening-logo-svg"
          aria-hidden="true"
        >
          {/* Bow: One continuous stroke (Limb + String) */}
          <path
            className="opening-bow-path"
            d="M 185 28 C 130 35 90 70 88 110 C 86 150 120 180 165 200 C 260 235 420 250 550 315 C 610 345 640 380 625 435 C 610 490 580 505 620 535 C 700 560 820 600 875 680 C 905 725 900 810 865 870 C 855 890 875 918 920 918 C 960 918 970 880 965 865 L 875 915 L 355 755 L 320 675 L 105 175"
          />

          {/* Arrow: One continuous stroke pointing ~45 degrees toward upper-right */}
          <path
            className="opening-arrow-path"
            d="M 260 765 C 235 745 235 715 260 695 C 285 715 310 740 330 760 L 850 230"
          />

          {/* Arrowhead: Razor-sharp swept-back arrowhead completed in portfolio red (#E50914) */}
          <path
            className="opening-arrowhead-path"
            d="M 988 74 L 950 118 L 927 154 L 912 187 L 904 210 L 904 213 L 901 219 L 897 235 L 883 270 L 865 300 L 851 317 L 846 321 L 860 302 L 872 280 L 882 253 L 884 241 L 886 236 L 890 202 L 896 178 L 896 173 L 891 167 L 877 168 L 839 183 L 843 184 L 849 182 L 868 182 L 872 184 L 876 189 L 876 197 L 873 203 L 868 210 L 852 227 L 850 225 L 842 223 L 865 202 L 868 198 L 869 192 L 866 188 L 862 186 L 851 185 L 826 190 L 795 204 L 775 217 L 761 228 L 751 238 L 748 240 L 749 238 L 766 221 L 795 198 L 823 180 L 890 143 L 931 118 L 958 99 L 987 75 Z"
          />
        </svg>
      </div>
    </div>
  );
};

export default OpeningIntro;
