import React from 'react';


function BannerImages() {
  const subjects = [
    {
      title: 'Physics',
      image: "image7.jpg",
    },
    {
      title: 'Chemistry',
      image: "image8.jpg",
    },
    {
      title: 'Biology',
      image: "image10.jpeg",
    },
  ];

  return (
    <div className='bg-white w-full min-h-screen p-10'>
     
      <div className='text-center mb-10'>
        <p className='text-2xl font-semibold text-gray-800'>
          What do you want to practice today?
        </p>
      </div>

    
      <div className='flex justify-center gap-20 '>
        {subjects.map((subject, index) => (
          <div
            key={index}
            className='w-60 h-40 rounded-xl shadow-md border border-gray-200 overflow-hidden hover:shadow-lg transition'
          >
            <img
              src={subject.image}
              alt={subject.title}
              className='w-full h-full object-cover'
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default BannerImages;
