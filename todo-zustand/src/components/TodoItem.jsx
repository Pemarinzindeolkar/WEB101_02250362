import useTodoStore from '../store/todoStore'

function TodoItem({ todo }) {
  const toggleTodo = useTodoStore(state => state.toggleTodo)
  const removeTodo = useTodoStore(state => state.removeTodo)

  return (
    <li>
      <input 
        type="checkbox" 
        checked={todo.completed} 
        onChange={() => toggleTodo(todo.id)} 
      />
      <span style={{ 
        textDecoration: todo.completed ? 'line-through' : 'none' 
      }}>
        {todo.text}
      </span>
      <button onClick={() => removeTodo(todo.id)}>Delete</button>
    </li>
  )
}

export default TodoItem
