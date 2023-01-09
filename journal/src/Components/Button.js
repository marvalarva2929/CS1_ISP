import React, {useState} from "react"
import "./Button.css"

const Button = props => {
    const [clicked, setClicked] = useState(false);
    const clickHandler = () => {
        setClicked(!clicked);
    }
    return (
        <button className="Button-button" onClick={ clickHandler }> {clicked ? props.children : <></>} </button>
    )
}

export default Button