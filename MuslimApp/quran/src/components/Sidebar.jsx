import { Link } from 'react-router-dom';

function Sidebar({ isOpen, toggleSidebar }) {
  return (
    <div
      className={`fixed top-16 left-0 h-full w-64 bg-white shadow-lg z-10 transform ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } md:translate-x-0 transition-transform duration-300 ease-in-out`}
    >
      <div className="p-4">
        <h2 className="text-xl font-bold text-gray-800 font-roboto mb-4">Menu</h2>
        <nav className="space-y-2">
          <Link
            to="/"
            onClick={() => toggleSidebar()}
            className="block py-2 px-4 text-green-600 hover:bg-gray-100 rounded font-roboto"
          >
            Quran
          </Link>
          <Link
            to="/hadith"
            onClick={() => toggleSidebar()}
            className="block py-2 px-4 text-green-600 hover:bg-gray-100 rounded font-roboto"
          >
            Hadith
          </Link>
          <Link
            to="/duas"
            onClick={() => toggleSidebar()}
            className="block py-2 px-4 text-green-600 hover:bg-gray-100 rounded font-roboto"
          >
            Duas
          </Link>
        </nav>
      </div>
    </div>
  );
}

export default Sidebar;