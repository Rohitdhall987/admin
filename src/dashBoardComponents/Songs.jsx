import { useState,useEffect } from "react";
function Songs(){

    const [songs,setSongs]=useState(null);

    useEffect(()=>{
        fetchData();
    },[]);

    //function to fetch songs from api
    const fetchData = async ()=> {
        console.log(`Bearer ${localStorage.getItem("token")}`);
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
        <div className="card-main">
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
                <table>
                    <tr>
                        <td>id</td>
                    </tr>
                    <tr>
                        {
                            songs.map(
                                song=>
                                    <td id={song._id} >{song._id}</td>
                                
                            )
                        }
                    </tr>
                </table>
            }
        </div>
    );
}

export default Songs;