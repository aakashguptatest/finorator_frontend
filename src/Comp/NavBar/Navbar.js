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
    <Stack
      direction="row"
      alignItems="center"
      p={1.8}
      sx={{
        position: "sticky",
        background: "white", // Set background color to white
        top: 0,
        zIndex: 10000,
        justifyContent: "space-between",
      }}
    >
      <Heading />
      <IconButton
        color="inherit"
        edge="end"
        onClick={toggleMenu}
        sx={{ display: { sm: "none" } }}
      >
        <MenuIcon />
      </IconButton>
      <NavLinks isMenuOpen={isMenuOpen} />
      <AuthLinks />
    </Stack>
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
    className={isMenuOpen ? "navbar-extended" : ""}
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
      className="bg-yellow-400 hover:bg-yellow-500 text-white font-semibold py-2 px-4 rounded"
    >
      Login/ Register
    </Button>
  </Stack>
);

const NavLink = ({ to, label }) => (
  <Link to={to} className="navbar-link text-gray-800 hover:text-gray-600">
    {label}
  </Link>
);

export default Navbar;
