
interface Props {
  id: number,
  title: string,
  author: string,
  available: boolean
}


const EntryPanel: React.FC<Props> = props => {
  let { title, author} = props
  return(
    <div>
      <h3>{title}</h3>
      <p>{author}</p>
    </div>
  )
}

export default EntryPanel
