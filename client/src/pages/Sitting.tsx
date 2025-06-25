import React, { useState } from 'react';
import "./Sitting.css";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import CrossSitting from "../assets/images/CrossSitting.svg"


function Sitting() {
  return (
    <>

      <div className="rectangle">
        <div className='subrectangle'>



        </div>
        <div className='subrectangle right'>
          <button type='button' className='modifier'>modifier le profil


          </button>

          <button type='button' className='deconnect'>déconnexion

          </button>

        </div>

        <div className='trait'>


        </div>

        <img className='crossitting' src={CrossSitting} alt="Cross" />






      </div>



    </>
  );
}

export default Sitting;
