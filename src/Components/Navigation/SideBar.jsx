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
      path:'/Library'
    },
    {
      icon:<FaChartPie />,
      title:"Reports",
      path:"/Reports"
    },
    {
      icon:<PiSparkle />,
      title:"Ask Ai",
      path:"AskAi"
    },
  ]
  return (
    <div className='w-60 h-lvh overflow-scroll  border-r border-gray-300  flex justify-center py-12'>
            <div className='flex flex-col gap-10 items-center '>
      
        

        <button className='p-3 bg-purple-300 w-40 h-fit flex items-center justify-center rounded-xl  text-purple-700 text-lg gap-2'><span><FiPlus /></span>create</button>

        <div className='flex flex-col items-center justify-center gap-10'>
                    {Pages.map((val, i) => {
                        return (
                            <div key={i}>
                                <div className='flex gap-2 items-center justify-center '>
                                    <div className='text-xl text-purple-700'>{val.icon}</div>
                                    <Link
                                        to={val.path}
                                        className='text-lg  text-purple-700'
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
