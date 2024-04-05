import React, { useState } from 'react';
import Modal from 'react-modal';
import axios from "axios";
import "./signupmodal.css"
import LoginModal from './complete';
Modal.setAppElement('#root');
const customStyles = {
    content: {
        top: '55%',
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
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

    const openLoginModal = () => {
      setIsLoginModalOpen(true);
     
      
    };
  
    const closeLoginModal = () => {
      setIsLoginModalOpen(false);
    };


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
            <form className='form' onSubmit={handleSubmit}>
                
            <h3>Create an Account</h3>
                <input type='text' name="name" placeholder='Name' value={formData.name} onChange={handleChange} /><br />
                <input type="email" name="email" placeholder='Email' value={formData.email} onChange={handleChange} /><br />
                <input type="password" name="password" placeholder='Password' value={formData.password} onChange={handleChange} /><br />
                {/* <input type='password' name="confirm_password" placeholder='Confirm Password' value={formData.confirm_password} onChange={handleChange} /><br /> */}

                <input type='radio' name="gender" value="male" onChange={handleChange} />Male
                <input type='radio' name="gender" value="female" onChange={handleChange} />Female<br />
                <input type='number' name="phone" placeholder='Phone Number' value={formData.phone} onChange={handleChange} /><br />
                <input type='text' name="message" placeholder='Message' value={formData.message} onChange={handleChange} /><br />
                <button type="button" onClick={closeModal} className='close'>X</button>
                <button type="submit"  className='submit'>Register</button>
                <p onClick={openLoginModal}>Already Have an Account?Click Here</p>
                <LoginModal isOpen={isLoginModalOpen} closeModal={closeLoginModal} />
            </form>
            
        </Modal>
    );
};

export default RegisterForm;


