import React from 'react'
import { Link } from 'react-router-dom';

import { IoHome } from "react-icons/io5";
import { FaRegFolderOpen } from "react-icons/fa";
import { FaChartPie } from "react-icons/fa";
import { PiSparkle } from "react-icons/pi";
import { FiPlus } from "react-icons/fi";


function SideBar() {
  const Pages = [
    {
      icon:<IoHome />,
      title:"Home",
      path:'/'
    },
    {
      icon:<FaRegFolderOpen />,
      title:"Library",
      path:'/StudentLibrary'
    },
    {
      icon:<FaChartPie />,
      title:"Reports",
      path:"/Reports"
    },
    {
      icon:<PiSparkle />,
      title:"Ask Ai",
      path:"/AskAi"
    },
  ]
  return (
    <div className='h-lvh overflow-scroll scroll border-r bg-purple-700 border-gray-300  flex justify-center py-12'>
            <div className='flex flex-col gap-10 items-center '>
              <div>logo</div>
      
        

        <button className='p-3 bg-white w-40 h-fit flex items-center justify-center rounded-xl  text-purple-500 text-lg gap-2'><span><FiPlus /></span>create</button>

        <div className='flex flex-col items-center justify-center gap-10'>
                    {Pages.map((val, i) => {
                        return (
                            <div key={i}>
                                <div className='flex gap-2 items-center justify-center '>
                                    <div className='text-xl text-white'>{val.icon}</div>
                                    <Link
                                        to={val.path}
                                        className='text-lg  text-white'
                                    >
                                        {val.title}
                                    </Link>
                                </div>
                            </div>
                        );
                    })}
                </div>
          </div>
      
    </div>
  )
}

export default SideBar
