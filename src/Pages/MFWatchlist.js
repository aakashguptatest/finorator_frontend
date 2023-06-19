import { useState, useEffect } from 'react';
import { Table, Thead, Tr, Th, Td, Tbody } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import '../assets/css/MFWatchlist.css';
import gif from "../assets/images/icons8-shopping-cart.gif"
import Landingpage from '../Components/MF/Landingpage/landingpage';
import Sidebar from '../Components/MF/Sidebar/Sidebar';
export default function MFWatchlist() {
    const [AMC, setAMC] = useState('');
    const [nature, setnature] = useState('');
    const [category, setcategory] = useState('');
    const [name, setname] = useState('');
    const [results, setResults] = useState([]);
    const [options, setOptions] = useState([]);
    const [api, setapi] = useState("https://jsonplaceholder.typicode.com/comments?");
    const [showTable, setShowTable] = useState(false);
       
    useEffect(() => {
      console.log(api);
      fetch(api)
        .then((response) => response.json())
        .then((data) => {
          const input1Options = [...new Set(data.map((item) => item.postId))];
          const input2Options = [...new Set(data.map((item) => item.name))];
          const input3Options = [...new Set(data.map((item) => item.email))];
          const input4Options = [...new Set(data.map((item) => item.body))];
          setOptions([input1Options, input2Options, input3Options, input4Options]);
        })
        .catch((error) => console.log(error));
    }, [api]);
    function init(){
    }
      function changeAMC(i){
        setapi("https://jsonplaceholder.typicode.com/comments?");
          setAMC(i);
          let a = api ;
             setapi(a+ `postId=${i}`);
             
      }

        
      
      function changenature(i) {
         
        setnature(i);
        let a = api ;
    
        setapi(a + `&name=${i}`);
        
      }
      function changecategory(i){
         
        setcategory(i);
        let a = api ;
        setapi(a + `&email=${i}`);

    }


function changename(i) {
  console.log(api + " jo name me aai");
  setname(i);
        let a = api ;
        setapi(a +`&body=${i}`);
        console.log(api + " jo name se gai");

      }
      
    let Search=() => {
      console.log("result wali " + api)

      fetch(api)
        .then(response => response.json())
        .then(json => setResults(json, console.log(json)));
        setShowTable(true);
        
      
    }
    function Reset(){
      setapi("https://jsonplaceholder.typicode.com/comments?");
    }
        return (
      <div style={{ border: '1px solid black', height : "100%", width: "100%" }}>
        <Sidebar/>
        <div>
        <div className="text-4xl font-bold text-[#EE812D] p-6 bg-opacity-20 bg-[#ED8130]">

          WATCHLIST
        </div>
    <div className='line'>

          <label className='label'>
            <select className = "selectoptions" value={AMC} onClick = {init} onChange={(e) => changeAMC(e.target.value)}> <option value="">Select AMC</option>
            {options[0]?.map((option,index) => (
              <option key={index} value={option}>{option}</option>
            ))}
          </select>
          </label> <br />
          <label className='label'>
            <select className = "selectoptions" type="text" value={nature} onChange={(e) => changenature(e.target.value)}><option value="">Select Nature</option>
            {options[1]?.map((option,index) => (
              <option key={index} value={option}>{option}</option>
            ))}</select> 
          </label>
          </div><br />    <div className='line'>

          <label className='label'>
            <select className = "selectoptions" type="text" value={category} onChange={(e) => changecategory(e.target.value)}><option value="">Select Category</option>
            {options[2]?.map((option,index) => (
              <option key={index} value={option}>{option}</option>
            ))}</select> 
          </label><br />
          <label className='label'>
            <select className = "selectoptions" type="text" value={name} onChange={(e) => changename(e.target.value)}><option value="">Select Name</option>
            {options[3]?.map((option,index) => (
              <option key={index} value={option}>{option}</option>
            ))}</select> 
          </label></div><br /> <br/>
          <div className=" p-2 bg-opacity-20 bg-[#ED8130] text-right">

          <button onClick={Search} className='watchlist'>Search</button>
          <button onClick={Reset} className='watchlist'> Reset</button>
          
          </div>

          <div> <br/><br/>
                      </div>
        </div><br/>
        <div>
        {showTable && (   <Table >
      <Thead>
        <Tr  style={{ border: '2px solid black' }}>
          <Th style= {{width: "fit-content"}}>Scheme</Th>
          <Th style= {{width: "fit-content"}}>Nature</Th>
          <Th style= {{width: "fit-content"}}>Category</Th>
          <Th style= {{width: "fit-content"}}>NAV(rs)</Th>
          <Th style= {{width: "fit-content"}}>Min Invt</Th>
          <Th style= {{width: "fit-content"}}>1Yr</Th>
          <Th style= {{width: "fit-content"}}>3Yr</Th>
          <Th style= {{width: "fit-content"}}>5Yr</Th>
          <Th style= {{width: "fit-content"}}>Action</Th>
        </Tr>
      </Thead>
      <Tbody>
    {results.map((result) => (
      <Tr key={result.id}  style={{ border: '2px solid black' }}>
        <Td>{result.name}</Td>
        <Td>{result.email}</Td>
        <Td>{result.name}</Td>
        <Td>{result.name}</Td>
        <Td>{result.name}</Td>
        <Td>{result.name}</Td>
        <Td>{result.name}</Td>
        <Td>{result.name}</Td>
        <Td><img src = {gif}/></Td>
      </Tr>
    ))}
  </Tbody>  
  </Table>)}
  </div>
      </div>
    );
  }
    
