import { useState } from 'react'
import './App.css'

const Person = () => {

  return (
    <>
      <p>Name: Jenny</p>
      <p>Last name: Giant</p>
      <p>Age: 30</p>
    </>
  )
}

const App = () => {
  return(
    <div className='App'>
      <Person/>
    </div>
  )
}

export default App