import "./Register.css";
import Nawar from "../../assets/img/Heading (5).png";
import Eye from "../../assets/icon/fi_eye.svg";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../redux/action/registerAction";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();
//   const [input, setInput] = useState({
//     email: "",
//     password: "",
//   });
  const [dataRegister, setDataRegister] = useState({
    name: "",
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  const { isLoading, dataAuth, error } = useSelector((state) => state.auth);

  // const handleChange = (event) => {
  //   dispatch({
  //     type: `ERROR`,
  //     error: null,
  //   });
  //   let value = event.target.value;
  //   let name = event.target.value;

  //   setDataRegister({ ...dataRegister, [name]: value });
  // };

  const handleRegister = () => {
    dispatch( register(dataRegister.name, dataRegister.email, dataRegister.password, navigate));
    // console.log(dataRegister);
  };

  return (
    <>
      <section className="vh-100">
        <div className="container-fluid register-row">
          <div className="row register">
            <div className="col-sm-6 col-xs-12 left-side">
              <img
                src={Nawar}
                className="w-100 vh-100"
                style={{ objectFit: "cover" }}
                alt=""
              />
            </div>

            <div className="col-sm-6 col-xs-12">
              <div className="form-head">
                <h1>Daftar</h1>

                {/* ===== Validasi =====  */}

                {/* {error === null ? (
                  ""
                ) : (
                  <div
                    style={{
                      backgroundColor: "#fbe7e9",
                      padding: "12px 16px",
                      borderRadius: 5,
                    }}
                  >
                    <Text style={{ color: "#D00C1A" }}>
                      Masukkan username dan password yang benar. Perhatikan
                      penggunaan huruf kapital. Kalau tetap tidak bisa, API
                      sedang maintenance
                    </Text>
                  </div>
                )} */}
              </div>

              <div className="form-content">
              <div className="mb-3">
                  <label className="form-label">Nama</label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputNama"
                    placeholder="Nama Lengkap"
                    value={dataRegister.name}
                    onChange={(e) =>
                      setDataRegister({
                        ...dataRegister,
                        name: e.target.value,
                      })
                    }
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="inputEmail"
                    placeholder="Contoh: johndee@gmail.com"
                    value={dataRegister.email}
                    onChange={(e) =>
                      setDataRegister({
                        ...dataRegister,
                        email: e.target.value,
                      })
                    }
                    required
                  />
                </div>

                <div className="input-icons mb-3">
                  <label className="form-label">Password</label>
                  <div className="inner-addon right-addon">
                    <i className="">
                      <img src={Eye} alt="" className="icon" />
                    </i>
                    <input
                      type="password"
                      className="form-control"
                      id="inputPassword"
                      placeholder="Masukkan Password"
                      value={dataRegister.password}
                      onChange={(e) =>
                        setDataRegister({
                          ...dataRegister,
                          password: e.target.value,
                        })
                      }
                      required
                    />
                  </div>
                </div>
                <Link to="/login">
                    <button
                    className="btn-masuk"
                    onClick={handleRegister}
                    loading={isLoading}
                    >
                    Daftar
                    </button>
                </Link>
                
                <div className="akun">
                  <p style={{ textAlign: "center" }}>
                    Sudah Punya Akun? <a href="login">Masuk Disini</a>
                  </p>
                </div>
                {/* <button className="btn btn-back"
                       onClick={() => navigate("/")}
                 >
                      Belum Punya Akun? <a href='#'>Daftar Disini</a>
                </button> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
