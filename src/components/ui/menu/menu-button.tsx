import { styled } from '@mui/system'
import { MenuButton as BaseMenuButton } from '@mui/base/MenuButton'
import { blue, grey } from '@mui/material/colors'
import { FONTS } from '@/styles'

const MenuButton = styled(BaseMenuButton)(
  () => `
  font-family: ${FONTS.fontFamily.PUBLIC_SANS};
  font-weight: ${FONTS.fontWeight.semibold};
  font-size: ${FONTS.fontSizes.md};
  line-height: ${FONTS.lineHeights.base};
  padding: 8px 16px;
  border-radius: 8px;
  color: white;
  transition: all 150ms ease;
  cursor: pointer;
  background: ${'#fff'};
  border: none;
  color: ${grey[900]};

  display: inline-flex;
  align-items: center;
  gap: 0.85rem;

  &:hover {
    background: ${grey[50]};
  }

  &:active {
    background: ${grey[100]};
  }

  &:focus-visible {
    box-shadow: 0 0 0 4px ${blue[200]};
    outline: none;
  }
  `,
)

export default MenuButton
