import React from 'react'
import './SpecialityComponent.css'
import imageOne from '../../assets/images/imageOne.png'
import imageTwo from '../../assets/images/imageTwo.png'
import imageThree from '../../assets/images/imageThree.png'
import imageFour from '../../assets/images/imageFour.png'
import imageFive from '../../assets/images/imageFive.png'
import imageSix from '../../assets/images/imageSix.png'
import { Link } from 'react-router-dom';

const SpecialityComponent = () => {

  const scrollToTop = () => {
    window.scroll(0,0)
  }
  return (
    <div className='specialityComponent'>
      <div className="speciality-inner">
         <div className="main-heading">
        <h1>Find by Speciality </h1>
      </div>
      <div className="main-paragraph">
        <p>Simply browse through our extensive list of trusted doctors, schedule your appointment hassle-free.</p>
        </div>
        <div className="images-container">
          <div onClick={scrollToTop} className="image">
            <Link to='/generalPhysicianDoc'>
              <img src={imageOne} alt="" />
              <p>General physician</p>
            </Link>
          </div>
          <div onClick={scrollToTop} className="image">
            <Link to='/gynecologistDoc'>
            <img src={imageTwo} alt="" />
            <p>Gynecologist</p>
            </Link>
          </div>
          <div onClick={scrollToTop} className="image">
            <Link to='/dermatologistDoc'>
            <img src={imageThree} alt="" />
            <p>Dermatologist</p>
            </Link>
          </div>
          <div onClick={scrollToTop} className="image">
            <Link to='/pediatricianDoc'>
            <img src={imageFour} alt="" />
            <p>Pediatricians</p>
            </Link>
          </div>
          <div onClick={scrollToTop} className="image">
            <Link to='/neurologistDoc'>
            <img src={imageFive} alt="" />
            <p>Neurologist</p>
            </Link>
          </div>
          <div onClick={scrollToTop} className="image">
            <Link to='/gastroenterologistDoc'>
            <img src={imageSix} alt="" />
            <p>Gastroenterologist</p>
            </Link>
          </div>
        </div>
     </div>
    </div>
  )
}

export default SpecialityComponent
