import { createSlice } from '@reduxjs/toolkit';



const stockServiceSlice = createSlice({
    name: 'stockService',
    initialState: { ticks: {},watchLists:{} },
    reducers: {
      getTopTenTicks(state,action) {
        state.ticks = action.payload.ticks;
      
      },
      getTopWatchLists(state,action){
        state.watchLists=action.payload.watchLists;
      },
      logout: state => {
       
        state.ticks ={};
        state.watchLists={};
        // But, as we have taken care of this particular "logout" action
        // in rootReducer, we can use it to CLEAR the complete Redux Store's state
      }
   
    },
  });
  
  export const stockServiceActions = stockServiceSlice.actions;
  
  export default stockServiceSlice;