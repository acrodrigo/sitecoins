import Link from "next/link";

import styles from "../Layout/styles/Navbar.module.css"


function NavItem ({ text, href, active }){
  
    return(
        <Link href={href} className={styles.nav__item}>
            {text}
        </Link>
    );
};

export default NavItem;