import React, { useState } from "react";
import { TempleWallet } from "@temple-wallet/dapp";
// import { DAppClient } from '@airgap/beacon-sdk';
import { TezosToolkit } from "@taquito/taquito";

const WalletComponent = () => {
  const [wallet, setWallet] = useState(null);
  const [account, setAccount] = useState("");
  const [balance, setBalance] = useState(null); // State for storing balance
  const [network, setNetwork] = useState("https://rpc.ghostnet.teztnets.com/"); // Default to Kathmandunet RPC URL
  // const dAppClient = new DAppClient({ name: 'YourDAppName' });

  // Initialize Taquito
  const tezos = new TezosToolkit(network);

  // Function to connect Temple Wallet and fetch balance
  const connectWallet = async () => {
    try {
      const available = await TempleWallet.isAvailable();
      if (!available) {
        alert("Temple Wallet is not available");
        return;
      }

      const wallet = new TempleWallet("YourDAppName");
      await wallet.connect({ name: "Tezos", rpc: network });
      const address = await wallet.getPKH();
      setWallet(wallet);
      setAccount(address);

      // Fetch the balance after connecting using Taquito
      const balanceInMutez = await tezos.tz.getBalance(address);
      setBalance(balanceInMutez.toNumber() / 1_000_000); // Convert mutez to tez
    } catch (error) {
      console.error(
        "Error connecting Temple Wallet or fetching balance:",
        error
      );
    }
  };

  // Function to disconnect Temple Wallet
  const disconnectWallet = async () => {
    // await dAppClient.clearActiveAccount();
    setWallet(null);
    setAccount("");
    setBalance(null); // Clear the balance when disconnected
  };

  // Function to toggle between networks
  const toggleNetwork = () => {
    const newNetwork =
      network === "https://mainnet.smartpy.io"
        ? "https://kathmandunet.smartpy.io"
        : "https://mainnet.smartpy.io";
    tezos.setRpcProvider(newNetwork); // Update Taquito with the new network
    setNetwork(newNetwork);
  };

  return (
    <div>
      <p>
        Current Network:{" "}
        {network === "https://mainnet.smartpy.io" ? "Mainnet" : "Kathmandunet"}
      </p>
      <button onClick={toggleNetwork}>
        Switch to{" "}
        {network === "https://mainnet.smartpy.io" ? "Kathmandunet" : "Mainnet"}
      </button>

      {!account ? (
        <button onClick={connectWallet}>Connect Wallet</button>
      ) : (
        <>
          <p>Connected Account: {account}</p>
          <p>Balance: {balance !== null ? `${balance} ꜩ` : "Loading..."}</p>
          <button onClick={disconnectWallet}>Disconnect Wallet</button>
        </>
      )}
    </div>
  );
};

export default WalletComponent;
