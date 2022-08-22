import React from 'react';
import '../css/navbar.css';

export default function Navbar() {
  return (
    // <nav class="navbar navbar-expand-lg navbar-light fixed-top py-3" id="mainNav">
    //   <div class="container px-4 px-lg-5">
    //     <a class="navbar-brand" href="#page-top">
    //       Start Bootstrap
    //     </a>
    //     <button class="navbar-toggler navbar-toggler-right" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
    //       <span class="navbar-toggler-icon"></span>
    //     </button>
    //     <div class="collapse navbar-collapse" id="navbarResponsive">
    //       <ul class="navbar-nav ms-auto my-2 my-lg-0">
    //         <li class="nav-item">
    //           <a class="nav-link" href="#about">
    //             About
    //           </a>
    //         </li>
    //         <li class="nav-item">
    //           <a class="nav-link" href="#services">
    //             Services
    //           </a>
    //         </li>
    //         <li class="nav-item">
    //           <a class="nav-link" href="#portfolio">
    //             Portfolio
    //           </a>
    //         </li>
    //         <li class="nav-item">
    //           <a class="nav-link" href="#contact">
    //             Contact
    //           </a>
    //         </li>
    //       </ul>
    //     </div>
    //   </div>
    // </nav>

    <nav class="navbar navbar-expand-lg bg-about">
      <div class="container">
        <a class="navbar-brand link tebel-sedang  text-white" href="#">
          AZRA
        </a>
        <button class="navbar-toggler mb-4" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul class="nav nav-pills">
            <li class="nav-item">
              <a class="nav-link link tebel-sedang text-white" href="#">
                About &nbsp;&nbsp;
              </a>
            </li>
            <li class="nav-item ">
              <a class="nav-link link text-white tebel-sedang" href="#">
                Projects &nbsp;&nbsp;
              </a>
            </li>
            <li class="nav-item ">
              <a class="nav-link active tebel-sedang rounded-pill bg-primary shadow" href="#">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
