import React from 'react';
import './DoctorsComponent.css';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { forwardRef, useEffect, useRef, useState } from 'react'

const DoctorsComponent = forwardRef((props, ref) => {
  const doctors = useSelector((state) => state.doctors.doctors);
  const navigate = useNavigate();

  const handleClick = (link) => {
    // Navigate to the link
    navigate(link);
    window.scroll(0, 0);
  };


  return (
    <div ref={ref} className='doctorsComponent'>
      <div className="doctors-inner">
        <div className="main-headings">
          <h1>Top Doctors to Book</h1>
          <p>Simply browse through our extensive list of trusted doctors.</p>
        </div>
        <div className="doctor-images-container">
          {doctors.slice(0, 10).map((item) => (
            <div
              onClick={() => handleClick(item.link)}
              className="doctors-list"
              key={item.id}
            >
              <div className="each-doctor-inner">
                <div className="doctor-img">
                  <img src={item.img} alt={item.title} />
                </div>
                <div className='image-texts'>
                  <span></span>
                  <p>Available</p>
                </div>
                <div className="title-speciality">
                  <h2>{item.title}</h2>
                  <p>{item.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="doctors-btn">
          <Link onClick={()=>window.scroll(0,0)} to="/AllDoctors"><button>more</button></Link>
        </div>
      </div>
    </div>
  );
});

export default DoctorsComponent;
