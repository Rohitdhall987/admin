import { Link, useLocation } from "react-router-dom";

function Sidebar() {
  const location = useLocation();

  // Define sidebar items
  const sidebarItems = [
    { path: "/dashboard/songs", icon: "music_note", label: "Songs" },
    { path: "/dashboard/playlist", icon: "queue_music", label: "Playlist" },
    { path: "/dashboard/categories", icon: "category", label: "Categories" },
    { path: "/dashboard/albums", icon: "album", label: "Albums" },
    { path: "/dashboard/artists", icon: "person", label: "Artists" },
    { path: "/dashboard/users", icon: "group", label: "Users" },
  ];

  // Function to determine if a link is selected
  const isSelected = (path) => location.pathname === path;

  const titleClass = "pl-1 hidden md:block";

  return (
    <div className="col-span-2 flex-col flex card">
      {sidebarItems.map((item) => (
        <div key={item.path}>
          <Link
            className={`menu-item ${isSelected(item.path) ? 'selected' : ''}`}
            to={item.path}
          >
            <span className="material-icons">{item.icon}</span>
            <p className={titleClass}>{item.label}</p>
          </Link>
          {isSelected(item.path) && <hr className="animated" />}
        </div>
      ))}
    </div>
  );
}

export default Sidebar;
