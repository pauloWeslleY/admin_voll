const useTable = () => {
  const loadTableHeader = () => [
    'Data',
    'horário',
    'Profissional',
    'Especialidade',
    'Paciente',
    'Modalidade',
  ]

  return { loadTableHeader }
}

export { useTable }
