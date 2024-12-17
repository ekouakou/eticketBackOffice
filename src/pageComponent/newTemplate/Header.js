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

  const toggleSidebar = () => {
    const body = document.body;
    if (window.innerWidth >= 992) {
      body.classList.toggle("sidebar-close");
    } else {
      body.classList.toggle("sidebar-open");
    }
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
  

  <header className="adminuiux-header">
    <nav className="navbar navbar-expand-lg fixed-top">
      <div className="container-fluid">
        <button
          className="btn btn-link btn-square sidebar-toggler"
          type="button"
          onClick={toggleSidebar}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-menu sidebar-svg"
          >
            <line x1={3} y1={12} x2={21} y2={12} />
            <line x1={3} y1={6} x2={21} y2={6} />
            <line x1={3} y1={18} x2={21} y2={18} />
          </svg>
        </button>{" "}
        <a className="navbar-brand" href="investment-dashboard.html">
          <img data-bs-img="light" src="assets/img/logo-light.svg" alt="" />{" "}
          <img data-bs-img="dark" src="assets/img/logo.svg" alt="" />
          <div className="">
            <span className="h4">
              Investment<b>UX</b>
            </span>
            <p className="company-tagline">AdminUIUX HTML template</p>
          </div>
        </a>
        <div
          className="collapse navbar-collapse right-in-device justify-content-center"
          id="header-navbar"
        >
          <ul className="navbar-nav mx-lg-3 mb-2 mb-md-0">
            <li className="nav-item">
              <a className="nav-link" href="investment-dashboard.html">
                Dashboard
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="investment-portfolio.html">
                Portfolio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="investment-transaction.html">
                Transaction
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="investment-blogs.html">
                News
              </a>
            </li>
          </ul>
        </div>
        <div className="ms-auto">
          <button
            className="btn btn-link btn-square btn-icon btn-link-header"
            type="button"
            onclick="openSearch()"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-search"
            >
              <circle cx={11} cy={11} r={8} />
              <line x1={21} y1={21} x2="16.65" y2="16.65" />
            </svg>
          </button>{" "}
          <button
            className="btn btn-link btn-square btnsunmoon btn-link-header"
            id="btn-layout-modes-dark-page"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-sun sun mx-auto"
            >
              <circle cx={12} cy={12} r={5} />
              <line x1={12} y1={1} x2={12} y2={3} />
              <line x1={12} y1={21} x2={12} y2={23} />
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
              <line x1={1} y1={12} x2={3} y2={12} />
              <line x1={21} y1={12} x2={23} y2={12} />
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
            </svg>{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-moon moon mx-auto"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </svg>
          </button>
          <div className="dropdown d-none d-sm-inline-block">
            <button
              className="btn btn-link btn-square btn-icon btn-link-header dropdown-toggle no-caret"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-grid"
              >
                <rect x={3} y={3} width={7} height={7} />
                <rect x={14} y={3} width={7} height={7} />
                <rect x={14} y={14} width={7} height={7} />
                <rect x={3} y={14} width={7} height={7} />
              </svg>
            </button>
            <div className="dropdown-menu dropdown-menu-end width-300 pt-0 px-0">
              <div className="bg-theme-1-space rounded py-3 mb-2 dropdown-dontclose text-center">
                <p className="mb-0">Applications</p>
                <p className="opacity-50 small">Make your app innovative</p>
              </div>
              <div className="px-2">
                <div className="row g-0 text-center mb-2">
                  <div className="col-4">
                    <a
                      className="dropdown-item square-item"
                      href="app-finance.html"
                    >
                      <div className="avatar avatar-40 rounded mb-2">
                        <i className="bi bi-bank fs-4 mx-0" />
                      </div>
                      <p className="mb-0">Finance</p>
                      <p className="fs-12 opacity-50 mb-2">Accounting</p>
                    </a>
                  </div>
                  <div className="col-4">
                    <a
                      className="dropdown-item square-item"
                      href="app-network.html"
                    >
                      <div className="avatar avatar-40 rounded mb-2">
                        <i className="bi bi-globe fs-4 mx-0" />
                      </div>
                      <p className="mb-0">Network</p>
                      <p className="fs-12 opacity-50 mb-2">Stabilize</p>
                    </a>
                  </div>
                  <div className="col-4">
                    <a
                      className="dropdown-item square-item"
                      href="app-ecommerce.html"
                    >
                      <div className="avatar avatar-40 rounded mb-2">
                        <i className="bi bi-box fs-4 mx-0" />
                      </div>
                      <p className="mb-0">Inventory</p>
                      <p className="fs-12 opacity-50 mb-2">Assuring</p>
                    </a>
                  </div>
                  <div className="col-4">
                    <a
                      className="dropdown-item square-item"
                      href="app-project.html"
                    >
                      <div className="avatar avatar-40 rounded mb-2">
                        <i className="bi bi-folder fs-4 mx-0" />
                      </div>
                      <p className="mb-0">Project</p>
                      <p className="fs-12 opacity-50 mb-2">Management</p>
                    </a>
                  </div>
                  <div className="col-4">
                    <a
                      className="dropdown-item square-item"
                      href="app-social.html"
                    >
                      <div className="avatar avatar-40 rounded mb-2">
                        <i className="bi bi-people fs-4 mx-0" />
                      </div>
                      <p className="mb-0">Social</p>
                      <p className="fs-12 opacity-50 mb-2">Tracking</p>
                    </a>
                  </div>
                  <div className="col-4">
                    <a
                      className="dropdown-item square-item"
                      href="app-learning.html"
                    >
                      <div className="avatar avatar-40 rounded mb-2">
                        <i className="bi bi-journal-bookmark fs-4 mx-0" />
                      </div>
                      <p className="mb-0">Learning</p>
                      <p className="fs-12 opacity-50 mb-2">Make-easy</p>
                    </a>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <a className="btn btn-link text-center" href="app-demo.html">
                  View all <i className="bi bi-arrow-right fs-14" />
                </a>
              </div>
            </div>
          </div>
          <div className="dropdown d-none d-sm-inline-block">
            <button
              className="btn btn-link btn-square btn-icon btn-link-header dropdown-toggle no-caret"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i className="bi bi-translate" />
            </button>
            <ul className="dropdown-menu dropdown-menu-end">
              <li>
                <a className="dropdown-item active" data-value="EN">
                  EN - English
                </a>
              </li>
              <li>
                <a className="dropdown-item" data-value="FR">
                  FR - French
                </a>
              </li>
              <li>
                <a className="dropdown-item" data-value="CH">
                  CH - Chinese
                </a>
              </li>
              <li>
                <a className="dropdown-item" data-value="HI">
                  HI - Hindi
                </a>
              </li>
            </ul>
          </div>
          <div className="dropdown d-inline-block">
            <button
              className="btn btn-link btn-square btn-icon btn-link-header dropdown-toggle no-caret"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-bell"
              >
                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                <path d="M13.73 21a2 2 0 0 1-3.46 0" />
              </svg>{" "}
              <span className="position-absolute top-0 end-0 badge rounded-pill bg-danger p-1">
                <small>9+</small>{" "}
                <span className="visually-hidden">unread messages</span>
              </span>
            </button>
            <ul className="dropdown-menu dropdown-menu-end notification-dd sm-mi-95px">
              <li>
                <a className="dropdown-item p-2" href="#">
                  <div className="row gx-3">
                    <div className="col-auto">
                      <figure className="avatar avatar-40 rounded-circle bg-pink">
                        <i className="bi bi-gift text-white" />
                      </figure>
                    </div>
                    <div className="col">
                      <p className="mb-2 small">
                        Congratulation! Your property{" "}
                        <span className="fw-bold">#H10215</span> has reached 1000
                        views.
                      </p>
                      <span className="row">
                        <span className="col">
                          <span className="badge badge-light rounded-pill text-bg-warning small">
                            Directory
                          </span>
                        </span>{" "}
                        <span className="col-auto small opacity-75">1:00 am</span>
                      </span>
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a className="dropdown-item p-2" href="#">
                  <div className="row gx-3">
                    <div className="col-auto">
                      <figure className="avatar avatar-40 rounded-circle bg-success">
                        <i className="bi bi-patch-check text-white" />
                      </figure>
                    </div>
                    <div className="col">
                      <p className="mb-2 small">
                        Your property <span className="fw-bold">#H10215</span> is
                        published and live now.
                      </p>
                      <span className="row">
                        <span className="col">
                          <span className="badge badge-light rounded-pill text-bg-primary small">
                            System
                          </span>
                        </span>{" "}
                        <span className="col-auto small opacity-75">1:00 am</span>
                      </span>
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a className="dropdown-item p-2" href="#">
                  <div className="row gx-3">
                    <div className="col-auto">
                      <figure className="avatar avatar-40 rounded-circle bg-info">
                        <i className="bi bi-clipboard-check text-white" />
                      </figure>
                    </div>
                    <div className="col">
                      <p className="mb-2 small">
                        User <span className="fw-bold">Rahana</span> has updated{" "}
                        <span className="fw-bold">#H10215</span> property.
                      </p>
                      <span className="row">
                        <span className="col">
                          <span className="badge badge-light rounded-pill text-bg-success small">
                            team
                          </span>
                        </span>{" "}
                        <span className="col-auto small opacity-75">1:00 am</span>
                      </span>
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <div className="dropdown-item p-2">
                  <div className="row gx-3">
                    <div className="col-auto">
                      <figure className="avatar avatar-40 rounded-circle bg-warning">
                        <i className="bi bi-bell text-white" />
                      </figure>
                    </div>
                    <div className="col">
                      <p className="mb-2 small">
                        Your subscription going to expire soon. Please{" "}
                        <a href="profile-subscription.html">upgrade</a> to get
                        service interrupt free.
                      </p>
                      <p className="opacity-75 small">4 days ago</p>
                    </div>
                  </div>
                </div>
              </li>
              <li className="text-center">
                <button
                  className="btn btn-link text-center"
                  onclick="notifcationAll()"
                >
                  View all <i className="bi bi-arrow-right fs-14" />
                </button>
              </li>
            </ul>
          </div>
          <div className="dropdown d-inline-block">
            <a
              className="dropdown-toggle btn btn-link btn-square btn-link-header style-none no-caret px-0"
              id="userprofiledd"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              role="button"
            >
              <div className="row gx-0 d-inline-flex">
                <div className="col-auto align-self-center">
                  <figure
                    className="avatar avatar-28 rounded-circle coverimg align-middle"
                    style={{
                      backgroundImage:
                        'url("assets/img/modern-ai-image/user-6.jpg")'
                    }}
                  >
                    <img
                      src="assets/img/modern-ai-image/user-6.jpg"
                      alt=""
                      id="userphotoonboarding2"
                      style={{ display: "none" }}
                    />
                  </figure>
                </div>
              </div>
            </a>
            <div
              className="dropdown-menu dropdown-menu-end width-300 pt-0 px-0 sm-mi-45px"
              aria-labelledby="userprofiledd"
            >
              <div className="bg-theme-1-space rounded py-3 mb-3 dropdown-dontclose">
                <div className="row gx-0">
                  <div className="col-auto px-3">
                    <figure
                      className="avatar avatar-50 rounded-circle coverimg align-middle"
                      style={{
                        backgroundImage:
                          'url("assets/img/modern-ai-image/user-6.jpg")'
                      }}
                    >
                      <img
                        src="assets/img/modern-ai-image/user-6.jpg"
                        alt=""
                        style={{ display: "none" }}
                      />
                    </figure>
                  </div>
                  <div className="col align-self-center">
                    <p className="mb-1">
                      <span>AdminUIUX</span>
                    </p>
                    <p>
                      <i className="bi bi-wallet2 me-2" /> $1100.00{" "}
                      <small className="opacity-50">Balance</small>
                    </p>
                  </div>
                </div>
              </div>
              <div className="px-2">
                <div>
                  <a className="dropdown-item" href="investment-myprofile.html">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-user avatar avatar-18 me-1"
                    >
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                      <circle cx={12} cy={7} r={4} />
                    </svg>{" "}
                    My Profile
                  </a>
                </div>
                <div>
                  <a className="dropdown-item" href="investment-dashboard.html">
                    <div className="row g-0">
                      <div className="col align-self-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather feather-layout avatar avatar-18 me-1"
                        >
                          <rect
                            x={3}
                            y={3}
                            width={18}
                            height={18}
                            rx={2}
                            ry={2}
                          />
                          <line x1={3} y1={9} x2={21} y2={9} />
                          <line x1={9} y1={21} x2={9} y2={9} />
                        </svg>{" "}
                        My Dashboard
                      </div>
                      <div className="col-auto">
                        <figure
                          className="avatar avatar-20 coverimg rounded-circle"
                          style={{
                            backgroundImage:
                              'url("assets/img/modern-ai-image/user-1.jpg")'
                          }}
                        >
                          <img
                            src="assets/img/modern-ai-image/user-1.jpg"
                            alt=""
                            style={{ display: "none" }}
                          />
                        </figure>
                        <figure
                          className="avatar avatar-20 coverimg rounded-circle"
                          style={{
                            backgroundImage:
                              'url("assets/img/modern-ai-image/user-2.jpg")'
                          }}
                        >
                          <img
                            src="assets/img/modern-ai-image/user-2.jpg"
                            alt=""
                            style={{ display: "none" }}
                          />
                        </figure>
                        <figure
                          className="avatar avatar-20 coverimg rounded-circle"
                          style={{
                            backgroundImage:
                              'url("assets/img/modern-ai-image/user-4.jpg")'
                          }}
                        >
                          <img
                            src="assets/img/modern-ai-image/user-4.jpg"
                            alt=""
                            style={{ display: "none" }}
                          />
                        </figure>
                        <div className="avatar avatar-20 bg-theme-1 rounded-circle text-center align-middle">
                          <small className="fs-10 align-middle">9+</small>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                <div>
                  <a className="dropdown-item" href="investment-earning.html">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-dollar-sign avatar avatar-18 me-1"
                    >
                      <line x1={12} y1={1} x2={12} y2={23} />
                      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                    </svg>{" "}
                    Earning
                  </a>
                </div>
                <div>
                  <a
                    className="dropdown-item"
                    href="investment-mysubscription.html"
                  >
                    <div className="row">
                      <div className="col">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather feather-gift avatar avatar-18 me-1"
                        >
                          <polyline points="20 12 20 22 4 22 4 12" />
                          <rect x={2} y={7} width={20} height={5} />
                          <line x1={12} y1={22} x2={12} y2={7} />
                          <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" />
                          <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" />
                        </svg>{" "}
                        Subscription
                      </div>
                      <div className="col-auto">
                        <p className="small text-success">Upgrade</p>
                      </div>
                      <div className="col-auto">
                        <span className="arrow bi bi-chevron-right" />
                      </div>
                    </div>
                  </a>
                </div>
                <div className="dropdown open-left dropdown-dontclose">
                  <a
                    className="dropdown-item"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    role="button"
                  >
                    <div className="row">
                      <div className="col">
                        <i className="bi bi-translate avatar avatar-18 me-1" />{" "}
                        Language
                      </div>
                      <div className="col-auto">
                        <small className="vm">EN - English</small>{" "}
                        <i className="bi bi-translate" />
                      </div>
                      <div className="col-auto">
                        <span className="arrow bi bi-chevron-right" />
                      </div>
                    </div>
                  </a>
                  <div className="dropdown-menu dropdown-menu-end">
                    <div>
                      <a className="dropdown-item active" data-value="EN">
                        EN - English
                      </a>
                    </div>
                    <div>
                      <a className="dropdown-item" data-value="FR">
                        FR - French
                      </a>
                    </div>
                    <div>
                      <a className="dropdown-item" data-value="CH">
                        CH - Chinese
                      </a>
                    </div>
                    <div>
                      <a className="dropdown-item" data-value="HI">
                        HI - Hindi
                      </a>
                    </div>
                  </div>
                </div>
                <div>
                  <a className="dropdown-item" href="investment-settings.html">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-settings avatar avatar-18 me-1"
                    >
                      <circle cx={12} cy={12} r={3} />
                      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
                    </svg>{" "}
                    Account Setting
                  </a>
                </div>
                <div>
                  <a
                    className="dropdown-item theme-red"
                    href="investment-login.html"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-power avatar avatar-18 me-1"
                    >
                      <path d="M18.36 6.64a9 9 0 1 1-12.73 0" />
                      <line x1={12} y1={2} x2={12} y2={12} />
                    </svg>{" "}
                    Logout
                  </a>
                </div>
              </div>
            </div>
          </div>
          <button
            className="navbar-toggler btn btn-link btn-link-header btn-square btn-icon collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#header-navbar"
            aria-controls="header-navbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-more-vertical openbtn"
            >
              <circle cx={12} cy={12} r={1} />
              <circle cx={12} cy={5} r={1} />
              <circle cx={12} cy={19} r={1} />
            </svg>{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-x closebtn"
            >
              <line x1={18} y1={6} x2={6} y2={18} />
              <line x1={6} y1={6} x2={18} y2={18} />
            </svg>
          </button>
        </div>
      </div>
    </nav>
    <div className="adminuiux-search-full">
      <div className="row gx-2 align-items-center">
        <div className="col-auto">
          <button
            className="btn btn-link btn-square"
            type="button"
            onclick="closeSearch()"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-arrow-left"
            >
              <line x1={19} y1={12} x2={5} y2={12} />
              <polyline points="12 19 5 12 12 5" />
            </svg>
          </button>
        </div>
        <div className="col">
          <input
            className="form-control pe-0 border-0"
            type="search"
            placeholder="Type something here..."
          />
        </div>
        <div className="col-auto">
          <div className="dropdown input-group-text border-0 p-0">
            <button
              className="dropdown-toggle btn btn-link btn-square no-caret"
              type="button"
              id="searchfilter2"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-sliders"
              >
                <line x1={4} y1={21} x2={4} y2={14} />
                <line x1={4} y1={10} x2={4} y2={3} />
                <line x1={12} y1={21} x2={12} y2={12} />
                <line x1={12} y1={8} x2={12} y2={3} />
                <line x1={20} y1={21} x2={20} y2={16} />
                <line x1={20} y1={12} x2={20} y2={3} />
                <line x1={1} y1={14} x2={7} y2={14} />
                <line x1={9} y1={8} x2={15} y2={8} />
                <line x1={17} y1={16} x2={23} y2={16} />
              </svg>
            </button>
            <div className="dropdown-menu dropdown-menu-end dropdown-dontclose width-300">
              <ul className="nav adminuiux-nav" id="searchtab2" role="tablist">
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link active"
                    id="searchall-tab2"
                    data-bs-toggle="tab"
                    data-bs-target="#searchall2"
                    type="button"
                    role="tab"
                    aria-controls="searchall2"
                    aria-selected="true"
                  >
                    All
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="searchorders-tab2"
                    data-bs-toggle="tab"
                    data-bs-target="#searchorders2"
                    type="button"
                    role="tab"
                    aria-controls="searchorders2"
                    aria-selected="false"
                    tabIndex={-1}
                  >
                    Orders
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="searchcontacts-tab2"
                    data-bs-toggle="tab"
                    data-bs-target="#searchcontacts2"
                    type="button"
                    role="tab"
                    aria-controls="searchcontacts2"
                    aria-selected="false"
                    tabIndex={-1}
                  >
                    Contacts
                  </button>
                </li>
              </ul>
              <div className="tab-content py-3" id="searchtabContent">
                <div
                  className="tab-pane fade active show"
                  id="searchall2"
                  role="tabpanel"
                  aria-labelledby="searchall-tab2"
                >
                  <ul className="list-group adminuiux-list-group list-group-flush bg-none show">
                    <li className="list-group-item">
                      <div className="row">
                        <div className="col">Search apps</div>
                        <div className="col-auto">
                          <div className="form-check form-switch">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              role="switch"
                              id="searchswitch1"
                            />{" "}
                            <label
                              className="form-check-label"
                              htmlFor="searchswitch1"
                            />
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="list-group-item">
                      <div className="row">
                        <div className="col">Include Pages</div>
                        <div className="col-auto">
                          <div className="form-check form-switch">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              role="switch"
                              id="searchswitch2"
                              defaultChecked=""
                            />{" "}
                            <label
                              className="form-check-label"
                              htmlFor="searchswitch2"
                            />
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="list-group-item">
                      <div className="row">
                        <div className="col">Internet resource</div>
                        <div className="col-auto">
                          <div className="form-check form-switch">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              role="switch"
                              id="searchswitch3"
                              defaultChecked=""
                            />{" "}
                            <label
                              className="form-check-label"
                              htmlFor="searchswitch3"
                            />
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="list-group-item">
                      <div className="row">
                        <div className="col">News and Blogs</div>
                        <div className="col-auto">
                          <div className="form-check form-switch">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              role="switch"
                              id="searchswitch4"
                            />{" "}
                            <label
                              className="form-check-label"
                              htmlFor="searchswitch4"
                            />
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                <div
                  className="tab-pane fade"
                  id="searchorders2"
                  role="tabpanel"
                  aria-labelledby="searchorders-tab2"
                >
                  <ul className="list-group adminuiux-list-group list-group-flush bg-none show">
                    <li className="list-group-item">
                      <div className="row">
                        <div className="col">Show order ID</div>
                        <div className="col-auto">
                          <div className="form-check form-switch">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              role="switch"
                              id="searchswitch5"
                            />{" "}
                            <label
                              className="form-check-label"
                              htmlFor="searchswitch5"
                            />
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="list-group-item">
                      <div className="row">
                        <div className="col">International Order</div>
                        <div className="col-auto">
                          <div className="form-check form-switch">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              role="switch"
                              id="searchswitch6"
                              defaultChecked=""
                            />{" "}
                            <label
                              className="form-check-label"
                              htmlFor="searchswitch6"
                            />
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="list-group-item">
                      <div className="row">
                        <div className="col">Taxable Product</div>
                        <div className="col-auto">
                          <div className="form-check form-switch">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              role="switch"
                              id="searchswitch7"
                              defaultChecked=""
                            />{" "}
                            <label
                              className="form-check-label"
                              htmlFor="searchswitch7"
                            />
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="list-group-item">
                      <div className="row">
                        <div className="col">Published Product</div>
                        <div className="col-auto">
                          <div className="form-check form-switch">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              role="switch"
                              id="searchswitch8"
                            />{" "}
                            <label
                              className="form-check-label"
                              htmlFor="searchswitch8"
                            />
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                <div
                  className="tab-pane fade"
                  id="searchcontacts2"
                  role="tabpanel"
                  aria-labelledby="searchcontacts-tab2"
                >
                  <ul className="list-group adminuiux-list-group list-group-flush bg-none show">
                    <li className="list-group-item">
                      <div className="row">
                        <div className="col">Have email ID</div>
                        <div className="col-auto">
                          <div className="form-check form-switch">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              role="switch"
                              id="searchswitch9"
                            />{" "}
                            <label
                              className="form-check-label"
                              htmlFor="searchswitch9"
                            />
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="list-group-item">
                      <div className="row">
                        <div className="col">Have phone number</div>
                        <div className="col-auto">
                          <div className="form-check form-switch">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              role="switch"
                              id="searchswitch10"
                              defaultChecked=""
                            />{" "}
                            <label
                              className="form-check-label"
                              htmlFor="searchswitch10"
                            />
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="list-group-item">
                      <div className="row">
                        <div className="col">Photo available</div>
                        <div className="col-auto">
                          <div className="form-check form-switch">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              role="switch"
                              id="searchswitch11"
                              defaultChecked=""
                            />{" "}
                            <label
                              className="form-check-label"
                              htmlFor="searchswitch11"
                            />
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="list-group-item">
                      <div className="row">
                        <div className="col">Referral</div>
                        <div className="col-auto">
                          <div className="form-check form-switch">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              role="switch"
                              id="searchswitch12"
                            />{" "}
                            <label
                              className="form-check-label"
                              htmlFor="searchswitch12"
                            />
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="">
                <div className="row">
                  <div className="col">
                    <button className="btn btn-link">Reset</button>
                  </div>
                  <div className="col-auto">
                    <button className="btn btn-theme">Apply</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</>

  );
};

export default SignIn;
