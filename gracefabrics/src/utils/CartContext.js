import React, {createContext, useReducer, useContext} from "react";

const myContext = createContext();
const { Provider } = myContext

const reducer = (state, action)=> {

  switch(action.type){
    case 'addItem' : 
      return{
        ...state,
        cart:[action.product,...state.cart]
      }
    case 'removeItem' :
      return{
        cart:[ 
          ...state.cart.filter(item => item.name !== action.product.name) 
        ]
      }
  }
}

const CartProvider = ({ value = [], ...props }) => {

  const [state, dispatch] = useReducer(reducer, 
    {
      cart:[]
    }
  )
  return <Provider value={[state, dispatch]} {...props}/>

}

const useCartContext = ()=> {

  return useContext(myContext)

}

export {CartProvider, useCartContext}