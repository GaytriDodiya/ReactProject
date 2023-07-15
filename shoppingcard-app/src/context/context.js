import React, { createContext, useContext, useReducer } from 'react'
import faker from "faker";
import CartReduser from './Reducer';
import { ProductReducer } from './Reducer';

const Cart = createContext();
faker.seed(99);
const Context = ({children}) => {
   
    const products = [...Array(20)].map(()=>({
       id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: faker.commerce.price(),
        image: 'https://picsum.photos/seed/'+faker.commerce.productName()+'/200/300',
        // faker.random.image(),
        inStock: faker.random.arrayElement([0, 3, 5, 6, 7]),
        fastDelivery: faker.datatype.boolean(),
        ratings: faker.random.arrayElement([1, 2, 3, 4, 5]),
    }));
    const LOCAL_STRORAGE_KEY = "carts";

    const [state,dispatch] = useReducer(CartReduser ,{
      products:products,
      carts:JSON.parse(localStorage.getItem(LOCAL_STRORAGE_KEY)),

    });
    const [productState, productDispatch] = useReducer(ProductReducer, {
      byStock: false,
      byFastDelivery: false,
      byRating: 0,
      searchQuery: "",
    });
  
  return (
    <Cart.Provider value={{state,dispatch,productState,productDispatch}}> 
      {children}
    </Cart.Provider>
  )
}

export default Context;

export const CartState = () =>{
  return useContext(Cart);
}
