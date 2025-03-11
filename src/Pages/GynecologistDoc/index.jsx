import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import './GynecologistDoc.css'
import { Link } from 'react-router-dom';

const GynecologistDoc = () => {
  const [options, setOptions] = useState(false);
  const doctors = useSelector((state) => state.doctors.doctors);
  const firstDoctor = doctors[1];
  const seventhDoctor = doctors[7];


  const filterOptions = () => {
    setOptions(prevOptions => !prevOptions); // Toggle the filter options
  };

  return (
    <div className='generalPhysicianDoc'>
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
              <Link to='/AllDoctors'>
              <div className="optionOne active">
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
                <div className="optionOne active">
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
                <Link to='/AllDoctors'>
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
              )}
          </div>
        </div>
        <div className="doctors-container">
          <Link to="/secondDoctor">
           <div className="available-doctor-one">
              <div className="doc-img">
                <img src={firstDoctor.img} alt="" />
              </div>
            <div className="doc-texts">
              <div className="image-texts">
                <span></span>
                <p>Available</p>
              </div>
              <div className="doctor-name">
                <h4>{firstDoctor.title}</h4>
              </div>
              <div className="doc-speciality">
                <p>{firstDoctor.position}</p>
              </div>
              </div>
           </div>
          </Link>
          <Link to="/eighthDoctor">
           <div className="available-doctor-one">
              <div className="doc-img">
                <img src={seventhDoctor.img} alt="" />
              </div>
            <div className="doc-texts">
              <div className="image-texts">
                <span></span>
                <p>Available</p>
              </div>
              <div className="doctor-name">
                <h4>{seventhDoctor.title}</h4>
              </div>
              <div className="doc-speciality">
                <p>{seventhDoctor.position}</p>
              </div>
              </div>
           </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default GynecologistDoc;
