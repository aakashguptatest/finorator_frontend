import React from 'react'
import {useLocation} from "react-router-dom"
import {useNavigate} from "react-router-dom"

import { Table, Thead, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import './Purchase-Invest.css';
export default function Page2() {
  const location = useLocation();
  console.log(location.state.results);
  var results = location.state.results;
  console.log(results);
  const nav = useNavigate();
    function handleclick(i){
        nav("/Page3", { state: { results: i } });
    }
    
  return (
    <div>      <Table>
    <Thead>
      <Tr>
        <Th style= {{width: "50%"}}>Scheme</Th>
        <Th style= {{width: "15%"}}>Min Invt</Th>
        {/* <Th style= {{width: "7%"}}>1Yr</Th>
        <Th style= {{width: "7%"}}>3Yr</Th>
        <Th style= {{width: "7%"}}>5Yr</Th> */}
        <Th style= {{width: "14%"}}>Select Scheme</Th>
      </Tr>
    </Thead>
    <tbody>
    {Array.isArray(results) ? (
  results.map((result) => (
    <tr key={result._id}>
      <Td>{result.scheme_name}</Td>
      <Td>{result.minimum_purchase_amount}</Td>
      {/* <Td>{result.name}</Td> */}
      {/* <Td>{result.name}</Td> */}
      {/* <Td>{result.name}</Td> */}
      <Td>
        <button onClick={handleclick(result)}>Go</button>
      </Td>
    </tr>
  ))
) : (
  <tr>
    <Td>{results.scheme_name}</Td>
    <Td>{results.minimum_purchase_amount}</Td>
    {/* <Td>{results.name}</Td> */}
    {/* <Td>{results.name}</Td> */}
    {/* <Td>{results.name}</Td> */}
    <Td>
      <button onClick={handleclick(results)}>Go</button>
    </Td>
  </tr>
)}

  </tbody>  
  </Table>
  </div>
    )
}
