import Link from 'next/link'
import { FaInstagram, FaTwitter } from 'react-icons/fa'

import styles from './styles/Footer.module.css'


export default function Footer(){
    
    return(
        <footer className={styles.footer}>
            <ul className={styles.social_links}>
                <li><Link href="#"><FaInstagram /></Link></li>
                <li><Link href="#"><FaTwitter /></Link></li>
            </ul>
            <p>
                <span>FifaCoins</span> &copy; 2023
            </p>
        </footer>
    )
}