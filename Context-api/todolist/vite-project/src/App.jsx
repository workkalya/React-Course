import { useState, useEffect } from 'react';
import './App.css';
import { ToDoProvider } from './context';
import { TodoForm, TodoItem, TodoFilter } from './components';

function App() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('all');
  const [sortBy, setSortBy] = useState('dueDate');

  const addTodo = (todo) => {
    setTodos((prev) => [
      { id: Date.now(), ...todo, completed: false },
      ...prev,
    ]);
  };

  const updateTodo = (id, todo) => {
    setTodos((prev) =>
      prev.map((item) => (item.id === id ? { ...item, ...todo } : item))
    );
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((item) => item.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos')) || [];
    const storedFilter = localStorage.getItem('filter') || 'all';
    const storedSort = localStorage.getItem('sortBy') || 'dueDate';
    setTodos(storedTodos);
    setFilter(storedFilter);
    setSortBy(storedSort);
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
    localStorage.setItem('filter', filter);
    localStorage.setItem('sortBy', sortBy);
  }, [todos, filter, sortBy]);

  const filteredTodos = todos
    .filter((todo) => {
      if (filter === 'active') return !todo.completed;
      if (filter === 'completed') return todo.completed;
      return true;
    })
    .sort((a, b) => {
      if (sortBy === 'dueDate') {
        return new Date(a.dueDate) - new Date(b.dueDate);
      }
      const priorityOrder = { high: 3, medium: 2, low: 1 };
      return priorityOrder[b.priority] - priorityOrder[a.priority];
    });

  return (
    <ToDoProvider
      value={{
        todos,
        addTodo,
        updateTodo,
        deleteTodo,
        toggleComplete,
        filter,
        setFilter,
        sortBy,
        setSortBy,
      }}
    >
      <div className="min-h-screen bg-gray-900 py-8 px-4">
        <div className="max-w-3xl mx-auto bg-gray-800 rounded-xl shadow-xl p-6 text-white">
          <h1 className="text-3xl font-bold text-center mb-6">
            Task Manager
          </h1>
          <TodoForm />
          <TodoFilter />
          <div className="space-y-3 mt-4">
            {filteredTodos.length === 0 ? (
              <p className="text-center text-gray-400">No tasks to show</p>
            ) : (
              filteredTodos.map((todo) => (
                <TodoItem key={todo.id} todo={todo} />
              ))
            )}
          </div>
        </div>
      </div>
    </ToDoProvider>
  );
}

export default App;