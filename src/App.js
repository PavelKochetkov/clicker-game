import React, { useState } from 'react'
import { Context } from './context'
import './App.css'
import AppHeader from './Components/AppHeader'
import AppContent from './Components/AppContent'
import AppFooter from './Components/AppFooter'

function App() {
  const [counter, setCounter] = useState(5)
  return (
    <Context.Provider value={[counter, setCounter]}>
      <div className='app'>
        <AppHeader/>
        <AppContent/>
        <AppFooter/>
      </div>
    </Context.Provider>
  )
}
export default App