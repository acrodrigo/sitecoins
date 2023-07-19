import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
//import Logo from "./Logo";
import NavItem from "./NavItem";
import styles from "../Layout/styles/Navbar.module.css"


const MENU_LIST = [
    { text: "Home", href: "/" },
    { text: "Comprar", href: "/comprar" },
];

function Navbar() {
  
    const [navActive, setNavActive] = useState(null);
    const [activeIdx, setActiveIdx] = useState(-1);

    return (
        <header className={styles.header}> 
            <nav className={styles.nav}>
                <Link href="/" ><h1>FifaCoins</h1></Link>
                <div onClick={() => setNavActive(!navActive)} className={styles.nav__menu_bar}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div className={`${ navActive ? styles.active : "" } ${styles.nav__menu_list}`}>
                    {MENU_LIST.map((menu, idx) => (
                        <div key={idx} onClick={() => {setNavActive(false)}}>
                            {console.log(menu, idx)}
                            <NavItem active={activeIdx === idx} {...menu}/>
                        </div>
                    ))}
                </div>
            </nav>
        </header>
    );
};

export default Navbar;