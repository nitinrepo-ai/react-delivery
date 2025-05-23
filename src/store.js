import { configureStore, createSlice } from "@reduxjs/toolkit";

// Product Slice
const productSlice = createSlice({
  name: 'products',
  initialState: {
    veg: [
      { name: 'tomato', price: 50.0, image: "./public/tomato.jpg" },
      { name: 'carrot', price: 60.0, image: "./public/carrot.jpg" },
      { name: 'potatoes', price: 40.0, image: "./public/potato.jpg" },
      { name: 'onion', price: 50.0, image: "./public/onion.jpg" },
      { name: 'lady finger', price: 45.0, image: "./public/Laddy.jpg" },
      { name: 'cauliflower', price: 35.0, image: "./public/cauliflower.jpeg" },
      { name: 'eggplant', price: 25.0, image: "./public/aggplant.jpg" },
      { name: 'chilli', price: 45.0, image: "./public/chilli.jpg" },
      { name: 'broccoli', price: 80.0, image: "./public/broccoli.jpg" },
      { name: 'cabbage', price: 50.0, image: "./public/cabbage.jpg" },
    ],
    nonveg: [
      { name: 'mutton', price: 200, image: "./public/mutton.jpg" },
      { name: 'chicken', price: 250, image: "./public/chicken.jpg" },
      { name: 'duck', price: 450, image: "./public/duck.jpeg" },
      { name: 'rabbit', price: 500, image: "./public/rabit.jpeg" },
      { name: 'prawns', price: 200, image: "./public/prawans.jpeg" },
      { name: 'snail', price: 300, image: "./public/snail.jpeg" },
      { name: 'turkey', price: 800, image: "./public/tarkey.jpeg" },
      { name: 'fish', price: 360, image: "./public/fish.jpg" },
      { name: 'crab', price: 260, image: "./public/craps.jpg" },
      { name: 'pork', price: 50.0, image: "./public/pork.jpeg" },
    ],
    chocolate: [
      { name: 'Dairy-Milk', price: 20, image: "./public/Dairy-milk.jpeg" },
      { name: '5Star', price: 25, image: "./public/5Star.jpeg" },
      { name: 'Fuse', price: 30, image: "./public/fuse.jpeg" },
      { name: 'Munch', price: 30, image: "./public/munch.jpeg" },
      { name: 'Crispello', price: 10, image: "./public/Crispello.jpeg" },
      { name: 'Bourbon', price: 50, image: "./public/bournbon.jpeg" },
      { name: 'Kisme', price: 5, image: "./public/kisme.jpeg" },
    ]
  },
  reducers: {}
});

// Cart Slice
const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    AddToCart: (state, action) => {
      const item = state.find(item => item.name === action.payload.name);
      if (item) {
        item.quantity += 1;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
    },
    IncCart: (state, action) => {
      const item = state.find(item => item.name === action.payload.name);
      if (item) item.quantity += 1;
    },
    DecCart: (state, action) => {
      const item = state.find(item => item.name === action.payload.name);
      if (item) {
        if (item.quantity > 1) {
          item.quantity -= 1;
        } else {
          return state.filter(i => i.name !== action.payload.name);
        }
      }
    },
    removeFromCart: (state, action) => {
      return state.filter(item => item.name !== action.payload.name);
    },
    ClearCart: () => []
  }
});

// Orders Slice
const orderSlice = createSlice({
  name: 'Orders',
  initialState: [],
  reducers: {
    orderDetails: (state, action) => {
      state.push(action.payload);
    }
  }
});
const userSlice = createSlice({
  name: 'users',
  initialState: { 
    user: [],
    isAuthenticated: false,
    currentUser: null,
  },
  reducers: {
    loginUser: (state, action) => {
      let userFound = state.user.find(user => user.name === action.payload.name);
      if (userFound) {
        state.isAuthenticated = true;
        state.currentUser = userFound;
        alert("login Successfull")
      } else {
        alert("Invalid Credentials");
      }
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.currentUser = null;
    },
    registerUser: (state, action) => {
      state.user.push(action.payload);
    },
  },
});

// Export actions
export const { AddToCart, IncCart, DecCart, removeFromCart, ClearCart } = cartSlice.actions;
export const { orderDetails } = orderSlice.actions;
export const { registerUser, loginUser, logout } = userSlice.actions;

// Configure Store
const store = configureStore({
  reducer: {
    products: productSlice.reducer,
    cart: cartSlice.reducer,
    Orders: orderSlice.reducer,
    users: userSlice.reducer,
  }
});

export default store;
