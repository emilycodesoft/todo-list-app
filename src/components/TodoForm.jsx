import React, {useState, useRef, useEffect} from 'react'

function TodoForm(props) {
	const [input, setInput] = useState(props.edit ? props.edit.text : '')
	const inputEl = useRef(null)

	useEffect(() => {
		inputEl.current.focus()
	})

	const handleSubmit  = e => {
		e.preventDefault()
		props.onSubmit({
			id: props.edit ? props.edit.id : new Date().getTime(),
			text: input,
			isCompleted: false
		})
		setInput('')
	}

	const handleChange = e => {
		setInput(e.target.value)
	}


  return (
    <form className={props.edit ? 'todo-edit' : 'todo-form'}onSubmit={handleSubmit}>
			<input type="text" placeholder='Add a todo' value={input} onChange={handleChange} name="text" className='todo-input' ref={inputEl}/>
			<button className='todo-button' type='submit'>{props.edit ? 'Edit Todo' : 'Add Todo'}</button>
		</form>
  )
}

export default TodoForm