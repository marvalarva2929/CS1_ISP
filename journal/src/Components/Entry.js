import './Entry.css'
import React, {useState} from "react"

const Entry = (props) => {
    const [open, setOpen] = useState(false);

    const click = () => { setOpen(!open); }
    // const title = props.title;

    return (
        <>
            <div className='Entry-Wrapper'>
                <button className = "Entry-Button" onClick = {() => click() }> {props.title} </button>
                { (open) ? (props.children) : <></> }
            </div>
        </>
    )
}

export default Entry