import React from 'react'
import './style.css';

function Buyer() {
  return (
    <section className='Buyer-Section'>
        <div className="banner-top p-3 w-100">
            <h1 className="fs-1 fw-bold text-light">
              Are You Buyer?
            </h1>
        </div>
       <p className="heading"> Register here to directly connect with farmers</p>
       <form validate>
        <h3>Buyers Register Form</h3>
        <div><label htmlFor="name">Name:</label>
        <input type="text" placeholder='Eg:Suresh N' id="name" /></div>
        <div><label htmlFor="address">Address:</label>
        <textarea placeholder='Street Address' id="address" rows="3"></textarea></div>
        <div><label htmlFor="district">District:</label>
        <input type="text" placeholder='Eg:Shivmogga' id="district" /></div>
        <div><label htmlFor="state">State:</label>
        <input type="text" placeholder='Eg:Karnataka' id="state" /></div>
        <div><label htmlFor="mobile">Mobile.No(+91):</label>
        <input type="tel" placeholder='Eg:9998887744' id="mobile"  required pattern="[0-9]{10}" maxLength={10}/></div>
        <span className='Agree-container'>  <input type='checkbox' id="agree"></input>
        <p className='declarion-txt'>I Agree to buy yield through the Kalki Agri platform, and i agree to the all terms and conditions <a href="#">Learn more.</a></p></span>
        <button>Register</button>
       </form>
    </section>
  )
}

export default Buyer;