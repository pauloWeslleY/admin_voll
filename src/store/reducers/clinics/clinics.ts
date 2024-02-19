import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { ClinicsType } from '@/components/types/clinic-props'

const clinicsSlice = createSlice({
  name: 'clinics',
  initialState: [] as ClinicsType[],
  reducers: {
    getClinics: (_, { payload }: PayloadAction<ClinicsType[]>) => {
      return payload
    },
  },
})

export const { getClinics } = clinicsSlice.actions
export const clinicsReducer = clinicsSlice.reducer
