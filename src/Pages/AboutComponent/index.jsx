import React from 'react'
import aboutImage from '../../assets/images/about_image.png'
import './AboutComponent.css'

const AboutComponent = () => {
  return (
    <div className='aboutComponent'>
      <div className="main-heading">
        <h1><span>ABOUT</span> US</h1>
      </div>
      <div className="main-image-info">
        <div className="image-section">
          <img src={aboutImage} alt="" />
        </div>
        <div className="main-text">
          <p>Welcome to Prescripto, your trusted partner in managing your healthcare needs conveniently and efficiently. At Prescripto, we understand the challenges individuals face when it comes to scheduling doctor appointments and managing their health records.
            <br />
            <br />
Prescripto is committed to excellence in healthcare technology. We continuously strive to enhance our platform, integrating the latest advancements to improve user experience and deliver superior service. Whether you're booking your first appointment or managing ongoing care, Prescripto is here to support you every step of the way.
            <br />
            <br />
<h4>Our Vision</h4>
            <br />
Our vision at Prescripto is to create a seamless healthcare experience for every user. We aim to bridge the gap between patients and healthcare providers, making it easier for you to access the care you need, when you need it.</p>
        </div>
      </div>
      <div className="bottom-info">
        <h1><span>WHY</span> CHOOSE US</h1>
        <div className="info-containers">
          <div className="infoOne firstInfo">
            <h2>EFFICIENCY:</h2>
            <p>Streamlined appointment scheduling that fits into your busy lifestyle.</p>
          </div>
          <div className="infoOne secondInfo">
            <h2>CONVINIENCE:</h2>
            <p>Access to a network of trusted healthcare professionals in your area.</p>
          </div>
          <div className="infoOne">
            <h2>PERSONALIZATION:</h2>
            <p>Tailored recommendations and reminders to help you stay on top of your health..</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutComponent
