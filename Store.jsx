import { configureStore } from "@reduxjs/toolkit";
import Cartslice from "./slices/Cartslice";


export const store= configureStore({
    reducer:{
        cart: Cartslice,
    }
})