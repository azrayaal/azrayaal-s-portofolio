import React from 'react';
import '../css/portofolio.css';
import porto1 from '../../src/img/portfolio-1.jpg';
import porto2 from '../../src/img/AdminAzrayaal.png';
import porto3 from '../../src/img/portfolio-3.jpg';
import porto4 from '../../src/img/portfolio-4.jpg';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// 700x467

export default function Portofolio() {
  return (
    <section class="content-section bgpolkadot" id="portfolio">
      <div class="container px-4 px-lg-5">
        <div class="content-section-heading text-center">
          <h3 class="text-secondary mb-0">Portfolio</h3>
          <h2 class="mb-5">Recent Projects That I Made</h2>
        </div>
        <Row class="row gx-0">
          <Col class="col-lg-6">
            <a class="portfolio-item" href="#!">
              <div class="caption">
                <div class="caption-content">
                  <div class="h2">Stationary</div>
                  <p class="mb-0">A yellow pencil with envelopes on a clean, blue backdrop!</p>
                </div>
              </div>
              <img class="img-fluid" src={porto1} alt="..." />
            </a>
          </Col>
          <Col class="col-lg-6">
            <a class="portfolio-item" href="https://admin-storegg-azrayaal.herokuapp.com/">
              <div class="caption">
                <div class="caption-content">
                  <div class="h2">Admin Store Azrayaal</div>
                  <p class="mb-0">An admin website that build using NodeJS ExpressJS and MongoDB as the database </p>
                </div>
              </div>
              <img class="img-fluid porto2" src={porto2} alt="..." />
            </a>
          </Col>
          <Col class="col-lg-6">
            <a class="portfolio-item" href="#!">
              <div class="caption">
                <div class="caption-content">
                  <div class="h2">Strawberries</div>
                  <p class="mb-0">Strawberries are such a tasty snack, especially with a little sugar on top!</p>
                </div>
              </div>
              <img class="img-fluid" src={porto3} alt="..." />
            </a>
          </Col>
          <Col class="col-lg-6">
            <a class="portfolio-item" href="#!">
              <div class="caption">
                <div class="caption-content">
                  <div class="h2">Workspace</div>
                  <p class="mb-0">A yellow workspace with some scissors, pencils, and other objects.</p>
                </div>
              </div>
              <img class="img-fluid" src={porto4} alt="..." />
            </a>
          </Col>
        </Row>
      </div>
    </section>
  );
}
