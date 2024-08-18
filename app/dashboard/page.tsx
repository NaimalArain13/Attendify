import React from 'react';
import { LuFileSpreadsheet } from "react-icons/lu";
import { BsClipboard2Pulse } from "react-icons/bs";
import { TbReportSearch } from "react-icons/tb";
import { PiStudentBold } from "react-icons/pi";
import { MdLogout } from "react-icons/md";
import NavBar from '../component/navbar1';

const Dashboard = () => {
  return (
    <div className="flex flex-col h-screen bg-gray-100">

        {/* NavBar */}
        <div className="w-full">
            <NavBar prop={{prop:true}} />
        </div>
    
        <div className="flex flex-1">

        {/* Sidebar */}
         <aside className="w-64 bg-white shadow-md">
            <nav className="mt-6 px-4 space-y-2 text-gray-400 text-sm">
                <p>TRACK</p>
            <div className='inline-flex gap-2 block py-2 px-4 rounded bg-blue-50 text-blue-600'><LuFileSpreadsheet className='text-2xl'/><a href="#" className="text-lg"> Attendance Sheet</a></div>
            <p className='text-gray-400 text-sm'>ANALYZE</p>
            <div className="inline-flex block py-2 px-4 rounded gap-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600"><BsClipboard2Pulse className='text-2xl'/><a href="#" className="text-lg" > Dashboard</a></div>
            <div className="inline-flex block py-2 px-4 rounded gap-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600"><TbReportSearch className='text-2xl'/><a href="#" className="text-lg">Report</a></div>
            <p className=' text-gray-400 text-sm'>MANAGE</p>
            <div className="inline-flex block py-2 px-4 rounded gap-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600"><PiStudentBold className='text-2xl'/><a href="#" className="text-lg">Student</a></div>
            <div className="inline-flex block py-2 px-4 rounded gap-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600"><MdLogout className='text-2xl'/><a href="#" className="text-lg">Logout</a></div>
            </nav>
         </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
            <div className="flex items-center justify-between pb-6 border-b">
            <div><h2 className="text-2xl font-semibold text-blue-600">Attendance</h2>
             <p className="text-sm text-gray-500">Track / Attendance</p></div>
            </div>

            {/* Filters */}
            <div className="mt-6 flex space-x-8 mx-8">
            <div>
                <label className="block text-gray-600">Subject</label>
                <select className="w-full px-2 py-2 border rounded-md">
                 <option>Advance Java</option>
                </select>
            </div>
            <div>
                <label className="block text-gray-600">Section</label>
                <select className="w-full px-2 py-2 border rounded-md">
                 <option>A</option>
                </select>
            </div>
            <div>
                <label className="block text-gray-600">Date</label>
                <input type="date" className="w-full px-2 py-2 border rounded-md" defaultValue="2024-08-19"/>
            </div>
            <div className="flex items-end">
                <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">Generate Sheet</button>
            </div>
            </div>
        </main>
        </div>
    </div>
  );
};

export default Dashboard;
