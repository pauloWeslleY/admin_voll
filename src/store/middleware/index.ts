import { listenerUser } from './user-middleware/user-listener'
import { listenerClinics } from './clinics-middleware/clinics-listener'

export const middleware = [listenerUser.middleware, listenerClinics.middleware]
