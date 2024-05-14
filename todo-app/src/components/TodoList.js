import React,{useState} from 'react';
import todoItems from '../data/TodoData';
import TodoItem from './TodoItem';

function TodoList() {
    const[tasks,setTasks] = useState(todoItems);
    const[text,setText] = useState('')

    const handleAddTask = (e) =>{
        if(text){
            const newTask = {
                id: Date.now(),
                text: text,
                completed: false
            }
            setTasks([...tasks,newTask]);
            setText('');
        }
    }

    const deleteTask = (id)=>{
        setTasks(tasks.filter(task => task.id !==id));
    }
    const toggleCompleted = (id) =>{
        setTasks(tasks.map(task =>{
            if(task.id===id){
                return {...task,completed : !task.completed}
            }
            else{
                return task;
            }
        }));
    }
  return (
    <div>
    <div className="todolist">
    <h1>Todo List</h1>
    <div className="todolist__add">
    <input type="text" placeholder="Enter Task" value={text} onChange={(e)=>setText(e.target.value)}/>
    <button type="button" onClick = {handleAddTask}>Add</button>
    </div>
    <div className="tasks__header">
        <p>Tasks</p>
        <p>Is Completed</p>
        <p>Action</p>
    </div>
    {tasks.map((task,index)=>{
        return(
            <TodoItem
                Key={task.id}
                task={task}
                toggleCompleted = {toggleCompleted}
                deleteTask = {deleteTask} 
            />
        );
    })
    }
    </div>
    </div>
  )
}

export default TodoList