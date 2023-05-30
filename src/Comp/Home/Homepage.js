import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import "./static/css/main.css";
import "./static/bootstrap/css/bootstrap.css";
// import "./static/css/starter-template.css";
import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";
import SliderAffiliations from "./Affiliations";
import SliderSegment from "./Sliderhome";
import Sliderreview from "./SliderReview";
import SliderLearnandexplore from "./SliderLearnandexplore";
import a from "./static/assets/610-indian-flag.json";
import b from "./static/assets/74304-man1.json";
import c from "./static/assets/139269-career.json";
import d from "./static/assets/98297-book-idea.json";
import e from "./static/assets/17506-timer-hour-glass-loader.json";
import f from "./static/assets/95978-customer-care.json";
import partner from "./static/assets/100534-partnership.json";
import review from "./static/assets/115712-leadership-talent-review.json";
import Lottie from "lottie-react";
export default function Homepage() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = "";
    this.tick();
    this.isDeleting = false;
  };

  TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) {
      delta /= 2;
    }

    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === "") {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
    }

    setTimeout(function() {
      that.tick();
    }, delta);
  };
  return (
    <div>
      <div className="hero">
        <div className="container">
          <div className="row" style={{ alignItems: "center" }}>
            <div className="col-lg-7 col-md-6 col-xl-6">
              <div>
                <h1 className="theme-h1 text-white">
                  All financial Solutions
                  <br />
                  <Typewriter
                    options={{
                      strings: ["Under one roof", "With single click"],
                      autoStart: true,
                      loop: true,
                      pausefor: 500,
                    }}
                  />{" "}
                </h1>
                <p className="theme-p mb-4 text-light">
                  Get access to all financial products and services of different
                  segments in a single platform
                </p>
                <a
                  className="theme-btn btn my-2 my-sm-0 theme-bg2"
                  href="#features-main"
                  style={{
                    backgroundColor: "#E57C25",
                    width: 120,
                    fontsize: 30,
                    borderRadius: 6,
                    color: "white",
                    fontWeight: "bold",
                  }}
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="segments section-body"
        id="segment"
        style={{ paddingbottom: "3em" }}
      >
        <div className="theme-head text-center">
          Choose your Segment & Compare
        </div>
        <div>
          <div className="carousel-inner">
            <SliderSegment />
          </div>
        </div>
      </div>
      <div className="section-body features" id="features-main">
        <div className="container">
          <div className="theme-head text-center">
            Why Choose Finorator?
            <div className="description text-center font-weight-bold">
              Choosing Finorator helps you manage all personal financial
              decisions and operations seamlessly in one place
            </div>
          </div>
          <div className="row mb-5">
            <div className="col-xl-4 col-lg-4 col-sm-6 pt-6">
              <div className="feature-bigcard">
                <Lottie loop={true} animationData={d} style={{ height: 200 }} />
                <div className="description">
                  To be a Financially Literate person and increase your
                  knowledge bank gaining financial wisdom
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-sm-6 pt-6">
              <div className="feature-bigcard">
                <Lottie loop={true} animationData={e} style={{ height: 200 }} />{" "}
                <div className="description">
                  To spend less time and money on otherwise financial
                  applications of different financial sectors
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-sm-12 pt-6">
              <div className="feature-bigcard">
                <Lottie loop={true} animationData={f} style={{ height: 200 }} />{" "}
                <div className="description">
                  To get simplified Financial Advisory and Customer Support
                  escaping complex decisions and digital frauds
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-5 pt-5">
            <div className="col-xl-3 col-lg-3 col-sm-6">
              <div className="feature-smallcard">
                <img
                  src={require("./static/assets/side-feature1.svg").default}
                />
                <div className="title">Zero-cost Doorstep Consultancy</div>
                <div className="description">
                  Get a no-cost financial advisory and customer support at your
                  doorstep with no hidden or surplus charges on products &
                  services
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-sm-6">
              <div className="feature-smallcard">
                <img
                  src={require("./static/assets/side-feature2.svg").default}
                />
                <div className="title">
                  Absolute <br />
                  Transparency
                </div>
                <div className="description">
                  Get insights on pricing, detailed comparison of different
                  segments, filter products and services as per your needs and
                  increase financial awareness.
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-sm-6">
              <div className="feature-smallcard">
                <img
                  src={require("./static/assets/side-feature3.svg").default}
                />
                <div className="title">
                  One Time <br />
                  Universal KYC
                </div>
                <div className="description">
                  Tired of registering everywhere for KYC? With Finorator, you
                  need to register digitally only once for all your financial
                  uses and applications.
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-sm-6">
              <div className="feature-smallcard">
                <img
                  src={require("./static/assets/side-feature4.svg").default}
                />
                <div className="title">Integrated Financial Solutions</div>
                <div className="description">
                  No need to jump between different applications for different
                  purposes. Finorator, automatically integrate data of
                  investments, banking, loans, mutual funds, tax filing and more
                  for all financial operations inside one single application.
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-sm-6">
              <div className="feature-smallcard">
                <img src={require("./static/assets/feature-5.svg").default} />
                <div className="title">Pay Only Once</div>
                <div className="description">
                  You don’t need to pay multiple times to avail different
                  services under each segment and sub-segments. With Finorator,
                  you only pay once to gain access to a range of products &
                  services under each segment or sub-segment.
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-sm-6">
              <div className="feature-smallcard">
                <img src={require("./static/assets/feature-6.svg").default} />
                <div className="title">Complete Privacy</div>
                <div className="description">
                  Worried about your personal and transactional details? You
                  don’t need to! Finorator provides absolute privacy with
                  user-friendly cloud storage support for all your important
                  document uploads.
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-sm-12">
              <div className="feature-smallcard">
                <img src={require("./static/assets/feature-7.svg").default} />
                <div className="title">Refer Products and Win Cash Rewards</div>
                <div className="description">
                  Avail cash rewards and cashback for each product referral you
                  make to your friends, family, and colleagues.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section-body steps">
        <div className="container">
          <div className="theme-head text-center">
            How Finorator Works?
            <div className="description text-center font-weight-bold">
              Finorator helps you manage all your financial operations, teamed
              inside one platform
            </div>
          </div>
          <div
            className="row"
            style={{ alignItems: "center", justifycontent: "center" }}
          >
            <div className="col-xl-2 col-lg-2 col-12 col-sm-6 mb-6">
              <div className="step-card">
                <img src={require("./static/assets/step1.svg").default} />
                <div className="title">Step 1</div>
                <div className="description">
                  Easily register and onboard with one time KYC
                </div>
              </div>
            </div>
            <div className="col-xl-1 col-lg-1 arr">
              <img src={require("./static/assets/Arrow 1.svg").default} />
            </div>
            <div className="col-xl-2 col-lg-2 col-12 col-sm-6 mb-6">
              <div className="step-card">
                <img src={require("./static/assets/step2.svg").default} />
                <div className="title">Step 2</div>
                <div className="description">
                  Navigate and access preferred financial segment
                </div>
              </div>
            </div>
            <div className="col-xl-1 col-lg-1 arr">
              <img src={require("./static/assets/Arrow 1.svg").default} />
            </div>
            <div className="col-xl-2 col-lg-2 col-12 col-sm-6 mb-6">
              <div className="step-card">
                <img src={require("./static/assets/step3.svg").default} />
                <div className="title">Step 3</div>
                <div className="description">
                  Quickly compare financial products and services within
                  segments
                </div>
              </div>
            </div>
            <div className="col-xl-1 col-lg-1 arr">
              <img src={require("./static/assets/Arrow 1.svg").default} />
            </div>
            <div className="col-xl-2 col-lg-2 col-12 col-sm-6 mb-6">
              <div className="step-card">
                <img src={require("./static/assets/step4.svg").default} />
                <div className="title">Step 4</div>
                <div className="description">
                  Smoothly make a payment to avail services
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section-body">
        <div className="container">
          <div className="theme-head text-center">Who can use Finorator?</div>
          <div
            className="row"
            style={{
              display: "flex",
              alignContent: "center",
              justifyContent: "center",
            }}
          >
            <div className="col-lg-6 col-md-12 col-xl-6">
              <ul className="list-group eligible-list">
                <li className="list-group-item">
                  <Lottie
                    loop={true}
                    animationData={a}
                    style={{ height: 80 }}
                  />{" "}
                  <p>A Resident of India</p>
                </li>
                <li className="list-group-item">
                  <Lottie
                    loop={true}
                    animationData={b}
                    style={{ height: 80, marginLeft: -35 }}
                  />
                  <p>Anyone above 18 years of age&nbsp;</p>
                </li>
                <li className="list-group-item">
                  <Lottie
                    loop={true}
                    animationData={c}
                    style={{ height: 80 }}
                  />
                  <p>Holding any designation or a profession</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div
        className="segments section-body"
        id=""
        style={{ paddingbottom: "3em" }}
      >
        <div className="theme-head text-center">Learn & Explore</div>
        <div>
          <div className="carousel-inner" id="learn_and_explore_carousel">
            <SliderLearnandexplore />
          </div>
        </div>
      </div>
      <div className="section-body" id="partners">
        <div
          id="carouselExampleControls2"
          className="carousel slide logos"
          data-ride="carousel"
          data-interval="false"
        >
          <div className="carousel-inner">
            <Carousel activeIndex={index} onSelect={handleSelect}>
              <Carousel.Item>
                <div className="theme-head text-center">
                  Our Mutual Funds Partners
                </div>
                <div className="segment-main">
                  <marquee width="80%" direction="left" scrollamount="12">
                    <div
                      style={{
                        justifycontent: "center",
                        alignitems: "center",
                        display: "flex",
                      }}
                    >
                      <div className="col-xl-2 col-lg-2">
                        <div>
                          <img
                            src={require("./static/assets/Companies Logo PNG/Mutual Fund/ABSL.png")}
                          />
                        </div>
                      </div>
                      <div className="col-xl-2 col-lg-2">
                        <div>
                          <img
                            src={require("./static/assets/Companies Logo PNG/Mutual Fund/Birla.png")}
                          />
                        </div>
                      </div>
                      <div className="col-xl-2 col-lg-2">
                        <div>
                          <img
                            src={require("./static/assets/Companies Logo PNG/Mutual Fund/BNP PARIBAS.png")}
                          />
                        </div>
                      </div>
                      <div className="col-xl-2 col-lg-2">
                        <div>
                          <img
                            src={require("./static/assets/Companies Logo PNG/Mutual Fund/Canara Robeco.png")}
                          />
                        </div>
                      </div>
                      <div className="col-xl-2 col-lg-2">
                        <div>
                          <img
                            src={require("./static/assets/Companies Logo PNG/Mutual Fund/DSP.png")}
                          />
                        </div>
                      </div>
                      <div className="col-xl-2 col-lg-2">
                        <div>
                          <img
                            src={require("./static/assets/Companies Logo PNG/Mutual Fund/Edelweiss.png")}
                          />
                        </div>
                      </div>
                      <div className="col-xl-2 col-lg-2">
                        <div>
                          <img
                            src={require("./static/assets/Companies Logo PNG/Mutual Fund/HDFC.png")}
                          />
                        </div>
                      </div>
                      <div className="col-xl-2 col-lg-2">
                        <div>
                          <img
                            src={require("./static/assets/Companies Logo PNG/Mutual Fund/ICICI.png")}
                          />
                        </div>
                      </div>
                      <div className="col-xl-2 col-lg-2">
                        <div>
                          <img
                            src={require("./static/assets/Companies Logo PNG/Mutual Fund/IDFC.png")}
                          />
                        </div>
                      </div>
                      <div className="col-xl-2 col-lg-2">
                        <div>
                          <img
                            src={require("./static/assets/Companies Logo PNG/Mutual Fund/IIFL.png")}
                          />
                        </div>
                      </div>
                      <div className="col-xl-2 col-lg-2">
                        <div>
                          <img
                            src={require("./static/assets/Companies Logo PNG/Mutual Fund/Invesco.png")}
                          />
                        </div>
                      </div>
                      <div className="col-xl-2 col-lg-2">
                        <div>
                          <img
                            src={require("./static/assets/Companies Logo PNG/Mutual Fund/Kotak.png")}
                          />
                        </div>
                      </div>
                      <div className="col-xl-2 col-lg-2">
                        <div>
                          <img
                            src={require("./static/assets/Companies Logo PNG/Mutual Fund/L&T.png")}
                          />
                        </div>
                      </div>
                      <div className="col-xl-2 col-lg-2">
                        <div>
                          <img
                            src={require("./static/assets/Companies Logo PNG/Mutual Fund/Mirae.png")}
                          />
                        </div>
                      </div>
                      <div className="col-xl-2 col-lg-2">
                        <div>
                          <img
                            src={require("./static/assets/Companies Logo PNG/Mutual Fund/Motilal.png")}
                          />
                        </div>
                      </div>
                      <div className="col-xl-2 col-lg-2">
                        <div>
                          <img
                            src={require("./static/assets/Companies Logo PNG/Mutual Fund/Nippon.png")}
                          />
                        </div>
                      </div>
                      <div className="col-xl-2 col-lg-2">
                        <div>
                          <img
                            src={require("./static/assets/Companies Logo PNG/Mutual Fund/PPFAS.png")}
                          />
                        </div>
                      </div>
                      <div className="col-xl-2 col-lg-2">
                        <div>
                          <img
                            src={require("./static/assets/Companies Logo PNG/Mutual Fund/SBi.png")}
                          />
                        </div>
                      </div>
                      <div className="col-xl-2 col-lg-2">
                        <div>
                          <img
                            src={require("./static/assets/Companies Logo PNG/Mutual Fund/TATA.png")}
                          />
                        </div>
                      </div>
                      <div className="col-xl-2 col-lg-2">
                        <div>
                          <img
                            src={require("./static/assets/Companies Logo PNG/Mutual Fund/UTI.png")}
                          />
                        </div>
                      </div>
                    </div>
                  </marquee>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="theme-head text-center">Our Loan Partners</div>
                <div className="segment-main">
                  <marquee width="80%" direction="left" scrollamount="12">
                    <div
                      style={{
                        justifycontent: "center",
                        alignitems: "center",
                        display: "flex",
                      }}
                    >
                      <div className="col-xl-2 col-lg-2">
                        <div>
                          <img
                            src={require("./static/assets/Companies Logo PNG/Loan/ABSL.png")}
                          />
                        </div>
                      </div>
                      <div className="col-xl-2 col-lg-2">
                        <div>
                          <img
                            src={require("./static/assets/Companies Logo PNG/Loan/AXIS Bank.jpg")}
                          />
                        </div>
                      </div>
                      <div className="col-xl-2 col-lg-2">
                        <div>
                          <img
                            src={require("./static/assets/Companies Logo PNG/Loan/BOB.png")}
                          />
                        </div>
                      </div>
                      <div className="col-xl-2 col-lg-2">
                        <div>
                          <img
                            src={require("./static/assets/Companies Logo PNG/Loan/Chola.png")}
                          />
                        </div>
                      </div>
                      <div className="col-xl-2 col-lg-2">
                        <div>
                          <img
                            src={require("./static/assets/Companies Logo PNG/Loan/DCB BAnk.jpg")}
                          />
                        </div>
                      </div>
                      <div className="col-xl-2 col-lg-2">
                        <div>
                          <img
                            src={require("./static/assets/Companies Logo PNG/Loan/Deutsche Bank.jpg")}
                          />
                        </div>
                      </div>
                      <div className="col-xl-2 col-lg-2">
                        <div>
                          <img
                            src={require("./static/assets/Companies Logo PNG/Loan/Equitas Fin..png")}
                          />
                        </div>
                      </div>
                      <div className="col-xl-2 col-lg-2">
                        <div>
                          <img
                            src={require("./static/assets/Companies Logo PNG/Loan/Fedral Bank.jpg")}
                          />
                        </div>
                      </div>
                      <div className="col-xl-2 col-lg-2">
                        <div>
                          <img
                            src={require("./static/assets/Companies Logo PNG/Loan/Fullerton.png")}
                          />
                        </div>
                      </div>
                      <div className="col-xl-2 col-lg-2">
                        <div>
                          <img
                            src={require("./static/assets/Companies Logo PNG/Loan/HDFC Bank3.jpg")}
                          />
                        </div>
                      </div>
                      <div className="col-xl-2 col-lg-2">
                        <div>
                          <img
                            src={require("./static/assets/Companies Logo PNG/Loan/ICICI Bank.jpg")}
                          />
                        </div>
                      </div>
                      <div className="col-xl-2 col-lg-2">
                        <div>
                          <img
                            src={require("./static/assets/Companies Logo PNG/Loan/IDBI Bank.png")}
                          />
                        </div>
                      </div>
                      <div className="col-xl-2 col-lg-2">
                        <div>
                          <img
                            src={require("./static/assets/Companies Logo PNG/Loan/IDFC First Bank.jpg")}
                          />
                        </div>
                      </div>
                      <div className="col-xl-2 col-lg-2">
                        <div>
                          <img
                            src={require("./static/assets/Companies Logo PNG/Loan/Kotak Mahindra Bank.jpg")}
                          />
                        </div>
                      </div>
                      <div className="col-xl-2 col-lg-2">
                        <div>
                          <img
                            src={require("./static/assets/Companies Logo PNG/Loan/Lending kart.png")}
                          />
                        </div>
                      </div>
                      <div className="col-xl-2 col-lg-2">
                        <div>
                          <img
                            src={require("./static/assets/Companies Logo PNG/Loan/MAGMA Fin..jpg")}
                          />
                        </div>
                      </div>
                      <div className="col-xl-2 col-lg-2">
                        <div>
                          <img
                            src={require("./static/assets/Companies Logo PNG/Loan/PNB Housing.jpg")}
                          />
                        </div>
                      </div>
                      <div className="col-xl-2 col-lg-2">
                        <div>
                          <img
                            src={require("./static/assets/Companies Logo PNG/Loan/RBL Bank.jpg")}
                          />
                        </div>
                      </div>
                      <div className="col-xl-2 col-lg-2">
                        <div>
                          <img
                            src={require("./static/assets/Companies Logo PNG/Loan/SBI bank.jpg")}
                          />
                        </div>
                      </div>
                      <div className="col-xl-2 col-lg-2">
                        <div>
                          <img
                            src={require("./static/assets/Companies Logo PNG/Loan/TATA Capital.png")}
                          />
                        </div>
                      </div>
                      <div className="col-xl-2 col-lg-2">
                        <div>
                          <img
                            src={require("./static/assets/Companies Logo PNG/Loan/Yes bank.jpg")}
                          />
                        </div>
                      </div>
                    </div>
                  </marquee>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="theme-head text-center">
                  Our Insurance Partners
                </div>
                <div className="segment-main">
                  <marquee width="80%" direction="left" scrollamount="12">
                    <div
                      style={{
                        justifyContent: "center",
                        alignItems: "center",
                        display: "flex",
                      }}
                    >
                      <div className="col-xl-2 col-lg-2">
                        <div>
                          <img
                            src={require("./static/assets/Companies Logo PNG/Insurance/Bajaj Allianz.png")}
                          />
                        </div>
                      </div>
                      <div className="col-xl-2 col-lg-2">
                        <div>
                          <img
                            src={require("./static/assets/Companies Logo PNG/Insurance/BHARTI AXA.jpg")}
                          />
                        </div>
                      </div>
                      <div className="col-xl-2 col-lg-2">
                        <div>
                          <img
                            src={require("./static/assets/Companies Logo PNG/Insurance/DIGIT.png")}
                          />
                        </div>
                      </div>
                      <div className="col-xl-2 col-lg-2">
                        <div>
                          <img
                            src={require("./static/assets/Companies Logo PNG/Insurance/Future Generali.png")}
                          />
                        </div>
                      </div>
                      <div className="col-xl-2 col-lg-2">
                        <div>
                          <img
                            src={require("./static/assets/Companies Logo PNG/Insurance/HDFC ERGO Insurance.png")}
                          />
                        </div>
                      </div>
                      <div className="col-xl-2 col-lg-2">
                        <div>
                          <img
                            src={require("./static/assets/Companies Logo PNG/Insurance/HDFC Life Insurance.png")}
                          />
                        </div>
                      </div>
                      <div className="col-xl-2 col-lg-2">
                        <div>
                          <img
                            src={require("./static/assets/Companies Logo PNG/Insurance/ICICI Lombard.jpg")}
                          />
                        </div>
                      </div>
                      <div className="col-xl-2 col-lg-2">
                        <div>
                          <img
                            src={require("./static/assets/Companies Logo PNG/Insurance/MAX BHUPA Insurance.jpg")}
                          />
                        </div>
                      </div>
                      <div className="col-xl-2 col-lg-2">
                        <div>
                          <img
                            src={require("./static/assets/Companies Logo PNG/Insurance/National Insurance.png")}
                          />
                        </div>
                      </div>
                      <div className="col-xl-2 col-lg-2">
                        <div>
                          <img
                            src={require("./static/assets/Companies Logo PNG/Insurance/New India Assurance.png")}
                          />
                        </div>
                      </div>
                      <div className="col-xl-2 col-lg-2">
                        <div>
                          <img
                            src={require("./static/assets/Companies Logo PNG/Insurance/Oriental Insurance.png")}
                          />
                        </div>
                      </div>
                      <div className="col-xl-2 col-lg-2">
                        <div>
                          <img
                            src={require("./static/assets/Companies Logo PNG/Insurance/Reliance General Insurance.png")}
                          />
                        </div>
                      </div>
                      <div className="col-xl-2 col-lg-2">
                        <div>
                          <img
                            src={require("./static/assets/Companies Logo PNG/Insurance/SBI General Insurance.jpg")}
                          />
                        </div>
                      </div>
                      <div className="col-xl-2 col-lg-2">
                        <div>
                          <img
                            src={require("./static/assets/Companies Logo PNG/Insurance/Star Health Insurance.png")}
                          />
                        </div>
                      </div>
                      <div className="col-xl-2 col-lg-2">
                        <div>
                          <img
                            src={require("./static/assets/Companies Logo PNG/Insurance/United India.jpg")}
                          />
                        </div>
                      </div>
                      <div className="col-xl-2 col-lg-2">
                        <div>
                          <img
                            src={require("./static/assets/Companies Logo PNG/Insurance/Universal Sompo.jpg")}
                          />
                        </div>
                      </div>
                    </div>
                  </marquee>
                </div>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </div>
      <div className="section-body partner">
        <div className="container">
          <div
            className="theme-head text-left"
            style={{ paddingbottom: "0.5em" }}
          >
            Become Our Partner
          </div>
          <div className="row" style={{ alignitems: "center" }}>
            <div className="p-4 col-xl-4 col-lg-4 col-12">
              <Lottie loop={true} animationData={partner} />{" "}
            </div>
            <div className="pr-5 ml-5 col-xl-7 col-lg-7 col-10">
              <p className="theme-p" style={{ fontsize: 18 }}>
                Finorator allows you to become a financial aggregator partner
                related to different financial segments including shares, mutual
                funds, loans, income tax, real estate, and other investments
                products of every segment and seamlessly manage all financial
                operations of your business under one integrated CRM.
              </p>
              <Link className="theme-btn btn my-2 my-sm-0" to="/partner">
                Join Now
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="section-body">
        <div className="container">
          <div className="theme-head text-center">
            Affiliations & Associate Partners
          </div>

          <div className="carousel-inner">
            <SliderAffiliations />
          </div>
        </div>
      </div>
      <div className="section-body">
        <div className="container">
          <div className="theme-head" style={{ paddingbottom: "0.5em" }}>
            What our Customers Say?
          </div>
          <div className="row" style={{ alignitems: "center" }}>
            <div className="col-xl-8">
              <div className="carousel-inner">
                <Sliderreview />
              </div>
            </div>
            <div className="col-xl-4">
              <Lottie
                loop={true}
                animationData={review}
                style={{ height: 300 }}
                className="w-100"
              />{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
