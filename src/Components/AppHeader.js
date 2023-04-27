import React, { useContext }  from "react"
import { Context } from "../context"
import '../css/AppHeader.css'


export default function AppHeader(props) {
    const {counter, hide, time, result, startTime} = useContext(Context)
    
    return (
        <div className="app_header">
            <h1 id='time' ref={hide}>
                Время игры: 
                <span ref={time} onClick={startTime}>
                    {counter}
                </span>
            </h1>
            <h1 className="hide" ref={result}>Ваш результат: Результат <span></span></h1>
        </div>
    )
}