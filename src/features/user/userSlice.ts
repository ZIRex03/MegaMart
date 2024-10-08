import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { USER_URL } from "../../utils/constants";

// export const checkEmail = createAsyncThunk<any,any>(
//   "users/checkEmail",

//   async (payload, thunkAPI) => {

//     try {
//       const res = await axios.post(`${USER_URL}/users/is-available`, payload);
//       console.log(res.data);
//       return res.data.isAvailable;
//     } catch (err) {
//       return thunkAPI.rejectWithValue(err);
//     }
//   }
// );

interface UserState{
  currentUser: null,
  cart: never[],
  isLoading: boolean,
  formType: string,
  showForm: boolean,
  availableEmail: boolean,
  error: null | string,
}

export const createUser = createAsyncThunk<any, any>(
  "users/createUser",

  async (payload, thunkAPI) => {

    try {
      const res = await axios.post(`${USER_URL}/users`, payload);
      return res.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }

);

export const updateUser = createAsyncThunk<any, any, { rejectValue: string}>(
  "users/updateUser",

  async (payload, thunkAPI) => {
    try {
      const res = await axios.put(`${USER_URL}/users/${payload.id}`, payload);
      return res.data;
    } catch (err:any) {
      return thunkAPI.rejectWithValue(err.response.data.message[0]);
    }
  }

);

export const loginUser = createAsyncThunk<any, any>(
  "users/loginUser",

  async (payload, thunkAPI) => {

    try {
      const res = await axios.post(`${USER_URL}/auth/login`, payload);

      if(!res.data.access_token){
        return thunkAPI.rejectWithValue("Access token not found");
      }
      const login = await axios(`${USER_URL}/auth/profile`,{
        headers:{
          "Authorization": `Bearer ${res.data.access_token}`,
        }
      });
      return login.data;
    }
    catch(err:any){
      return thunkAPI.rejectWithValue(err);
    }
  
  }
  
);

const initialState:UserState = {
  currentUser: null,
  cart: [],
  isLoading: false,
  formType: "signup",
  showForm: false,
  availableEmail: true,
  error: null,
}

const userSlice = createSlice({
  name: "user",
  initialState,

  reducers: {
    addItemToCart: (state, {payload}) => {

        let newCart:any = [...state.cart];
        const found = state.cart.find(({id}) => id === payload.id)

        if (found){

            newCart = newCart.map((item:any) => {
                return item.id === payload.id ? {...item, quantity: payload.quantity || item.quantity + 1} : item;
            });

        } else newCart.push({...payload, quantity:1});

        state.cart = newCart;

    },

    removeItemFromCart: (state, {payload}) => {
      state.cart = state.cart.filter(({id}) => id !== payload)
    },

    toggleForm : (state, {payload}) => {
        state.showForm = payload;
    },
    toggleFormType : (state, {payload}) => {
      state.formType = payload;
    },
    toggleAvailableEmail: (state, {payload}) => {
      state.availableEmail = payload;
    },
    logoutProfile:(state) => {
      state.currentUser = null;
    }
  },

  extraReducers: (builder) => {
    builder.addCase(createUser.fulfilled, (state, {payload}) => {
      state.currentUser = payload;
    });
    builder.addCase(loginUser.fulfilled, (state, {payload}) => {
      state.currentUser = payload;
    });
    builder.addCase(updateUser.fulfilled, (state, {payload}) => {
      state.currentUser = payload;
      state.error = null;
    });
    builder.addCase(updateUser.rejected, (state, {payload}) => {
      state.error = payload as string | null;
    })
  },
});

export const {addItemToCart, toggleForm, logoutProfile, toggleFormType, toggleAvailableEmail, removeItemFromCart} = userSlice.actions;
export default userSlice.reducer;
