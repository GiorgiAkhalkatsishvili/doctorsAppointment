import { createSlice } from '@reduxjs/toolkit';
import doctorOne from '../assets/images/additional-doc.png'
import doctorTwo from '../assets/images/doc2.png'
import doctorThree from '../assets/images/doc3.png'
import doctorFour from '../assets/images/doc4.png'
import doctorFive from '../assets/images/doc5.png'
import doctorSix from '../assets/images/doc6.png'
import doctorSeven from '../assets/images/doc7.png'
import doctorEight from '../assets/images/doc8.png'
import doctorNine from '../assets/images/doc9.png'
import doctorTen from '../assets/images/doc10.png'



const doctorsSlice = createSlice({
  name: 'doctors',
  initialState: {
    doctors: [
      {
        id: 1, img: doctorOne, title: "Dr. Richard James", position: "General physician", link: "/firstDoctor", fee: '$50', address: '57th Cross,Richmond Circle, Church Road, London',dates: [
          { monday: 'MON', number: 10 },
          { tuesday: 'TUE', number: 11 },
          { wednesday: 'WED', number: 12 },
          { thursday: 'THU', number: 13 },
          { friday: 'FRI', number: 14 },
          { saturday: 'SAT', number: 15 },
          { sunday: 'SUN', number: 16 },
        ],
        time: [
          {timeOne: '8:00 am'},
          {timeTwo: '8:30 am'},
          {timeThree: '9:00 am'},
          {timeFour: '9:30 am'},
          {timeFive: '10:00 am'},
          {timeSix: '10:30 am'},
          {timeSeven: '11:00 am'},
          {timeEight: '11:30 am'},
        ]
      },
      {id: 2, img: doctorTwo, title: "Dr. Richard James", position: "Gynecologist", link: "/secondDoctor", fee: '$50', address: '57th Cross,Richmond Circle, Church Road, London', dates: [
          { monday: 'MON', number: 10 },
          { tuesday: 'TUE', number: 11 },
          { wednesday: 'WED', number: 12 },
          { thursday: 'THU', number: 13 },
          { friday: 'FRI', number: 14 },
          { saturday: 'SAT', number: 15 },
          { sunday: 'SUN', number: 16 },
      ],
        time: [
          {timeOne: '8:00 am'},
          {timeTwo: '8:30 am'},
          {timeThree: '9:00 am'},
          {timeFour: '9:30 am'},
          {timeFive: '10:00 am'},
          {timeSix: '10:30 am'},
          {timeSeven: '11:00 am'},
          {timeEight: '11:30 am'},
        ]
            },
      {id: 3, img: doctorThree, title: "Dr. Richard James", position: "Dermatologist", link: "/thirdDoctor", fee: '$50', address: '57th Cross,Richmond Circle, Church Road, London', dates: [
          { monday: 'MON', number: 10 },
          { tuesday: 'TUE', number: 11 },
          { wednesday: 'WED', number: 12 },
          { thursday: 'THU', number: 13 },
          { friday: 'FRI', number: 14 },
          { saturday: 'SAT', number: 15 },
          { sunday: 'SUN', number: 16 },
      ],
      time: [
          {timeOne: '8:00 am'},
          {timeTwo: '8:30 am'},
          {timeThree: '9:00 am'},
          {timeFour: '9:30 am'},
          {timeFive: '10:00 am'},
          {timeSix: '10:30 am'},
          {timeSeven: '11:00 am'},
          {timeEight: '11:30 am'},
        ]
      },
      {id: 4, img: doctorFour, title: "Dr. Richard James", position: "Pediatricians", link: "/fourthDoctor", fee: '$50', address: '57th Cross,Richmond Circle, Church Road, London', dates: [
          { monday: 'MON', number: 10 },
          { tuesday: 'TUE', number: 11 },
          { wednesday: 'WED', number: 12 },
          { thursday: 'THU', number: 13 },
          { friday: 'FRI', number: 14 },
          { saturday: 'SAT', number: 15 },
          { sunday: 'SUN', number: 16 },
      ],
      time: [
          {timeOne: '8:00 am'},
          {timeTwo: '8:30 am'},
          {timeThree: '9:00 am'},
          {timeFour: '9:30 am'},
          {timeFive: '10:00 am'},
          {timeSix: '10:30 am'},
          {timeSeven: '11:00 am'},
          {timeEight: '11:30 am'},
        ]
      },
      {id: 5, img: doctorFive, title: "Dr. Richard James", position: "Neurologist", link: "/fifthDoctor", fee: '$50', address: '57th Cross,Richmond Circle, Church Road, London', dates: [
          { monday: 'MON', number: 10 },
          { tuesday: 'TUE', number: 11 },
          { wednesday: 'WED', number: 12 },
          { thursday: 'THU', number: 13 },
          { friday: 'FRI', number: 14 },
          { saturday: 'SAT', number: 15 },
          { sunday: 'SUN', number: 16 },
      ],
      time: [
          {timeOne: '8:00 am'},
          {timeTwo: '8:30 am'},
          {timeThree: '9:00 am'},
          {timeFour: '9:30 am'},
          {timeFive: '10:00 am'},
          {timeSix: '10:30 am'},
          {timeSeven: '11:00 am'},
          {timeEight: '11:30 am'},
        ]
      },
      {id: 6, img: doctorSix, title: "Dr. Richard James", position: "Gastroenterologist", link: "/sixthDoctor", fee: '$50', address: '57th Cross,Richmond Circle, Church Road, London', dates: [
          { monday: 'MON', number: 10 },
          { tuesday: 'TUE', number: 11 },
          { wednesday: 'WED', number: 12 },
          { thursday: 'THU', number: 13 },
          { friday: 'FRI', number: 14 },
          { saturday: 'SAT', number: 15 },
          { sunday: 'SUN', number: 16 },
      ],
      time: [
          {timeOne: '8:00 am'},
          {timeTwo: '8:30 am'},
          {timeThree: '9:00 am'},
          {timeFour: '9:30 am'},
          {timeFive: '10:00 am'},
          {timeSix: '10:30 am'},
          {timeSeven: '11:00 am'},
          {timeEight: '11:30 am'},
        ]
      },
      {id: 7, img: doctorSeven, title: "Dr. Richard James", position: "General physician", link: "/seventhDoctor", fee: '$50', address: '57th Cross,Richmond Circle, Church Road, London', dates: [
          { monday: 'MON', number: 10 },
          { tuesday: 'TUE', number: 11 },
          { wednesday: 'WED', number: 12 },
          { thursday: 'THU', number: 13 },
          { friday: 'FRI', number: 14 },
          { saturday: 'SAT', number: 15 },
          { sunday: 'SUN', number: 16 },
      ],
      time: [
          {timeOne: '8:00 am'},
          {timeTwo: '8:30 am'},
          {timeThree: '9:00 am'},
          {timeFour: '9:30 am'},
          {timeFive: '10:00 am'},
          {timeSix: '10:30 am'},
          {timeSeven: '11:00 am'},
          {timeEight: '11:30 am'},
        ]
      },
      {id: 8, img: doctorEight, title: "Dr. Richard James", position: "Gynecologist", link: "/eighthDoctor", fee: '$50', address: '57th Cross,Richmond Circle, Church Road, London', dates: [
          { monday: 'MON', number: 10 },
          { tuesday: 'TUE', number: 11 },
          { wednesday: 'WED', number: 12 },
          { thursday: 'THU', number: 13 },
          { friday: 'FRI', number: 14 },
          { saturday: 'SAT', number: 15 },
          { sunday: 'SUN', number: 16 },
      ],
      time: [
          {timeOne: '8:00 am'},
          {timeTwo: '8:30 am'},
          {timeThree: '9:00 am'},
          {timeFour: '9:30 am'},
          {timeFive: '10:00 am'},
          {timeSix: '10:30 am'},
          {timeSeven: '11:00 am'},
          {timeEight: '11:30 am'},
        ]
      },
      {id: 9, img: doctorNine, title: "Dr. Richard James", position: "Pediatricians", link: "/ninthDoctor", fee: '$50', address: '57th Cross,Richmond Circle, Church Road, London', dates: [
          { monday: 'MON', number: 10 },
          { tuesday: 'TUE', number: 11 },
          { wednesday: 'WED', number: 12 },
          { thursday: 'THU', number: 13 },
          { friday: 'FRI', number: 14 },
          { saturday: 'SAT', number: 15 },
          { sunday: 'SUN', number: 16 },
      ],
      time: [
          {timeOne: '8:00 am'},
          {timeTwo: '8:30 am'},
          {timeThree: '9:00 am'},
          {timeFour: '9:30 am'},
          {timeFive: '10:00 am'},
          {timeSix: '10:30 am'},
          {timeSeven: '11:00 am'},
          {timeEight: '11:30 am'},
        ]
      },
      {id: 10, img: doctorTen, title: "Dr. Richard James", position: "Neurologist", link: "/tenthDoctor", fee: '$50', address: '57th Cross,Richmond Circle, Church Road, London', dates: [
          { monday: 'MON', number: 10 },
          { tuesday: 'TUE', number: 11 },
          { wednesday: 'WED', number: 12 },
          { thursday: 'THU', number: 13 },
          { friday: 'FRI', number: 14 },
          { saturday: 'SAT', number: 15 },
          { sunday: 'SUN', number: 16 },
      ],
      time: [
          {timeOne: '8:00 am'},
          {timeTwo: '8:30 am'},
          {timeThree: '9:00 am'},
          {timeFour: '9:30 am'},
          {timeFive: '10:00 am'},
          {timeSix: '10:30 am'},
          {timeSeven: '11:00 am'},
          {timeEight: '11:30 am'},
        ]
      },
    ],
    selectedDoctor: [],
    accountCreated: false,
  },
  reducers: {
    addDoctors: (state, action) => {
      state.doctors = action.payload;
    },
     selectDoctor: (state, action) => {
       const exists = state.selectedDoctor.some(item=>item.id === action.payload.id);
       if (!exists) {
        state.selectedDoctor.push(action.payload)  
       }
    },
    createAccount: (state) => {
      state.accountCreated = true;
    },
    resetAccount: (state) => {
      state.accountCreated = false;
    },
    removeDoctor: (state, action)=> {
  state.selectedDoctor = state.selectedDoctor.filter(doc => doc.id !== action.payload)
    },
  }
});


export const { addDoctors, selectDoctor,  createAccount, resetAccount, removeDoctor} = doctorsSlice.actions;
export default doctorsSlice.reducer;
