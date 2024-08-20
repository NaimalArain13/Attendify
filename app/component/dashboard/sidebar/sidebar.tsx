"use client"

import React from 'react';
import { usePathname } from 'next/navigation';
import { LuFileSpreadsheet } from "react-icons/lu";
import { BsClipboard2Pulse } from "react-icons/bs";
import { TbReportSearch } from "react-icons/tb";
import { PiStudentBold } from "react-icons/pi";
import { MdLogout } from "react-icons/md";

const SideBar= () => {
  const pathname = usePathname();

  const getLinkClass = (path: string) => 
    pathname === path 
      ? 'inline-flex block py-2 px-4 rounded gap-2 text-blue-600 bg-blue-50'
      : 'inline-flex block py-2 px-4 rounded gap-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600';

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="w-64 bg-white shadow-md">
          <nav className="mt-6 px-4 space-y-2 text-gray-400 text-sm">
            <p>TRACK</p>
            <div className={getLinkClass('/dashboard/attendance')}>
              <LuFileSpreadsheet className='text-2xl'/>
              <a href="/dashboard/attendance" className="text-lg"> Attendance Sheet</a>
            </div>
            <p className='text-gray-400 text-sm'>ANALYZE</p>
            <div className={getLinkClass('/dashboard')}>
              <BsClipboard2Pulse className='text-2xl'/>
              <a href="/dashboard" className="text-lg"> Dashboard</a>
            </div>
            <div className={getLinkClass('/dashboard/report')}>
              <TbReportSearch className='text-2xl'/>
              <a href="/dashboard/report" className="text-lg">Report</a>
            </div>
            <p className='text-gray-400 text-sm'>MANAGE</p>
            <div className={getLinkClass('/dashboard/student')}>
              <PiStudentBold className='text-2xl'/>
              <a href="/dashboard/student" className="text-lg">Student</a>
            </div>
            <div className={getLinkClass('/')}>
              <MdLogout className='text-2xl'/>
              <a href="/" className="text-lg">Logout</a>
            </div>
          </nav>
        </aside>
      </div>
    </div>
  );
};

export default SideBar;


