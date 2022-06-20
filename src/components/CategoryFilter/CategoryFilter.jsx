/** @format */

import React from "react";
import "./CategoryFilter.css";
import { BsSearch } from "react-icons/bs";

function CategoryFilter() {
  return (
    <div className='container'>
      <h6 className='category-title'>Telusuri Kategori</h6>
      <div className='category-filter d-flex'>
        <button className='btn btn-category-filter d-flex align-items-center'>
          <BsSearch className='basearch-icon me-2' /> Semua
        </button>
        <button className='btn btn-category-filter d-flex align-items-center'>
          <BsSearch className='basearch-icon me-2' /> Casual
        </button>
        <button className='btn btn-category-filter d-flex align-items-center'>
          <BsSearch className='basearch-icon me-2' /> Sneakers
        </button>
        <button className='btn btn-category-filter d-flex align-items-center'>
          <BsSearch className='basearch-icon me-2' /> Sport
        </button>
        <button className='btn btn-category-filter d-flex align-items-center'>
          <BsSearch className='basearch-icon me-2' /> Boots
        </button>
        <button className='btn btn-category-filter d-flex align-items-center'>
          <BsSearch className='basearch-icon me-2' /> Slip On
        </button>
      </div>
    </div>
  );
}

export default CategoryFilter;
