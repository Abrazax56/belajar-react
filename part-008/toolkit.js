import { configureStore, createAction, createReducer } from '@reduxjs/toolkit';



const addToCart = createAction('ADD_TO_CART');
const login = createAction('CREATE_SESSION');


const cartReducer = createReducer([], (builder) => {
  builder.addCase(addToCart, (state, action) => {
    state.push(action.payload);
  });
});

const loginReducer = createReducer({status: false}, (builder) => {
  builder.addCase(login, (state, action) => {
    state.status = true;
  });
});

const store = configureStore({
  reducer: {
    login: loginReducer,
    cart: cartReducer
  }
});

store.subscribe(() => {
  console.log(store.getState())
})

const action1 = addToCart({
    id: 3,
    qty: 78
})

store.dispatch(action1)
store.dispatch(login());