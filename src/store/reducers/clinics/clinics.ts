import { ClinicsType } from '@/components/types/clinic-props'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

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
