import { alpha, styled } from '@mui/material'
import { Button as BaseButton, buttonClasses } from '@mui/base/Button'
import { blue, grey } from '@mui/material/colors'
import { FONTS, COLORS } from '@/styles'

export const Button = styled(BaseButton)(
  () => `
  font-family: ${FONTS.fontFamily.PUBLIC_SANS};
  font-weight: ${FONTS.fontWeight.bold};
  font-size: ${FONTS.fontSizes.md};
  line-height: ${FONTS.lineHeights.base};
  padding: 8px 16px;
  border-radius: 8px;
  transition: all 150ms ease;
  cursor: pointer;
  background: ${COLORS.blue[400]};
  border: 1px solid ${COLORS.blue[50]};
  color: ${COLORS.white};
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  text-transform: uppercase;

  display: inline-flex;
  align-items: center;
  gap: 0.5em;

  &:hover {
    color: ${blue.A700};
    background-color: ${alpha(blue[100], 0.6)};
    border-color: ${alpha(COLORS.blue[200], 0.4)};
    box-shadow: 0 2px 1px 'rgba(45, 45, 60, 0.2)', inset 0 1.5px 1px ${COLORS.blue[400]}, inset 0 -2px 1px ${blue[600]};
  }

  &.${buttonClasses.active} {
    color: ${blue[900]};
    background-color: ${alpha(blue[700], 0.2)};
  }

  &.${buttonClasses.focusVisible} {
    box-shadow: 0 0 0 4px ${COLORS.blue[100]};
    outline: none;
  }

  &.${buttonClasses.disabled} {
    background-color: ${grey[200]};
    color: ${grey[700]};
    border: 0;
    cursor: default;
    box-shadow: none;
    transform: scale(1);
  }
  `,
)
