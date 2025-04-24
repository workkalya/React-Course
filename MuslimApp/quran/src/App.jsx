import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import SurahList from './components/SurahList';
import SurahDetail from './components/SurahDetail';
import HadithList from './components/HadithList';
import HadithDetail from './components/HadithDetail';
import Duas from './components/Duas';
import { useState } from 'react';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <main className="pt-16">
        <Routes>
          <Route path="/" element={<SurahList />} />
          <Route path="/surah/:number" element={<SurahDetail />} />
          <Route path="/hadith" element={<HadithList />} />
          <Route path="/hadith/:collection" element={<HadithDetail />} />
          <Route path="/duas" element={<Duas />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;