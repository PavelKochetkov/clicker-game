import React, { useState, useRef } from 'react'
import { Context } from './context'
import './App.css'
import AppHeader from './Components/AppHeader'
import AppContent from './Components/AppContent'
import AppFooter from './Components/AppFooter'

function App() {
  const [counter, setCounter] = useState(5.0)
  const time = useRef()
  const result = useRef()
  const hide = useRef()
  const startTime = () => {
    const interval = setInterval(() => {
      const setTime = parseFloat(time.current.innerHTML)
      if (setTime <= 0) {
        clearInterval(interval)
        hide.current.style.display = 'none'
        result.current.style.display = 'block'
      } else {
        time.current.innerHTML = (setTime - 0.1).toFixed(1)
      }
    }, 100)
  }

  return (
    <Context.Provider value={{
      counter: counter,
      setCounter: setCounter
    }}>
      <div className='app'>
        <AppHeader result={result} hide={hide} time={time} startTime={startTime}/>
        <AppContent startTime={startTime}/>
        <AppFooter/>
      </div>
    </Context.Provider>
  )
}
export default App