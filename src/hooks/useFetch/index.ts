import { useEffect, useState } from 'react'

export function useFetch<T>({ url }: { url: string }) {
  const [data, setData] = useState<T | null>(null)
  const [erro, setErro] = useState<string>('')

  useEffect(() => {
    fetch(`http://localhost:8080/${url}`)
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((erro) => setErro(erro))
  }, [url])

  return { data, erro }
}
