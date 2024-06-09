import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Home() {
    const [audioFiles, setAudioFiles] = useState([
        {
            id: "1",
            file: "audio1.mp3",
            title:"some song name",
        },
        {
            id: "2",
            file: "audio2.mp3",
            title:"some song name",
        },
        {
            id: "3",
            file: "audio3.mp3",
            title:"some song name",
        },
        {
            id: "4",
            file: "audio4.mp3",
            title:"some song name",
        },
    ]);

    const handleUpdate = (id) => {
        // Implement update functionality here
        console.log("Updating audio with ID:", id);
    };

    const handleDelete = (id) => {
        // Implement delete functionality here
        console.log("Deleting audio with ID:", id);
    };

    return (
        <div>
            <h1>Admin Panel</h1>
            <div>
                <Link to="/addSong">
                    <button>Add new song</button>
                </Link>
            </div>
            <div>
            
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Title</th>
                        <th>Audio File Name</th>
                        <th>Audio File </th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {audioFiles.map(audio => (
                        <tr key={audio.id}>
                            <td>{audio.id}</td>
                            <td>{audio.title}</td>
                            <td>{audio.file}</td>
                            <td>
                                <audio controls>
                                    <source src={audio.file} type="audio/mpeg" />
                                </audio>
                            </td>
                            <td>
                                <button onClick={() => handleUpdate(audio.id)}>Update</button>
                                <button onClick={() => handleDelete(audio.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        </div>
    );
}

export default Home;
