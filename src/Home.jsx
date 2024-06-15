import React from 'react';
import { Routes, Route, Link, useParams } from 'react-router-dom';

function Sidebar() {
  return (
    <div className="col-span-2 p-4 flex-col flex">
      <Link className="text-white" to="/dashboard/home">home</Link>
      <Link className="text-white" to="/dashboard/playlist">Play List</Link>
      <Link className="text-white" to="/dashboard/add">3</Link>
    </div>
  );
}

function Content() {
  const { id } = useParams();

  const renderContent = () => {
    switch (id) {
      case 'home':
        return <p className="text-white">Main Content 1</p>;
      case 'playlist':
        return <p className="text-white">Main Content 2</p>;
      case '3':
        return <p className="text-white">Main Content 3</p>;
      default:
        return <p className="text-white">Please select a menu item.</p>;
    }
  };

  return (
    <div className="col-span-10 p-4">
      {renderContent()}
    </div>
  );
}

function Dashboard() {
  return (
    <div className="h-screen flex flex-col">
      <nav className="p-4">
        <h1 className="text-xl text-white font-bold">Admin Panel</h1>
      </nav>
      <div className="grid grid-cols-12 flex-1">
        <Sidebar />
        <Routes>
          <Route path=":id" element={<Content />} />
        </Routes>
      </div>
    </div>
  );
}

export default Dashboard;
