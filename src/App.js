import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import InfoProfil from "./pages/InfoProfil/InfoProfil";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/info-profil" element={<InfoProfil />}></Route>
    </Routes>
  );
}

export default App;
