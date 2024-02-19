import { styled } from '@mui/material'
import { Button as BaseButton, buttonClasses } from '@mui/base/Button'
import { blue, grey } from '@mui/material/colors'
import { spacing } from '@/styles/utilities'
import { FONTS, COLORS } from '@/styles'

export const Button = styled(BaseButton)(
  () => `
  font-family: ${FONTS.fontFamily.PUBLIC_SANS};
  font-weight: ${FONTS.fontWeight.bold};
  font-size: ${FONTS.fontSizes.md};
  line-height: ${FONTS.lineHeights.base};
  background-color: ${COLORS.blue[300]};
  padding: 6px 16px;
  border-radius: ${spacing(2)};
  color: ${COLORS.white};
  transition: .2s ease-in-out;
  cursor: pointer;
  border: 1px solid ${COLORS.blue[400]};
  box-shadow: none;
  text-transform: uppercase;

  display: flex;
  align-items: center;
  gap: 0.5em;

  &:hover {
    background-color: ${blue[600]};
    border-color: ${COLORS.blue[200]};
    box-shadow: 0 2px 1px 'rgba(45, 45, 60, 0.2)', inset 0 1.5px 1px ${COLORS.blue[400]}, inset 0 -2px 1px ${blue[600]};
  }

  &.${buttonClasses.active} {
    background-color: ${blue[700]};
    border-color: ${COLORS.blue[100]};
    box-shadow: none;
    transform: scale(0.99);
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
