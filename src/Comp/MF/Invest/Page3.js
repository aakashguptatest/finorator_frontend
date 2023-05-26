import React, { useState, useEffect } from 'react';
import './Purchase-Transaction.css';
import StarRating from './Star';
import Chart from "./Graph"
import {useLocation, useNavigate} from "react-router-dom"
const Page3 = () => {
  const location = useLocation();
  console.log(location.state.results);
  var results = location.state.results;
  console.log(results);
  const [checkbox1, setCheckbox1] = useState(false);
  const [checkbox2, setCheckbox2] = useState(false);
  const [selectedOption, setSelectedOption] = useState('Switch in/out');
  const [formattedDate, setFormattedDate] = useState('');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleCheckbox1Change = () => {
    setCheckbox1(!checkbox1);
  };

  const handleCheckbox2Change = () => {
    setCheckbox2(!checkbox2);
  };

  const handleGoButtonClick = () => {
    // Perform some action with the checkbox values
    console.log('Checkbox 1:', checkbox1);
    console.log('Checkbox 2:', checkbox2);
  };
  useEffect(() => {
    const currentDate = new Date();
    const day = currentDate.getDate();
    const month = currentDate.toLocaleString('default', { month: 'long' });
    const year = currentDate.getFullYear();
    const formatted = `${day},${month.slice(0, 3)}, ${year}`;
    setFormattedDate(formatted);
  }, []);
  const nav = useNavigate();
  function Go(){
    nav("/Page4");
  }
    function Back(){
      var r = localStorage.getItem('data.scheme');
      console.log(r);
    nav("/Page2",{ state: { results: r } });
    }

  return (
    <div className="container">
    <div className="scheme">
      <h2>Scheme</h2>
      <div className="scheme-content">
        <p id="scheme">
          {results.scheme_name} <br/>  <br/> <br/> Folio Number: 12345 Amount: 12345 Folio Number: 12345
        </p>
        <p>Amount: 0, Units: 0.00</p> 

        <div style={{display: "block"}}>
          <label htmlFor="options">Select an option:</label>
          <select id="options" value={selectedOption} onChange={handleOptionChange}>
            <option value="Switch in/out">Switch in/out</option>
            <option value="Redemption">Redemption</option>
            <option value="Purchase">Purchase</option>
          </select>
  
          <div style={{ display: "flex", alignItems: "center" }}>
  <label style={{ marginRight: "10px", fontSize: "x-large" }}>
    <input type="checkbox" checked={checkbox1} onChange={handleCheckbox1Change} />
    Regular
  </label>
  <label style={{ marginRight: "10px", fontSize: "x-large" }}>
    <input type="checkbox" checked={checkbox2} onChange={handleCheckbox2Change} />
    Direct
  </label>
  <button className="go-button" onClick={handleGoButtonClick}>
      Go
    </button></div>
<div className="nav-rating">
        <p style={{ fontSize: "1.5em" }}>
  NAV: <b>1234</b> ({formattedDate})
  <div>
    Crisil Rank - <span  style={{display: "flex"}}><StarRating rating={2} /></span>
  </div>
  <span>Risk: Very High</span>
</p>

<div class="cont">
          <div>
          <p>
            category: Large and Mid Cap Fund <br />fundHouse:SBI Mutual Fund
            </p>  
            <p >
            fundSize: 9077 Cr <br />Express Ratio: 1.04%
          </p> </div></div>
        </div>

        </div>
      </div>
<Chart /> 
      
      <p><b>Total Amount: 0</b></p>
    </div>
    <br />
    <div className="division">
      <label>
      <h2>Amount</h2>
      <input type="text" placeholder="Min Amt: 1000" className="text" />
     
      </label>
    </div>
    <br />
    <div className="division">
      
    <label>
      <h2>EDUN</h2>
      <input type="text" placeholder="Apoorv Kathwar" className="text" />
      </label> </div>
    <br />
    <div className="buttons">
      <button onClick={Go}>Save and Continue</button>
      <button onClick={Back}>Back</button>

    </div>
  </div>
    );
};

export default Page3;
