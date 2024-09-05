import React, { useState } from 'react';
import './style.css';
import axios from 'axios';
import FarmerCommunity from './community.jpg';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('default');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const { data } = await axios.post('/api/auth/register', { name, email, password, role });

            localStorage.setItem('authToken', data.token);
            navigate('/dashboard');
        } catch (error) {
            console.error(error.response.data.message);
        }
    };

    return (
     <section className="register">
            <div className="banner-top p-3">
                <h1 className="fs-1 fw-bold text-light">
                Register
                </h1>
            </div> 
            <div className="Register-Container ">
        <form onSubmit={handleSubmit} validate>
            <h1 className="Hero-Heading">Join Us and Grow Together: Be a Part of Our Community</h1>
            <div className='inputs'>
          
          <input
              type="text"
              required
              placeholder="Name"
              minLength={5}
              value={name}
              onChange={(e) => setName(e.target.value)}
          />
          <input
              type="email"
              placeholder="Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
          />
          <input
              type="password"
              placeholder="Password"
              required
              minLength={8}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
          />
          <select value={role}  onChange={(e) => setRole(e.target.value)}>
              <option value="default" disabled >Buyer or Seller</option>
              <option value="buyer">Buyer</option>
              <option value="seller">Seller</option>
              
          </select></div>
            
            <button type="submit">Register</button>
        </form>
                <img src={FarmerCommunity} alt="" className="Hero-img"  />
            </div>
           
     </section>
    );
};

export default Register;


