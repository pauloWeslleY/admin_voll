import { ReactNode } from 'react'
import { Button, InputField, InputIcon } from '@/components/ui'
import SearchIcon from '@mui/icons-material/Search'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import * as S from './section-searching-styles'

type SectionSearchingProps = { children: ReactNode }

export const SectionSearching = ({ children }: SectionSearchingProps) => {
  return (
    <S.SectionSearchingWrap>
      <form>
        <InputField
          type="text"
          placeholder="Digite a especialidade"
          style={{ width: '100%' }}
          startAdornment={<InputIcon icon={SearchIcon} />}
        />
        <InputField
          type="text"
          placeholder="Digite sua localização"
          style={{ width: '100%' }}
          startAdornment={<InputIcon icon={LocationOnIcon} />}
        />
        <Button label="Buscar" sx={{ width: 200 }} />
      </form>

      {children}
    </S.SectionSearchingWrap>
  )
}
