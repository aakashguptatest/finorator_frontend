import logo from './logo.svg';
import Homepage from './Comp/Homepage';
import Aboutus from "./Comp/Aboutus";
import SliderAffiliations from './Comp/Affiliations';
import BecomePartner from './Comp/BecomePartner';
import Contactus from './Comp/Contactus';
import './App.css';
import Downloads from './Comp/Downloads';
import MFWatchlist from './Comp/MFWatchlist';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes> 
        <Route path="/" element={<Homepage />}></Route>
          <Route path='/partner' element={<BecomePartner />}></Route>
      </Routes> 
      </Router>
 </div>
  );
}

export default App;

