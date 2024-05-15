
import { Link } from 'react-router-dom'
import '../styles/AddButton.css'

const AddButton = () => {
  return (
    <div className='container-button'>
      <Link className='add-button' to={'/addplace'}>Add</Link>
    </div>
  )
}

export default AddButton