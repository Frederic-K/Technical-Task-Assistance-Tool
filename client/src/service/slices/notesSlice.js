import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  notes: "",
  isNoteOpen: false,
}

const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    setNotes: (state, action) => {
      state.notes = action.payload
    },
    resetNotes: (state) => {
      state.notes = ""
    },
    setNoteIsOpen: (state, action) => {
      state.isNoteOpen = action.payload
    },
  },
})

export const { setNotes, resetNotes, setNoteIsOpen } = notesSlice.actions
export default notesSlice.reducer
