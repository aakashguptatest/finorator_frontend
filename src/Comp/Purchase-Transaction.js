import React from 'react';
import './Purchase-Transaction.css';

const PurchaseTransaction = (results) => {
  return (
    <div className='container'>
      <div className="scheme">
        <h2>Scheme</h2>
        <div className='scheme'></div>
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
