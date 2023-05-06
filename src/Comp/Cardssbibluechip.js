import React from 'react';
import './Card.css';
import a from './Reports'
const Cardsbibluechip = () => {
  Cardssbibluechip.getElementsByClassName("Curramt").innerHTML = `Curr Amount = ${a.curramttsbib}`;
  Cardssbibluechip.getElementsByClassName("AmountInvested").innerHTML = `Amount Invested is ${a.amountinvestedtsbib}`;
  Cardssbibluechip.getElementsByClassName("DivPaid").innerHTML = `Div Paid = ${a.divpaidtsbib}`;
  Cardssbibluechip.getElementsByClassName("foliono").innerHTML = `Folio No =  ${a.folionotsbib}`;
  Cardssbibluechip.getElementsByClassName("Ret.ABS").innerHTML = `Ret.ABS = ${a.Ret.ABStsbib}`;
  Cardssbibluechip.getElementsByClassName("W.CAGR").innerHTML = `W.CAGR = ${a.W.CAGRtsbib}`;
  return (
    <div className="card-container">
      <p className="card-heading">SBI Blue Chip Fund- Regular Plan Growth</p>
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

export default Cardsbibluechip;
