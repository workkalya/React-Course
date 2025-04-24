import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function SurahList() {
  const [surahs, setSurahs] = useState([]);

  useEffect(() => {
    fetch('http://api.alquran.cloud/v1/meta')
      .then(response => response.json())
      .then(data => {
        const surahList = Object.values(data.data.surahs.references);
        setSurahs(surahList);
      })
      .catch(error => console.error('Error fetching surahs:', error));
  }, []);

  return (
    <div className="container mx-auto p-4 pt-20 md:pl-72">
      <h2 className="text-3xl font-bold text-gray-800 font-roboto mb-6 text-center">
        List of Surahs
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {surahs.map(surah => (
          <Link
            key={surah.number}
            to={`/surah/${surah.number}`}
            className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="flex items-center">
              <span className="text-green-600 font-bold mr-2">{surah.number}</span>
              <div>
                <p className="text-lg font-semibold text-gray-800 font-roboto">
                  {surah.englishName}
                </p>
                <p className="text-sm text-gray-600 font-amiri">{surah.name}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default SurahList;