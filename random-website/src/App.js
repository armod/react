import React, { useEffect, useState } from 'react'
import styled from 'styled-components/macro'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Home from './pages/Home'

function App() {
  const [data, setData] = useState('')
  const getData = async () => {
    const resp = await fetch('https://api.sampleapis.com/coffee/hot')
    const json = await resp.json()
    setData(json)
  }

  useEffect(() => {
    getData()
  }, [])
  return (
    <Wrapper>
      <Navbar />
      <Sidebar />
      <Home />
    </Wrapper>
  )
}

export default App

const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  /* justify-content: center;
  align-content: center; */
  /* margin: 0 auto; */
  position: absolute;
  left: 50%;
  top: 2rem;
  transform: translate(-50%, -0%);
`
