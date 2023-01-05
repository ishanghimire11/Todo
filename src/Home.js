import { useState } from "react";
import "./Home.css"
import Todo from "./Todo";

const Home = () => {
    const [myList, setmyList] = useState([{ name: "Learn Tailwind", id: 0 }])
    const [myInput, setmyInput] = useState("")


    const handleDelete = (id, names) => {
        const newTodo = myList.filter(todo => todo.id !== id)
        if (window.confirm(`Delete "${names}" from list?`) === true) {
            setmyList(newTodo)
        }
    }


    return (
        <>
            <div className='container'>
                <h1>To Do List</h1>
                <input type="text" className='todo-input' placeholder='Add Todo' value={myInput} onChange={e => setmyInput(e.target.value)} />
                <i className="fa-solid fa-plus" onClick={() => { setmyInput(""); myList.push({ name: myInput, id: myList.length }) }}></i>

                <ul className="--added-List">

                    {myList.map((myLists, myindex) => {

                        return <Todo key={myLists.id} myindex={myindex} index={myLists.id} names={myLists.name} handleDelete={handleDelete} />


                    })}
                </ul>

            </div>
        </>
    );
}

export default Home;