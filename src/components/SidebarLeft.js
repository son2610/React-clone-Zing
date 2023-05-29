import React from 'react'
import logo from '../assets/logo.svg'
import { sidebarMenu } from '../ultils/menu'
import { NavLink } from 'react-router-dom'

const notActiveStyle = 'py-2 px-[25px] font-bold flex gap-[12px] items-center text-[#32323D] text-[13px]';
const activeStyle = 'py-2 px-[25px] font-bold flex gap-[12px] items-center text-[#0f7070] text-[13px] bg-slate-200'; 

const SidebarLeft = () => {
  return (
    <div className='flex flex-col'>
        <div className='w-full h-[70px] py-[15px] px-[25px] flex justify-start items-center'>
            <img src={logo} alt="logo" className='w-[120px]  h-10'/>
        </div>

        <div className='flex flex-col'>
            {sidebarMenu.map( item => (
                <NavLink 
                to={item.path} 
                key={item.path}
                end={item.end}
                className={({isActive}) => isActive ? activeStyle : notActiveStyle} 
                >
                    {item.icons}
                    <span>{item.text}</span>
                </NavLink>
            ))}
        </div>
    </div>
  )
}

export default SidebarLeft