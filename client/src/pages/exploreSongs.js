import React, { useState } from "react";
import { Search, Wallet } from "lucide-react";

const MusicExplorer = () => {
  const [balance, setBalance] = useState("1,234"); // Demo balance

  const demoSongs = [
    {
      id: 1,
      cover: "/api/placeholder/200/200",
      title: "Demo Song 1",
      artist: "Artist 1",
      price: "50",
    },
    {
      id: 2,
      cover: "/api/placeholder/200/200",
      title: "Demo Song 2",
      artist: "Artist 2",
      price: "75",
    },
    {
      id: 3,
      cover: "/api/placeholder/200/200",
      title: "Demo Song 3",
      artist: "Artist 3",
      price: "60",
    },
  ];

  const MusicCard = ({ cover, title, artist, price }) => (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105">
      <img src={cover} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-white font-semibold text-lg">{title}</h3>
        <p className="text-gray-400">{artist}</p>
        <div className="mt-4 flex justify-between items-center">
          <span className="text-purple-400">{price} ꜩ</span>
          <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors">
            Buy
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="p-4 flex justify-between items-center border-b border-gray-800">
        <h1 className="text-2xl font-bold text-purple-400">Let's Explore</h1>
        <div className="flex items-center gap-4">
          <div className="flex items-center bg-gray-800 rounded-lg px-4 py-2">
            <Wallet className="text-purple-400 mr-2" size={20} />
            <span>{balance} ꜩ</span>
          </div>
        </div>
      </header>

      {/* Search Section */}
      <div className="max-w-6xl mx-auto p-6">
        <div className="relative mb-8">
          <input
            type="text"
            placeholder="Search for artists, songs..."
            className="w-full bg-gray-800 rounded-lg py-3 px-4 pl-12 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <Search
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
            size={20}
          />
        </div>

        {/* Featured Section */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4 text-purple-400">
            Music Madness
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {demoSongs.map((song) => (
              <MusicCard key={song.id} {...song} />
            ))}
          </div>
        </section>

        {/* Categories */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4 text-purple-400">
            Browse by Genre
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {["Pop", "Rock", "Jazz", "Electronic"].map((genre) => (
              <button
                key={genre}
                className="bg-gray-800 p-4 rounded-lg text-center hover:bg-purple-600 transition-colors"
              >
                {genre}
              </button>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default MusicExplorer;
