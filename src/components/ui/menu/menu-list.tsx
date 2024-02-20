import { ReactNode } from 'react'
import { styled } from '@mui/system'
import { Menu } from '@mui/base/Menu'
import { grey } from '@mui/material/colors'

const Listbox = styled('ul')(
  () => `
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 0.875rem;
  box-sizing: border-box;
  padding: 6px;
  margin: 12px 0;
  min-width: 200px;
  border-radius: 12px;
  overflow: auto;
  outline: 0px;
  background: ${'#fff'};
  border: 1px solid ${grey[200]};
  color: ${grey[900]};
  box-shadow: 0px 4px 6px rgba(0,0,0, 0.05);
  z-index: 1;
  `,
)

const MenuList = ({ children }: { children: ReactNode }) => {
  return <Menu slots={{ listbox: Listbox }}>{children}</Menu>
}

export default MenuList
