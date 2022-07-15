/** @format */

import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Home from "./pages/Home/Home";
import InfoProfil from "./pages/InfoProfil/InfoProfil";
import InfoProduk from "./pages/InfoProduk/InfoProduk";
import DaftarJual from "./pages/DaftarJual/DaftarJual";
import InfoProdukPage from "./pages/InfoProdukPage/InfoProdukPage";
import InfoProdukSeller from "./pages/InfoProdukSeller/InfoProdukSeller";
import InfoPenawaran from "./pages/InfoPenawaran/InfoPenawaran";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ModalBuyer from "./components/ModalBuyer/ModalBuyer";
import { Provider } from "react-redux";
import AlertInfoPenawaran from "./components/AlertInfoPenawaran/AlertInfoPenawaran";
import ModalSeller from "./components/ModalSeller/ModalSeller";
import ModalSellerStatus from "./components/ModalSellerStatus/ModalSellerStatus";
import store from "./redux/store";
import InfoProdukEdit from "./pages/InfoProdukEdit/InfoProdukEdit";

function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/dashboard/profil' element={<InfoProfil />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/dashboard/tambah-produk' element={<InfoProduk />}></Route>
        <Route path='/dashboard' element={<DaftarJual />}></Route>
        <Route path='/info-produk-page' element={<InfoProdukPage />}></Route>
        <Route
          path='/info-produk-seller'
          element={<InfoProdukSeller />}></Route>
        <Route path='/info-penawaran' element={<InfoPenawaran />}></Route>
        <Route path='/modal-buyer' element={<ModalBuyer />}></Route>
        <Route path='/modal-seller' element={<ModalSeller />}></Route>
        <Route path='/modal-seller-status' element={<ModalSellerStatus />}></Route>
        <Route path='/alert' element={<AlertInfoPenawaran />}></Route>
        <Route
          path='/info-produk/edit/:id'
          element={<InfoProdukEdit />}></Route>
      </Routes>
    </Provider>
  );
}

export default App;
