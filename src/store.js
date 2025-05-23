import { configureStore, createSlice } from "@reduxjs/toolkit";

// Product Slice
const productSlice = createSlice({
  name: 'products',
  initialState: {
    veg: [
      { name: 'tomato', price: 50.0, image: "https://upload.wikimedia.org/wikipedia/commons/8/89/Tomato_je.jpg" },
      { name: 'carrot', price: 60.0, image: "https://e7.pngegg.com/pngimages/604/93/png-clipart-carrot-soup-baby-food-vegetable-carrot-natural-foods-soup-thumbnail.png" },
      { name: 'potatoes', price: 40.0, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI7t2YvyHFQgaI_hiHdCsZ1RNUvQnMVrpfRA&s" },
      { name: 'onion', price: 50.0, image: "https://media.istockphoto.com/id/499146870/photo/red-onions.jpg?s=612x612&w=0&k=20&c=OaZUynAtxIJyPaSgAsAGWwAbpTs_EfKF5zT_UvBDpbY=" },
      { name: 'lady finger', price: 45.0, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkcjdaGYqaaTt1rQgD8BTb7P8ceRkLh36Qew&s" },
      { name: 'cauliflower', price: 35.0, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSungRAJWDJxxBLqxccucPcwq8YZ0P7P6k34Q&s" },
      { name: 'eggplant', price: 25.0, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_CY21odPv0RypgCavnOAssLNr9UFaxwbdnQ&s" },
      { name: 'chilli', price: 45.0, image: "https://5.imimg.com/data5/SELLER/Default/2020/9/XA/ZT/UM/106541195/green-chilli-1229x-jpg.jpg" },
      { name: 'broccoli', price: 80.0, image: "https://media.istockphoto.com/id/1364035705/photo/fresh-broccoli-on-white-background.jpg?s=612x612&w=0&k=20&c=fEcEq65rKBmT8PltpAyg_-na0WomTJ6S6m04uXQQtJs=" },
      { name: 'cabbage', price: 50.0, image: "https://media.istockphoto.com/id/114419377/photo/cabbage.jpg?s=612x612&w=0&k=20&c=bukwc3dM15E9k_5JIQBeOeh3xWHOGcgJuEgCkJMl6Jw=" },
    ],
    nonveg: [
      { name: 'mutton', price: 200, image: "https://t4.ftcdn.net/jpg/02/66/03/21/360_F_266032107_lre5ZWBTTVJmMvYWyf3zYdb40QhBYDGA.jpg" },
      { name: 'chicken', price: 250, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGy_j9N1D6TUc7GEfzdRYBXrdlq8BhAEPgSg&s" },
      { name: 'duck', price: 450, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQHQ7tHKXBcubT_iqBTja7MNzSxIeClbybdQ&s" },
      { name: 'rabbit', price: 500, image: "https://media.istockphoto.com/id/1333194737/photo/roasted-rabbit-meat-sliced-with-garlic-lemon-and-rosemary.jpg?s=612x612&w=0&k=20&c=IUv1EGjoBzfmCQxOjucrwzXrFiWxfhbRkGdUdy170Zo=" },
      { name: 'prawns', price: 200, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUH8rHZUX4llE__VOofRARxAPEXZH26U-8sQ&s" },
      { name: 'snail', price: 300, image: "https://media.istockphoto.com/id/475268977/photo/closeup-of-eating-the-fried-snails-with-garlic-butter.jpg?s=612x612&w=0&k=20&c=LZ4scJFWAc36-677kg9L5e7_2Yt_4sgh10nJRFTnawQ=" },
      { name: 'turkey', price: 800, image: "https://www.foodnetwork.com/content/dam/images/food/fullset/2010/10/4/0/FNM_110110-Cover-008-no-dial_s4x3.jpg" },
      { name: 'fish', price: 360, image: "https://www.shutterstock.com/image-photo/delicious-grilled-dorado-sea-bream-260nw-724276639.jpg" },
      { name: 'crab', price: 260, image: "https://media.istockphoto.com/id/497130431/photo/steamed-crap-with-spicy-seafood-sauce.jpg?s=612x612&w=0&k=20&c=_6ZKs_b9-bvOKO0mKA6uLQh6iM69hYIajCYMqodXp4c=" },
      { name: 'pork', price: 50.0, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTH1okpy4vBBwPTGXCcitPA_V_pBbIAnXCzg&s" },
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
