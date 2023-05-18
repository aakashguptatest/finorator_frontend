import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./Comp/Homepage";
import Settings from "./Comp/settings/settings";
import Investments from "./Comp/investments/investments";
import Profile from "./Comp/profile/Profile";
import Portfolio from "./Comp/profile/Portfolio";
import Blogs from "./Comp/MF/blogs";
import Page3Invest from "./Comp/MF/Page3";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/investments" element={<Investments />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/mutualfunds/profile/portfolio" element={<Portfolio/>} />
        <Route path="/mutualfunds/blogs" element={<Blogs/>} />
        <Route path="/mutualfunds/page3" element={<Page3Invest/>} />
      </Routes>
    </Router>
  );
}

export default App;