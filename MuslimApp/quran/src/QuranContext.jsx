import { createContext, useState, useCallback } from 'react';

export const QuranContext = createContext();

export const QuranProvider = ({ children }) => {
  const [playingAyah, setPlayingAyah] = useState(null);

  const playTilawah = useCallback((surahNumber, ayahNumber, qari = 'ar.alafasy') => {
    if (playingAyah) {
      playingAyah.pause();
      setPlayingAyah(null);
    }
    const audioUrl = `https://cdn.alquran.cloud/media/audio/ayah/${qari}/${surahNumber}:${ayahNumber}`;
    const audio = new Audio(audioUrl);
    audio.play().catch(error => console.error('Error playing audio:', error));
    setPlayingAyah(audio);
  }, [playingAyah]);

  const stopTilawah = useCallback(() => {
    if (playingAyah) {
      playingAyah.pause();
      setPlayingAyah(null);
    }
  }, [playingAyah]);

  return (
    <QuranContext.Provider value={{ playingAyah, playTilawah, stopTilawah }}>
      {children}
    </QuranContext.Provider>
  );
};