import { Stack } from "@mui/material";
import { Link } from "react-router-dom";

const Navbar = () => (
  <Stack
    direction="row"
    alignItems="center"
    p={2}
    sx={{
      position: "sticky",
      background: "gray",
      top: 0,
      zIndex: 10000,
      justifyContent: "space-around",
    }}
  >
    <NavLink to="/" label="Homepage" />
    <NavLink to="/partner" label="Become Partner" />
    <NavLink to="/aboutus" label="About Us" />
    <NavLink to="/contactus" label="Contact Us" />
    <NavLink to="/blogs" label="Blogs" />
    <NavLink to="/landing" label="Mutual Funds" />
    
  </Stack>
);

const NavLink = ({ to, label }) => (
  <Link
    to={to}
    style={{
      display: "flex",
      alignItems: "center",
      width: 100,
      padding: "0.5rem",
      color: "white",
      textDecoration: "none",
      transition: "background-color 0.3s ease",
      borderRadius: "5px",
      "&:hover": {
        backgroundColor: "rgba(255, 255, 255, 0.2)",
      },
    }}
  >
    {label}
  </Link>
);

export default Navbar;
