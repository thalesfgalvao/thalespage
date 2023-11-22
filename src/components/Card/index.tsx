import * as S from './style'

interface Props {
  title?: string
  resume?: string
}

const Card = ({ title, resume }: Props) => {
  return (
    <S.Card>
      <S.Title>{title}</S.Title>
      <hr />
      <S.Resume>{resume}</S.Resume>
    </S.Card>
  )
}

export default Card
