import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TezosToolkit } from "@taquito/taquito";
import UploadPage from "./pages/uploadSongs";
import SearchPage from "./pages/searchSongs";
import ExplorePage from "./pages/exploreSongs";
import BuyPage from "./pages/buySongs";
import TezTunesHome from "./pages/home";
import DashboardPage from "./pages/dashboardPage";
import { RPC_URL } from "./helpers/contansts";
import { TempleWallet } from "@temple-wallet/dapp";
import { connectWallet } from "./redux/store/wallet";
import { setTezos } from "./redux/store/tezos";
import "./App.css";
import Navbar from "./components/navbar";

function App() {
  const dispatch = useDispatch();
  const wallet = useSelector((state) => state.wallet);

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
      tezos.setWalletProvider(wallet);
      const balanceInMutez = await tezos.tz.getBalance(address);

      dispatch(
        connectWallet({
          address,
          wallet,
          balance: balanceInMutez.toNumber() / 1_000_000,
        })
      );
      dispatch(setTezos(tezos));
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
        {wallet?.connected ? (
          <>
            {/* <Navbar /> */}
            <Route path="/" element={<DashboardPage />} />
            <Route
              path="/upload"
              element={
                <>
                  {/* <Navbar /> */}
                  <UploadPage />
                </>
              }
            />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/explore" element={<ExplorePage />} />
            <Route path="/buy/:id" element={<BuyPage />} />
            <Route path={"/*"} element={<div>404 page not found</div>} />
          </>
        ) : (
          <>
            <Route path="/*" exact element={<TezTunesHome wallet={wallet} />} />
          </>
        )}
      </Routes>
    </Router>
  );
}

export default App;
