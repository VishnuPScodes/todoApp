import React, { useState } from 'react'

function TodoInput() {
    const [todo,setTodo]=useState('');
  return (
    <div>
        <input type="text" onChange={((e)=>{setTodo(e.target.value)})} placeholder='Add todo' /> <br />
        <button>Add todo</button>
    </div>
  )
}

export default TodoInput