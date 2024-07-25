import { fetchTokens, fetchUser } from "@/api/user";
import { SigninFormType, userType } from "@/components/types";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

export const getUser = createAsyncThunk(
  "user/getUser",
  async ({ email, password }: SigninFormType) => {
    const user = await fetchUser({ email, password });
    return user;
  }
);

export const getTokens = createAsyncThunk(
  "user/getTokens",
  async ({ email, password }: SigninFormType) => {
    const tokens = await fetchTokens({ email, password });
    return tokens;
  }
);

type AuthStateType = {
  user: null | userType;
  tokens: {
    access: null | string;
    refresh: null | string;
  };
};

const initialState: AuthStateType = {
  user: null,
  tokens: {
    access: null,
    refresh: null,
  },
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // setAuthState: (state, action: PayloadAction<boolean>) => {
    //   state.isAuth = action.payload;
    // },
    // setUser: (state, action: PayloadAction<string>) => {
    //   state.user = {
    //     email: action.payload,
    //     password: action.payload,
    //   };
    // },
    logout : (state) =>{
      state.user = null;
      state.tokens.access = null;
      state.tokens.refresh = null;
    }
  },
  extraReducers(builder) {
    builder
      .addCase(getUser.fulfilled, (state, action: PayloadAction<userType>) => {
        state.user = action.payload;
      })
      .addCase(
        getTokens.fulfilled,
        (
          state,
          action: PayloadAction<{
            access: null | string;
            refresh: null | string;
          }>
        ) => {state.tokens.access = action.payload.access
          state.tokens.refresh = action.payload.refresh
        }
      );
  },
});

export const { logout } = authSlice.actions;
export const authReducer = authSlice.reducer;
