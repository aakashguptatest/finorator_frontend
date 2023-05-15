import React from 'react';
import './Purchase-Transaction.css';

const PurchaseTransaction = (results) => {
  return (
    <div className='container'>
      <div className="scheme">
        <h2>Scheme</h2>
        <div className='scheme'>
        <p id = "scheme">SBI Blue Chip Fund</p> regular plan growth 
        <p>Folio Number: 12345</p>
        <p>Amount: 12345</p>
        <p>Folio Number: 12345</p>
        </div>
          </div> <br/>
      <div className="division">
        <h2>Division 2</h2>
        <input type="text" placeholder="Enter text" className='text' />
      </div><br/>
      <div className="division">
        <h2>Division 3</h2>
        <input type="text" placeholder="Enter text" className='text'/>
      </div><br/>
      <div className="buttons">
        <button>Button 1</button>
        <button>Button 2</button>
        <button>Button 3</button>
      </div>
    </div>
  );
};

export default PurchaseTransaction;
