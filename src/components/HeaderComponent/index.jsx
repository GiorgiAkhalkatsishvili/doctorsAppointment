import React, { useState } from 'react';
import './HeaderComponent.css';
import { Link } from 'react-router-dom';
import profileImg from '../../assets/images/profile_img.png';
import { createAccount } from '../../Redux/doctorsSlice';
import { useDispatch } from 'react-redux';

const HeaderComponent = () => {
  const dispatch = useDispatch();
  const [dropDown, setDropDown] = useState(false);
  const [sideBar, setSideBar] = useState(false);

  const profilePop = () => {
    let btn = document.getElementById("btn");
    btn.style.display = "none";
    let personImg = document.querySelector("#personImg");
    personImg.style.display = "block";
    let dropDown = document.querySelector(".dropDown");
    dropDown.style.display = "flex";
  };

  const toggleSideBar = () => {
    setSideBar(!sideBar);
  };

  const handleCreateAccount = () => {
    dispatch(createAccount());
    profilePop();
  };

  const handleSidebarBtn = () => {
    let Sidebarbtn = document.getElementById("Sidebarbtn");
    Sidebarbtn.innerText = "Account Created!"
    Sidebarbtn.style.backgroundColor = "#06D001";
    Sidebarbtn.style.borderColor = "#06D001"
    dispatch(createAccount());
    let appointmentsLink = document.querySelector(".appointmentLink")
    appointmentsLink.style.display = "block";
  }

  const toggleDropDown = () => {
    setDropDown(!dropDown);
  };

  return (
    <div className="headerComponent">
      <div className="header-inner">
        <Link to="/">
          <div className="header-logo-text">
            <svg
              width="46"
              height="46"
              viewBox="0 0 46 46"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22.9997 0C35.7026 0 45.9997 10.2971 45.9997 23V39.1C45.9997 40.93 45.2728 42.685 43.9788 43.979C42.6848 45.273 40.9297 46 39.0997 46H24.1497V35.9099C24.1497 33.6076 24.29 31.2225 25.4975 29.2629C26.362 27.8586 27.5185 26.6566 28.8884 25.7385C30.2583 24.8204 31.8096 24.2077 33.4371 23.9419L33.8776 23.8706C34.0592 23.8085 34.2168 23.6912 34.3284 23.5351C34.44 23.379 34.5 23.1919 34.5 23C34.5 22.8081 34.44 22.621 34.3284 22.4649C34.2168 22.3088 34.0592 22.1915 33.8776 22.1294L33.4371 22.0581C31.0591 21.6697 28.8632 20.5441 27.1594 18.8403C25.4556 17.1365 24.3301 14.9406 23.9416 12.5626L23.8703 12.1222C23.8082 11.9406 23.6909 11.7829 23.5348 11.6713C23.3787 11.5597 23.1916 11.4997 22.9997 11.4997C22.8078 11.4997 22.6208 11.5597 22.4647 11.6713C22.3086 11.7829 22.1913 11.9406 22.1292 12.1222L22.0579 12.5626C21.7922 14.1902 21.1795 15.7415 20.2614 17.1114C19.3433 18.4814 18.1412 19.6378 16.7368 20.5022C14.7772 21.7097 12.3921 21.85 10.0898 21.85H0.0273438C0.628794 9.68185 10.6832 0 22.9997 0Z"
                fill="#5F6FFF"
              />
              <path
                d="M0 24.15H10.0901C12.3924 24.15 14.7775 24.2903 16.7371 25.4978C18.2689 26.4417 19.5583 27.7311 20.5022 29.2629C21.7097 31.2225 21.85 33.6076 21.85 35.9099V46H6.9C5.07001 46 3.31496 45.273 2.02096 43.979C0.726962 42.685 0 40.93 0 39.1L0 24.15ZM46 2.3C46 2.91 45.7577 3.49501 45.3263 3.92635C44.895 4.35768 44.31 4.6 43.7 4.6C43.09 4.6 42.505 4.35768 42.0737 3.92635C41.6423 3.49501 41.4 2.91 41.4 2.3C41.4 1.69 41.6423 1.10499 42.0737 0.673654C42.505 0.242321 43.09 0 43.7 0C44.31 0 44.895 0.242321 45.3263 0.673654C45.7577 1.10499 46 1.69 46 2.3Z"
                fill="#5F6FFF"
              />
            </svg>
            <div className="header-main-text">
              <h1>Prescripto</h1>
            </div>
          </div>
        </Link>
        <div className="header-list">
          <ul>
            <Link to="/"><li>HOME</li></Link>
            <Link to="/AllDoctors"><li>ALL DOCTORS</li></Link>
            <Link to="/about"><li>ABOUT</li></Link>
            <Link to="/contact"><li>CONTACT</li></Link>
          </ul>
        </div>
        <div className="hamburger-menu" onClick={toggleSideBar}>
          <svg width='37' height='27' viewBox='0 0 37 27' fill='none' xmlns='http://www.w3.org/2000/svg'><rect x='17' y='24' width='20' height='3' rx='1.5' fill='#000B6D'/><rect x='7' y='12' width='30' height='3' rx='1.5' fill='#000B6D'/><rect width='37' height='3' rx='1.5' fill='#000B6D'/></svg>
        </div>
        {sideBar && (
          <div className="sideBar">
            <div className="close-sidebar">
              <p onClick={() => setSideBar(false)}>
<svg width="50px" height="50px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L12 10.5858L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L13.4142 12L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L12 13.4142L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L10.5858 12L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289Z" fill="#0F1729"/>
</svg>
              </p>
            </div>
            <ul className='sideBarLinks'>
             <Link onClick={() => setSideBar(false)} to="/"><li>HOME</li></Link>
            <Link onClick={() => setSideBar(false)} to="/AllDoctors"><li>ALL DOCTORS</li></Link>
            <Link onClick={() => setSideBar(false)} to="/about"><li>ABOUT</li></Link>
            <Link onClick={() => setSideBar(false)} to="/contact"><li>CONTACT</li></Link>
              <div className="appointmentLink">
                <Link onClick={() => setSideBar(false)} to="/AppointmentsPage"><li>My Appointments</li></Link>
            </div>
            </ul>
            <div className="sidebar-btn">
              <button id="Sidebarbtn" onClick={handleSidebarBtn}>Create Account</button>
            </div>
          </div>
        )}

        <div className="header-btn">
          <button id="btn" onClick={handleCreateAccount}>Create Account</button>
          <div className="profile-img">
            <div className="profile-inner">
              <img id="personImg" src={profileImg} alt="img" onClick={toggleDropDown} />
              <svg
                width="14"
                onClick={toggleDropDown}
                className="dropDown"
                height="10"
                viewBox="0 0 14 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.57692 6.63312L1.60393 0.347811C1.23701 -0.115937 0.642112 -0.115937 0.275191 0.347811C-0.0917303 0.811558 -0.0917303 1.56344 0.275191 2.02719L5.91255 9.15219C6.27947 9.61594 6.87437 9.61594 7.24129 9.15219L12.8787 2.02719C13.2456 1.56344 13.2456 0.811558 12.8787 0.347811C12.5117 -0.115937 11.9168 -0.115937 11.5499 0.347811L6.57692 6.63312Z"
                  fill="#7C7C7C"
                />
              </svg>
            </div>

            {/* Conditionally render the dropdown */}
            {dropDown && (
              <div className="profile-drop-down">
                <ul>
                  <li>My Profile</li>
                  <Link to="/AppointmentsPage"><li>My Appointments</li></Link>
                  <li>Logout</li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderComponent;
