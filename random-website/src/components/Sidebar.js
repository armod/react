import React from 'react'
import styled from 'styled-components/macro'
import { useGlobalContext } from '../context'

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext()
  return (
    <Wrapper>
      <div
        className={`${
          isSidebarOpen ? 'sidebar-wrapper show' : 'sidebar-wrapper'
        }`}
      >
        <div className='sidebar'>
          <button className='close-btn' onClick={closeSidebar}>
            close btn
          </button>
        </div>
      </div>
    </Wrapper>
  )
}

export default Sidebar

const Wrapper = styled.aside`
  /* z-index: -1; */
  border: 1px solid blue;
  /* height: 100px; */
  .sidebar-wrapper {
    background: blue;
    position: fixed;
    top: 0;
    left: 0;
    width: 100px;
    height: 100px;
    display: grid;
    place-items: center;
    visibility: hidden;
    border: 1px solid black;
    /* width: 90vw;
    height: 95vh; */
    padding: 4rem 2rem;
    transform: scale(0);
  }

  .sidebar-wrapper.show {
    visibility: visible;
    transform: scale(1);
  }

  @media screen and (min-width: 800px) {
    .sidebar-wrapper {
      display: none;
    }
  }
`
