import { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { QuranContext } from '../QuranContext';

function SurahDetail() {
  const { number } = useParams();
  const { playAudio, stopAudio, playingAudio } = useContext(QuranContext);
  const [ayahs, setAyahs] = useState([]);
  const [surahInfo, setSurahInfo] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (number) {
      setLoading(true);
      Promise.all([
        fetch(`http://api.alquran.cloud/v1/surah/${number}/ar`).then(res => res.json()),
        fetch(`http://api.alquran.cloud/v1/surah/${number}`).then(res => res.json()),
      ])
        .then(([ayahData, infoData]) => {
          setAyahs(ayahData.data.ayahs);
          setSurahInfo(infoData.data);
          setLoading(false);
        })
        .catch(error => {
          console.error('Error fetching surah data:', error);
          setLoading(false);
        });
    }
  }, [number]);

  const playTilawah = (surahNumber, ayahNumber) => {
    const audioUrl = `https://cdn.alquran.cloud/media/audio/ayah/ar.alafasy/${surahNumber}:${ayahNumber}`;
    playAudio(audioUrl, 'tilawah');
  };

  if (loading) {
    return <div className="text-center p-4 pt-20">Loading...</div>;
  }

  if (!surahInfo) {
    return <div className="text-center p-4 pt-20">Select a Surah</div>;
  }

  return (
    <div className="container mx-auto p-4 pt-20 md:pl-72">
      <h2 className="text-3xl font-bold text-gray-800 font-roboto mb-4 text-center">
        {surahInfo.englishName} ({surahInfo.name})
      </h2>
      <p className="text-center text-gray-600 mb-6">
        {surahInfo.revelationType} - {surahInfo.numberOfAyahs} Ayahs
      </p>
      {ayahs.map(ayah => (
        <div
          key={ayah.numberInSurah}
          className="bg-white p-6 mb-4 rounded-lg shadow-md"
        >
          <div className="flex justify-between items-center mb-2">
            <span className="text-green-600 font-bold font-roboto">
              Ayah {ayah.numberInSurah}
            </span>
            <div>
              <button
                onClick={() => playTilawah(number, ayah.numberInSurah)}
                className="bg-green-500 hover:bg-green-600 text-white font-roboto py-1 px-3 rounded mr-2"
              >
                Play
              </button>
              {playingAudio && (
                <button
                  onClick={stopAudio}
                  className="bg-red-500 hover:bg-red-600 text-white font-roboto py-1 px-3 rounded"
                >
                  Stop
                </button>
              )}
            </div>
          </div>
          <p className="text-xl text-right font-amiri leading-loose">{ayah.text}</p>
        </div>
      ))}
    </div>
  );
}

export default SurahDetail;