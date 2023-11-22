import styled from 'styled-components'

export const ProfileCard = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
`

export const Photo = styled.img`
  border-radius: 100%;
  border: 0.2rem solid #000;
  width: 12rem;
  height: 12rem;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  height: 10rem;
  justify-content: center;
`

export const Title = styled.p`
  font-weight: bold;
  font-size: 2.8rem;
`

export const Subtitle = styled.p`
  font-weight: normal;
  font-size: 1.2rem;
  text-align: center;
`
