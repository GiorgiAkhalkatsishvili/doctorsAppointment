import React from 'react'
import BannerComponent from '../../components/BannerComponent';
import SpecialityComponent from '../../components/SpecialityComponent';
import DoctorsComponent from '../../components/DoctorsComponent';
import BottomBanner from '../../components/BottomBanner';


const HomePage = () => {
  return (
    <div>
      <BannerComponent />
      <SpecialityComponent/>
      <DoctorsComponent />
      <BottomBanner/>
    </div>
  )
}

export default HomePage
