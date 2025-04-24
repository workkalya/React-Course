import { createContext,useContext } from "react";

export const ToDoContext = ({
    todos: [
        {
            id : 1,
            todo : "todo msg",
            completed : false
        }
    ],
    addTodos : (todo) => {},
    updatedTodo : (id,todo)=>{},
    deleteTodo : (id) => {},
    toggleComplete : (id)=>{},
});

export const UseToDO = () => {
    return useContext(ToDoContext);
}

export const ToDoProvider = ToDoContext.Provider