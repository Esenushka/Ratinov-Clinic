import { Route, Routes } from 'react-router-dom';
import HomePage from "./pages/HomePage";
import './App.css';
import "./styles/index.scss"

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
