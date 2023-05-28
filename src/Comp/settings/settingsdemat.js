import React from 'react'
import "./settingsdemat.css"
import Sidebar from '../MF/Sidebar/Sidebar'
const Settingsdemat = () => {
  return (

    <div>
      <Sidebar/>
<div className="box">
  <div className="demat">DEMAT/ACCOUNT CLOSURE</div>
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
    <br />
  </div>
  <br />
  <button className="button">
    <p className="closeacc">Close Account</p>
  </button>
</div>
    </div>
  )
}

export default Settingsdemat