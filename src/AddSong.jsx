import React, { useState } from 'react';

function AddSong() {
    // State to hold the selected files
    const [thumbnail, setThumbnail] = useState(null);
    const [audio, setAudio] = useState(null);

    // Handler for form submission
    const handleSubmit = async (event) => {
        event.preventDefault(); // Prevent default form submission

        if (!thumbnail || !audio) {
            alert('Both thumbnail and audio files are required!');
            return;
        }

        // Create a FormData object to hold the files
        const formData = new FormData();
        formData.append('thumbnail', thumbnail);
        formData.append('audio', audio);

        try {
            // Make a POST request to upload the files using fetch
            const response = await fetch('/api/songs/addSong', {
                method: 'POST',
                body: formData
            });

            if (response.ok) {
                const data = await response.json();
                // Handle the response
                alert('Upload successful!');
                console.log('Response:', data);
            } else {
                const errorData = await response.json();
                console.error('Error uploading files:', errorData);
                alert('Failed to upload files.');
            }
        } catch (error) {
            // Handle fetch errors
            console.error('Error uploading files:', error);
            alert('Failed to upload files.');
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
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
