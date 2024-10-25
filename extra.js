import React, { useState } from 'react';
import ipfs from '../ipfs'; // Import the IPFS client
import { TezosToolkit } from '@taquito/taquito';


const tezos = new TezosToolkit('https://mainnet-tezos.giganode.io'); //

const UploadPage = () => {
  const [songData, setSongData] = useState({
    title: '',
    artist: '',
    genre: '',
    image:'',
    price:'',
    file: null,
  });
  const [ipfsHash, setIpfsHash] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSongData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setSongData((prev) => ({ ...prev, file: e.target.files[0] }));
  };

  



const handleSubmit = async (e) => {
  e.preventDefault();
  console.log(songData)
  return;
    // try {
    //   const fileBuffer = await songData.file.arrayBuffer();
    //   const added = await ipfs.add(Buffer.from(fileBuffer));
    //   setIpfsHash(added.path);

    //   // Tezos contract call
    //   const contractAddress = 'KT1EhKARv4KAAKk64nvS5j43dMHwA9fT1jwt'; // Your contract address
    //   const contract = await tezos.contract.at(contractAddress);
      
    //   // Prepare the transaction parameters for your smart contract
    //   const op = await contract.methods.register_song(
    //     songData.title, 
    //     songData.artist, 
    //      songData.genre,
    //      songData.image,
    //     songData.price,
    //      added.path,
        
    //     // IPFS hash
    //   ).send();
    //   // const op = await contract.methods.register_song(
    //   //   title  = songData.title, 
    //   //   artist_name = songData.artist, 
    //   //   genre  = songData.genre,
    //   //   image = songData.image,
    //   //   price = songData.price,
    //   //   ipfs_hash = added.path,
        
    //   //   // IPFS hash
    //   // ).send();

    //   await op.confirmation();
    //   console.log('Song metadata stored on Tezos blockchain!');
    // } catch (error) {
    //   console.error('Error uploading file or interacting with Tezos:', error);
    // }
};


  return (
    <div>
      <h2>Upload Your Song</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="title" placeholder="Title" onChange={handleChange} />
        <input type="text" name="artist" placeholder="Artist" onChange={handleChange} />
        <input type="text" name="genre" placeholder="Genre" onChange={handleChange} />
        <input type="text" name="image" placeholder="Image" onChange={handleChange} />
        <input type="text" name="price" placeholder="Price" onChange={handleChange} />
        <input type="file" onChange={handleFileChange} />
        <button type="submit" onClick={handleSubmit}>Upload Song</button>
      </form>

      {ipfsHash && (
        <div>
          <p>Song successfully uploaded to IPFS!</p>
          <a href={`https://ipfs.infura.io/ipfs/${ipfsHash}`} target="_blank" rel="noopener noreferrer">
            View Song on IPFS
          </a>
        </div>
      )}
    </div>
  );
};

export default UploadPage;
