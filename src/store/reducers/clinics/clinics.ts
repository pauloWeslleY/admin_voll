import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { ClinicProps } from '@/components/types/clinic-props'

const clinicsSlice = createSlice({
  name: 'clinics',
  initialState: [] as ClinicProps[],
  reducers: {
    getClinics: (_, { payload }: PayloadAction<ClinicProps[]>) => {
      return payload
    },
  },
})

export const { getClinics } = clinicsSlice.actions
export const clinicsReducer = clinicsSlice.reducer
