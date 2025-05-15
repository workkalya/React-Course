import { createContext, useContext } from 'react';

export const ToDoContext = createContext({
  todos: [],
  addTodo: (todo) => {},
  updateTodo: (id, todo) => {},
  deleteTodo: (id) => {},
  toggleComplete: (id) => {},
  filter: 'all',
  setFilter: (filter) => {},
  sortBy: 'dueDate',
  setSortBy: (sortBy) => {},
});

export const UseToDo = () => {
  return useContext(ToDoContext);
};

export const ToDoProvider = ToDoContext.Provider;