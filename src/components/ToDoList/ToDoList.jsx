import React from 'react';
import TodoItem from '../todoitem/TodoItem';
import './TodoList.css';

function TodoList({ todos, onDelete, onToggleComplete, onEdit }) {
  // Check if there are no todos
  if (todos.length === 0) {
    return (
      <div className="empty-list">
        <p>No tasks yet. Add a task to get started!</p>
      </div>
    );
  }

  // Group todos by completion status - completed at the bottom
  const activeTodos = todos.filter(todo => !todo.completed);
  const completedTodos = todos.filter(todo => todo.completed);
  const sortedTodos = [...activeTodos, ...completedTodos];

  return (
    <div className="todo-list">
      {sortedTodos.map(todo => (
        <TodoItem 
          key={todo.id} 
          todo={todo} 
          onDelete={onDelete} 
          onToggleComplete={onToggleComplete} 
          onEdit={onEdit} 
        />
      ))}
      <div className="todo-stats">
        <p>{activeTodos.length} active tasks</p>
        <p>{completedTodos.length} completed</p>
      </div>
    </div>
  );
}

export default TodoList;