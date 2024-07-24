import { useEffect, useState } from 'react';
import './App.css';
import SurahSidebar from './components/SurahSidebar';
import Surah from './components/Surah';

function App() {
  const [ayats, setAyats] = useState([]);
  const [name, setName] = useState({})
  const [translation, setTranslation] = useState([])

  const getSurah = async (index) => {
    const url = `https://quranapi.pages.dev/api/${index}.json`;
    let response = await fetch(url);
    let result = await response.json();
    setAyats(result.arabic1);
    setName(result);
    setTranslation(result.english);
    console.log(result.english)
  };

  useEffect(() => {
    getSurah(1);
  }, []);

  return (
    <>
      <div>
          <div className="container w-full flex  gap-8">
            <SurahSidebar getSurah={getSurah} name={name}/>
            <Surah name={name} ayats={ayats} translation={translation}/>
          </div>
      </div>
    </>
  );
}

export default App;