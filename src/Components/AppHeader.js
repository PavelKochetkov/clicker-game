import React, { useContext }  from "react"
import { Context } from "../context"
import '../css/AppHeader.css'


export default function AppHeader() {
    const {counter, hide, time, result, score} = useContext(Context)
    return (
        <div className="app_header">
            <h1 id='time' ref={hide}>
                Время игры: 
                <span ref={time}>
                    {counter}
                </span>
            </h1>
            <h1 className="hide" ref={result}>
                Ваш результат: 
                <span>
                    {score}
                </span>
            </h1>
        </div>
    )
}