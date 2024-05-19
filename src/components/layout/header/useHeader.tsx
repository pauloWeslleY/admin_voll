import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const useHeader = () => {
  const [open, setOpen] = useState(false)

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen)
  }

  const navigate = useNavigate()

  const menuHeader = () => [
    {
      path: () => navigate('dashboard/home'),
      label: 'Dashboard',
    },
    {
      path: () => navigate('dashboard/clinics'),
      label: 'Cadastrar Clínica',
    },
    // {
    //   path: () => navigate('dashboard/specialty'),
    //   label: 'Cadastrar Especialista',
    // },
  ]

  const pushHome = () => navigate('/home')

  return { menuHeader, pushHome, toggleDrawer, open }
}
