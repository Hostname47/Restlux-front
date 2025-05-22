import Footer from "../../../components/footer";
import ClientLayout from "../../../layout/client";
import "./styles.css";

function PrivacyPolicyPage() {
  return (
    <ClientLayout id="p-policy">
      <div className="header">
        <div className="container">
          <h1>Politique de Confidentialité</h1>
        </div>
      </div>

      <div className="container">
        <div className="section">
          <h2>Introduction</h2>
          <p>
            Bienvenue dans notre système de gestion de restaurant de luxe. Nous
            accordons une grande importance à la protection de vos données
            personnelles et à votre vie privée. Cette politique de
            confidentialité explique comment nous collectons, utilisons et
            protégeons vos informations.
          </p>
        </div>

        <div className="section">
          <h2>Collecte des Données</h2>
          <p>Nous collectons les informations suivantes :</p>
          <ul>
            <li>
              Informations de réservation (nom, prénom, email, numéro de
              téléphone)
            </li>
            <li>Préférences alimentaires et restrictions diététiques</li>
            <li>Historique des visites et des commandes</li>
            <li>Informations de paiement (traitées de manière sécurisée)</li>
          </ul>
        </div>

        <div className="section">
          <h2>Utilisation des Données</h2>
          <p>Vos données sont utilisées pour :</p>
          <ul>
            <li>Gérer vos réservations et commandes</li>
            <li>Personnaliser votre expérience culinaire</li>
            <li>Améliorer nos services</li>
            <li>Vous informer des événements spéciaux et promotions</li>
          </ul>
        </div>

        <div className="section">
          <h2>Protection des Données</h2>
          <p>
            Nous mettons en œuvre des mesures de sécurité strictes pour protéger
            vos données :
          </p>
          <ul>
            <li>Chiffrement des données sensibles</li>
            <li>Accès restreint aux informations personnelles</li>
            <li>Formation régulière de notre personnel</li>
            <li>Audits de sécurité périodiques</li>
          </ul>
        </div>

        <div className="section">
          <h2>Vos Droits</h2>
          <p>Conformément au RGPD, vous avez le droit de :</p>
          <ul>
            <li>Accéder à vos données personnelles</li>
            <li>Demander la rectification de vos données</li>
            <li>Demander la suppression de vos données</li>
            <li>Vous opposer au traitement de vos données</li>
            <li>Demander la portabilité de vos données</li>
          </ul>
        </div>

        <div className="section">
          <h2>Contact</h2>
          <p>
            Pour toute question concernant notre politique de confidentialité,
            veuillez nous contacter :
          </p>
          <p>Email : privacy@restaurantdeluxe.com</p>
          <p>Téléphone : +212 6 77 33 88 00</p>
        </div>

        <a href="index.html" className="back-button">
          Retour à l'accueil
        </a>
      </div>
      <Footer />
    </ClientLayout>
  );
}

export default PrivacyPolicyPage;
