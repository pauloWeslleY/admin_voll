import { useAppSelector } from '@/store/hook'

export const Home = () => {
  const { user } = useAppSelector((state) => state.auth)

  return (
    <div>
      <span>{JSON.stringify(user, null, 2)}</span>
    </div>
  )
}
