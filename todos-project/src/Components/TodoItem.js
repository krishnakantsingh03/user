import React, { useEffect, useState } from "react" 
import { getList } from "../Service/User";
import AddTodo from "./AddTodo";

const TodoItem = ({onDelete, onAdd}) => {
    const [list, setList] = useState([]);

    useEffect(() => {
        getlist();
    }, [])
    const getlist = async () => {
        const response = await getList();
        console.log(response);
        setList(response);
    }
    
    return (
        <>

            <div className="todoitem-container">
                <AddTodo onAdd={onAdd}/>
                {list.length === 0 ? "NO USER IN LIST":list.map((value, index) => {
                    return (
                        <div key={index} className="todo-items-container">
                            <p>Sr.No : {index+1}</p>
                            <p>Username : {value.username}</p>
                            <p>Email : {value.email}</p>
                            <button className="btn btn-sm btn-danger" onClick={(e) => {onDelete(value)}}>Delete</button>
                        </div>
                        )

                })}
            </div>
        </>
    )
}

export default TodoItem;