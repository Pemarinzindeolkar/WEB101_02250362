import { useState } from 'react'
import useTodoStore from '../store/todoStore'

function TodoInput() {
  const [text, setText] = useState('')
  const addTodo = useTodoStore(state => state.addTodo)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (text.trim()) {
      addTodo(text)
      setText('')
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={text} 
        onChange={(e) => setText(e.target.value)} 
        placeholder="Add a new todo..." 
      />
      <button type="submit">Add</button>
    </form>
  )
}

export default TodoInput
