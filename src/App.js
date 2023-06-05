import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./Comp/NavBar/Navbar";
import MfNavbar from "./Comp/MF/nabarmf/MfNavbar";
import Homepage from "./Comp/Home/Homepage";
import Aboutus from "./Comp/Home/Aboutus";
import Contactus from "./Comp/Home/Contactus";
import BecomePartner from "./Comp/Home/BecomePartner";
import Blogs from "./Comp/MF/blogs";
import Downloads from "./Comp/MF/Downloads";
import MFWatchlist from "./Comp/MF/MFWatchlist";
import Profile from "./Comp/profile/Profile";
import Portfolio from "./Comp/profile/Portfolio";
import Purchase from "./Comp/MF/Invest/Purchase-Invest";
import Landingpage from "./Comp/MF/Landingpage/landingpage";
import Investments from "./Comp/investments/investments";
import Page1 from "./Comp/MF/Invest/Page1";
import Page2 from "./Comp/MF/Invest/Page2";
import Page3 from "./Comp/MF/Invest/Page3";
import Page4 from "./Comp/MF/Invest/Page4";
import Login from "./Comp/Login/Loginpage";
import SignUp from "./Comp/SignUp/SignUppage";
import HelpAndSupportPage from "./Comp/helpAndSupport/HelpandSupport";
import Settingsdemat from "./Comp/settings/settingsdemat";
import Settingsmain from "./Comp/settings/Settingsmain";
import InvestmentPage from "./Comp/investments/InvestmentPage";
import Footer from "./Comp/Footer/footer";

function NavbarWrapper() {
  const location = useLocation();
  const isMfRoute = location.pathname.startsWith("/mf");

  return isMfRoute ? <MfNavbar /> : <Navbar />;
}

function App() {
  // Session Storage
  sessionStorage.setItem("username", "");

  return (
    <BrowserRouter>
      <NavbarWrapper />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/help" element={<HelpAndSupportPage />} />
        <Route path="/partner" element={<BecomePartner />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/contactus" element={<Contactus />} />
        <Route path="/mf/blogs" element={<Blogs />} />
        <Route path="/mf/downloads" element={<Downloads />} />
        <Route path="/mf/watchlist" element={<MFWatchlist />} />
        <Route path="/mf/profile" element={<Profile />} />
        {/* <Route path="/portfolio" element={<Portfolio />} /> */}
        <Route path="/mf/portfolio" element={<Portfolio />} />
        <Route path="/mf/invest" element={<Purchase />} />
        <Route path="/landing" element={<Landingpage />} />
        <Route path="/mf/invest/Page1" element={<Page1 />} />
        <Route path="/mf/invest/Page2" element={<Page2 />} />
        <Route path="/mf/invest/Page3" element={<Page3 />} />
        <Route path="/mf/invest/Page4" element={<Page4 />} />
        <Route path="/login" element={<Login />} />
        <Route path="/mf/investments" element={<Investments />} />
        <Route path="/mf/investments/:buttonText" element={<InvestmentPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/mf/settings/demat" element={<Settingsdemat />} />
        <Route path="/mf/settings/basic" element={<Settingsmain />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
