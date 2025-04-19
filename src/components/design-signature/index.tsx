import { useEffect, useRef, useState } from "react";
import HeartIcon from "../icons/HeartIcon";
import "./styles.css";

function DesignersSignature() {
  const animationRef = useRef<null | number>(null);
  const [heartSize, setHeartSize] = useState(16);

  useEffect(() => {
    animationRef.current = setInterval(() => {
      setHeartSize((v) => (v === 16 ? 19 : 16));
    }, 400);

    return () => {
      if (animationRef.current) {
        clearInterval(animationRef.current);
      }
    };
  }, [heartSize]);

  return (
    <div id="signature-container">
      <span className="signature-text">Crafted with</span>
      <span id="signature-heart-container" title="Love">
        <HeartIcon
          title="Love"
          fill="#FF0000"
          width={heartSize}
          height={heartSize}
        />
      </span>
      <span className="signature-text">
        by{" "}
        <span
          className="link"
          title="NAOUFEL - AMINE - MOUAD - DOUNIA - HAMZA - MERYEM"
        >
          TEAM37
        </span>
      </span>
    </div>
  );
}

export default DesignersSignature;
