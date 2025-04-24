import { useContext } from 'react';
import { QuranContext } from '../QuranContext';

function Duas() {
  const { playAudio, stopAudio, playingAudio } = useContext(QuranContext);

  // Static list of Duas (replace audio URLs with actual files if available)
  const duas = [
    {
      id: 1,
      name: 'Dua for Morning',
      arabic: 'اللَّهُمَّ بِكَ أَصْبَحْنَا وَبِكَ أَمْسَيْنَا',
      transliteration: 'Allahumma bika asbahna wa bika amsayna',
      translation: 'O Allah, by You we enter the morning and by You we enter the evening.',
      audioUrl: 'https://example.com/dua-morning.mp3', // Placeholder
    },
    {
      id: 2,
      name: 'Dua for Protection',
      arabic: 'أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّاتِ مِنْ شَرِّ مَا خَلَقَ',
      transliteration: 'A’udhu bi kalimatillahi tammati min sharri ma khalaq',
      translation: 'I seek refuge in the perfect words of Allah from the evil of what He has created.',
      audioUrl: 'https://example.com/dua-protection.mp3', // Placeholder
    },
  ];

  return (
    <div className="container mx-auto p-4 pt-20 md:pl-72">
      <h2 className="text-3xl font-bold text-gray-800 font-roboto mb-6 text-center">
        Supplications (Duas)
      </h2>
      <div className="space-y-4">
        {duas.map(dua => (
          <div key={dua.id} className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 font-roboto mb-2">
              {dua.name}
            </h3>
            <p className="text-xl text-right font-amiri leading-loose mb-2">{dua.arabic}</p>
            <p className="text-lg text-gray-700 font-roboto mb-2">{dua.transliteration}</p>
            <p className="text-gray-600 font-roboto mb-4">{dua.translation}</p>
            <div>
              <button
                onClick={() => playAudio(dua.audioUrl, 'dua')}
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
        ))}
      </div>
    </div>
  );
}

export default Duas;