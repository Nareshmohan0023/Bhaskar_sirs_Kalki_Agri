import React, { useEffect } from 'react';
import './style.css';

function Buyer() {

  // useEffect(() => {
  //   function updateLabelContent() {
  //     const label = document.querySelector('.responsive-buyer-label');
  //     if (window.innerWidth < 600) {
  //       label.textContent = "Mobile.No";
  //     } else {
  //       label.textContent = "Mobile.No(+91)";
  //     }
  //   }

  //   // Run on component mount
  //   updateLabelContent();

  //   // Add event listeners
  //   window.addEventListener('resize', updateLabelContent);

  //   // Clean up event listeners on component unmount
  //   return () => {
  //     window.removeEventListener('resize', updateLabelContent);
  //   };
  // }, []);

  return (
    <section className='Buyer-Section'>
      <div className="banner-top  w-100">
        <h1 className="fs-1 fw-bold text-light">
          Are You Buyer?
        </h1>
      </div>
      <p className="heading"> Register here to directly connect with farmers</p>
      <form>
        <h3>Buyers Register Form</h3>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" placeholder='Eg:Suresh N' id="name" />
        </div>
        <div>
          <label htmlFor="address">Address:</label>
          <textarea placeholder='Street Address' id="address" rows="3"></textarea>
        </div>
        <div>
          <label htmlFor="district">District:</label>
          <input type="text" placeholder='Eg:Shivmogga' id="district" />
        </div>
        <div>
          <label htmlFor="state">State:</label>
          <input type="text" placeholder='Eg:Karnataka' id="state" />
        </div>
        <div>
          <label htmlFor="mobile" className='responsive-buyer-label'>Mobile.No:</label>
          <input type="tel" placeholder='Eg:9998887744' id="mobile" required pattern="[0-9]{10}" maxLength={10} />
        </div>
        <span className='Agree-container'>
          <input type='checkbox' id="agree" />
          <p className='declarion-txt'>I Agree to buy yield through the Kalki Agri platform, and I agree to all terms and conditions <a href="#">Learn more.</a></p>
        </span>
        <button>Register</button>
      </form>
    </section>
  );
}

export default Buyer;
