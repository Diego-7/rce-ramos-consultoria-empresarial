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

      {/*End of carousel*/}

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

      {/*End of grid*/}

      {/*Body Text*/}

      <Container className={styles.bodyText}>
      <h2>O que é uma consultoria empresarial:</h2>
      <p>
      Esse tipo de serviço funciona como um diagnóstico de problemas e análise do cenário e dos dados de uma empresa. Seu objetivo é trazer soluções para tornar a gestão competitiva e eficiente, melhorando a produtividade, a tomada de decisão e o crescimento e possibilitando redução de custos, eficiência nos processos, otimização de finanças e muitas outras coisas.</p>
      <a href="/contact">Saiba mais</a>

  <h3>Qual a importância da consultoria empresarial?</h3>
  <p>
        Se o empreendedor quer fazer seu negócio crescer e alcançar resultados melhores, então a consultoria empresarial é a ferramenta ideal para ele. O processo de consultoria é fundamental para identificar falhas, setores que necessitam de melhorias e para explorar o potencial da equipe.
        </p>
        <a href="/contact">Saiba mais</a>

        <h4>Como funciona a consultoria empresarial?</h4>
        <p>
        Este é um processo de parceria entre gestor e consultor, que envolve reuniões para a compreensão das demandas apresentadas e da troca de experiências relevantes sobre a realidade do negócio. Além disso, existe uma etapa de análise de dados para o diagnóstico do negócio. 
        </p>
        <a href="/contact">Saiba mais</a>
      </Container>

      {/*End of Body Text*/}

      
      </section>
    )
}

export default Home;