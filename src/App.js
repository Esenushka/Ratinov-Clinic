import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import "./App.css";
import "./styles/index.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import DoctorsPage from "./pages/DoctorsPage";
import SpinePage from "./pages/services/SpinePage";
import ServicesPage from "./pages/ServicesPage";
import MassagePage from "./pages/services/MassagePage";
import PhysiotherapyPage from "./pages/services/PhysiotherapyPage";
import JointPage from "./pages/services/JointPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/doctors" element={<DoctorsPage />}></Route>
        <Route path="/services" element={<ServicesPage />}></Route>
        <Route path="/services/spine" element={<SpinePage />}></Route>
        <Route path="/services/massage" element={<MassagePage />}></Route>
        <Route
          path="/services/physiotherapy"
          element={<PhysiotherapyPage />}
        ></Route>
        <Route path="/services/joint" element={<JointPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
