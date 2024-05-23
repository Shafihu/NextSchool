'use client';

import Custom404 from '@/components/Custom404';
import React, { useState, useEffect } from 'react';
import { BiSolidSearchAlt2 } from "react-icons/bi";
import mockTeachersData from '@/utils/mockTeachersData';

const page = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userInfoString = sessionStorage.getItem('userInfo');
    if (userInfoString) {
      const user = JSON.parse(userInfoString);
      setUser(user);
    }
  }, []); 

  if (!user) {
    return <Custom404 />
  }

  const data = mockTeachersData();

  return (
    <div className='flex flex-col px-[25px] sm:p-[30px] w-full flex-1 h-screen overflow-y-auto pt-[70px] lg:pt-8 relative gap-10 '>
      <div className='flex gap-5'>
        <button className='bg-indigo-600 text-white font-semibold rounded-lg py-2 px-4'>Add Teacher</button>
        <button className='font-semibold text-indigo-600'>Export CSV</button>
      </div>

      <div className="relative rounded-lg">
          <input className="rounded-md border px-4 py-2 pl-10 text-indigo-600  focus:outline-none focus:border-indigo-500 w-full" placeholder="Search for teacher by name or email" />
          <BiSolidSearchAlt2 className="absolute left-[10px] top-[50%] -translate-y-[50%] text-indigo-600 text-[18px]" />
      </div>

      <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-semibold text-gray-800 uppercase tracking-wider">Name</th>
            <th className="px-6 py-3 text-left text-xs font-semibold text-gray-800 uppercase tracking-wider">Subject</th>
            <th className="px-6 py-3 text-left text-xs font-semibold text-gray-800 uppercase tracking-wider">Class</th>
            <th className="px-6 py-3 text-left text-xs font-semibold text-gray-800 uppercase tracking-wider">Email Address</th>
            <th className="px-6 py-3 text-left text-xs font-semibold text-gray-800 uppercase tracking-wider">Gender</th>
            <th className="px-6 py-3 text-left text-xs font-semibold text-gray-800 uppercase tracking-wider">Salary</th>
            <th className="px-6 py-3 text-left text-xs font-semibold text-gray-800 uppercase tracking-wider">Phone Number</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data.map((row, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-violet-50'}>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-indigo-600">{row.name}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-indigo-500">{row.subject}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-indigo-500">{row.class}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-indigo-500">{row.email}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-indigo-500">{row.gender}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-indigo-500">{row.salary}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-indigo-500">{row.phoneNumber}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  )
}

export default page