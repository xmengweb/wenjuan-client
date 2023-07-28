import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
  token:string
}

const initialState: CounterState = {
    token: localStorage.getItem('token')||'',
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setToken } = userSlice.actions

export default userSlice.reducer