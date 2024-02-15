import { Typography, useTheme } from '@mui/material'
import { Assessment, Footer, Header, Wrapper } from '@/components/layout'
import { Graphic, Heading, Table } from '@/components/ui'
import { useDataConsultation } from '@/hooks/useDataConsultation'
import { useDataProfessional } from '@/hooks/useDataProfessional'

export const Home = () => {
  const { data: dataConsultation } = useDataConsultation()
  const { data: dataProfessional } = useDataProfessional()
  const theme = useTheme()

  return (
    <>
      <Header />

      <Wrapper>
        <Heading>
          <Typography
            component="h2"
            variant="h3"
            sx={{ color: theme.palette.primary.light }}
          >
            Área administrativa
          </Typography>
        </Heading>

        <Table data={dataConsultation} />

        <Graphic
          props={{
            consultation: dataConsultation,
            professional: dataProfessional,
          }}
        />

        <Assessment professionals={dataProfessional} />
      </Wrapper>

      <Footer />
    </>
  )
}
