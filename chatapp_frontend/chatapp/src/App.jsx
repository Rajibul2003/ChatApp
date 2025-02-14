import { useState } from 'react'

import './App.css'
import toast, { Toaster } from 'react-hot-toast'
import JoinCreateChat from './components/JoinCreateChat'


function App() {
 
  return (
    <>
    <Toaster/>
      <JoinCreateChat/>
    </>
  )
}

export default App
