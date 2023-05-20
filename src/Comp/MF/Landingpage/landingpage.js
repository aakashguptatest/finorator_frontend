import React from 'react';
import './landingpage.css';
import Sidebar from '../../Sidebar/Sidebar';
function Landingpage() {
  return (
    <div>
    <Sidebar />
    <div className="Landingpage">
      <section className="plain-text-section">
        <h1>Welcome to Our Landing Page</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget ligula vel dui rhoncus malesuada. Vestibulum nec nunc quis purus tristique pharetra.</p>
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

          {/* Repeat the question and answer structure for other Q&A pairs */}
        </div>
      </section>
    </div></div>
  );
}

export default Landingpage;
