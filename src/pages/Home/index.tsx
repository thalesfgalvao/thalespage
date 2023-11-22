import Header from '../../components/Header'
import SideMenu from '../../components/SideMenu'
import SideTopics from '../../components/SideTopics'
import Timeline from '../../components/Timeline'
import * as S from './style'

const Home = () => {
  return (
    <S.Wrapper>
      <SideMenu />
      <Header />
      <SideTopics />
      <Timeline />
    </S.Wrapper>
  )
}

export default Home
