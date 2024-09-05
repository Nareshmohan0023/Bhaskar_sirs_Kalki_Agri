import React from 'react';
import Banner from './Banner';
import Overview from './Overview';
import image from './images/marketing.jpeg';
import { Link } from 'react-router-dom';
import Feedback from '../../components/feedback/Feedback';
import CaseStudeis from './CaseStudeis';
import { useLanguage } from '../../components/hooks/LanguageContext';

function MarketandResearch() {
  const { isKannada } = useLanguage();

  return (
    <section className='service-container'>
      <Banner 
        title={isKannada ? "ಮಾರುಕಟ್ಟೆ ಅಧ್ಯಯನ ಮತ್ತು ವಿಶ್ಲೇಷಣೆ ಕೃಷಿಯು" : "Market Research and Analysis for Agriculture"} 
        subtitle={isKannada ? "ಕೃಷಿ ಕ್ಷೇತ್ರದ ಮಾರುಕಟ್ಟೆ ಚಲನಶೀಲತೆಯನ್ನು ಅರ್ಥಮಾಡಿಕೊಳ್ಳಲು ಮತ್ತು ಬಳಸಲು ನಿಮ್ಮ ಗೇಟ್ವೇ" : "Your gateway to understanding and leveraging market dynamics in the agricultural sector."}
      />
      <Overview 
        title={isKannada ? "ಮಾರುಕಟ್ಟೆ ಅಧ್ಯಯನ ಮತ್ತು ವಿಶ್ಲೇಷಣೆ ಕೃಷಿಯು" : "Market Research and Analysis for Agriculture"} 
        content={isKannada 
          ? "ಶಾಶ್ವತವಾಗಿ ಅಭಿವೃದ್ಧಿಯಾಗುತ್ತಿರುವ ಕೃಷಿ ಉದ್ಯಮದಲ್ಲಿ, ಮಾರುಕಟ್ಟೆ ಪ್ರವೃತ್ತಿಗಳ ಮುಂದೆ ಇರುತ್ತದೆ ಯಶಸ್ಸಿಗೆ ಅತ್ಯಂತ ಮುಖ್ಯವಾಗಿದೆ. ನಮ್ಮ ಸಮಗ್ರ ಮಾರುಕಟ್ಟೆ ಅಧ್ಯಯನ ಮತ್ತು ವಿಶ್ಲೇಷಣೆ ಸೇವೆಗಳು ನಿಮಗೆ ಶ್ರೇಷ್ಠ ತೀರ್ಮಾನಗಳನ್ನು ಮಾಡಲು ಕ್ರಿಯಾತ್ಮಕ ಮಾಹಿತಿಗಳನ್ನು ನೀಡಲು ವಿನ್ಯಾಸಗೊಳ್ಳುತ್ತವೆ. ನೀವು ಉದಯೋನ್ಮುಖ ಪ್ರವೃತ್ತಿಗಳನ್ನು ಅರ್ಥಮಾಡಿಕೊಳ್ಳಲು, ಸ್ಪರ್ಧಾತ್ಮಕ ನೋಟವನ್ನು ವಿಶ್ಲೇಷಿಸಲು, ಅಥವಾ ಗ್ರಾಹಕರ ಪ್ರಾಧಾನ್ಯತೆಗಳನ್ನು ಅಳೆಯಲು ಹೋರಾಡುತ್ತಿದ್ದೀರಾ, ನಾವು ಕೃಷಿ ಮಾರುಕಟ್ಟೆ ಯ ಕೀಳಮಟ್ಟವನ್ನು ನಾವಿಗೇ ನೀವು ವೈಯಕ್ತಿಕ ಪರಿಹಾರಗಳನ್ನು ನೀಡುತ್ತೇವೆ." 
          : "In the ever-evolving agricultural industry, staying ahead of market trends is crucial for success. Our comprehensive market research and analysis services are designed to provide you with actionable insights to make informed decisions. Whether you're looking to understand emerging trends, analyze competitive landscapes, or gauge consumer preferences, we offer tailored solutions to help you navigate the complexities of the agricultural market."}
        image={image}
      />
      <CaseStudeis 
        content={isKannada 
          ? "ನಮ್ಮ ಬ್ರ್ಯಾಂಡಿಂಗ್ ಮತ್ತು ಮಾರುಕಟ್ಟೆ ಸೇವೆಗಳು ವ್ಯವಹಾರಗಳನ್ನು ಹೇಗೆ ಪರಿವರ್ತಿತಗೊಳಿಸಿವೆ ಮತ್ತು ಯಶಸ್ಸು ಸಾಧಿಸುತ್ತವೆ ಎಂಬುದನ್ನು ಅನಾವರಣಗೊಳಿಸಿ. ನಮ್ಮ ಪ್ರಕರಣ ಅಧ್ಯಯನಗಳು ಯಶಸ್ವಿ ಯೋಜನೆಗಳು ಮತ್ತು ನಮ್ಮ ತಂತ್ರಜ್ಞಾನಗಳ ಪ್ರಮಾಣಿತ ಪರಿಣಾಮವನ್ನು ಹೈಲೈಟ್ ಮಾಡುತ್ತವೆ." 
          : "Discover how our branding and advertising services have transformed businesses and driven success. Our case studies highlight successful projects and the measurable impact of our strategies."}
      />
      <Feedback/>
    </section>
  );
}

export default MarketandResearch;
