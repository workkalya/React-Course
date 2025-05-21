import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";

function Todos() {
    const todos = useSelector((state) => state.todo.todos || []);
    const dispatch = useDispatch();

    return (
        <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4 text-center">Todos</h2>
            {todos.length === 0 ? (
                <p className="text-gray-500 text-center">No todos yet!</p>
            ) :
             (
                <ul className="space-y-3">
                    {todos.map((todo) => (
                        <li
                            key={todo.id}
                            className="flex items-center justify-between bg-gray-100 px-4 py-2 rounded"
                        >
                            <span className="text-gray-800">{todo.text}</span>
                            <button
                                onClick={() => dispatch(removeTodo(todo.id))}
                                className="ml-4 px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition"
                                aria-label={`Delete ${todo.text}`}
                                title="Delete"
                            >
                                &#10005;
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default Todos;
