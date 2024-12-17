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
    <div className={`d-flex flex-column flex-root vh-100 ${theme}`} id="kt_app_root">
      <div className="d-flex flex-column flex-lg-row flex-column-fluid">
        <div className="d-flex flex-lg-row-fluid w-lg-50 bgi-size-cover bgi-position-center" style={{ backgroundImage: "url(assets/media/misc/auth-bg.png)" }}>
          <div className="d-flex flex-column flex-center p-6 p-lg-10 w-100">
            <a href="../../../index.html" className="mb-0 mb-lg-20">
              <img alt="Logo" src="assets/media/logos/logo_dark.svg" className="h-60px h-lg-90px" />
            </a>
            <img className="d-none d-lg-block mx-auto w-300px w-lg-75 w-xl-500px mb-10 mb-lg-20" src="assets/media/misc/auth-screens.png" alt="" />
            {/* <h1 className="d-none d-lg-block text-white fs-2qx fw-bold text-center mb-7">Fast, Efficient and Productive</h1> */}
            <div className="d-none d-lg-block text-white fs-base text-center">
              In this kind of post, <a href="#" className="opacity-75-hover text-warning fw-semibold me-1">the blogger</a> introduces a person they’ve interviewed <br /> and provides some background information about <a href="#" className="opacity-75-hover text-warning fw-semibold me-1">the interviewee</a> and their <br /> work following this is a transcript of the interview.
            </div>
          </div>
        </div>
        <div className="d-flex flex-column flex-lg-row-fluid w-lg-50 p-10">
          <div className="d-flex flex-center flex-column flex-lg-row-fluid">
            <div className="w-lg-500px p-10">
              <form className="form w-100" noValidate id="kt_sign_in_form" onSubmit={handleSubmit}>
                <div className="text-center mb-11">
                  <h1 className="text-gray-900 fw-bolder mb-3">Sign In</h1>
                  <div className="text-gray-500 fw-semibold fs-6">Your Social Campaigns</div>
                </div>
                {/* <div className="row g-3 mb-9">
                  <div className="col-md-6">
                    <a href="#" className="btn btn-flex btn-outline btn-text-gray-700 btn-active-color-primary bg-state-light flex-center text-nowrap w-100">
                      <img alt="Logo" src="assets/media/svg/brand-logos/google-icon.svg" className="h-15px me-3" />
                      Sign in with Google
                    </a>
                  </div>
                  <div className="col-md-6">
                    <a href="#" className="btn btn-flex btn-outline btn-text-gray-700 btn-active-color-primary bg-state-light flex-center text-nowrap w-100">
                      <img alt="Logo" src="assets/media/svg/brand-logos/apple-black.svg" className="theme-light-show h-15px me-3" />
                      <img alt="Logo" src="assets/media/svg/brand-logos/apple-black-dark.svg" className="theme-dark-show h-15px me-3" />
                      Sign in with Apple
                    </a>
                  </div>
                </div> */}
                {/* <div className="separator separator-content my-14">
                  <span className="w-125px text-gray-500 fw-semibold fs-7">Or with email</span>
                </div> */}
                <div className="fv-row mb-8">
                  <input type="text" placeholder="Email" name="email" autoComplete="off" className="form-control bg-transparent" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div className="fv-row mb-3">
                  <input type="password" placeholder="Password" name="password" autoComplete="off" className="form-control bg-transparent" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>
                <div className="d-flex flex-stack flex-wrap gap-3 fs-base fw-semibold mb-8">
                  <div></div>
                  <a href="reset-password.html" className="link-primary">Forgot Password ?</a>
                </div>
                <div className="d-grid mb-10">
                  <button type="submit" id="kt_sign_in_submit" className="btn btn-primary">
                    <span className="indicator-label">Connexion</span>
                    <span className="indicator-progress">Please wait... <span className="spinner-border spinner-border-sm align-middle ms-2"></span></span>
                  </button>
                </div>
                <div className="text-gray-500 text-center fw-semibold fs-6">Not a Member yet? <a href="sign-up.html" className="link-primary">Sign up</a></div>
                {error && <div className="error-message text-center text-danger mt-3">{error}</div>}
              </form>
            </div>
          </div>
          {/* <div className="d-flex flex-center flex-wrap px-5">
            <div className="d-flex fw-semibold text-primary fs-base">
              <a href="../../../../../../keenthemes.com/index.html" className="px-5" target="_blank">Terms</a>
              <a href="../../../../../../devs.keenthemes.com/index.html" className="px-5" target="_blank">Plans</a>
              <a href="../../../../../../themes.getbootstrap.com/product/keen-the-ultimate-bootstrap-admin-theme/index.html" className="px-5" target="_blank">Contact Us</a>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default SignIn;
