import React from 'react';
import './style.css';
import video from '../../assets/videos/about.mp4';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../components/hooks/LanguageContext';

function CaseStudeis({ content }) {
  const { isKannada } = useLanguage();

  return (
    <section className='reach-out container-fluid p-3 p-md-5'>
      <div className="row h-100 align-items-center">
        <div className="col-md-6">
          <div className="bg-green3 text-light p-4 rounded-4" data-aos="fade-up">
            <h6 className="fs-6">{isKannada ? "ಕಲ್ಕಿ ಅಗ್ರಿ" : "Kalki Agri"}</h6>
            <h1 className="fs-1">{isKannada ? "ಮಾಮೂಲ ಆಧ್ಯಯನಗಳು" : "Case Studies"}</h1>
            <p className="fs-6">
              {isKannada
                ? "ನಮ್ಮ ಬ್ರಾಂಡಿಂಗ್ ಮತ್ತು ಜಾಹೀರಾತು ಸೇವೆಗಳು ಹೇಗೆ ವ್ಯಾಪಾರಗಳನ್ನು ಪರಿವರ್ತಿಸುತ್ತವೆ ಮತ್ತು ಯಶಸ್ಸು ತರಿಸುತ್ತವೆ ಎಂಬುದನ್ನು ಅನಾವರಣಗೊಳಿಸಿ. ನಮ್ಮ ಪ್ರಕರಣ ಅಧ್ಯಯನಗಳು ಯಶಸ್ವಿಯಾದ ಯೋಜನೆಗಳನ್ನು ಮತ್ತು ನಮ್ಮ ತಂತ್ರಜ್ಞಾನಗಳ ಪ್ರಮಾಣೀಕೃತ ಪರಿಣಾಮವನ್ನು ಉಲ್ಲೇಖಿಸುತ್ತವೆ."
                : content
              }
            </p>
            <Link className='btn-green mt-3 px-4' to="/about">
              {isKannada ? "ನಮ್ಮ ಬಗ್ಗೆ" : "About us"}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CaseStudeis;
