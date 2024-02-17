import { CardIcon } from './components/card/modules'

type SpecialtyListProps = {
  key: number
  label: string
}

export const useHome = () => {
  const CARD_LIST = [
    {
      icon: CardIcon.IconHealthAndSafety,
      text: 'Encontre especialistas',
    },
    {
      icon: CardIcon.IconCalendar,
      text: 'Agende consultas',
    },
    {
      icon: CardIcon.IconNotifications,
      text: 'Defina lembretes',
    },
    {
      icon: CardIcon.IconThumbUp,
      text: 'Avalie o serviço',
    },
  ]

  const SPECIALTY_LIST: SpecialtyListProps[] = [
    { key: 0, label: 'Neurologista' },
    { key: 1, label: 'Dermatologista' },
    { key: 2, label: 'Cardiologista' },
    { key: 3, label: 'Ortopedista' },
    { key: 4, label: 'Oftalmologista' },
    { key: 5, label: 'Pediatria' },
    { key: 6, label: 'Reumatologista' },
  ]

  const TESTIMONIAL = {
    testimonial:
      'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.',
    author: 'Júlio, 40 anos, São Paulo/SP.',
  }

  return { CARD_LIST, SPECIALTY_LIST, TESTIMONIAL }
}
