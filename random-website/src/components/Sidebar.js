import React from 'react'
import styled from 'styled-components'
import { useGlobalContext } from '../context'

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext()
  return (
    <Wrapper>
      {`${isSidebarOpen ? 'sidebar-wrapper show' : 'sidebar-wrapper'}`}
      <div className='sidebar'>
        <button className='close-btn' onClick={closeSidebar}>
          close btn
        </button>
      </div>
    </Wrapper>
  )
}

export default Sidebar

const Wrapper = styled.aside`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
  visibility: hidden;
  z-index: -1;
  .sidebar {
    border: 1px solid black;
    width: 90vw;
    height: 95vh;
    padding: 4rem 2rem;
  }

  @media screen {
    .sidebar-wrapper {
      display: none;
    }
  }
`
