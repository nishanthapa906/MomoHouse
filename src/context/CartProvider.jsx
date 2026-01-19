import { createContext, useEffect, useReducer } from "react";
export const CartContext = createContext();
const getData = () => {
  let res = localStorage.getItem("cartItems");
  return res ? JSON.parse(res) : [];
};


const initialState = {
  cartItem: getData()
};
const cartReducer = (state, action) => {
  switch (action.type) {
    case "addToCart": {
      console.log(action);
      //   console.log(action);
      // todo
      // 1.collect product or item
      // 2 check (find)
      // 3.if exist do nothing or increment the qty.
      // 3.not exist, first add qty , in  that item,
      // then copy all the items from the old cartItem and return new cartItem
      const isExist = state.cartItem.find((item) => {
        return item.id == action.payload.id;
      });
      if (isExist) {
        return state;
      } else {
        const newItem = { ...action.payload, qty: 1 };
        const newCartItems = [...state.cartItem, newItem];
        return {
          cartItem: newCartItems,
        };
      }
    }
    case "increment": {

      //tod0
      // 1. first get Product
      // 2. find that product and increase the qty of that product 
      // 3. return new product


      let newCartItems = state.cartItem.map((item) => {
        return item.id == action.payload.id
          ? {
            ...item,
            qty:  item.qty + 1  
           
          }
          : item;
      });
      return {
        ...state , cartItem: newCartItems,
        
        
      };
    }

    case "decrement": {

      let newCartItems = state.cartItem.map((item) => {
        return item.id == action.payload.id
          ? {
            ...item,
            qty: item.qty>1 ? item.qty - 1 : 1
          }
          : item;
      });
      return {
        ...state , cartItem: newCartItems,
      };
    }

    case "delete": {
       let filterItem = state.cartItem.filter((item) =>{
        return item.id !== action.paylod.id
       }) 

      return {
        cartItem: filterItem
      };
    }
    case "clearAll": {
      return { cartItem: []} ;
    }
    default: {
      return state;
    }
  }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(state.cartItem))
  })

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};