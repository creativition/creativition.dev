import React from "react";
import useMedia from "use-media";
import { Link } from "react-router-dom";

import './Navbar.css';
import Logo from "../logo.png"

//<p>{isWide ? "a" : "b"}</p>

const Navbar = () => {
    const isWide = useMedia({minWidth: "1000px"});
    return (
        <nav className="nav">
            <div className="content">
                <div className="logo">
                    <Link to={"/"}><img src={Logo} alt="logo" /></Link>
                </div>
                <ul>
                    <li><Link to={"/About"}>About</Link></li>
                    <li><Link to={"/Member"}>Member</Link></li>
                    <li><Link to={"/Projects"}>Projects</Link></li>
                    <li><Link to={"/Portfolio"}>Portfolio</Link></li>
                    <li><Link to={"/Contact"}>Contact</Link></li>
                </ul>
            </div>
        </nav>
    )
};

export default Navbar;