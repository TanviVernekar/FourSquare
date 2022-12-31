import {createSlice} from '@reduxjs/toolkit';

export const ParticularPlace = createSlice({
  name: 'particularPlace',
  initialState: {
    details:null,
    photos:null,
    photoDetails:null,
    review:null,
  },
  reducers: {
    setParticularPlace: (state, action) => {
      state.details = action.payload;
  
    },
    setPhotos: (state, action) => {
      state.photos = action.payload;
    },
    setPhotoDetails: (state, action) => {
      state.photoDetails = action.payload;
    },
    setReview: (state, action) => {
      state.review = action.payload;
    },
  },
});

export const {setParticularPlace,setPhotos,setPhotoDetails,setReview} = ParticularPlace.actions;

export default ParticularPlace.reducer;