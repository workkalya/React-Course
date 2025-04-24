import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function HadithDetail() {
  const { collection } = useParams();
  const [hadiths, setHadiths] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (collection) {
      setLoading(true);
      // Mock Hadith data (replace with actual API call if available)
      const mockHadiths = [
        {
          id: 1,
          text: 'Actions are judged by intentions...',
          narrator: 'Umar ibn al-Khattab',
          reference: `${collection}:1`,
        },
        {
          id: 2,
          text: 'The best of you are those who learn the Quran and teach it...',
          narrator: 'Uthman ibn Affan',
          reference: `${collection}:2`,
        },
      ];
      setHadiths(mockHadiths);
      setLoading(false);
      // Uncomment to use real API when available
      /*
      fetch(`https://hadithapi.com/api/hadiths?apiKey=$2y$10$9lLi4MnUOfDOzRhvO7gM6e3tOZmRVnJ6WsfE7aV3e7gM6e3tOZmR&book=${collection}`)
        .then(response => response.json())
        .then(data => {
          setHadiths(data.hadiths);
          setLoading(false);
        })
        .catch(error => {
          console.error('Error fetching Hadiths:', error);
          setLoading(false);
        });
      */
    }
  }, [collection]);

  if (loading) {
    return <div className="text-center p-4 pt-20">Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4 pt-20 md:pl-72">
      <h2 className="text-3xl font-bold text-gray-800 font-roboto mb-6 text-center">
        Hadiths from {collection.replace('-', ' ')}
      </h2>
      <div className="space-y-4">
        {hadiths.map(hadith => (
          <div key={hadith.id} className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-lg text-gray-800 font-roboto">{hadith.text}</p>
            <p className="text-sm text-gray-600 mt-2">
              Narrated by: {hadith.narrator}
            </p>
            <p className="text-sm text-gray-600">Reference: {hadith.reference}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HadithDetail;