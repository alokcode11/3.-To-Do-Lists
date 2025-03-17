import React, { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import TodoList from './components/ToDoList/ToDoList';
import './App.css';

function App() {
  // State to store todo items
  const [todos, setTodos] = useState(() => {
    // Load todos from localStorage if available
    const savedTodos = localStorage.getItem('todos');
    return savedTodos ? JSON.parse(savedTodos) : [];
  });
  
  // State for the new todo input
  const [newTodo, setNewTodo] = useState('');

  // Save todos to localStorage whenever todos state changes
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  // Add new todo
  const addTodo = (e) => {
    e.preventDefault();
    if (newTodo.trim() === '') return;
    
    const newItem = {
      id: Date.now(),
      text: newTodo,
      completed: false
    };
    
    setTodos([...todos, newItem]);
    setNewTodo('');
  };

  // Delete todo
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  // Toggle completed status
  const toggleComplete = (id) => {
    setTodos(
      todos.map(todo => 
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Edit todo
  const editTodo = (id, newText) => {
    setTodos(
      todos.map(todo => 
        todo.id === id ? { ...todo, text: newText } : todo
      )
    );
  };

  return (
    <div className="app-container">
      <Header />
      <form className="add-todo-form" onSubmit={addTodo}>
        <input
          type="text"
          className="todo-input"
          placeholder="Add a new task..."
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button type="submit" className="add-button">Add</button>
      </form>
      <TodoList 
        todos={todos} 
        onDelete={deleteTodo} 
        onToggleComplete={toggleComplete} 
        onEdit={editTodo}
      />
    </div>
  );
}

export default App;
