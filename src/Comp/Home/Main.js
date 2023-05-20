import React from 'react'
import Homepage from './Homepage';
import BecomePartner from './BecomePartner';
import Aboutus from './Aboutus';
import Contactus from './Contactus';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

export default function Main() {
  return (
    <div>
        <Router>
        <Routes> 
        <Route path="/" element={<Homepage />}></Route>
          <Route path='/partner' element={<BecomePartner />}></Route>
          <Route path="/aboutus" element={<Aboutus />}></Route>
          <Route path="/contactus" element={<Contactus />}></Route>

      </Routes> 
      </Router>
    </div>
  )
}
