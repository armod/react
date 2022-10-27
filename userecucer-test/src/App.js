import { useReducer } from 'react'
import { useState } from 'react'
import { data } from './data'
import Form from './Form'
import Person from './Person'

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD':
      const newAdd = [...state.people, action.payload]
      return { ...state, people: newAdd }
  }
}

const defaultState = {
  people: data,
}

function App() {
  // const [people, setPeople] = useState(data)
  const [person, setPerson] = useState({ name: '', age: '', lang: '' })
  const [state, dispatch] = useReducer(reducer, defaultState)

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(person)
    if (person.name && person.age && person.lang !== '') {
      // console.log(e.target)
      //dodaje tutaj id zeby rekord był unikalny (gdybym to dodał w handleChange to by wygenerowywało id przy każdej zmianie (wpisywaniu) w input)
      const id = new Date().getTime().toString()
      const newPerson = { id, ...person } // kolejność jest dowolna
      console.log('newPerson', newPerson)
      dispatch({ type: 'ADD', payload: newPerson })
      setPerson({ name: '', age: '', lang: '' })
    } else {
      alert('uzupełnij wszystie poal')
    }
  }

  const handleChange = (e) => {
    e.preventDefault()
    const name = e.target.name
    const value = e.target.value
    // console.log(name, value)
    setPerson({ ...person, [name]: value })
  }

  return (
    <div className='wrapper'>
      <Form
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        person={person}
      />
      <Person people={state.people} />
      <div className='btn-container'>
        <button className='btn'>remove all</button>
      </div>
    </div>
  )
}

export default App
