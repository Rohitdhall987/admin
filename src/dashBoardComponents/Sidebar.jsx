import { Link } from "react-router-dom";

function Sidebar() {
  const titleClass="pl-1 hidden md:block";
    return (
      <div className="col-span-2 flex-col flex card">
        <Link className="menu-item" to="/dashboard/home"><span className="material-icons">music_note</span><p className={titleClass}>Songs</p></Link>
        <hr/>
        <Link className="menu-item" to="/dashboard/playlist"><span className="material-icons">queue_music</span><p className={titleClass}>Playlist</p></Link>
        <hr/>
        <Link className="menu-item" to="/dashboard/categories"><span className="material-icons">category</span><p className={titleClass}>Categories</p></Link>
        <hr/>
        <Link className="menu-item" to="/dashboard/albums"><span className="material-icons">album</span><p className={titleClass}>Albums</p></Link>
        <hr/>
        <Link className="menu-item" to="/dashboard/artists"><span className="material-icons">person</span><p className={titleClass}>Artists</p></Link>
        <hr/>
        <Link className="menu-item" to="/dashboard/add"><span className="material-icons">group</span><p className={titleClass}>Users</p></Link>

      </div>
    );
  }

  export default Sidebar;
