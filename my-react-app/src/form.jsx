import React,{useState} from 'react';
import axios from "axios";
function Form() {

  const [formData, setFormData] = useState({
    name: "",
    email: '',
    password: '',
    gender: '',
    phone: '',
    message: '',
});


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
        <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
        <script>
          {`
          $(function(){
            $("#navbar").load("navbar.html");
          });
          `}
        </script>
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
                  <h2 className="lg-view">Contact</h2>
                  <h2 className="sm-view">Welcome</h2>
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
        <style>
          {`
          @import url('https://fonts.googleapis.com/css?family=Montserrat:400,800');

          * {
          box-sizing: border-box;
          margin: 0;
        }
    
        :root {
          --teal: #00b4cf;
          --white: #ffffff;
        }
    
        body {
          background: linear-gradient(90deg, #BE8CEF 0%, rgba(61, 46, 232, 0.83) 100%);
    
    
        }
    
        .container {
          margin-top: 10px;
          background-color: var(--white);
          border-radius: 5px;
          box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25),
            0 10px 10px rgba(0, 0, 0, 0.22);
          position: relative;
          overflow: hidden;
          width: 768px;
          max-width: 100%;
          min-height: 550px;
          min-width: 370px;
        }
    
        h2 {
          font-size: 2rem;
          margin-bottom: 1rem;
        }
    
        .form-container {
          display: flex;
        }
    
        .left-container {
          flex: 1;
          height: 550px;
          background-color: var(--teal);
          display: flex;
          justify-content: center;
          align-items: center;
          color: var(--white);
        }
    
        .left-container p {
          font-size: 0.9rem;
        }
    
        .right-container {
          display: flex;
          flex: 1;
          height: 460px;
          background-color: var(--white);
          justify-content: center;
          align-items: center;
        }
    
        .right-inner-container {
          width: 70%;
          height: 80%;
          text-align: center;
        }
    
        .left-inner-container {
          height: 50%;
          width: 80%;
          text-align: center;
          line-height: 22px;
        }
    
        input,
        textarea {
          background-color: #eee;
          border: none;
          padding: 12px 15px;
          margin: 8px 0;
          width: 100%;
          font-size: 0.8rem;
        }
    
        input:focus,
        textarea:focus {
          outline: 1px solid var(--teal);
        }
    
        .gender-selection {
          margin: 8px 0;
          display: flex;
          align-items: center;
          justify-content: start;
        }
    
        .gender-selection p {
          margin-right: 10px;
          font-size: 0.8rem;
        }
    
        .gender-selection label {
          margin-right: 15px;
          font-size: 0.8rem;
          display: flex;
          align-items: center;
        }
    
        .gender-selection input[type="radio"] {
          margin-right: 2px;
        }
    
    
        button {
          border-radius: 20px;
          border: 1px solid var(--teal);
          background-color: var(--teal);
          color: #FFFFFF;
          font-size: 12px;
          font-weight: bold;
          padding: 12px 45px;
          letter-spacing: 1px;
          text-transform: uppercase;
          transition: transform 80ms ease-in;
          cursor: pointer;
        }
    
        button:hover {
          opacity: 0.7;
        }
    
        @media only screen and (max-width: 600px) {
          .left-container {
            display: none;
          }
    
          .lg-view {
            display: none;
          }
        }
    
        @media only screen and (min-width: 600px) {
          .sm-view {
            display: none;
          }
        }
    
        form p {
          text-align: left;
        }
          `}
        </style>
      </body>
    </html>
  );
}

export default Form;
