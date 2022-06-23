import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import InfoProfil from "./pages/InfoProfil/InfoProfil";
import InfoProduk from "./pages/InfoProduk/InfoProduk";
import DaftarJual from "./pages/DaftarJual/DaftarJual";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/info-profil" element={<InfoProfil />}></Route>
      <Route path="/info-produk" element={<InfoProduk />}></Route>
      <Route path="/daftar-jual" element={<DaftarJual />}></Route>
    </Routes>
  );
}

export default App;
