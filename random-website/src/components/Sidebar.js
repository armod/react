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
  display: none;
  .sidebar {
    border: 1px solid black;
    width: 90vw;
    height: 95vh;
    padding: 4rem 2rem;
  }
`
