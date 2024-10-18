import { configureStore } from "@reduxjs/toolkit"
import { persistStore, persistReducer } from "redux-persist"
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist"
import storage from "redux-persist/lib/storage"
import themeReducer from "../slices/themeSlice"
import HSListReducer from "../slices/hsListSlice"
import notesReducer from "../slices/notesSlice"

const persistConfig = {
  key: "root",
  storage,
}

const persistedThemeReducer = persistReducer(persistConfig, themeReducer)
const persistedHSListReducer = persistReducer(persistConfig, HSListReducer)
const persistedNotesReducer = persistReducer(persistConfig, notesReducer)

export const store = configureStore({
  reducer: {
    theme: persistedThemeReducer,
    HSList: persistedHSListReducer,
    notes: persistedNotesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export const persistor = persistStore(store)
