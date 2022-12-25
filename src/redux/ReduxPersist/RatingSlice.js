import {createSlice} from '@reduxjs/toolkit';

export const RatingSlice = createSlice({
  name: 'ratingState',
  initialState: {
    state: false,
  },
  reducers: {
    setRatingState: (state, action) => {
      state.state = !state.state;
    },
  },
});

export const {setRatingState} = RatingSlice.actions;

export default RatingSlice.reducer;
