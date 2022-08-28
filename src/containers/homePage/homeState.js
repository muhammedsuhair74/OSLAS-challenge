import { createSlice } from '@reduxjs/toolkit';
import cyclist from '../../assets/cyclist.png';
import shiba1 from '../../assets/shiba-inu (1).png';
import shiba from '../../assets/shiba-inu.png';
import silent from '../../assets/silent.png';
import oslash from '../../assets/oslash.png';


const initialState = {
  data: {
    email : [
      {
        name: 'Wade Cooper',
        access: 'Can edit',
        image: cyclist,
        selected: true
      },
      {
        name: 'Ariene Mccoy',
        access: 'Can view',
        image: shiba1,
        selected: true
      },
      {
        name:'muhammed suhair',
        access: 'Can edit',
        image: shiba,
        selected: true
      },
      {
        name:'Johns',
        access: 'No Access',
        image: silent,
        selected: false
      },
      {
        name:'Alen',
        access: 'Can edit',
        image: shiba,
        selected: false
      },
      {
        name:'catheriene',
        access: 'Can view',
        image: silent,
        selected: false
      },
      {
        name:'thomas',
        access: 'Can edit',
        image: shiba1,
        selected: false
      },
      {
        name:'shaji',
        access: 'No Access',
        image: cyclist,
        selected: false
      },
      {
        name:'vinay',
        access: 'Can edit',
        image: shiba1,
        selected: false
      },
      {
        name:'irfan',
        access: 'No Access',
        image: cyclist,
        selected: false
      }],
      groups: [
        {
          name:'Everyone at OSlash',
          numberOfMembers: 23,
          access: 'Can view',
          image: oslash,
          selected: true
        },
        {
          name:'Engineering',
          access: 'No Access',
          image: oslash,
          numberOfMembers: 23,
          selected: false
        },
        {
          name:'QA',
          image: oslash,
          access: 'Can edit',
          selected: false,
          numberOfMembers: 23,
        },
        {
          name:'Administration',
          image: oslash,
          access: 'Can view',
          selected: false,
          numberOfMembers: 23,
        },
        {
          name:'Product Manager',
          image: oslash,
          access: 'Can view',
          selected: false
        },
        {
          numberOfMembers: 23,
          name:'Project 1',
          access: 'No Access',
          image: oslash,
          selected: false
        },
        {
          name:'Project 2',
          numberOfMembers: 23,
          access: 'Can view',
          image: oslash,
          selected: false
        },
        {
          name:'Project 3',
          access: 'No Access',
          image: oslash,
          numberOfMembers: 23,
          selected: false
        },
        {
          name:'Project 4',
          access: 'Can view',
          image: oslash,
          selected: false,
          numberOfMembers: 23,
        }
      ]
  }  
}

export const homeState = createSlice({
  name: 'homeState',
  initialState,
  reducers: {
    setData: (state, payload) => {
      debugger
      state.data = {...payload.payload}
    }
  }
});

export const { setData } = homeState.actions;

export default homeState.reducer;