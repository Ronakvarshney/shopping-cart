import { createSlice } from "@reduxjs/toolkit";


export const Cartslice=createSlice({
    name:'cart',
    initialState:[],
    reducers:{
        //action denotes input parameter and state denotes cart
        add:(state,action)=>{
            state.push(action.payload);
        },
        remove:(state,action)=>{
            return state.filter((item)=> item.id != action.payload);
        },
    }
});

export const{add , remove}=Cartslice.actions;
export default Cartslice.reducer;