import React from 'react'
import "./settingsdemat.css"
import Sidebar from '../Sidebar/Sidebar'
const Changepassword = () => {
  return (

    <div>
      <Sidebar/>
<div className="box">
  <div className="demat">Login/Change Password</div>
</div>
<div>
  <div className="table">
    <div className="row">
      <div className="heading">Name</div>
      <div className="des">sdjk</div>
    </div>
    <br />
    <div className="row">
      <div className="heading">Birth</div>
      <div className="des">sdjk</div>
    </div>
    <br />
    <div className="row">
      <div className="heading">Acc Number</div>
      <div className="des">sdjk</div>
    </div>
    <br />
    <div className="row">
      <div className="heading">IFSC Code</div>
      <div className="des">sdjk</div>
    </div>
    <br />
    <div className="row">
      <div className="heading">Bank Address</div>
      <div className="des">sdjk</div>
    </div>
    <br />
    <div className="row">
      <div className="heading">Account Type</div>
      <div className="des">sdjk</div>
    </div>
    <br/><br/><br/><div style={{display: "flex", flexDirection: "row-reverse"}}>
  <button className='changebutton'>Change Password</button>
</div>
  </div>
</div>  
    </div>
  )
}

export default Changepassword