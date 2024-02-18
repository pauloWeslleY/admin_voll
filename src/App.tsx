/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from 'react'
import { ToastContainer } from 'react-toastify'
import { ScrollTop } from './components/scroll-top'
import { Routes } from './routes'
import { useAppDispatch } from './store/hook'
import { loadClinics, loadUser } from './store/actions/actions'
import { auth } from './config/firebase'
import 'react-toastify/dist/ReactToastify.css'

export const App = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        const userId = user.uid

        dispatch(loadClinics(userId as any))
      }
    })
    dispatch(loadUser())
  }, [dispatch])

  return (
    <>
      <ScrollTop>
        <Routes />
      </ScrollTop>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  )
}
