import { Chip, Container, useTheme } from '@mui/material'
import { Card, SectionSearching, Testimonials } from './components'
import { useHome } from './useHome'
import * as S from './home-styles'

export const Home = () => {
  const { CARD_LIST, SPECIALTY_LIST } = useHome()
  const theme = useTheme()

  return (
    <main>
      <S.BannerHome />

      <Container maxWidth="lg">
        <SectionSearching>
          <S.SpecialtyListWrap>
            <h2>Você pode estar procurando por estas categorias:</h2>

            <ul>
              {SPECIALTY_LIST.map((data) => (
                <li key={data.key}>
                  <Chip
                    label={data.label}
                    sx={{ ...theme.typography.h4, borderRadius: 2 }}
                  />
                </li>
              ))}
            </ul>
          </S.SpecialtyListWrap>
        </SectionSearching>

        <Card card={CARD_LIST} />

        <Testimonials />
      </Container>
    </main>
  )
}
