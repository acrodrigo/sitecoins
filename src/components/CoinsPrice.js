
import Link from 'next/link'
import Image from 'next/image'

import { SiPlaystation, SiXbox, SiOrigin } from "react-icons/si"
import styles from './styles/CoinsPrice.module.css'

import { fifacoins } from "../public/images/fifacoins.jpeg"


import { futcoins } from "./../public/images/fifacoins.jpeg"

export default function CoinsPrice({ name, price }){

    return(
        <div className={styles.card}>
            
            <div className={styles.logo}>
                <Image src={'https://skycoach.gg/storage/uploads/products/fifa-coins1652548200_picture_item_small.png'} width="150" height="150" alt="fifacoins" />
            </div>    
            
            <div className={styles.description}>
                {/*<h3>{name}</h3>*/} 
                <h3>{name}</h3>
                <h4 className={styles.price}>R$ {price}</h4>
                <div className={styles.console}>
                    <SiPlaystation className={styles.playstation}/>
                    <SiXbox className={styles.xbox} />
                    {/*<SiOrigin className={styles.origin} />*/}
                </div>
            </div>    
            {/*<Link href="/" className={styles.btn}>Comprar</Link>*/}
            
        </div>
    )

}