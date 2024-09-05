import React from 'react';
import './style.css';
import visionimage from './vision.jpeg';
import Feedback from '../../components/feedback/Feedback';
import Aim from '../../components/aim/Aim';
import { useLanguage } from '../../components/hooks/LanguageContext';

const data = [
    {
        title: 'Digital Marketing Platforms',
        title_kn: 'ಡಿಜಿಟಲ್ ಮಾರುಕಟ್ಟೆ ವೇದಿಕೆಗಳು',
        points: [
            {
                heading: 'Increased Profitability',
                heading_kn: 'ಹೆಚ್ಚುವರಿ ಲಾಭಾಂಶ',
                desc: 'By selling directly to consumers, farmers can eliminate middlemen and retain a larger share of the profits.',
                desc_kn: 'ನೇರವಾಗಿ ಗ್ರಾಹಕರಿಗೆ ಮಾರಾಟ ಮಾಡುವ ಮೂಲಕ, ರೈತರು ಮಧ್ಯವರ್ತಿಗಳನ್ನು ಕೊಂದು, ಲಾಭದ ಹೆಚ್ಚು ಶೇರೂನ್ನು ಕಾಯ್ದುಕೊಳ್ಳಬಹುದು.'
            },
            {
                heading: 'Wider Market Reach',
                heading_kn: 'ವಿಸ್ತೃತ ಮಾರುಕಟ್ಟೆ ವ್ಯಾಪ್ತಿ',
                desc: 'Digital platforms allow farmers to reach consumers beyond their local markets, expanding their customer base.',
                desc_kn: 'ಡಿಜಿಟಲ್ ವೇದಿಕೆಗಳು ರೈತರನ್ನು ತಮ್ಮ ಸ್ಥಳೀಯ ಮಾರುಕಟ್ಟೆಗಳಿಗೆ ಮೀರಿಸಿ ಗ್ರಾಹಕರನ್ನು ತಲುಪಲು ಅನುಮತಿಸುತ್ತವೆ, ಅವರ ಗ್ರಾಹಕರನ್ನು ವಿಸ್ತಾರಗೊಳಿಸುತ್ತವೆ.'
            },
            {
                heading: 'Real-Time Sales Tracking',
                heading_kn: 'ವಾಸ್ತವಿಕ-ಕಾಲದ ಮಾರಾಟ ಅನ್ವೇಷಣೆ',
                desc: 'Farmers can monitor sales, inventory, and customer preferences instantly.',
                desc_kn: 'ರೈತರು ಮಾರಾಟ, ಇನ್‌ವೆಂಟರಿ, ಮತ್ತು ಗ್ರಾಹಕರ ಆಯ್ಕೆಗಳನ್ನು ತಕ್ಷಣವೇ ಪಟ್ಟಿ ಮಾಡಬಹುದು.'
            }
        ]
    },
    {
        title: 'Rural Market Hubs',
        title_kn: 'ಗ್ರಾಮೀಣ ಮಾರುಕಟ್ಟೆ ಹಬ್ಬುಗಳು',
        points: [
            {
                heading: 'Direct Consumer Interaction',
                heading_kn: 'ನೇರ ಗ್ರಾಹಕ ಸಂವಹನ',
                desc: 'Farmers can engage directly with consumers, leading to better pricing and understanding of market demands.',
                desc_kn: 'ರೈತರು ಗ್ರಾಹಕರೊಂದಿಗೆ ನೇರವಾಗಿ ಚರ್ಚೆ ಮಾಡಬಹುದು, ಇದು ಉತ್ತಮ ಬೆಲೆಯನ್ನು ಮತ್ತು ಮಾರುಕಟ್ಟೆ ಬೇಡಿಕೆಗಳ ಉತ್ತಮ ಅರ್ಥವನ್ನು ನೀಡುತ್ತದೆ.'
            },
            {
                heading: 'Reduced Transportation Costs',
                heading_kn: 'ಕಡಿಮೆ ಪ್ರಯಾಣ ಖರ್ಚುಗಳು',
                desc: 'Organized hubs in rural areas minimize the need for long-distance transportation, saving costs.',
                desc_kn: 'ಗ್ರಾಮೀಣ ಪ್ರದೇಶಗಳಲ್ಲಿ ಸಂಘಟಿತ ಹಬ್ಬುಗಳು ದೂರದ ಪ್ರಯಾಣದ ಅಗತ್ಯವನ್ನು ಕನಸು ಮಾಡುತ್ತವೆ, ವೆಚ್ಚವನ್ನು ಉಳಿಸುತ್ತವೆ.'
            },
            {
                heading: 'Community Development',
                heading_kn: 'ಸಮುದಾಯ ಅಭಿವೃದ್ಧಿ',
                desc: 'Market hubs can boost the local economy by attracting more business and creating jobs.',
                desc_kn: 'ಮಾರುಕಟ್ಟೆ ಹಬ್ಬುಗಳು ಹೆಚ್ಚು ವ್ಯವಹಾರವನ್ನು ಆಕರ್ಷಿಸುವ ಮೂಲಕ ಮತ್ತು ಉದ್ಯೋಗಗಳನ್ನು ಸೃಷ್ಟಿಸುವ ಮೂಲಕ ಸ್ಥಳೀಯ ಆರ್ಥಿಕತೆಯನ್ನು ಉತ್ತೇಜಿಸಬಹುದು.'
            }
        ]
    },
    {
        title: 'Ultra-Model Contributions',
        title_kn: 'ಅತೀ-ಮಾದರಿ ಕೊಡುಗೆಗಳು',
        points: [
            {
                heading: 'Diversified Income',
                heading_kn: 'ವಿವಿಧೀಕೃತ ಆದಾಯ',
                desc: 'Farmers can sell multiple products on a single platform, reducing dependency on a single crop and increasing income stability.',
                desc_kn: 'ರೈತರು ಒಬ್ಬದೇ ವೇದಿಕೆಯಲ್ಲಿ ಹಲವಾರು ಉತ್ಪನ್ನಗಳನ್ನು ಮಾರಬಹುದು, ಒಂದು ಓಟದ ಮೇಲೆ ಅವಲಂಬನೆಯಂತೆ ಕಡಿಮೆ ಮಾಡುತ್ತದೆ ಮತ್ತು ಆದಾಯ ಸ್ಥಿರತೆಯನ್ನು ಹೆಚ್ಚಿಸುತ್ತದೆ.'
            },
            {
                heading: 'Streamlined Sales Process',
                heading_kn: 'ಸರಳಗೊಳಿಸಲಾದ ಮಾರಾಟದ ಪ್ರಕ್ರಿಯೆ',
                desc: 'Selling various products together on one platform simplifies the sales process and enhances efficiency.',
                desc_kn: 'ಒಂದು ವೇದಿಕೆಯಲ್ಲಿ ಹಲವು ಉತ್ಪನ್ನಗಳನ್ನು ಮಾರಾಟ ಮಾಡುವ ಮೂಲಕ ಮಾರಾಟದ ಪ್ರಕ್ರಿಯೆ ಸರಳಗೊಳಿಸುತ್ತದೆ ಮತ್ತು ಸಮರ್ಥತೆಯನ್ನು ಸುಧಾರಿಸುತ್ತದೆ.'
            },
            {
                heading: 'Increased Consumer Choice',
                heading_kn: 'ಹೆಚ್ಚುವರಿ ಗ್ರಾಹಕ ಆಯ್ಕೆ',
                desc: 'Offering a variety of products attracts more customers and can lead to higher sales.',
                desc_kn: 'ವಿವಿಧ ಉತ್ಪನ್ನಗಳನ್ನು ನೀಡುವ ಮೂಲಕ ಹೆಚ್ಚು ಗ್ರಾಹಕರನ್ನು ಆಕರ್ಷಿಸುತ್ತದೆ ಮತ್ತು ಹೆಚ್ಚು ಮಾರಾಟಕ್ಕೆ ಕಾರಣವಾಗಬಹುದು.'
            }
        ]
    },
    {
        title: 'Market and Price Information Applications',
        title_kn: 'ಮಾರುಕಟ್ಟೆ ಮತ್ತು ಬೆಲೆಯ ಮಾಹಿತಿಯ ಅನ್ವಯಗಳು',
        points: [
            {
                heading: 'Informed Decision-Making',
                heading_kn: 'ಜ್ಞಾನ ಹೊಂದಿದ ನಿರ್ಣಯ-ಮೇಲೆ',
                desc: 'Access to real-time price information helps farmers decide when and where to sell their products for maximum profit.',
                desc_kn: 'ವಾಸ್ತವಿಕ-ಕಾಲದ ಬೆಲೆಯ ಮಾಹಿತಿಯ ಪ್ರವೇಶವು ರೈತರಿಗೆ ಹೆಚ್ಚು ಲಾಭಕ್ಕಾಗಿ ಯಾವಾಗ ಮತ್ತು ಎಲ್ಲಿಯೂ ತಮ್ಮ ಉತ್ಪನ್ನಗಳನ್ನು ಮಾರಲು ನಿರ್ಧಾರ ತೆಗೆದುಕೊಳ್ಳಲು ಸಹಾಯ ಮಾಡುತ್ತದೆ.'
            },
            {
                heading: 'Market Trend Analysis',
                heading_kn: 'ಮಾರುಕಟ್ಟೆ ಹಟ್ಟಣ ವಿಶ್ಲೇಷಣೆ',
                desc: 'Farmers can analyze market trends and adjust their production and sales strategies accordingly.',
                desc_kn: 'ರೈತರು ಮಾರುಕಟ್ಟೆ ಹಟ್ಟಣಗಳನ್ನು ವಿಶ್ಲೇಷಿಸಿ ತಮ್ಮ ಉತ್ಪಾದನೆ ಮತ್ತು ಮಾರಾಟದ ನಿಲುವುಗಳನ್ನು ಸಮರ್ಪಕವಾಗಿ ಸರಿಹೊಂದಿಸಬಹುದು.'
            },
            {
                heading: 'Risk Reduction',
                heading_kn: 'ಅಪಾಯದ ಕಡಿತ',
                desc: 'Knowledge of market prices reduces the risk of being underpaid or facing unexpected market fluctuations.',
                desc_kn: 'ಮಾರುಕಟ್ಟೆ ಬೆಲೆಗಳ ಅರಿವು ಕಡಿಮೆ ಮಾಡುವ ಮೂಲಕ ಕಡಿಮೆ ಪಾವತಿಸುವ ಅಪಾಯವನ್ನು ಅಥವಾ ನಿರೀಕ್ಷಿತ ಮಾರುಕಟ್ಟೆ ಬದಲಾವಣೆಗಳನ್ನು ಎದುರಿಸುವುದನ್ನು ಕಡಿಮೆ ಮಾಡುತ್ತದೆ.'
            }
        ]
    },
    {
        title: 'Agricultural Product Management and Packaging',
        title_kn: 'ಕೃಷಿ ಉತ್ಪನ್ನ ನಿರ್ವಹಣೆ ಮತ್ತು ಪ್ಯಾಕೇಜಿಂಗ್',
        points: [
            {
                heading: 'Improved Product Quality',
                heading_kn: 'ಮೇಲೆ ಉತ್ಪನ್ನದ ಗುಣಮಟ್ಟ',
                desc: 'Better packaging and storage maintain product freshness and quality, leading to higher market value.',
                desc_kn: 'ಹೆಚ್ಚಿನ ಪ್ಯಾಕೇಜಿಂಗ್ ಮತ್ತು ಸಂಗ್ರಹಣೆ ಉತ್ಪನ್ನದ تازಾ ಮತ್ತು ಗುಣಮಟ್ಟವನ್ನು ಉಳಿಸುತ್ತದೆ, ಇದು ಹೆಚ್ಚು ಮಾರುಕಟ್ಟೆ ಮೌಲ್ಯಕ್ಕೆ ಕಾರಣವಾಗುತ್ತದೆ.'
            },
            {
                heading: 'Extended Shelf Life',
                heading_kn: 'ಮಾರಾಟದ ಸಮಯ ವಿಸ್ತರಣೆ',
                desc: 'Proper packaging can extend the shelf life of products, reducing waste and increasing sales opportunities.',
                desc_kn: 'ಸುಧಾರಿತ ಪ್ಯಾಕೇಜಿಂಗ್ ಉತ್ಪನ್ನಗಳ ಶೆಲ್ಫ್ ಲೈಫ್ ಅನ್ನು ವಿಸ್ತಾರಗೊಳಿಸಬಹುದು, ವ್ಯರ್ಥವನ್ನು ಕಡಿಮೆ ಮಾಡುತ್ತದೆ ಮತ್ತು ಮಾರಾಟದ ಅವಕಾಶಗಳನ್ನು ಹೆಚ್ಚಿಸುತ್ತದೆ.'
            },
            {
                heading: 'Enhanced Brand Image',
                heading_kn: 'ಹೆಚ್ಚುವರಿ ಬ್ರಾಂಡ್ ಇಮೇಜ್',
                desc: 'Professionally packaged products create a more appealing brand image, attracting more consumers.',
                desc_kn: 'ಪರಿಪಾಠದಿಂದ ಪ್ಯಾಕೇಜಿಂಗ್ ಉತ್ಪನ್ನಗಳು ಹೆಚ್ಚು ಆಕರ್ಷಕ ಬ್ರಾಂಡ್ ಇಮೇಜ್ ಅನ್ನು ಸೃಷ್ಟಿಸುತ್ತವೆ, ಹೆಚ್ಚು ಗ್ರಾಹಕರನ್ನು ಆಕರ್ಷಿಸುತ್ತವೆ.'
            }
        ]
    },
    {
        title: 'Collaborative Farming Initiatives',
        title_kn: 'ಒಟ್ಟುಗೂಡಿಸಿದ ಕೃಷಿ ಚಟುವಟಿಕೆಗಳು',
        points: [
            {
                heading: 'Shared Resources',
                heading_kn: 'ಹಂಚಿಕೊಂಡ ಸಂಪತ್ತುಗಳು',
                desc: 'Farmers can pool resources, such as equipment and knowledge, reducing costs and improving efficiency.',
                desc_kn: 'ರೈತರು ಸಂಪತ್ತುಗಳನ್ನು, ಉದಾಹರಣೆಗೆ ಉಪಕರಣಗಳು ಮತ್ತು ನೈಪುಣ್ಯ, ಹಂಚಿಕೊಳ್ಳಬಹುದು, ವೆಚ್ಚಗಳನ್ನು ಕಡಿಮೆ ಮಾಡುತ್ತದೆ ಮತ್ತು ಸಮರ್ಥತೆಯನ್ನು ಸುಧಾರಿಸುತ್ತದೆ.'
            },
            {
                heading: 'Stronger Bargaining Power',
                heading_kn: 'ಶಕ್ತಿಶಾಲಿ ವ್ಯಾಪಾರ ಶಕ್ತಿ',
                desc: 'Collaboratives can negotiate better prices and terms with buyers due to the increased volume of products.',
                desc_kn: 'ಸಹಕರಣೆಗಳು ಹೆಚ್ಚಿದ ಉತ್ಪನ್ನಗಳ ಪ್ರಮಾಣದಿಂದ ಖರೀದಿದಾರರೊಂದಿಗೆ ಉತ್ತಮ ಬೆಲೆಗಳು ಮತ್ತು ಶರತ್ತುಗಳನ್ನು ಒಪ್ಪಿಸುವ ಸಾಧ್ಯತೆ ಇದೆ.'
            },
            {
                heading: 'Community Support',
                heading_kn: 'ಸಮುದಾಯ ಬೆಂಬಲ',
                desc: 'Collaboration fosters a sense of community and support among farmers, leading to shared success and innovation.',
                desc_kn: 'ಸಹಕಾರ ರೈತರು ಮಧ್ಯೆ ಸಮುದಾಯದ ಅನುಭವ ಮತ್ತು ಬೆಂಬಲವನ್ನು ಉತ್ತೇಜಿಸುತ್ತದೆ, ಹಂಚಿಕೊಂಡ ಯಶಸ್ಸು ಮತ್ತು ಹೊಸತೆಯ ಬಗ್ಗೆ ತಲುಪಿಸುತ್ತದೆ.'
            }
        ]
    }
];

function Vision() {
  const { isKannada } = useLanguage(); // Hook to determine the selected language

  return (
    <section className='about-container'>
        <div className="banner-top">
            <h1 className="fs-1 fw-bold text-light">
              {isKannada ? 'ದೃಷ್ಟಿ ಮತ್ತು ಮಿಷನ್' : 'Vision and Mission'}
            </h1>
        </div>
        <div className="container-fluid p-3 p-md-5 py-4">
            <div className="row">
                <div className="col-md-6">
                    <h6 className="fs-6 text-green">
                      {isKannada ? 'ದೃಷ್ಟಿ ಮತ್ತು ಮಿಷನ್' : 'Vision & Mission'}
                    </h6>
                    <h1 className="fs-2 fw-bold text-green">
                      {isKannada ? 'ನಮ್ಮ ಮಿಷನ್' : 'Our Mission'}
                    </h1>
                    <big className='text-secondary'>
                      <i>
                        {isKannada 
                          ? 'ಮಟ್ಟದ ಶ್ರೇಣಿಯು ಮತ್ತು ಮಾರುಕಟ್ಟೆ ವ್ಯಾಪ್ತಿಯನ್ನು ಉತ್ತಮ ಪ್ಯಾಕೇಜಿಂಗ್ ಮತ್ತು ಲಾಜಿಸ್ಟಿಕ್ಸ್ ಮೂಲಕ ಸುಧಾರಿಸುವುದು'
                          : 'Enhancing Product Quality and Market Reach through Superior Packaging and Logistics'}
                      </i>
                    </big>
                    <p className="fs-6 text-green mt-3">
                      {isKannada 
                        ? 'ಗ್ರಾಹಕರಿಗೆ ನೇರವಾಗಿ ಮಾರಾಟ ಮಾಡುವ ಮೂಲಕ, ರೈತರು ಮಧ್ಯವರ್ತಿಗಳನ್ನು ಕೊಂದು, ಲಾಭದ ಹೆಚ್ಚು ಶೇರೂನ್ನು ಕಾಯ್ದುಕೊಳ್ಳಬಹುದು.'
                        : 'To empower farmers by revolutionizing agricultural marketing through innovative digital solutions, efficient market hubs, and advanced product management, ensuring increased profitability, market access, and reduced market fluctuations'}
                    </p>
                    <hr />
                    <h1 className="fs-2 fw-bold text-green">
                      {isKannada ? 'ನಮ್ಮ ಮಿಷನ್' : 'Our Mission'}
                    </h1>
                    <big className='text-secondary'>
                      <i>
                        {isKannada 
                          ? 'ಆಧುನಿಕ ತಂತ್ರಗಳನ್ನು ಬಳಸಿಕೊಂಡು ರೈತರ ಆದಾಯ ಮತ್ತು ಮಾರುಕಟ್ಟೆ ಸ್ಥಿರತೆಯನ್ನು ಸುಧಾರಿಸುವುದು'
                          : 'Implementing Cutting-Edge Strategies to Boost Farmer Incomes and Market Stability'}
                      </i>
                    </big>
                    <p className="fs-6 text-green mt-3">
                      {isKannada 
                        ? 'ಆಧುನಿಕ ಡಿಜಿಟಲ್ ಮಾರುಕಟ್ಟೆ ವೇದಿಕೆಗಳನ್ನು ಸ್ಥಾಪಿಸುವ ಮೂಲಕ, ಸಂಘಟಿತ ಗ್ರಾಮೀಣ ಮಾರುಕಟ್ಟೆ ಹಬ್ಬುಗಳನ್ನು ಸ್ಥಾಪಿಸುವ ಮೂಲಕ, ಮತ್ತು ಸಂಪೂರ್ಣ ಮಾರಾಟ ಮಾದರಿಗಳನ್ನು ಸೃಷ್ಟಿಸುವ ಮೂಲಕ ರೈತರ ಆದಾಯ ಮತ್ತು ಮಾರುಕಟ್ಟೆ ಸ್ಥಿರತೆಯನ್ನು ಸುಧಾರಿಸಲು ನಮ್ಮ ಗುರಿ.'
                        : 'Our mission is to enhance farmers\' incomes and market stability by implementing cutting-edge digital marketing platforms, establishing organized rural market hubs, and creating integrated sales models. We aim to provide farmers with essential market and price information, along with superior packaging and logistics solutions, to optimize their product quality and expand their market reach.'}
                    </p>
                    <h3 className="fs-4">
                      {isKannada ? 'ಕೃಷಿ ಮಾರುಕಟ್ಟೆಗೆ ಸಂಬಂಧಿಸಿದ ಹೊಸ ಕಲ್ಪನೆಗಳು ಮತ್ತು ಯೋಜನೆಗಳು' : 'New Ideas and Plans Related to Agricultural Marketing'}
                    </h3>
                    <ul>
                        {data.map((item, index) => (
                            <li key={index} data-aos="fade-up">
                              {isKannada ? item.title_kn : item.title}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="col-md-6 d-flex align-items-center justify-content-center mt-4">
                    <img src={visionimage} alt="vision kalki agri" className="w-75 rounded-4 border-green" />
                </div>
            </div>
        </div>
        <Aim />
        <Feedback />
    </section>
  );
}

export default Vision;
