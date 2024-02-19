import { Typography } from '@mui/material'
import { Wrapper } from '@/components/layout'
import { FormSpecialty } from './components'
import * as S from './specialty-styles'

export const Specialty = () => {
  return (
    <Wrapper>
      <Typography component="h2" variant="h3" sx={{ textAlign: 'center' }}>
        Cadastre o especialista inserindo os dados abaixo
      </Typography>

      <S.FormWrapper>
        <FormSpecialty />
      </S.FormWrapper>
    </Wrapper>
  )
}
