import { useReducer } from 'react'
import { useState } from 'react'
import { data } from './data'
import Form from './Form'
import Person from './Person'

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_PERSON':
      const newAdd = [...state.people, action.payload]
      return { ...state, people: newAdd }
    case 'REMOVE_PERSON':
      const result = state.people.filter((item) => item.id !== action.payload)
      return { ...state, people: result }
    case 'REMOVE_ALL':
      return { ...state, people: [] }
  }
}

const defaultState = {
  people: data,
}

function App() {
  // const [people, setPeople] = useState(data)
  const [person, setPerson] = useState({ name: '', age: '', lang: '' })
  const [isVisible, setIsVisible] = useState(true)
  const [state, dispatch] = useReducer(reducer, defaultState)

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(person)
    if (person.name && person.age && person.lang !== '') {
      // console.log(e.target)
      //dodaje tutaj id zeby rekord był unikalny (gdybym to dodał w handleChange to by wygenerowywało id przy każdej zmianie (wpisywaniu) w input)
      const id = new Date().getTime()
      const newPerson = { id, ...person } // kolejność jest dowolna
      console.log('newPerson', newPerson)
      dispatch({ type: 'ADD_PERSON', payload: newPerson })
      setPerson({ name: '', age: '', lang: '' })
      setIsVisible(true)
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

  const handleRemove = (id) => {
    // e.preventDefault()
    console.log(id)
    dispatch({ type: 'REMOVE_PERSON', payload: id })
  }

  const handleRemoveAll = (e) => {
    // console.log(e.target.current)
    setIsVisible(!isVisible)
    dispatch({ type: 'REMOVE_ALL' })
  }

  return (
    <div className='wrapper'>
      <Form
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        person={person}
      />
      <Person people={state.people} handleRemove={handleRemove} />
      <div className='btn-container'>
        <button
          className={isVisible ? 'btn' : 'no-visible'}
          onClick={handleRemoveAll}
        >
          remove all
        </button>
      </div>
    </div>
  )
}

export default App
