import React from 'react'
import './style.css'
import logo from '../../assets/images/logo.jpeg'
import { useLanguage } from '../hooks/LanguageContext'

function Header() {
  const { isKannada, setIsKannada } = useLanguage();
  return (
    <header>
      <div className="d-flex align-ietms-center justify-content-end mb-0 gap-2">
      <button className='btn btn-light px-3 btn-sm mb-0 p-0' type='button' onClick={()=>setIsKannada(!isKannada)}>English</button>
      <button className='btn btn-light px-3 btn-sm mb-0 p-0' type='button' onClick={()=>setIsKannada(!isKannada)}>ಕನ್ನಡ</button>
      </div>

      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand text-light fs-3 d-flex align-items-center" href="/"> 
            <img src={logo} alt="kalki agri" className='logo' /> 
            <span className="fw-bold mt-2 d-block">
              {isKannada ? 'ಕಲ್ಕಿ' : 'KALKI'} <span className="text-orange">{isKannada ? 'ಕೃಷಿ' : 'AGRI'}</span>
            </span> 
          </a>
          <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <i className='bi bi-list fs-1 text-light'></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-lg-0 mt-1">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">{isKannada ? 'ಮನೆ' : 'Home'}</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="about-us">{isKannada ? 'ನಮ್ಮ ಬಗ್ಗೆ' : 'About us'}</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/vision">{isKannada ? 'ದೃಷ್ಟಿಕೋನ/ಲಕ್ಷ್ಯ' : 'Vision/Goal'}</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  {isKannada ? 'ಸೇವೆಗಳು' : 'Services'}
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="/market-research-agriculture">{isKannada ? 'ಮಾರುಕಟ್ಟೆ ಸಂಶೋಧನೆ ಮತ್ತು ವಿಶ್ಲೇಷಣೆ' : 'Market Research and Analysis'}</a></li>
                  <li><a className="dropdown-item" href="/branding-and-advertising-services">{isKannada ? 'ಬ್ರಾಂಡಿಂಗ್ ಮತ್ತು ಜಾಹೀರಾತು' : 'Branding and Advertising'}</a></li>
                  <li><a className="dropdown-item" href="/digital-marketing-and-social-media-services">{isKannada ? 'ಡಿಜಿಟಲ್ ಮಾರುಕಟ್ಟೆ ಮತ್ತು ಸಾಮಾಜಿಕ ಮಾಧ್ಯಮ' : 'Digital Marketing and Social Media'}</a></li>
                  <li><a className="dropdown-item" href="/trade-show-and-event-promotion-services">{isKannada ? 'ವ್ಯಾಪಾರ ಪ್ರದರ್ಶನ ಮತ್ತು ಘಟನೆ ಪ್ರಚಾರ' : 'Trade Show and Event Promotion'}</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/contact-us">{isKannada ? 'ನಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸಿ' : 'Contact us'}</a>
              </li>
            </ul>
            <form className="d-flex">
              <button className="btn-orange px-4 py-2"  type="submit">{isKannada ? 'ನೋಂದಣಿ' : 'Register'}</button>
            </form>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
