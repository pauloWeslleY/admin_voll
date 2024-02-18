import { authReducer } from './auth/auth'
import { stepperReducer } from './stepper/stepper'
import { clinicsReducer } from './clinics/clinics'

const rootReducers = {
  auth: authReducer,
  stepper: stepperReducer,
  clinics: clinicsReducer,
}

export { rootReducers }
