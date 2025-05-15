import { UseToDo } from '../context';

function TodoFilter() {
  const { filter, setFilter, sortBy, setSortBy } = UseToDo();

  return (
    <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-4">
      <div className="flex gap-2" role="group" aria-label="Filter tasks">
        <button
          className={`px-3 py-1 rounded-lg transition-colors ${
            filter === 'all' ? 'bg-blue-600 text-white' : 'bg-gray-600 text-gray-200'
          } hover:bg-blue-700`}
          onClick={() => setFilter('all')}
          aria-pressed={filter === 'all'}
        >
          All
        </button>
        <button
          className={`px-3 py-1 rounded-lg transition-colors ${
            filter === 'active' ? 'bg-blue-600 text-white' : 'bg-gray-600 text-gray-200'
          } hover:bg-blue-700`}
          onClick={() => setFilter('active')}
          aria-pressed={filter === 'active'}
        >
          Active
        </button>
        <button
          className={`px-3 py-1 rounded-lg transition-colors ${
            filter === 'completed' ? 'bg-blue-600 text-white' : 'bg-gray-600 text-gray-200'
          } hover:bg-blue-700`}
          onClick={() => setFilter('completed')}
          aria-pressed={filter === 'completed'}
        >
          Completed
        </button>
      </div>
      <div>
        <label htmlFor="sort" className="sr-only">
          Sort tasks
        </label>
        <select
          id="sort"
          className="p-2 rounded-lg bg-gray-700 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          aria-label="Sort tasks"
        >
          <option value="dueDate">Sort by Due Date</option>
          <option value="priority">Sort by Priority</option>
        </select>
      </div>
    </div>
  );
}

export default TodoFilter;