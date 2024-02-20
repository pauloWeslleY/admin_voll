import { createSlice } from '@reduxjs/toolkit'

const INITIAL_STATE = [
  'Sulamerica',
  'Unimed',
  'Bradesco',
  'Amil',
  'BioSaúde',
  'Biovida',
  'Outro',
] as string[]

const plansHealthSlice = createSlice({
  name: 'plansHealth',
  initialState: INITIAL_STATE,
  reducers: {},
})

export const plansHealthReducer = plansHealthSlice.reducer
