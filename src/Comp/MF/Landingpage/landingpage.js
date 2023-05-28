import React from "react";
import "./landingpage.css";
import SidebarMF from "../../sidebar mutualfunds/Sidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import SliderSegment from "../../Home/Sliderhome";
import Downloads from "../Downloads";
import Blogs from "../blogs";

function Landingpage() {
  const username = sessionStorage.getItem("username");
  return (
    <div>
      <SidebarMF />
      <div className="Landingpage">
        <section className="plain-text-section">
          <div className="welcome-section">
            <FontAwesomeIcon icon={faUser} className="profile-icon" />
            <div className="welcome-content">
              <h2 className="welcome-title">Welcome, {username}!</h2>
              <p className="welcome-message">
                Congratulations on successfully logging in.
              </p>
            </div>
          </div>{" "}
        </section>

        <section className="card-section">
          <h2>Featured Cards</h2>
          <div className="card-container">
            <div className="card">
              <h3>Card 1</h3>
              <p>This is the content of Card 1.</p>
            </div>
            <div className="card">
              <h3>Card 1</h3>
              <p>This is the content of Card 1.</p>
            </div>
            <div className="card">
              <h3>Card 1</h3>
              <p>This is the content of Card 1.</p>
            </div>
            <div className="card">
              <h3>Card 1</h3>
              <p>This is the content of Card 1.</p>
            </div>
            <div className="card">
              <h3>Card 1</h3>
              <p>This is the content of Card 1.</p>
            </div>
            <div className="card">
              <h3>Card 1</h3>
              <p>This is the content of Card 1.</p>
            </div>
            <div className="card">
              <h3>Card 1</h3>
              <p>This is the content of Card 1.</p>
            </div>
            {/* Repeat the card structure for the remaining 6 cards */}
          </div>
        </section>

        <section className="qa-section">
          <h2>Frequently Asked Questions</h2>
          <div className="qa-container">
            <div className="qa">
              <h3>Question 1</h3>
              <p>Answer to Question 1.</p>
            </div>
            <div className="qa">
              <h3>Question 1</h3>
              <p>Answer to Question 1.</p>
            </div>
            <div className="qa">
              <h3>Question 1</h3>
              <p>Answer to Question 1.</p>
            </div>
            <div className="qa">
              <h3>Question 1</h3>
              <p>Answer to Question 1.</p>
            </div>
            <div className="qa">
              <h3>Question 1</h3>
              <p>Answer to Question 1.</p>
            </div>
            <div className="qa">
              <h3>Question 1</h3>
              <p>Answer to Question 1.</p>
            </div>
            <div className="qa">
              <h3>Question 1</h3>
              <p>Answer to Question 1.</p>
            </div>
            <div className="qa">
              <h3>Question 1</h3>
              <p>Answer to Question 1.</p>
            </div>
          </div>
        </section>
        <section id="Segment" style={{ zIndex: 0 }}>
          {" "}
          <SliderSegment />
        </section>
        <section id="blogs">
          {" "}
          <Blogs />
        </section>
        <section id="downloads">
          {" "}
          <Downloads />
        </section>
      </div>
    </div>
  );
}

export default Landingpage;
