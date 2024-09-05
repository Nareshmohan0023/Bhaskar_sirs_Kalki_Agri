import React from 'react'
import './style.css';
import aboutVideo from '../../assets/videos/about.mp4'
import { useLanguage } from '../hooks/LanguageContext'

function About() {
  const { isKannada } = useLanguage();

  return (
    <section className='about-section container-fluid p-3 p-md-5'>
      <div className="row">
        <div className="col-md-6">
          <video src={aboutVideo} autoPlay muted loop className='w-100' style={{ objectFit: 'cover' }} data-aos="fade-up"></video>
        </div>
        <div className="col-md-6 mt-3">
          <h5 className="fs-6 text-green" data-aos="fade-up">
            {isKannada ? 'ನಮ್ಮ ಬಗ್ಗೆ' : 'ABOUT US'}
          </h5>
          <h1 className="display-5 text-green fw-bold" data-aos="fade-up">
            {isKannada ? 'ನಮ್ಮ ಆಧುನಿಕ ಕೃಷಿ ಹಿಂದಿನ ತಜ್ಞರನ್ನು ಭೇಟಿ ಮಾಡಿ' : 'Meet the Minds Behind Our Modern Farm'}
          </h1>
          <p className="fs-5 text-green">
            {isKannada ? 
            'ಕಲ್ಕಿ ಅಗ್ರಿಯಲ್ಲಿ, ರೈತರಿಗೆ ನಿಮ್ಮ ವ್ಯವಹಾರವನ್ನು ವೃದ್ಧಿಸಲು ಸಹಾಯ ಮಾಡಲು ನಾವು ಸಮರ್ಪಿತರಾಗಿದ್ದೇವೆ. ನಮ್ಮ ತಜ್ಞರ ತಂಡ ನಿಮಗೆ ಸರಿಯಾದ ಸಮಯದಲ್ಲಿ, ಸರಿಯಾದ ಗ್ರಾಹಕರೊಂದಿಗೆ ಸಂಪರ್ಕ ಕಲ್ಪಿಸಲು ನಾವಿನೀಯ ಮಾರುಕಟ್ಟೆ ಪರಿಹಾರಗಳನ್ನು ಒದಗಿಸುತ್ತದೆ.' : 
            'At Kalki Agri, we\'re dedicated to helping farmers like you grow their businesses. Our expert team provides innovative marketing solutions to connect you with the right customers, at the right time.'}
          </p>
          <h3 className="fs-4">
            {isKannada ? 'ಬೆಳೆಯಿಂದ ಟೇಬಲ್‌ವರೆಗೆ, ನಾವು ನಿಮಗೆ ಸಹಾಯ ಮಾಡುತ್ತೇವೆ' : 'From crop to table, we\'ve got you covered'}
          </h3>
          <ul>
            <li data-aos="fade-up">{isKannada ? 'ಮಾರುಕಟ್ಟೆ ಸಂಶೋಧನೆ ಮತ್ತು ವಿಶ್ಲೇಷಣೆ' : 'Market research and analysis'}</li>
            <li data-aos="fade-up">{isKannada ? 'ಬ್ರಾಂಡಿಂಗ್ ಮತ್ತು ಜಾಹೀರಾತು' : 'Branding and advertising'}</li>
            <li data-aos="fade-up">{isKannada ? 'ಡಿಜಿಟಲ್ ಮಾರುಕಟ್ಟೆ ಮತ್ತು ಸಾಮಾಜಿಕ ಮಾಧ್ಯಮ' : 'Digital marketing and social media'}</li>
            <li data-aos="fade-up">{isKannada ? 'ವ್ಯಾಪಾರ ಪ್ರದರ್ಶನ ಮತ್ತು ಘಟನೆ ಪ್ರಚಾರ' : 'Trade show and event promotion'}</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default About
