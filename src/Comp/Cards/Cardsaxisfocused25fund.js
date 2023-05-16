import React from 'react';
import './Card.css';
import a from './Reports'
const Cardaxisfocused25fund = () => {
  Cardsaxisfocused25fund.getElementsByClassName("Curramt").innerHTML = `Curr Amount = ${a.curramtaff}`;
  Cardsaxisfocused25fund.getElementsByClassName("AmountInvested").innerHTML = `Amount Invested is ${a.amountinvestedaff}`;
  Cardsaxisfocused25fund.getElementsByClassName("DivPaid").innerHTML = `Div Paid = ${a.divpaidaff}`;
  Cardsaxisfocused25fund.getElementsByClassName("foliono").innerHTML = `Folio No =  ${a.folionoaff}`;
  Cardsaxisfocused25fund.getElementsByClassName("Ret.ABS").innerHTML = `Ret.ABS = ${a.Ret.ABSaff}`;
  Cardsaxisfocused25fund.getElementsByClassName("W.CAGR").innerHTML = `W.CAGR = ${a.W.CAGRaff}`;
  return (
    <div className="card-container">
      <p className="card-heading">Axis focused 25 fund-Regular Plan-Growth Option </p>
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

export default Cardaxisfocused25fund;
