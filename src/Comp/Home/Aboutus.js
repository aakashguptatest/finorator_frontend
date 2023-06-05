import React, { useState } from "react";
import ControlledCarousel from "./Slider";
import "./static/css/main.css";
import "./static/bootstrap/css/bootstrap.css";
// import "./static/css/starter-template.css"

export default function Aboutus() {
  window.addEventListener("DOMContentLoaded", function () {
    const testLinks = document.querySelectorAll("a.test");
    testLinks.forEach(function (link) {
      link.addEventListener("click", function (e) {
        const nextUl = this.nextElementSibling;
        nextUl.style.display =
          nextUl.style.display === "none" ? "block" : "none";
        e.stopPropagation();
        e.preventDefault();
      });
    });
  });

  return (
    <div>
      <div>
        <div class="hero sub-hero text-center partner-hero">
          <div class="container">
            <div className="row" style={{ alignitems: "center" }}>
              <div class="col-lg-12 col-xl-12">
                <div>
                  <h1
                    class="theme-h1 text-center"
                    style={{ margintop: 0, paddingtop: 1 }}
                  >
                    About Finorator
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="section-body about-u">
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-xl-5 col-lg-4">
                <div class="vision-card">
                  <img src={require("./static/assets/vision.png")} />
                  <div class="theme-head text-center">Our Vision</div>
                  <div class="description text-center font-weight-bold">
                    {/* Financial freedom for everyone */}
                    To act as a single leading platform comprehensive to all
                    financial needs and applications for all arrays of users,
                    eradicating the utility of different and separate financial
                    platforms.
                  </div>
                </div>
              </div>
              <div class="col-xl-5 col-lg-4">
                <div class="vision-card">
                  <img src={require("./static/assets/mission.png")} />
                  <div class="theme-head text-center">Our Mission</div>
                  <div class="description text-center font-weight-bold">
                    To act as a single leading platform comprehensive to all
                    financial needs and applications for all arrays of users,
                    eradicating the utility of different and separate financial
                    platforms.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="section-body">
          <div class="container">
            <div class="theme-head text-center">
              Who we are ?
              <div class="description text-center font-weight-bold">
                Our team of Chartered Accountant professional specialized in the
                field of finance have made a unified platform
                <b>FINORATOR</b> to help you accomplish your financial goals
                &amp; manage all financial operations inside a single platform.
              </div>
            </div>
            <div
              id="carouselExampleCaptions"
              class="carousel slide"
              data-ride="carousel"
            >
              <ControlledCarousel />
            </div>
          </div>
        </div>
        <div class="section-body features">
          <div class="container">
            <div class="theme-head text-center">Why choose Finorator</div>
            <div class="row mb-5">
              <div class="col-xl-4 col-lg-4 col-sm-6">
                <div class="feature-bigcard">
                  <img
                    src={require("./static/assets/main-feature1.svg").default}
                  />
                  <div class="description">
                    To be a Financially Literate person and increase your
                    knowledge bank gaining financial wisdom
                  </div>
                </div>
              </div>
              <div class="col-xl-4 col-lg-4 col-sm-6">
                <div class="feature-bigcard">
                  <img
                    src={require("./static/assets/main-feature2.svg").default}
                  />
                  <div class="description">
                    To spend less time and money on otherwise financial
                    applications of different financial sectors
                  </div>
                </div>
              </div>
              <div class="col-xl-4 col-lg-4 col-sm-12">
                <div class="feature-bigcard">
                  <img
                    src={require("./static/assets/main-feature3.svg").default}
                  />
                  <div class="description">
                    To get simplified Financial Advisory and Customer Support
                    escaping complex decisions and digital frauds
                  </div>
                </div>
              </div>
            </div>
            <div class="row mt-5 pt-5">
              <div class="col-xl-3 col-lg-3 col-sm-6">
                <div class="text-center feature-smallcard">
                  <img
                    src={require("./static/assets/side-feature1.svg").default}
                  />

                  <div className="title">Zero-cost Doorstep Consultancy</div>
                  <div className="description">
                    Get a no-cost financial advisory and customer support at
                    your doorstep with no hidden or surplus charges on products
                    & services
                  </div>
                </div>
              </div>
              <div class="col-xl-3 col-lg-3 col-sm-6">
                <div class="text-center feature-smallcard">
                  <img
                    src={require("./static/assets/side-feature2.svg").default}
                  />
                  <div class="title">
                    Absolute
                    <br />
                    Transparency
                  </div>
                  <div class="description">
                    Get insights on pricing, detailed comparison of different
                    segments, filter products and services as per your needs and
                    increase financial awareness.
                  </div>
                </div>
              </div>
              <div class="col-xl-3 col-lg-3 col-sm-6">
                <div class="text-center feature-smallcard">
                  <img
                    src={require("./static/assets/side-feature3.svg").default}
                  />
                  <div class="title">
                    One Time
                    <br />
                    Universal KYC
                  </div>
                  <div class="description">
                    Tired of registering everywhere for KYC? With Finorator, you
                    need to register digitally only once for all your financial
                    uses and applications.
                  </div>
                </div>
              </div>
              <div class="col-xl-3 col-lg-3 col-sm-6">
                <div class="text-center feature-smallcard">
                  <img
                    src={require("./static/assets/side-feature4.svg").default}
                  />
                  <div class="title">Integrated Financial Solutions</div>
                  <div class="description">
                    No need to jump between different applications for different
                    purposes. Finorator, automatically integrate data of
                    investments, banking, loans, mutual funds, tax filing and
                    more for all financial operations inside one single
                    application.
                  </div>
                </div>
              </div>
              <div class="col-xl-4 col-lg-4 col-sm-6">
                <div class="text-center feature-smallcard">
                  <img src={require("./static/assets/feature-5.svg").default} />
                  <div class="title">Pay Only Once</div>
                  <div class="description">
                    You don’t need to pay multiple times to avail different
                    services under each segment and sub-segments. With
                    Finorator, you only pay once to gain access to a range of
                    products & services under each segment or sub-segment.
                  </div>
                </div>
              </div>
              <div class="col-xl-4 col-lg-4 col-sm-6">
                <div class="text-center feature-smallcard">
                  <img src={require("./static/assets/feature-6.svg").default} />
                  <div class="title">Complete Privacy</div>
                  <div class="description">
                    Worried about your personal and transactional details? You
                    don’t need to! Finorator provides absolute privacy with
                    user-friendly cloud storage support for all your important
                    document uploads.
                  </div>
                </div>
              </div>
              <div class="col-xl-4 col-lg-4 col-sm-12">
                <div class="text-center feature-smallcard">
                  <img src={require("./static/assets/feature-7.svg").default} />
                  <div class="title">Refer Products and Win Cash Rewards</div>
                  <div class="description">
                    Avail cash rewards and cashback for each product referral
                    you make to your friends, family, and colleagues.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
