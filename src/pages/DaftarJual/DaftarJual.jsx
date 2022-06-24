/** @format */

import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./DaftarJual.css";
import Footer from "../../components/Footer/Footer";
import SemuaProduk from "../../components/SemuaProduk/SemuaProduk";
import DiminatiNotFound from "../../components/DiminatiNotFound/DiminatiNotFound";
import TerjualNotFound from "../../components/TerjualNotFound/TerjualNotFound";
import Diminati from "../../components/Diminati/Diminati";
import Terjual from "../../components/Terjual/Terjual";
import DaftarJualHeader from "../../components/DaftarJualHeader/DaftarJualHeader";
import SidebarDaftarJual from "../../components/SidebarDaftarJual/SidebarDaftarJual";

function DaftarJual() {
  return (
    <div>
      <Navbar />
      <div className='container mt-5'>
        <DaftarJualHeader />
        <div className='row'>
          <SidebarDaftarJual />
          <div className='col-lg-9'>
            {/* <SemuaProduk/> */}
            {/* <DiminatiNotFound /> */}
            <TerjualNotFound />
            {/* <Diminati /> */}
            {/* <Terjual /> */}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default DaftarJual;
