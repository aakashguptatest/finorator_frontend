import React from 'react';
import './Card.css';
import a from './Reports'
const Cardsbifocusedequity = () => {
  Cardssbifocusedequity.getElementsByClassName("Curramt").innerHTML = `Curr Amount = ${a.curramttsbif}`;
  Cardssbifocusedequity.getElementsByClassName("AmountInvested").innerHTML = `Amount Invested is ${a.amountinvestedtsbif}`;
  Cardssbifocusedequity.getElementsByClassName("DivPaid").innerHTML = `Div Paid = ${a.divpaidtsbif}`;
  Cardssbifocusedequity.getElementsByClassName("foliono").innerHTML = `Folio No =  ${a.folionotsbif}`;
  Cardssbifocusedequity.getElementsByClassName("Ret.ABS").innerHTML = `Ret.ABS = ${a.Ret.ABStsbif}`;
  Cardssbifocusedequity.getElementsByClassName("W.CAGR").innerHTML = `W.CAGR = ${a.W.CAGRtsbif}`;
  return (
    <div className="card-container">
      <p className="card-heading">SBI Focused Equity Fund- Regular Plan Growth</p>
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

export default Cardsbifocusedequity;
