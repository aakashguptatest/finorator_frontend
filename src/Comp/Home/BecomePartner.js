import React from 'react'
import "./Homepage.css"
import "./static/css/main.css"
import "./static/bootstrap/css/bootstrap.css"
import "./static/css/starter-template.css"
import Typewriter from "typewriter-effect";


export default function BecomePartner() {
  return (
    <div>
        <div class="hero partner-hero" style={{backgroundimage: require('./static/assets/bg_1.png') }}>
    <div class="container">
        <div class="row" style={{alignitems: "center"}}>
            <div class="col-xl-6 col-lg-5">
                 <img src={require("./static/assets/partner.png")} />
            </div>
            <div class="col-xl-6 col-lg-7">
                <div>
                    <h1 class="theme-h1">Financial Products
                        Ka  <br /><span class="theme-color"><Typewriter
  options={{
    strings: ['Hello', 'World'],
    autoStart: true,
    loop: true,
    pausefor: 500
  }}
/></span></h1>
                    <p class="theme-p mb-4">Grow your expertise and increase your business revenue to become a
                        technology-driven financial manager — Finotarian!</p>
                    <p class="theme-p mb-4">Increase your learning graph regularly with our affiliated IRDA and NISM
                        certification training programs</p>
                    <a class="theme-btn btn my-2 my-sm-0 theme-bg2" href="#partner-body" style={{backgroundColor: "orange", fontSize: "large", color: "white"}}>Learn More</a>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="section-body" id="partner-body">
    <div class="container">
        <div class="theme-head text-center">Become a Partner</div>
        <p class="partner-section">Finorator allows you to be an expert financial manager who is aware of all the
            segments of finance including shares, mutual funds, loans, income tax, real estate, and other investments
            products of every segment and seamlessly manage all financial operations of your business under one
            intergated CRM</p>
         <br />
         <br />
        <div class="text-center theme-color" style={{fontSize: 25}}>You’re just one step away from your
            <b>Dream Career</b>
        </div>
        <b></b>
        <div class="theme-head mt-4 text-center">Why become a Finorator Partner?</div>
        <div class="row">
            <div class="col-lg-4 col-xl-4">
                <div class="text-center feature-smallcard">
                     <img src={require("./static/assets/partner-feature-1.svg").default} />
                    <div class="title">
                        Be a Super Advisor
                    </div>
                    <div class="description">Opportunity to become a Super Advisor and work in different financial
                        segments and fields.
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-xl-4">
                <div class="text-center feature-smallcard">
                     <img src={require("./static/assets/partner-feature-2.svg").default} />
                    <div class="title">
                        Generate High Revenue
                    </div>
                    <div class="description">Create a better-earning opportunity by selling a range of products of all
                        different segments under one roof
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-xl-4">
                <div class="text-center feature-smallcard">
                     <img src={require("./static/assets/partner-feature-3.svg").default} />
                    <div class="title">
                        Sell your Products Online
                    </div>
                    <div class="description">Easily link all your social media and digital platforms seamlessly and sell
                        your products online
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-xl-4">
                <div class="text-center feature-smallcard">
                     <img src={require("./static/assets/partner-feature-4.svg").default} />
                    <div class="title">
                        Easily Access CRM
                    </div>
                    <div class="description">Get insights into your business through reports and manage different
                        business segments for your customers effectively
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-xl-4">
                <div class="text-center feature-smallcard">
                     <img src={require("./static/assets/partner-feature-5.svg").default} />
                    <div class="title">
                        Effortless User Interface
                    </div>
                    <div class="description">Navigate through different segments using a simple and easy user
                        experience.
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-xl-4">
                <div class="text-center feature-smallcard">
                     <img src={require("./static/assets/partner-feature-7.svg").default} />
                    <div class="title">
                        Better Payout than Market
                    </div>
                    <div class="description">An opportunity to develop & expand your network and avail free leads from
                        us
                    </div>
                </div>
            </div>
        </div>
        <div class="theme-head mt-4 text-center">Unique Selling Proposition</div>
        <div class="row">
            <div class="col-lg-4 col-xl-4">
                <div class="text-center feature-smallcard">
                     <img src={require("./static/assets/usp-1.svg").default} />
                    <div class="title">
                        Refer and Earn
                    </div>
                    <div class="description">Send your unique referral link to your friends and earn commission on every
                        policy purchase they make!
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-xl-4">
                <div class="text-center feature-smallcard">
                     <img src={require("./static/assets/usp-2.svg").default} />
                    <div class="title">
                        Earn through Online Leads
                    </div>
                    <div class="description">Register and share leads to earn incentives on every purchase the buyer
                        makes from Finorator
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-xl-4">
                <div class="text-center feature-smallcard">
                     <img src={require("./static/assets/usp-3.svg").default} />
                    <div class="title">
                        Better Framework
                    </div>
                    <div class="description">Finorator provides tools like - Investment, EMI, Insurance Premium
                        Calculators, Centralized CRM System and Career growth certifications to grow your revenue by
                        many folds
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="section-body partner-form-section">
    <div class="container">
        <div class="theme-head mt-4 text-center">How can you be a Partner?</div>
        <div class="row" style={{alignitems: "center", justifycontent: "center"}}>
            <div class="col-lg-12 mb-5">
                 <img src={require("./static/assets/steps.png")} class="w-100"/>
            </div>
            <div class="col-lg-7">
                <form class="partner-form" style={{textalign: "center",}} id="partner-form">
                    <div class="form-group">
                        <label for="partner_form_name">Name</label>
                        <input type="text" class="form-control" id="partner_form_name"
                               placeholder="Enter your name"/>
                    </div>
                    <div class="form-group">
                        <label for="partner_form_email">Email</label>
                        <input type="text" class="form-control" id="partner_form_email"
                               placeholder="Enter your email"/>
                    </div>
                    <div class="form-group">
                        <label for="partner_form_mobile">Mobile no.</label>
                        <input type="text" class="form-control" id="partner_form_mobile"
                               placeholder="Enter your Mobile no."/>
                    </div>
                    <div class="form-group">
                        <label for="partner_form_address">Address</label>
                        <input type="text" class="form-control" id="partner_form_address"
                               placeholder="Enter full address with pin code"/>
                    </div>
                    <div class="form-group">
                        <label for="partner_form_aadhaar">Aadhar Card</label>
                        <input type="text" class="form-control" maxlength="12" id="partner_form_aadhaar"
                               placeholder="Enter your aadhar card"/>
                    </div>
                    <div class="form-group">
                        <label for="partner_form_pan">PAN Card</label>
                        <input type="text" class="form-control" maxlength="10" id="partner_form_pan"
                               placeholder="Enter your PAN card"/>
                    </div>
                    <div class="form-group mb-5">
                        <label for="partner_form_segment">Segment</label>
                        <select name="cars" id="partner_form_segment">
                            <option value="0">Select segment</option>
                            <option value="All">All</option>
                            <option value="Mutual Funds">Mutual Funds</option>
                            <option value="Insurance">Insurance</option>
                            <option value="Loans">Loans</option>
                            <option value="Shares & Stocks">Shares & Stocks</option>
                            <option value="Income Tax">Income Tax</option>
                            <option value="Real Estate">Real Estate</option>
                        </select>
                    </div>
                    <button id="partner-submit-btn" class="theme-btn btn my-2 my-sm-0 theme-bg2" type="submit"  style={{backgroundColor: "orange", fontSize: "large", color: "white"}}>Submit
                    </button>
                    <p id="partner-form-success" class="alert-success py-2 mt-2" style={{display: "none"}}></p>
                    <p id="partner-form-error" class="alert-danger py-2 mt-2" style={{display: "none"}}></p>

                </form>
            </div>
        </div>
    </div>
</div>

    </div>
  )
}
