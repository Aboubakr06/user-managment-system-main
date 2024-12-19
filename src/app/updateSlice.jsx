import { createSlice } from "@reduxjs/toolkit";
import Data from "../Data.jsx";

const updateSlice = createSlice({
  name: "update",
  initialState: { value: Data },
  reducers: {
    createUser: (state, action) => {
      state.value.push(action.payload);
    },
    updateUser: (state, action) => {
       state.value=state.value.map(user => {
			if(user.id===action.payload.id){ 
				return ({...user,nom:action.payload.nom})
			} else {
				return user;
			}
		})
    },
    deleteUser: (state, action) => {
      state.value = state.value.filter(user => user.id != action.payload.id);
    }
  },
});

export const { createUser, updateUser, deleteUser } = updateSlice.actions;
export default updateSlice.reducer;
