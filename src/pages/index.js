import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import BoxPrice from '../components/BoxPrice'
import styles from '../styles/Home.module.css'

import ea_image from "../public/images/ea_fc.png"
import CarouselFeedback from '../components/CarouselFeedback'


export default function index(){
    return(
        <div>

            <div className={styles.home_destaque}>
                
                <div className={styles.home_left}>
                    <Image src={ea_image} layout="fill" /*width={250} height={250}*/ alt="EA imagem" />
                </div>

                <div className={styles.home_right}>
                    <h2>Compre coins para montar sua seleção e jogar com seus jogadores favoritos.</h2>  
                </div>
            </div>

            <BoxPrice style={{border: "1px solid black"}} />

            {/*<div className={styles.box_contato}>
                <Link className={styles.btn} href="https://wa.me/5571984322568" >Entre em contato para saber as formas de pagamento e como receber as coins</Link>
            </div>*/}

            <CarouselFeedback />

        </div>
    )
}