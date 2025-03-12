import React from 'react'
import './BottomBanner.css';
import doctorBanner from '../../assets/images/bottomDoctor.png'

const BottomBanner = () => {
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
  return (
    <div className='bottomBanner'>
      <div className="banner">
        <div className="banner-image-text">
           <div className="banner-info">
          <div className="banner-texts">
          <h1>Book Appointment <br />
With 100+ Trusted Doctors</h1>
        </div>
        <div className="banner-btn">
          <button onClick={scrollToTop}>Create account</button>
        </div>
        </div>
        <div className="bottom-banner-img">
          <img src={doctorBanner} alt="" />
        </div>
       </div>
      </div>
    </div>
  )
}

export default BottomBanner
