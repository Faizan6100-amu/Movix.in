import React from "react";
import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaLinkedin,
} from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./style.scss";

const Footer = () => {
    return (
        <footer className="footer">
            <ContentWrapper>
                <ul className="menuItems">
                    <li className="menuItem">Terms Of Use</li>
                    <li className="menuItem">Privacy-Policy</li>
                    <li className="menuItem">About</li>
                    <li className="menuItem">Blog</li>
                    <li className="menuItem">FAQ</li>
                    <li className="menuItem">Admin-gl6100@myamu.in</li>
                </ul>
                <div className="infoText">
                Welcome to Movix, your ultimate destination for streaming the latest blockbuster movies, 
                timeless classics, and everything in between. With Movix, immerse yourself in a world of 
                cinematic delight, right at your fingertips.Experience the magic of movies with Movix. 
                Dive into a world of blockbuster hits, timeless classics, and hidden gems across all genres. 
                Enjoy seamless streaming on any device, anywhere, and discover unlimited entertainment at your fingertips. 
                Join Movix today and start your cinematic journey!
                </div>
                <div className="menuItem" style={{padding: "20px"}}> Made with ❤️ in India</div>
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
