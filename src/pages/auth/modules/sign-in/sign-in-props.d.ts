import { z } from 'zod'
import { schemaSignIn } from './useSignIn'

export type SignInProps = z.infer<typeof schemaSignIn>
