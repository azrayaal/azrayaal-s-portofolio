import React from 'react';
// import '../header.css';
// import '../index.css';
import '../css/header.css';
import '../css/index.css';

import img from '../img/Multitasking-bro.png';

export default function Header() {
  return (
    <header class=" d-flex align-items-center bgpolkadot">
      <div class="container px-4 px-lg-5 text-center">
        <div className="row gx-4">
          <div className="col-lg-6 ">
            <img src={img} className="w-100 h-100" alt="" />
          </div>
          <div className="col-lg-6 ">
            <h1 class="pb-1">Hey, I'm</h1>
            <h1 className="text-primary">Azra Yazid</h1>
            <h3 class="pb-5">
              <em>Junior Web Developer</em>
            </h3>
            <a class="btn btn-primary btn-xl button " href="#about">
              Find Out More
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
