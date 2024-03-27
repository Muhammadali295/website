import React, { useState } from 'react';
import Modal from 'react-modal';
import axios from "axios";
Modal.setAppElement('#root');
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

const RegisterForm = ({ isOpen, closeModal }) => {
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
            const response = await axios.post('http://localhost:8004/create', formData);
            console.log(response.data); // Handle response from the server
            closeModal()
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Signup Modal"
            overlayClassName="reactModalOverlay"
        >
            <h2>Create an Account</h2>
            <form className='form' onSubmit={handleSubmit}>
                
                <input type='text' name="name" placeholder='Name' value={formData.name} onChange={handleChange} /><br />
                <input type="email" name="email" placeholder='Email' value={formData.email} onChange={handleChange} /><br />
                <input type="password" name="password" placeholder='Password' value={formData.password} onChange={handleChange} /><br />
                {/* <input type='password' name="confirm_password" placeholder='Confirm Password' value={formData.confirm_password} onChange={handleChange} /><br /> */}

                <input type='radio' name="gender" value="male" onChange={handleChange} />Male
                <input type='radio' name="gender" value="female" onChange={handleChange} />Female<br />
                <input type='number' name="phone" placeholder='Phone Number' value={formData.phone} onChange={handleChange} /><br />
                <input type='text' name="message" placeholder='Message' value={formData.message} onChange={handleChange} /><br />
                <button type="button" onClick={closeModal}>Close</button>
                <button type="submit" >Register</button>
            </form>
            <style>
                {`
      .reactModalOverlay {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(255, 255, 255, 0.75); /* Semi-transparent white */
        backdrop-filter: blur(10px); /* Blur effect */
      }
      
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
    input[type="radio"]{
        height:16px;
        width:14px;
        margin:12px;
        margin-top:20px;
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

export default RegisterForm;


