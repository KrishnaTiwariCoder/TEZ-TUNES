import React, { useState } from 'react';
import { Upload, Music2, Tag, ImagePlus, Wallet } from 'lucide-react';

const UploadForm = () => {
  const [formData, setFormData] = useState({
    artistName: '',
    songName: '',
    songGenre: '',
    coverArtLink: '',
    price: ''
  });
  
  const [previewImage, setPreviewImage] = useState('');
  const [tezosBalance] = useState('125.50'); // This would come from wallet connection
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    if (name === 'coverArtLink' && value) {
      setPreviewImage(value);
    }
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission logic here
  };

  return (
    <div className="min-h-screen bg-slate-900 text-gray-100 p-6">
      {/* Top Balance Bar */}
      <div className="max-w-4xl mx-auto flex justify-end mb-8">
        <div className="bg-purple-900/50 backdrop-blur-sm rounded-lg px-6 py-3 flex items-center gap-2">
          <Wallet className="text-purple-400" size={20} />
          <span className="text-purple-300">Balance:</span>
          <span className="font-bold">{tezosBalance} ꜩ</span>
        </div>
      </div>

      {/* Main Form Container */}
      <div className="max-w-4xl mx-auto bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
        <h1 style={{color:"#dc2b7b "}}className="text-4xl font-bold text-center 0 bg-clip-text text-transparent mb-8">
          Upload Your Music
        </h1>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Left Column */}
            <div className="space-y-6">
              {/* Artist Name Input */}
              <div className="space-y-2">
                <label className="flex items-center text-purple-300 font-medium gap-2">
                  <Music2 size={18} />
                  Artist Name
                </label>
                <input
                  type="text"
                  name="artistName"
                  value={formData.artistName}
                  onChange={handleInputChange}
                  className="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-3 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition"
                  placeholder="Enter artist name"
                />
              </div>

              {/* Song Name Input */}
              <div className="space-y-2">
                <label className="flex items-center text-purple-300 font-medium gap-2">
                  <Music2 size={18} />
                  Song Name
                </label>
                <input
                  type="text"
                  name="songName"
                  value={formData.songName}
                  onChange={handleInputChange}
                  className="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-3 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition"
                  placeholder="Enter song name"
                />
              </div>

              {/* Genre Selection */}
              <div className="space-y-2">
                <label className="flex items-center text-purple-300 font-medium gap-2">
                  <Tag size={18} />
                  Genre
                </label>
                <select
                  name="songGenre"
                  value={formData.songGenre}
                  onChange={handleInputChange}
                  className="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-3 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition"
                >
                  <option value="">Select Genre</option>
                  <option value="pop">Pop</option>
                  <option value="rock">Rock</option>
                  <option value="hiphop">Hip Hop</option>
                  <option value="electronic">Electronic</option>
                  <option value="jazz">Jazz</option>
                  <option value="classical">Classical</option>
                </select>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              {/* Cover Art Preview */}
              <div className="space-y-2">
                <label className="flex items-center text-purple-300 font-medium gap-2">
                  <ImagePlus size={18} />
                  Cover Art Link
                </label>
                <input
                  type="url"
                  name="coverArtLink"
                  value={formData.coverArtLink}
                  onChange={handleInputChange}
                  className="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-3 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition"
                  placeholder="Enter cover art URL"
                />
                <div className="aspect-square rounded-lg bg-slate-700/50 border border-slate-600 overflow-hidden flex items-center justify-center">
                  {previewImage ? (
                    <img src="/api/placeholder/400/400" alt="Cover Art Preview" className="w-full h-full object-cover" />
                  ) : (
                    <ImagePlus size={48} className="text-slate-500" />
                  )}
                </div>
              </div>

              {/* Price Input */}
              <div className="space-y-2">
                <label className="flex items-center text-purple-300 font-medium gap-2">
                  <Wallet size={18} />
                  Price (ꜩ)
                </label>
                <input
                  type="number"
                  name="price"
                  value={formData.price}
                  onChange={handleInputChange}
                  step="0.01"
                  min="0"
                  className="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-3 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition"
                  placeholder="Enter price in Tezos"
                />
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-4 px-6 rounded-lg transition duration-300 flex items-center justify-center gap-2"
          >
            <Upload size={20} />
            Upload Song
          </button>
        </form>
      </div>
    </div>
  );
};

export default UploadForm;
