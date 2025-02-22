import React from 'react'
import './AllDoctorsPage.css'
import doctorOne from '../../assets/images/additional-doc.png'
import doctorTwo from '../../assets/images/doc2.png'
import doctorThree from '../../assets/images/doc3.png'
import doctorFour from '../../assets/images/doc4.png'
import doctorFive from '../../assets/images/doc5.png'
import doctorSix from '../../assets/images/doc6.png'
import doctorSeven from '../../assets/images/doc7.png'
import doctorEight from '../../assets/images/doc8.png'
import doctorNine from '../../assets/images/doc9.png'
import doctorTen from '../../assets/images/doc10.png'
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const AllDoctorsPage = () => {
  const doctors = useSelector(state=> state.doctors.doctors)
  const navigate = useNavigate();

  const handleClick = (link) => {
    // Navigate to the link
    navigate(link);
    window.scroll(0, 0);
  };
  return (
    <div className='allDoctorsPage'>
      <div className="main-heading">
          <h2>Browse through the doctors specialist.</h2>
        </div>
      <div className="doctorsPage-inner">
        <div className="options">
        <div className="options-list">
            <div className="optionOne">
              <h2>General physician</h2>
          </div>
            <div className="optionOne">
              <h2>Gynecologist</h2>
          </div>
            <div className="optionOne">
              <h2>Dermatologist</h2>
          </div>
            <div className="optionOne">
              <h2>Pediatricians</h2>
          </div>
            <div className="optionOne">
              <h2>Neurologist</h2>
          </div>
            <div className="optionOne">
              <h2>Gastroenterologist</h2>
          </div>
        </div>
        </div>
         <div className="doctors-container">
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
      </div>
    </div>
  )
}

export default AllDoctorsPage
