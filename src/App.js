import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./Pages/Navbar";
import MfNavbar from "./Components/MF/nabarmf/MfNavbar";
import Homepage from "./Components/Home/Homepage";
import Aboutus from "./Components/Home/Aboutus";
import Contactus from "./Components/Home/Contactus";
import BecomePartner from "./Components/Home/BecomePartner";
import Blogs from "./Pages/blogs";
import Downloads from "./Pages/Downloads";
import MFWatchlist from "./Pages/MFWatchlist";
import Profile from "./Pages/Profile";
import Portfolio from "./Pages/Portfolio";
import Purchase from "./Components/MF/Invest/Purchase-Invest";
import Landingpage from "./Components/MF/Landingpage/landingpage";
import Investments from "./Components/investments/investments";
import Page1 from "./Components/MF/Invest/Page1";
import Page2 from "./Components/MF/Invest/Page2";
import Page3 from "./Components/MF/Invest/Page3";
import Page4 from "./Components/MF/Invest/Page4";
import Login from "./Components/Login/Loginpage";
import SignUp from "./Pages/SignUppage";
import HelpAndSupportPage from "./Components/helpAndSupport/HelpandSupport";
import Settingsdemat from "./Components/MF/settings/settingsdemat"
import Settingsmain from "./Components/MF/settings/Settingsmain";
import InvestmentPage from "./Components/investments/InvestmentPage";
import Footer from "./Components/Footer/footer";
import Changepassword from "./Components/MF/settings/changepassword";
import BankMandate from "./Components/MF/settings/bankmandate";

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
        {/* <Route path="/slider" element={<SliderSegment />} /> */}
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
        <Route path="/mf/settings/password" element={<Changepassword />} />
        <Route path="/mf/settings/bankmandate" element={<BankMandate />} />
              </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
