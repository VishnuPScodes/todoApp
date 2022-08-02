import React, { useEffect, useState } from 'react'
import TodoInput from './TodoInput'
import axios from 'axios'
function Todos() {
    const [data,setData]=useState([])
    useEffect(()=>{
        axios
          .get("http://localhost:8080/todos")
          .then(res => setData(res.data))
          .catch(err => console.error(err));
    },[])
  return (
    <div>
        <TodoInput/>
        {data.map((e)=>{
            return <p>{e.todo}</p>
        })}
    </div>
  )
}

export default Todos