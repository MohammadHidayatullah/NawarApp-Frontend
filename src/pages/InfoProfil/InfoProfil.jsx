import React, { useState } from "react";
import "./InfoProfil.css";
import { AiOutlineCamera } from "react-icons/ai";
import { FiArrowLeft } from "react-icons/fi";
import Navbar from "../../components/Navbar/Navbar";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import {
  getProfile,
  // createProfile,
  editProfile,
  // deleteProfile,
} from "../../redux/action/profileAction";
import { getAllProvince } from "../../redux/action/provinceAction";
import { getAllCity } from "../../redux/action/cityAction";

function InfoProfil(props) {
  const dispatch = useDispatch();

  const { isLoading: loadingProfile, data: profileData } = useSelector(
    (state) => state.profile
  );

  const {
    // isLoading: loadingProvince,
    data: provinceData,
  } = useSelector((state) => state.province);

  const {
    // isLoading: loadingCity,
    data: cityData,
  } = useSelector((state) => state.city);

  const [avatar, setAvatar] = useState();
  const [name, setName] = useState();
  const [province, setProvince] = useState();
  const [city, setCity] = useState();
  const [address, setAddress] = useState();
  const [phone, setPhone] = useState();
  // console.log(name, "<= Ini adalah name");
  // const [id, setId] = useState();

  useEffect(() => {
    if (profileData.length === 0) {
      dispatch(getProfile());
      return;
    }
    setName(profileData.name);
    setAddress(profileData.address);
    setPhone(profileData.phone);
  }, [profileData]);

  // useEffect(() => {
  //   dispatch(getProfile());
  // }, []);

  useEffect(() => {
    dispatch(getAllProvince());
  }, []);

  useEffect(() => {
    dispatch(getAllCity(province));
  }, [province]);

  const resetForm = () => {
    setAvatar("");
    setName("");
    setProvince("");
    setCity("");
    setAddress("");
    setPhone("");
  };

  // Upload image function

  const uploadedImage = React.useRef(null);
  const imageUploader = React.useRef(null);
  const [file, setFile] = useState(null);

  const handleImageUpload = (e) => {
    const [file] = e.target.files;
    setFile(e.target.files[0]);
    if (file) {
      const reader = new FileReader();
      const { current } = uploadedImage;
      current.file = file;
      reader.onload = (e) => {
        current.src = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      avatar: file,
      name,
      province,
      city,
      address,
      phone,
    };
    // console.log(data, "<= Ini data dari JSX");
    let formData = new FormData();

    // Loop through the object
    for (let [key, val] of Object.entries(data)) {
      // append each item to the formData (converted to JSON strings)
      formData.append(key, val);
    }
    console.log(data);
    dispatch(editProfile(formData));
    resetForm();
  };

  // Fungsi untuk menangani ukuran responsive mobile

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

  // Fungsi navigasi

  const navigate = useNavigate();

  const navHome = () => {
    navigate("/");
  };

  const success = (response) => {
    if (response.status === 201) {
      navigate("/daftar-jual");
    }
  };

  // console.log(province, "<= Ini Data City");
  // console.log(city, "<= Ini Data City");
  // console.log(provinceData, "DATA PROVINCE PROFILL COOKKK");
  console.log(profileData, "<= Ini profile data");
  // console.log(cityData, "<= Ini data city");
  // console.log(name);
  // console.log(profileData.name);
  return (
    <>
      {width >= 576 && <Navbar />}
      {/* <Navbar /> */}
      {profileData.length === 0 ? (
        <p className="mt-3 ms-3 fw-bold">Loading...</p>
      ) : (
        <div style={{ padding: "3%" }}>
          <div className="container" style={{ maxWidth: "568px" }}>
            <button className="d-none d-sm-block arrow-left" onClick={navHome}>
              <FiArrowLeft size={22} />
            </button>
            {width <= 576 && (
              <div className="d-flex justify-content-between">
                <button className=" arrow-left" onClick={navHome}>
                  <FiArrowLeft size={22} />
                </button>
                <p className="mb-4" style={{ marginLeft: "-28.84px" }}>
                  <b>Lengkapi Info Akun</b>
                </p>
                <p></p>
              </div>
            )}
            <div className="row ">
              <div className="col-lg-12 d-flex justify-content-center">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  ref={imageUploader}
                  value={avatar}
                  style={{
                    display: "none",
                  }}
                />
                <div
                  style={{
                    position: "relative",
                  }}
                  onClick={() => imageUploader.current.click()}
                >
                  <img
                    ref={uploadedImage}
                    style={{
                      width: "96px",
                      height: "96px",
                      backgroundColor: "#fafafa",
                      borderRadius: "12px",
                      zIndex: 10,
                      cursor: "pointer",
                    }}
                    src={
                      profileData.avatar === null
                        ? "http://www-cdr.stanford.edu/~petrie/blank.gif"
                        : profileData.avatar
                    }
                    // src={profileData.avatar}

                    alt=""
                  />
                  {profileData.avatar === null && (
                    <AiOutlineCamera
                      className={file !== null && "isi"}
                      style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        fontSize: "22px",
                        color: "#ced4da",
                        zIndex: 9,
                      }}
                    />
                  )}
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <form>
                  <div className="mb-3">
                    <label className="form-label">Nama*</label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputNamaProfile"
                      aria-describedby="emailHelp"
                      placeholder="Nama"
                      // defaultValue={profileData.name}
                      value={name || ""}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Provinsi*</label>
                    <select
                      className="form-select"
                      aria-label=".form-select-sm multiple select example"
                      style={{ height: "28,5pt" }}
                      // defaultValue={profileData.province}
                      value={province}
                      onChange={(e) => setProvince(e.target.value)}
                    >
                      <option>Open this select menu</option>
                      {provinceData.length === 0 ? (
                        <option value="1">Data Kosong</option>
                      ) : (
                        provinceData?.map((provinsi) => {
                          return (
                            <option
                              key={provinsi.id}
                              value={parseInt(provinsi.id)}
                            >
                              {provinsi.name}
                            </option>
                          );
                        })
                      )}
                    </select>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Kota*</label>
                    <select
                      className="form-select"
                      aria-label=".form-select-sm multiple select example"
                      style={{ height: "28,5pt" }}
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                    >
                      <option>Open this select menu</option>
                      {cityData.length === 0 ? (
                        <option value="1">Data Kosong</option>
                      ) : (
                        cityData.map((res) => {
                          return (
                            <option value={parseInt(res.id)}>{res.name}</option>
                          );
                        })
                      )}
                    </select>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Alamat*</label>
                    <textarea
                      className="form-control"
                      id="exampleFormControlTextarea1"
                      rows="3"
                      placeholder="Contoh: Jalan Ikan Hiu 33"
                      value={address || ""}
                      onChange={(e) => setAddress(e.target.value)}
                    ></textarea>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">No Handphone*</label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="contoh: +628123456789"
                      value={phone || ""}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn w-100"
                    style={{ backgroundColor: "#181818", color: "#FFFF" }}
                    onClick={handleSubmit}
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default InfoProfil;
