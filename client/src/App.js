import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UploadPage from './pages/uploadSongs';
import SearchPage from './pages/searchSongs';
import ExplorePage from './pages/exploreSongs';
import BuyPage from './pages/buySongs';
import TezTunesHome from './pages/home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' exact element={<TezTunesHome/>}/>
        <Route path="/upload" element={<UploadPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/explore" element={<ExplorePage />} />
        <Route path="/buy" element={<BuyPage />} />
      </Routes>
    </Router>
  );
}

export default App;
