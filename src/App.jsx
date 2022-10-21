import { useState } from 'react'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'

function App() {
  const [todos, setTodos] = useState([])
  let updatedTodos;

  const addTodo = (newTodo) => {
		const newTodos = [newTodo, ...todos]
		setTodos(newTodos)

	}

  const removeTodo = (id) => {
    updatedTodos = todos.filter(todo => todo.id != id)
    setTodos(updatedTodos)
  }

  const updateTodo = (editTodo) => {
    updatedTodos = todos.map(todo => todo.id === editTodo.id ? editTodo : todo)
    setTodos(updatedTodos)
  }


  const completeTodo = (id) => {
    updatedTodos = todos.map(todo => {
     todo.id === id ? todo.isCompleted = !todo.isCompleted : null
      return todo
    })
    setTodos(updatedTodos)
  }

  return (
    <div className="App">
      <h1>Todo App</h1>
      <TodoForm edit={null} onSubmit={addTodo}></TodoForm>
      <TodoList todos={todos} completeTodoProps={completeTodo} removeTodoProps={removeTodo} updateTodo={updateTodo}></TodoList>
    </div>
  )
}

export default App
