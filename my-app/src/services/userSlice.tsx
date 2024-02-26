import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "store";
import UserApi from "./UserApi";
import { LoginProps } from "components/FormLogin";
import { PersonalDataProps } from "components/FormPersonData";

export const fetchLogin = createAsyncThunk(
  'login/fetchLogin',
  async ({ email, password }: LoginProps) => {
    const response = await UserApi.login({ email, password });
    return response;
  }
)

export const fetchLogout = createAsyncThunk(
  'logout/fetchLogout',
  async (accessToken : string) => {
    const response = await UserApi.logout(accessToken);
    return response;
  }
)

export const fetchData = createAsyncThunk(
  'getData/fetchData',
  async (accessToken : string) => {
    const response = await UserApi.getPersonalData(accessToken);
    return response;
  }
)

export const fetchChangeData = createAsyncThunk(
  'changeData/fetchData',
  async (data: PersonalDataProps) => {
    const response = await UserApi.changePersonalData(data);
    return response;
  }
)



export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: {
      tokens: {
        accessToken:'',
      },
      user: {
        email: '',
        id: ''
      }
    },

    data: {
      username: '',
      firstname: '',
      lastname: '',
      dateOfBirth: '',
      gender: '',
    }
  },

  reducers: {
  },

  extraReducers: (builder) => {
    builder
    
    .addCase(fetchLogin.fulfilled, (state, action) => {
      state.user = action.payload.data;
    })

    .addCase(fetchLogout.fulfilled, (state, action) => {
      state.user = action.payload.data;
    })

    .addCase(fetchData.fulfilled, (state,action) => {
      state.data = action.payload.data;
    })
  }
})

// export const { logout } = userSlice.actions;

export const selectUser = (state: RootState) => state.user.user;

export default userSlice.reducer;