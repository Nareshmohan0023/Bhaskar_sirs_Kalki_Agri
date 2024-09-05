import React from 'react';
import Banner from './Banner';
import Overview from './Overview';
import image from './images/trading.jpeg';
import { Link } from 'react-router-dom';
import Feedback from '../../components/feedback/Feedback';
import CaseStudeis from './CaseStudeis';
import { useLanguage } from '../../components/hooks/LanguageContext';

function Trading() {
  const { isKannada } = useLanguage();

  return (
    <section className='service-container'>
      <Banner 
        title={isKannada ? "ಟ್ರೇಡ್ ಶೋ ಮತ್ತು इವೆಂಟ್ ప్రమೋషನ್ ಸೇವೆಗಳು" : "Trade Show and Event Promotion Services"}
        subtitle={isKannada ? "ನಿಮ್ಮ ಕಾರ್ಯಕ್ರಮವನ್ನು ಅನನ್ಯ ಅನುಭವಗಳನ್ನು ಸೃಷ್ಟಿ ಮಾಡಿ ಮತ್ತು ನಮ್ಮ ಪರಿಣತ ಸ್ಥಳಾಂತರ ಪರಿಹಾರಗಳೊಂದಿಗೆ ಪ್ರಭಾವವನ್ನು ನಿರ್ವಹಿಸಿ." : "Create unforgettable experiences and drive engagement with our expert event promotion solutions."}
      />
      <Overview 
        title={isKannada ? "ಟ್ರೇಡ್ ಶೋ ಮತ್ತು इವೆಂಟ್ ప్రమೋಷನ್ ಸೇವೆಗಳು" : "Trade Show and Event Promotion Services"}
        content={isKannada ? "ಮೊದಲನೆಯದಾಗಿ, ಪರಿಣಾಮಕಾರಿ promoção ಒಂದು ಯಶಸ್ವಿ ವ್ಯಾಪಾರ ಅಥವಾ ಘಟನೆಗೆ ಮುಖ್ಯವಾಗಿದೆ. ನಮ್ಮ ಟ್ರೇಡ್ ಶೋ ಮತ್ತು ಇವೆಂಟ್ ప్రమೋಷನ್ ಸೇವೆಗಳು ನಿಮ್ಮ ಕಾರ್ಯಕ್ರಮವನ್ನು ಕಪೋಟ್ ಮಾಡಲು ಸಹಾಯ ಮಾಡಲು ವಿನ್ಯಾಸಗೊಳ್ಳಲಾಗಿದೆ, ವಿಸ್ತರಣೆಯನ್ನು ಮಕ್ಸಿಮ್ಮಾಯ್ಸ್ ಮಾಡಲು ಮತ್ತು ನಿಮ್ಮ ಘಟನೆ ಗುರಿಗಳನ್ನು ಸಾಧಿಸಲು. ತಂತ್ರಾಂಶ ಯೋಜನೆ ಮತ್ತು ಮಾರ್ಕೆಟಿಂಗ್ ಅನ್ನು ಇವೆಂಟ್ ಸ್ಥಳದಲ್ಲಿ ನಿರ್ವಹಣೆ ಮತ್ತು ನಂತರದ ಘಟನೆ ನಂತರ ಅನುಸರಿಸಲು ನಾವು ಸಂಪೂರ್ಣ ಪರಿಹಾರಗಳನ್ನು ನೀಡುತ್ತೇವೆ." : "Effective promotion is key to a successful trade show or event. Our Trade Show and Event Promotion services are designed to help you attract the right audience, maximize visibility, and achieve your event goals. From strategic planning and marketing to on-site management and post-event follow-up, we provide comprehensive solutions to ensure your event stands out and delivers results."}
        image={image}
      />
      <CaseStudeis 
        content={isKannada ? "ನಮ್ಮ ಟ್ರೇಡ್ ಶೋ ಮತ್ತು ಇವೆಂಟ್ ಪ್ರಮೋಷನ್ ಸೇವೆಗಳು ಹೇಗೆ ಕ್ಲೈಂಟ್‌ಗಳಿಗೆ ಅವರ ಘಟನೆ ಗುರಿಗಳನ್ನು ಸಾಧಿಸಲು ಸಹಾಯ ಮಾಡಿವೆ ಎಂಬುದನ್ನು ನೋಡಿ. ನಮ್ಮ ಪ್ರಕರಣ ಅಧ್ಯಯನಗಳು ಯಶಸ್ವಿ ಯೋಜನೆಗಳನ್ನು ಮತ್ತು ನಮ್ಮ ಪ್ರಚಾರಾತ್ಮಕ ತಂತ್ರಗಳ ಸಕಾರಾತ್ಮಕ ಪರಿಣಾಮವನ್ನು ಹೈಲೈಟ್ ಮಾಡುತ್ತವೆ." : "See how our Trade Show and Event Promotion services have helped clients achieve their event goals. Our case studies highlight successful projects and the positive impact of our promotional strategies."}
      />
      <Feedback/>
    </section>
  );
}

export default Trading;
