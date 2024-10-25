import React from 'react';

const BuyPage = () => {
  const handleBuy = (song) => {
    // Logic for buying a song
    console.log(`Buying song: ${song.title}`);
  };

  return (
    <div>
      <h2>Buy Song</h2>
      <p>Title: Song Title</p>
      <p>Artist: Artist Name</p>
      <button onClick={() => handleBuy({ title: 'Song Title', artist: 'Artist Name' })}>
        Buy Song
      </button>
    </div>
  );
};

export default BuyPage;
