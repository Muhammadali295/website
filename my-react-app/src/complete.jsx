// LoginModal.js
import React,{useState} from 'react';
import {useNavigate} from "react-router-dom"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Modal from 'react-modal';
import axios from "axios";
import  "./complete.css";
import RegisterForm from './signupmodal';
const customStyles = {
  content: {
    top: '70%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};





const LoginModal = ({ isOpen, closeModal }) => {
  
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);

      const openSignupModal = () => {
        setIsSignupModalOpen(true);
        
      };
    
      const closeSignupModal = () => {
        setIsSignupModalOpen(false);
      };


  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const response = await axios.post('http://localhost:8004/login', { 
          email,
          password,
        });
        console.log(response.data); 
        closeModal(); 
       navigate("/formsubmit")
      } catch (error) {
        if (error.response && error.response.data) {
          setErrorMessage(error.response.data.message); 
        } else {
          setErrorMessage("An error occurred, please try again.");
        }
      }
   
  
  };
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Login Modal"
    >
      <h2>Login to your account </h2>
      
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      <form className='form' onSubmit={handleSubmit}>
        <input type="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} /><br />
        <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} /><br />
        <button className='button-submit' type="submit">Login</button>
        <p onClick={openSignupModal}>Already Have an Account?Click Here</p>
        <RegisterForm isOpen={isSignupModalOpen} closeModal={closeSignupModal} />
        <button className='close' type="button" onClick={closeModal}>X</button>
        
      </form>
    
      
    </Modal>
  );
};

export default LoginModal;
