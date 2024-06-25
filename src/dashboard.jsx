import React, { useState } from 'react';
import { Routes, Route, useParams } from 'react-router-dom';

import Sidebar from './dashBoardComponents/Sidebar';
import Songs from './dashBoardComponents/Songs';
// import Playlists from './dashBoardComponents/playlists';
// import Categories from './dashBoardComponents/categories';
import Albums from './dashBoardComponents/albums';
import Artists from './dashBoardComponents/artists';
import Users from './dashBoardComponents/users';
import AddSong from './dashBoardComponents/addSongFrom';

function Content() {

  const { id } = useParams();



  const renderContent = () => {
    switch (id) {
      case 'songs':
        return <Songs/>;
      // case 'playlist':
      //   return <Playlists/>;
      // case 'categories':
      //   return <Categories/>;
      case 'albums':
        return <Albums/>;
      case 'artists':
        return <Artists/>;
      case 'users':
        return <Users/>;
      case 'editSong':
        return <Users/>;
      case 'addSong':
        return <AddSong/>;
      default:
        return <p className="text-white">Please select a menu item.</p>;
    }
  };

  return (

      renderContent()

  );
}

function Dashboard() {
  const [showSidebar, setShowSidebar] = useState(true);

  const toggle = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <div className="h-screen flex flex-col">
      <nav className="card flex justify-between">
        <div className='flex items-center'>
          <span className="material-icons cursor-pointer" onClick={toggle}>
            menu
          </span>
          <h1 className="text-xl font-bold px-2">Admin Panel</h1>
        </div>
        <div>
          <p>user</p>
        </div>
      </nav>
      <div className="grid grid-cols-12 flex-1">
        {showSidebar ? <Sidebar /> : null}

        <div className={`${showSidebar ? "col-span-10" : "col-span-12"}  `}><Routes >
          <Route
            path="/"
            element={
              <div className="p-4 text-white">
                Welcome to the Admin Panel!
              </div>
            }
          />
          <Route path=":id" element={<Content  />} />
        </Routes> </div>

        
      </div>
    </div>
  );
}

export default Dashboard;
