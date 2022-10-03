import React from 'react'
import { useGlobalContext } from '../context'
import '../components/SwitchButton.css'
import { BsSun } from 'react-icons/bs'

export const SwitchButton = () => {
  const { changeColor } = useGlobalContext()
  return (
    <div className='switch'>
      <BsSun />
    </div>
  )
}
