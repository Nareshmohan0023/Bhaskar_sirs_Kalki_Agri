import React from 'react';
import './style.css';
import { useLanguage } from '../hooks/LanguageContext';

function Hero() {
  const { isKannada } = useLanguage(); // Hook to determine the selected language

  return (
    <section className='hero container-fluid p-3 p-md-5 py-5'>
        <div className="row">
            <div className="col-md-6">
                <h1 className="fs-5" data-aos="fade-right">
                  {isKannada ? 'ಕೃಷಕರೆಂದೇ ನಿಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸುವ ನಾವೀನ್ಯ ಮಾರುಕಟ್ಟೆ ಪರಿಹಾರಗಳು' : 'Innovative Marketing Solutions to Connect Farmers with Customers'}
                </h1>
                <h1 className="display-4 fw-bold text-green" data-aos="fade-up">
                  {isKannada ? 'ನಿಮ್ಮ ಕೃಷಿಯನ್ನು ಬೆಳೆಯಿಸುತ್ತಿದೆ, ಒಂದೇ ಸಂಪರ್ಕದಲ್ಲಿ' : 'Growing Your Farm, One Connection at a Time at '}<span className="text-orange">{isKannada?" ಕಲ್ಕಿ ಆಗ್ರಿ":" Kalki Agri"}</span>
                </h1>
                <p className="fs-6 text-gray" data-aos="fade-down">
                  {isKannada ? 'ಕಲ್ಕಿ ಆಗ್ರಿಯಲ್ಲಿಯೇ, ನಿಮ್ಮಂತಹ ರೈತರಿಗೆ ತಮ್ಮ ವ್ಯಾಪಾರವನ್ನು ಬೆಳೆಯಿಸಲು ಸಹಾಯ ಮಾಡಲು ನಾವು ಅರ್ಪಿತರಾಗಿದ್ದೇವೆ. ನಮ್ಮ ತಜ್ಞ ತಂಡವು ನಿಮ್ಮನ್ನು ಸರಿಯಾದ ಗ್ರಾಹಕರೊಂದಿಗೆ, ಸರಿಯಾದ ಸಮಯದಲ್ಲಿ ಸಂಪರ್ಕ ಸಾಧಿಸಲು ನಾವೀನ್ಯ ಮಾರುಕಟ್ಟೆ ಪರಿಹಾರಗಳನ್ನು ಒದಗಿಸುತ್ತದೆ.' : 'At Kalki Agri, we\'re dedicated to helping farmers like you grow their businesses. Our expert team provides innovative marketing solutions to connect you with the right customers, at the right time.'}
                </p>
                <div className="btns d-flex flex-wrap gap-3">
                    <button className="btn-green px-4" data-aos="fade-right">
                      {isKannada ? 'ನಮ್ಮ ಸೇವೆಗಳನ್ನು ಅನ್ವೇಷಿಸಿ' : 'Explore Our Services'}
                    </button>
                    <button className="btn-orange px-4" data-aos="fade-right">
                      {isKannada ? 'ನಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸಿ' : 'Contact us'}
                    </button>
                </div>
            </div>
            <div className="col-md-6 mt-3 mt-md-0 d-flex align-items-center justify-content-center">
                <img src="https://img.freepik.com/free-photo/smart-farming-5-0-green-plant-product-agricultural-technology-social-media-post-background_53876-96918.jpg?ga=GA1.1.2055555092.1705596882&semt=ais_hybrid" alt={isKannada ? 'ಕೃಷಿ ತಂತ್ರಜ್ಞಾನ ಚಿತ್ರ' : 'Agricultural Technology Image'} className="w-75 rounded-5 border-green" />
            </div>
        </div>
    </section>
  );
}

export default Hero;
