import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { ClinicProps } from '@/components/types/clinic-props'

type SetFieldProps = {
  data: ClinicProps
}

const INITIAL_STATE = {
  step: 0,
  data: {} as ClinicProps,
}

const stepperSlice = createSlice({
  name: 'stepper',
  initialState: INITIAL_STATE,
  reducers: {
    setField: (state, { payload }: PayloadAction<SetFieldProps>) => {
      const { data } = payload

      state.data = data
    },
    nextStep: (state) => {
      state.step += 1
    },
    prevStep: (state) => {
      state.step -= 1
    },
    resetStep: () => {
      return INITIAL_STATE
    },
  },
})

export const { setField, nextStep, prevStep, resetStep } = stepperSlice.actions
export const stepperReducer = stepperSlice.reducer
