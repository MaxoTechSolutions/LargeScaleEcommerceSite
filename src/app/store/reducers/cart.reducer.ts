import { Action } from '@ngrx/store';
import { ActionTypes } from '../actions/cart.actions';
import { Product } from '../../models/Product';

const initialState = {
  products: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.ADD_TO_CART: {
      const addProduct = Object.assign({}, action.payload.product);
      console.log("array of addproduct"+ addProduct.name);
      addProduct.quantity = action.payload.quantity;
      addProduct.price = (parseInt(addProduct.price) * parseInt(addProduct.quantity)).toFixed(2);
      
      return {
        ...state,
        products: [
         
          ...state.products,
          addProducts(addProduct,state.products)
        ],
        
        
      };
    };
    case ActionTypes.REMOVE_FROM_CART: {
      //  return a new array excluding the product that needs to be removed
      const index = state.products.findIndex((product) => product.id === action.payload.id);
      return {
        ...state,
        products: [
          ...state.products.slice(0, index),
          ...state.products.slice(index + 1)
        ]
      }
    }

    default:
      return state;
  }
}

export function addProducts(ass, sat){
console.log("Hey dude this is the one "+sat.length);
  return ass;

}
