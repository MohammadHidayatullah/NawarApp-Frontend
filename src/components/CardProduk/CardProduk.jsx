/** @format */

import React from "react";
import produk from "../../assets/img/produk.jpg";
import NumberFormat from "react-number-format";
import "./CardProduk.css";

function CardProduk() {
  return (
    <section className="card-produk col-lg-2 col-md-3 col-sm-4 mt-2">
      <div className='card'>
        <img src={produk} className='card-img-top' alt='...' />
        <div className='card-body'>
          <p className='card-title'>Card title</p>
          <p className='card-text'>Aksesoris</p>
          <p className='card-price'>
            <NumberFormat
              value={2456981}
              displayType={'text'}
              thousandSeparator={"."}
              decimalSeparator={","}
              prefix={"Rp "}
            />
          </p>
        </div>
      </div>
    </section>
  );
}

export default CardProduk;
