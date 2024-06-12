import React, { useState } from "react";
import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaLinkedin,
} from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./style.scss";

const Footer = () => {
    const [activePopup, setActivePopup] = useState(null);

    const descriptions = {
        terms: "Terms of Use: Here you can find the rules and regulations for using our movie streaming service.",
        privacy: "Privacy Policy: We value your privacy. Learn how we handle your personal information.",
        about: "About: Discover more about Movix and our mission to bring you the best movie streaming experience.",
        blog: "Blog: Stay updated with the latest news, trends, and tips in the world of movies and streaming.",
        faq: "FAQ: Have questions? Find answers to the most frequently asked questions about our service."
    };

    const handleItemClick = (item) => {
        setActivePopup(item === activePopup ? null : item);
    };

    return (
        <footer className="footer">
            <ContentWrapper>
                <ul className="menuItems">
                    <li className="menuItem" onClick={() => handleItemClick('terms')}>Terms Of Use</li>
                    <li className="menuItem" onClick={() => handleItemClick('privacy')}>Privacy-Policy</li>
                    <li className="menuItem" onClick={() => handleItemClick('about')}>About</li>
                    <li className="menuItem" onClick={() => handleItemClick('blog')}>Blog</li>
                    <li className="menuItem" onClick={() => handleItemClick('faq')}>FAQ</li>
                </ul>
                {activePopup && (
                    <div className="popupDescription">
                        {descriptions[activePopup]}
                    </div>
                )}
                <div className="infoText">
                    Welcome to Movix, your ultimate destination for streaming the latest blockbuster movies, 
                    timeless classics, and everything in between. With Movix, immerse yourself in a world of 
                    cinematic delight, right at your fingertips. Experience the magic of movies with Movix. 
                    Dive into a world of blockbuster hits, timeless classics, and hidden gems across all genres. 
                    Enjoy seamless streaming on any device, anywhere, and discover unlimited entertainment at your fingertips. 
                    Join Movix today and start your cinematic journey!
                </div>
                <div className="menuItem" style={{ padding: "20px", justifyItems: "center" }}>
                    Made with ❤️ in India | Design & Developed by Faizan@Khan
                </div>
                <div className="socialIcons">
                    <span className="icon">
                        <FaFacebookF />
                    </span>
                    <span className="icon">
                        <FaInstagram />
                    </span>
                    <span className="icon">
                        <FaTwitter />
                    </span>
                    <span className="icon">
                        <FaLinkedin />
                    </span>
                </div>
            </ContentWrapper>
        </footer>
    );
};

export default Footer;
