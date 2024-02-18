import { z } from 'zod'
import { schemaClinic } from '@/pages/clinics/components/create-clinic/schema-clinic'

type ClinicProps = z.infer<typeof schemaClinic>

type ClinicsType = ClinicProps & {
  owner: string
  createdAt: string
}

export type { ClinicProps, ClinicsType }
