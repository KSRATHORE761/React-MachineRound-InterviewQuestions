import React from 'react'

function TodoItem({task,toggleCompleted,deleteTask}) {
    const handleChange = (id) =>{
        toggleCompleted(id);
    }
    const handleDelete = (id)=>{
        deleteTask(id);
    }
  return (
    <div className="todo-item">
    <p className={task.completed ? "checked":""}>{task.text}</p>
    <input type="checkbox" checked={task.completed} onChange={()=>handleChange(task.id)}/>
    <div>
    {/* <button type="button">📝</button> */}
    <button type="button" onClick={()=>handleDelete(task.id)}>🗑️</button>
    </div>
    </div>
  )
}

export default TodoItem