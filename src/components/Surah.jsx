import React from 'react';
import makkah_pic from '../assets/makkah.png';
import Bismillah from '../assets/Bismillah.svg';

const Surah = ({ name, ayats, translation }) => {
    // Ensure 'name' is not null
    name = name || {};

    return (
        <div className="surah bg-white rounded-lg lg:p-4">
            <div className="surah-header flex justify-between items-center">
                <img src={makkah_pic} alt="" className='makkah p-5 ' />
                <div className="surah-Name-header flex flex-col gap-4 items-center">
                    <span className='name text-2xl'>{name.surahName}</span>
                    <span className='revealed text-xs'>Ayah - {name.totalAyah}, {name.revelationPlace}</span>
                </div>
                <img src={Bismillah} alt="" className='w-52' />
            </div>

            <div className="surah-content  lg:p-5 ">
                {ayats.map((verse, index) => (
                    <div key={index + 1} className="verses flex flex-col gap-5">
                        <div className="verse-words justify-end items-end flex flex-col leading-loose">
                        .{verse} 
                        </div>
                        {translation[index] && (
                            <div className="translation flex-col flex gap-5">
                                <span>Translation</span>
                                <span>{translation[index]}</span>
                            </div>
                        )}

                        <hr />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Surah;