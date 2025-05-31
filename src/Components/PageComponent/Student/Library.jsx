import React, { useState } from 'react';
import image1 from '../../../assets/library1.png';
import image2 from '../../../assets/library2.png';
import image3 from '../../../assets/library3.png';

function Library() {
  const [selected, setSelected] = useState('practice');

  return (
    <div className='bg-white w-full min-h-screen p-10 flex flex-col gap-6'>
      <div className='text-2xl font-bold'>My Library</div>
      
      <div className='grid grid-cols-3 gap-8'>
        <div
          className={`cursor-pointer font-semibold ${selected === 'practice' ? 'text-purple-600' : 'text-gray-800'}`}
          onClick={() => setSelected('practice')}
        >
          Practice Tests
        </div>

        <div
          className={`cursor-pointer font-semibold ${selected === 'flashcards' ? 'text-purple-600' : 'text-gray-800'}`}
          onClick={() => setSelected('flashcards')}
        >
          Flashcards sets
        </div>

        <div
          className={`cursor-pointer font-semibold ${selected === 'folders' ? 'text-purple-600' : 'text-gray-800'}`}
          onClick={() => setSelected('folders')}
        >
          Folders
        </div>
      </div>

      <div className='mt-8'>
        {selected === 'practice' && (
          <div className='flex flex-col items-center gap-2'>
            <img src={image1} alt="Practice Tests" className='w-96 h-auto mx-auto' />
            <div className='text-gray-700 text-center'>You have not practiced any sets yet.</div>
            <div className='text-gray-500 text-center'>Sets you chose to study will be displayed here.</div>
          </div>
        )}

        {selected === 'flashcards' && (
          <div className='flex flex-col items-center gap-2'>
            <img src={image2} alt="Flashcards sets" className='w-72 h-auto mx-auto object-cover' />
            <div className='text-gray-700 text-center'>You have not generated any flashcards yet.</div>
            <div className='text-gray-500 text-center'>Flashcards you generate will be displayed here.</div>
          </div>
        )}

        {selected === 'folders' && (
          <div className='flex flex-col items-center gap-2'>
            <img src={image3} alt="Folders" className='w-96 h-auto mx-auto' />
            <div className='text-gray-700 text-center'>You have not saved any document yet.</div>
            <div className='text-gray-500 text-center'>Saved PDFs and documents will be displayed here.</div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Library;
