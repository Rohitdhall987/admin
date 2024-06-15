import { Link } from "react-router-dom";

function Sidebar() {
    return (
      <div className="col-span-2 flex-col flex card">
        <Link className="menu-item" to="/dashboard/home"><span className="material-icons" >music_note</span><p className="pl-1">Songs</p></Link>
        <hr/>
        <Link className="menu-item" to="/dashboard/playlist"><span className="material-icons" >queue_music</span><p className="pl-1">Playlist</p></Link>
        <hr/>
        <Link className="menu-item" to="/dashboard/add"><span className="material-icons" >group</span><p className="pl-1">Users</p ></Link>
      </div>
    );
  }

  export default Sidebar;