import React from "react";
import Page1 from "./Comp/MF/Invest/Page1";
import Page2 from "./Comp/MF/Invest/Page2";
import Page3 from "./Comp/MF/Invest/Page3";
import Page4 from "./Comp/MF/Invest/Page4";
import Sidebar from "./Comp/Sidebar/Sidebar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./Comp/Home/Homepage";
import Aboutus from "./Comp/Home/Aboutus";
import Contactus from "./Comp/Home/Contactus";
import BecomePartner from "./Comp/Home/BecomePartner";
import Navbar from "./Comp/NavBar/Navbar";
import Blogs from "./Comp/MF/blogs";
import Downloads from "./Comp/MF/Downloads";
import MFWatchlist from "./Comp/MF/MFWatchlist";
import Profile from "./Comp/profile/Profile";
import Portfolio from "./Comp/profile/Portfolio";
import Purchase from "./Comp/MF/Invest/Purchase-Invest";
import Landingpage from "./Comp/MF/Landingpage/landingpage";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Sidebar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/partner" element={<BecomePartner />} />
        <Route path="/aboutus" element={<Aboutus />}></Route>
        <Route path="/contactus" element={<Contactus />}></Route>
        <Route path="/blogs" element={<Blogs />}></Route>
        <Route path="/downloads" element={<Downloads />}></Route>
        <Route path="/watchlist" element={<MFWatchlist />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/portfolio" element={<Portfolio />}></Route>
        <Route path="/invest" element={<Purchase />}></Route>
        <Route path="/landing" element={<Landingpage />}></Route>
        <Route exact path="/Page1" element={<Page1 />} />
        <Route exact path="/Page2" element={<Page2 />} />
        <Route exact path="/Page3" element={<Page3 />} />
        <Route exact path="/Page4" element={<Page4 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
