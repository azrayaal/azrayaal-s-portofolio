// import React from 'react';
// // import '../header.css';
// // import '../index.css';
import './header.css';
// import '../css/index.css';

// import img from '../img/Multitasking-bro.png';

// export default function Header() {
//   return (
//     <header class=" d-flex align-items-center bgpolkadot">
//       <div class="container px-4 px-lg-5 text-center">
//         <div className="row gx-4">
//           <div className="col-lg-6 ">
//             <img src={img} className="w-100 h-100" alt="" />
//           </div>
//           <div className="col-lg-6 ">
//             <h1 class="pb-1">Hey, I'm</h1>
//             <h1 className="text-primary">Azra Yazid</h1>
//             <h3 class="pb-5">
//               <em>Junior Web Developer</em>
//             </h3>
//             <a class="btn btn-primary btn-xl button " href="#about">
//               Find Out More
//             </a>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// }

import img from '../../img/7f8fd6dd32aa8afc918a5cf6a9fe2933.svg';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Particlebackground from '../react-particle/particle';

export default function Header() {
  return (
    <div className="bodyHeader">
      <Particlebackground />
      <Container className="text-center">
        <Row className="g-5 pt-5 ilangpadding">
          <Col xs={12} md={6} className="text">
            <h1 class="pb-1">Hey, I'm</h1>
            <h1 style={{ color: '#ffd300' }} className="fw-bold">
              Azra Yazid
            </h1>
            <h3 class="pb-5">
              <em>Junior Web Developer</em>
            </h3>
            <button className="lead fw-semibold buttonYellow" href="#about">
              Find Out More
            </button>
          </Col>
          <Col xs={12} md={6}>
            <img src={img} alt="" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
