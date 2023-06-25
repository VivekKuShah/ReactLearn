import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { clearCart } from "../utils/cartSlice"

export function Cart(){
      const item =useSelector((store) => store.cart.items)
      console.log(item)
    // Always subscribe specific thing

    /* OR we can also do this way
      const store = useSelector( (storeWhole) => storeWhole)
      console.log(store)
      Everytime when my store changes it will re-render my component */

      const dispatch = useDispatch()
      function clear(){
        dispatch(clearCart())
    }
    return (
        <>
        <h1 className="underline font-bold text-3xl">Cart item - {item.length}</h1>
       {
        item.map((item=>{
            return <h1 key={item}>{item}</h1>
        }))
       }
           <button className="p-2 m-2 bg-red-400" onClick={ clear }>
    clearCart</button>
        </>
    )
}