import React from "react";
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBBtn,
  MDBIcon,
  MDBInput,
  MDBCheckbox,
} from "mdb-react-ui-kit";
import {
  AiFillGoogleCircle,
  AiFillTwitterCircle,
  AiFillLinkedin,
} from "react-icons/ai";
import "./Loginpage.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const nav = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const sendLoginRequest = () => {
    const url = "http://127.0.0.1:5000/users/login";
    const data = {
      username: username,
      password: password,
    };

    axios
      .post(url, data)
      .then((response) => {
        console.log(response.data.message);
        sessionStorage.setItem("username", data.username);
        nav("/landing");
      })
      .catch((error) => {
        console.error(error.message);
      });
  };

  return (
    <div className="max-w-full min-w-fit p-4">
      <MDBRow>
        <MDBCol className="hidden md:block">
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
            class="img-fluid"
            alt="Sample image"
          />
        </MDBCol>

        <MDBCol col="4" md="6">
          <div className="d-flex flex-row align-items-center justify-content-center">
            <div className="d-flex flex-row align-items-center justify-content-center">
              <p className="lead fw-normal mb-0 me-3">Sign in with</p>
              <div className="flex mx-3 justify-between">
                <div className="mr-10 scale-[3.5] hover:scale-[4] cursor-pointer ">
                  <AiFillGoogleCircle />
                </div>
                <div className="mr-10 scale-[3.5] hover:scale-[4] cursor-pointer ">
                  <AiFillLinkedin />
                </div>
                <div className="scale-[3.5] hover:scale-[4] cursor-pointer ">
                  <AiFillTwitterCircle />
                </div>
              </div>
            </div>
          </div>
          <div className="divider d-flex align-items-center my-4">
            <p className="text-center fw-bold mx-3 mb-0">Or</p>
          </div>
          <label htmlFor="formControlLg" className="mr-3">Username</label> 
          <MDBInput
            wrapperClass="mb-4"
            id="formControlLg"
            type="username"
            
            onChange={handleUsernameChange}
          />
          <label htmlFor="formControlLg" className="mr-3">Password</label> 
          <MDBInput
            wrapperClass="mb-4"
            id="formControlLg"
            type="password"
            
            onChange={handlePasswordChange}
          />

<div className="inline-flex items-center align-middle mb-5"> 
  <label htmlFor="flexCheckDefault" className="mr-3">Remember me</label> 
  <MDBCheckbox
    className="h-6 w-6 ml-4"
    name="flexCheck"
    value=""
    id="flexCheckDefault"
  />
</div>

          <div className="d-flex">
            <div
              onClick={sendLoginRequest}
              className="rounded-lg py-2 mx-auto w-28 transition-transform duration-300 transform-gpu hover:scale-110 shadow-xl bg-blue-400 hover:bg-blue-500 cursor-pointer"
            >
              <div className="text-center text-xl text-white ">Login</div>
            </div>
            <p className="text-right text-[1rem] fw-bold mt-2 pt-1 mb-2">
              Don't have an account?{" "}
              <a href="../signup" className="link-danger">
                Register
              </a>
            </p>
          </div>
        </MDBCol>
      </MDBRow>
    </div>
  );
}

export default Login;
