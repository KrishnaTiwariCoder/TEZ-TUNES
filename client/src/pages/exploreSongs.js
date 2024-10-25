import React from 'react';

const ExplorePage = () => {
  const songs = [
    { title: 'Song 1', artist: 'Artist 1', genre: 'Pop' },
    { title: 'Song 2', artist: 'Artist 2', genre: 'Rock' },
  ];

  return (
    <div>
      <h2>Explore Songs</h2>
      <ul>
        {songs.map((song, index) => (
          <li key={index}>
            <strong>{song.title}</strong> by {song.artist} - {song.genre}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExplorePage;
