import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UploadPage from "./pages/uploadSongs";
import SearchPage from "./pages/searchSongs";
import ExplorePage from "./pages/exploreSongs";
import BuyPage from "./pages/buySongs";
import TezTunesHome from "./pages/home";
import { useState } from "react";

function App() {
  const [wallet, setWallet] = useState({
    address: "",
    balance: 0,
  });

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          exact
          element={<TezTunesHome wallet={wallet} setWallet={setWallet} />}
        />
        {wallet?.account != "" ? (
          <>
            <Route path="/upload" element={<UploadPage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/explore" element={<ExplorePage />} />
            <Route path="/buy" element={<BuyPage />} />
          </>
        ) : (
          <Route path={"/*"} element={<div>No wallet</div>} />
        )}
      </Routes>
    </Router>
  );
}

export default App;
