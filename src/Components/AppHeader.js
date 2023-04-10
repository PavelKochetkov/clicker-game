import React, { useContext }  from "react"
import { Context } from "../context"
import '../css/AppHeader.css'


export default function AppHeader() {
    const counter = useContext(Context)
    return (
        <div className="app_header">
            <h1>Время игры: <span>{counter}</span></h1>
            <h1 className="hide">Ваш результат: <span></span></h1>
        </div>
    )
}