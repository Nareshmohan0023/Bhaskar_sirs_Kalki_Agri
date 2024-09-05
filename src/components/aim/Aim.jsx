import React from 'react';
import './style.css';
import image1 from './images/image1.jpeg';
import image2 from './images/image2.jpeg';
import image3 from './images/image3.jpeg';
import image4 from './images/image4.jpeg';
import image5 from './images/image5.jpeg';
import image6 from './images/image6.jpeg';
import { useLanguage } from '../hooks/LanguageContext';

const data = [
    {
        title: 'Digital Marketing Platforms',
        title_kn: 'ಡಿಜಿಟಲ್ ಮಾರುಕಟ್ಟೆ ವೇದಿಕೆಗಳು',
        desc: 'Farmers can use digital platforms to sell their products directly to consumers, reducing the number of middlemen and increasing profitability.',
        desc_kn: 'ರೈತರು ಡಿಜಿಟಲ್ ವೇದಿಕೆಗಳನ್ನು ಬಳಸಿ ತಮ್ಮ ಉತ್ಪನ್ನಗಳನ್ನು ನೇರವಾಗಿ ಗ್ರಾಹಕರಿಗೆ ಮಾರಬಹುದು, ಮಧ್ಯವರ್ತಿಗಳ ಸಂಖ್ಯೆಯನ್ನು ಕಡಿಮೆ ಮಾಡಬಹುದು ಮತ್ತು ಲಾಭವನ್ನು ಹೆಚ್ಚಿಸಬಹುದು.',
        image: image1
    },
    {
        title: 'Rural Market Hubs',
        title_kn: 'ಗ್ರಾಮೀಣ ಮಾರುಕಟ್ಟೆ ಹಬ್ಬುಗಳು',
        desc: 'By establishing organized and high-quality market hubs in rural areas, farmers can directly connect with consumers and get better prices.',
        desc_kn: 'ಗ್ರಾಮೀಣ ಪ್ರದೇಶಗಳಲ್ಲಿ ಸಂಘಟಿತ ಮತ್ತು ಗುಣಮಟ್ಟದ ಮಾರುಕಟ್ಟೆ ಹಬ್ಬುಗಳನ್ನು ಸ್ಥಾಪಿಸುವ ಮೂಲಕ, ರೈತರು ನೇರವಾಗಿ ಗ್ರಾಹಕರೊಂದಿಗೆ ಸಂಪರ್ಕ ಸಾಧಿಸಬಹುದು ಮತ್ತು ಉತ್ತಮ ಬೆಲೆಗಳನ್ನು ಪಡೆಯಬಹುದು.',
        image: image2
    },
    {
        title: 'Ultra-Model Contributions',
        title_kn: 'ಅತೀ-ಮಾದರಿ ಕೊಡುಗೆಗಳು',
        desc: 'Creating new models that allow farmers to sell multiple products on a single platform, facilitating the sale of various products together.',
        desc_kn: 'ಒಬ್ಬದೇ ವೇದಿಕೆಯಲ್ಲಿ ಹಲವಾರು ಉತ್ಪನ್ನಗಳನ್ನು ಮಾರಲು ರೈತರಿಗೆ ಅವಕಾಶ ನೀಡುವ ಹೊಸ ಮಾದರಿಗಳನ್ನು ಸೃಷ್ಟಿಸುವುದು, ಹಲವಾರು ಉತ್ಪನ್ನಗಳನ್ನು ಒಟ್ಟಾಗಿ ಮಾರಾಟ ಮಾಡಲು ಸಹಾಯ ಮಾಡುತ್ತದೆ.',
        image: image3
    },
    {
        title: 'Market and Price Information Applications',
        title_kn: 'ಮಾರುಕಟ್ಟೆ ಮತ್ತು ಬೆಲೆಯ ಮಾಹಿತಿಯ ಅನ್ವಯಗಳು',
        desc: 'Developing applications that provide farmers with local and national market price information to help them make informed business decisions.',
        desc_kn: 'ಸ್ಥಳೀಯ ಮತ್ತು ರಾಷ್ಟ್ರೀಯ ಮಾರುಕಟ್ಟೆ ಬೆಲೆ ಮಾಹಿತಿಯನ್ನು ರೈತರಿಗೆ ಒದಗಿಸುವ ಅನ್ವಯಗಳನ್ನು ಅಭಿವೃದ್ಧಿಪಡಿಸುವುದು, ಅವರು ಜ್ಞಾನ ಹೊಂದಿದ ವ್ಯಾಪಾರ ನಿರ್ಧಾರಗಳನ್ನು ತೆಗೆದುಕೊಳ್ಳಲು ಸಹಾಯ ಮಾಡುತ್ತದೆ.',
        image: image4
    },
    {
        title: 'Agricultural Product Management and Packaging',
        title_kn: 'ಕೃಷಿ ಉತ್ಪನ್ನ ನಿರ್ವಹಣೆ ಮತ್ತು ಪ್ಯಾಕೇಜಿಂಗ್',
        desc: 'Providing better packaging, storage, and logistics solutions to improve the quality of farmers\' products and increase their market reach.',
        desc_kn: 'ರೈತಗಳ ಉತ್ಪನ್ನಗಳ ಗುಣಮಟ್ಟವನ್ನು ಸುಧಾರಿಸಲು ಮತ್ತು ಅವರ ಮಾರುಕಟ್ಟೆ ವ್ಯಾಪ್ತಿಯನ್ನು ವಿಸ್ತಾರಗೊಳಿಸಲು ಉತ್ತಮ ಪ್ಯಾಕೇಜಿಂಗ್, ಸಂಗ್ರಹಣೆ, ಮತ್ತು ಲಾಜಿಸ್ಟಿಕ್ಸ್ ಪರಿಹಾರಗಳನ್ನು ಒದಗಿಸುವುದು.',
        image: image5
    },
    {
        title: 'Collaborative Farming Initiatives',
        title_kn: 'ಒಟ್ಟುಗೂಡಿಸಿದ ಕೃಷಿ ಚಟುವಟಿಕೆಗಳು',
        desc: 'Encouraging farmers to form cooperatives or partnerships to pool resources, share knowledge, and collectively market their products for better bargaining power and market access.',
        desc_kn: 'ಸಂಪತ್ತುಗಳನ್ನು ಹಂಚಿಕೊಳ್ಳಲು, ಜ್ಞಾನವನ್ನು ಹಂಚಿಕೊಳ್ಳಲು, ಮತ್ತು ಉತ್ತಮ ವ್ಯಾಪಾರ ಶಕ್ತಿಯ ಮತ್ತು ಮಾರುಕಟ್ಟೆ ಪ್ರವೇಶಕ್ಕಾಗಿ ಅವರ ಉತ್ಪನ್ನಗಳನ್ನು ಒಟ್ಟಾಗಿ ಮಾರುಕಟ್ಟೆ ಮಾಡುವುದಕ್ಕಾಗಿ ರೈತರಿಗೆ ಸಹಕಾರಿ ಅಥವಾ ಭಾಗದರ್ಶಕರನ್ನು ರೂಪಿಸಲು ಪ್ರೋತ್ಸಾಹಿಸುವುದು.',
        image: image6
    }
];

function Aim() {
  const { isKannada } = useLanguage(); // Hook to determine the selected language

  return (
    <section className='container-fluid p-3 p-md-5 bg-orange1'>
        <div className="text-center">
            <h1 className="fs-1 fw-bold text-green" data-aos="fade-up">
              {isKannada ? 'ನವೀನ ಕೃಷಿ ಮಾರುಕಟ್ಟೆ ತಂತ್ರಗಳು' : 'Innovative Agricultural Marketing Strategies'}
            </h1>
            <p className="fs-5 text-green" data-aos="fade-up">
              {isKannada ? 'ರೈತರನ್ನು ಶಕ್ತಿ ನೀಡುವುದು ಮತ್ತು ಮಾರುಕಟ್ಟೆ ಪ್ರವೇಶವನ್ನು ಸುಧಾರಿಸುವುದು' : 'Empowering Farmers and Enhancing Market Access'}
            </p>
        </div>

        <div className="row mt-5">
            {data.map((item, index) => (
                <div className="col-md-4 mb-3" key={index}>
                    <div className="border-green bg-orange2 p-3 h-100 rounded-4" data-aos="fade-up">
                        <img src={item.image} alt={isKannada ? item.title_kn : item.title} className="w-100 rounded-4 mb-3" />
                        <h1 className="fs-4 text-green">{isKannada ? item.title_kn : item.title}</h1>
                        <p className="fs-6 text-green">{isKannada ? item.desc_kn : item.desc}</p>
                    </div>
                </div>
            ))}
        </div>
    </section>
  );
}

export default Aim;
