import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UploadPage from "./pages/uploadSongs";
import SearchPage from "./pages/searchSongs";
import ExplorePage from "./pages/exploreSongs";
import BuyPage from "./pages/buySongs";
import TezTunesHome from "./pages/home";
import { useEffect, useState } from "react";
import DashboardPage from "./pages/dashboardPage";
import { TezosToolkit } from "@taquito/taquito";
import { RPC_URL } from "./helpers/contansts";
import { TempleWallet } from "@temple-wallet/dapp";

function App() {
  const [wallet, setWallet] = useState({
    address: "",
    balance: 0,
    wallet: null,
  });

  async function autoConnect() {
    const tezos = new TezosToolkit(RPC_URL);

    try {
      const available = await TempleWallet.isAvailable();
      if (!available) {
        alert("Temple Wallet is not available");
        return;
      }

      const wallet = new TempleWallet("YourDAppName");
      await wallet.connect({ name: "Tezos", rpc: RPC_URL });
      const address = await wallet.getPKH();

      // Fetch the balance after connecting using Taquito
      const balanceInMutez = await tezos.tz.getBalance(address);

      setWallet({
        wallet,
        address,
        balance: balanceInMutez.toNumber() / 1_000_000,
      });
    } catch (error) {
      console.error(
        "Error connecting Temple Wallet or fetching balance:",
        error
      );
    }
  }

  useEffect(() => {
    if (window.localStorage.getItem("isWalletAvailable") === "true") {
      autoConnect();
    }
  }, []);

  return (
    <Router>
      <Routes>
        {wallet?.address != "" ? (
          <>
            <Route path="/" element={<DashboardPage />} />
            <Route
              path="/upload"
              element={<UploadPage wallet={wallet} setWallet={wallet} />}
            />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/explore" element={<ExplorePage />} />
            <Route path="/buy" element={<BuyPage />} />
            <Route path={"/*"} element={<div>404 page not found</div>} />
          </>
        ) : (
          <>
            <Route
              path="/*"
              exact
              element={<TezTunesHome wallet={wallet} setWallet={setWallet} />}
            />
          </>
        )}
      </Routes>
    </Router>
  );
}

export default App;
