import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Songs() {
    const [songs, setSongs] = useState(null);

    useEffect(() => {
        fetchData();
    }, []);

    // Function to fetch songs from API
    const fetchData = async () => {
        fetch(
            '/api/songs/', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem("token")}`,
                },
            }
        ).then(response => response.json())
            .then(res => {
                console.log(res);
                setSongs(res);
            });
    }


    const deleteSong=async(id)=>{
        try{
            fetch(
                '/api/songs/', {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${localStorage.getItem("token")}`,
                    },
                    body:{
                        "id":id,
                    }
                }
            );
        }catch(e){
            console.log("err===="+e);
        }
    }



    return (
        <div className="card ">
            <p className="pb-1 text-lg font-semibold">Songs</p>
            <hr className="mb-4" />
            <div className="flex justify-end">
                <Link className="orange-gradient px-4 py-2 m-2 rounded" to="/dashboard/addSong">Add</Link>
            </div>
            {
                songs == null ?
                    <center className="text-gray-500">
                        No Song Added
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
                            songs.map(song => (
                                <div key={song._id} className="grid grid-cols-6 gap-2 items-center mb-2">
                                    <p className="truncate">{song._id}</p>
                                    <img className="w-12 h-12 object-cover" src={"http://localhost:5000" + song.thumbnailPath} alt="Thumbnail" />
                                    <p className="truncate">{song.title}</p>
                                    <p className="truncate">{song.singer}</p>
                                    <audio className="w-full" src={"http://localhost:5000" + song.filePath} controls />
                                    <div className="flex space-x-2">
                                        <Link className="bg-blue-500 text-white px-2 py-1 rounded" to={"/dashboard/editSong?id="+song._id}>Edit</Link>
                                        <button className="bg-red-500 text-white px-2 py-1 rounded" onClick={(_)=>deleteSong(song._id)}>Delete</button>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
            }
        </div>
    );
}

export default Songs;
