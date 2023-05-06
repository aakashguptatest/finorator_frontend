import React from 'react';
import './Card.css'; 
import a from './Reports'

const CardTataDigitalIndia = () => {  
  CardsTataDigitalIndia.getElementsByClassName("Curramt").innerHTML = `Curr Amount = ${a.curramttgti}`;
  CardsTataDigitalIndia.getElementsByClassName("AmountInvested").innerHTML = `Amount Invested is ${a.amountinvestedtgti}`;
  CardsTataDigitalIndia.getElementsByClassName("DivPaid").innerHTML = `Div Paid = ${a.divpaidtgti}`;
  CardsTataDigitalIndia.getElementsByClassName("foliono").innerHTML = `Folio No =  ${a.folionotgti}`;
  CardsTataDigitalIndia.getElementsByClassName("Ret.ABS").innerHTML = `Ret.ABS = ${a.Ret.ABStgti}`;
  CardsTataDigitalIndia.getElementsByClassName("W.CAGR").innerHTML = `W.CAGR = ${a.W.CAGRtgti}`;
 

  return (
    <div className="card-container">
      <p className="card-heading">Tata Digital India Fund-Regular-Plan Growth</p>
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

export default CardTataDigitalIndia;
