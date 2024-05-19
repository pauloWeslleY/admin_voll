import { useNavigate } from 'react-router-dom'
import { Button, Stack, Typography, useTheme } from '@mui/material'
import { Wrapper } from '@/components/layout'
import { Heading } from '@/components/ui'
import { Assessment, Graphic, Table } from './components'
import { useDataConsultation } from '@/hooks/useDataConsultation'
import { useDataProfessional } from '@/hooks/useDataProfessional'
import { FONTS } from '@/styles'

export const DashBoard = () => {
  const { loadConsultationQueries } = useDataConsultation()
  const { loadProfessional } = useDataProfessional()
  const navigate = useNavigate()
  const theme = useTheme()

  return (
    <Wrapper>
      <Heading sx={{ marginBottom: theme.spacing(8) }}>
        <Typography
          component="h2"
          variant="h3"
          sx={{ color: theme.palette.primary.light }}
        >
          Área administrativa
        </Typography>
      </Heading>

      <Stack flexDirection="row" alignItems="center" gap={3}>
        {/* <Button onClick={() => navigate('/dashboard/specialty')}>
          Cadastrar especialista
        </Button> */}
        <Button onClick={() => navigate('/dashboard/clinics')}>
          Cadastrar clinica
        </Button>
      </Stack>

      <Heading image="consultation" sx={{ marginBlock: theme.spacing(8) }}>
        <Typography
          component="h2"
          variant="h3"
          sx={{ color: theme.palette.primary.light }}
        >
          Consultas do dia
        </Typography>
      </Heading>

      <Table data={loadConsultationQueries()} />

      {/* <Button sx={{ py: 2, px: 3, marginTop: theme.spacing(8.2) }}>
        Ver Mais
      </Button> */}

      <Heading image="graphic" sx={{ marginTop: theme.spacing(8) }}>
        <Typography
          component="h2"
          variant="h3"
          sx={{ color: theme.palette.primary.light }}
        >
          Consultas mensais por especialista
        </Typography>
      </Heading>

      <Typography
        component="h3"
        variant="h4"
        sx={{
          fontSize: FONTS.fontSizes.lg,
          color: theme.palette.primary.dark,
          marginBottom: theme.spacing(6),
        }}
      >
        Dezembro/22
      </Typography>

      <Graphic
        props={{
          consultation: loadConsultationQueries(),
          professional: loadProfessional(),
        }}
      />

      <Heading image="assessment" sx={{ marginTop: theme.spacing(8) }}>
        <Typography
          component="h2"
          variant="h3"
          sx={{ color: theme.palette.primary.light }}
        >
          Avaliações de especialistas
        </Typography>
      </Heading>

      <Typography
        component="h3"
        variant="h4"
        sx={{
          fontSize: FONTS.fontSizes.lg,
          color: theme.palette.primary.dark,
          marginBottom: theme.spacing(6),
        }}
      >
        Dezembro/22
      </Typography>

      <Assessment professionals={loadProfessional()} />
    </Wrapper>
  )
}
