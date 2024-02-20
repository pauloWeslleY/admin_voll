import { ReactNode } from 'react'
import { Dropdown } from '@mui/base/Dropdown'

const MenuRoot = ({ children }: { children: ReactNode }) => {
  return <Dropdown>{children}</Dropdown>
}

export default MenuRoot
