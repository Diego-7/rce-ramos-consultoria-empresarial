import styles from './Home.module.css'
import {Container, Row, Col} from 'react-bootstrap'
import banner1 from '../../img/banner1.jpg'
import banner2 from '../../img/banner2.jpg'
import banner3 from '../../img/banner3.jpg'
import grid1 from '../../img/homegrid/grid1.png'
import grid2 from '../../img/homegrid/grid2.png'
import grid3 from '../../img/homegrid/grid3.png'
import grid4 from '../../img/homegrid/grid4.png'
import grid5 from '../../img/homegrid/grid5.png'
import grid6 from '../../img/homegrid/grid6.png'

import {
    MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBCarouselElement, MDBCarouselCaption,} from 'mdb-react-ui-kit';
function Home() {
    return(
        <section className={styles.home_container}>

        {/*Carousel*/}

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
              <button  className={styles.main_btn}>Simule</button>
            </MDBCarouselCaption>
          </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel>

      <h1>Vantagens de nossa parceria:</h1>
      
      {/*grid*/}

      <Container>
        <Row className={styles.homeGrid1}>
          <Col className={styles.gridItem}>
          <a href="/contact"><img src={grid1} alt="Análise de negócios" /></a><br />
          <a href="/contact"> <p>Análise de mercado</p></a><br />
          <span>Melhore os resultados e ganhe agilidade nos negócios com ações baseadas em dados e análises.</span><br />
          <a href="">Saiba mais</a>
          </Col>
          <Col className={styles.gridItem}>
          <a href="/contact"><img src={grid2} alt="Estratégia de cliente" /></a><br />
          <a href="/contact"> <p>Estratégia de cliente</p></a><br />
          <span>Conheça seu cliente, seus comportamentos, desejos e espectativas, com uma estratégia testada e aprovada.</span><br />
          <a href="/contact">Saiba mais</a>
          </Col>
          <Col className={styles.gridItem}>
          <a href="/contact"><img src={grid3} alt="e-comerce" /></a><br />
          <a href="/contact"> <p>Integração ao e-comerce</p></a><br />
          <span>Ajudamos sua empresa em todas as etapas da integração até manutenção do principal meio de negócios atualmente, o e-comerce.</span><br />
          <a href="/contact">Saiba mais</a>
          </Col>
        </Row>
        <Row className={styles.homeGrid1}>
          <Col className={styles.gridItem}>
          <a href="/contact"><img src={grid4} alt="Treinamento profissional" /></a><br />
          <a href="/contact"> <p>Treinamento profissional</p></a><br />
          <span>Tenha acesso aos melhores cursos do mercado para toda sua equipe.</span><br />
          <a href="/contact">Saiba mais</a>
          </Col>
          <Col className={styles.gridItem}>
          <a href="/contact"><img src={grid5} alt="Gestão de processos" /></a><br /> 
          <a href="/contact"> <p>Gestão de processos</p></a><br />
          <span>Nosso objetivo é proporcionar uma completa e abrangente melhoria operacional e financeira.</span><br />
          <a href="/contact">Saiba mais</a>
          </Col>
          <Col className={styles.gridItem}>
          <a href="/contact"><img src={grid6} alt="Produtividade e otimização" /></a><br />
          <a href="/contact"> <p>Produtividade e otimização</p></a><br />
          <span>Atuamos em todas as áreas do negócio garantindo um ambiente de crescimento e ganhos para todos.</span><br />
          <a href="/contact">Saiba mais</a>
          </Col>
        </Row>
      </Container>

      </section>

)
    
}

export default Home;