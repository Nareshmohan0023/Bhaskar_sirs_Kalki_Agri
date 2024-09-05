import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../components/hooks/LanguageContext';

function Overview({title, content, image}) {
  const { isKannada } = useLanguage();

  return (
    <section className='overview p-3 p-md-5'>
      <div className="row">
        <div className="col-md-6">
          <h6 className="fs-6 text-green">{isKannada ? "ಒವರ್‌ವ್ಯೂ" : "Overview"}</h6>
          <h1 className="fs-1 text-green fw-bold">{title}</h1>
          <p className="fs-6 text-green">{content}</p>
          <Link to="/contact-us" className="btn-orange px-3">{isKannada ? "ನಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸಿ" : "Contact us"}</Link>
        </div>
        <div className="col-md-6 mt-3 d-flex align-items-center justify-content-center">
          <img src={image} alt={title} className="w-75 rounded-3" />
        </div>
      </div>
    </section>
  );
}

export default Overview;
