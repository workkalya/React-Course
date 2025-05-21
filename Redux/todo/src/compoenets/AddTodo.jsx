import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

const AddTodo = () => {
    const [todo, setTodo] = useState("");
    const dispatch = useDispatch();

    const handleAddTodo = (e) => {
        e.preventDefault();
        if (todo.trim()) { // Check if the input is not empty
            dispatch(addTodo(todo));
            setTodo("");
        }
    };

    return (
        <form
            className="flex items-center gap-2 p-4 bg-white rounded shadow"
            onSubmit={handleAddTodo}
        >
            <input
                type="text"
                className="flex-1 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Add a new todo..."
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
            />
            <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
            >
                Add
            </button>
        </form>
    );
};

export default AddTodo;
