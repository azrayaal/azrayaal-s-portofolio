import './css/App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar';
import Header from './components/header/header';
// import Language from './components/language';
import Portofolio from './components/portofolio';
import Map from './components/map';
import Footer from './components/footer';
import About from './components/about/about';
import Home from './components/home/home';
import Porto2 from './components/project2/porto2';

function App() {
  return (
    <>
      <Navbar />
      {/* <Home /> */}
      <Header />
      <About />
      {/* <Portofolio /> */}
      <Porto2 />
      <Map />
      <Footer />
    </>
  );
}

export default App;
