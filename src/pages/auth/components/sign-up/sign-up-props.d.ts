import { z } from 'zod'
import { schemaSignUp } from './schema-sign-up'

export type SignUpProps = z.infer<typeof schemaSignUp>
