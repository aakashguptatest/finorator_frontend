import React from 'react'
import "./settingsdemat.css"
import SidebarMF from '../sidebar mutualfunds/Sidebar'
const Settingsdemat = () => {
  return (

    <div>
      <SidebarMF/>
<div className="box" style={{width: "100%"}}>
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
</div>
    </div>
  )
}

export default Settingsdemat