import { useState } from "react"
import "./todo.css"

const Todo = (props) => {
    const names=props.names
    const index=props.index
    const d = new Date()
 

    const dateonString= d.toString()
    const [isActive,setActive]=useState(true)
    const myDate = dateonString
    
    const handleDelete=props.handleDelete
    
    const handleChange = () => {
        setActive(!isActive)

    }


    // const handleDate = () => {
    //     if (!isActive){
    //         let p = new Date()
    //         let dated = p.toString()
    //         setmyDate(dated)
    //         console.log(myDate)
    //     }
    //     return true
        
    // }


    return (
        <>
            <li className="lists" >
                <span id="index-number">{index}</span>
                <input type="checkbox" id="checkbox" onChange={handleChange}  />
                <p className="list-paragraph" style={{textTransform: "capitalize"}}>{ names }</p> 
                <span className={`${isActive ? "hidden" : "date-active"}`}>Completed on {myDate}</span>
                <i className={`fa-solid ${isActive ? "fa-trash" : "fa-check"}`} onClick={()=> handleDelete(index,names)}></i>
            </li>
        </>
    
    );
}

export default Todo;
