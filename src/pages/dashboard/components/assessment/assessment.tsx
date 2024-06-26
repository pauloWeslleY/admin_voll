import { ProfessionalProps } from '@/components/types'
import { CardAssessment } from './modules'
import * as S from './assessment-styles'

type AssessmentProps = {
  professionals: ProfessionalProps[] | null
}

export const Assessment = ({ professionals }: AssessmentProps) => (
  <>
    <S.AssessmentWrap>
      {professionals?.map((props) => (
        <CardAssessment key={props.id} card={props} />
      ))}
    </S.AssessmentWrap>
    {/* <Button>Ver mais</Button> */}
  </>
)
