
import '../styles/Header.css'
import { Link } from 'react-router-dom'

const Header = () => {

  return (

    <>
      <header className='header'>
        <li>
          <Link to="/">All Countryes</Link>
        </li>
        <li>
          <Link to="/costarica">Costa Rica</Link> {/*Hacer un OnClick*/}
        </li>
        <li>
          <Link to="/portugal">Portugal</Link>
        </li>
        <li>
          <Link to="/india">India</Link>
        </li>
        <li>
          <Link to="/japon">Japón</Link>
        </li>
        <li>
          <Link to="/australia">Australia</Link>
        </li>
        <div className='container-title'>
          <h1 className='title'>TouristTreasures</h1>
        </div>
      </header>
    </>
  )
}

export default Header