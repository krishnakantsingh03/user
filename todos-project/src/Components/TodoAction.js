import React, { useEffect } from 'react'
import Header from "./Header";
import Todo from "./Todos";
import TodoItem from "./TodoItem";
import { useState } from "react";
import {toast} from "react-toastify";
import { getList, removeUser } from '../Service/User';

const TodoAction = () => {
    const [list, setList] = useState([]);
    const addTodo = (newTodo) => {
        const sno = list.length + 1;
        newTodo = {
            ...newTodo,
            srNo : sno
        }
        
        setList([...list, newTodo]);
        return toast.success("Added successfully");
    }
    const onDelete = async(e) => {
        await removeUser(e.email);
        const listResponse = await getList();
        setList(listResponse);
        const newList = setList(list.filter((element) => { return e !== element}));
    }

    return (
        <>
            <div className="app-container">
                <Header header="USER PORTAL"/>
                <Todo />
                <TodoItem list={list} onDelete={onDelete} onAdd={addTodo}/>
            </div>
        </>
    )
}

export default TodoAction;