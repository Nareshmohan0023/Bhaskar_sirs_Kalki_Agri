import React from 'react';
import './style.css';
import aboutimage from './aboutimage.jpeg';
import Feedback from '../../components/feedback/Feedback';
import { useLanguage } from '../../components/hooks/LanguageContext';

const data = [
    {
        title: 'Digital Marketing Platforms',
        title_kn: 'ಡಿಜಿಟಲ್ ಮಾರ್ಕೆಟಿಂಗ್ ಪ್ಲ್ಯಾಟ್‌ಫಾರ್ಮ್‌ಗಳು',
        points: [
            {
                heading: 'Increased Profitability',
                heading_kn: 'ಲಾಭದಾಯಕತೆಯ ಹೆಚ್ಚಳ',
                desc: 'By selling directly to consumers, farmers can eliminate middlemen and retain a larger share of the profits.',
                desc_kn: 'ಗ್ರಾಹಕರಿಗೆ ನೇರವಾಗಿ ಮಾರಾಟ ಮಾಡುವ ಮೂಲಕ, ರೈತರು ಮಧ್ಯವರ್ತಿಗಳನ್ನು ತೊರೆದು ಲಾಭದ ಹೆಚ್ಚಿನ ಹಂಚಿಕೆ ಹೊಂದಬಹುದು.'
            },
            {
                heading: 'Wider Market Reach',
                heading_kn: 'ವಿಸ್ತೃತ ಮಾರುಕಟ್ಟೆ ತಲುಪುವಿಕೆ',
                desc: 'Digital platforms allow farmers to reach consumers beyond their local markets, expanding their customer base.',
                desc_kn: 'ಡಿಜಿಟಲ್ ಪ್ಲಾಟ್‌ಫಾರ್ಮ್‌ಗಳು ರೈತರಿಗೆ ಸ್ಥಳೀಯ ಮಾರುಕಟ್ಟೆಗಳಿಗಿಂತಲೂ ಮೀರಿ ಗ್ರಾಹಕರನ್ನು ತಲುಪಲು ಅನುಮತಿಸುತ್ತವೆ, ಗ್ರಾಹಕರ ವಲಯವನ್ನು ವಿಸ್ತರಿಸುತ್ತವೆ.'
            },
            {
                heading: 'Real-Time Sales Tracking',
                heading_kn: 'ತಕ್ಷಣದ ಮಾರಾಟದ ಟ್ರ್ಯಾಕಿಂಗ್',
                desc: 'Farmers can monitor sales, inventory, and customer preferences instantly.',
                desc_kn: 'ರೈತರು ಮಾರಾಟ, ಇನ್‌ವೆಂಟರಿ, ಮತ್ತು ಗ್ರಾಹಕರ ಆಸ್ಥಿಗಳನ್ನು ತಕ್ಷಣವೇ ಮೇಲ್ವಿಚಾರಣೆ ಮಾಡಬಹುದು.'
            }
        ]
    },
    {
        title: 'Rural Market Hubs',
        title_kn: 'ಗ್ರಾಮೀಣ ಮಾರುಕಟ್ಟೆ ಕೇಂದ್ರಗಳು',
        points: [
            {
                heading: 'Direct Consumer Interaction',
                heading_kn: 'ನೇರ ಗ್ರಾಹಕರ ಸಂಪರ್ಕ',
                desc: 'Farmers can engage directly with consumers, leading to better pricing and understanding of market demands.',
                desc_kn: 'ರೈತರು ಗ್ರಾಹಕರೊಂದಿಗೆ ನೇರವಾಗಿ ಸಂಪರ್ಕಿಸಬಹುದು, ಇದು ಉತ್ತಮ ಬೆಲೆ ಮತ್ತು ಮಾರುಕಟ್ಟೆ ಬೇಡಿಕೆಗಳ ಅರಿವಿಗೆ ಕಾರಣವಾಗುತ್ತದೆ.'
            },
            {
                heading: 'Reduced Transportation Costs',
                heading_kn: 'ಕಡಿಮೆ ಸಾರಿಗೆ ವೆಚ್ಚಗಳು',
                desc: 'Organized hubs in rural areas minimize the need for long-distance transportation, saving costs.',
                desc_kn: 'ಗ್ರಾಮೀಣ ಪ್ರದೇಶಗಳಲ್ಲಿ ಸಂಘಟಿತ ಕೇಂದ್ರಗಳು ದೀರ್ಘ ದೂರದ ಸಾರಿಗೆ ಅವಶ್ಯಕತೆಯನ್ನು ಕಡಿಮೆ ಮಾಡುತ್ತವೆ, ವೆಚ್ಚಗಳನ್ನು ಉಳಿಸುತ್ತವೆ.'
            },
            {
                heading: 'Community Development',
                heading_kn: 'ಸಮುದಾಯದ ಅಭಿವೃದ್ಧಿ',
                desc: 'Market hubs can boost the local economy by attracting more business and creating jobs.',
                desc_kn: 'ಮಾರುಕಟ್ಟೆ ಕೇಂದ್ರಗಳು ಸ್ಥಳೀಯ ಆರ್ಥಿಕತೆಯನ್ನು ಉತ್ತೇಜಿಸಬಹುದು, ಹೆಚ್ಚಿನ ವ್ಯವಹಾರಗಳನ್ನು ಆಕರ್ಷಿಸಿ ಉದ್ಯೋಗಗಳನ್ನು ಸೃಷ್ಟಿಸಬಹುದು.'
            }
        ]
    },
    {
        title: 'Ultra-Model Contributions',
        title_kn: 'ಅಲ್ಟ್ರಾ-ಮಾದರಿ ಕೊಡುಗೆಗಳು',
        points: [
            {
                heading: 'Diversified Income',
                heading_kn: 'ವಿವಿಧೀಕೃತ ಆದಾಯ',
                desc: 'Farmers can sell multiple products on a single platform, reducing dependency on a single crop and increasing income stability.',
                desc_kn: 'ರೈತರು ಒಂದೇ ವೇದಿಕೆಯಲ್ಲಿ ಹಲವಾರು ಉತ್ಪನ್ನಗಳನ್ನು ಮಾರಾಟ ಮಾಡಬಹುದು, ಇದರಿಂದ ಒಂದು ಬೆಳೆ ಮೇಲಿನ ಅವಲಂಬನೆಯು ಕಡಿಮೆಯಾಗುತ್ತದೆ ಮತ್ತು ಆದಾಯದ ಸ್ಥಿರತೆಯನ್ನು ಹೆಚ್ಚಿಸುತ್ತದೆ.'
            },
            {
                heading: 'Streamlined Sales Process',
                heading_kn: 'ಸರಳಗೊಳಿಸಿದ ಮಾರಾಟ ಪ್ರಕ್ರಿಯೆ',
                desc: 'Selling various products together on one platform simplifies the sales process and enhances efficiency.',
                desc_kn: 'ಹಲವಾರು ಉತ್ಪನ್ನಗಳನ್ನು ಒಂದೇ ವೇದಿಕೆಯಲ್ಲಿ ಮಾರಾಟ ಮಾಡುವ ಮೂಲಕ ಮಾರಾಟದ ಪ್ರಕ್ರಿಯೆಯನ್ನು ಸುಲಭಗೊಳಿಸುತ್ತದೆ ಮತ್ತು ಕಾರ್ಯಕ್ಷಮತೆಯನ್ನು ಹೆಚ್ಚಿಸುತ್ತದೆ.'
            },
            {
                heading: 'Increased Consumer Choice',
                heading_kn: 'ಗ್ರಾಹಕರ ಆಯ್ಕೆಯ ಹೆಚ್ಚಳ',
                desc: 'Offering a variety of products attracts more customers and can lead to higher sales.',
                desc_kn: 'ವಿವಿಧ ಉತ್ಪನ್ನಗಳನ್ನು ಒದಗಿಸುವ ಮೂಲಕ ಹೆಚ್ಚಿನ ಗ್ರಾಹಕರನ್ನು ಆಕರ್ಷಿಸಬಹುದು ಮತ್ತು ಹೆಚ್ಚಿನ ಮಾರಾಟವನ್ನು ತರುವ ಸಾಧ್ಯತೆಯಿದೆ.'
            }
        ]
    },
    {
        title: 'Market and Price Information Applications',
        title_kn: 'ಮಾರುಕಟ್ಟೆ ಮತ್ತು ಬೆಲೆ ಮಾಹಿತಿ ಅಪ್ಲಿಕೇಶನ್‌ಗಳು',
        points: [
            {
                heading: 'Informed Decision-Making',
                heading_kn: 'ಅರಿವಿನ ಆಧಾರದ ಮೇಲೆ ತೀರ್ಮಾನಗಳನ್ನು ತೆಗೆದುಕೊಳ್ಳುವಿಕೆ',
                desc: 'Access to real-time price information helps farmers decide when and where to sell their products for maximum profit.',
                desc_kn: 'ತಕ್ಷಣದ ಬೆಲೆ ಮಾಹಿತಿಯು ರೈತರಿಗೆ ಹೆಚ್ಚಿನ ಲಾಭಕ್ಕಾಗಿ ತಮ್ಮ ಉತ್ಪನ್ನಗಳನ್ನು ಯಾವಾಗ ಮತ್ತು ಎಲ್ಲಿಗೆ ಮಾರಾಟ ಮಾಡಬೇಕೆಂದು ತೀರ್ಮಾನಿಸಲು ಸಹಾಯ ಮಾಡುತ್ತದೆ.'
            },
            {
                heading: 'Market Trend Analysis',
                heading_kn: 'ಮಾರುಕಟ್ಟೆ ಟ್ರೆಂಡ್ ವಿಶ್ಲೇಷಣೆ',
                desc: 'Farmers can analyze market trends and adjust their production and sales strategies accordingly.',
                desc_kn: 'ರೈತರು ಮಾರುಕಟ್ಟೆ ಟ್ರೆಂಡ್ಗಳನ್ನು ವಿಶ್ಲೇಷಿಸಿ, ತಮ್ಮ ಉತ್ಪಾದನೆ ಮತ್ತು ಮಾರಾಟದ ತಂತ್ರಗಳನ್ನು ಹೊಂದಿಸಬಹುದು.'
            },
            {
                heading: 'Risk Reduction',
                heading_kn: 'ಪತ್ತೆ ಪಡುವಿಕೆಯ ಕಡಿತ',
                desc: 'Knowledge of market prices reduces the risk of being underpaid or facing unexpected market fluctuations.',
                desc_kn: 'ಮಾರುಕಟ್ಟೆ ಬೆಲೆಗಳ ಅರಿವಿನಿಂದ ಕಡಿಮೆ ಪಾವತಿಯನ್ನು ಅಥವಾ ನಿರೀಕ್ಷಿತ ಮಾರುಕಟ್ಟೆ ಕಂಪನೆಯನ್ನು ಎದುರಿಸುವ ಅಪಾಯವನ್ನು ಕಡಿಮೆ ಮಾಡುತ್ತದೆ.'
            }
        ]
    },
    {
        title: 'Agricultural Product Management and Packaging',
        title_kn: 'ಕೃಷಿ ಉತ್ಪನ್ನ ನಿರ್ವಹಣೆ ಮತ್ತು ಪ್ಯಾಕೇಜಿಂಗ್',
        points: [
            {
                heading: 'Improved Product Quality',
                heading_kn: 'ಉತ್ಪನ್ನದ ಗುಣಮಟ್ಟ ಸುಧಾರಣೆ',
                desc: 'Better packaging and storage maintain product freshness and quality, leading to higher market value.',
                desc_kn: 'ಉತ್ತಮ ಪ್ಯಾಕೇಜಿಂಗ್ ಮತ್ತು ಸಂಗ್ರಹಣೆಯು ಉತ್ಪನ್ನದ تازಾದತನ ಮತ್ತು ಗುಣಮಟ್ಟವನ್ನು ಕಾಪಾಡುತ್ತದೆ, ಇದರಿಂದ ಉನ್ನತ ಮಾರುಕಟ್ಟೆ ಮೌಲ್ಯವನ್ನು ತರುತ್ತದೆ.'
            },
            {
                heading: 'Extended Shelf Life',
                heading_kn: 'ಶೀಲ್ಫ್ ಜೀವನ ವಿಸ್ತರಣೆ',
                desc: 'Proper packaging can extend the shelf life of products, reducing waste and increasing sales opportunities.',
                desc_kn: 'ಸರಿಯಾದ ಪ್ಯಾಕೇಜಿಂಗ್ ಉತ್ಪನ್ನಗಳ ಶೀಲ್ಫ್ ಜೀವನವನ್ನು ವಿಸ್ತರಿಸುತ್ತದೆ, ವ್ಯರ್ಥವನ್ನು ಕಡಿಮೆ ಮಾಡುತ್ತದೆ ಮತ್ತು ಮಾರಾಟದ ಅವಕಾಶಗಳನ್ನು ಹೆಚ್ಚಿಸುತ್ತದೆ.'
            },
            {
                heading: 'Enhanced Brand Image',
                heading_kn: 'ಬ್ರ್ಯಾಂಡ್ ಇಮೇಜ್ ವೃದ್ಧಿ',
                desc: 'Professionally packaged products create a more appealing brand image, attracting more consumers.',
                desc_kn: 'ಪ್ರೊಫೆಶನಲ್‌ली ಪ್ಯಾಕೇಜ್ ಮಾಡಿದ ಉತ್ಪನ್ನಗಳು ಹೆಚ್ಚು ಆಕರ್ಷಕ ಬ್ರ್ಯಾಂಡ್ ಇಮೇಜ್ ಅನ್ನು ರಚಿಸುತ್ತವೆ, ಹೆಚ್ಚಿನ ಗ್ರಾಹಕರನ್ನು ಆಕರ್ಷಿಸುತ್ತವೆ.'
            }
        ]
    },
    {
        title: 'Collaborative Farming Initiatives',
        title_kn: 'ಸಹಕರಿತ ಕೃಷಿ ಉದ್ದೇಶಗಳು',
        points: [
            {
                heading: 'Shared Resources',
                heading_kn: 'ಹಂಚಿಕೊಳ್ಳಲಾದ ಸಂಪತ್ತುಗಳು',
                desc: 'Farmers can pool resources, such as equipment and knowledge, reducing costs and improving efficiency.',
                desc_kn: 'ರೈತರು ಸಾಧನಗಳು ಮತ್ತು ಜ್ಞಾನವಂತಹ ಸಂಪತ್ತುಗಳನ್ನು ಹಂಚಿಕೊಳ್ಳಬಹುದು, ವೆಚ್ಚವನ್ನು ಕಡಿಮೆ ಮಾಡುತ್ತದೆ ಮತ್ತು ಕಾರ್ಯಕ್ಷಮತೆಯನ್ನು ಉತ್ತಮಗೊಳಿಸುತ್ತದೆ.'
            },
            {
                heading: 'Stronger Bargaining Power',
                heading_kn: 'ಬಲವಾದ ನಿಗ್ರಹ ಶಕ್ತಿ',
                desc: 'Collaboratives can negotiate better prices and terms with buyers due to the increased volume of products.',
                desc_kn: 'ಹೊಂದಿಕೊಂಡು ಮಾರಾಟದ ಪ್ರಮಾಣವು ಹೆಚ್ಚಾಗಿರುವುದರಿಂದ ಸಹಕರಿತಗಳು ಖರೀದಕರೊಂದಿಗೆ ಉತ್ತಮ ಬೆಲೆ ಮತ್ತು ಷರತ್ತುಗಳನ್ನು ನಿಗ್ರಹಿಸಲು ಸಾಧ್ಯವಾಗುತ್ತದೆ.'
            },
            {
                heading: 'Community Support',
                heading_kn: 'ಸಮುದಾಯ ಬೆಂಬಲ',
                desc: 'Collaboration fosters a sense of community and support among farmers, leading to shared success and innovation.',
                desc_kn: 'ಸಹಕಾರ ರೈತರಲ್ಲಿ ಸಮುದಾಯ ಮತ್ತು ಬೆಂಬಲದ ಭಾವನೆಯನ್ನು ಉತ್ತೇಜಿಸುತ್ತದೆ, ಹಂಚಿಕೊಳ್ಳುವ ಯಶಸ್ಸು ಮತ್ತು ಹೊಸತೆಯನ್ನು ತರಿಸುತ್ತದೆ.'
            }
        ]
    }
];


function About() {
    const { isKannada } = useLanguage();

    return (
        <section className='about-container'>
            <div className="banner-top">
                <h1 className="fs-1 fw-bold text-light">{isKannada ? 'ನಮ್ಮ ಬಗ್ಗೆ' : 'About us'}</h1>
            </div>
            <div className="container-fluid p-3 p-md-5 py-4">
                <div className="row">
                    <div className="col-md-6">
                        <h6 className="fs-6 text-green">{isKannada ? 'ನಮ್ಮ ಬಗ್ಗೆ' : 'ABOUT US'}</h6>
                        <h1 className="fs-1 fw-bold text-green">
                            {isKannada ? 'ನಮ್ಮ ಆಧುನಿಕ ಕೃಷಿಯ ಹಿಂದಿನ ಮನಸ್ಸುಗಳನ್ನು ನೋಡಿ' : 'Meet the Minds Behind Our Modern Farm'}
                        </h1>
                        <p className="fs-5 text-green mt-3">
                            {isKannada 
                                ? 'ಕಲ್ಕಿ ಅಗ್ರಿಯಲ್ಲಿ, ನಾವು ರೈತರು ನಿಮ್ಮ ವ್ಯವಹಾರಗಳನ್ನು ವೃದ್ಧಿಸಲು ಸಹಾಯ ಮಾಡಲು ಸಮರ್ಪಿತರಾಗಿದ್ದೇವೆ. ನಮ್ಮ ತಜ್ಞ ತಂಡವು ನಿಮಗೆ ಸರಿಯಾದ ಗ್ರಾಹಕರನ್ನು, ಸರಿಯಾದ ಸಮಯದಲ್ಲಿ ಸಂಪರ್ಕಿಸಲು ಉದ್ಭವಮಾಡುವ ಮಾರ್ಕೆಟಿಂಗ್ ಪರಿಹಾರಗಳನ್ನು ಒದಗಿಸುತ್ತದೆ.'
                                : "At Kalki Agri, we're dedicated to helping farmers like you grow their businesses. Our expert team provides innovative marketing solutions to connect you with the right customers, at the right time."}
                        </p>
                        <h3 className="fs-4">{isKannada ? 'ಬೆಳೆದಿಂದ ಮೇಜಿಗೆ, ನಾವು ನಿಮಗೆ ಸವಾಲುಗಳನ್ನು ಹಂಚುತ್ತಿದ್ದೇವೆ' : "From crop to table, we've got you covered"}</h3>
                        <ul>
                            <li data-aos="fade-up">{isKannada ? 'ಮಾರುಕಟ್ಟೆ ಸಂಶೋಧನೆ ಮತ್ತು ವಿಶ್ಲೇಷಣೆ' : 'Market research and analysis'}</li>
                            <li data-aos="fade-up">{isKannada ? 'ಬ್ರ್ಯಾಂಡಿಂಗ್ ಮತ್ತು ಜಾಹೀರಾತು' : 'Branding and advertising'}</li>
                            <li data-aos="fade-up">{isKannada ? 'ಡಿಜಿಟಲ್ ಮಾರ್ಕೆಟಿಂಗ್ ಮತ್ತು ಸಾಮಾಜಿಕ ಮಾಧ್ಯಮ' : 'Digital marketing and social media'}</li>
                            <li data-aos="fade-up">{isKannada ? 'ವ್ಯಾಪಾರ ಪ್ರದರ್ಶನ ಮತ್ತು ಈವೆಂಟ್ ಪ್ರಚಾರ' : 'Trade show and event promotion'}</li>
                        </ul>
                    </div>
                    <div className="col-md-6 d-flex align-items-center justify-content-center mt-4">
                        <img src={aboutimage} alt={isKannada ? 'ಕಲ್ಕಿ ಅಗ್ರಿ ಬಗ್ಗೆ' : 'about kalki agri'} className="w-75 rounded-4 border-green" />
                    </div>
                </div>
            </div>

            <div className="bg-lightgreen p-3 p-md-5 benifits">
                <h1 className="fs-1 fw-bold text-center mb-1">
                    {isKannada ? 'ಕೃಷಿ ಮಾರ್ಕೆಟಿಂಗ್‌ಗಿಂತ ಹೊಸ ಕಲ್ಪನೆಗಳು ಮತ್ತು ಯೋಜನೆಗಳು' : 'New ideas and plans related to agricultural marketing'}
                </h1>
                <p className="fs-5 text-green text-center mb-5">
                    {isKannada ? 'ನಿಮ್ಮ ರೈತರ ಮಾರಾಟಕ್ಕಾಗಿ ಅತ್ಯುತ್ತಮ ಪರಿಹಾರಗಳು' : 'Here are our new ideas'}
                </p>

                <div className="row">
                    {
                        data.map((item, index) => (
                            <div className="col-md-4 mb-3" key={index}>
                                <div className="bg-green3 p-3 text-light h-100 d-flex flex-column justify-content-between rounded-4 text-center" style={{border:"2px solid #0c0c0c"}}>
                                    <h1 className="fs-4">{isKannada ? item.title_kn : item.title}</h1>
                                    <div className="points mt-4">
                                        {
                                            item.points.map((subitem, subindex) => (
                                                <div className='bg-green1 p-2 mb-3 text-start rounded-4' style={{border:"2px solid #0c0c0c"}} key={subindex}>
                                                    <h6 className="fs-6 text-green fw-bold">{isKannada ? subitem.heading_kn : subitem.heading}</h6>
                                                    <p className="fs-6 mb-0">{isKannada ? subitem.desc_kn : subitem.desc}</p>
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <Feedback />
        </section>
    );
}

export default About;
