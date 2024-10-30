import React, { useEffect, useState } from "react";
import { Wallet, Shield, CircuitBoard } from "lucide-react";
import { TempleWallet } from "@temple-wallet/dapp";
import { TezosToolkit } from "@taquito/taquito";

import "../styles/home.css";
import {
  FeatureSection,
  HeroSection,
  HexagonBackground,
} from "../components/home";
import { RPC_URL } from "../helpers/contansts";

const TezTunesHome = ({ wallet, setWallet }) => {
  const [textConnect, setTextConnect] = useState("Connect Wallet");
  const [network, setNetwork] = useState(RPC_URL);
  const tezos = new TezosToolkit(network);

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

      // Fetch the balance after connecting using Taquito
      const balanceInMutez = await tezos.tz.getBalance(address);

      setWallet({
        wallet,
        address,
        balance: balanceInMutez.toNumber() / 1_000_000,
      });

      setTextConnect(address.split("", 5));

      localStorage.setItem("isWalletAvailable", true);
    } catch (error) {
      console.error(
        "Error connecting Temple Wallet or fetching balance:",
        error
      );
    }
  };

  const disconnectWallet = async () => {
    setWallet({ wallet: "", balance: 0, address: "" });
    setTextConnect("Connect Wallet");
    localStorage.setItem("isWalletAvailable", false);

    // Clear the balance when disconnected
  };
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const beneficiaries = [
    {
      title: "Artist",
      benefit: "Receive transparent and timely compensation",
    },
    {
      title: "Producers and Record Labels",
      benefit:
        "Streamlined royalty tracking and distribution, reducing administrative overhead",
    },
    {
      title: "Right Holders",
      benefit:
        "Individuals or organisations owning music rights gain automated payouts",
    },
    {
      title: "Investors",
      benefit:
        "Opportunities for investors to participate in royalty sharing models",
    },
    {
      title: "Fans",
      benefit: "Opportunities for fans to directly support artists",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <HexagonBackground />

      {/* Hero Section */}
      <HeroSection
        wallet={wallet}
        isVisible={isVisible}
        connectWallet={connectWallet}
        disconnectWallet={disconnectWallet}
        textConnect={textConnect}
      />
      {/* Live Performance Section */}
      <section className="relative container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
          Featured Artists
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl bg-gray-800 transition-all hover:scale-105"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
              <img
                src={`/api/placeholder/400/300`}
                alt="Artist Performance"
                className="w-full h-64 object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl font-bold mb-2">
                  Live Performance {index}
                </h3>
                <p className="text-gray-300">
                  Experience the future of music ownership
                </p>
              </div>
              <div className="absolute top-4 right-4 bg-purple-500 text-white px-3 py-1 rounded-full text-sm">
                Live Now
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <FeatureSection />

      {/* Why Us Section */}
      <section className="relative container mx-auto px-4 py-24">
        <h2 className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
          Why Choose TezTunes?
        </h2>
        <div className="max-w-3xl mx-auto space-y-6">
          {beneficiaries.map((item, index) => (
            <div
              key={index}
              className="group p-6 bg-gray-800/50 backdrop-blur-sm rounded-xl hover:bg-gray-700/50 transition-all hover:scale-102 border border-purple-500/20 hover:border-purple-500/40"
            >
              <h3 className="text-xl font-bold text-purple-400 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-300">{item.benefit}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-16 bg-gray-800/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { label: "Active Artists", value: "10K+" },
              { label: "Total Volume", value: "₮ 1M+" },
              { label: "Smart Contracts", value: "50K+" },
              { label: "Daily Transactions", value: "100K+" },
            ].map((stat, index) => (
              <div key={index} className="p-6">
                <div className="text-3xl font-bold text-purple-400 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative bg-gray-800/30 backdrop-blur-sm py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500 mb-4">
              Join the Revolution
            </h3>
            <p className="text-gray-400">
              Be part of the future of music royalties
            </p>
          </div>
          <div className="flex justify-center space-x-8 text-gray-400">
            <a href="#" className="hover:text-purple-400 transition-colors">
              About
            </a>
            <a href="#" className="hover:text-purple-400 transition-colors">
              Documentation
            </a>
            <a href="#" className="hover:text-purple-400 transition-colors">
              Terms
            </a>
            <a href="#" className="hover:text-purple-400 transition-colors">
              Privacy
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default TezTunesHome;
