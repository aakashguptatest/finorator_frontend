import React, {useState} from 'react'
import "./static/css/main.css"
import "./static/bootstrap/css/bootstrap.css"
// import "./static/css/starter-template.css"


function Contactus() {
  return (
    <div>
        <div class="hero sub-hero text-center partner-hero">
    <div class="container">
        <div class="row" style={{alignitems: "center"}}>
            <div class="col-lg-12 col-xl-12">
                <div>
                    <h1 class="theme-h1 text-center">Contact Us</h1>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="section-body partner-form-section">
    <div class="container">
        <div class="theme-head mt-4">Have query ? Connect with us.</div>
        <div class="row" style={{alignitems: "center"}}>
            <div class="col-lg-6">
                <form class="partner-form" id="contact-form" style={{textalign: "center"}} onsubmit="return false">
                    <div class="form-group">
                        <label for="contact_form_name">Name</label>
                        <input type="text" class="form-control" id="contact_form_name" maxlength="100"
                               placeholder="Enter your name"/>
                    </div>
                    <div class="form-group">
                        <label for="contact_form_email">Email</label>
                        <input type="text" class="form-control" id="contact_form_email" maxlength="100"
                               placeholder="Enter your email"/>
                    </div>
                    <div class="form-group">
                        <label for="contact_form_mobile">Mobile no.</label>
                        <input type="text" class="form-control" id="contact_form_mobile" maxlength="10"
                               placeholder="Enter your Mobile no."/>
                    </div>
                    <div class="form-group">
                        <label for="contact_form_address">Address</label>
                        <input type="text" class="form-control" id="contact_form_address" maxlength="250"
                               placeholder="Enter full address with pin code"/>
                    </div>
                    <div class="form-group">
                        <label for="contact_form_msg">Message</label>
                        <textarea type="text" class="form-control" id="contact_form_msg" maxlength="1000"
                                  placeholder="Enter your message here"></textarea>
                    </div>
                    <button class="theme-btn btn my-2 my-sm-0 theme-bg2 submit-btn">Submit</button>
                                      <p id="contact-form-success" class="alert-success py-2 mt-2" style={{display: "None"}}>Your request has been submitted
                        successfully</p>
                    <p id="contact-form-error" class="alert-danger py-2 mt-2" style={{display: "None"}}>Something went wrong please try after
                        sometime.</p>

                </form>
            </div>
            <div class="col-lg-6">
                <div class="map" style={{height: 500, width: "100%"}}>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3718.4195835162845!2d81.64447971492264!3d21.254852685876365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a28dd92aa38537f%3A0x7d5d65dfd8e8d55d!2s36INC!5e0!3m2!1sen!2sin!4v1632938713000!5m2!1sen!2sin"
                            width="100%" height="100%" style={{border:"0"}} allowfullscreen="" loading="lazy"></iframe>
                </div>
            </div>
        </div>
    </div>
</div>

    </div>
  )
}

export default Contactus