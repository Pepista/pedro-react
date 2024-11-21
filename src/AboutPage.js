// AboutPage.js
import React from 'react';
import Header from './Header';
import './AboutPage.css';
import sexyImage from './sexy.jpg'; // Ujistěte se, že cesta k obrázku je správná

const AboutPage = () => {
    return (
        <div className="about-page">
            <Header />
            <div className="about-container">
                <div className="about-content">
                    <h1>O mně</h1>
                    <p>Jsem student IT, který se zajímá o technologie a inovace.</p>
                    <p>Rád pracuji na projektech zaměřených na webové a mobilní aplikace.</p>
                    <p>Moje zaměření je také na automatizaci a zlepšování procesů.</p>
                    <p>Chci se stát odborníkem v IT a zároveň rozvíjet vlastní podnikání.</p>
                    <p>Věřím, že kombinace technických dovedností a podnikavosti mi pomůže dosáhnout úspěchu.</p>
                </div>
                <div className="about-image">
                    <img src={sexyImage} alt="Pedro Joestar" />
                </div>
            </div>
        </div>
    );
}

export default AboutPage;
