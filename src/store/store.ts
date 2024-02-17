import { configureStore } from '@reduxjs/toolkit'
import { rootReducers } from './reducers'
import { middleware } from './middleware'

export const store = configureStore({
  reducer: rootReducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().prepend(middleware),
})
