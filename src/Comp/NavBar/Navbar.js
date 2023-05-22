import { Stack, Button } from "@mui/material";
import { Link } from "react-router-dom";

const Navbar = () => (
  <Stack
    direction="row"
    alignItems="center"
    p={1.8}
    sx={{
      position: "sticky",
      background: "gray",
      top: 0,
      zIndex: 10000,
      justifyContent: "space-between", // Modified to align items to the left and right
    }}
  >
    <NavLinks /> {/* Moved the navigation links to a separate component */}
    <AuthLinks /> {/* Added a component for login/register buttons */}
  </Stack>
);

const NavLinks = () => (
  <Stack direction="row" spacing={2}>
    <NavLink to="/" label="Homepage" />
    <NavLink to="/partner" label="Become Partner" />
    <NavLink to="/aboutus" label="About Us" />
    <NavLink to="/contactus" label="Contact Us" />
  </Stack>
);

const AuthLinks = () => (
  <Stack direction="row" spacing={2} alignItems="center">
    {/* Add your login and register buttons */}
    <Button
    id = "loginbutton"
      variant="contained"
      component={Link}
      to="/login"
      color="warning"
    >
      Login/ Register
    </Button>
  </Stack>
);

const NavLink = ({ to, label }) => (
  <Link
    to={to}
    style={{
      display: "flex",
      alignItems: "center",
      width:150,
      padding: "0.1rem",
      color: "white",
      textDecoration: "none",
      transition: "background-color 0.3s ease",
      borderRadius: "5px",
      "&:hover": {
        backgroundColor: "white",
      },
    }}
  >
    {label}
  </Link>
);

export default Navbar;
