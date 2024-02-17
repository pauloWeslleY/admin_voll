import { toast, ToastContent } from 'react-toastify'
import { CircularProgress } from '@mui/material'

type ToastifyProps = {
  title: ToastContent
}

export const toasts = {
  success: ({ title }: ToastifyProps) => toast.success(title),
  warn: ({ title }: ToastifyProps) => toast.warn(title),
  error: ({ title }: ToastifyProps) => toast.error(title),
  loader: () => toast(<CircularProgress size={25} />),
}
