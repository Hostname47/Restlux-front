import SmartLineSquareTitle from "../../../../../components/smart-line-square-title";

function HomeProductsSection() {
  return (
    <div id="home-products-section">
      <SmartLineSquareTitle
        format="lstsl"
        title="What do we offer"
        fontFamily="Italian1"
        fontSize={34}
        linesWidth={60}
        color="#e9c18d"
        style={{ justifyContent: "center" }}
      />
    </div>
  );
}

export default HomeProductsSection;
