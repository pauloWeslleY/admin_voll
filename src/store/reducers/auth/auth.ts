import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { UserCredential } from 'firebase/auth'
import { UserProps } from '@/components/types'

type AuthStateProps = {
  user: UserProps
  isLogged: boolean
}

const INITIAL_STATE: AuthStateProps = {
  user: {} as UserProps,
  isLogged: false,
}

const authSlice = createSlice({
  name: 'auth',
  initialState: INITIAL_STATE,
  reducers: {
    setAuth: (state, { payload }: PayloadAction<UserCredential>) => {
      return {
        user: {
          uid: payload.user.uid,
          username: payload.user.displayName!,
          email: payload.user.email!,
          photoUrl: payload.user.photoURL!,
          cpf: state.user.cpf,
          phone: state.user.phone,
          clinics: state.user.clinics,
          createdAt: state.user.createdAt,
          updatedAt: state.user.updatedAt,
        },
        isLogged: true,
      }
    },
    logout: (state) => {
      state.isLogged = false
    },
    getUserLogged: (_, { payload }: PayloadAction<AuthStateProps>) => {
      return payload
    },
  },
})

export const { setAuth, getUserLogged, logout } = authSlice.actions
export const authReducer = authSlice.reducer
