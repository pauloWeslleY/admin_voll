import { z } from 'zod'
import { schemaSignIn } from './schema-sign-in'

export type SignInProps = z.infer<typeof schemaSignIn>
