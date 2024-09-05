import React from 'react'
import './style.css'
import video from '../../assets/videos/about.mp4'
import { Link } from 'react-router-dom'
import { useLanguage } from '../hooks/LanguageContext'

function ReachOut() {
  const { isKannada } = useLanguage();

  return (
    <section className='reach-out container-fluid p-3 p-md-5'>
      <div className="row h-100 align-items-center">
        <div className="col-md-6">
          <div className="bg-green3 text-light p-4 rounded-4" data-aos="fade-up">
            <h6 className="fs-6">{isKannada ? 'ನಮ್ಮ ಸೇವೆಗಳಲ್ಲಿ ಆಸಕ್ತಿಯಿದೆಯೆ?' : 'Interested in our Services?'}</h6>
            <h1 className="fs-1">{isKannada ? 'ನಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸಿ!' : 'Reach to us!'}</h1>
            <p className="fs-6">
              {isKannada 
                ? 'ನಾವು ನಿಮ್ಮ ಕೃಷಿ ಪ್ರಯಾಣವನ್ನು ಬೆಂಬಲಿಸಲು ಇಲ್ಲಿದ್ದೇವೆ. ನೀವು ನಿಮ್ಮ ಮಾರ್ಕೆಟಿಂಗ್ ತಂತ್ರಗಳನ್ನು ಸುಧಾರಿಸಲು, ಉತ್ಪನ್ನ ನಿರ್ವಹಣೆಯನ್ನು ಸುಧಾರಿಸಲು ಅಥವಾ ಹೊಸ ಅವಕಾಶಗಳನ್ನು ಅನ್ವೇಷಿಸಲು ಹುಡುಕುತ್ತಿದ್ದೀರಾ ಎಂಬುದಕ್ಕೆ ಸಂಬಂಧಿಸಿದಂತೆ, ನಮ್ಮ ತಂಡ ಸಹಾಯ ಮಾಡಲು ಸಿದ್ಧವಾಗಿದೆ. ಇಂದು ನಮ್ಮೊಂದಿಗೆ ಸಂಪರ್ಕದಲ್ಲಿರಿ ಮತ್ತು ನಿಮ್ಮ ಕೃಷಿ ಯಶಸ್ಸನ್ನು ಹೆಚ್ಚಿಸಲು ನಾವು ಒಂದಿಗೆ ಕೆಲಸ ಮಾಡೋಣ!'
                : "We're here to support your agricultural journey. Whether you're looking to enhance your marketing strategies, improve product management, or explore new opportunities, our team is ready to assist. Connect with us today and let's work together to boost your farming success!"}
            </p>
            <Link to="/contact-us" className='btn-green mt-3 px-4'>
              {isKannada ? 'ಸಂಪರ್ಕಿಸಿ' : 'Contact us'}
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ReachOut
