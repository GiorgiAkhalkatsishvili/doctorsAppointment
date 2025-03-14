import React, { useState } from 'react';
import profileImg from '../../assets/images/profile_pic.png';
import './ProfilePage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCircleCheck} from '@fortawesome/free-solid-svg-icons'; 

const ProfilePage = () => {
  const [message, setMessage] = useState("");
   
  const handleBookAppointment = () => {
    setMessage(
        <div id='successful-message' className='success'  style={{width: '280px', display: 'flex', gap: '10px', alignItems: 'center'}}>
        <FontAwesomeIcon icon={faCircleCheck}  style={{ fontSize: '25px', color: 'green'  }}/>
            {' '}<p>Information saved successfuly!</p>
              </div>
            );
          setTimeout(() => {
            setMessage('')
        },5000)
  }
  return (
    <div className='profilePage'>
      <div className="profile-Page-inner">
        <div className="main-profile-img">
          <img src={profileImg} alt="" />
        </div>
        <div className="user-name">
          <h1>Edward Vincent</h1>
        </div>
        <hr />
        <div className="user-contact-text">
          <a href="">CONTACT INFORMATION</a>
        </div>
        <div className="user-info-list">
          <div className="user-email">
            <p>Email id:</p>
            <a href="">richardjameswap@gmail.com</a>
          </div>
          <div className="user-phone">
            <p>Phone:</p>
            <a href="">+1 123 456 7890</a>
          </div>
          <div className="user-address">
            <p>Address:</p>
            <p>57th Cross, Richmond 
Circle, Church Road, London</p>
          </div>
        </div>
        <div className="basic-info">
          <a href="">BASIC INFORMATION</a>
        </div>
        <div className="basic-info-list">
          <p>Gender:</p>
          <p>Male</p>
        </div>
        <div className="birthday">
          <p>Birthday:</p>
          <p>20 July, 2001</p>
        </div>
      </div>
      <div className="save-btn">
        <button onClick={handleBookAppointment}>Save information</button>
      </div>
      {
              message?(
             <div className="success-notification">
             {message}
                </div>
              ) :
              ('')
              }
    </div>
  )
}

export default ProfilePage
