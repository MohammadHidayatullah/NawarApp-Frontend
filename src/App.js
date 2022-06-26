import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import InfoProfil from "./pages/InfoProfil/InfoProfil";
import InfoProduk from "./pages/InfoProduk/InfoProduk";
import DaftarJual from "./pages/DaftarJual/DaftarJual";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ModalSeller from "./components/ModalSeller/ModalSeller";
import ModalBuyer from "./components/ModalBuyer/ModalBuyer";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/info-profil" element={<InfoProfil />}></Route>
      <Route path="/info-produk" element={<InfoProduk />}></Route>
      <Route path="/daftar-jual" element={<DaftarJual />}></Route>
      <Route path="/modal-seller" element={<ModalSeller />}></Route>
      <Route path="/modal-buyer" element={<ModalBuyer />}></Route>
    </Routes>
  );
}

export default App;
