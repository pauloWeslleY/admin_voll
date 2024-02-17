import { ToastContainer } from 'react-toastify'
import { ScrollTop } from './components/scroll-top'
import { Routes } from './routes'
import { useAppDispatch, useAppSelector } from './store/hook'
import 'react-toastify/dist/ReactToastify.css'
import { useEffect } from 'react'
import { loadUser } from './store/actions/actions'

export const App = () => {
  const dispatch = useAppDispatch()
  const { user, isLogged } = useAppSelector((state) => state.auth)

  console.log(user)
  console.log(isLogged)

  useEffect(() => {
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
