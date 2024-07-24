import React, { useEffect, useState } from 'react';
import search_icon from '../assets/search.png';

const SurahSidebar = ({ getSurah }) => {
    const [name, setName] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const surahName = async () => {
        const surahUrl = "https://quranapi.pages.dev/api/surah.json";
        const surahResponse = await fetch(surahUrl);
        const result = await surahResponse.json();
        setName(result);
    };

    useEffect(() => {
        surahName();
    }, []);

    const filteredSurahs = name.filter(item =>
        item.surahName.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className={`sidebar bg-white rounded-lg p-4 ${isSidebarOpen ? 'open' : ''}`}>
            <div className="hamburger-menu" onClick={toggleSidebar}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div className="searchbar flex p-4 gap-5 rounded-md">
                <img className="search-icon w-5 h-5" src={search_icon} alt="" />
                <input
                    type="text"
                    className='search-input bg-transparent px-2 placeholder-gray-500 font-normal'
                    placeholder='Search by surah'
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
            </div>
            <div className="category-section px-2 py-5">
                {filteredSurahs.map((item, index) => (
                    <div className='link' key={index + 1} onClick={() => getSurah(name.indexOf(item) + 1)}>
                        <div className="surah-card flex justify-between items-center rounded-lg">
                            <div className="English-surah-name flex gap-7 items-center">
                                <div className="number">{index + 1}</div>
                                <div className="surahName flex flex-col gap-2">
                                    <span className='name text-base'>{item.surahName}</span>
                                    <span className='English-meaning text-opacity-30 text-black text-xs'>{item.surahNameTranslation}</span>
                                </div>
                            </div>
                            <div className="-Arabic-surah-name">
                                <span className="arabicName">{item.surahNameArabic}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SurahSidebar;