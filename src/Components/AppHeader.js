import React, { useContext }  from "react"
import { Context } from "../context"
import '../css/AppHeader.css'


export default function AppHeader(props) {
    const {counter} = useContext(Context)
    
    return (
        <div className="app_header">
            <h1 id='time' ref={props.hide}>
                Время игры: 
                <span ref={props.time} onClick={props.startTime}>
                    {counter}
                </span>
            </h1>
            <h1 className="hide" ref={props.result}>Ваш результат: ЗДАРОВА, ЗАЕБАЛ <span></span></h1>
        </div>
    )
}