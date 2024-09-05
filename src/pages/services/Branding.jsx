import React from 'react';
import Banner from './Banner';
import Overview from './Overview';
import image from './images/branding.jpeg';
import { Link } from 'react-router-dom';
import Feedback from '../../components/feedback/Feedback';
import CaseStudeis from './CaseStudeis';
import { useLanguage } from '../../components/hooks/LanguageContext';

function Branding() {
  const { isKannada } = useLanguage();

  return (
    <section className='service-container'>
      <Banner 
        title={isKannada ? "ಬ್ರಾಂಡಿಂಗ್ ಮತ್ತು ಜಾಹೀರಾತು ಸೇವೆಗಳು" : "Branding and Advertising Services"} 
        subtitle={isKannada ? "ಶಕ್ತಿ ಶಾಲಿಯ ಮಾರುಕಟ್ಟೆ ಹಾಜರಾತಿಗೆ ನಮ್ಮ ಪರಿಣಿತ ಪರಿಹಾರಗಳೊಂದಿಗೆ ನಿಮ್ಮ ಬ್ರಾಂಡ್ ಅನ್ನು ಉನ್ನತಿಗೊಳಿಸಿ." : "Elevate your brand with our expert solutions for a powerful market presence."}
      />
      <Overview 
        title={isKannada ? "ಬ್ರಾಂಡಿಂಗ್ ಮತ್ತು ಜಾಹೀರಾತು ಸೇವೆಗಳು" : "Branding and Advertising Services"} 
        content={isKannada 
          ? "ಇಂದಿನ ಸ್ಪರ್ಧಾತ್ಮಕ ಮಾರುಕಟ್ಟೆಯಲ್ಲಿ, ಶಕ್ತಿಶಾಲಿ ಬ್ರಾಂಡ್ ಮತ್ತು ಪರಿಣಾಮಕಾರಿ ಜಾಹೀರಾತು ವ್ಯವಹಾರ ಯಶಸ್ಸಿಗೆ ಅಗತ್ಯವಾಗಿವೆ. ನಮ್ಮ ಬ್ರಾಂಡಿಂಗ್ ಮತ್ತು ಜಾಹೀರಾತು ಸೇವೆಗಳು ನಿಮಗೆ ಸೆಡುವಾತ್ಮಕ ಬ್ರಾಂಡ್ ಐಡಿಂಟಿಟಿಯನ್ನು ನಿರ್ಮಿಸಲು ಮತ್ತು ಪರಿಣಾಮಕಾರಿ ಜಾಹೀರಾತು ಅಭಿಯಾನಗಳನ್ನು ಕಾರ್ಯಗತಗೊಳಿಸಲು ಸಹಾಯ ಮಾಡಲು ವಿನ್ಯಾಸಗೊಳಿಸಲಾಗಿದೆ. ನೀವು ಹೊಸ ಬ್ರಾಂಡ್ ಅನ್ನು ಪ್ರಾರಂಭಿಸುತ್ತಿರಾ ಅಥವಾ ಲಭ್ಯವಿರುವ ಒಂದನ್ನು ಪುನಶ್ಚೇಪಿಸುತ್ತಿರಾ, ನಾವು ನಿಮ್ಮ ಅಗತ್ಯಗಳಿಗೆ ಹೊಂದಿಸಿದ ಸಮಗ್ರ ಪರಿಹಾರಗಳನ್ನು ನೀಡುತ್ತೇವೆ." 
          : "In today’s competitive market, a strong brand and effective advertising are essential for business success. Our branding and advertising services are designed to help you build a compelling brand identity and execute impactful advertising campaigns. Whether you’re launching a new brand or looking to revitalize an existing one, we offer comprehensive solutions tailored to your needs."
        } 
        image={image}
      />
      <CaseStudeis 
        content={isKannada 
          ? "ನಮ್ಮ ಬ್ರಾಂಡಿಂಗ್ ಮತ್ತು ಜಾಹೀರಾತು ಸೇವೆಗಳು ಹೇಗೆ ವ್ಯಾಪಾರಗಳನ್ನು ಪರಿವರ್ತಿಸುತ್ತವೆ ಮತ್ತು ಯಶಸ್ಸು ತರಿಸುತ್ತವೆ ಎಂಬುದನ್ನು ಅನಾವರಣಗೊಳಿಸಿ. ನಮ್ಮ ಪ್ರಕರಣ ಅಧ್ಯಯನಗಳು ಯಶಸ್ವಿಯಾದ ಯೋಜನೆಗಳನ್ನು ಮತ್ತು ನಮ್ಮ ತಂತ್ರಜ್ಞಾನಗಳ ಪ್ರಮಾಣೀಕೃತ ಪರಿಣಾಮವನ್ನು ಉಲ್ಲೇಖಿಸುತ್ತವೆ." 
          : "Discover how our branding and advertising services have transformed businesses and driven success. Our case studies highlight successful projects and the measurable impact of our strategies."
        }
      />
      <Feedback />
    </section>
  );
}

export default Branding;
