import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:"cart",
    initialState:{
        items:[]
    },
    reducers:{
        addItem : ( state,action )=>{
            console.log(action)
            state.items.push(action.payload)
            //*Remember This Function Does not return anyThing
        },
        clearCart: (state) =>{
            state.items = [];
        },
        removeItem: (state,action)=>{
            state.items.pop();
        }
    }
})

//syntax of redux
export const {addItem,clearCart,removeItem} = cartSlice.actions;
export default cartSlice.reducer; 

// Now Finally i have created my slilce, where this slice go in - store