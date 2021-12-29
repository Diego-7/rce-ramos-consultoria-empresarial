import team from '../../img/team.jpg'
import styles from './About.module.css'

function About(){
    return(
        <section className={styles.about_container}>
            <div>
                <img src={team} alt="Equipe" className={styles.about_img}/>
            </div>
            <p className={styles.about_us}>Estamos a anos no mercado ajudando cada vez mais empresas a crecer, nós acreditamos que melhor que contratar ótimos profissionais é treina-los, levando assim cada vez mais pessoas a ter um futuro brilhante, com esse pensamento fazemos cada vez mais empresas pequenas se tornarem grandes, venha nos conhecer e veja que juntos somos mais fortes!</p>
            </section>



    )
}

export default About