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
import "./SignUpPage.css";
import { useState } from "react";
import axios from "axios";

function SignUp() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleFirstnameChange = (e) => {
    setFirstName(e.target.value);
  };
  const handleLastnameChange = (e) => {
    setLastName(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const sendLoginRequest = () => {
    const url = "http://127.0.0.1:5000/users/signup";
    const data = {
      username: username,
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
    };

    axios
      .post(url, data)
      .then((response) => {
        console.log(response.data.message);
      })
      .catch((error) => {
        console.error(error.message);
      });
  };

  return (
    <div className="p-3 max-w-full min-w-fit">
      <MDBRow>
        <MDBCol className="hidden md:block" col="10" md="6">
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
                <div className="mr-6 hover:scale-[3] cursor-pointer scale-[2.5]">
                  <AiFillGoogleCircle />
                </div>
                <div className="mr-6 hover:scale-[3] cursor-pointer scale-[2.5]">
                  <AiFillLinkedin />
                </div>
                <div className="hover:scale-[3] cursor-pointer scale-[2.5]">
                  <AiFillTwitterCircle />
                </div>
              </div>
            </div>
          </div>

          <div className="divider d-flex align-items-center my-4">
            <p className="text-center fw-bold mx-3 mb-0">Or</p>
          </div>

          <MDBInput
            wrapperClass="mb-4"
            label="Username"
            id="formControlLg"
            type="username"
            size="lg"
            onChange={handleUsernameChange}
          />
          <MDBInput
            wrapperClass="mb-2"
            label="First Name"
            id="formControlLg"
            type="email"
            size="lg"
            onChange={handleFirstnameChange}
          />
          <MDBInput
            wrapperClass="mb-2"
            label="Second Name"
            id="formControlLg"
            type="email"
            size="lg"
            onChange={handleLastnameChange}
          />
          <MDBInput
            wrapperClass="mb-4"
            label="Email address"
            id="formControlLg"
            type="email"
            size="lg"
            onChange={handleEmailChange}
          />
          <MDBInput
            wrapperClass="mb-4"
            label="Password"
            id="formControlLg"
            type="password"
            size="lg"
            onChange={handlePasswordChange}
          />

          <div className="d-flex justify-content-between mb-4">
            <MDBCheckbox
              name="flexCheck"
              value=""
              id="flexCheckDefault"
              label="Remember me"
            />
            <a href="!#">Forgot password?</a>
          </div>

          <div className="text-center text-md-start mt-4 pt-2">
            <MDBBtn className="mb-0 px-5" size="lg" onClick={sendLoginRequest}>
              Login
            </MDBBtn>
            <p className="small fw-bold mt-2 pt-1 mb-2">
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

export default SignUp;
