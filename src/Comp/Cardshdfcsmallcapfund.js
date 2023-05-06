import React from 'react';
import './Card.css';
import a from './Reports'
const Cardhdfcsmallcapfund = () => {
  Cardsaxisfocused25fund.getElementsByClassName("Curramt").innerHTML = `Curr Amount = ${a.curramthdfc}`;
  Cardsaxisfocused25fund.getElementsByClassName("AmountInvested").innerHTML = `Amount Invested is ${a.amountinvestedhdfc}`;
  Cardsaxisfocused25fund.getElementsByClassName("DivPaid").innerHTML = `Div Paid = ${a.divpaidhdfc}`;
  Cardsaxisfocused25fund.getElementsByClassName("foliono").innerHTML = `Folio No =  ${a.folionohdfc}`;
  Cardsaxisfocused25fund.getElementsByClassName("Ret.ABS").innerHTML = `Ret.ABS = ${a.Ret.ABShdfc}`;
  Cardsaxisfocused25fund.getElementsByClassName("W.CAGR").innerHTML = `W.CAGR = ${a.W.CAGRhdfc}`;
  return (
    <div className="card-container">
      <p className="card-heading">HDFC Small Cap Fund - Regular Growth Plan</p>
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

export default Cardhdfcsmallcapfund;
