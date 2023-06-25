import { configureStore} from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";

const store = configureStore({
    reducer:{
        cart:cartSlice
    }
})

export default store;

/* This is the way to puut the slice into the store
const store = configureStore({
    reducer:{
        cart:cartSlice,

        //Multiple Slice if we have created
        user:userSlice
    }
})
*/