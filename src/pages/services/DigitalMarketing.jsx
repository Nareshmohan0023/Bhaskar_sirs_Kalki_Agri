import React from 'react';
import Banner from './Banner';
import Overview from './Overview';
import image from './images/digitalmarketing.jpeg';
import { Link } from 'react-router-dom';
import Feedback from '../../components/feedback/Feedback';
import CaseStudeis from './CaseStudeis';
import { useLanguage } from '../../components/hooks/LanguageContext';

function DigitalMarketing() {
  const { isKannada } = useLanguage();

  return (
    <section className='service-container'>
      <Banner 
        title={isKannada ? "ಡಿಜಿಟಲ್ ಮಾರ್ಕೆಟಿಂಗ್ ಮತ್ತು ಸೋಶಿಯಲ್ ಮೀಡಿಯಾ ಸೇವೆಗಳು" : "Digital Marketing and Social Media Services"} 
        subtitle={isKannada ? "ನಮ್ಮ ಸೂತ್ರಬದ್ಧ ಡಿಜಿಟಲ್ ಮಾರ್ಕೆಟಿಂಗ್ ಮತ್ತು ಸೋಶಿಯಲ್ ಮೀಡಿಯಾ ಪರಿಹಾರಗಳೊಂದಿಗೆ ನಿಮ್ಮ ಆನ್ಲೈನ್ ಹಾಜರಾತಿಯನ್ನು ಗರಿಷ್ಠಗೊಳಿಸಿ." : "Maximize your online presence with our strategic digital marketing and social media solutions."}
      />
      <Overview 
        title={isKannada ? "ಡಿಜಿಟಲ್ ಮಾರ್ಕೆಟಿಂಗ್ ಮತ್ತು ಸೋಶಿಯಲ್ ಮೀಡಿಯಾ ಸೇವೆಗಳು" : "Digital Marketing and Social Media Services"} 
        content={isKannada 
          ? "ಡಿಜಿಟಲ್ ಯುಗದಲ್ಲಿ, ಶಕ್ತಿಶಾಲಿ ಆನ್ಲೈನ್ ಹಾಜರಾತಿ ವ್ಯಾಪಾರ ಯಶಸ್ಸಿಗೆ ಅಗತ್ಯವಾಗಿದೆ. ನಮ್ಮ ಡಿಜಿಟಲ್ ಮಾರ್ಕೆಟಿಂಗ್ ಮತ್ತು ಸೋಶಿಯಲ್ ಮೀಡಿಯಾ ಸೇವೆಗಳು ನಿಮ್ಮ ಪ್ರೇಕ್ಷಕರನ್ನು ಪರಿಣಾಮಕಾರಿಯಾಗಿ ತಲುಪಲು ಮತ್ತು ನಿರ್ವಹಿಸಲು ವಿನ್ಯಾಸಗೊಳ್ಳುತ್ತವೆ. ಗುರಿಯ ನಿಯೋಜಿತ ಡಿಜಿಟಲ್ ಮಾರ್ಕೆಟಿಂಗ್ ತಂತ್ರಗಳನ್ನು ರೂಪಿಸಲು ಮತ್ತು ಚುರುಕಾದ ಸೋಶಿಯಲ್ ಮೀಡಿಯಾ ಪ್ರಚಾರಗಳನ್ನು ನಿರ್ವಹಿಸಲು, ನಾವು ಬೆಳವಣಿಗೆ ಮತ್ತು ನಿಮ್ಮ ಬ್ರ್ಯಾಂಡ್‌ಗಳ ದೃಶ್ಯತೆಯನ್ನು ಸುಧಾರಿಸಲು ಪರಿಹಾರಗಳನ್ನು ನೀಡುತ್ತೇವೆ." 
          : "In the digital age, a robust online presence is essential for business success. Our digital marketing and social media services are designed to help you reach and engage your audience effectively. From crafting targeted digital marketing strategies to managing dynamic social media campaigns, we provide solutions that drive growth and enhance your brand’s visibility."}
        image={image}
      />
      <CaseStudeis 
        content={isKannada 
          ? "ನಮ್ಮ ಡಿಜಿಟಲ್ ಮಾರ್ಕೆಟಿಂಗ್ ಮತ್ತು ಸೋಶಿಯಲ್ ಮೀಡಿಯಾ ಸೇವೆಗಳ ಮೂಲಕ ವ್ಯಾಪಾರಗಳನ್ನು ಹೇಗೆ ಬೆಳೆಸಲು ಮತ್ತು ಯಶಸ್ಸು ಸಾಧಿಸಲು ಸಹಾಯ ಮಾಡಿದ ಬಗ್ಗೆ ಅನಾವರಣಗೊಳಿಸಿ. ನಮ್ಮ ಪ್ರಕರಣ ಅಧ್ಯಯನಗಳು ನಮ್ಮ ತಂತ್ರಜ್ಞಾನಗಳ ಪರಿಣಾಮವನ್ನು ತೋರಿಸುತ್ತವೆ ಮತ್ತು ಯಶಸ್ವಿ ಯೋಜನೆಗಳು ಮತ್ತು ಫಲಿತಾಂಶಗಳನ್ನು ತೋರಿಸುತ್ತವೆ." 
          : "Explore how our digital marketing and social media services have helped businesses grow and succeed. Our case studies demonstrate the impact of our strategies and showcase successful projects and results."}
      />
      <Feedback/>
    </section>
  );
}

export default DigitalMarketing;
