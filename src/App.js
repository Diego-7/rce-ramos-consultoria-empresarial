import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
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
   <Container customClass="min-height">
   <Routes>
     <Route path="/" element={<Home />} />
 <Route path="/contact" element={<Contact />} />
 <Route path="/about" element={<About />} />
   </Routes>
 </Container>
   <Footer />
   </Router>
 ) 
}

export default App;
