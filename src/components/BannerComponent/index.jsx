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
          <button>Book appointment <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
  <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" fill="#595959"/>
</svg>
</button>
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
