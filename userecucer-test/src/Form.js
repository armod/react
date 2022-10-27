import React from 'react'

const Form = ({ handleSubmit, handleChange, person }) => {
  const { name, age, lang } = person
  return (
    <section className='section'>
      <h2>Add person</h2>
      <form onSubmit={handleSubmit} className='form'>
        <label htmlFor='name'>
          <p>name:</p>
          <input type='text' name='name' value={name} onChange={handleChange} />
        </label>
        <label htmlFor='age'>
          <p>age:</p>
          <input type='text' name='age' value={age} onChange={handleChange} />
        </label>
        <label htmlFor='language'>
          <p>language:</p>
          <input type='text' name='lang' value={lang} onChange={handleChange} />
        </label>
        <button className='btn' type='submit'>
          add
        </button>
      </form>
    </section>
  )
}

export default Form
