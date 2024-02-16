import { useState } from 'react'

type SignInOrSignUpProps = 'signIn' | 'signUp'

export const useAuth = () => {
  const [signInOrSignUp, setSignInOrSignUp] =
    useState<SignInOrSignUpProps>('signIn')

  const changeAuth = (option: SignInOrSignUpProps) => {
    setSignInOrSignUp(option)
  }

  const handleChangedSignInOrSignUp = () => {
    changeAuth(signInOrSignUp === 'signIn' ? 'signUp' : 'signIn')
  }

  return {
    handleChangedSignInOrSignUp,
    signInOrSignUp,
  }
}
