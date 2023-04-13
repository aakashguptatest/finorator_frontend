import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import "./Homepage.css"
import "./static/css/main.css"
import "./static/bootstrap/css/bootstrap.css"
import "./static/css/starter-template.css"

import SliderAffiliations from './Affiliations';
import SliderSegment from './Sliderhome';
import Sliderreview from './SliderReview';
export default function Homepage() {
  const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
  var TxtType = function (el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = "";
    this.tick();
    this.isDeleting = false;
  };

  TxtType.prototype.tick = function () {
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

    setTimeout(function () {
      that.tick();
    }, delta);
  };

  window.onload = function () {
    var elements = document.getElementsByClassName("typewrite");
    for (var i = 0; i < elements.length; i++) {
      var toRotate = elements[i].getAttribute("data-type");
      var period = elements[i].getAttribute("data-period");
      if (toRotate) {
        new TxtType(elements[i], JSON.parse(toRotate), period);
      }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);
  };
  document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll('a.test').forEach(link => {
      link.addEventListener('click', function (event) {
        const ulElement = this.nextElementSibling;
        ulElement.style.display = ulElement.style.display === 'none' ? 'block' : 'none';
        event.stopPropagation();
        event.preventDefault();
      });
    });
    
  });
 
  const LEARN_AND_EXPLORE_CAROUSEL_DIV = document.querySelector('#learn_and_explore_carousel');


  document.addEventListener('DOMContentLoaded', function() {
      let  url = "https://api.finorator.com/api/zoho_crm/post_list/";
         // url = "http://localhost:8000/api/zoho_crm/post_list/"   

         const xhr = new XMLHttpRequest();
         xhr.open('GET', url);
         xhr.responseType = 'json';
         xhr.onload = function () {
           if (xhr.status === 200) {
             console.log(xhr.response.post_list);
             const post_list = xhr.response.post_list;
             let str_html = "";
             for (let i = 0; i < post_list.length; i++) {
               console.log(i);
               console.log(post_list[i].title);
               if (i == 0 || i % 3 == 0) {
                 if (i == 0) str_html = `<div class="carousel-item active">`;
                 else str_html += `<div class="carousel-item">`;
                 str_html += `<div class="row justify-content-center">
                                                 <div class="col-xl-3 col-lg-3 col-12">
                                                     <div class="blog-card" style="height: 97%">
                                                  <a href="${post_list[i].url}" target="_blank" class="text-decoration-none">
                                                         <div class="theme-bg">
                                                             <h3>${post_list[i].title}</h3>
                                                         </div>
                                                         <div>
                                                            <p class="theme-p px-2 trucket mb-0">${post_list[i].description} <span> read more</span></p>
                                                             <p class=" theme-p float-right mt-0 mr-3">continue reading</p>
                                                         </div>
                                                     </a>
                                                     </div>
                                                 </div>`;
               } else {
                 str_html += `<div class="col-xl-3 col-lg-3 col-12">
                                                     <div class="blog-card mb-3" style="height: 97%">
                                                     <a href="${post_list[i].url}" target="_blank" class="text-decoration-none">
                                                         <div class="theme-bg">
                                                             <h3>${post_list[i].title}</h3>
                                                         </div>
                                                         <div>
                                                             <p class="theme-p px-2 trucket mb-0">${post_list[i].description} <span> read more</span></p>
                                                             <p class=" theme-p float-right mt-0 mr-3">continue reading</p>
                                                         </div>
                                                     </a>
                                                     </div>
                                                 </div>`;
               }
         
               if (i == 2 || (i + 1) % 3 == 0 || i + 1 == post_list.length)
                 str_html += `</div></div>`;
             }
             console.log(str_html);
             LEARN_AND_EXPLORE_CAROUSEL_DIV.innerHTML += str_html;
           } else {
             console.log('Error: ' + xhr.status);
           }
         };
         xhr.onerror = function () {
           console.log('Error: Network Error');
         };
         xhr.send();
         
  });

  return (
    <div>
      <div className="hero">
      <div className="container">
        <div className="row" style={{alignItems: "center"}}>
          <div className="col-lg-7 col-md-6 col-xl-6">
            <div>
              <h1 className="theme-h1 text-white">
                All financial Solutions<br /><a
                  className="typewrite"
                  data-period="2000"
                  data-type='[ "Under One Roof.", "with Single Click." ]'
                  style={{color: "yellow"}}
                ></a>
              </h1>
              <p className="theme-p mb-4 text-light">
                Get access to all financial products and services of different
                segments in a single platform
              </p>
              <a
                className="theme-btn btn my-2 my-sm-0 theme-bg2"
                href="#features-main"
                >Learn More</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="segments section-body" id="segment" style={{paddingbottom: "3em"}}>
      <div className="theme-head text-center">Choose your Segment & Compare</div>
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
            Choosing Finorator helps you manage all personal financial decisions
            and operations seamlessly in one place
          </div>
        </div>
        <div className="row mb-5">
          <div className="col-xl-4 col-lg-4 col-sm-6">
            <div className="feature-bigcard">
              <img src={require("./static/assets/main-feature1.svg").default} />
              <div className="description">
                To be a Financially Literate person and increase your knowledge
                bank gaining financial wisdom
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-sm-6">
            <div className="feature-bigcard">
              <img src={require("./static/assets/main-feature2.svg" ).default}/>
              <div className="description">
                To spend less time and money on otherwise financial applications
                of different financial sectors
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-sm-12">
            <div className="feature-bigcard">
              <img src={require("./static/assets/main-feature3.svg").default} />
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
              <img src={require("./static/assets/side-feature1.svg" ).default}/>
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
              <img src={require("./static/assets/side-feature2.svg" ).default}/>
              <div className="title">Absolute <br />Transparency</div>
              <div className="description">
                Get insights on pricing, detailed comparison of different
                segments, filter products and services as per your needs and
                increase financial awareness.
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-sm-6">
            <div className="feature-smallcard">
              <img src={require("./static/assets/side-feature3.svg").default} />
              <div className="title">
                One Time <br />
                Universal KYC
              </div>
              <div className="description">
                Tired of registering everywhere for KYC? With Finorator, you
                need to register digitally only once for all your financial uses
                and applications.
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-sm-6">
            <div className="feature-smallcard">
              <img src={require("./static/assets/side-feature4.svg").default} />
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
                You don’t need to pay multiple times to avail different services
                under each segment and sub-segments. With Finorator, you only
                pay once to gain access to a range of products & services under
                each segment or sub-segment.
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-sm-6">
            <div className="feature-smallcard">
              <img src={require("./static/assets/feature-6.svg").default} />
              <div className="title">Complete Privacy</div>
              <div className="description">
                Worried about your personal and transactional details? You don’t
                need to! Finorator provides absolute privacy with user-friendly
                cloud storage support for all your important document uploads.
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
        <div className="row" style={{alignItems: "center", justifycontent: "center"}}>
          <div className="col-xl-2 col-lg-2 col-12 col-sm-6">
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
          <div className="col-xl-2 col-lg-2 col-12 col-sm-6">
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
          <div className="col-xl-2 col-lg-2 col-12 col-sm-6">
            <div className="step-card">
              <img src={require("./static/assets/step3.svg").default} />
              <div className="title">Step 3</div>
              <div className="description">
                Quickly compare financial products and services within segments
              </div>
            </div>
          </div>
          <div className="col-xl-1 col-lg-1 arr">
            <img src={require("./static/assets/Arrow 1.svg").default} />
          </div>
          <div className="col-xl-2 col-lg-2 col-12 col-sm-6">
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
        <div className="row" style={{justifycontent: "center"}}>
          <div className="col-lg-6 col-md-12 col-xl-6">
            <ul className="list-group eligible-list">
              <li className="list-group-item">
                <img src={require("./static/assets/eligible-1.svg").default} />
                <p>A Resident of India</p>
              </li>
              <li className="list-group-item">
                <img src={require("./static/assets/eligible-2.svg").default} />
                <p>Anyone above 18 years of age&nbsp;</p>
              </li>
              <li className="list-group-item">
                <img src={require("./static/assets/eligible-3.svg").default} />
                <p>Holding any designation or a profession</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div className="segments section-body" id="" style={{paddingbottom: "3em"}}>
      <div className="theme-head text-center">Learn & Explore</div>
      <div>
          <div className="carousel-inner" id="learn_and_explore_carousel">
            
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
          <div className="carousel-item active">
            <div className="container">
              <div className="theme-head text-center">
                Our Mutual Funds Partners
              </div>
              <div className="segment-main">
                <marquee width="80%" direction="left" scrollamount="12">
                  <div
                    style={{justifycontent: "center",
                      alignitems: "center",
                      display: "flex"}}
                  >
                    <div className="col-xl-2 col-lg-2">
                      <div>
                      <img src={require("./static/assets/Companies Logo PNG/Mutual Fund/ABSL.png")}
                        />
                      </div>
                    </div>
                    <div className="col-xl-2 col-lg-2">
                      <div>
                        <img src={require("./static/assets/Companies Logo PNG/Mutual Fund/Birla.png")}
                        />
                      </div>
                    </div>
                    <div className="col-xl-2 col-lg-2">
                      <div>
                        <img src={require("./static/assets/Companies Logo PNG/Mutual Fund/BNP PARIBAS.png")}
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
                        <img src={require("./static/assets/Companies Logo PNG/Mutual Fund/Edelweiss.png")}
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
            </div>
            </div>
            </Carousel.Item>
            <Carousel.Item>
          <div className="carousel-item">
            <div className="container">
              <div className="theme-head text-center">Our Loan Partners</div>
              <div className="segment-main">
                <marquee width="80%" direction="left" scrollamount="12">
                  <div
                    style={{justifycontent: "center",
                    alignitems: "center",
                    display: "flex"}}

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
                        <img src={require("./static/assets/Companies Logo PNG/Loan/Fullerton.png")} />
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
            </div>
          </div>
          </Carousel.Item>
          <Carousel.Item>
          <div className="carousel-item">
            <div className="container">
              <div className="theme-head text-center">Our Insurance Partners</div>
              <div className="segment-main">
                <marquee width="80%" direction="left" scrollamount="12">
                  <div style={{justifyContent: "center",
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
                        <img src={require("./static/assets/Companies Logo PNG/Insurance/DIGIT.png")}
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
            </div>
          </div>
          </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </div>
    <div className="section-body partner">
      <div className="container">
        <div className="theme-head text-left" style={{paddingbottom: "0.5em"}}>
          Become Our Partner
        </div>
        <div className="row" style={{alignitems: "center"}}>
          <div className="p-4 col-xl-4 col-lg-4 col-12">
            <img src={require("./static/assets/partner.png")} />
          </div>
          <div className="pr-5 ml-5 col-xl-7 col-lg-7 col-10">
            <p className="theme-p" style={{fontsize: 18}}>
              Finorator allows you to become a financial aggregator partner
              related to different financial segments including shares, mutual
              funds, loans, income tax, real estate, and other investments
              products of every segment and seamlessly manage all financial
              operations of your business under one integrated CRM.
            </p>
            <a className="theme-btn btn my-2 my-sm-0" href="/partner"
              >Join Now</a
            >
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
        <div className="theme-head" style={{paddingbottom: "0.5em"}}>
          What our Customers Say?
        </div>
        <div className="row" style={{alignitems: "center"}}>
          <div className="col-xl-8">            
              <div className="carousel-inner">
                <Sliderreview />
              </div>
          </div>
          <div className="col-xl-4">
            <img src={require("./static/assets/testimony0.png")} className="w-100" />
          </div>
        </div>
      </div>
    </div>        
    </div>
)}
