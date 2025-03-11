import React, { useState } from 'react'
import './AllDoctorsPage.css'
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const AllDoctorsPage = () => {
  const doctors = useSelector(state => state.doctors.doctors)
  const navigate = useNavigate();
  const [options, setOptions] = useState(false);

  const handleClick = (link) => {
    // Navigate to the link
    navigate(link);
    window.scroll(0, 0);
  };

  const filterOptions = () => {
    setOptions(prevOptions => !prevOptions);
  }

  return (
    <div className='allDoctorsPage'>
      <div className="main-heading">
          <h2>Browse through the doctors specialist.</h2>
        </div>
      <div className="doctorsPage-inner">
        <div className="options">
          <div className="options-list">
            <div className="filter-options">
              <button onClick={filterOptions}>Filter</button>
            </div>
            <div className="filter-list first-options">
              <Link to='/generalPhysicianDoc'>
               <div className="optionOne">
                  <h2>General physician</h2>
                </div>
              </Link>
              <Link to='/gynecologistDoc'>
              <div className="optionOne">
                  <h2>Gynecologist</h2>
                </div>
              </Link>
              <Link to='/dermatologistDoc'>
              <div className="optionOne">
                  <h2>Dermatologist</h2>
                </div>
              </Link>
              <Link to='/pediatricianDoc'>
              <div className="optionOne">
                  <h2>Pediatricians</h2>
                </div>
              </Link>
              <Link to='/neurologistDoc'>
              <div className="optionOne">
                  <h2>Neurologist</h2>
                </div>
              </Link>
              <Link to='/gastroenterologistDoc'>
              <div className="optionOne">
                  <h2>Gastroenterologist</h2>
                </div>
              </Link>
              </div>
            {options && (
              <div className="filter-list second-options">
                <Link to='/generalPhysicianDoc'>
               <div className="optionOne">
                  <h2>General physician</h2>
                </div>
              </Link>
              <Link to='/gynecologistDoc'>
              <div className="optionOne">
                  <h2>Gynecologist</h2>
                </div>
              </Link>
              <Link to='/dermatologistDoc'>
              <div className="optionOne">
                  <h2>Dermatologist</h2>
                </div>
              </Link>
              <Link to='/pediatricianDoc'>
              <div className="optionOne">
                  <h2>Pediatricians</h2>
                </div>
              </Link>
              <Link to='/neurologistDoc'>
              <div className="optionOne">
                  <h2>Neurologist</h2>
                </div>
              </Link>
              <Link to='gastroenterologistDoc'>
              <div className="optionOne">
                  <h2>Gastroenterologist</h2>
                </div>
              </Link>
              </div>
            )}
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

export default AllDoctorsPage;
