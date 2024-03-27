
import React, { useState } from 'react';
import p3 from './1.jpg';
import p2 from './5.png';
import p1 from './6.jpg';
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import LoginModal from './complete';
import RegisterForm from './signupmodal';



const Slideshow = () => {
    const slidesdata=[{
        id:1,
        text:"slide 1",
        image: {p3}
    },
    {
        id:2,
        text:"slide 2",
        image: {p2}
    },
    {
        id:3,
        text:"slide 3",
        image: {p1}
    }]
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
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"
                integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous" />
            {/* <link href="navbar.css" rel="stylesheet" /> */}
            <link rel="stylesheet" href="modal_login.css" />
            <link rel="stylesheet" href="modal_signup.css" />

            <div className="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
                <a href="#home">Home</a>
                <a href="#news">News</a>
                <a href="#contact">Contact</a>
                <a href="#about">About</a>
                <div className="dropdown">
                    <button className="dropbutton">Register</button>
                    <div className="dropdown-content">
                        <button id="u" className="btn" onClick={openLoginModal}>Login</button>
                        <LoginModal isOpen={isLoginModalOpen} closeModal={closeLoginModal} />
                        <button id="u" className="btn-1" onClick={openSignupModal}>Signup</button>
                        <RegisterForm isOpen={isSignupModalOpen} closeModal={closeSignupModal} />
                    </div>
                </div>
            </div>

         
            <Slider {...settings} className='carousal-container'>
                {/* {slidesdata.map(slide=>(<div key={slide.id}>
                    <img src={slide.image} alt={slide.text}/>
                    <div>{slide.text}</div>
                </div>))} */}

        <div>
            
        <p style={{position:"absolute",zIndex:1,margin:"170px",color:"white",maxWidth:"500px",}}>Welcome to our cutting-edge computer science website designed specifically for storing and managing records with efficiency and precision. Whether you're a student, researcher, or industry professional, our platform offers a seamless solution for organizing and accessing vital information. With user-friendly interfaces and robust database management tools, you can securely store, retrieve, and update records with ease.</p> 
          <img src={p3} alt="1" style={{maxHeight:'600px',width:"100%"}} />
        </div>
        <div>
        <p style={{position:"absolute",zIndex:1,margin:"200px",color:"white",maxWidth:"650px",}}>Welcome to our cutting-edge computer science website designed specifically for storing and managing records with efficiency and precision. Whether you're a student, researcher, or industry professional, our platform offers a seamless solution for organizing and accessing vital information. With user-friendly interfaces and robust database management tools, you can securely store, retrieve, and update records with ease.</p> 
          <img src={p1} alt="2" style={{maxHeight:'600px',width:"100%"}} />
        </div>
        <div>
          <img src={p2} alt="3" style={{maxHeight:'600px',width:"100%"}} />
        </div>
      </Slider>         
            <style>
            {`
            .carousel-container {
                max-height: 100px; 
                margin: auto; 
              }
              .navbar {
                  padding: 2%;
                  
              }
      
              .navbar a {
                  text-decoration: none;
                  color: white;
                  margin-left: 20px;
              }
      
              body {
                  font-family: Helvetica, sans-serif;
                  padding: 0%;
                  margin: 0%;
                  font-size: 50;
              }
      
      
             
              #u{
                  margin-left: 1px;
                  background-color: rgb(1, 1, 10);
                  color: white;
                  text-align: center;
                  height: 40px;
                  width: 100px;
              }
      
              .slide-content {
                  top: 0;
                  left: 0;
                  width: 100%;
                  height: 100%;
                  display: flex;
                  flex-direction: column;
                  justify-content: center;
                  align-items: center;
              }
      
              .dropdown {
                  /* margin-right:4px ; */
                  position: relative;
                  display: inline;
              }
      
              .dropdown-content {
                  display: none;
                  position: absolute;
                  background-color: #f9f9f9;
                  min-width: 120px;
                  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
                  z-index: 1;
              }
      
              .dropdown-content a {
                  color: black;
                  padding: 12px 16px;
                  text-decoration: none;
                  display: block;
              }
      
              .dropdown-content a:hover {
                  background-color: #ddd;
              }
      
              .dropdown:hover .dropdown-content {
                  display: block;
              }
      
              /* Dropdown button styling */
              .dropbtn {
                  background-color: rgb(29, 35, 37);
                  color: white;
                  padding: 12px 20px;
                  border: none;
                  cursor: pointer;
                  border-radius: 5px;
              }
              .dropbutton{
                  border-radius: 10px;
                  padding: 5px;
                  background-color: black;
                  padding-top: 8px;
                  padding-bottom: 8px;
                  text-align: center;
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