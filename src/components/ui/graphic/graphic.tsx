import {
  Bar,
  BarChart,
  Rectangle,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from 'recharts'
import { ConsultationProps, ProfessionalProps } from '@/components/types'
import { DataGraphicProps, useDataGraphic } from './useDataGraphic'
import * as S from './graphic-styles'

type GraphicProps = {
  props: {
    consultation: ConsultationProps[] | null
    professional: ProfessionalProps[] | null
  }
}

export const Graphic = ({ props }: GraphicProps) => {
  const { consultation, professional } = props
  const data: DataGraphicProps[] = useDataGraphic({
    consultation,
    professional,
  })

  return (
    <S.GraphicWrap>
      <ResponsiveContainer width="100%" height={350}>
        <BarChart
          layout="vertical"
          data={data}
          margin={{
            top: 25,
            right: 40,
            left: 40,
            bottom: 20,
          }}
        >
          <XAxis type="number" />
          <YAxis type="category" dataKey="name" />
          <Bar
            dataKey="consultation"
            barSize={30}
            fill="#8884d8"
            activeBar={<Rectangle fill="pink" stroke="blue" />}
          />
        </BarChart>
      </ResponsiveContainer>
    </S.GraphicWrap>
  )
}
