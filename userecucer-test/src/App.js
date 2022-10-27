import { useState } from 'react'
import { data } from './data'

const reducer = {}
function App() {
  const [people, setPeople] = useState(data)

  return (
    <section className='wrapper'>
      <h2>Persons</h2>
      {people.map((person) => {
        return (
          <ul key={person.id}>
            <li>
              <h3>{person.name}</h3>
              <h4>{person.age}</h4>
              <p>{person.lang}</p>
              <button className='btn'>remove</button>
            </li>
          </ul>
        )
      })}
      <button className='btn'>remove all</button>
    </section>
  )
}

export default App
