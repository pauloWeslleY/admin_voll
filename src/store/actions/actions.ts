import { createAction } from '@reduxjs/toolkit'

const loadUser = createAction('user/loadUser')
const loadClinics = createAction('clinics/loadClinics')

export { loadUser, loadClinics }
