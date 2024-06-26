import React, { useState } from 'react';

function AddSong() {
    // State to hold the selected files
    const [thumbnail, setThumbnail] = useState(null);
    const [audio, setAudio] = useState(null);
    const [title, setTitle] = useState(null);
    const [singer, setSinger] = useState(null);

    // Handler for form submission
    const handleSubmit = async (event) => {
        event.preventDefault(); // Prevent default form submission

        if (!thumbnail || !audio || !title || !singer) {
            alert('all files are required!');
            return;
        }

        // Create a FormData object to hold the files
        const formData = new FormData();
        formData.append('thumbnail', thumbnail);
        formData.append('audio', audio);
        formData.append('title', title);
        formData.append('singer', singer);

        try {
            // Make a POST request to upload the files using fetch
            const response = await fetch('/api/songs/addSong', {
                method: 'POST',
                body: formData,
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem("token")}`,
                }
            });

            if (response.ok) {
                const data = await response.json();
                // Handle the response
                alert('Upload successful!');
                console.log('Response:', data);
            } else {
                const errorData = await response.json();
                console.error('Error uploading files:', errorData);
                alert('Failed to upload files. (err)');
            }
        } catch (error) {
            // Handle fetch errors
            console.error('Error uploading files:', error);
            alert('Failed to upload files. (catch)');
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <p>Title:</p>
                <input type="text" onChange={(e) => setTitle(e.target.value)} />
                <p>Singer:</p>
                <input type="text"  onChange={(e) => setSinger(e.target.value)} />
                <p>Thumbnail:</p>
                <input type="file" accept="image/png" onChange={(e) => setThumbnail(e.target.files[0])} />
                <p>Audio file:</p>
                <input type="file" accept="audio/mp3" onChange={(e) => setAudio(e.target.files[0])} />
                <button type="submit">Submit</button>
            </form>
        </>
    );
}

export default AddSong;
