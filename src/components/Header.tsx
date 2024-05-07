import React from 'react'
import '../styles/Header.css'
import {Link} from 'react-router-dom'
import PlacesCard from './PlacesCard'



const Header = () => {
  return (
    
  
      <>
      <header className='header'>
      <li>
        <Link to="/">All Countryes</Link>
      </li>
      <li>
        <Link to="/costarica">Costa Rica</Link>
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
    </header>

    
    </>

   
  )
}

export default Header