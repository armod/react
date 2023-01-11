import styled from 'styled-components/macro'
import Home from './pages/Home'

function App() {
  return (
    <Wrapper>
      <Home />
    </Wrapper>
  )
}

export default App

const Wrapper = styled.div`
  display: flex;
`
