import React from 'react';
import "./Purchase-Invest.css"
import { useState, useEffect } from 'react';
export default function Page1() {
    const [AMC, setAMC] = useState('');
    const [nature, setnature] = useState('');
    const [category, setcategory] = useState('');
    const [name, setname] = useState('');
    const [results, setResults] = useState([]);
    const [options, setOptions] = useState([]);
    const [api, setapi] = useState("https://jsonplaceholder.typicode.com/comments");
    useEffect(() => {
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
        function changeAMC(i){
            setAMC(i);
            let a = api ;
               setapi(a+ `?postId=${i}`);
               
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
    setname(i);
          let a = api ;
          setapi(a +`&body=${i}`);
          console.log(api);
  
        }
        
      let Search=() => {
        console.log("result wali " + api)
        fetch(api)
          .then(response => response.json())
          .then(json => setResults(json));
        
      }
  return (
    <div>        <div>
    <label className='label'>
      AMC:<br />
      <select className = "textip" value={AMC} onChange={(e) => changeAMC(e.target.value)}> <option value="">Select an option</option>
      {options[0]?.map((option,index) => (
        <option key={index} value={option}>{option}</option>
      ))}
    </select>
    </label> <br />
    <label className='label'>
      Select Nature<br /> <br /> 
      <select className = "textip" type="text" value={nature} onChange={(e) => changenature(e.target.value)}><option value="">Select an option</option>
      {options[1]?.map((option,index) => (
        <option key={index} value={option}>{option}</option>
      ))}</select> 
    </label><br /><br /><br />
    <label className='label'>
      Select Category:<br /><br />
      <select className = "textip" type="text" value={category} onChange={(e) => changecategory(e.target.value)}><option value="">Select an option</option>
      {options[2]?.map((option,index) => (
        <option key={index} value={option}>{option}</option>
      ))}</select> 
    </label><br /><br /><br />
    <label className='label'>
      Name:<br /><br />
      <select className = "textip" type="text" value={name} onChange={(e) => changename(e.target.value)}><option value="">Select an option</option>
      {options[3]?.map((option,index) => (
        <option key={index} value={option}>{option}</option>
      ))}</select> 
    </label><br /> <br/><br /><br />
<button onClick={Search}>Search</button>
    <div> <br/><br/>
                </div>
  </div>
           
    </div>
  )
}
