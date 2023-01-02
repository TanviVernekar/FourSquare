import {createSlice} from '@reduxjs/toolkit';

export const FavouriteSlice = createSlice({
  name: 'favouriteSlice',
  initialState: {
    favList: [],
    searchFavList: [],
    favfilterList:[],

  },
  reducers: {
    setFavouriteList: (state, action) => {
      console.log(action);
      state.favList = action.payload;
      // console.log(state.favList)
    },
    setSearchFavList: (state, action) => {
      state.searchFavList = action.payload;
    },
    setFavFilter: (state, action) => {
      state.favfilterList = action.payload;
    },
  },
});

export const {setFavouriteList, setSearchFavList,setFavFilter} = FavouriteSlice.actions;

export default FavouriteSlice.reducer;
