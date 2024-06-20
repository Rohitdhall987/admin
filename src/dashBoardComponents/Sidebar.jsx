import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Sidebar() {
  const [selectedItem, setSelectedItem] = useState("/dashboard/songs"); // Default selected item
  const location = useLocation();

  // Function to determine if a link is selected
  const isSelected = (path) => location.pathname === path;

  const titleClass = "pl-1 hidden md:block";

  return (
    <div className="col-span-2 flex-col flex card">
      <Link
        className={`menu-item ${isSelected('/dashboard/songs') ? 'selected' : ''}`}
        to="/dashboard/songs"
        onClick={() => setSelectedItem('/dashboard/songs')}
      >
        <span className="material-icons">music_note</span>
        <p className={titleClass}>Songs</p>
      </Link>
      {isSelected('/dashboard/songs') && <hr />}

      <Link
        className={`menu-item ${isSelected('/dashboard/playlist') ? 'selected' : ''}`}
        to="/dashboard/playlist"
        onClick={() => setSelectedItem('/dashboard/playlist')}
      >
        <span className="material-icons">queue_music</span>
        <p className={titleClass}>Playlist</p>
      </Link>
      {isSelected('/dashboard/playlist') && <hr />}

      <Link
        className={`menu-item ${isSelected('/dashboard/categories') ? 'selected' : ''}`}
        to="/dashboard/categories"
        onClick={() => setSelectedItem('/dashboard/categories')}
      >
        <span className="material-icons">category</span>
        <p className={titleClass}>Categories</p>
      </Link>
      {isSelected('/dashboard/categories') && <hr />}

      <Link
        className={`menu-item ${isSelected('/dashboard/albums') ? 'selected' : ''}`}
        to="/dashboard/albums"
        onClick={() => setSelectedItem('/dashboard/albums')}
      >
        <span className="material-icons">album</span>
        <p className={titleClass}>Albums</p>
      </Link>
      {isSelected('/dashboard/albums') && <hr />}

      <Link
        className={`menu-item ${isSelected('/dashboard/artists') ? 'selected' : ''}`}
        to="/dashboard/artists"
        onClick={() => setSelectedItem('/dashboard/artists')}
      >
        <span className="material-icons">person</span>
        <p className={titleClass}>Artists</p>
      </Link>
      {isSelected('/dashboard/artists') && <hr />}

      <Link
        className={`menu-item ${isSelected('/dashboard/add') ? 'selected' : ''}`}
        to="/dashboard/add"
        onClick={() => setSelectedItem('/dashboard/add')}
      >
        <span className="material-icons">group</span>
        <p className={titleClass}>Users</p>
      </Link>
      {isSelected('/dashboard/add') && <hr />}
    </div>
  );
}

export default Sidebar;
