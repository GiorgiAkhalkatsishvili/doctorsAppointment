import './App.css';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import AllDoctorsPage from './Pages/AllDoctorsPage';
import AboutComponent from './Pages/AboutComponent';
import ContactPage from './Pages/ContactPage';
import FirstDoctorPage from './Pages/FirstDoctorPage'
import SecondDocotorPage from './Pages/SecondDoctorPage';
import ThirdDoctorPage from './Pages/ThirdDoctorPage';
import FourthDoctorPage from './Pages/FourthDoctorPage';
import FivfthDoctorPage from './Pages/FivfthDoctorPage';
import AppointmentsPage from './Pages/AppointmentsPage';
import SixthDoctorPage from './Pages/SixthDoctorPage'
import SeventhDoctorPage from './Pages/SeventhDoctorPage'
import EighthDoctorPage from './Pages/EighthDoctorPage'
import NinthDoctorPage from './Pages/NinthDoctorPage'
import TenthDoctorPage from './Pages/TenthDoctorPage';

function App() {
  return (
    <div className="App">
      <Router>
        <HeaderComponent />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/AllDoctors' element={<AllDoctorsPage />} />
          <Route path='/about' element={<AboutComponent />} />
          <Route path='/contact' element={<ContactPage />} />
          <Route path='/firstDoctor' element={<FirstDoctorPage />} />
          <Route path='/secondDoctor' element={<SecondDocotorPage/>}/>
          <Route path='/thirdDoctor' element={<ThirdDoctorPage/>}/>
          <Route path='/fourthDoctor' element={<FourthDoctorPage/>}/>
          <Route path='/fifthDoctor' element={<FivfthDoctorPage />} />
          <Route path='/sixthDoctor' element={<SixthDoctorPage/>} />
          <Route path='/sixthDoctor' element={<SixthDoctorPage/>} />
          <Route path='/seventhDoctor' element={<SeventhDoctorPage/>} />
          <Route path='/eighthDoctor' element={<EighthDoctorPage/>} />
          <Route path='/ninthDoctor' element={<NinthDoctorPage/>} />
          <Route path='/tenthDoctor' element={<TenthDoctorPage/>} />
          <Route path='/AppointmentsPage' element={<AppointmentsPage/>} />
        </Routes>
        <FooterComponent/>
      </Router>
    </div>
  );
}

export default App;
