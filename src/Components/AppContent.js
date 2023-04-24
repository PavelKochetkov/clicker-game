import React, { useRef } from 'react'
import '../css/AppContent.css'

export default function AppContent(props) {

    //Доступ к DOM- элемантам
    const game = useRef()
    const box = useRef()
    const btn = useRef()
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
        props.startTime()
    }
    //Генерирование квадратов по клику на них
    function handleBoxClick() {
       renderBox()
    }
    return (
        <div className='app_content'>
            <button ref={btn} onClick={startGame} className="btn">Начать</button>
            <div ref={game} className='game'>
                <div ref={box} onClick={handleBoxClick} className='box'></div>    
            </div>  
        </div>
    )
}