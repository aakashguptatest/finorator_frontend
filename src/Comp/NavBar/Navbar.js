// Navbar.js
import { useState } from "react";
import { Stack, Button, IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import "./Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="shadow-xl max-w-full top-0 sticky z-50 bg-white">
      <div className="flex p-1 items-center justify-between">
        <div className="md:ml-10 ml-2">
          <div className="flex">
            <div className="text-sm md:text-2xl font-bold">
              <a
                className="text-orange-500 hover:text-orange-600"
                style={{ textDecoration: "none" }}
                href="/"
              >
                FINO
              </a>
            </div>
            <div className="text-[#4D81B2] text-sm md:text-2xl font-bold">
              <a
                style={{ textDecoration: "none" }}
                href="/"
                className="text-[#4D81B2] hover:text-[#31688E]"
              >
                RATOR
              </a>
            </div>
          </div>
          <div className="hidden md:block mt-0 py-0 text-[0.75rem]">
            Enhancing Financial Decisions
          </div>
        </div>

        <div className="md:hidden">
          <IconButton
            onClick={toggleMenu}
            edge="end"
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
        </div>
        <div className="hidden md:block">
          <NavLinks isMenuOpen={isMenuOpen} />
        </div>
        <div className="px-4 md:px-2 md:mr-40 mr-2 rounded-lg py-2 bg-orange-400 hover:bg-orange-500 cursor-pointer">
          <div className="align-middle text-sm md:text-xl text-white transition-transform duration-300 transform-gpu hover:scale-110">
            Login/Register
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <NavLinks isMenuOpen={isMenuOpen} />
        </div>
      )}
    </div>
  );
};

const Heading = () => (
  <Link to="/" className="navbar-heading text-gray-800 font-semibold hover:text-gray-600">
    Homepage
  </Link>
);

const NavLinks = ({ isMenuOpen }) => (
  <Stack
    direction={{ xs: "column", sm: "row" }}
    spacing={{ xs: 2, sm: 0 }}
    display={{ xs: isMenuOpen ? "flex" : "none", sm: "flex" }}
    className={isMenuOpen ? "bg-white navbar-extended" : ""}
    sx={{
      position: { xs: "absolute", sm: "static" },
      top: { xs: "60px", sm: "auto" },
      left: { xs: 0, sm: "auto" },
      right: { xs: 0, sm: "auto" },
      bg: "white", // Set background color to white
      p: 2,
      boxShadow: { xs: "0px 2px 4px rgba(0, 0, 0, 0.1)", sm: "none" },
      borderRadius: { xs: "0 0 5px 5px", sm: "none" },
      zIndex: { xs: 9999, sm: "auto" },
    }}
  >
    <NavLink to="/partner" label="Become Partner" />
    <NavLink to="/aboutus" label="About Us" />
    <NavLink to="/contactus" label="Contact Us" />
    {isMenuOpen && <NavLink to="/downloads" label="Downloads" />}
    {isMenuOpen && <NavLink to="/watchlist" label="Watchlist" />}
  </Stack>
);

const AuthLinks = () => (
  <Stack direction="row" spacing={2} alignItems="center">
    <Button
      id="loginbutton"
      variant="contained"
      component={Link}
      to="/login"
      color="warning"
      className="bg-yellow-400 px-3 py-1 rounded-xl text-sm hover:bg-yellow-500 text-white font-semibold"
    >
      Login/ Register
    </Button>
  </Stack>
);

const NavLink = ({ to, label }) => (
  <Link
    to={to}
    className="navbar-link transition-transform duration-300 transform-gpu hover:scale-110 font-bold text-2xl text-gray-800 hover:text-gray-600"
  >
    <div className="text-xl px-4 font-bold">{label}</div>
  </Link>
);

export default Navbar;
