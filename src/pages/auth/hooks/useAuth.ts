import { useState } from 'react'

type SignInOrSignUpProps = 'signIn' | 'signUp'

export const useAuth = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false)
  const [signInOrSignUp, setSignInOrSignUp] =
    useState<SignInOrSignUpProps>('signIn')

  const changeAuth = (option: SignInOrSignUpProps) => {
    setSignInOrSignUp(option)
  }

  const handleChangedSignInOrSignUp = () => {
    changeAuth(signInOrSignUp === 'signIn' ? 'signUp' : 'signIn')
  }

  const handleClickShowPassword = () => {
    setShowPassword((showPassword) => !showPassword)
  }

  return {
    showPassword,
    signInOrSignUp,
    handleChangedSignInOrSignUp,
    handleClickShowPassword,
  }
}
