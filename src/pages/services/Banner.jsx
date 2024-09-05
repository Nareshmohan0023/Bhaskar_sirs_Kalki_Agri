import React from 'react'

function Banner({title, subtitle}) {
  return (
    <div className='banner-top'>
        <h1 className="fs-1 fw-bold text-light">{title}</h1>
        <p className="fs-6 text-secondary">{subtitle}</p>
    </div>
  )
}

export default Banner