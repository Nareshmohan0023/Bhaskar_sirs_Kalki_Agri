import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css'
import PrivateRoute from './components/PrivateRoute';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Register from './pages/Register/Register';
import Dashboard from './pages/Dashboard/Dashboard';
import Header from './components/header/Header';
import whatsappIcon from './assets/images/whatsapp.png'
import Footer from './components/footer/Footer';
import Aos from 'aos';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import ScrollToTop from './helpers/ScrollToTop';
import MarketandResearch from './pages/services/MarketandResearch';
import Branding from './pages/services/Branding';
import DigitalMarketing from './pages/services/DigitalMarketing';
import Vision from './pages/vision/Vision';
import Seller from './pages/seller/Seller';
import Buyer from './pages/buyer/Buyer';

const App = () => {
    useEffect(()=>{
        Aos.init()
    }, [])
    return (
    <Fragment>
       
     
        <Router>
            <ScrollToTop/>
        <Link to="https://whatsapp.com/channel/0029VakbaFG0lwgyvCjOiX2G" className='whatsapp'>
     <img src={whatsappIcon} alt="whatsapp" />
     </Link>
        
          <Header/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/about-us" element={<About />} />
                <Route path="/contact-us" element={<Contact />} />
                <Route path='/market-research-agriculture' element={<MarketandResearch/>}/>
                <Route path='/branding-and-advertising-services' element={<Branding/>}/>
                <Route path='/digital-marketing-and-social-media-services' element={<DigitalMarketing />}/>
                <Route path='/trade-show-and-event-promotion-services' element={<MarketandResearch />}/>
                <Route path='/vision' element={<Vision />}/>
                <Route path='/seller-form' element={<Seller />}/>
                <Route path='/buyer-form' element={<Buyer />}/>

                <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
            </Routes>
            <Footer/>
        </Router>
    </Fragment>
    );
};

export default App;
