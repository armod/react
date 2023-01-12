import React, { useEffect, useState } from 'react'
import styled from 'styled-components/macro'
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
      <Home />
      {console.log(JSON.stringify(data, null, 2))}
    </Wrapper>
  )
}

export default App

const Wrapper = styled.div`
  display: flex;
`
