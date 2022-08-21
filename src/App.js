import './css/App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar';
import Header from './components/header';
// import Language from './components/language';
import Portofolio from './components/portofolio';
import Map from './components/map';
import Footer from './components/footer';
import About from './components/about';

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      {/* <Language /> */}
      <Portofolio />
      <Map />
      <Footer />
    </>
  );
}

export default App;
