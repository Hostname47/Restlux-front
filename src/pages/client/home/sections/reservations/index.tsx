import SmartLineSquareTitle from "../../../../../components/smart-line-square-title";

function HomeReservationSection() {
  return (
    <div id="home-reservations">
      <SmartLineSquareTitle
        format="lstsl"
        title="Reservations"
        fontFamily="Italian1"
        fontSize={34}
        linesWidth={60}
        style={{ justifySelf: "center" }}
      />
    </div>
  );
}

export default HomeReservationSection;
