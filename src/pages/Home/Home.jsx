/** @format */

import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Slider from "../../components/Slider/Slider";
import CategoryFilter from "../../components/CategoryFilter/CategoryFilter";
import Footer from "../../components/Footer/Footer";
import CardProduk from "../../components/CardProduk/CardProduk";
import "./Home.css";

function Home() {
  return (
    <>
      <Navbar />
      <Slider />
      <CategoryFilter />
      <div id='section-produk'>
        <div className='container mt-4'>
          <div className='produk row'>
            <CardProduk />
            <CardProduk />
            <CardProduk />
            <CardProduk />
            <CardProduk />
            <CardProduk />
            <CardProduk />
            <CardProduk />
            <CardProduk />
            <CardProduk />
            <CardProduk />
            <CardProduk />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
