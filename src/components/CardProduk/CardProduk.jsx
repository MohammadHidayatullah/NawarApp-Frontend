/** @format */

import React from "react";
import produk from "../../assets/img/produk.jpg";
import NumberFormat from "react-number-format";
import "./CardProduk.css";

function CardProduk() {
  return (
    <>
      <div className='card col-2 mt-2'>
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
    </>
  );
}

export default CardProduk;
