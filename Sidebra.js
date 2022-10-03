import React from 'react'
import { links, social } from '../navbar/src/data'

const Sidebra = () => {
  return (
    <div className='links-container show-container'>
      <ul className='links'>
        {links.map((link) => {
          const { id, url, text } = link
          return (
            <li key={id}>
              <a href={url}>{text}</a>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Sidebra
