import styles from './Home.module.css'
import banner1 from '../../img/banner1.jpg'
import banner2 from '../../img/banner2.jpg'
import banner3 from '../../img/banner3.jpg'

import {
    MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBCarouselElement, MDBCarouselCaption,} from 'mdb-react-ui-kit';
function Home() {
    return(
        <section className={styles.home_container}>
        <MDBCarousel showIndicators showControls fade>
        <MDBCarouselInner className="main_carousel">
          <MDBCarouselItem className='active'>
            <MDBCarouselElement src={banner1} alt='Consultoria de empresas' />
            <MDBCarouselCaption>
              <h5>Precisa de ajuda com sua empresa?</h5>
              <p>Contamos com uma equipe especializada para alavancar seu negócio</p>
              <button className={styles.main_btn}>Simule</button>
            </MDBCarouselCaption>
          </MDBCarouselItem>
  
          <MDBCarouselItem>
            <MDBCarouselElement src={banner2} alt='Consultoria financeira' />
            <MDBCarouselCaption>
              <h5>Gestão financeira</h5>
              <p>Conte com nossa ajuda para aumentar seus lucros e regularizar suas finanças</p>
              <button className={styles.main_btn}>Simule</button>
            </MDBCarouselCaption>
          </MDBCarouselItem>

          <MDBCarouselItem>
            <MDBCarouselElement src={banner3} alt='Consultoria de e-comerce' />
            <MDBCarouselCaption>
              <h5>Gestão de E-Comerce</h5>
              <p>Somos especialistas em e-comerce podemos te ajudar desde a implementação até a manutenção</p>
              <button className={styles.main_btn}>Simule</button>
            </MDBCarouselCaption>
          </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel>

      <h1>Nosso modelo de negócios:</h1>
      </section>
    )
}

export default Home;