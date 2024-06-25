import { useState } from "react";

function Albums(){
    const [albums, setAlbums] = useState(null);

    useEffect(() => {
        fetchData();
    }, []);

    // Function to fetch albums from API
    const fetchData = async () => {
        fetch(
            '/api/albums/', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem("token")}`,
                },
            }
        ).then(response => response.json())
            .then(res => {
                console.log(res);
                setAlbums(res);
            });
    }




    return (
        <div className="card ">
            <p className="pb-1 text-lg font-semibold">albums</p>
            <hr className="mb-4" />
            <div className="flex justify-end">
                <Link className="orange-gradient px-4 py-2 m-2 rounded" to="/dashboard/addalbum">Add</Link>
            </div>
            {
                albums == null ?
                    <center className="text-gray-500">
                        No album Added
                    </center>
                    :
                    <div className="card-main overflow-auto">
                        <div className="grid grid-cols-6 gap-2 mb-4" >
                            <p className="font-bold">ID</p>
                            <p className="font-bold">Thumbnail</p>
                            <p className="font-bold">Title</p>
                            <p className="font-bold">Singer</p>
                            <p className="font-bold">Audio</p>
                            <p className="font-bold">Actions</p>
                        </div>
                        {
                            albums.map(album => (
                                <div key={album._id} className="grid grid-cols-6 gap-2 items-center mb-2">
                                    <p className="truncate">{album._id}</p>
                                    <img className="w-12 h-12 object-cover" src={"http://localhost:5000" + album.thumbnailPath} alt="Thumbnail" />
                                    <p className="truncate">{album.title}</p>
                                    <p className="truncate">{album.singer}</p>
                                    <audio className="w-full" src={"http://localhost:5000" + album.filePath} controls />
                                    <div className="flex space-x-2">
                                        <Link className="bg-blue-500 text-white px-2 py-1 rounded" to={"/dashboard/editalbum?id="+song._id}>Edit</Link>
                                        <button className="bg-red-500 text-white px-2 py-1 rounded">Delete</button>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
            }
        </div>
    );
}

export default Albums;