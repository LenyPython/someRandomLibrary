import styled from 'styled-components'
import { Icon } from '@iconify/react'


export const ImgContainer = styled.div`
  width: 150px;
  height: 150px;
  overflow: hidden;
  margin-right: 2.5rem;
  transition: .4s;
  &:hover{
    margin-right: 5rem;
    overflow: visible;
  }
`
export const Cover = styled.img`
  width: 150px;
  transition: all .4s;
  &:hover{
    width: 200px;
    transform: translateY(-40%);
  }
`

export const NoImgIcon = styled(Icon)`
  width: 150px;
  height: 150px;
  color: red;
`

interface PropsInterface {
    title: string
    image?: string
}

const ImgScreener: React.FC<PropsInterface> = ({ image, title }) => {
    return (
        <ImgContainer>
            {
            image ?
            <Cover src={image} alt={`Cover: ${title}`} />:
            <NoImgIcon icon='carbon:no-image' />
            }
        </ImgContainer>
    )     
}
export default ImgScreener
