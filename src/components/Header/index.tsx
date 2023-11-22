import ProfilePhoto from './ProfilePhoto'
import SocialMedia from './SocialMedia'
import * as S from './style'

const Header = () => {
  return (
    <S.CardHeader>
      <ProfilePhoto />
      <SocialMedia />
    </S.CardHeader>
  )
}

export default Header
