import React from 'react';
import '../css/navbar.css';

export default function Navbar() {
  return (
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
