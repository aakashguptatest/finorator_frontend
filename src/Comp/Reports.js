import React from 'react'
import "./Reports.css"
import "https://kit.fontawesome.com/c77612e695.js"
import "./static/css/starter-template.css"
import "./static/css/main.css"
import Cardaxisfocused25fund from './Cardsaxisfocused25fund'
import Cardclientwisesummary from './Cardsclientwisesummary'
import Cardhdfcsmallcapfund from './Cardshdfcsmallcapfund'
import CardMiareassetnyse from './CardsMiareassetnyse'
import CardParagParekhFlexi from './CardsParagParekhFlexi'
import Cardsbibluechip from './Cardssbibluechip'
import Cardsbifocusedequity from './Cardssbifocusedequity'
import CardTataDigitalIndia from './CardsTataDigitalIndia'
let a= [];

export default function Reports() {

    document.addEventListener("DOMContentLoaded", function (event) {
        const showNavbar = (toggleId, navId, bodyId, headerId) => {
          const toggle = document.getElementById(toggleId),
            nav = document.getElementById(navId),
            bodypd = document.getElementById(bodyId),
            headerpd = document.getElementById(headerId);

          if (toggle && nav && bodypd && headerpd) {
            toggle.addEventListener("click", () => {
              nav.classList.toggle("show");
              toggle.classList.toggle("bx-x");
              bodypd.classList.toggle("body-pd");
              headerpd.classList.toggle("body-pd");
            });
          }
        };

        showNavbar("header-toggle", "nav-bar", "body-pd", "header");

        const linkColor = document.querySelectorAll(".nav_link");

        function colorLink() {
          if (linkColor) {
            linkColor.forEach((l) => l.classList.remove("active"));
            this.classList.add("active");
          }
        }
        linkColor.forEach((l) => l.addEventListener("click", colorLink));
      });
      var checkbox = document.getElementById('myCheckbox');
      checkbox.addEventListener('click', handleCheckboxClick);
      function handleCheckboxClick() {
        if (checkbox.checked) {
          let client = document.getElementById("name-input").value;
          let date = document.getElementById("dob-input").value;  
        }  else {
          let clent = [];
          let date = []
        } 
        function show(){
          document.getElementsByClassName('results').style.display = "block";
        }

  return (
    
    <div>
          <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.1.0/css/bootstrap.min.css"
      integrity="sha512-qGZHZlQcHxDJDn/HxnV7gXmsMjpl2j/tve6E0nVxIHuh6Tcku6nEmUByjmGRp+fmyE9BOvlAL3r7L74DzAin2Q=="
      crossorigin="anonymous"
      referrerpolicy="no-referrer"
    />
    <link
      href="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js /"
    />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
    />
    <link
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.7.2/css/all.css"
    />
    
  
            <div class="container reports-header" style={{width: "100%"}}>
      <div class="left-content reports-header-heading">
                <p>Portfolio Valuation Report</p>
       </div>
       <div class="right-content">
         <i class="fa-solid fa-circle-question"></i>
         <div class="my-divider"></div>
       </div> 
      <form>
        <div class=" form-group row">
          <div class="col-lg-3">
            <label for="name-input" class="col-sm-2 col-form-label">Client</label>
            <div class="col-sm-10">
              <input type="text" id="name-input" class="form-control" placeholder="Enter client's name" />
            </div>
          </div>
          <div class="col-lg-3">
            <label for="dob-input" class="col-sm-2 col-form-label">Date</label>
            <div class="col-sm-10">
              <input type="date" id="dob-input" class="form-control" />
            </div>
          </div>
          <div class="col-lg-3">
            <label class="col-sm-2 col-form-label">Mode</label>
            <div class="col-sm-10">
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="mode" id="client-radio" value="client" />
                <label class="form-check-label" for="client-radio">Client Wise</label>
                <input class="form-check-input" type="radio" name="mode" id="scheme-radio" value="scheme" />
                <label class="form-check-label" for="scheme-radio">Scheme Wise</label>
              </div>
            </div>
          </div>
          {/*<div class="col-lg-3">
            <label class="col-sm-2 col-form-label">Type</label>
            <div class="col-sm-10">
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="type" id="detail-radio" value="detail" />
                <label class="form-check-label" for="client-radio">Detail Report</label>
                <input class="form-check-input" type="radio" name="type" id="summary-radio" value="summary" />
                <label class="form-check-label" for="summary-radio">Summary Report</label>
              </div>
            </div>
  </div>*/}
      </div>    
      <div class="form-group row text-right">
        <div class="col-sm-12">
          <button class="btn btn-warning" style={{color: "white"}}>ADVANCE FILTER</button>
        </div>
      </div>
      </form>
      <div class="my-divider"></div>
      <div class="button-wrapper">
        <div class="button-group-left">
          <button class="btn btn-primary" style={{color: "white"}}>EXCEL</button>
          <button class="btn btn-primary" style={{color: "white"}}>PDF</button>
          <button class="btn btn-primary" style={{color: "white"}}>REPORT</button>
        </div>
        <div class="button-group-right">
          <button class="btn btn-primary" style={{color: "white"}} onClick={{show}}>SHOW</button>
          <button class="btn btn-primary" style={{color: "white"}}>RESET</button>
        </div>
      </div>      
    </div> <br/>
    <div className='results'>
    <div className = "Datashow"><Cardaxisfocused25fund/><Cardclientwisesummary/></div> 
 </div>
    </div>
  )
}
}
