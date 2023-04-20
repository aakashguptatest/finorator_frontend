import React from 'react';
import './Card.css';
var a= []
const Card = () => {
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
  document.getElementsByClassName("card-heading").innerHTML = getDate();
  document.getElementsByClassName("AmountInvested").innerHTML = `Amount Invested is ${a.amountinvested}`;
  document.getElementsByClassName("CurrentAmount").innerHTML = `CurrentAmount is ${a.currentamount}`;
  document.getElementsByClassName("glst").innerHTML = `glst = ${a.glst}`;
  document.getElementsByClassName("glit").innerHTML = `glit =  ${a.glit}`;
  document.getElementsByClassName("tatagl").innerHTML = `TATA GL = ${a.tatagl}`;
  document.getElementsByClassName("W.CAGR").innerHTML = `W.CAGR = ${a.W.CAGR}`;
  document.getElementsByClassName("div").innerHTML = `div = ${a.div}`;
  document.getElementsByClassName("Ret.ABS").innerHTML = `Ret.ABS = ${a.Ret.ABS}`;

  
  return (
    <div className="card-container">
      <p className="card-heading" id = "date"></p>
      <div className="card-rows">
        <div className="card-row">
          <p className = "AmountInvested"></p>
          <p className='CurrentAmount'></p>
        </div>
        <div className="card-row">
          <p className='glst'></p>
          <p className='glit'></p>
          <p className='tatagl'></p>
        </div>
        <div className="card-row">
          <p className='W.CAGR'></p>
          <p className='div'></p>
          <p className='Ret.ABS'></p>
        </div>
      </div>
    </div>
  );
  
}

export default Card;
