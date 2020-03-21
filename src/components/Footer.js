import React from 'react';
import { Flag } from "semantic-ui-react";
import Logo from "../assets/images/logo.png";

const Footer = () => {
    return (
        <footer>
            <img alt="LockScreenMe" src={Logo} />

            <div className="logo">
                LockScreenMe
            </div>
            <p>Designed with &#x2764; by Nehemie KOFFI, from Côte d'Ivoire <Flag name='ci' /> </p>
            <p>&copy; 2020</p>
        </footer>
    );
};

export default Footer;