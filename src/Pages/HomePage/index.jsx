import React from 'react'
import BannerComponent from '../../components/BannerComponent';
import SpecialityComponent from '../../components/SpecialityComponent';
import DoctorsComponent from '../../components/DoctorsComponent';
import BottomBanner from '../../components/BottomBanner';
import { useRef } from 'react'

const HomePage = () => {
  const sectionRef = useRef(null);
  
  return (
    <div>
      <BannerComponent scrollRef={sectionRef}/>
      <SpecialityComponent/>
      <DoctorsComponent ref={sectionRef} />
      <BottomBanner/>
    </div>
  )
}

export default HomePage
