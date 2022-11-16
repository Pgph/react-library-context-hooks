import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import NewSongForm from "./NewSongForm";

const SongList = () => {
  const [songs, setSongs] = useState([
    { title: "No Scrubs", id: uuidv4() },
    { title: "Macarena", id: uuidv4() },
    { title: "All Star", id: uuidv4() },
    { title: "I Want It That Way", id: uuidv4() },
  ]);
  const [age, setAge] = useState(20);
  const addSong = (title) => {
    setSongs([...songs, { title, id: uuidv4() }]);
  };

  useEffect(() => {
    console.log("useEffect hook ran", songs);
  }, [songs]);
  useEffect(() => {
    console.log("useEffect hook ran", age);
  }, [age]);
  const handleDelete = (id) => {
    const newSongs = songs.filter((song) => song.id !== id);
    setSongs(newSongs);
  };
  return (
    <div className="song-list">
      <ul>
        {songs.map((song) => {
          return (
            <li key={song.id}>
              {song.title}
              <button onClick={() => handleDelete(song.id)}>delete</button>
            </li>
          );
        })}
      </ul>
      <NewSongForm addSong={addSong} />
      <button onClick={() => setAge(age + 1)}>Add 1 to age: {age}</button>
    </div>
  );
};

export default SongList;
