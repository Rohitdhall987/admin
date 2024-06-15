import { Link } from "react-router-dom";

function Sidebar() {
    return (
      <div className="col-span-2 flex-col flex card">
        <Link className="text-white" to="/dashboard/home">home</Link>
        <Link className="text-white" to="/dashboard/playlist">Play List</Link>
        <Link className="text-white" to="/dashboard/add">3</Link>
      </div>
    );
  }

  export default Sidebar;