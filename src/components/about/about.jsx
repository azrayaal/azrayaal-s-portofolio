import React from 'react';
import { Helmet } from 'react-helmet';
import './about.css';

// import html from '../../src/img/html.png';
// import css from '../../src/img/css-3.png';
// import bootstrap from '../../src/img/bootstrap.png';
// import javascript from '../../src/img/js.png';
// import tailwind from '../../src/img/tailwind.png';
// import mongodb from '../../src/img/mongodb-removebg-preview.png';
// import expressjs from '../../src/img/express.png';
// import reactjs from '../../src/img/structure.png';
// import nodejs from '../../src/img/nodejs.png';

// function Language(props) {
//   return (
//     <div className="col-3 gap-2 py-3">
//       <img className=" img-fluid mx-auto" src={props.src} alt="" />
//     </div>
//   );
// }

export default function About() {
  return (
    <section class="content-section bg-about text-white text-center" id="about">
      <Helmet>
        <script src="https://kit.fontawesome.com/82c9faa8ad.js" crossorigin="anonymous"></script>
      </Helmet>
      <div class="container px-4 px-lg-5 text-center">
        <div class="row gx-4 gy-5 gx-lg-5 justify-content-center">
          <div class="col-lg-6">
            <h2>About Me</h2>
            <p class="lead mb-5 fw-semibold text-justify">
              Well, I have had an interest in computers since my uncle made something that make me fascinated. in 2009 I started learning about the computer, until I forgot about my academic school. I also like things in computer
              technology, especially computer mathematics, and quantum computers My first program started by calculating age and from there I began to get more interested and make one of my new hobbies. At first it was difficult for me, it
              starts with just learning basic algorithms up to complicated counts, and utilizing quantum computer theory.
            </p>
            <button class="  lead fw-semibold" href="#services">
              Download CV
            </button>
          </div>
          <div class="col-lg-6 ">
            <p className="pb-3 text-justify lead fw-semibold">I learned about web developing since march 2021, and continued to use Bootstrap and Tailwind to make website, followed learn to using stack web such as MERN at December 2022</p>
            <div className="row">
              {/* <Language src={html} />
              <Language src={css} />
              <Language src={javascript} />
              <Language src={bootstrap} />
              <Language src={tailwind} />
              <Language src={mongodb} />
              <Language src={expressjs} />
              <Language src={reactjs} />
              <Language src={nodejs} /> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
