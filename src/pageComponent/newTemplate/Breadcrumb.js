import React, { useState } from 'react';
import { useTheme } from '../../contexts/ThemeProvider';
import { useNavigate } from 'react-router-dom';
import {
  handleLogin
} from '../../utils/formHandlers'; // Assurez-vous d'importer correctement le chemin vers handleLogin

const SignIn = () => {
  const { theme } = useTheme();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Obtention de la fonction de navigation de react-router-dom

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const params = new URLSearchParams(); // Création d'un nouvel objet URLSearchParams
    params.append('mode', 'doConnexion'); // Ajout du mode de connexion
    params.append('STR_UTILOGIN', email); // Ajout de l'email
    params.append('STR_UTIPASSWORD', password); // Ajout du mot de passe
    
    handleLogin(e, params, setError, navigate, "/tableau-bord/"); // Appel de handleLogin avec navigate comme paramètre de navigation et "/dashboard" comme chemin de redirection
  };

  return (
    <>

  <style
    dangerouslySetInnerHTML={{
      __html:
        ':root{--adminuiux-content-font:"Open Sans",sans-serif;--adminuiux-content-font-weight:400;--adminuiux-title-font:"Lexend",sans-serif;--adminuiux-title-font-weight:600}'
    }}
  />
  {/* Mirrored from www.adminuiux.com/adminuiux/investment-uiux/investment-contactus.html by HTTrack Website Copier/3.x [XR&CO'2014], Tue, 03 Sep 2024 14:03:19 GMT */}
  {/* <div className="pageloader">
    <div className="container h-100">
      <div className="row justify-content-center align-items-center text-center h-100">
        <div className="col-12 mb-auto pt-4" />
        <div className="col-auto">
          <img src="assets/img/logo.svg" alt="" className="height-60 mb-3" />
          <p className="h6 mb-0">AdminUIUX</p>
          <p className="h3 mb-4">Investment</p>
          <div className="loader10 mb-2 mx-auto" />
        </div>
        <div className="col-12 mt-auto pb-4">
          <p className="text-secondary">
            Please wait we are preparing awesome things to preview...
          </p>
        </div>
      </div>
    </div>
  </div> */}
  

  <div className="row gx-3 align-items-center">
          <div className="col-12 col-sm">
            <nav aria-label="breadcrumb" className="mb-2">
              <ol className="breadcrumb mb-0">
                <li className="breadcrumb-item bi">
                  <a href="investment-dashboard.html">Home</a>
                </li>
                <li className="breadcrumb-item bi">
                  <a href="investment-pages.html">Pages</a>
                </li>
                <li className="breadcrumb-item active bi" aria-current="page">
                  Contact us
                </li>
              </ol>
            </nav>
            <h5>Contact us</h5>
          </div>
          <div className="col-auto" />
        </div>
</>

  );
};

export default SignIn;
