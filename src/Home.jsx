import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Home() {
//     const [songData, setSongData] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     const fetchSongs = async () => {
//         try {
//             const response = await fetch('/api/songs/getSongs', {
//                 method: 'POST',
//                 headers: {
//                     "Authorization": `Bearer ${localStorage.getItem("token")}`,
//                     "Content-Type": "application/json",
//                 }
//             });

//             if (response.ok) {
//                 const data = await response.json();
//                 setSongData(data);
//                 console.log(data);
//             } else {
//                 const errorData = await response.json();
//                 console.error('Error:', errorData);
//                 setError('Failed to fetch songs. Please try again later.');
//             }
//         } catch (error) {
//             console.error('Fetch error:', error);
//             setError('An unexpected error occurred. Please try again later.');
//         } finally {
//             setLoading(false);
//         }
//     };

//     useEffect(() => {
//         fetchSongs();
//     }, []);


//     const deleteSong=async(_id)=>{
//         try {
//             const response = await fetch('/api/songs/deleteById', {
//                 method: 'POST',
//                 body: JSON.stringify({ id: _id }),
//                 headers: {
//                     "Authorization": `Bearer ${localStorage.getItem("token")}`,
//                     "Content-Type": "application/json",
//                 }
//             });

//             if (response.ok) {
//                 const data = await response.json();
//                 fetchSongs();
//                 console.log(data);
//             } else {
//                 const errorData = await response.json();
//                 console.error('Error:', errorData);
//                 setError('Failed to fetch songs. Please try again later.');
//             }
//         } catch (error) {
//             console.error('Fetch error:', error);
//             setError('An unexpected error occurred. Please try again later.');
//     }
// }

//     if (loading) return <p>Loading...</p>;
//     if (error) return <p>{error}</p>;

    return (
        // <div>
        //     <h1>Admin Panel</h1>
        //     <div>
        //         <Link to="/addSong">
        //             <button>Add new song</button>
        //         </Link>
        //     </div>
        //     <div>
        //         {songData && songData.length > 0 ? (
        //             <table>
        //                 <thead>
        //                     <tr>
        //                         <th>Id</th>
        //                         <th>Thumbnail</th>
        //                         <th>Title</th>
        //                         <th>Audio File Name</th>
        //                         <th>Audio File</th>
        //                         <th>Action</th>
        //                     </tr>
        //                 </thead>
        //                 <tbody>
        //                     {songData.map(song => (
        //                         <tr key={song._id}>
        //                             <td>{song._id}</td>
        //                             <td><img src={"http://localhost:5000"+song.thumbnailPath} alt={`Thumbnail of ${song.title}`} /></td>
        //                             <td>{song.title}</td>
        //                             <td>{song.fileName}</td>
        //                             <td>
        //                                 <audio controls>
        //                                     <source src={"http://localhost:5000"+song.filePath} type="audio/mpeg" />
        //                                     Your browser does not support the audio element.
        //                                 </audio>
        //                             </td>
        //                             <td>
        //                                 <button>Update</button>
        //                                 <button onClick={()=>deleteSong(song._id)}>Delete</button>
        //                             </td>
        //                         </tr>
        //                     ))}
        //                 </tbody>
        //             </table>
        //         ) : (
        //             <p>No songs found</p>
        //         )}
        //     </div>
        // </div>

        <div class="h-screen flex flex-col">

    <nav class="bg-white shadow-md p-4">
        <h1 class="text-xl font-bold">Admin Panel</h1>
    </nav>
    

    <div class="grid grid-cols-12 flex-1 bg-gray-100">

        <div class="bg-gray-600 col-span-6 p-4">
            <p class="text-white">Sidebar Content</p>
        </div>
        

        <div class="bg-blue-500 col-span-6  p-4">
            <p class="text-white">Main Content</p>
        </div>
    </div>
</div>
    );
}

export default Home;
