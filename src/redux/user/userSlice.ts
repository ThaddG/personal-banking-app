import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';

interface UserState {
  id: string;
  email: string;
  password: string;
}

const initialState: UserState = {
  id: 'abc123',
  email: 'default@email.com',
  password: 'password',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    signup: (state) => {
      console.log('signup ran');
    },
    login: (state) => {},
    logout: (state) => {},
  },
});

export const { signup, login, logout } = userSlice.actions;
export const selectUser = (state: RootState) => state.user;
export default userSlice.reducer;
