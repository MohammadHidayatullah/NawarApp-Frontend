import React, { useEffect, useState } from "react";
import "./Register.css";
import Nawar2 from "../../assets/img/Heading (1).png";
import Eye2 from "../../assets/icon/fi_eye.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Registers() {
    const [dataLogin, setDataLogin] = useState({
        email: "",
        password: "",
    });

    const navigate = useNavigate();

    useEffect(() => {
        if (localStorage.getItem("access_token")) {
            navigate("/");
        }
    });

    const handleSubmit = async () => {
        try {
            const res = await axios({
                method: "post",
                // url: "https://rent-car-appx.herokuapp.com/admin/auth/login",
                data: dataLogin,
            });
            // console.log(res.data);

            if (res.status === 201 && res.data.role === "admin") {
                localStorage.setItem("access_token", res.data.access_token);
                navigate("/dashboard", { replace: true });
            }

            if (res.status === 201 && res.data.role === "Customer") {
                localStorage.setItem("access_token", res.data.access_token);
                navigate("/", { replace: true });
            }
        } catch (error) {
            alert("data yang anda masukan salah!");
            console.log(error);
            setDataLogin({
                email: "",
                password: "",
            });
        }
    };

    return (
        <>
            <section className="vh-100">
                <div className="container-fluid">
                    <div className="row login">
                        <div className="col-6 left-side">
                            <img
                                src={Nawar2}
                                className="w-100 vh-100"
                                style={{ objectFit: "cover" }}
                                alt=""
                            />
                        </div>
                        <div className="col-6">
                            <div className="form-head">
                                <h1>Daftar</h1>
                            </div>

                            <div className="form-content">
                                <div className="mb-3">
                                    <label className="form-label">Nama</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="inputEmail"
                                        placeholder="Nama Lengkap"
                                        value={dataLogin.email}
                                        onChange={(e) =>
                                            setDataLogin({
                                                ...dataLogin,
                                                email: e.target.value,
                                            })
                                        }
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Email</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="inputEmail"
                                        placeholder="Contoh: johndee@gmail.com"
                                        value={dataLogin.email}
                                        onChange={(e) =>
                                            setDataLogin({
                                                ...dataLogin,
                                                email: e.target.value,
                                            })
                                        }
                                    />
                                </div>
                                <div className="input-icons mb-3">
                                    <label className="form-label">Password</label>
                                    <div className="inner-addon right-addon">
                                        <i className=""><img src={Eye2} alt="" className="icon" /></i>
                                        <input 
                                            type="password" 
                                            className="form-control"
                                            id="inputPassword" 
                                            placeholder="Masukkan Password" 
                                            value={dataLogin.password}
                                            onChange={(e) =>
                                                setDataLogin({
                                                    ...dataLogin,
                                                    password: e.target.value,
                                                })
                                            }
                                        />                                     
                                    </div>
                                </div>
                                <button
                                    className="btn-masuk"
                                    onClick={() => handleSubmit()}
                                >
                                    Masuk
                                </button>
                                <div className="akun">
                                    <p style={{ textAlign: 'center' }} >
                                        Sudah Punya Akun? <a href="login">Masuk Disini</a>
                                    </p>
                                </div>
                              
                                {/* <button className="btn btn-back" 
                                    onClick={() => navigate("/")}
                                >
                                     Sudah Punya Akun? Masuk Disini
                                </button> */}
                                </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}


