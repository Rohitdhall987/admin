import { useState,useEffect } from "react";
function Songs(){

    const [songs,setSongs]=useState(null);

    useEffect(()=>{
        fetchData();
    },[]);

    //function to fetch songs from api
    const fetchData = async ()=> {
        fetch(
            '/api/songs/', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization':`Bearer ${localStorage.getItem("token")}`,
                },
            }
        ).then(response => response.json())
        .then(res=>{
            console.log(res);
            setSongs(res);
        });
    }
    

    return (
        <div className="card">
            <p className="pb-1">Songs</p>
            <hr/>
            <div className="flex justify-end">
                <button className="orange-gradient px-4 py-2 m-2 rounded">Add</button>
            </div>
            {
                songs==null?
                <center>
                    no Song added
                </center>
                :
                <table className="card-main">
                    <thead className="border-b-2 ">
                    <tr >
                        <td>id</td>
                        <td>Thumbnail</td>
                        <td>Title</td>
                    </tr>
                    </thead>
                    
                    <tbody>
                    {
                            songs.map(
                                song=><tr key={song._id} >
                                        <td >{song._id}</td>
                                        <td ><img className="w-12 h-12"  src={"http://localhost:5000"+song.thumbnailPath} /></td>
                                        <td >{song.title}</td>
                                    </tr>
                                
                            )
                        }
                    </tbody>
                    
                </table>
            }
        </div>
    );
}

export default Songs;