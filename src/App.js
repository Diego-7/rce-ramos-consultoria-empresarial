import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Home from './components/pages/Home';
import Contact from './components/pages/Contact';
import About from './components/pages/About';
import Container from './components/layout/Container';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

function App() {
 return(
   <Router>
     <Navbar />
   <Switch>
   <Container customClass="min-height">
     <Route exact path="/">
 <Home />
 </Route>
 <Route path="/contact">
 <Contact />
 </Route>
 <Route path="/about">
 <About />
 </Route>
 </Container>
   </Switch>
   <Footer />
   </Router>
 ) 
}

export default App;
