import React, { useState } from 'react';
 import "./Settingsmain.css";
 import { Table, Thead, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import Sidebar from '../MF/Sidebar/Sidebar';
 export default function Settingsmain() {
    const [activeSegment, setActiveSegment] = useState(' basicinfo');

    const handleSegmentClick = (segment) => {
      setActiveSegment(segment);
    };
  
   return (
    <div >
        <Sidebar/>
    <div className="navbar" >
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
return <div style={{display: "flex"}}>
    basic
    <Table style={{width: "45%", marginLeft: "12%"}}>
   
      <Tr>
        < Td style = {{padding: 20, fontSize: "large"}}>Client Name</Td>
        < Td style = {{padding: 20, fontSize: "large"}}>Min Invt</Td>
      </Tr>
      <Tr>
        < Td style = {{padding: 20, fontSize: "large"}}>Date of Birth</Td>
        < Td style = {{padding: 20, fontSize: "large"}}>Min Invt</Td>
      </Tr>
      <Tr>
        < Td style = {{padding: 20, fontSize: "large"}}>Occupation</Td>
        < Td style = {{padding: 20, fontSize: "large"}}>Min Invt</Td>
      </Tr>
      <Tr>
        < Td style = {{padding: 20, fontSize: "large"}}>Email</Td>
        < Td style = {{padding: 20, fontSize: "large"}}>Min Invt</Td>
      </Tr>
      <Tr>
        < Td style = {{padding: 20, fontSize: "large"}}>Gender</Td>
        < Td style = {{padding: 20, fontSize: "large"}}>Min Invt</Td>
      </Tr>
      <Tr>
        < Td style = {{padding: 20, fontSize: "large"}}>Scheme</Td>
        < Td style = {{padding: 20, fontSize: "large"}}>Min Invt</Td>
      </Tr>
    
   </Table>
    <Table style={{width: "45%",marginLeft: "12%"}}>

      
    <Tr>
        < Td style = {{padding: 20, fontSize: "large"}}>Client Name</Td>
        < Td style = {{padding: 20, fontSize: "large"}}>Min Invt</Td>
      </Tr>
      <Tr>
        < Td style = {{padding: 20, fontSize: "large"}}>Date of Birth</Td>
        < Td style = {{padding: 20, fontSize: "large"}}>Min Invt</Td>
      </Tr>
      <Tr>
        < Td style = {{padding: 20, fontSize: "large"}}>Occupation</Td>
        < Td style = {{padding: 20, fontSize: "large"}}>Min Invt</Td>
      </Tr>
      <Tr>
        < Td style = {{padding: 20, fontSize: "large"}}>Email</Td>
        < Td style = {{padding: 20, fontSize: "large"}}>Min Invt</Td>
      </Tr>
      <Tr>
        < Td style = {{padding: 20, fontSize: "large"}}>Gender</Td>
        < Td style = {{padding: 20, fontSize: "large"}}>Min Invt</Td>
      </Tr>
      <Tr>
        < Td style = {{padding: 20, fontSize: "large"}}>Scheme</Td>
        < Td style = {{padding: 20, fontSize: "large"}}>Min Invt</Td>
      </Tr>
    
   </Table></div>;
};

const Address = () => {
return (<div style={{display: "flex"}}>
    address
<Table style={{width: "45%",marginLeft: "12%"}}>

  <Tr>
    < Td style = {{padding: 20, fontSize: "large"}}>Client Name</Td>
    < Td style = {{padding: 20, fontSize: "large"}}>Min Invt</Td>
  </Tr>
  <Tr>
    < Td style = {{padding: 20, fontSize: "large"}}>Date of Birth</Td>
    < Td style = {{padding: 20, fontSize: "large"}}>Min Invt</Td>
  </Tr>
  <Tr>
    < Td style = {{padding: 20, fontSize: "large"}}>Occupation</Td>
    < Td style = {{padding: 20, fontSize: "large"}}>Min Invt</Td>
  </Tr>
  <Tr>
    < Td style = {{padding: 20, fontSize: "large"}}>Email</Td>
    < Td style = {{padding: 20, fontSize: "large"}}>Min Invt</Td>
  </Tr>
  <Tr>
    < Td style = {{padding: 20, fontSize: "large"}}>Gender</Td>
    < Td style = {{padding: 20, fontSize: "large"}}>Min Invt</Td>
  </Tr>
  <Tr>
    < Td style = {{padding: 20, fontSize: "large"}}>Scheme</Td>
    < Td style = {{padding: 20, fontSize: "large"}}>Min Invt</Td>
  </Tr>

</Table>
<Table style={{width: "45%",marginLeft: "12%"}}>

  
<Tr>
    < Td style = {{padding: 20, fontSize: "large"}}>Client Name</Td>
    < Td style = {{padding: 20, fontSize: "large"}}>Min Invt</Td>
  </Tr>
  <Tr>
    < Td style = {{padding: 20, fontSize: "large"}}>Date of Birth</Td>
    < Td style = {{padding: 20, fontSize: "large"}}>Min Invt</Td>
  </Tr>
  <Tr>
    < Td style = {{padding: 20, fontSize: "large"}}>Occupation</Td>
    < Td style = {{padding: 20, fontSize: "large"}}>Min Invt</Td>
  </Tr>
  <Tr>
    < Td style = {{padding: 20, fontSize: "large"}}>Email</Td>
    < Td style = {{padding: 20, fontSize: "large"}}>Min Invt</Td>
  </Tr>
  <Tr>
    < Td style = {{padding: 20, fontSize: "large"}}>Gender</Td>
    < Td style = {{padding: 20, fontSize: "large"}}>Min Invt</Td>
  </Tr>
  <Tr>
    < Td style = {{padding: 20, fontSize: "large"}}>Scheme</Td>
    < Td style = {{padding: 20, fontSize: "large"}}>Min Invt</Td>
  </Tr>

</Table></div>)
};

const Bank = () => {
return(<div style={{display: "flex"}}>
    bank
<Table style={{width: "45%",marginLeft: "12%"}}>

  <Tr>
    < Td style = {{padding: 20, fontSize: "large"}}>Client Name</Td>
    < Td style = {{padding: 20, fontSize: "large"}}>Min Invt</Td>
  </Tr>
  <Tr>
    < Td style = {{padding: 20, fontSize: "large"}}>Date of Birth</Td>
    < Td style = {{padding: 20, fontSize: "large"}}>Min Invt</Td>
  </Tr>
  <Tr>
    < Td style = {{padding: 20, fontSize: "large"}}>Occupation</Td>
    < Td style = {{padding: 20, fontSize: "large"}}>Min Invt</Td>
  </Tr>
  <Tr>
    < Td style = {{padding: 20, fontSize: "large"}}>Email</Td>
    < Td style = {{padding: 20, fontSize: "large"}}>Min Invt</Td>
  </Tr>
  <Tr>
    < Td style = {{padding: 20, fontSize: "large"}}>Gender</Td>
    < Td style = {{padding: 20, fontSize: "large"}}>Min Invt</Td>
  </Tr>
  <Tr>
    < Td style = {{padding: 20, fontSize: "large"}}>Scheme</Td>
    < Td style = {{padding: 20, fontSize: "large"}}>Min Invt</Td>
  </Tr>

</Table>
<Table style={{width: "45%",marginLeft: "12%"}}>

  
<Tr>
    < Td style = {{padding: 20, fontSize: "large"}}>Client Name</Td>
    < Td style = {{padding: 20, fontSize: "large"}}>Min Invt</Td>
  </Tr>
  <Tr>
    < Td style = {{padding: 20, fontSize: "large"}}>Date of Birth</Td>
    < Td style = {{padding: 20, fontSize: "large"}}>Min Invt</Td>
  </Tr>
  <Tr>
    < Td style = {{padding: 20, fontSize: "large"}}>Occupation</Td>
    < Td style = {{padding: 20, fontSize: "large"}}>Min Invt</Td>
  </Tr>
  <Tr>
    < Td style = {{padding: 20, fontSize: "large"}}>Email</Td>
    < Td style = {{padding: 20, fontSize: "large"}}>Min Invt</Td>
  </Tr>
  <Tr>
    < Td style = {{padding: 20, fontSize: "large"}}>Gender</Td>
    < Td style = {{padding: 20, fontSize: "large"}}>Min Invt</Td>
  </Tr>
  <Tr>
    < Td style = {{padding: 20, fontSize: "large"}}>Scheme</Td>
    < Td style = {{padding: 20, fontSize: "large"}}>Min Invt</Td>
  </Tr>

</Table></div>)
};

const Nominee = () => {
return(<div style={{display: "flex"}}>
    nominee
<Table style={{width: "45%",marginLeft: "12%"}}>

  <Tr>
    < Td style = {{padding: 20, fontSize: "large"}}>Client Name</Td>
    < Td style = {{padding: 20, fontSize: "large"}}>Min Invt</Td>
  </Tr>
  <Tr>
    < Td style = {{padding: 20, fontSize: "large"}}>Date of Birth</Td>
    < Td style = {{padding: 20, fontSize: "large"}}>Min Invt</Td>
  </Tr>
  <Tr>
    < Td style = {{padding: 20, fontSize: "large"}}>Occupation</Td>
    < Td style = {{padding: 20, fontSize: "large"}}>Min Invt</Td>
  </Tr>
  <Tr>
    < Td style = {{padding: 20, fontSize: "large"}}>Email</Td>
    < Td style = {{padding: 20, fontSize: "large"}}>Min Invt</Td>
  </Tr>
  <Tr>
    < Td style = {{padding: 20, fontSize: "large"}}>Gender</Td>
    < Td style = {{padding: 20, fontSize: "large"}}>Min Invt</Td>
  </Tr>
  <Tr>
    < Td style = {{padding: 20, fontSize: "large"}}>Scheme</Td>
    < Td style = {{padding: 20, fontSize: "large"}}>Min Invt</Td>
  </Tr>

</Table>
<Table style={{width: "45%",marginLeft: "12%"}}>

  
<Tr>
    < Td style = {{padding: 20, fontSize: "large"}}>Client Name</Td>
    < Td style = {{padding: 20, fontSize: "large"}}>Min Invt</Td>
  </Tr>
  <Tr>
    < Td style = {{padding: 20, fontSize: "large"}}>Date of Birth</Td>
    < Td style = {{padding: 20, fontSize: "large"}}>Min Invt</Td>
  </Tr>
  <Tr>
    < Td style = {{padding: 20, fontSize: "large"}}>Occupation</Td>
    < Td style = {{padding: 20, fontSize: "large"}}>Min Invt</Td>
  </Tr>
  <Tr>
    < Td style = {{padding: 20, fontSize: "large"}}>Email</Td>
    < Td style = {{padding: 20, fontSize: "large"}}>Min Invt</Td>
  </Tr>
  <Tr>
    < Td style = {{padding: 20, fontSize: "large"}}>Gender</Td>
    < Td style = {{padding: 20, fontSize: "large"}}>Min Invt</Td>
  </Tr>
  <Tr>
    < Td style = {{padding: 20, fontSize: "large"}}>Scheme</Td>
    < Td style = {{padding: 20, fontSize: "large"}}>Min Invt</Td>
  </Tr>

</Table></div>);
};