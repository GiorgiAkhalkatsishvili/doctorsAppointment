import React from 'react'
import './FooterComponent.css'

const FooterComponent = () => {
  return (
    <div className='footerComponent'>
      <div className="footer-inner">
        <div className="footer-main-info">
         <div className="footer-main-logo">
         <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22.9997 0C35.7026 0 45.9997 10.2971 45.9997 23V39.1C45.9997 40.93 45.2728 42.685 43.9788 43.979C42.6848 45.273 40.9297 46 39.0997 46H24.1497V35.9099C24.1497 33.6076 24.29 31.2225 25.4975 29.2629C26.362 27.8586 27.5185 26.6566 28.8884 25.7385C30.2583 24.8204 31.8096 24.2077 33.4371 23.9419L33.8776 23.8706C34.0592 23.8085 34.2168 23.6912 34.3284 23.5351C34.44 23.379 34.5 23.1919 34.5 23C34.5 22.8081 34.44 22.621 34.3284 22.4649C34.2168 22.3088 34.0592 22.1915 33.8776 22.1294L33.4371 22.0581C31.0591 21.6697 28.8632 20.5441 27.1594 18.8403C25.4556 17.1365 24.3301 14.9406 23.9416 12.5626L23.8703 12.1222C23.8082 11.9406 23.6909 11.7829 23.5348 11.6713C23.3787 11.5597 23.1916 11.4997 22.9997 11.4997C22.8078 11.4997 22.6208 11.5597 22.4647 11.6713C22.3086 11.7829 22.1913 11.9406 22.1292 12.1222L22.0579 12.5626C21.7922 14.1902 21.1795 15.7415 20.2614 17.1114C19.3433 18.4814 18.1412 19.6378 16.7368 20.5022C14.7772 21.7097 12.3921 21.85 10.0898 21.85H0.0273438C0.628794 9.68185 10.6832 0 22.9997 0Z" fill="#5F6FFF"/>
<path d="M0 24.15H10.0901C12.3924 24.15 14.7775 24.2903 16.7371 25.4978C18.2689 26.4417 19.5583 27.7311 20.5022 29.2629C21.7097 31.2225 21.85 33.6076 21.85 35.9099V46H6.9C5.07001 46 3.31496 45.273 2.02096 43.979C0.726962 42.685 0 40.93 0 39.1L0 24.15ZM46 2.3C46 2.91 45.7577 3.49501 45.3263 3.92635C44.895 4.35768 44.31 4.6 43.7 4.6C43.09 4.6 42.505 4.35768 42.0737 3.92635C41.6423 3.49501 41.4 2.91 41.4 2.3C41.4 1.69 41.6423 1.10499 42.0737 0.673654C42.505 0.242321 43.09 0 43.7 0C44.31 0 44.895 0.242321 45.3263 0.673654C45.7577 1.10499 46 1.69 46 2.3Z" fill="#5F6FFF"/>
        </svg>
        <h1>Prescripto</h1>
      </div>
      <div className="footer-fake-text">
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
      </div>
      </div>
      <div className="footer-lists">
        <div className="listOne">
          <ul className='first'>
              <li>COMPANY</li>
            </ul>
              <ul className='second'>
                 <li>Home</li>
              <li>About us</li>
              <li>Contact us</li>
              <li>Privacy policy</li>
             </ul>
          </div>
          <div className="listTwo">
             <ul className='first'>
              <li>GET IN TOUCH</li>
            </ul>
              <ul className='second'>
                <li>+1-212-456-7890</li>
              <li>greatstackdev@gmail.com</li>
              </ul>
          </div>
      </div>
      </div>
      <hr />
      <div className="final-text">
         <p>Copyright © 2024 GreatStack - All Right Reserved.</p>
     </div>
    </div>
  )
}

export default FooterComponent
