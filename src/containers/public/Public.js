import React from 'react'
import { Outlet } from 'react-router-dom';

import {SidebarLeft, SidebarRight} from '../../components/';

const Public = () => {
  return (
    <div className='w-full flex overflow-y-auto'>
      <div className='w-[240px] flex-none border border-blue-500'>
        <SidebarLeft />
      </div>

      <div className='flex-auto border border-red-500'>
        {/* Khi vào url /home, thì browser sẽ render cả
          <Public> và cả <Home> */}
        <Outlet />
      </div>

      <div className='w-[330px] flex-none border border-yellow-500'>
          <SidebarRight/>
      </div>
    </div>
  )
}

export default Public;