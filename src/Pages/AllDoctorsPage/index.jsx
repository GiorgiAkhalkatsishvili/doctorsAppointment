import React from 'react'
import './AllDoctorsPage.css'
import doctorOne from '../../assets/images/doctorOne.png'
import doctorTwo from '../../assets/images/doctorTwo.png'
import doctorThree from '../../assets/images/doctorThree.png'
import doctorFour from '../../assets/images/doctorFour.png'
import doctorFive from '../../assets/images/doctorFive.png'
import doctorSix from '../../assets/images/doctorSix.png'
import doctorSeven from '../../assets/images/doctorTen.png'
import doctorEight from '../../assets/images/doctorEleven.png'
import doctorNine from '../../assets/images/doctorTwelve.png'
import doctorTen from '../../assets/images/doctorThirteen.png'

const AllDoctorsPage = () => {
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
                     <div className="imageOne">
                    <img src={doctorOne} alt="" />
                    <div className="image-texts">
                      <span></span>
                      <p>Available</p>
                    </div>
                    <div className="doctor-info">
                      <h2>Dr. Richard James</h2>
                      <p>General physician</p>
                    </div>
                  </div>
                  <div className="imageOne">
                    <img src={doctorTwo} alt="" />
                      <div className="image-texts">
                      <span></span>
                      <p>Available</p>
                    </div>
                    <div className="doctor-info">
                      <h2>Dr. Richard James</h2>
                      <p>General physician</p>
                    </div>
                  </div>
                  <div className="imageOne">
                    <img src={doctorThree} alt="" />
                      <div className="image-texts">
                      <span></span>
                      <p>Available</p>
                    </div>
                    <div className="doctor-info">
                      <h2>Dr. Richard James</h2>
                      <p>General physician</p>
                    </div>
                  </div>
                  <div className="imageOne">
                    <img src={doctorFour} alt="" />
                      <div className="image-texts">
                      <span></span>
                      <p>Available</p>
                    </div>
                    <div className="doctor-info">
                      <h2>Dr. Richard James</h2>
                      <p>General physician</p>
                    </div>
                  </div>
                  <div className="imageOne">
                    <img src={doctorFive} alt="" />
                      <div className="image-texts">
                      <span></span>
                      <p>Available</p>
                    </div>
                    <div className="doctor-info">
                      <h2>Dr. Richard James</h2>
                      <p>General physician</p>
                    </div>
                  </div>
                  <div className="imageOne">
                    <img src={doctorSix} alt="" />
                      <div className="image-texts">
                      <span></span>
                      <p>Available</p>
                    </div>
                    <div className="doctor-info">
                      <h2>Dr. Richard James</h2>
                      <p>General physician</p>
                    </div>
                  </div>
                  <div className="imageOne">
                    <img src={doctorSeven} alt="" />
                      <div className="image-texts">
                      <span></span>
                      <p>Available</p>
                    </div>
                    <div className="doctor-info">
                      <h2>Dr. Richard James</h2>
                      <p>General physician</p>
                    </div>
                  </div>
                  <div className="imageOne">
                    <img src={doctorEight} alt="" />
                      <div className="image-texts">
                      <span></span>
                      <p>Available</p>
                    </div>
                    <div className="doctor-info">
                      <h2>Dr. Richard James</h2>
                      <p>General physician</p>
                    </div>
                  </div>
                  <div className="imageOne">
                    <img src={doctorNine} alt="" />
                      <div className="image-texts">
                      <span></span>
                      <p>Available</p>
                    </div>
                    <div className="doctor-info">
                      <h2>Dr. Richard James</h2>
                      <p>General physician</p>
                    </div>
                  </div>
                  <div className="imageOne">
                    <img src={doctorTen} alt="" />
                      <div className="image-texts">
                      <span></span>
                      <p>Available</p>
                    </div>
                    <div className="doctor-info">
                      <h2>Dr. Richard James</h2>
                      <p>General physician</p>
                    </div>
                  </div>
           </div>
      </div>
    </div>
  )
}

export default AllDoctorsPage
