import React,{useState} from 'react';
import axios from "axios";
import "./form.css"
import "./navbar.css"
import LoginModal from './complete';
import RegisterForm from './signupmodal';
function Form() {

  const [formData, setFormData] = useState({
    name: "",
    email: '',
    password: '',
    gender: '',
    phone: '',
    message: '',
});
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


const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log("form submittewd")
};

const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await axios.post('http://localhost:8004/submitform', formData);
        console.log(response.data); // Handle response from the server
      
    } catch (error) {
        console.error('Error:', error);
    }
};

  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
      </head>
      <body>
        <div id="navbar"></div>
        {/* <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script> */}
        {/* <script>
          {`
          $(function(){
            $("#navbar").load("navbar.html");
          });
          `}
          
        </script> */}
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
        <div className="container">
          <div className="form-container">
            <div className="left-container">
              <div className="left-inner-container">
                <h2>Form Submision</h2>
                <p>Whether you have a question, want to start a project or simply want to connect.</p>
                <br />
                <p>Feel free to send me a message in the contact form</p>
              </div>
            </div>
            <div className="right-container">
              <div className="right-inner-container">
                <form onSubmit={handleSubmit}>
                  <h2 className="lg-view">Contact Form</h2>
                  {/* <h2 className="sm-view">Welcome</h2> */}
                  <p>* Required</p>
                  <div className="social-container">
                    <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
                    <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
                    <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
                  </div>
                  <input type="text" name='name' placeholder="Name *" value={formData.name} onChange={handleChange} />
                  <input type="email"name='email' placeholder="Email *" value={formData.email} onChange={handleChange}/>
                  <input type="text" name='password' placeholder="Password" value={formData.password} onChange={handleChange} />
                  <div className="gender-selection">
                    <p>Gender:</p>
                    <label htmlFor="male">
                      <input type="radio" id="male" name="gender" value="male" onChange={handleChange}/> Male
                    </label>
                    <label htmlFor="female">
                      <input type="radio" id="female" name="gender" value="female" onChange={handleChange}/> Female
                    </label>
                    <label htmlFor="other">
                      <input type="radio" id="other" name="gender" value="other"  onChange={handleChange}/> Other
                    </label>
                  </div>
                  <input type="phone" name='phone' placeholder="Phone" value={formData.phone} onChange={handleChange} />
                  <textarea rows="4" placeholder="Message" name='message' value={formData.message} onChange={handleChange} style={{ height: '40px' }} />
                  <button>Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
        
       
      </body>
    </html>
  );
}

export default Form;
