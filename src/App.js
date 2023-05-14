import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./Comp/Homepage";
import Settings from "./Comp/settings/settings";
import Investments from "./Comp/investments/investments";
import PurchaseTransaction from './Comp/Purchase-Transaction';
import Page2 from './Comp/Purchase-Invest/Page2';
import Profile from "./Comp/profile/Profile";
import Portfolio from "./Comp/profile/Portfolio";
import Blogs from "./Comp/MF/blogs";
import Page3Invest from "./Comp/MF/Page3";
import Navbar from "./Comp/NavBar/Navbar";
import Footer from "./Comp/Footer/footer";




function App() {
  return (
    <div className="App">
      <Page2 />
          </div>
  );
}

export default App;