import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function HadithList() {
  const [collections, setCollections] = useState([]);

  useEffect(() => {
    // Mock Hadith collections (replace with actual API call if available)
    const mockCollections = [
      { id: 'bukhari', name: 'Sahih al-Bukhari' },
      { id: 'muslim', name: 'Sahih Muslim' },
      { id: 'tirmidhi', name: 'Jami` at-Tirmidhi' },
      { id: 'abudawud', name: 'Sunan Abu Dawud' },
    ];
    setCollections(mockCollections);
    // Uncomment to use real API when available
    /*
    fetch('https://hadithapi.com/api/books?apiKey=$2y$10$9lLi4MnUOfDOzRhvO7gM6e3tOZmRVnJ6WsfE7aV3e7gM6e3tOZmR')
      .then(response => response.json())
      .then(data => setCollections(data.books))
      .catch(error => console.error('Error fetching Hadith collections:', error));
    */
  }, []);

  return (
    <div className="container mx-auto p-4 pt-20 md:pl-72">
      <h2 className="text-3xl font-bold text-gray-800 font-roboto mb-6 text-center">
        Hadith Collections
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {collections.map(collection => (
          <Link
            key={collection.id}
            to={`/hadith/${collection.id}`}
            className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <p className="text-lg font-semibold text-gray-800 font-roboto">
              {collection.name}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default HadithList;