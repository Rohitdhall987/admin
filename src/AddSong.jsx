function AddSong(){
    return(
    <>
        <div>
            <p>Title:</p>
            <input type ="text"/>
            <p>Audio file:</p>
            <input type ="file" accept="audio/mp3"/>
            <button>Submit</button>
        </div>
    </>
    );
}

export default AddSong;