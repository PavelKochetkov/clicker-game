import React, { useContext } from "react"
import { Context } from "../context"
import '../css/AppFooter.css'

export default function AppFooter () {
    const [counter, setCounter] = useContext(Context)
    const handleCounter = (event) => {
        setCounter(event.target.value)
    }
    return (
        <div className="app_footer">
            <div className="input">
                <label>Время игры, (сек)</label>
                <input 
                    type="number" 
                    min="5"
                    max='9999' 
                    value={counter}
                    onChange={handleCounter}
                />
            </div>
        </div>
    )
}