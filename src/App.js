
import './App.css';
import '../src/stuyleshites/HeaderSwiper.css';
import './stuyleshites/PopularProduqts.css'
import './stuyleshites/footer.css'
import './stuyleshites/footerFoter.css'
import './stuyleshites/Header.css'

import Nav from './nav';
import HeaderSwiper from './componentes/HeaderSwiper';
import PopularProduqts from './componentes/PopularProduqts';
import Footer from './componentes/Footer';
import FooterFooter from './componentes/FooterFooter';
// import Header from './componentes/Header';


function App() {
  return (
    <div className="App">
      <Nav/>
      {/* <Header/> */}
      <HeaderSwiper/>
      <PopularProduqts/>
      <Footer/>
      <FooterFooter/>
    </div>
  );
}

export default App;
