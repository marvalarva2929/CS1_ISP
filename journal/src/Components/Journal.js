import './Journal.css'
import "./Entry.js"

const Journal = (props) => {


    return (
        <>
            <h1>Joshua Vigel's ISP Journal</h1>
            <div className='Journal-Wrapper'>
                {props.children}
            </div>
        </>
    )
}

export default Journal