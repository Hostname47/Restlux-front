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
        color="#e9c18d"
        style={{ justifyContent: "center" }}
      />
      <p style={{ textAlign: "center", margin: "26px 0" }}>Reservations here</p>
      <SmartLineSquareTitle
        format="lstsl"
        title="Subscriptions"
        fontFamily="Italian1"
        fontSize={34}
        linesWidth={60}
        color="#e9c18d"
        style={{ justifyContent: "center", margin: "26px 0" }}
      />
      <p style={{ textAlign: "center" }}>Subscriptions here</p>
    </div>
  );
}

export default HomeReservationSection;
