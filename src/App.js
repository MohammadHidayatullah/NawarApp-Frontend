/** @format */

import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import InfoProfil from "./pages/InfoProfil/InfoProfil";
import InfoProduk from "./pages/InfoProduk/InfoProduk";
import DaftarJual from "./pages/DaftarJual/DaftarJual";
import InfoProdukPage from "./pages/InfoProdukPage/InfoProdukPage";
import InfoProdukSeller from "./pages/InfoProdukSeller/InfoProdukSeller";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import InfoPenawaran from "./pages/InfoPenawaran/InfoPenawaran";
import { Provider } from "react-redux";
import store from "./redux/store";
import InfoProdukEdit from "./pages/InfoProdukEdit/InfoProdukEdit";

function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/info-profil" element={<InfoProfil />}></Route>
        <Route path="/info-produk" element={<InfoProduk />}></Route>
        <Route path="/info-produk/edit/:id" element={<InfoProdukEdit />}></Route>
        <Route path="/daftar-jual" element={<DaftarJual />}></Route>
        <Route path="/info-produk-page" element={<InfoProdukPage />}></Route>
        <Route
          path="/info-produk-seller"
          element={<InfoProdukSeller />}
        ></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/info-penawaran" element={<InfoPenawaran />}></Route>
      </Routes>
    </Provider>
  );
}

export default App;
