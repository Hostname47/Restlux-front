import Footer from "../../../components/footer";
import ClientLayout from "../../../layout/client";
import "./styles.css";

function ContactPage() {
  return (
    <ClientLayout id="contact">
      <div className="container">
        <h1>Contactez-nous</h1>
        <p className="subtitle">
          Remplissez le formulaire ci-dessous et nous vous répondrons dans les
          plus brefs délais.
        </p>

        <form>
          <div className="form">
            <div className="content">
              <label>Nom</label>
              <input type="text" placeholder="Votre nom" required />
            </div>

            <div className="content">
              <label>Prénom</label>
              <input type="text" placeholder="Votre prénom" required />
            </div>
          </div>

          <div className="content">
            <label>Email</label>
            <input type="email" placeholder="Votre adresse email" required />
          </div>

          <div className="content">
            <label>Téléphone</label>
            <input
              type="tel"
              placeholder="Votre numéro de téléphone"
              required
            />
          </div>

          <div className="content">
            <label>Sujet</label>
            <input type="text" placeholder="Sujet de votre message" />
          </div>

          <div className="content">
            <label>Message</label>
            <textarea placeholder="Votre message"></textarea>
          </div>

          <div className="checkbox-container">
            <input type="checkbox" id="privacy" />
            <label htmlFor="privacy">
              J'accepte que mes données soient traitées conformément à la{" "}
              <a href="#">politique de confidentialité</a>.
            </label>
          </div>

          <button type="submit" className="submit-btn">
            Envoyer
          </button>
        </form>
      </div>
      <Footer />
    </ClientLayout>
  );
}

export default ContactPage;
