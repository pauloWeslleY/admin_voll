import { useState } from 'react'

export const useInputPassword = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false)

  const handleClickShowPassword = () => {
    setShowPassword((showPassword) => !showPassword)
  }

  return { showPassword, handleClickShowPassword }
}
