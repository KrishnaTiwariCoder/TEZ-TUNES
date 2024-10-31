import React, { useEffect, useState } from "react";
import { TempleWallet } from "@temple-wallet/dapp";
import { TezosToolkit } from "@taquito/taquito";

import "../styles/home.css";
import {
  FeatureSection,
  Footer,
  HeroSection,
  HexagonBackground,
  LivePerformance,
  Stats,
  WhyUsSection,
} from "../components/home";
import { RPC_URL } from "../helpers/contansts";
import { useDispatch, useSelector } from "react-redux";

import { connectWallet, disconnectWallet } from "../redux/store/wallet";
import { setTezos } from "../redux/store/tezos";

const TezTunesHome = () => {
  const [textConnect, setTextConnect] = useState("Connect Wallet");
  const dispatch = useDispatch();
  const network = RPC_URL;
  const [isVisible, setIsVisible] = useState(false);

  const tezos = new TezosToolkit(network);

  const connectWalletButton = async () => {
    try {
      const available = await TempleWallet.isAvailable();
      if (!available) {
        alert("Temple Wallet is not available");
        return;
      }

      const wallet = new TempleWallet("YourDAppName");
      await wallet.connect({ name: "Tezos", rpc: network });
      const address = await wallet.getPKH();

      const balanceInMutez = await tezos.tz.getBalance(address);

      dispatch(
        connectWallet({
          wallet,
          address,
          balance: balanceInMutez.toNumber() / 1_000_000,
        })
      );

      dispatch(setTezos(tezos));
      setTextConnect(address.split("", 5));

      localStorage.setItem("isWalletAvailable", true);
    } catch (error) {
      console.error(
        "Error connecting Temple Wallet or fetching balance:",
        error
      );
    }
  };

  const disconnectWalletButton = async () => {
    dispatch(disconnectWallet());
    setTextConnect("Connect Wallet");
    localStorage.setItem("isWalletAvailable", false);
  };

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <HexagonBackground />

      {/* Hero Section */}
      <HeroSection
        isVisible={isVisible}
        connectWallet={connectWalletButton}
        disconnectWallet={disconnectWalletButton}
        textConnect={textConnect}
      />
      {/* Live Performance Section */}
      <LivePerformance />

      {/* Features Section */}
      <FeatureSection />

      {/* Why Us Section */}
      <WhyUsSection />

      {/* Stats Section */}
      <Stats />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default TezTunesHome;
