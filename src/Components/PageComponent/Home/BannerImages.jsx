import React from 'react';
import { SiTestcafe } from "react-icons/si";
import { IoMdPaper } from "react-icons/io";
import { BsGraphUpArrow } from "react-icons/bs";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


import image1 from '../../../assets/image7.jpg';
import image2 from '../../../assets/image8.jpg';
import image3 from '../../../assets/image10.jpeg';

function BannerImages() {
  const subjects = [
    { title: 'Physics', image: image1 },
    { title: 'Chemistry', image: image2 },
    { title: 'Biology', image: image3 },
    { title: 'Biology', image: image3 },
    { title: 'Biology', image: image3 },
  ];

  
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 3
    },
    desktop: {
      breakpoint: { max: 1024, min: 768 },
      items: 2
    },
    tablet: {
      breakpoint: { max: 768, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <div className='bg-white w-full min-h-screen p-10 flex flex-col gap-4'>
      <div className='font-medium'>Hi ASH,</div>
      <div className='text-xl font-bold'>Ready to crack your test?</div>

      <div className='flex gap-10 mt-4 flex-wrap'>
        <div className='grid grid-cols-3 gap-10 items-center justify-center flex-grow'>
          <div className='shadow-xl cursor-pointer transform transition-transform duration-300 hover:scale-110 rounded-2xl p-3 flex flex-col items-center justify-center gap-3 font-medium'>
            <div className='text-4xl font-bold'><SiTestcafe /></div>
            <div className='w-1/2 text-center'>Total Tests Attempted</div>
            <div className='underline'>12</div>
          </div>

          <div className='shadow-xl cursor-pointer transform transition-transform duration-300 hover:scale-110  rounded-2xl p-3 h-full flex flex-col items-center justify-center gap-3 text-lg font-medium'>
            <div className='text-4xl font-bold'><IoMdPaper /></div>
            <div>Last Score</div>
            <div className='underline'>55%</div>
          </div>

          <div className='shadow-xl cursor-pointer transform transition-transform duration-300 hover:scale-110 rounded-2xl p-3 h-full flex flex-col items-center justify-center gap-3 text-lg font-medium'>
            <div className='text-4xl font-bold'><BsGraphUpArrow /></div>
            <div>Average Score</div>
            <div className='underline'>60%</div>
          </div>
        </div>

        <div className='rounded-2xl p-3 bg-purple-200 border-purple-700 flex flex-col items-center justify-center gap-3 w-96 text-center'>
          <div className='text-lg font-medium'>Upload PDF documents to generate flashcards and MCQs</div>
          <button className='w-fit h-fit px-4 py-2 cursor-pointer border-purple-700 border-2 rounded-xl bg-white'>
            <span className='text-lg font-bold mr-1'>+</span> Upload
          </button>
        </div>
      </div>

      <div className='text-center m-10'>
        <p className='text-2xl font-semibold text-gray-800'>
          What do you want to practice today?
        </p>
      </div>

      <div className='px-10'>
        <Carousel
          responsive={responsive}
          autoPlay
          autoPlaySpeed={3000}
          infinite
          arrows={true}
          showDots={false}
          
        >
          {subjects.map((val, index) => (
            <div
              key={index}
              className='w-72 h-64 rounded-xl shadow-md border border-gray-200 overflow-hidden hover:shadow-lg transition'
            >
              <img
                src={val.image}
                alt={val.title}
                className='w-full h-full object-cover'
              />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default BannerImages;
