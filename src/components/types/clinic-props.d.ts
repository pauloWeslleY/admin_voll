import { z } from 'zod'
import { schemaClinic } from '@/pages/clinics/components/create-clinic/schema-clinic'

type CreateClinicProps = z.infer<typeof schemaClinic>

type ClinicType = CreateClinicProps & {
  owner: string
  createdAt: string
}

type ClinicProps = CreateClinicProps &
  ClinicType & {
    id: string
  }

export type { CreateClinicProps, ClinicType, ClinicProps }
