import React from "react";
import { CircuitBoard, Hexagon, Shield, Wallet } from "lucide-react";

export const HeroSection = ({
  isVisible,
  textConnect,
  connectWallet,
  disconnectWallet,
  wallet,
}) => (
  <header className="relative container mx-auto px-4 py-24">
    <div
      className={`text-center transform transition-all duration-1000 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      }`}
    >
      <div className="inline-block mb-6">
        <div className="relative">
          <div className="absolute inset-0 bg-purple-500 blur-xl opacity-20 animate-pulse"></div>
          <h1
            style={{ color: "#dc2b7b" }}
            className="text-6xl  font-bold bg-clip-text text-transparent "
          >
            TezTunes
          </h1>
        </div>
      </div>
      <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
        The next evolution in music royalties. Powered by blockchain, driven by
        innovation.
      </p>
      <button
        onClick={wallet.address == "" ? connectWallet : disconnectWallet}
        className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-xl hover:from-purple-600 hover:to-pink-600 transition-all transform hover:scale-105 shadow-lg hover:shadow-purple-500/25"
      >
        {textConnect}
      </button>
    </div>
  </header>
);

export const HexagonBackground = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
    {[...Array(20)].map((_, i) => (
      <Hexagon
        key={i}
        className="absolute text-purple-500"
        style={{
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          transform: `scale(${Math.random() * 2 + 1})`,
        }}
      />
    ))}
  </div>
);

const features = [
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Secure Transactions",
    description: "Military-grade encryption powered by Tezos blockchain",
  },
  {
    icon: <Wallet className="w-6 h-6" />,
    title: "Smart Contracts",
    description: "Automated royalty distribution with zero delays",
  },
  {
    icon: <CircuitBoard className="w-6 h-6" />,
    title: "Decentralized",
    description: "No intermediaries, pure peer-to-peer transactions",
  },
];

export const FeatureSection = () => (
  <section className="relative py-24 bg-gray-800/50">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="group bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 hover:bg-gray-700/50 transition-all hover:scale-105"
          >
            <div className="inline-block p-4 bg-purple-500/20 rounded-xl mb-6 group-hover:bg-purple-500/30 transition-all">
              {feature.icon}
            </div>
            <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
            <p className="text-gray-400">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
