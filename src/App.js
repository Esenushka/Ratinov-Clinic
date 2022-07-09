import { Route, Routes } from 'react-router-dom';
import HomePage from "./pages/HomePage";
import './App.css';
import "./styles/index.scss"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
      </Routes>
    </>
  );
}

export default App;
