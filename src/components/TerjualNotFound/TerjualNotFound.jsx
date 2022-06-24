/** @format */

import React from "react";
import notfound from "../../assets/img/not-found.svg";
import './TerjualNotFound.css';

function TerjualNotFound() {
  return (
    <div className='diminati-not-found d-flex'>
      <img src={notfound} className='img-not-found mt-2' alt='not-found' />
      <p className='not-found-desc text-center mt-3'>
        Belum ada produkmu yang terjual nih, <br /> sabar ya rejeki nggak
        kemana kok
      </p>
    </div>
  );
}

export default TerjualNotFound;
