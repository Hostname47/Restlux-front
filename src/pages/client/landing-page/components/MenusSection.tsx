function MenusSection() {
  return (
    <section id="landing-page-menus-section" className="section">
      <div>
        <span className="section-above-title">Special selection</span>
        <h2 className="section-title">
          FROM OUR <span className="highlighted">Menu"</span>
        </h2>
        <p className="dashes-separator">- - - - - - - - -</p>
        <div className="columns">
          <div className="column">
            <div className="item-container">
              <div className="name-and-price">
                <span className="name">BEEF BURGER MEAL</span>
                <div className="separator" />
                <span className="price">$32</span>
              </div>
              <p className="description">
                Classic greek salad, barrel aged feta cheese, bread
              </p>
            </div>

            <div className="item-container">
              <div className="name-and-price">
                <span className="name">ROASTED LAMB RUMP</span>
                <div className="separator" />
                <span className="price">$25</span>
              </div>
              <p className="description">
                Grilled lamb cutlets, pomegranate glaze, butternut
              </p>
            </div>

            <div className="item-container">
              <div className="name-and-price">
                <span className="name">PAN SEARED SEA BASS</span>
                <div className="separator" />
                <span className="price">$38</span>
              </div>
              <p className="description">
                Saffron and mussel’s broth, new potatoes, beans
              </p>
            </div>

            <div className="item-container">
              <div className="name-and-price">
                <span className="name">KING PRAWNS AND LOBSTER</span>
                <div className="separator" />
                <span className="price">$38</span>
              </div>
              <p className="description">Creamy saffron, sauce Vierge</p>
            </div>

            <div className="item-container">
              <div className="name-and-price">
                <span className="name">CITRUS CURED SALMON</span>
                <div className="separator" />
                <span className="price">$41</span>
              </div>
              <p className="description">
                Horseradish creme fraiche, beetroot mousse, oil
              </p>
            </div>
          </div>
          <div className="column">
            <div className="item-container">
              <div className="name-and-price">
                <span className="name">PAN SEARED SCALLOPS</span>
                <div className="separator" />
                <span className="price">$29</span>
              </div>
              <p className="description">
                Saffron, celeriac puree, black pudding, olive oil
              </p>
            </div>

            <div className="item-container">
              <div className="name-and-price">
                <span className="name">BAKED CAMEMBERT</span>
                <div className="separator" />
                <span className="price">$25</span>
              </div>
              <p className="description">
                Red onion marmalade, garlic Focaccia bread, grilled fig
              </p>
            </div>

            <div className="item-container">
              <div className="name-and-price">
                <span className="name">BRAISED OX CHEEK RAVIOLI</span>
                <div className="separator" />
                <span className="price">$38</span>
              </div>
              <p className="description">
                Mediterranean olives casserole, celeriac puree
              </p>
            </div>

            <div className="item-container">
              <div className="name-and-price">
                <span className="name">CORN FED CHICKEN</span>
                <div className="separator" />
                <span className="price">$17</span>
              </div>
              <p className="description">
                Wild mushrooms, truffle potatoes, braised leeks, carrots
              </p>
            </div>

            <div className="item-container">
              <div className="name-and-price">
                <span className="name">NDUJA PORK CHICKEN TERRINE</span>
                <div className="separator" />
                <span className="price">$41</span>
              </div>
              <p className="description">
                Smoked duck breast, pistachio, smoked pancetta
              </p>
            </div>
          </div>
        </div>

        <button className="button-style-4">View all</button>
      </div>
    </section>
  );
}

export default MenusSection;
