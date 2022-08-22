import React from 'react';
// import '../map.css';
import { Helmet } from 'react-helmet';

export default function Map() {
  return (
    <>
      <Helmet>
        <script src="https://cdn.startbootstrap.com/sb-forms-latest.js" crossorigin="anonymous"></script>
      </Helmet>
      <section class="page-section py-4  bg-primary " id="contact">
        <div class="container px-4 px-lg-5">
          <div class=" text-center py-2">
            <h2 class="mt-0 text-light">Let's Get In Touch!</h2>
            <hr class="divider text-white py-1" />
          </div>
          <div class="row gx-4 gx-lg-5 gy-3 mb-5 ">
            <div className="col-lg-6">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63434.12571111961!2d106.68195023321354!3d-6.441170016138301!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69e7ed3f257b6f%3A0x401576d14fed400!2sParung%2C%20Bogor%20Regency%2C%20West%20Java!5e0!3m2!1sen!2sid!4v1658675708962!5m2!1sen!2sid"
                class="h-100 w-100"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            <div class="col-lg-6">
              <form id="contactForm" data-sb-form-api-token="API_TOKEN">
                <div class="form-floating mb-3">
                  <input class="form-control" id="name" type="text" placeholder="Enter your name..." data-sb-validations="required" />
                  <label for="name">Full name</label>
                  <div class="invalid-feedback" data-sb-feedback="name:required">
                    A name is required.
                  </div>
                </div>
                <div class="form-floating mb-3">
                  <input class="form-control" id="email" type="email" placeholder="name@example.com" data-sb-validations="required,email" />
                  <label for="email">Email address</label>
                  <div class="invalid-feedback" data-sb-feedback="email:required">
                    An email is required.
                  </div>
                  <div class="invalid-feedback" data-sb-feedback="email:email">
                    Email is not valid.
                  </div>
                </div>
                <div class="form-floating mb-3">
                  <input class="form-control" id="phone" type="tel" placeholder="(123) 456-7890" data-sb-validations="required" />
                  <label for="phone">Phone number</label>
                  <div class="invalid-feedback" data-sb-feedback="phone:required">
                    A phone number is required.
                  </div>
                </div>
                <div class="form-floating mb-3">
                  <textarea class="form-control" id="message" type="text" placeholder="Enter your message here..." data-sb-validations="required"></textarea>
                  <label for="message">Message</label>
                  <div class="invalid-feedback" data-sb-feedback="message:required">
                    A message is required.
                  </div>
                </div>
                <div class="d-none" id="submitSuccessMessage">
                  <div class="text-center mb-3">
                    <div class="fw-bolder">Form submission successful!</div>
                    To activate this form, sign up at
                    <br />
                    <a href="https://startbootstrap.com/solution/contact-forms">https://startbootstrap.com/solution/contact-forms</a>
                  </div>
                </div>
                <div class="d-none" id="submitErrorMessage">
                  <div class="text-center text-danger mb-3">Error sending message!</div>
                </div>
                <div class="d-grid">
                  <button class="btn btn-light btn-xl disabled" id="submitButton" type="submit">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
