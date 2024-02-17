import { z } from 'zod'
import { schemaSignUp } from './useSignUp'

export type SignUpProps = z.infer<typeof schemaSignUp>
