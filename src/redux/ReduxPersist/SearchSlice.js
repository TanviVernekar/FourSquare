import {createSlice} from '@reduxjs/toolkit';

export const SearchSlice = createSlice({
  name: 'searchSlice',
  initialState: {
    searchNear:null,
    searchTextList:null,
    filterList:null,
  },
  reducers: {
    setSearchNear: (state, action) => {
      state.searchNear = action.payload;
 
    },
    setSearchTextList: (state, action) => {
      state.searchTextList = action.payload;
 
    },
    setFilterList: (state, action) => {
      state.filterList = action.payload;
 
    },
   
   
 
  },
});

export const {setSearchNear,setSearchTextList,setFilterList} = SearchSlice.actions;

export default SearchSlice.reducer;