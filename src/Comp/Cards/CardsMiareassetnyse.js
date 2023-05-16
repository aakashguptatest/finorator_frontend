import React from 'react';
import './Card.css';

const CardMiareassetnyse = () => {
  CardsMiareassetnyse.getElementsByClassName("Curramt").innerHTML = `Curr Amount = ${a.curramtman}`;
  CardsMiareassetnyse.getElementsByClassName("AmountInvested").innerHTML = `Amount Invested is ${a.amountinvestedman}`;
  CardsMiareassetnyse.getElementsByClassName("DivPaid").innerHTML = `Div Paid = ${a.divpaidman}`;
  CardsMiareassetnyse.getElementsByClassName("foliono").innerHTML = `Folio No =  ${a.folionoman}`;
  CardsMiareassetnyse.getElementsByClassName("Ret.ABS").innerHTML = `Ret.ABS = ${a.Ret.ABSman}`;
  CardsMiareassetnyse.getElementsByClassName("W.CAGR").innerHTML = `W.CAGR = ${a.W.CAGRman}`;
   
  return (
    <div className="card-container">
      <p className="card-heading">Miare Asset NYSE Fand + ETF fund of Fund Regular Growth</p>
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

      </div>
    </div>
  );
  
}

export default CardMiareassetnyse;
