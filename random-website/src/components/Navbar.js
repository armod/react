import React from 'react'
import { useGlobalContext } from '../context'

const Navbar = () => {
  const { openSidebar, openSubmenu, closeSubmenu } = useGlobalContext()
  return (
    <nav className='nav'>
      <div className='nav-center'>
        <div className='nav-header'>
          <img src='' alt='' />
          <button className='btn toggle-btn' onClick={openSidebar}>
            ikona
          </button>
        </div>
        <ul className='nav-links'>
          <li>
            <button className='link-btn'>button1</button>
          </li>
          <li>
            <button className='link-btn'>button2</button>
          </li>
          <li>
            <button className='link-btn'>button3</button>
          </li>
          <li>
            <button className='link-btn'>button4</button>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
