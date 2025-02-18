import React from 'react'
import contactImg from '../../assets/images/contactImg.png'
import './ContactPage.css'


const ContactPage = () => {
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
            <button>Explore Jobs</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactPage
