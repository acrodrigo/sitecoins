import Link from 'next/link'

import CoinsPrice from './CoinsPrice'
import styles from './styles/BoxPrice.module.css'


const coin_prices = [
    { name: "100.000", price: 18 },
    { name: "300.000", price: 36 },
    { name: "500.000", price: 72 },
    { name: "700.000", price: 72 },
    { name: "1.000.000", price: 72 },
    { name: "1.200.000", price: 72 },
]

export default function BoxPrice(){
    return(
        <>
        <div className={styles.box}>
            
            {coin_prices.map((coins, index) => (
                <CoinsPrice key={index} name={coins.name} price={coins.price}/>
            ))}

        </div>
            <div className={styles.box_contato}>
            <Link className={styles.btn} href="/comprar" >Saiba mais</Link>
        </div>
        </>
    )
}