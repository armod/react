import React from 'react'

const Person = ({ people, handleRemove }) => {
  // console.log(people)

  return (
    <section className='section'>
      <h2>Persons</h2>
      {people.map((person) => {
        const { id, name, age, lang } = person
        return (
          <ul key={id}>
            <li>
              <h3>{name}</h3>
              <h4>{age}</h4>
              <p>{lang}</p>
              <button className='btn' onClick={() => handleRemove(id)}>
                remove
              </button>
            </li>
          </ul>
        )
      })}
    </section>
  )
}

export default Person
