import styles from '../styles/Comprar.module.css'


const TUTORIAL_COMPRAR = [
    { id: 1, title:"What is Lorem Ipsum?", text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."},
    { id: 2, title:"What is Lorem Ipsum?", text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."},
    { id: 3, title:"What is Lorem Ipsum?", text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."},
    { id: 4, title:"What is Lorem Ipsum?", text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."},
]

export default function buy(){

    return(
        <div className={styles.buy}>

        <h1>Como comprar</h1>
        
        <div className={styles.walk_box}>
            {TUTORIAL_COMPRAR.map((walks) => (
                <Walk key={walks.id} id={walks.id} title={walks.title} text={walks.text} />
            ))}
        </div>
        </div>
    )
}


function Walk({id, title, text}){

    return (
        <div className={styles.walk}>
            <h3>{title}</h3>
            <p>{text}</p>
        </div>
    )

}