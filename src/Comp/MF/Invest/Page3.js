import React, { useState, useEffect } from 'react';
import './Purchase-Transaction.css';
import StarRating from './Star';
import Chart from "./Graph"
import {useLocation, useNavigate} from "react-router-dom"
import axios from "axios";
const Page3 = () => {
  const username = sessionStorage.getItem("username");
  const location = useLocation();
  console.log(location.state.results);
  var results = location.state.results;
  console.log(results);
  const [selectedOption, setSelectedOption] = useState("Switch in/out");
  const [formattedDate, setFormattedDate] = useState("");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  useEffect(() => {
    const currentDate = new Date();
    const day = currentDate.getDate();
    const month = currentDate.toLocaleString("default", { month: "long" });
    const year = currentDate.getFullYear();
    const formatted = `${day},${month.slice(0, 3)}, ${year}`;
    setFormattedDate(formatted);
  }, []);
  const nav = useNavigate();
  const Go = () => {
    // nav("/Page4");
    axios.post('http://127.0.0.1:5000/users/invest', {
        amount: selectedAmount,
        username: username,
        results: results,
      }, {
        headers: {
          'Content-Type': 'application/json',
        }
      })
      .then(response => {
        console.log(response.data);
      })
      .catch(error => console.error(error));
  }
  function Back() {
    var r = localStorage.getItem("data.scheme");
    console.log(r);
    nav("/mf/invest/Page2", { state: { results: r } });
  }

  return (
    <div>
    <div className="container">
      
        <p style={{backgroundColor: "lightblue", fontSize: "3em", padding: "0.2em", color: "blue", fontWeight: "bold"}}>Scheme</p>
        <div className="scheme">
        <div className="scheme-content">
        <div style={{width: "100%"}}>
  <div style={{fontSize: "1.4em"}}>
    category: Large and Mid Cap Fund <br />
    fundHouse:SBI Mutual Fund<br/>
    fundSize: 9077 Cr <br />
    Express Ratio: 1.04%
  </div>
</div>
   
          <div>
           

            <div className="nav-rating">
              <p style={{ fontSize: "2em" }}>
                NAV: <b>1234</b> ({formattedDate})
                <div>
                  Crisil Rank -
                  <div className="rating">
                  <StarRating rating={2}/></div>
                  Risk: Very High
                 
                </div>
               </p>

            </div>
          </div>
        </div>
        <Chart />
<br/>
         <select
              id="options"
              value={selectedOption}
              onChange={handleOptionChange}
            >
              <option value="Switch in/out">Switch in/out</option>
              <option value="Redemption">Redemption</option>
              <option value="Purchase">Purchase</option>
            </select>
      </div>
      <Chart/> 
      <p><b>Total Amount: 0</b></p>
    <br />
    <div className="division">
      <label>
      <h2>Amount</h2>
      <input type="number" step="0.01" value={selectedAmount} onChange={handleAmountChange} placeholder="Enter text" className="text" />
      </label>
    </div>
    <br />
    <div className="division">
    <label>
      <h2>EUIN</h2>
      <input type="text" placeholder="Enter text" className="text" />
      </label> </div>
    <br />
    <div className="buttons">
      <button onClick={Go}>Save and Continue</button>
      <button onClick={Back}>Back</button>
    </div>
    </div>
    </div>
    
    );
};

export default Page3;