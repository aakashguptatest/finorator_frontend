import React from 'react';
import './Card.css';
import a from './Reports'
const CardParagParekhFlexi = () => {
  CardsParagParekhflexi.getElementsByClassName("Curramt").innerHTML = `Curr Amount = ${a.curramttppf}`;
  CardsParagParekhflexi.getElementsByClassName("AmountInvested").innerHTML = `Amount Invested is ${a.amountinvestedtppf}`;
  CardsParagParekhflexi.getElementsByClassName("DivPaid").innerHTML = `Div Paid = ${a.divpaidtppf}`;
  CardsParagParekhflexi.getElementsByClassName("foliono").innerHTML = `Folio No =  ${a.folionotppf}`;
  CardsParagParekhflexi.getElementsByClassName("Ret.ABS").innerHTML = `Ret.ABS = ${a.Ret.ABStppf}`;
  CardsParagParekhflexi.getElementsByClassName("W.CAGR").innerHTML = `W.CAGR = ${a.W.CAGRtppf}`;
  return (
    <div className="card-container">
      <p className="card-heading">Parag Parekh Flexi Cap Fund - Regular Growth Plan</p>
      <div className="card-rows">
        <div className="card-row">
          <p className='Curramt'></p>
          <p className='AmountInvested'></p>
          <p className='DivPaid'></p>
        </div>
        <div className="card-row">
          <p className='foliono'></p>
          <p className='Ret.ABS'></p>
          <p className='W.CAGR'></p>
        </div>
      </div>    </div>
  );
  
}

export default CardParagParekhFlexi;
