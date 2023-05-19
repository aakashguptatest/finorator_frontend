import React from 'react';
import './Card.css';
import a from './Reports'
const Cardclientwisesummary = () => {
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
  Cardsclientwisesummary.getElementsByClassName("card-heading").innerHTML = getDate();
  Cardsclientwisesummary.getElementsByClassName("AmountInvested").innerHTML = `Amount Invested is ${a.amountinvestedcws}`;
  Cardsclientwisesummary.getElementsByClassName("CurrentAmount").innerHTML = `CurrentAmount is ${a.currentamountcws}`;
  Cardsclientwisesummary.getElementsByClassName("glst").innerHTML = `glst = ${a.glstcws}`;
  Cardsclientwisesummary.getElementsByClassName("glit").innerHTML = `glit =  ${a.glitcws}`;
  Cardsclientwisesummary.getElementsByClassName("tatagl").innerHTML = `TATA GL = ${a.tataglcws}`;
  Cardsclientwisesummary.getElementsByClassName("W.CAGR").innerHTML = `W.CAGR = ${a.W.CAGRcws}`;
  Cardsclientwisesummary.getElementsByClassName("div").innerHTML = `div = ${a.divcws}`;
  Cardsclientwisesummary.getElementsByClassName("Ret.ABS").innerHTML = `Ret.ABS = ${a.Ret.ABScws}`;
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

export default Cardclientwisesummary;
