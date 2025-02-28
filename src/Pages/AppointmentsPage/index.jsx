import React, { useState } from 'react';
import './AppointmentsPage.css';
import { useDispatch, useSelector } from 'react-redux';
import { removeDoctor } from '../../Redux/doctorsSlice';
import visaCard from '../../assets/images/visa-logo-800x450.jpg';
import masterCard from '../../assets/images/masterCard.png';
import paypalCard from '../../assets/images/paypal.png';
import walletCard from '../../assets/images/wallet.png';
import expressCard from '../../assets/images/express.png.png';
import debitCard from '../../assets/images/debitCard.png'
import { BeatLoader } from 'react-spinners';

const AppointmentsPage = () => {
  const selectedDoctor = useSelector((state) => state.doctors.selectedDoctor);
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const loading = useSelector((state)=>state.doctors.loading)
  const removeDoc = (id) => {
    dispatch(removeDoctor(id));
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);

    if (!isModalOpen) {
      document.documentElement.style.setProperty('--overlay-bg', 'rgba(0, 0, 0, 0.7)');
      document.documentElement.style.setProperty('--modal-bg', '#FF6347');
    } else {
      document.documentElement.style.setProperty('--overlay-bg', 'rgba(0, 0, 0, 0.5)');
      document.documentElement.style.setProperty('--modal-bg', '#2354e1');
    }
  };

  const closePaymentTab = () => {
    setIsModalOpen(false)
    document.documentElement.style.setProperty('--overlay-bg', 'rgba(0, 0, 0, 0.5)'); // Reset to default
    document.documentElement.style.setProperty('--modal-bg', '#2354e1'); // Reset to default
  };

  // If no doctor is selected, display a message
  if (selectedDoctor.length === 0) {
    return (
      <div className="appointmentsPage">
        <div className="main-texts">
          <h1>My appointments</h1>
          <hr />
        </div>
        <div className="warning-text">
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
                <button onClick={toggleModal}>Pay here</button>
              </div>
              <div className="doctor-btn-cancel">
                <button onClick={() => removeDoc(doctor.id)}>Cancel appointment</button>
              </div>
            </div>
          </div>
        ))
      }

      {/* Background Overlay */}
      {isModalOpen && <div className="modal-overlay" onClick={toggleModal}></div>}

      {/* Payment Modal */}
      {isModalOpen && (
        <div className="appointment-payment">
          <div className="inner">
            <div className="main-texts-prices">
              <div className="main-texts">
                <div className="textOne">
                  <h1>A</h1>
                </div>
                <div className="textTwo">
                  <h1>Appointment Payment</h1>
                </div>
              </div>
              <div className="price-summaray">
                <p>Price Summary</p>
                <h3>$50</h3>
              </div>
              <div className="bottom-test-text">
                <p>This is a test payment page.</p>
              </div>
            </div>
            <div className="main-payment-methods">
              <div className="payment-text">
                <div className="main-payment-text">
                  <p>Payment Options</p>
                </div>
                <div className="payment-svgs">
                  <div className="first-svg">
                    <svg width="40" height="30" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="14" cy="15" r="3" fill="#4B5563" />
                      <circle cx="24" cy="15" r="3" fill="#4B5563" />
                      <circle cx="35" cy="15" r="3" fill="#4B5563" />
                    </svg>
                  </div>
                  <div onClick={closePaymentTab} className="second-svg">
                    <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                      <line x1="3" y1="3" x2="17" y2="17" stroke="#4B5563" stroke-width="3"/>
                      <line x1="3" y1="17" x2="17" y2="3" stroke="#4B5563" stroke-width="3"/>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="main-payment-logos">
                <div className="first-cards-column">
                  <div className="first-column-inner">
                  <div className="main-payment-text">
                  <h1>Cards</h1>
                </div>
                <div className="logoOne">
                  <div className="logo">
                   <img src={visaCard} alt="" />
                </div>
                  <div className="logoTwo">
                 <img src={masterCard} alt="" />
                  </div>
                  <div className="logoThree">
                   <img src={paypalCard} alt="" />
                  </div>
                </div>
                  </div>
                  <div className="bottom-cards">
                    <div className="bottom-cards-texts">
                      <div className="main-text">
                        <h1>Wallet</h1>
                      </div>
                      <div className="inner-cards">
                         <div className="bottom-card-logoOne">
                        <img src={walletCard} alt="" />
                      </div>
                      <div className="bottom-card-logoTwo">
                        <img src={expressCard} alt="" />
                      </div>
                      <div className="bottom-card-logoTwo">
                        <img src={debitCard} alt="" />
                      </div>
                     </div>
                    </div>
                  </div>
                </div>
                <div className="second-inputs-column">
                  <div className="main-text">
                    <p>Add a new card</p>
                  </div>
                  <div className="main-inputs">
                    <div className="inpOne">
                      <input type="text" placeholder='Card number'/>
                    </div>
                    <div className="inpTwo">
                      <input type="text" placeholder='Card expire date'/>
                    </div>
                    <div className="inpThree">
                      <input type="text" placeholder='Card owner name'/>
                    </div>
                    <div className="checkMarkInp">
                      <input type='checkbox' />
                      <p>Save this card for more purchases</p>
                    </div>
                    <div className="main-purchasing-btn">
                      <button>Continue</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AppointmentsPage;
