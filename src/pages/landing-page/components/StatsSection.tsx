import ToTheStars from "../../../assets/images/svgs/flat/stars.svg";

function StatsSection() {
  return (
    <div id="landing-page-stats-section">
      <div>
        <img src={ToTheStars} className="illustration" />
        <div className="content-container">
          <span>What the Numbers Say</span>
          <h2>
            Our Stats, Your<span className="highlighted">Confidence</span>
          </h2>
          <div className="stats-container">
            <div className="stat-container">
              <span className="value">60k</span>
              <span className="label">Dishes served</span>
            </div>
            <div className="stat-container">
              <span className="value">90</span>
              <span className="label">Tasty dishes</span>
            </div>
            <div className="stat-container">
              <span className="value">10</span>
              <span className="label">Restaurants</span>
            </div>
            <div className="stat-container">
              <span className="value">89k</span>
              <span className="label">Happy customers</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StatsSection;
