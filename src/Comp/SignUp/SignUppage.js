import React from "react";
import {FcGoogle} from 'react-icons/fc';
import {FaTwitter} from 'react-icons/fa'
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
    <div className="min-h-screen mt-8 flex flex-wrap">
      <div className="w-1/2 md:block hidden mx-auto mt-12 my-4">
        <img
          src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/authentication/illustration.svg"
          alt=""
        />
      </div>
      <div className="md:w-1/2 w-full">
        <div className="md:mx-16 mx-2 md:mt-8 mt-4">
          <div className="bg-white pb-8 md:mx-16 mx-2 rounded-xl">
            <div className="pt-3 mb-0 pb-0 px-4"><span className="text-2xl text-orange-500 font-bold">FINO</span><span className="text-2xl text-blue-600 font-bold">RATOR</span></div>
            <div className="px-4 mt-0 pt-0  font-light">
              Make your investments in seconds. Already have an account?
              <a className="font-medium ml-1" href="/login">
                 Sign in.
              </a>
            </div>
            <div>
            <div class="block mx-4 mt-2 mb-2 text-sm font-medium text-gray-900">
                Your Username
              </div>
              <div className="px-4">
                <input
                  type="text"
                  value={username}
                  name="username"
                  id="username"
                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  placeholder="MatserInvest"
                  onChange={handleUsernameChange}
                  required=""
                />
              </div>

              <div className="flex mx-4 flex-wrap">
                <div className="w-1/2">
                  <div class="block mt-2 mb-2 text-sm font-medium text-gray-900">
                    First Name
                  </div>
                  <div className="mr-1.5">
                    <input
                      type="text"
                      value={firstName}
                      name="email"
                      id="email"
                      class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-1/2 p-2.5"
                      placeholder="John"
                      onChange={handleUsernameChange}
                      required=""
                    />
                  </div>
                </div>
                <div className="w-1/2">
                  <div class="block mt-2 mb-2 text-sm font-medium text-gray-900">
                    Last Name
                  </div>
                  <div className="ml-1.5">
                    <input
                      type="text"
                      value={lastName}
                      name="email"
                      id="email"
                      class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-1/2 p-2.5"
                      placeholder="Doe"
                      onChange={handleUsernameChange}
                      required=""
                    />
                  </div>
                </div>
              </div>


              <div class="block mx-4 mt-2 mb-2 text-sm font-medium text-gray-900">
                Your email
              </div>
              <div className="px-4">
                <input
                  type="email"
                  value={username}
                  name="email"
                  id="email"
                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  placeholder="name@company.com"
                  onChange={handleUsernameChange}
                  required=""
                />
              </div>
            </div>
            <div>
              <div class="block mx-4 mt-2 text-sm font-medium text-gray-900">
                Password
              </div>
              <div className="px-4">
                <input
                  type="password"
                  value={password}
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  onChange={handlePasswordChange}
                  required=""
                />
              </div>
            </div>
            <div className="my-1 text-center font-light">or</div>
            <div className="border-2 cursor-pointer flex justify-center hover:bg-gray-50 rounded-lg mb-2 mx-4 text-center py-2 px-auto">
              <FcGoogle size={20}/> <div className="ml-2">Sign in with Google</div>
            </div>
            <div className="border-2 flex justify-center cursor-pointer hover:bg-gray-50 rounded-lg mb-4 mx-4 text-center py-2 px-auto">
            <FaTwitter size={20}/> <div className="ml-2">Sign in with Twitter</div>
            </div>
            <div class="flex items-center mx-4 justify-between">
              <div class="flex items-start">
                <div class="flex items-center h-5">
                  <input
                    id="remember"
                    aria-describedby="remember"
                    type="checkbox"
                    class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300"
                    required=""
                  />
                </div>
                <div class="ml-1 text-sm">
                  <div for="remember" class="text-gray-500">
                    Remember me
                  </div>
                </div>
              </div>
            </div>
            <div onClick={sendLoginRequest} className="text-white cursor-pointer bg-blue-600 hover:bg-blue-700 mt-4 rounded-lg mx-4 text-center py-2 px-auto">
              Sign up to your account
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
