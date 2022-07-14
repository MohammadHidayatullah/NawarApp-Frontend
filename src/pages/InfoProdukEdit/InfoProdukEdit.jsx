import React, { useEffect, useRef } from "react";
import "./InfoProdukEdit.css";
import { FiArrowLeft } from "react-icons/fi";
import Navbar from "../../components/Navbar/Navbar";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import {
  // getProduct,
  draftProduct,
  editProduct,
  getProductDetail,
  // deleteProduct,
} from "../../redux/action/productAction";
import { getCategories } from "../../redux/action/categoryAction";
import Select from "react-select";
import axios, { Axios } from "axios";

function InfoProdukEdit() {
  // Fungsi untuk handle navigasi
  const navigate = useNavigate();

  // Fungsi get categories
  const { data: categoryData } = useSelector((state) => state.category);

  useEffect(() => {
    dispatch(getCategories());
  }, []);

  const options = categoryData.map((kategori) => {
    return { value: kategori.id, label: kategori.name };
  });

  // Fungsi untuk handle react redux
  const [name, setName] = useState();
  const [harga, setHarga] = useState();
  const [description, setDescription] = useState();
  const [categoryy, setCategory] = useState(null);
  const [idCategory, setIdCategory] = useState([]);
  const [sizes, setSize] = useState();

  const dispatch = useDispatch();

  const { isLoading: loadingProduct, data: productData } = useSelector(
    (state) => state.product
  );

  // Fungsi get ID
  const { id } = useParams();
  const dataCategory = [];
  const dataAwal = useRef();
  const mapDataAwal = () => {
    if (productData.length === 0) {
      dataAwal.current = [];
      dataCategory.current = [];
      return;
    }
    dataAwal.current.forEach((item) => {
      console.log(item.category.name);
      dataCategory.push({ label: item.category.name, value: item.categoryId });
    });
  };

  mapDataAwal();

  // Fungsi get old value
  useEffect(() => {
    if (productData.length === 0) {
      dispatch(getProductDetail(id));
      return;
    }
    setName(productData[0].name);
    setHarga(productData[0].price);
    setDescription(productData[0].description);
    productData[0].productCategories.forEach((item) => {
      setIdCategory((indexAwal) => [...indexAwal, item.categoryId]);
    });
    dataAwal.current = productData[0].productCategories;
    setSize(productData[0].size);
  }, [productData]);

  const resetForm = () => {
    setName("");
    setHarga("");
    setDescription("");
    setCategory("");
    setSize("");
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const prices = parseInt(harga);
  //   const size = parseInt(sizes);
  //   const data = JSON.stringify({
  //     name: name,
  //     price: prices,
  //     description: description,
  //     category: idCategory,
  //     size: size,
  //   });

  //   resetForm();

  // };

  const handleDraft = (e) => {
    e.preventDefault();
    const prices = parseInt(harga);
    const size = parseInt(sizes);
    const data = JSON.stringify({
      name: name,
      price: prices,
      description: description,
      category: idCategory,
      size: size,
    });
    dispatch(draftProduct(data));
    resetForm();
  };

  // Fungsi untuk handle responsive mobile
  const [width, setWidth] = useState(window.innerWidth);

  const detectSize = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", detectSize);

    return () => {
      window.removeEventListener("resize", detectSize);
    };
  }, [width]);

  const navHome = () => {
    navigate("/");
  };

  // Fungsi redux
  return (
    <>
      <section>
        {width >= 576 && <Navbar />}
        {productData.length === 0 ? (
          <p className="mt-3 ms-3 fw-bold">Loading...</p>
        ) : (
          <div style={{ padding: "3%" }}>
            <div className="container" style={{ maxWidth: "568px" }}>
              <button
                className="d-none d-sm-block arrow-left"
                onClick={navHome}
              >
                <FiArrowLeft size={22} />
              </button>
              {width <= 576 && (
                <div className="d-flex justify-content-between">
                  <button className=" arrow-left" onClick={navHome}>
                    <FiArrowLeft size={22} />
                  </button>
                  <p className="mb-4" style={{ marginLeft: "-28.84px" }}>
                    <b>Lengkapi Detail Produk</b>
                  </p>
                </div>
              )}
              <div className="row">
                <div className="col-lg-12">
                  <form>
                    <div className="mb-3">
                      <label className="form-label">Nama Produk</label>
                      <input
                        type="text"
                        className="form-control"
                        id="namaProduk"
                        aria-describedby="namaHelp"
                        placeholder="Nama Produk"
                        value={name || ""}
                        onChange={(e) => {
                          setName(e.target.value);
                        }}
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Harga Produk</label>
                      <input
                        type="text"
                        className="form-control"
                        id="exampleHarga"
                        aria-describedby="hargaHelp"
                        placeholder="Rp 0,00"
                        value={harga || ""}
                        onChange={(e) => setHarga(e.target.value)}
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Kategori</label>
                      {dataCategory.length === 0 ? (
                        <p>Loading...</p>
                      ) : (
                        <Select
                          id="kategoriProduk"
                          closeMenuOnSelect={false}
                          // components={animatedComponents}
                          // defaultValue={[colourOptions[4], colourOptions[5]]}
                          isMulti
                          value={categoryy === null ? dataCategory : categoryy}
                          options={options}
                          onChange={(val) => {
                            setCategory(val);
                            const dataCategory = val.map((id) => {
                              // console.log(id.value);
                              return id.value;
                            });
                            setIdCategory(dataCategory);
                          }}
                        />
                      )}
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Ukuran Sepatu</label>
                      <input
                        type="integer"
                        className="form-control"
                        id="exampleUkuran"
                        aria-describedby="sizeHelp"
                        placeholder="40"
                        value={sizes || ""}
                        onChange={(e) => setSize(e.target.value)}
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Deskripsi</label>
                      <textarea
                        class="form-control"
                        id="exampleFormControlTextarea1"
                        rows="3"
                        placeholder="Contoh: Jalan Ikan Hiu 33"
                        value={description || ""}
                        onChange={(e) => setDescription(e.target.value)}
                      ></textarea>
                    </div>
                    <div className="row">
                      <div className="col-lg-6">
                        <button
                          type="submit"
                          className="btn btn-outline w-100 mb-3"
                          style={{ borderColor: "#181818", color: "#181818" }}
                          onClick={handleDraft}
                        >
                          Tambahkan ke Draft
                        </button>
                      </div>
                      <div className="col-lg-6">
                        <button
                          type="submit"
                          className="btn w-100 mb-3"
                          style={{ backgroundColor: "#181818", color: "#FFFF" }}
                          // onClick={() => (id ? handleEditSubmit() : handleSubmit())}
                          onClick={(e) => {
                            e.preventDefault();
                            const prices = parseInt(harga);
                            const size = parseInt(sizes);
                            const data = JSON.stringify({
                              name: name,
                              price: prices,
                              description: description,
                              category: idCategory,
                              size: size,
                            });
                            dispatch(editProduct(id, data, navigate));
                            resetForm();
                          }}
                        >
                          Ubah data
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
}

export default InfoProdukEdit;
