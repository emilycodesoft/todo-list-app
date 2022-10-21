import React, {useState} from 'react'
import TodoCard from './TodoCard'
import TodoForm from './TodoForm'


function TodoList({todos, completeTodoProps, removeTodoProps, updateTodo}) {
  // todoEdit
  const [edit, setEdit] = useState({
    id: null,
    text: '',
    isCompleted: false
  })

  const editTodo = (todo) => {
    setEdit({id: todo.id, text: todo.text})
  }

  const submitUpdate = (editTodo) => {
    updateTodo(editTodo)
    setEdit({
      id: null,
      text: '',
      isCompleted: false
    })
  }


  return (
    <div>
        <h2>What's the plan for today</h2>
        <div className='todo-list'>
        {todos.map((todo, index) =>  
          todo.id == edit.id ? 
          <TodoForm edit={edit} onSubmit={submitUpdate} key={index}></TodoForm>: <TodoCard todo={todo} completeTodo={completeTodoProps} removeTodo={removeTodoProps} editTodo={editTodo} key={index}></TodoCard>
        ) }
        </div>
    </div>
  )
}

export default TodoList