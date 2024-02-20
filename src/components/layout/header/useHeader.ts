export const useHeader = () => {
  const menuHeader = [
    { path: 'dashboard/home', label: 'Dashboard' },
    { path: 'dashboard/clinics', label: 'Cadastrar Clínica' },
    { path: 'dashboard/specialty', label: 'Cadastrar Especialista' },
  ]

  return { menuHeader }
}
