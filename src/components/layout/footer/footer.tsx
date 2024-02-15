import { Link, Typography } from '@mui/material'
import { Icon } from '@/components/ui'
import { FONTS } from '@/styles'
import * as S from './footer-styles'

export const Footer = () => {
  return (
    <S.FooterWrap>
      <ul>
        <li>
          <Link href="#">
            <Icon.Facebook />
          </Link>
        </li>
        <li>
          <Link href="#">
            <Icon.WhatsApp />
          </Link>
        </li>
        <li>
          <Link href="#">
            <Icon.Google />
          </Link>
        </li>
        <li>
          <Link href="#">
            <Icon.Instagram />
          </Link>
        </li>
      </ul>

      <Typography
        component="span"
        variant="subtitle1"
        color="white"
        sx={{ fontWeight: FONTS.fontWeight.light }}
      >
        2023 © Desenvolvido por Alura | Projeto fictício sem fins comerciais.
      </Typography>
    </S.FooterWrap>
  )
}
