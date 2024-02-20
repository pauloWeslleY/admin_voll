import { ComponentProps, ReactNode } from 'react'
import { styled } from '@mui/system'
import { MenuItem as BaseMenuItem, menuItemClasses } from '@mui/base/MenuItem'
import { grey } from '@mui/material/colors'
import { FONTS } from '@/styles'

const ListItem = styled(BaseMenuItem)(
  () => `
  list-style: none;
  padding: 8px;
  border-radius: 8px;
  cursor: pointer;
  user-select: none;

  font-family: ${FONTS.fontFamily.PUBLIC_SANS};
  font-weight: ${FONTS.fontWeight.regular};
  font-size: ${FONTS.fontSizes.md};

  display: flex;
  align-items: center;
  gap: 0.5em;

  &:last-of-type {
    border-bottom: none;
  }

  &:focus {
    background-color: ${grey[100]};
    color: ${grey[900]};
  }

  &.${menuItemClasses.disabled} {
    color: ${grey[400]};
  }
  `,
)

type MenuItemProps = ComponentProps<typeof ListItem> & { children: ReactNode }

const MenuItem = ({ children, ...rest }: MenuItemProps) => {
  return <ListItem {...rest}>{children}</ListItem>
}

export default MenuItem
