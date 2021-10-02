import styled from 'styled-components'
import { Icon } from '@iconify/react'
import { BookInterface } from '../../slices/books/booksSlice'

export const StyledEntry = styled.div`
  display: flex;
  align-items: center;
  padding: .5em 1.3em;
  margin: .6em 1.2em;
  border-radius: 15px;
  background: hsla(0, 50%, 100%, .8);
  & > * {
    margin: 0;
  }
  h3 {
    font-size: 1.5rem;
  }
  p{
    font-size: 1rem;
  }
`

export const ImgContainer = styled.div`
  width: 150px;
  height: 150px;
  overflow: hidden;
  margin-right: 2rem;
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

const BookEntry: React.FC<BookInterface> = props =>{
  let { title, image, author, available } = props
  return(
<StyledEntry key={title}>
        <ImgContainer>
            {
            image ?
            <Cover src={image} alt={`Cover: ${title}`} />:
            <NoImgIcon icon='carbon:no-image' />
            }
        </ImgContainer>
        <div>
          <h3>{title}</h3>
          <p>{author}</p>
          <p>{available? 'available' : 'unavailable'}</p>
        </div>
</StyledEntry>
  )
}

export default BookEntry
