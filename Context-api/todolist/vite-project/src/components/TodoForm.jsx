import { useState } from 'react';
import { UseToDo } from '../context';

function TodoForm() {
  const [todo, setTodo] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [priority, setPriority] = useState('medium');
  const [error, setError] = useState('');
  const { addTodo } = UseToDo();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!todo.trim()) {
      setError('Task description is required');
      return;
    }
    if (!dueDate) {
      setError('Due date is required');
      return;
    }
    addTodo({ todo, dueDate, priority });
    setTodo('');
    setDueDate('');
    setPriority('medium');
    setError('');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {error && (
        <p className="text-red-500 text-sm" role="alert">
          {error}
        </p>
      )}
      <div className="flex flex-col sm:flex-row gap-3">
        <input
          type="text"
          placeholder="Enter your task..."
          className="flex-1 p-2 rounded-lg bg-gray-700 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          aria-label="Task description"
        />
        <input
          type="date"
          className="p-2 rounded-lg bg-gray-700 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          min={new Date().toISOString().split('T')[0]}
          aria-label="Due date"
        />
        <select
          className="p-2 rounded-lg bg-gray-700 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          aria-label="Priority"
        >
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
      </div>
      <button
        type="submit"
        className="w-full sm:w-auto px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
      >
        Add Task
      </button>
    </form>
  );
}

export default TodoForm;