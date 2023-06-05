import React, { useState } from "react";
import "./footer.css";

function Footer() {
  return (
    <footer class="footer">
      <div class="footer__addr">
        <h1 class="footer__logo">FINORATOR</h1>

        <h2>Finorator</h2>

        <address>
          .A Fintech Startup, providing a unified platform to help you achieve
          your financial goals & manage all financial operations inside a single
          platform
          <a class="footer__btn" href="mailto:example@gmail.com">
            Email Us
          </a>
        </address>
      </div>

      <ul class="footer__nav">
        <li class="nav__item">
          <h2 class="nav__title">Pages</h2>

          <ul class="nav__ul">
            <li>
              <a href="#">About us</a>
            </li>

            <li>
              <a href="#">Disclaimer</a>
            </li>

            <li>
              <a href="#">Terms & Conditions</a>
            </li>

            <li>
              <a href="#">Privacy Policy</a>
            </li>
          </ul>
        </li>
        <li class="nav__item">
          <h2 class="nav__title">Contact</h2>

          <ul class="nav__ul">
            <li>
              <a href="#">+91 7869226891</a>
            </li>

            <li>
              <a href="#">support@finorator.com</a>
            </li>

            <li>
              <a href="#">
                317, 3rd Floor, AIC@36 Inc. City Center Mall, Pandri, Raipur
                (C.G) – 492001{" "}
              </a>
            </li>
          </ul>
        </li>
      </ul>

      <div class="legal">
        <p>&copy; 2019 Something. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
