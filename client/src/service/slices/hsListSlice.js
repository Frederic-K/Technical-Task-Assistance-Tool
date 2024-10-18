import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  HSs: [{ name: "" }],
  isHSListOpen: false,
}

export const HSListSlice = createSlice({
  name: "HSList",
  initialState,
  reducers: {
    addHS: (state) => {
      state.HSs.push({ name: "" })
    },
    removeHS: (state, action) => {
      state.HSs = state.HSs.filter((_, index) => index !== action.payload)
    },
    resetHS: (state, action) => {
      state.HSs[action.payload] = { name: "" }
    },
    updateHSName: (state, action) => {
      const { index, name } = action.payload
      state.HSs[index] = { name }
    },
    resetAll: (state) => {
      state.HSs = [{ name: "" }]
    },
    setIsHSListOpen: (state, action) => {
      state.isHSListOpen = action.payload
    },
  },
})

export const {
  addHS,
  removeHS,
  resetHS,
  updateHSName,
  resetAll,
  setIsHSListOpen,
} = HSListSlice.actions

export default HSListSlice.reducer
