import React, { useState } from "react";

const IConnectNavbar = () => {
  const currentURL = window.location.href;
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div> 
        <div className="flex md:hidden bg-[#FBE6D6] py-2 px-4 justify-center text-center">
            <div className="relative">
                <div
                  className="text-sm px-3 py-2 font-bold rounded-lg bg-[#EE812D] hover:bg-[#e27928] cursor-pointer flex items-center"
                  onClick={toggleMenu}
                >
                  <span className="text-white px-3" src = "/mf/iconnect/doorstep">BOOK DOOR STEP CONSULTANCY</span>
                  <svg
                    className={`${
                      isOpen ? "transform rotate-180" : ""
                    } w-4 h-4 ml-1`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </div>
                {isOpen && (
                  <div className="absolute right-0 py-2 w-32 bg-white rounded-md shadow-lg">
                    <a
                      className="block px-4 py-2 text-[#EE812D] text-sm"
                      href="/mf/iconnect/videoconsult"
                    >
                      GET ONLINE VIDEO CONSULT
                    </a>
                    <a
                      className="block px-4 py-2 text-[#EE812D] text-sm"
                      href="/mf/iconnect/callback"
                    >
                      GET CALL BACK
                    </a>
                    <a
                      className="block px-4 py-2 text-[#EE812D] text-sm"
                      href="/mf/iconnect/chatbot"
                    >
                      CHATBOT/F.A.Q.
                    </a>
                    <a
                      className="block px-4 py-2 text-[#EE812D] text-sm"
                      href="/mf/iconnect/adviserlist"
                    >
                      TOP ADVISER'S LIST
                    </a>
                    <a
                      className="block px-4 py-2 text-[#EE812D] text-sm"
                      href="/mf/iconnect/nearbyoffice"
                    >
                      LOCATE NEARBY OFFICE
                    </a>

                  </div>
                )}
            </div>
        </div>
        <div className='bg-[#FBE6D6] py-2 px-4 md:flex hidden justify-center text-center'>        
            <div className={`bg-[${currentURL.includes('/mf/iconnect/doorstep') ? '#d36a19' : '#EE812D'}] px-6 mx-6 py-2 transition-transform duration-300 transform-gpu hover:scale-110 text-center rounded-lg font-bold text-white text-sm`}>
                <a href="/mf/iconnect/doorstep" style={{textDecoration: "none"}} className='text-white'>BOOK DOOR STEP CONSULTANCY</a>
            </div>
            <div className={`bg-[${currentURL.includes('/mf/iconnect/videoconsult') ? '#d36a19' : '#EE812D'}] px-6 mx-6 py-2 transition-transform duration-300 transform-gpu hover:scale-110 text-center rounded-lg font-bold text-white text-sm`}>
                <a href="/mf/iconnect/videoconsult" style={{textDecoration: "none"}} className='text-white'>GET ONLINE VIDEO CONSULT</a>
            </div>
            <div className={`bg-[${currentURL.includes('/mf/iconnect/callback') ? '#d36a19' : '#EE812D'}] px-6 mx-6 py-2 transition-transform duration-300 transform-gpu hover:scale-110 text-center rounded-lg font-bold text-white text-sm`}>
                <a href="/mf/iconnect/callback" style={{textDecoration: "none"}} className='text-white'>GET CALL BACK</a>
            </div>
            <div className={`bg-[${currentURL.includes('/mf/iconnect/chatbot') ? '#d36a19' : '#EE812D'}] px-6 mx-6 py-2 transition-transform duration-300 transform-gpu hover:scale-110 text-center rounded-lg font-bold text-white text-sm`}>
                <a href="/mf/iconnect/chatbot" style={{textDecoration: "none"}} className='text-white'>CHATBOT/F.A.Q.</a>
            </div>
            <div className={`bg-[${currentURL.includes('/mf/iconnect/adviserlist') ? '#d36a19' : '#EE812D'}] px-6 mx-6 py-2 transition-transform duration-300 transform-gpu hover:scale-110 text-center rounded-lg font-bold text-white text-sm`}>
                <a href="/mf/iconnect/adviserlist" style={{textDecoration: "none"}} className='text-white'>TOP ADVISER'S LIST</a>
            </div>
            <div className={`bg-[${currentURL.includes('/mf/iconnect/nearbyoffice') ? '#d36a19' : '#EE812D'}] px-6 mx-6 py-2 transition-transform duration-300 transform-gpu hover:scale-110 text-center rounded-lg font-bold text-white text-sm`}>
                <a href="/mf/iconnect/nearbyoffice" style={{textDecoration: "none"}} className='text-white '>LOCATE NEARBY OFFICE</a>
            </div>
        </div>
    </div>
  );
}

export default IConnectNavbar;
