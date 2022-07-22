/** @format */

import React from "react";
import { Link } from "react-router-dom";
import tes from "../../img/profile.jpg";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getProfile } from "../../redux/action/profileAction";

function DaftarJualHeader() {
  const dispatch = useDispatch();
  const { isLoading, data: profileData } = useSelector(
    (state) => state.profile
  );
  const testData = useSelector((state) => state);
  console.log(testData);

  useEffect(() => {
    dispatch(getProfile());
  }, [dispatch]);

  // console.log("profileData", profileData, "data");

  return (
    <div className='row mb-3'>
      <div className='col-lg-12'>
        <h1 className='judul mb-4'>Daftar Jual Saya</h1>
        <div
          className='card w-100 p-3'
          style={{
            borderRadius: "16px",
            boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.15)",
          }}>
         
            <div className='row'>
              {profileData !== null ? (
                <div className='col-lg-12 d-flex justify-content-between'>
                  <div className='d-flex align-items-center'>
                    <img
                      className='me-3'
                      src={profileData.avatar}
                      alt=''
                      style={{
                        maxWidth: "48px",
                        maxHeight: "48px",
                        borderRadius: "12px",
                      }}
                    />
                    <div className='text d-flex flex-column'>
                      <p className='mb-2 p-0' id='penjual'>
                        {profileData.name}
                      </p>
                      <p className='m-0 p-0' id='kota'>
                        {profileData.address}
                      </p>
                    </div>
                  </div>
                  <div className='d-flex align-items-center'>
                    <Link to='profil'>
                      <button className='edit'>Edit</button>
                    </Link>
                  </div>
                </div>
              ) : (
                null
              )}
            </div>
        </div>
      </div>
    </div>
  );
}

export default DaftarJualHeader;
