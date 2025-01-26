import React from 'react';
import Sidebar from '../components/Sidebar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="min-h-screen bg-[#FFFAF5] flex">
      <Sidebar />
      <div className="flex-1 flex items-center justify-center lg:ml-28 p-6">
        <main className="w-full max-w-8xl m-0">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
