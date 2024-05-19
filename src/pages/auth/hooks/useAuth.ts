import { useState } from 'react'

export const useAuth = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false)

  const handleClickShowPassword = () => {
    setShowPassword((showPassword) => !showPassword)
  }

  return {
    showPassword,
    handleClickShowPassword,
  }
}
