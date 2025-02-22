import React from 'react';
import './AppointmentsPage.css';
import { useDispatch, useSelector } from 'react-redux';
import { removeDoctor } from '../../Redux/doctorsSlice';

const AppointmentsPage = () => {
  const selectedDoctor = useSelector((state) => state.doctors.selectedDoctor);
  const dispatch = useDispatch()

  const removeDoc = (id) => {
    dispatch(removeDoctor(id))
  }

  // If no doctor is selected, display a message
  if (selectedDoctor.length === 0) {
    return (
      <div className='appointmentsPage'>
        <div className="main-texts">
          <h1>My appointments</h1>
          <hr />
        </div>
        <div className='warning-text'>
          <p>No doctor selected. Please book an appointment first.</p>
        </div>
      </div>
    );
  }

  // Handle both the case when `selectedDoctor` is a single object or an array
  return (
    <div className='appointmentsPage'>
      <div className="main-texts">
        <h1>My appointments</h1>
        <hr />
      </div>
      {
        selectedDoctor.map((doctor) => (
          <div key={doctor.id} className="booked-doctor">
            <div className="doctor-details">
              <img src={doctor.img} alt={doctor.title} className="doctor-img" />
              <div className="doctor-info">
                <h2>{doctor.title}</h2>
                <p>{doctor.position}</p>
                <div className="doctor-address">
                  <h4>Address:</h4>
                  <h5>{doctor.address}</h5>
                </div>
                <div className="doctor-date-time">
                  <h4>Date & Time: <span>{doctor.appointmentDate} {doctor.appointmentTime}</span></h4>
                </div>
              </div>
            </div>
            <div className="booked-doctor-btns">
              <div className="doctor-btn-pay">
                <button>Pay here</button>
              </div>
              <div className="doctor-btn-cancel">
                <button onClick={()=>removeDoc(doctor.id)}>Cancel appointment</button>
              </div>
            </div>
          </div>
        ))
      }
    </div>
  );
};

export default AppointmentsPage;
