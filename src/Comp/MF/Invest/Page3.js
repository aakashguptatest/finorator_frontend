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
    nav("/Page2");
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
          <div class="cont">
          <div>
          <p>
            category: <br />fundHouse;
            </p>  
            </div>
            <div>
            <p >
            fundSize: <br />Express Ratio:
          </p> </div></div>
        </div>
  
        <div>
          <label>
            <input type="checkbox" checked={checkbox1} onChange={handleCheckbox1Change} />
            Checkbox 1
          </label>
          <label>
            <input type="checkbox" checked={checkbox2} onChange={handleCheckbox2Change} />
            Checkbox 2
          </label>
          <button style={{ fontSize: "1em", height: "1.6em", padding: 0, width: "2em" }} onClick={handleGoButtonClick}>
            Go
          </button>
        </div>
        <div className="nav-rating">
          <p>
            NAV: <b>1234</b> ({formattedDate})
            <span>
              Crisil Rank - <br /> <StarRating rating={2} />
            </span>
            <span>Risk: Very High</span>

          </p>
        </div>
      </div>
      <Chart/> 
      <p><b>Total Amount: 0</b></p>
    </div>
    <br />
    <div className="division">
      <label>
      <h2>Amount</h2>
      <input type="text" placeholder="Enter text" className="text" />
     
      </label>
    </div>
    <br />
    <div className="division">
      
    <label>
      <h2>EDUN</h2>
      <input type="text" placeholder="Enter text" className="text" />
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
