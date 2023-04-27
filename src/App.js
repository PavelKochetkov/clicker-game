import React, { useState, useRef } from 'react'
import { Context } from './context'
import './App.css'
import AppHeader from './Components/AppHeader'
import AppContent from './Components/AppContent'
import AppFooter from './Components/AppFooter'

function App() {
  const [counter, setCounter] = useState(5.0)
  //Доступ к DOM- элемантам
  const game = useRef()
  const box = useRef()
  const btn = useRef()
  const time = useRef()
  const result = useRef()
  const hide = useRef()
  //Функция случайных значений   
  function getRandom(min, max) {
      return Math.floor(Math.random() * (max - min) + min)
  }
  //Функция генерирования квадратов
  const renderBox = () => {
      const arrayColors = ['red', 'blue', 'green', 'orange', 'navy', 'purple', 'maroon']
      const boxSize = getRandom(30, 100)
      const gameSize = game.current.getBoundingClientRect()
      const maxTop = gameSize.height - boxSize
      const maxLeft = gameSize.width - boxSize
      const randomColorIndex = getRandom(0, arrayColors.length)
      box.current.style.height = box.current.style.width = boxSize + 'px'
      box.current.style.position = 'relative'
      box.current.style.backgroundColor = arrayColors[randomColorIndex]
      box.current.style.top = getRandom(0, maxTop) + 'px'
      box.current.style.left = getRandom(0, maxLeft) + 'px'
      box.current.style.cursor = 'pointer'
  }
  //Функция запуска игры
  const startGame = () => {
      btn.current.style.display = 'none'
      renderBox()
      startTime()
  }
  //Генерирование квадратов по клику на них
  function handleBoxClick() {
     renderBox()
  }
  // функция запуска времени
  const startTime = () => {
    const interval = setInterval(() => {
      const setTime = parseFloat(time.current.innerHTML)
      if (setTime <= 0) {
        clearInterval(interval)
        hide.current.style.display = 'none'
        result.current.style.display = 'block'
        btn.current.style.display = 'block'
        box.current.style.display = ''
      } else {
        time.current.innerHTML = (setTime - 0.1).toFixed(1)
      }
    }, 100)
  }
  return (
    <Context.Provider value={{
      counter, setCounter, startGame,
      handleBoxClick, game, box, time,
      btn, hide, result, startTime
    }}>
      <div className='app'>
        <AppHeader/>
        <AppContent/>
        <AppFooter/>
      </div>
    </Context.Provider>
  )
}
export default App