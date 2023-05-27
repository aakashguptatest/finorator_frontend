import React from 'react';
import "./Purchase-Invest.css"
import { useState, useEffect } from 'react';
import {useNavigate} from "react-router-dom";
import axios from "axios";

const DropdownMenu = () => {
  const nav = useNavigate();
  const [amcCodes, setAmcCodes] = useState([]);
  const [schemeTypes, setSchemeTypes] = useState([]);
  const [selectedAMCCode, setSelectedAMCCode] = useState('');
  const [selectedSchemeType, setSelectedSchemeType] = useState('');
  const [selectedSchemeName, setSelectedSchemeName] = useState('');
  const [schemes, setSchemes] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:5000/mutualfunds/get_schemes')
      .then(response => {
      const data = response.data;
        if (data.amc_codes) {
          setAmcCodes(data.amc_codes);
        }
        if (data.scheme_types) {
          setSchemeTypes(data.scheme_types);
        }
        console.log(data.amc_codes);
      })
      .catch(error => console.error(error));
  }, []);

  const fetchSchemes = () => {
    if (!selectedAMCCode || !selectedSchemeType) {
      axios.post('http://127.0.0.1:5000/mutualfunds/get_schemes', {
        scheme_name: selectedSchemeName
      }, {
        headers: {
          'Content-Type': 'application/json',
        }
      })
      .then(response => {
        const data = response.data;
        if (data.scheme) {
          setSchemes(data.scheme);
          localStorage.setItem('data.scheme', data.scheme);
          nav("/Page2", { state: { results: data.scheme } });
        }
      })
      .catch(error => console.error(error));
    } else {
      axios.post('http://127.0.0.1:5000/mutualfunds/get_schemes', {
        amc_code: selectedAMCCode,
        scheme_type: selectedSchemeType,
      }, {
        headers: {
          'Content-Type': 'application/json',
        }
      })
      .then(response => {
        const data = response.data;
        if (data.schemes) {
          setSchemes(data.schemes);
          localStorage.setItem('data.scheme', data.scheme);
          nav("/Page2", { state: { results: data.schemes } });
        }
      })
      .catch(error => console.error(error));
    }
  };
  
  

  const handleAMCCodeChange = event => {
    setSelectedAMCCode(event.target.value);
  };

  const handleSchemeTypeChange = event => {
    setSelectedSchemeType(event.target.value);
  };

  const handleSchemeNameChange = event => {
    setSelectedSchemeName(event.target.value);
  };
              
  return (
    <div>        <div>
    <label className='label'>
      Select AMC:<br /> <br /> 
      <select className = "textip" value={selectedAMCCode} onChange={handleAMCCodeChange}> <option value="">Select an option</option>
      {amcCodes.map(code => (
          <option key={code} value={code}>
            {code}
          </option>
        ))}
    </select>
    </label> <br />

    <label className='label'>
      Select Nature:<br /> <br /> 
      <select className = "textip" value={selectedSchemeType} onChange={handleSchemeTypeChange}><option value="">Select an option</option>
      {schemeTypes.map(type => (
          <option key={type} value={type}>
            {type}
          </option>
        ))}
        </select> 
    </label><br /><br /><br />

    <label className='label'>
     Search Scheme Name:<br /><br />
     <input type='text' value={selectedSchemeName} onChange={handleSchemeNameChange}></input>
    </label><br /><br /><br />
    <button onClick={fetchSchemes}>Get Schemes</button> <br /> <br />

       <br /> <br/><br /><br />
     <div> <br/><br/>
                 </div>
  </div>
           
    </div>
  )
}
export default DropdownMenu;