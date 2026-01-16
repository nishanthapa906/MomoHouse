import { createContext, useReducer } from "react";
export const CartContext = createContext();
const initialState = {
  cartItem: [],
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
      return state;
    }
    case "decrement": {
      return state;
    }
    case "delete": {
      return state;
    }
    case "clearAll": {
      return state;
    }
    default: {
      return state;
    }
  }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};