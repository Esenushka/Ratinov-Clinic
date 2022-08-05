import { Route, Routes } from 'react-router-dom';
import HomePage from "./pages/HomePage";
import './App.css';
import "./styles/index.scss"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CommentPage from './pages/CommentPage';
import DoctorsPage from './pages/DoctorsPage';
import SpinePage from './pages/services/SpinePage';
import ServicesPage from './pages/ServicesPage';
import Price from './pages/Price';
import MassagePage from './pages/services/MassagePage';
import PhysiotherapyPage from './pages/services/PhysiotherapyPage';
import StocksPage from './pages/StocksPage';
import BotulinumPage from './pages/services/BotulinumPage';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/comment" element={<CommentPage />}></Route>
        <Route path="/doctors" element={<DoctorsPage />}></Route>
        <Route path="/services" element={<ServicesPage />}></Route>
        <Route path="/services/spine" element={<SpinePage />}></Route>
        <Route path="price" element={<Price />}></Route>
        <Route path="/services/massage" element={<MassagePage />}></Route>
        <Route path="/services/physiotherapy" element={<PhysiotherapyPage />}></Route>
        <Route path="/services/stocks" element={<StocksPage />}></Route>
        <Route path="/services/botulinum" element={<BotulinumPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
