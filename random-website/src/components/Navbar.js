import React from 'react'
import styled from 'styled-components'
import { useGlobalContext } from '../context'

const Navbar = () => {
  const { openSidebar, openSubmenu, closeSubmenu } = useGlobalContext()
  return (
    <Wrapper>
      <div className='nav-center'>
        <div className='nav-header'>
          <img src='' alt='' />
          <button className='btn toggle-btn' onClick={openSidebar}>
            open sidebar
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
        <button className='btn signin-btn'>sign in</button>
      </div>
    </Wrapper>
  )
}

export default Navbar

const Wrapper = styled.nav`
  height: 5rem;
  display: flex;
  border: 1px solid red;
  position: relative;
  align-items: center;
  justify-content: center;
  background: #ff0;
  z-index: 1;
  .nav-center {
    width: 60vw;
  }

  @media screen and (min-width: 800px) {
    .nav-center {
      display: grid;
      grid-template-columns: auto 1fr auto;
      align-items: center;
    }
    .toggle-btn {
      display: none;
    }
  }
`
