import React from 'react'
import '../styles/Header.css'
const Header = () => {
  return (
    <div>
      <header className='header'>
        <ul className='name-countryes'>
          <li>
            <a href="">Costa Rica</a>
          </li>
          <li>
            <a href="">Portugal</a>
          </li>
          <li>
            <a href="">India</a>
          </li>
          <li>
            <a href="">Japón</a>
          </li>
          <li>
            <a href="">Australia</a>
          </li>
        </ul>
      </header>
    </div>
  )
}

export default Header