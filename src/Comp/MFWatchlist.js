import { useState, useEffect } from 'react';
import { Table, Thead, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import './MFWatchlist.css';
import gif from "./static/assets/icons8-shopping-cart.gif"
export default function MFWatchlist() {
    const [AMC, setAMC] = useState('');
    const [nature, setnature] = useState('');
    const [category, setcategory] = useState('');
    const [name, setname] = useState('');
    const [results, setResults] = useState([]);
    const [options, setOptions] = useState([]);
    useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/comments')
        .then((response) => response.json())
        .then((data) => {
          const input1Options = [...new Set(data.map((item) => item.postId))];
          const input2Options = [...new Set(data.map((item) => item.name))];
          const input3Options = [...new Set(data.map((item) => item.email))];
          const input4Options = [...new Set(data.map((item) => item.body))];
          setOptions([input1Options, input2Options, input3Options, input4Options]);
        })
        .catch((error) => console.log(error));
    }, []);
  
    let handleSearch = () => {
      let api = "https://jsonplaceholder.typicode.com/comments?"
      if (AMC !== ""){
        api = api + `postId=${AMC}`
      }
      if (category !== ""){
        api = api + `&email=${category}`
      }
      if (nature !== ""){
        api = api + `&name=${nature}`
      }
      if (name !== ""){
        api = api + `&body=${name}`
      }
      fetch(api)
        .then(response => response.json())
        .then(json => setResults(json))
      
    }
        return (
      <div style={{ border: '1px solid black', height : "100%", width: "100%" }}>
        <div>
          <label className='label'>
            AMC:<br />
            <select className = "textip" value={AMC} onChange={(e) => setAMC(e.target.value)}> <option value="">Select an option</option>
            {options[0]?.map((option) => (
              <option value={option}>{option}</option>
            ))}
          </select>
          </label> <br />
          <label className='label'>
            Select Nature<br />
            <select className = "textip" type="text" value={nature} onChange={(e) => setnature(e.target.value)}><option value="">Select an option</option>
            {options[1]?.map((option) => (
              <option value={option}>{option}</option>
            ))}</select> 
          </label><br />
          <label className='label'>
            Select Category:<br />
            <select className = "textip" type="text" value={category} onChange={(e) => setcategory(e.target.value)}><option value="">Select an option</option>
            {options[2]?.map((option) => (
              <option value={option}>{option}</option>
            ))}</select> 
          </label><br />
          <label className='label'>
            Name:<br />
            <select className = "textip" type="text" value={name} onChange={(e) => setname(e.target.value)}><option value="">Select an option</option>
            {options[3]?.map((option) => (
              <option value={option}>{option}</option>
            ))}</select> 
          </label><br /> <br/>
          <button onClick={handleSearch}>Search</button>
          <div> <br/><br/>
                      </div>
        </div><br/>
        <Table>
      <Thead>
        <Tr>
          <Th style= {{width: "40%"}}>Scheme</Th>
          <Th style= {{width: "10%"}}>Nature</Th>
          <Th style= {{width: "10%"}}>Category</Th>
          <Th style= {{width: "10%"}}>NAV(rs)</Th>
          <Th style= {{width: "10%"}}>Min Invt</Th>
          <Th style= {{width: "5%"}}>1Yr</Th>
          <Th style= {{width: "5%"}}>3Yr</Th>
          <Th style= {{width: "5%"}}>5Yr</Th>
          <Th style= {{width: "5%"}}>Action</Th>
        </Tr>
      </Thead>
      <tbody>
    {results.map((result) => (
      <tr key={result.id}>
        <td>{result.name}</td>
        <td>{result.email}</td>
        <td>{result.name}</td>
        <td>{result.name}</td>
        <td>{result.name}</td>
        <td>{result.name}</td>
        <td>{result.name}</td>
        <td>{result.name}</td>
        <td><img src = {gif}/></td>

      </tr>
    ))}
  </tbody>    </Table>
 
      </div>
    );
  }
    
