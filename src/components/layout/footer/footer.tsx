import { Link, Typography } from '@mui/material'
import { FONTS } from '@/styles'
import * as S from './styles'
import { useFooter } from './useFooter'

export const Footer = () => {
  const { listIconFooter } = useFooter()

  return (
    <S.FooterWrap>
      <ul>
        {listIconFooter().map(({ id, icon: Icon }) => (
          <li key={id}>
            <Link href="#">
              <Icon />
            </Link>
          </li>
        ))}
      </ul>

      <Typography
        component="span"
        variant="subtitle1"
        color={(theme) => theme.palette.common.white}
        sx={{ fontWeight: FONTS.fontWeight.light }}
      >
        2023 © Desenvolvido por Alura | Projeto fictício sem fins comerciais.
      </Typography>
    </S.FooterWrap>
  )
}
