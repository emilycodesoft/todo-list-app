import React from 'react'
import {RiCloseCircleLine} from 'react-icons/ri'
import {TiEdit} from 'react-icons/ti'
function TodoCard({todo, completeTodo, removeTodo, editTodo}) {
  return (
    <div className={`todo-card ${todo.isCompleted ? 'todo-card complete' : null}`}>
      <div className='todo-text' onClick={() => completeTodo(todo.id)}  key={todo.id}>
        {todo.text}
      </div>
      <div className='icons'>
        <RiCloseCircleLine onClick={() => removeTodo(todo.id)}></RiCloseCircleLine>
        <TiEdit onClick={() => editTodo(Object.assign({}, todo))}></TiEdit>
      </div>
    </div>
  )
}

export default TodoCard