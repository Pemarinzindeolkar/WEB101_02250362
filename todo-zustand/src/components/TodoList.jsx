import useTodoStore from '../store/todoStore'
import TodoItem from './TodoItem'

function TodoList() {
  const todos = useTodoStore(state => state.todos)
  const clearCompleted = useTodoStore(state => state.clearCompleted)

  return (
    <div>
      <ul>
        {todos.map(todo => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
      
      {todos.length > 0 && (
        <button onClick={clearCompleted}>Clear Completed</button>
      )}
    </div>
  )
}

export default TodoList
