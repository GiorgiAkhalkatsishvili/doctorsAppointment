import React, { useState } from 'react'
import contactImg from '../../assets/images/contactImg.png'
import './ContactPage.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faCircleExclamation } from '@fortawesome/free-solid-svg-icons';



const ContactPage = () => {
  const [message, setMessage] = useState("");

  const handleErrorMessage = () => {
    setMessage(
    <div id='successful-message' className='success'  style={{width: '280px', display: 'flex', gap: '10px', alignItems: 'center'}}>
    <FontAwesomeIcon icon={faCircleExclamation}  style={{ fontSize: '25px', color: 'orange'  }}/>
    <FontAwesomeIcon icon="fa-solid fa-circle-exclamation" style={{ color: 'orange', fontSize: '25px' }}/>
        {' '}<p>Feature is not available for now!</p>
          </div>
        );
      setTimeout(() => {
        setMessage('')
    },5000)
  };
  
  return (
    <div className='contactPage'>
      <div className="main-heading">
       <h1><span>CONTACT</span> US</h1>
      </div>
      <div className="center-info">
        <div className="main-img">
        <img src={contactImg} alt="" />
      </div>
      <div className="main-texts">
          <div className="texts-one">
            <h3>OUR OFFICE</h3>
          <p>54709 Willms Station <br />
Suite 350, Washington, USA</p>
          </div>
          <div className="texts-two">
            <p>Tel: (415) 555‑0132</p>
            <p>Email: greatstackdev@gmail.com</p>
          </div>
          <div className="texts-three">
          <h3>Careers at PRESCRIPTO</h3>
          <p>Learn more about our teams and job openings.</p>
          </div>
          <div className="final-btn">
            <button onClick={handleErrorMessage}>Explore Jobs</button>
          </div>
          {
              message?(
             <div className="successful-notification">
             {message}
                </div>
              ) :
              ('')
              }
        </div>
      </div>
    </div>
  )
}

export default ContactPage
