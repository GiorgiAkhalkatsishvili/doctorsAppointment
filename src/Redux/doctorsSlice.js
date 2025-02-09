import { createSlice } from '@reduxjs/toolkit';
import doctorOne from '../assets/images/doctorOne.png'
import doctorTwo from '../assets/images/doctorTwo.png'
import doctorThree from '../assets/images/doctorThree.png'
import doctorFour from '../assets/images/doctorFour.png'
import doctorFive from '../assets/images/doctorFive.png'
import doctorSix from '../assets/images/doctorSix.png'
import doctorSeven from '../assets/images/doctorTen.png'
import doctorEight from '../assets/images/doctorEleven.png'
import doctorNine from '../assets/images/doctorTwelve.png'
import doctorTen from '../assets/images/doctorThirteen.png'


const doctorsSlice = createSlice({
  name: 'doctors',
  initialState: {
    doctors: [
      {id: 1, img: doctorOne, title: "Dr. Richard James", position: "General physician", link: "/firstDoctor", fee: '$50', address: '57th Cross,Richmond Circle, Church Road, London'},
      {id: 2, img: doctorTwo, title: "Dr. Richard James", position: "General physician", link: "/secondDoctor", fee: '$50', address: '57th Cross,Richmond Circle, Church Road, London'},
      {id: 3, img: doctorThree, title: "Dr. Richard James", position: "General physician", link: "/thirdDoctor", fee: '$50', address: '57th Cross,Richmond Circle, Church Road, London'},
      {id: 4, img: doctorFour, title: "Dr. Richard James", position: "General physician", link: "/fourthDoctor", fee: '$50', address: '57th Cross,Richmond Circle, Church Road, London'},
      {id: 5, img: doctorFive, title: "Dr. Richard James", position: "General physician", link: "/fifthDoctor", fee: '$50', address: '57th Cross,Richmond Circle, Church Road, London'},
      {id: 6, img: doctorSix, title: "Dr. Richard James", position: "General physician", link: "/sixthDoctor", fee: '$50', address: '57th Cross,Richmond Circle, Church Road, London'},
      {id: 7, img: doctorSeven, title: "Dr. Richard James", position: "General physician", link: "/seventhDoctor", fee: '$50', address: '57th Cross,Richmond Circle, Church Road, London'},
      {id: 8, img: doctorEight, title: "Dr. Richard James", position: "General physician", link: "/eighthDoctor", fee: '$50', address: '57th Cross,Richmond Circle, Church Road, London'},
      {id: 9, img: doctorNine, title: "Dr. Richard James", position: "General physician", link: "/ninthDoctor", fee: '$50', address: '57th Cross,Richmond Circle, Church Road, London'},
      {id: 10, img: doctorTen, title: "Dr. Richard James", position: "General physician", link: "/tenthDoctor", fee: '$50', address: '57th Cross,Richmond Circle, Church Road, London'},
    ],
    selectedDoctor: [],
    accountCreated: false,
  },
  reducers: {
    addDoctors: (state, action) => {
      state.doctors = action.payload;
    },
     selectDoctor: (state, action) => {
      state.selectedDoctor.push(action.payload);
    },
    createAccount: (state) => {
      state.accountCreated = true;
    },
    resetAccount: (state) => {
      state.accountCreated = false;
    },
  }
});


export const { addDoctors, selectDoctor,  createAccount, resetAccount} = doctorsSlice.actions;
export default doctorsSlice.reducer;
