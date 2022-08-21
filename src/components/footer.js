import React from 'react';
// import '../footer.css';
import '../css/footer.css';
import bootstrap from '../../src/img/bootstrap.png';
import reactjs from '../../src/img/structure.png';
import facebook from '../../src/img/fb-removebg-preview.png';
import linken from '../../src/img/linkedin-icon-logo-png-transparent-removebg-preview.png';
import github from '../../src/img/logo_github_icon_143196.png';
import instagram from '../../src/img/instagram.png';

export default function Footer() {
  return (
    <>
      {/* <footer class="footer text-center bgpolkadotfooter">
        <div class="container px-4 px-lg-5">
          <div className="row">
            <div className="col-lg-3">
              <h4 className="text-white fs-5 py-2">This site is powered by:</h4>
              <div className="row">
                <div className="col-3"></div>
                <div className="col-3">
                  <img className=" img-fluid mx-auto" src={reactjs} alt="" />
                </div>
                <div className="col-3">
                  <img className=" img-fluid mx-auto" src={bootstrap} alt="" />
                </div>
                <div className="col-3"></div>
              </div>
            </div>
            <div className="col-lg-3"></div>
            <div className="col-lg-3"></div>
            <div className="col-lg-3">
              <h4 className="text-white fs-5 py-2">Get in touch with me:</h4>
              <div className="row">
                <div className="col-3">
                  <img className=" img-fluid mx-auto" src={facebook} alt="" />
                </div>
                <div className="col-3">
                  <img className=" img-fluid mx-auto" src={linken} alt="" />
                </div>
                <div className="col-3">
                  <img className=" img-fluid mx-auto" src={github} alt="" />
                </div>
                <div className="col-3">
                  <img className=" img-fluid mx-auto" src={instagram} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer> */}
      <div className="bg-dark">
        <p class="py-3 text-center text-light small mb-0">Copyright &copy; azrayaal 2022</p>
      </div>
    </>
  );
}
