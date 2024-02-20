import { authReducer } from './auth/auth'
import { stepperReducer } from './stepper/stepper'
import { clinicsReducer } from './clinics/clinics'
import { plansHealthReducer } from './plans-health/plans-health'

const rootReducers = {
  auth: authReducer,
  stepper: stepperReducer,
  clinics: clinicsReducer,
  plansHealth: plansHealthReducer,
}

export { rootReducers }
