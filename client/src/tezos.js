// src/tezos.js
import { TezosToolkit } from '@taquito/taquito';
import { BeaconWallet } from '@taquito/beacon-wallet';

const Tezos = new TezosToolkit('https://mainnet-tezos.giganode.io'); // Use mainnet or testnet URL

const wallet = new BeaconWallet({
  name: 'Music Royalty Marketplace',
  preferredNetwork: 'mainnet',
});

Tezos.setWalletProvider(wallet);

export const connectWallet = async () => {
  await wallet.requestPermissions();
};

export const tezos = Tezos;
