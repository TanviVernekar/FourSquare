import {createSlice} from '@reduxjs/toolkit';

export const SearchSlice = createSlice({
  name: 'searchSlice',
  initialState: {
    searchNear:null,
    searchTextList:null,
    filterList:null,
    filterState:false,
    nearyou:null,
    
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
    setFilterState: (state, action) => {
      state.filterState = false;
 
    },
    setNearYouSearch: (state, action) => {
      state.nearyou = action.payload;
 
    },
   
  },
});

export const {setSearchNear,setSearchTextList,setFilterList,setFilterState,setNearYouSearch} = SearchSlice.actions;

export default SearchSlice.reducer;