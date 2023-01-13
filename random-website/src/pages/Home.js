import React from 'react'
import styled from 'styled-components'
import { useGlobalContext } from '../context'

const Home = () => {
  const { closeSubmenu } = useGlobalContext()
  return (
    <Wrapper>
      <div className='hero-center'>
        <article className='hero-info'>
          <h1>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Temporibus, dolores.
          </h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit
            delectus placeat unde nobis eveniet exercitationem iste, repellendus
            quaerat molestias enim numquam, totam praesentium earum repudiandae
            pariatur architecto maiores ab dolor accusamus odit repellat officia
            cupiditate provident. Unde, soluta iste. Quam a ipsam doloribus aut
            cum commodi quaerat assumenda exercitationem placeat.
          </p>
        </article>
        <article className='hero-images'>
          <img src='' alt='' />
        </article>
      </div>
    </Wrapper>
  )
}

export default Home

const Wrapper = styled.section`
  display: flex;
`
