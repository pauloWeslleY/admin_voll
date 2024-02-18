export const formatCNPJ = (value: string) => {
  // Remove caracteres não numéricos
  const numericValue = value.replace(/\D/g, '')

  // Aplica a máscara
  const formattedValue = numericValue.replace(
    /^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/,
    '$1.$2.$3/$4-$5',
  )

  return formattedValue
}
