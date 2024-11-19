
import "react";
import './Homepage.css';

function Homepage() {
  return (
    <div className="Homepage">
      <header>
        <h1>Kamerwallet</h1>
      </header>
      <nav>
        <a href="#" className="active">Banque</a>
        <a href="#">Services</a>
        <a href="#">Carte</a>
        <a href="#">Connexion</a>
      </nav>
      <main>
        <h2>Bienvenue sur Kamerwallet</h2>
        <p>Votre plateforme de transactions bancaires en ligne dans un système sécurisé.</p>
        <button>Commencer</button>
        <div className="card">
          <img src="https://d41chssnpqdne.cloudfront.net/user_upload_by_module/chat_bot/files/26117711/QshNNVfAYlZFpWjE.png" alt="Carte bancaire" />
          <div className="card-content">
            <h3>0123 4567 8901 2345</h3>
            <p>CARDHOLDER NAME</p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Homepage;