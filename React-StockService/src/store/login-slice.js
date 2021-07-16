import { createSlice } from '@reduxjs/toolkit';



const loginSlice = createSlice({
    name: 'login',
    initialState: { isLoggedIn: false, isInvalidCredential: false },
    reducers: {
      login(state) {
        state.isLoggedIn = true;
        state.isInvalidCredential=false;
      },
      invalidCredential(state){
          state.isInvalidCredential=true;

      },
      logout(state, action) {
        state.isLoggedIn = false;
      },
    },
  });
  
  export const loginActions = loginSlice.actions;
  
  export default loginSlice;