import { useState } from "react"
import "./todo.css"

const Todo = (props) => {
    const names = props.names
    const index = props.index
    const d = new Date()
    const myindex = props.myindex

    const dateonString = d.toString()
    const [isActive, setActive] = useState(true)
    const myDate = dateonString


    const handleDelete = props.handleDelete

    const handleChange = () => {
        setActive(!isActive)

    }


    return (
        <>
            <li className="lists" >
                <span id="index-number">{myindex + 1}</span>
                <input type="checkbox" id="checkbox" onChange={handleChange} />
                <p className="list-paragraph" style={{ textTransform: "capitalize" }}>{names}</p>
                <span className={`${isActive ? "hidden" : "date-active"}`}>Completed on {myDate}</span>
                <i className={`fa-solid ${isActive ? "fa-trash" : "hidden"}`} onClick={() => handleDelete(index, names)}></i>
                <i className={`fa-solid ${isActive ? "hidden" : "fa-check"}`}></i>
            </li>
        </>

    );
}

export default Todo;
