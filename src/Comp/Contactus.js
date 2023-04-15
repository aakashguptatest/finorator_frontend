import React, {useState} from 'react'
import "./static/css/main.css"
import "./static/bootstrap/css/bootstrap.css"
import "./static/css/starter-template.css"
import "./static/assets/js/popper.js"
import  "./static/bootstrap/js/bootstrap.min.js"
import "https://fonts.googleapis.com";
import "https://fonts.gstatic.com";
const mail_format = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

function Contactus() {
    document.addEventListener('DOMContentLoaded', function() {
        const testLinks = document.querySelectorAll('a.test');
        for (const link of testLinks) {
          link.addEventListener('click', function(e) {
            const nextUL = link.nextElementSibling;
            nextUL.classList.toggle('hidden');
          });
        }
      });

function ContactForm() {
  const [successMessageVisible, setSuccessMessageVisible] = useState(false);
  const [errorMessageVisible, setErrorMessageVisible] = useState(false);
  
  const validateForm = () => {
    let is_valid = true;
    const name = document.querySelector('#contact_form_name').value;
    const email = document.querySelector('#contact_form_email').value;
    const mobile = document.querySelector('#contact_form_mobile').value;
    const address = document.querySelector('#contact_form_address').value;
    const msg = document.querySelector('#contact_form_msg').value;

    if (!name) {
      document.querySelector('#contact_form_name').classList.add('error');
      is_valid = false;
    }
    if (!email || !email.match(mail_format)) {
      document.querySelector('#contact_form_email').classList.add('error');
      is_valid = false;
    }
    if (!mobile || isNaN(parseFloat(mobile)) || !(parseInt(mobile) > 5000000000 && parseInt(mobile) < 9999999999)) {
      document.querySelector('#contact_form_mobile').classList.add('error');
      is_valid = false;
    }
    if (!address) {
      document.querySelector('#contact_form_address').classList.add('error');
      is_valid = false;
    }
    if (!msg) {
      document.querySelector('#contact_form_msg').classList.add('error');
      is_valid = false;
    }
    return is_valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm() === false) {
      return;
    }

    const name = document.querySelector('#contact_form_name').value;
    const email = document.querySelector('#contact_form_email').value;
    const mobile = document.querySelector('#contact_form_mobile').value;
    const address = document.querySelector('#contact_form_address').value;
    const msg = document.querySelector('#contact_form_msg').value;

    const formdata = new FormData();
    formdata.append('name', name);
    formdata.append('email', email);
    formdata.append('mobile', '+91' + mobile.toUpperCase());
    formdata.append('street', address);
    formdata.append('description', msg);

    const url = 'https://api.finorator.com/api/zoho_crm/contact/';
    // const url = 'http://localhost:8000/api/zoho_crm/contact/';

    fetch(url, {
      method: 'POST',
      body: formdata,
    })
    .then(response => response.json())
    .then(data => {
      if (!data.success) {
        setErrorMessageVisible(true);
        setTimeout(() => {
          setErrorMessageVisible(false);
        }, 3000);
      } else {
        document.querySelector('#contact_form_name').value = '';
        document.querySelector('#contact_form_email').value = '';
        document.querySelector('#contact_form_mobile').value = '';
        document.querySelector('#contact_form_address').value = '';
        document.querySelector('#contact_form_msg').value = '';
        setSuccessMessageVisible(true);
        setTimeout(() => {
          setSuccessMessageVisible(false);
        }, 3000);
      }
    })
    .catch(error => {
      console.error('Error:', error);
    });
  };

  const handleInputChange = (e) => {
    const field = e.target;
    if (!field.value) {
      field.classList.add('error');
    } else {
      field.classList.remove('error');
    }
  }}

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
                <div class="map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3718.4195835162845!2d81.64447971492264!3d21.254852685876365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a28dd92aa38537f%3A0x7d5d65dfd8e8d55d!2s36INC!5e0!3m2!1sen!2sin!4v1632938713000!5m2!1sen!2sin"
                            width="100%" height="200" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
                </div>
            </div>
        </div>
    </div>
</div>

    </div>
  )
}

export default Contactus