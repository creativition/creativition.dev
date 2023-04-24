import React from "react";
import { Link } from "react-router-dom";

import './Footer.css';
import Logo from "../logo.png"

const returnTop = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
};

const Footer = () => {
    return (
        <footer className="footer">
            <div className="returnTop" onClick={returnTop}>トップへ戻る</div>
            <img src={Logo} onClick={returnTop} alt="logo" />
            <div className="links">
                <ul>
                    <li><Link to={"/About"}>About</Link></li>
                    <li><Link to={"/Member"}>Member</Link></li>
                    <li><Link to={"/Projects"}>Projects</Link></li>
                    <li><Link to={"/Portfolio"}>Portfolio</Link></li>
                    <li><Link to={"/Contact"}>Contact</Link></li>
                </ul>
            </div>
            <p>Copyright © 2023- Creativition All Rights Reserved.</p>
        </footer>
    )
};

export default Footer;