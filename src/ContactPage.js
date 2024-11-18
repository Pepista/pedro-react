// ContactPage.js
import React from 'react';
import Header from './Header';
import './ContactPage.css';  // Import CSS souboru

const ContactPage = () => {
  return (
    <div className="contact-page-container">
        <Header />
        <div className="contact-header">
          <h1>Kontakt</h1>
          <p>Rád se s tebou spojím!! Tady jsou různé způsoby, jak mě můžeš kontaktovat:</p>
        </div>

        <div className="contact-method">
          <h2>Email</h2>
          <p>Pokud máš otázky, připomínky nebo chceš začít spolupracovat, napiš mi na email: <a href="mailto:pejo6814@example.com">pejo6814@example.com</a></p>
        </div>

        <div className="contact-method">
          <h2>Telefon</h2>
          <p>Pokud preferuješ rychlý telefonní kontakt, zavolej mi na číslo: <a href="tel:+420731 192 028">+420 731 192 028</a></p>
        </div>

        <div className="contact-method">
          <h2>LinkedIn</h2>
          <p>Pro profesní spojení nebo networking mě můžeš najít na LinkedIn: <a href="https://www.linkedin.com/in/Pepista" target="_blank" rel="noopener noreferrer">linkedin.com/in/Pepista</a></p>
        </div>

        <div className="contact-method">
          <h2>GitHub</h2>
          <p>Pokud tě zajímají moje projekty, podívej se na můj GitHub profil: <a href="https://github.com/Pepista" target="_blank" rel="noopener noreferrer">github.com/Pepista</a></p>
        </div>

        <div className="contact-method">
          <h2>Twitter</h2>
          <p>Pro rychlé aktualizace a technologické novinky mě sleduj na Twitteru: <a href="https://twitter.com/Pepista" target="_blank" rel="noopener noreferrer">@Pepista</a></p>
        </div>

        <div className="contact-method">
          <h2>Facebook</h2>
          <p>Pokud máš zájem o přátelské spojení, najdeš mě také na Facebooku: <a href="https://www.facebook.com/Petr_Cechak" target="_blank" rel="noopener noreferrer">facebook.com/Petr_Cechak</a></p>
        </div>
    </div>
  );
}

export default ContactPage;
