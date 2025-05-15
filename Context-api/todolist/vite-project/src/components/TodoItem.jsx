import { useState } from 'react';
import { UseToDo } from '../context';

function TodoItem({ todo }) {
  const [isEditable, setIsEditable] = useState(false);
  const [todoMsg, setTodoMsg] = useState(todo.todo);
  const { updateTodo, deleteTodo, toggleComplete } = UseToDo();

  const editTodo = () => {
    if (!todoMsg.trim()) return;
    updateTodo(todo.id, { ...todo, todo: todoMsg });
    setIsEditable(false);
  };

  const priorityColors = {
    high: 'border-red-500',
    medium: 'border-yellow-500',
    low: 'border-green-500',
  };

  return (
    <div
      className={`flex items-center p-4 rounded-lg bg-gray-700 border-l-4 ${
        priorityColors[todo.priority]
      } transition-transform transform hover:scale-[1.02] ${
        todo.completed ? 'opacity-60' : ''
      }`}
      role="listitem"
    >
      <input
        type="checkbox"
        className="h-5 w-5 text-blue-600 rounded"
        checked={todo.completed}
        onChange={() => toggleComplete(todo.id)}
        aria-label={`Mark ${todo.todo} as ${
          todo.completed ? 'incomplete' : 'complete'
        }`}
      />
      <div className="flex-1 ml-3">
        <input
          type="text"
          className={`w-full bg-transparent text-white ${
            isEditable
              ? 'border border-gray-500 rounded px-2'
              : 'border-none'
          } ${todo.completed ? 'line-through text-gray-400' : ''}`}
          value={todoMsg}
          onChange={(e) => setTodoMsg(e.target.value)}
          readOnly={!isEditable}
          aria-label="Task description"
        />
        <div className="text-sm text-gray-400">
          Due: {new Date(todo.dueDate).toLocaleDateString()} | Priority:{' '}
          {todo.priority.charAt(0).toUpperCase() + todo.priority.slice(1)}
        </div>
      </div>
      <button
        className="p-2 text-gray-300 hover:text-white disabled:opacity-50"
        onClick={() => {
          if (todo.completed) return;
          if (isEditable) editTodo();
          else setIsEditable(true);
        }}
        disabled={todo.completed}
        aria-label={isEditable ? 'Save task' : 'Edit task'}
      >
        {isEditable ? '💾' : '✏️'}
      </button>
      <button
        className="p-2 text-gray-300 hover:text-red-500"
        onClick={() => deleteTodo(todo.id)}
        aria-label="Delete task"
      >
        🗑️
      </button>
    </div>
  );
}

export default TodoItem;