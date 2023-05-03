import React, { useContext } from "react"
import { Context } from "../context"
import '../css/AppFooter.css'

export default function AppFooter () {
    const {counter, setCounter, hide, result} = useContext(Context)
    const handleCounter = (event) => {
        setCounter(parseFloat(event.target.value).toFixed(1))
        hide.current.style.display = 'block'
        result.current.style.display = 'none'
    }
    return (
        <div className="app_footer">
            <div className="input">
                <label>Время игры, (сек)</label>
                <input 
                    type="number" 
                    min='5'
                    max='9999' 
                    value={counter}
                    onChange={handleCounter}
                />
            </div>
        </div>
    )
}