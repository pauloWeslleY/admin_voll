import { useEffect } from 'react'
import { ToastContainer } from 'react-toastify'
import { ScrollTop } from './components/scroll-top'
import { Routes } from './routes'
import { useAppDispatch } from './store/hook'
import { loadUser } from './store/actions/actions'
import 'react-toastify/dist/ReactToastify.css'

export const App = () => {
  const dispatch = useAppDispatch()

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
