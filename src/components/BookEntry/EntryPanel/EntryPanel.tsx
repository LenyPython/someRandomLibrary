import {BookInterface} from "../../../constants/interface/bookSlice"



const EntryPanel: React.FC<BookInterface> = props => {
  let { title, authors} = props
  return(
    <div>
      <h3>{title}</h3>
      <p>{authors.join(', ')}</p>
    </div>
  )
}

export default EntryPanel
