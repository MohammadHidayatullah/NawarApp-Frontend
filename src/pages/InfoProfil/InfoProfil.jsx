import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import "./InfoProfil.css";
import { AiOutlineCamera } from "react-icons/ai";
import { FiArrowLeft, FiPlus } from "react-icons/fi";
import Navbar from "../../components/Navbar/Navbar";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import {
  getProfile,
  createProfile,
  editProfile,
  deleteProfile,
} from "../../redux/action/profileAction";

function InfoProfil(props) {
  const [avatar, setAvatar] = useState();
  const [name, setName] = useState();
  const [province, setProvince] = useState();
  const [city, setCity] = useState();
  const [address, setAddress] = useState();
  const [phone, setPhone] = useState();
  const [id, setId] = useState();

  const dispatch = useDispatch();

  const { isLoading: loadingProfile, data: profileData } = useSelector(
    (state) => state.profile
  );

  useEffect(() => {
    dispatch(getProfile());
  }, []);

  const resetForm = () => {
    setAvatar("");
    setName("");
    setProvince("");
    setCity("");
    setAddress("");
    setPhone("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      avatar,
      name,
      province,
      city,
      address,
      phone,
    };
    dispatch(editProfile(data));
    resetForm();
  };

  // Upload image function

  const uploadedImage = React.useRef(null);
  const imageUploader = React.useRef(null);
  const [file, setFile] = useState(null);

  const handleImageUpload = (e) => {
    const [file] = e.target.files;
    setFile(e.target.file);
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

  return (
    <>
      {width >= 576 && <Navbar />}
      {/* <Navbar /> */}
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
                  src="http://www-cdr.stanford.edu/~petrie/blank.gif"
                  alt=""
                />
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
                    value={name}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Provinsi*</label>
                  <select
                    className="form-select"
                    aria-label=".form-select-sm multiple select example"
                    style={{ height: "28,5pt" }}
                    value={province}
                  >
                    <option selected>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label className="form-label">Kota*</label>
                  <select
                    className="form-select"
                    aria-label=".form-select-sm multiple select example"
                    style={{ height: "28,5pt" }}
                    value={city}
                  >
                    <option selected>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label className="form-label">Alamat*</label>
                  <textarea
                    class="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    placeholder="Contoh: Jalan Ikan Hiu 33"
                    value={address}
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
                    value={phone}
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
    </>
  );
}

export default InfoProfil;
