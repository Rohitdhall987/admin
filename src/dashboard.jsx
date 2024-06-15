import React from 'react';
import { Routes, Route, useParams } from 'react-router-dom';

import Sidebar from './dashBoardComponents/Sidebar';





function Content() {
  const { id } = useParams();

  const renderContent = () => {
    switch (id) {
      case 'home':
        return <p className="card">Main Content 1</p>;
      case 'playlist':
        return <p className="card">Main Content 2</p>;
      case '3':
        return <p className="card">Main Content 3</p>;
      default:
        return <p className="text-white">Please select a menu item.</p>;
    }
  };

  return (
    <div className="col-span-10 ">
      {renderContent()}
    </div>
  );
}

function Dashboard() {
  return (
    <div className="h-screen flex flex-col">
      <nav className="card ">
      <div className='flex items-center'>
        <span className="material-icons" >
          menu
        </span>
        <h1 className="text-xl font-bold px-2">Admin Panel</h1>
      </div>
      </nav>
      <div className="grid grid-cols-12 flex-1">
        <Sidebar />
        <Routes>
          <Route path=":id" element={<Content />} />
          <Route path="/" element={<div className="col-span-10 p-4 text-white">Welcome to the Admin Panel!</div>} />
        </Routes>
      </div>
    </div>
  );
}

export default Dashboard;
