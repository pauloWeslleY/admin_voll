import { Typography, useTheme } from '@mui/material'
import { Assessment, Footer, Header, Wrapper } from '@/components/layout'
import { Button, Graphic, Heading, Table } from '@/components/ui'
import { useDataConsultation } from '@/hooks/useDataConsultation'
import { useDataProfessional } from '@/hooks/useDataProfessional'
import { FONTS } from '@/styles'

export const Home = () => {
  const { data: dataConsultation } = useDataConsultation()
  const { data: dataProfessional } = useDataProfessional()
  const theme = useTheme()

  return (
    <>
      <Header />

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

        <Button label="Cadastrar especialista" />

        <Heading image="consultation" sx={{ marginBlock: theme.spacing(8) }}>
          <Typography
            component="h2"
            variant="h3"
            sx={{ color: theme.palette.primary.light }}
          >
            Consultas do dia
          </Typography>
        </Heading>

        <Table data={dataConsultation} />

        <Button
          label="Ver mais"
          sx={{ py: 2, px: 3, marginTop: theme.spacing(8.2) }}
        />

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
            consultation: dataConsultation,
            professional: dataProfessional,
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

        <Assessment professionals={dataProfessional} />
      </Wrapper>

      <Footer />
    </>
  )
}
