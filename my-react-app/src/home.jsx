
import React, { useState } from 'react';
import p3 from './firstimage.jpeg';
import p2 from './5.png';
import p1 from './6.jpg';
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import LoginModal from './complete';
import RegisterForm from './signupmodal';
import "./navbar.css"

const Slideshow = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const openLoginModal = () => {
    setIsLoginModalOpen(true);
  };

  const closeLoginModal = () => {
    setIsLoginModalOpen(false);
  };

  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);

  const openSignupModal = () => {
    setIsSignupModalOpen(true);
  };

  const closeSignupModal = () => {
    setIsSignupModalOpen(false);
  };


  return (

    <div>
{/* 
      <link rel="stylesheet" href="modal_login.css" />
      <link rel="stylesheet" href="modal_signup.css" /> */}

      <nav className="navbar">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a href="#" className="nav-link">Home</a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">About</a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">Services</a>
          </li>
          <ul className="nav-button">
            <li className='nav-button-item'>
              <div className="dropdown">
                <p className="dropbutton">Register</p>
                <div className="dropdown-content">
                  <button id="u" className="btn" onClick={openLoginModal}>Login</button>
                  <LoginModal isOpen={isLoginModalOpen} closeModal={closeLoginModal} />
                  <button id="u" className="btn-1" onClick={openSignupModal}>Signup</button>
                  <RegisterForm isOpen={isSignupModalOpen} closeModal={closeSignupModal} />
                </div>
              </div>
            </li>
          </ul>
        </ul>
      </nav>

      <Slider {...settings} className='carousal-container'>

        <div>
          <h1 style={{ position: "absolute", zIndex: 1, margin: "120px",marginLeft:"180px", color: "white", maxWidth: "500px", }}>Welcome to HPCC</h1>
          <p style={{ position: "absolute", zIndex: 1, margin: "170px", color: "white", maxWidth: "500px", }}>Welcome to our cutting-edge computer science website designed specifically for storing and managing records with efficiency and precision. Whether you're a student, researcher, or industry professional, our platform offers a seamless solution for organizing and accessing vital information. With user-friendly interfaces and robust database management tools, you can securely store, retrieve, and update records with ease.</p>
          <img src={p3} alt="1" style={{ maxHeight: '600px', width: "100%" }} />
        </div>
        <div>
        <h1 style={{ position: "absolute", zIndex: 1, margin: "150px",marginLeft:"220px", color: "white", maxWidth: "500px", }}>Welcome to HPCC</h1>
          <p style={{ position: "absolute", zIndex: 1, margin: "200px", color: "white", maxWidth: "650px", }}>Welcome to our cutting-edge computer science website designed specifically for storing and managing records with efficiency and precision. Whether you're a student, researcher, or industry professional, our platform offers a seamless solution for organizing and accessing vital information. With user-friendly interfaces and robust database management tools, you can securely store, retrieve, and update records with ease.</p>
          <img src={p1} alt="2" style={{ maxHeight: '600px', width: "100%" }} />
        </div>
        <div>
        <h1 style={{ position: "absolute", zIndex: 1, margin: "120px",marginLeft:"180px", color: "white", maxWidth: "500px", }}>Welcome to HPCC</h1>
        <p style={{ position: "absolute", zIndex: 1, margin: "200px", color: "white", maxWidth: "650px", }}>Welcome to our cutting-edge computer science website designed specifically for storing and managing records with efficiency and precision. Whether you're a student, researcher, or industry professional, our platform offers a seamless solution for organizing and accessing vital information. With user-friendly interfaces and robust database management tools, you can securely store, retrieve, and update records with ease.</p>
          <img src={p2} alt="3" style={{ maxHeight: '600px', width: "100%" }} />
        </div>
      </Slider>
      <style>
        {`
            .carousel-container {
                max-height: 100px; 
                margin: auto; 
               
              }
           
             
            `}
      </style>

    </div>

  );
}

export default Slideshow;


// <div id="slideshow">
// <div className="slide-wrapper" style={{ zIndex: -1 }}>
//     <div className="slide">
//         <div className="slide-content">
//             <h1 className="slide-number">
//                 Welcome to HEC
//             </h1>
//             <p>Welcome to our cutting-edge computer science website designed specifically for storing and managing records with efficiency and precision. Whether you're a student, researcher, or industry professional, our platform offers a seamless solution for organizing and accessing vital information. With user-friendly interfaces and robust database management tools, you can securely store, retrieve, and update records with ease.</p>
//         </div>
//     </div>
//     <div className="slide">
//     <div class="slide-content">
//     <h1 class="slide-number"></h1>
//     <p>
//         With robust security measures in place, including encryption and access controls, your sensitive
//         information remains safeguarded against unauthorized access. Embrace innovation and streamline
//         your data management processes with our state-of-the-art computer science website. Join us today
//         and unlock the full potential of organized information management.
//     </p>
// </div>
//     </div>
// </div>
// </div>