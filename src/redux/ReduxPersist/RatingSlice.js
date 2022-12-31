import {createSlice} from '@reduxjs/toolkit';

export const RatingSlice = createSlice({
  name: 'ratingState',
  initialState: {
    state: false,
    about:null,
  },
  reducers: {
    setRatingState: (state, action) => {
      state.state = !state.state;
    },
    setAboutstate: (state, action) => {
      state.about = action.payload;
    },
  },
});

export const {setRatingState,setAboutstate} = RatingSlice.actions;

export default RatingSlice.reducer;
