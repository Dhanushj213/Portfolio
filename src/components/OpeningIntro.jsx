import React, { useEffect, useState } from 'react';
import './OpeningIntro.css';

/**
 * OpeningIntro Component
 *
 * Lightweight, native SVG + CSS opening brand animation.
 * Features the official bow-and-arrow mark progressively drawn on screen.
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
          viewBox="0 0 1024 1024"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="opening-logo-svg"
          aria-hidden="true"
        >
          {/* Bow: One continuous stroke (Limb + String) */}
          <path
            className="opening-bow-path"
            d="M 208 58 C 150 67 115 105 116 145 C 117 185 150 215 195 235 C 290 270 450 285 580 350 C 640 380 670 415 655 470 C 640 525 610 540 650 570 C 730 595 850 635 905 715 C 935 760 930 845 895 905 C 885 925 905 950 950 950 C 990 950 1000 915 995 900 L 905 949 L 385 790 L 350 710 L 135 210"
          />

          {/* Arrow: One continuous stroke pointing ~45 degrees toward upper-right */}
          <path
            className="opening-arrow-path"
            d="M 290 800 C 265 780 265 750 290 730 C 315 750 340 775 360 795 L 850 265"
          />

          {/* Arrowhead: Razor-sharp swept-back arrowhead completed in portfolio red (#E50914) */}
          <path
            className="opening-arrowhead-path"
            d="M 971 120 L 942 152 L 914 191 L 898 219 L 898 221 L 889 237 L 883 252 L 864 291 L 862 293 L 861 297 L 839 331 L 815 357 L 834 330 L 846 305 L 855 276 L 856 268 L 859 261 L 863 235 L 865 230 L 865 226 L 869 217 L 870 207 L 869 206 L 856 206 L 843 209 L 823 216 L 811 222 L 814 223 L 820 220 L 830 218 L 846 217 L 854 221 L 856 224 L 856 232 L 848 244 L 785 303 L 813 275 L 812 274 L 808 275 L 808 269 L 807 268 L 805 269 L 793 281 L 778 293 L 842 234 L 843 230 L 840 227 L 835 225 L 823 226 L 810 230 L 806 230 L 779 239 L 774 242 L 771 242 L 753 252 L 737 264 L 731 270 L 729 271 L 735 264 L 764 238 L 804 211 L 843 189 L 893 164 L 895 162 L 899 161 L 912 153 L 916 152 L 970 121 Z"
          />
        </svg>
      </div>
    </div>
  );
};

export default OpeningIntro;
