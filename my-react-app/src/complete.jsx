// LoginModal.js
import React,{useState} from 'react';
import {useNavigate} from "react-router-dom"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Modal from 'react-modal';
import axios from "axios";
const customStyles = {
  content: {
    top: '50%',
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
      <h2>Login</h2>
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      <form className='form' onSubmit={handleSubmit}>
        <input type="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} /><br />
        <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} /><br />
        <button type="submit">Login</button>
        <button type="button" onClick={closeModal}>Close</button>
      </form>
    
      <style>
      {`
      
      input {
        width:230px;
        margin-left:0;
        margin-top: 30px;
        border: 1px;
        border-width: 1px;
        border-style: none;
        border-color: gray;
        border-radius: 4px;
        height: 35px;
        // outline-style: solid; 
    }
    input:hover {
    width:230px;
        margin-top: 30px;
        border-width: 1px;
        border-radius: 1px;
        height: 35px;
        outline-style: groove;
        background-color: rgb(152, 152, 209);
    }

    .form{
       height:600px;
        width: 400px;
        padding: 20px;
        z-index: 1;
        /* background-color: black; */
        opacity: 0.8;
        margin-top: 5%;
        backdrop-filter: blur(10px)
       
    }
    button{
        margin: 15px;
        border: 2px;
        background-color: blue;
        color: white;
        text-align: center;
        height: 40px;
        width: 100px;
        border-radius: 6px;
    }
       `}
      </style>
    </Modal>
  );
};

export default LoginModal;
