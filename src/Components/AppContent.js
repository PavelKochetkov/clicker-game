import React, { useContext } from 'react'
import '../css/AppContent.css'
import { Context } from '../context'

export default function AppContent() {
    const {startGame,handleBoxClick,game,box,btn} = useContext(Context)
    return (
        <div className='app_content'>
            <button ref={btn} onClick={startGame} className="btn">Начать</button>
            <div ref={game} className='game'>
                <div ref={box} onClick={handleBoxClick} className='box'></div>    
            </div>  
        </div>
    )
}