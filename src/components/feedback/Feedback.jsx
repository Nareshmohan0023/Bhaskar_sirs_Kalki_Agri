import React from 'react'
import { useLanguage } from '../hooks/LanguageContext'

function Feedback() {
  const { isKannada } = useLanguage();

  return (
    <div className='p-3 p-md-5'>
      <div className="row">
        <div className="col-md-8 m-auto">
          <div className="bg-lightorange p-3 rounded-4 border-green">
            <h1 className="fs-2 text-center mb-4">
              {isKannada ? 'ಸಂಪರ್ಕದಲ್ಲಿರಿ' : 'Get in Touch'}
            </h1>
            <input 
              type="text" 
              placeholder={isKannada ? 'ನಿಮ್ಮ ಹೆಸರನ್ನು ನಮೂದಿಸಿ' : 'Enter your name'} 
              className="form-control mt-3 p-3"
            />
            <input 
              type="email" 
              placeholder={isKannada ? 'ನಿಮ್ಮ ಇಮೇಲ್ ನಮೂದಿಸಿ' : 'Enter your email'} 
              className="form-control mt-3 p-3"
            />
            <textarea 
              name="message" 
              id="message" 
              className='form-control p-3 mt-3' 
              placeholder={isKannada ? 'ಸಂದೇಶ' : 'Message'} 
              rows={8}>
            </textarea>
            <button className="btn-green w-100 p-3 mt-3 bg-green3 text-light">
              {isKannada ? 'ಸಲ್ಲಿಸಿ' : 'Submit'}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Feedback
