import React from 'react'
import './BannerComponent.css'
import users from '../../assets/images/usersImg.png'
import bannerImg from '../../assets/images/bannerImg.png'

const BannerComponent = () => {
  return (
    <div className='bannerComponent'>
      <div className="banner-inner">
        <div className="banner-texts">
           <div className="banner-headings">
          <h1>Book Appointment With Trusted Doctors</h1>
        </div>
        <div className="users-info">
          <div className="usersImgs">
          <img src={users} alt="Users" />
        </div>
        <div className="banner-paragraph">
          <p>Simply browse through our extensive list of trusted doctors, schedule your appointment hassle-free.</p>
        </div>
        </div>
        <div className="banner-btn">
          <button>Book appointment ➜</button>
        </div>
       </div>
        <div className="main-banner-img">
          <img src={bannerImg} alt="" />
        </div>
      </div>
    </div>
  )
}

export default BannerComponent;
