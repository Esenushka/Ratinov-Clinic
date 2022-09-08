import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import "./App.css";
import "./styles/index.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import JointPage from "./pages/services/JointPage";
import CommentPage from './pages/CommentPage';
import DoctorsPage from './pages/DoctorsPage';
import SpinePage from './pages/services/SpinePage';
import ServicesPage from './pages/ServicesPage';
import PricePage from './pages/PricePage';
import MassagePage from './pages/services/MassagePage';
import PhysiotherapyPage from './pages/services/PhysiotherapyPage';
import StocksPage from './pages/StocksPage';
import BotulinumPage from './pages/services/BotulinumPage';
import RehabilitationPage from './pages/services/RehabilitationPage';
import TherapeuticPage from './pages/services/TherapeuticPage';
import ResultPage from './pages/ResultPage';
import ConsultationPage from './pages/ConsultationPage';
import DoctorPage from "./pages/DoctorPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/comment" element={<CommentPage />}></Route>
        <Route path="/doctors" element={<DoctorsPage />}></Route>
        <Route path="/price" element={<PricePage />}></Route>
        <Route path="/result" element={<ResultPage />}></Route>
        <Route path="/services" element={<ServicesPage />}></Route>
        <Route path="/services/spine" element={<SpinePage />}></Route>
        <Route path="/services/massage" element={<MassagePage />}></Route>
        <Route path="/services/joint" element={<JointPage />}></Route>
        <Route path="/services/physiotherapy" element={<PhysiotherapyPage />}></Route>
        <Route path="/services/stocks" element={<StocksPage />}></Route>
        <Route path="/services/botulinum" element={<BotulinumPage />}></Route>
        <Route path="/services/rehabilitation" element={<RehabilitationPage />}></Route>
        <Route path="/services/therapeutic" element={<TherapeuticPage />}></Route>
        <Route path="/consultation" element={<ConsultationPage />}></Route>
        <Route path="/doctor/:id" element={<DoctorPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
