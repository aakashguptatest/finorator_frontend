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
    function handleclick(){
        nav("/Page3");

    }
    
  return (
    <div>      <Table>
    <Thead>
      <Tr>
        <Th style= {{width: "50%"}}>Scheme</Th>
        <Th style= {{width: "15%"}}>Min Invt</Th>
        <Th style= {{width: "7%"}}>1Yr</Th>
        <Th style= {{width: "7%"}}>3Yr</Th>
        <Th style= {{width: "7%"}}>5Yr</Th>
        <Th style= {{width: "14%"}}> </Th>
      </Tr>
    </Thead>
    <tbody>
  {results.map((result) => (
    <tr key={result.id}>
      <Td>{result.name}</Td>
      <Td>{result.email}</Td>
      <Td>{result.name}</Td>
      <Td>{result.name}</Td>
      <Td>{result.name}</Td>
      <Td><button onClick={handleclick}>Go</button></Td>
    </tr>
  ))}
</tbody>  
</Table>
 </div>
  )
}
