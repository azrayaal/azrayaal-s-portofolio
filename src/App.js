import './css/App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Navbaar from '../src/components/navbar/navbar';
import Header from './components/header/header';
import Map from './components/map/map';
import Footer from '../src/components/footer/footer';
import About from '../src/components/about/about';
import Porto2 from '../src/components/project2/porto2';
import Particlebackground from './components/react-particle/particle';

function App() {
  return (
    <>
      <Navbaar />
      <Particlebackground />
      <Header />
      <About />
      <Porto2 />
      <Map />
      <Footer />
    </>
  );
}

export default App;
