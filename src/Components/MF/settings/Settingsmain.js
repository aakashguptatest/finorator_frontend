import React, { useState } from 'react';
 import "./Settingsmain.css";
 import { Table, Thead, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import Sidebar from '../Sidebar/Sidebar';
 export default function Settingsmain() {
    const [activeSegment, setActiveSegment] = useState(' basicinfo');

    const handleSegmentClick = (segment) => {
      setActiveSegment(segment);
    };
  
   return (
    <div >
        <Sidebar/>
    <div className="navbar" style={{marginLeft: "50"}}>
      <Segment
        active={activeSegment === ' basicinfo'}
        onClick={() => handleSegmentClick(' basicinfo')}
      >
         Basic
      </Segment>
      <Segment
        active={activeSegment === ' addressinfo'}
        onClick={() => handleSegmentClick(' addressinfo')}
      >
        Address
      </Segment>
      <Segment
        active={activeSegment === ' bankdetails'}
        onClick={() => handleSegmentClick(' bankdetails')}
      >
        Bank
      </Segment>
      <Segment
        active={activeSegment === ' nomineeinfo'}
        onClick={() => handleSegmentClick(' nomineeinfo')}
      >
        Nominee
      </Segment>
    </div>

    <div>
      {activeSegment === ' basicinfo' && < Basic />}
      {activeSegment === ' addressinfo' && <Address />}
      {activeSegment === ' bankdetails' && <Bank />}
      {activeSegment === ' nomineeinfo' && <Nominee />}
    </div>
  </div>
);
};

const Segment = ({ active, onClick, children }) => {
return (
  <div
    className={`segment ${active ? 'active' : ''}`}
    onClick={onClick}
  >
    {children}
  </div>
);
};

const  Basic = () => {
return <div style={{display: "flex",     marginleft: "10%"
}}>
    basic
    <Table style={{width: "45%"}}>
   
      <Tr>
        < Td>Client Name</Td>
        < Td>Min Invt</Td>
      </Tr>
      <Tr>
        < Td>Date of Birth</Td>
        < Td>Min Invt</Td>
      </Tr>
      <Tr>
        < Td>Occupation</Td>
        < Td>Min Invt</Td>
      </Tr>
      <Tr>
        < Td>Email</Td>
        < Td>Min Invt</Td>
      </Tr>
      <Tr>
        < Td>Gender</Td>
        < Td>Min Invt</Td>
      </Tr>
      <Tr>
        < Td>Scheme</Td>
        < Td>Min Invt</Td>
      </Tr>
    
   </Table>
    <Table style={{width: "45%"}}>

      
    <Tr>
        < Td>Client Name</Td>
        < Td>Min Invt</Td>
      </Tr>
      <Tr>
        < Td>Date of Birth</Td>
        < Td>Min Invt</Td>
      </Tr>
      <Tr>
        < Td>Occupation</Td>
        < Td>Min Invt</Td>
      </Tr>
      <Tr>
        < Td>Email</Td>
        < Td>Min Invt</Td>
      </Tr>
      <Tr>
        < Td>Gender</Td>
        < Td>Min Invt</Td>
      </Tr>
      <Tr>
        < Td>Scheme</Td>
        < Td>Min Invt</Td>
      </Tr>
    
   </Table></div>;
};

const Address = () => {
return (<div style={{display: "flex"}}>
    address
<Table style={{width: "45%"}}>

  <Tr>
    < Td>Client Name</Td>
    < Td>Min Invt</Td>
  </Tr>
  <Tr>
    < Td>Date of Birth</Td>
    < Td>Min Invt</Td>
  </Tr>
  <Tr>
    < Td>Occupation</Td>
    < Td>Min Invt</Td>
  </Tr>
  <Tr>
    < Td>Email</Td>
    < Td>Min Invt</Td>
  </Tr>
  <Tr>
    < Td>Gender</Td>
    < Td>Min Invt</Td>
  </Tr>
  <Tr>
    < Td>Scheme</Td>
    < Td>Min Invt</Td>
  </Tr>

</Table>
<Table style={{width: "45%"}}>

  
<Tr>
    < Td>Client Name</Td>
    < Td>Min Invt</Td>
  </Tr>
  <Tr>
    < Td>Date of Birth</Td>
    < Td>Min Invt</Td>
  </Tr>
  <Tr>
    < Td>Occupation</Td>
    < Td>Min Invt</Td>
  </Tr>
  <Tr>
    < Td>Email</Td>
    < Td>Min Invt</Td>
  </Tr>
  <Tr>
    < Td>Gender</Td>
    < Td>Min Invt</Td>
  </Tr>
  <Tr>
    < Td>Scheme</Td>
    < Td>Min Invt</Td>
  </Tr>

</Table></div>)
};

const Bank = () => {
return(<div style={{display: "flex"}}>
    bank
<Table style={{width: "45%"}}>

  <Tr>
    < Td>Client Name</Td>
    < Td>Min Invt</Td>
  </Tr>
  <Tr>
    < Td>Date of Birth</Td>
    < Td>Min Invt</Td>
  </Tr>
  <Tr>
    < Td>Occupation</Td>
    < Td>Min Invt</Td>
  </Tr>
  <Tr>
    < Td>Email</Td>
    < Td>Min Invt</Td>
  </Tr>
  <Tr>
    < Td>Gender</Td>
    < Td>Min Invt</Td>
  </Tr>
  <Tr>
    < Td>Scheme</Td>
    < Td>Min Invt</Td>
  </Tr>

</Table>
<Table style={{width: "45%"}}>

  
<Tr>
    < Td>Client Name</Td>
    < Td>Min Invt</Td>
  </Tr>
  <Tr>
    < Td>Date of Birth</Td>
    < Td>Min Invt</Td>
  </Tr>
  <Tr>
    < Td>Occupation</Td>
    < Td>Min Invt</Td>
  </Tr>
  <Tr>
    < Td>Email</Td>
    < Td>Min Invt</Td>
  </Tr>
  <Tr>
    < Td>Gender</Td>
    < Td>Min Invt</Td>
  </Tr>
  <Tr>
    < Td>Scheme</Td>
    < Td>Min Invt</Td>
  </Tr>

</Table></div>)
};

const Nominee = () => {
return(<div style={{display: "flex"}}>
    nominee
<Table style={{width: "45%"}}>

  <Tr>
    < Td>Client Name</Td>
    < Td>Min Invt</Td>
  </Tr>
  <Tr>
    < Td>Date of Birth</Td>
    < Td>Min Invt</Td>
  </Tr>
  <Tr>
    < Td>Occupation</Td>
    < Td>Min Invt</Td>
  </Tr>
  <Tr>
    < Td>Email</Td>
    < Td>Min Invt</Td>
  </Tr>
  <Tr>
    < Td>Gender</Td>
    < Td>Min Invt</Td>
  </Tr>
  <Tr>
    < Td>Scheme</Td>
    < Td>Min Invt</Td>
  </Tr>

</Table>
<Table style={{width: "45%"}}>

  
<Tr>
    < Td>Client Name</Td>
    < Td>Min Invt</Td>
  </Tr>
  <Tr>
    < Td>Date of Birth</Td>
    < Td>Min Invt</Td>
  </Tr>
  <Tr>
    < Td>Occupation</Td>
    < Td>Min Invt</Td>
  </Tr>
  <Tr>
    < Td>Email</Td>
    < Td>Min Invt</Td>
  </Tr>
  <Tr>
    < Td>Gender</Td>
    < Td>Min Invt</Td>
  </Tr>
  <Tr>
    < Td>Scheme</Td>
    < Td>Min Invt</Td>
  </Tr>

</Table></div>);
};