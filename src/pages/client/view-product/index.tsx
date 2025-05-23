import Footer from "../../../components/footer";
import ClientLayout from "../../../layout/client";
import "./styles.css";

function ProductViewPage() {
  return (
    <ClientLayout id="view-product">
      <div className="container">
        <div className="product-image">
          <img
            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80"
            alt="Plat de luxe"
          />
        </div>
        <div className="product-details">
          <div className="product-title">Filet de Bœuf </div>
          <div className="product-price">48,00 €</div>
          <div className="product-labels">
            <span className="label">&#x1F331; Bio</span>
            <span className="label">&#x1F37D; Chef Signature</span>
            <span className="label">&#x1F957; Sans Gluten</span>
          </div>
          <div className="product-desc">
            Un filet de bœuf d'exception, surmonté d'un foie gras poêlé et
            accompagné d'une sauce truffée. Servi avec une purée de pommes de
            terre maison et légumes de saison. Une expérience gastronomique
            raffinée pour les palais exigeants.
          </div>
          <button className="add-btn">Ajouter au menu</button>
        </div>
      </div>
      <div className="details-section">
        <h3>Ingrédients</h3>
        <ul>
          <li>Filet de bœuf français</li>
          <li>Foie gras </li>
          <li>Pommes de terre</li>
          <li>Légumes de saison</li>
          <li>Beurre fermier</li>
        </ul>
        <h3>Allergènes</h3>
        <ul>
          <li>Lait</li>
          <li>Œuf</li>
        </ul>
        <h3>Description</h3>
        <p>
          Ce plat signature du chef allie la tendreté du bœuf à la richesse du
          foie gras et à l'arôme subtil de la truffe. Idéal pour une expérience
          gastronomique inoubliable dans un cadre luxueux.
        </p>
      </div>
      <Footer />
    </ClientLayout>
  );
}

export default ProductViewPage;
