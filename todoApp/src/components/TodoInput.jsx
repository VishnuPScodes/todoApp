import axios from 'axios';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTodoRequest, addTodoSuccess } from '../Redux/action';
function TodoInput() {
    const [todo,setTodo]=useState('');
    const dispatch=useDispatch()
    const handleSubmit=(()=>{
        if(todo==''){
            alert('please add something inside todo input box')
        }
        else{
            dispatch(addTodoRequest());
            const todos={
                todo:todo
            }
            axios.post('http://localhost:8080/todos',todos).then((e)=>{
                dispatch(addTodoSuccess(e.data))
                alert('todo added')
            })
        }
    })
  return (
    <div>
        <input type="text" onChange={((e)=>{setTodo(e.target.value)})} placeholder='Add todo' /> <br />
        <button onClick={handleSubmit} >Add todo</button>
    </div>
  )
}

export default TodoInput