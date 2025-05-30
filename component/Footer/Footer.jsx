import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer>
            <div className="footer-content">
                {/* 1. Section: Logo ve iconlar */}
                <div className="footer-section">
                    <div className="head-1">
                        <img src="images\iteration-2-images\footer\logo-footer.svg" alt="Logo" />
                    </div>
                    <div className="icon-item">
                        <img src="images\iteration-2-images\footer\icons\icon-1.png" alt="Adres Ikonu" />
                        <div className="icon-text">
                            <p>341 Londonderry Road,</p>
                            <p>Istanbul Türkiye</p>
                        </div>
                    </div>
                    <div className="icon-item">
                        <img src="images\iteration-2-images\footer\icons\icon-2.png" alt="Email Ikonu" />
                        <div className="icon-text">
                            <p>aciktim@teknolojiyemekler.com</p>
                        </div>
                    </div>
                    <div className="icon-item">
                        <img src="images\iteration-2-images\footer\icons\icon-3.png" alt="Telefon Ikonu" />
                        <div className="icon-text">
                            <p>+90 216 123 45 67</p>
                        </div>
                    </div>
                </div>

                {/* 2. Section: Linkler ve yazılar */}
                <div className="footer-section">
                    <div className="hot-menu">
                        <h2>Hot Menu</h2>
                        <p>Terminal Pizza</p>
                        <p>5 Kişililk Hackathlon Pizza</p>
                        <p>useEffect Tavuklu Pizza</p>
                        <p>Beyaz Console Frosty</p>
                        <p>Testler Geçti Mutlu Burger</p>
                        <p>Position Absolute Acı Burger</p>
                    </div>
                </div>

                {/* 3. Section: Instagram */}
                <div className="footer-section">
                    <h2>Instagram</h2>
                    <div className="insta-section">
                        <img src="images\iteration-2-images\footer\insta\li-0.png" alt="Instagram 0" />
                        <img src="images\iteration-2-images\footer\insta\li-1.png" alt="Instagram 1" />
                        <img src="images\iteration-2-images\footer\insta\li-2.png" alt="Instagram 2" />
                        <img src="images\iteration-2-images\footer\insta\li-3.png" alt="Instagram 3" />
                        <img src="images\iteration-2-images\footer\insta\li-4.png" alt="Instagram 4" />
                        <img src="images\iteration-2-images\footer\insta\li-5.png" alt="Instagram 5" />
                    </div>
                </div>
            </div>

            <div className="footer-bar">
                <div className="bar-right">
                    <p>@ 2023 Teknolojik Yemekler</p>
                </div>
                <div className="bar-left">
                    <i className="fa-brands fa-twitter"></i>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
