import { styled } from '@mui/system'
import { inputClasses } from '@mui/base/Input'
import { Button } from '@mui/base/Button'
import { grey, red } from '@mui/material/colors'
import { COLORS, FONTS } from '@/styles'

export const InputRoot = styled('div')(
  () => `
  border-radius: 8px;
  background: ${grey[100]};
  color: ${grey[50]};
  border: 2px solid ${grey[100]};
  box-shadow: 0px 2px 4px rgba(0,0,0, 0.05);
  display: flex;
  align-items: center;
  justify-content: center;

  transition: all .3s ease-in-out;

  &.${inputClasses.focused} {
    border-color: ${COLORS.blue[100]};
  }

  &.${inputClasses.error} {
    border-color: ${red[500]};
  }

  &:hover {
    border-color: ${COLORS.blue[200]};
  }

  // firefox
  &:focus-visible {
    outline: 0;
  }
`,
)

export const InputElement = styled('input')(
  () => `
  font-size: ${FONTS.fontSizes.lg};
  font-weight: ${FONTS.fontWeight.semibold};
  font-family: ${FONTS.fontFamily.PUBLIC_SANS};
  line-height: 1.5;
  flex-grow: 1;
  color: ${COLORS.blue[300]};
  background: ${grey[50]};
  border: none;
  border-radius: inherit;
  padding: 8px 12px;
  outline: 0;

  &::placeholder {
    color: ${COLORS.grey[200]};
  }

  &.${inputClasses.error} {
    border-color: ${red[500]};
  }
`,
)

export const IconButton = styled(Button)(
  () => `
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: inherit;
  cursor: pointer;
  color: ${grey[700]};
  `,
)

export const InputAdornment = styled('div')(
  () => `
  margin: 8px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  `,
)
