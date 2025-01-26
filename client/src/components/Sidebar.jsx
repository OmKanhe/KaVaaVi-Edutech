import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, User, Book, PenTool, ChevronDown, Menu, X } from 'lucide-react';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);
  const location = useLocation();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const toggleUserDropdown = () => {
    setIsUserDropdownOpen(!isUserDropdownOpen);
  };

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        className="fixed top-4 left-4 z-50 p-2 bg-white rounded-md shadow-md lg:hidden"
        onClick={toggleSidebar}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <div className={`
        fixed top-0 left-0 h-full bg-gray-900 text-white transition-all duration-300 ease-in-out z-40
        ${isOpen ? 'w-64' : 'w-0 lg:w-64'}
      `}>
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="p-6 border-b border-gray-800">
            <h1 className="text-2xl font-bold text-[#FF7C00]">KaVaaVi EduTech.</h1>
          </div>

          {/* Navigation */}
          <nav className="flex-1 overflow-y-auto py-4">
            <ul className="space-y-2">
              {/* Home */}
              <li>
                <Link
                  to="/dashboard"
                  className={`flex items-center px-6 py-3 text-gray-300 hover:bg-gray-800 hover:text-[#FF7C00] transition-colors
                    ${location.pathname === '/dashboard' ? 'bg-gray-800 text-[#FF7C00]' : ''}`}
                >
                  <Home className="w-5 h-5 mr-3" />
                  <span>Home</span>
                </Link>
              </li>

              {/* User Dropdown */}
              <li>
                <button
                  onClick={toggleUserDropdown}
                  className={`w-full flex items-center justify-between px-6 py-3 text-gray-300 hover:bg-gray-800 hover:text-[#FF7C00] transition-colors
                    ${location.pathname.includes('/user') ? 'bg-gray-800 text-[#FF7C00]' : ''}`}
                >
                  <div className="flex items-center">
                    <User className="w-5 h-5 mr-3" />
                    <span>User</span>
                  </div>
                  <ChevronDown className={`w-4 h-4 transition-transform ${isUserDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                <ul className={`bg-gray-800 overflow-hidden transition-all duration-300 ${isUserDropdownOpen ? 'max-h-40' : 'max-h-0'}`}>
                  <li>
                    <Link
                      to="/dashboard/user/create-profile"
                      className={`flex items-center pl-14 py-3 text-gray-300 hover:bg-gray-700 hover:text-[#FF7C00] transition-colors
                        ${location.pathname === '/user/create-profile' ? 'bg-gray-700 text-[#FF7C00]' : ''}`}
                    >
                      Create Profile
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/dashboard/user/view-profile"
                      className={`flex items-center pl-14 py-3 text-gray-300 hover:bg-gray-700 hover:text-[#FF7C00] transition-colors
                        ${location.pathname === '/user/view-profile' ? 'bg-gray-700 text-[#FF7C00]' : ''}`}
                    >
                      View Profile
                    </Link>
                  </li>
                </ul>
              </li>

              {/* LMS */}
              <li>
                <Link
                  to="/dashboard/lms"
                  className={`flex items-center px-6 py-3 text-gray-300 hover:bg-gray-800 hover:text-[#FF7C00] transition-colors
                    ${location.pathname === '/lms' ? 'bg-gray-800 text-[#FF7C00]' : ''}`}
                >
                  <Book className="w-5 h-5 mr-3" />
                  <span>LMS</span>
                </Link>
              </li>

              {/* Aptitude Test */}
              <li>
                <Link
                  to="/dashboard/aptitude-test"
                  className={`flex items-center px-6 py-3 text-gray-300 hover:bg-gray-800 hover:text-[#FF7C00] transition-colors
                    ${location.pathname === '/aptitude-test' ? 'bg-gray-800 text-[#FF7C00]' : ''}`}
                >
                  <PenTool className="w-5 h-5 mr-3" />
                  <span>Aptitude Test</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={toggleSidebar}
        />
      )}
    </>
  );
};

export default Sidebar;

 


