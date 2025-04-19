import React from "react";
import SmartLineSquareTitle from "../../../../../components/smart-line-square-title";

function HomeProductsSection() {
  return (
    <div id="home-products-section">
      <SmartLineSquareTitle
        format="lstsl"
        title="Our Products"
        fontFamily="Italian1"
        fontSize={34}
        linesWidth={60}
        firstLineWidth={10}
        color="#e9c18d"
      />
    </div>
  );
}

export default HomeProductsSection;
