import React from 'react';
import './Card.css';

const Card3 = () => {
  function getDate() {
    const months = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
  
    const date = new Date();
    const day = date.getDate();
    const monthIndex = date.getMonth();
    const month = months[monthIndex];
    const year = date.getFullYear();
  
    return `${day} ${month} ${year}`;
  }
  
  return (
    <div className="card-container">
      <p className="card-heading" id = "date"></p>
      <div className="card-rows">
        <div className="card-row">
          <p>Row 1, Column 1</p>
          <p>Row 1, Column 2</p>
          <p>Row 1, Column 3</p>
        </div>
        <div className="card-row">
          <p>Row 2, Column 1</p>
          <p>Row 2, Column 2</p>
          <p>Row 2, Column 3</p>
        </div>
        <div className="card-row">
          <p>Row 3, Column 1</p>
          <p>Row 3, Column 2</p>
          <p>Row 3, Column 3</p>
        </div>
      </div>
    </div>
  );
  
}

export default Card3;
