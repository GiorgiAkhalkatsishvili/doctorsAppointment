import React from 'react'
import './SpecialityComponent.css'
import imageOne from '../../assets/images/imageOne.png'
import imageTwo from '../../assets/images/imageTwo.png'
import imageThree from '../../assets/images/imageThree.png'
import imageFour from '../../assets/images/imageFour.png'
import imageFive from '../../assets/images/imageFive.png'
import imageSix from '../../assets/images/imageSix.png'

const SpecialityComponent = () => {
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
          <div className="image">
            <img src={imageOne} alt="" />
            <p>General physician</p>
          </div>
          <div className="image">
            <img src={imageTwo} alt="" />
            <p>Gynecologist</p>
          </div>
          <div className="image">
            <img src={imageThree} alt="" />
            <p>Dermatologist</p>
          </div>
          <div className="image">
            <img src={imageFour} alt="" />
            <p>Pediatricians</p>
          </div>
          <div className="image">
            <img src={imageFive} alt="" />
            <p>Neurologist</p>
          </div>
          <div className="image">
            <img src={imageSix} alt="" />
            <p>Gastroenterologist</p>
          </div>
        </div>
     </div>
    </div>
  )
}

export default SpecialityComponent
