import { Icon } from '@/components/ui'

const useFooter = () => {
  const listIconFooter = () => [
    { id: crypto.randomUUID(), icon: Icon.Facebook },
    { id: crypto.randomUUID(), icon: Icon.Google },
    { id: crypto.randomUUID(), icon: Icon.WhatsApp },
    { id: crypto.randomUUID(), icon: Icon.Instagram },
  ]

  return { listIconFooter }
}

export { useFooter }
