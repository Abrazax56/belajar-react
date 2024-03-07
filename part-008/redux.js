//reducer
import {legacy_createStore} from 'redux';
const cartReducer = (
  state = {
    cart: [
      {
        id: 1,
        qty: 67
      }
    ]
  },
  action
  ) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        cart: [...state.cart, action.payload]
      }
      break;
    
    default:
      return state;
  }
}
//store
const store = legacy_createStore(cartReducer);
console.log(store.getState());
//subscribe
store.subscribe(() => {
  console.log(store.getState())
})
//dispatch
const action1 = {
  type: "ADD_TO_CART",
  payload: {
    id: 3,
    qty: 78
  }
}

const action2 = {
  type: "ADD_TO_CART",
  payload: {
    id: 4,
    qty: 78
  }
}
store.dispatch(action1)
store.dispatch(action2)
