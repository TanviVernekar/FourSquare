import {createSlice} from '@reduxjs/toolkit';

export const UserDetailsSlice = createSlice({
  name: 'userDetails',
  initialState: {
    token: null,
    latitude: null,
    longitude: null,
  },
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
    // setUserData: (state, action) => {
    //   state.userData = action.payload;
    // },
    // setNewUser: (state, action) => {
    //   state.newUser = action.payload;
    // },
    setLatitude: (state, action) => {
      state.latitude = action.payload;
    },
    setLongitude: (state, action) => {
      state.longitude = action.payload;
     
    },
  },
});

export const {setToken, setLatitude, setLongitude} = UserDetailsSlice.actions;

export default UserDetailsSlice.reducer;
