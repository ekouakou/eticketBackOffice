import React, { useState } from 'react';
import { useTheme } from '../../contexts/ThemeProvider';
import { useNavigate } from 'react-router-dom';
import SideBar from './SideBar';
import Footer from './Footer';
import Header from './Header';
import Breadcrumb from './Breadcrumb';



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

  {/* header */}
  <Header />
  

  <div className="adminuiux-wrap">
    {/* sidebar */}
    <SideBar />
    <main className="adminuiux-content has-sidebar" onclick="contentClick()">
      <div className="container-fluid mt-4">
        <Breadcrumb />
        
      </div>
      <div className="container mt-4" id="main-content">
        <div className="card adminuiux-card mb-4">
          <div className="card-body">
            <div className="row">
              <div className="col-12 col-md-6 col-xl-5 d-flex flex-column px-lg-4">
                <div className="row h-100 align-items-center justify-content-center">
                  <div className="col-12 py-3">
                    <h2 className="mb-3">
                      We will be happy
                      <br />
                      to help you!
                    </h2>
                    <p className="text-secondary mb-4">
                      Contact us now, we will be back to you as soon as possible
                    </p>
                    <div className="row">
                      <div className="col-12 col-lg-6 mb-2">
                        <div className="form-group mb-3 position-relative check-valid">
                          <div className="input-group input-group-lg">
                            <span className="input-group-text text-theme-1">
                              <i className="bi bi-person" />
                            </span>
                            <div className="form-floating">
                              <input
                                placeholder="First Name"
                                defaultValue="Max"
                                required=""
                                className="form-control"
                              />{" "}
                              <label>First Name</label>
                            </div>
                          </div>
                        </div>
                        <div className="invalid-feedback mb-3">
                          Add valid data
                        </div>
                      </div>
                      <div className="col-12 col-lg-6 mb-2">
                        <div className="form-group mb-3 position-relative">
                          <div className="input-group input-group-lg">
                            <span className="input-group-text text-theme-1">
                              <i className="bi bi-person" />
                            </span>
                            <div className="form-floating">
                              <input
                                placeholder="Last Name"
                                defaultValue="Johnson"
                                required=""
                                className="form-control"
                              />{" "}
                              <label>last Name</label>
                            </div>
                          </div>
                        </div>
                        <div className="invalid-feedback mb-3">
                          Add valid data
                        </div>
                      </div>
                      <div className="col-12 col-md-12 mb-2">
                        <div className="form-group mb-3 position-relative">
                          <div className="input-group input-group-lg">
                            <span className="input-group-text text-theme-1">
                              <i className="bi bi-envelope" />
                            </span>
                            <div className="form-floating">
                              <input
                                type="email"
                                placeholder="Email Address"
                                required=""
                                className="form-control"
                              />{" "}
                              <label>Email Address</label>
                            </div>
                          </div>
                        </div>
                        <div className="invalid-feedback mb-3">
                          Add valid data
                        </div>
                      </div>
                      <div className="col-12 col-md-12 mb-2">
                        <div className="form-group mb-3 position-relative check-valid">
                          <div className="input-group input-group-lg">
                            <span className="input-group-text text-theme-1">
                              <i className="bi bi-chat-right-text" />
                            </span>
                            <div className="form-floating">
                              <textarea
                                placeholder="Message"
                                className="form-control h-auto"
                                rows={4}
                                defaultValue={""}
                              />{" "}
                              <label>Message</label>
                            </div>
                          </div>
                        </div>
                        <div className="invalid-feedback mb-3">
                          Add valid data
                        </div>
                      </div>
                    </div>
                    <div className="text-center">
                      <button
                        type="button"
                        className="btn btn-lg w-100 btn-theme"
                      >
                        Submit Message
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-xl-7">
                <div className="card adminuiux-card bg-theme-1-space position-relative overflow-hidden h-100">
                  <div className="position-absolute start-0 top-0 h-100 w-100 coverimg opacity-75 z-index-0">
                    <img
                      src="assets/img/backgorund-image/backgorund-image-8.jpg"
                      alt=""
                    />
                  </div>
                  <div className="card-body text-center position-relative z-index-1">
                    <img
                      src="assets/img/investment/slider.png"
                      alt=""
                      className="mw-100 mb-3"
                    />
                    <h4 className="text-white mb-3">
                      Create and Manage your Investment appointments easily at
                      your own very personalized space.
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-12 col-md-4 col-lg-4">
            <div className="card adminuiux-card mb-4">
              <div className="card-body">
                <i className="bi bi-chat-right-dots avatar avatar-80 text-theme-1 bg-theme-1-subtle rounded h1 mb-4" />
                <br />
                <h5 className="text-theme-1">Communicate</h5>
                <p className="text-secondary mb-4">
                  You have live assistant with whom you can share your query
                  &amp; get answered.
                </p>
                <a href="investment-ticket-list.html" className="btn btn-theme">
                  Watch Community
                </a>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4 col-lg-4">
            <div className="card adminuiux-card mb-4">
              <div className="card-body">
                <i className="bi bi-life-preserver avatar avatar-80 text-theme-1 bg-theme-1-subtle rounded h1 mb-4" />
                <br />
                <h5 className="text-theme-1">Get Support</h5>
                <p className="text-secondary mb-4">
                  Connect with our expert by submitting details with photos
                  &amp; documents.
                </p>
                <a href="investment-add-ticket.html" className="btn btn-theme">
                  Create Ticket
                </a>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4 col-lg-4">
            <div className="card adminuiux-card mb-4">
              <div className="card-body">
                <i className="bi bi-person-video3 avatar avatar-80 text-theme-1 bg-theme-1-subtle rounded h1 mb-4" />
                <br />
                <h5 className="text-theme-1">Schedule a Demo</h5>
                <p className="text-secondary mb-4">
                  Get details of features and quick look on how it works.
                  Schedule a demo.
                </p>
                <a href="#" className="btn btn-theme">
                  Book Demo
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center mb-4">
          <div className="col-12 col-md-6 col-xl-4 text-md-end">
            <p className="h5">Technical problem</p>
            <p className="text-secondary">
              If you have any type of technical challenges and would like to get
              help from us please drop an email at{" "}
              <a href="mailto:info@adminuiux.cos">tech@adminuiux.coms</a>
            </p>
          </div>
          <div className="col-12 col-md-6 col-xl-4">
            <p className="h5">General Support</p>
            <p className="text-secondary">
              If you have any type of challenges regarding products and would
              like to get help from us please drop an email at{" "}
              <a href="mailto:info@adminuiux.cos">sales@adminuiux.coms</a>
            </p>
          </div>
        </div>
      </div>
    </main>
  </div>
  {/* footer */}
  <Footer />

  <div className="position-fixed bottom-0 end-0 m-3 z-index-5">
    <button
      className="btn btn-square btn-theme shadow"
      type="button"
      data-bs-toggle="offcanvas"
      data-bs-target="#theming"
      aria-controls="theming"
    >
      <i className="bi bi-palette" />
    </button>
    <br />
    <button
      className="btn btn-theme btn-square rounded-circle shadow mt-2 d-none"
      id="backtotop"
    >
      <i className="bi bi-arrow-up" />
    </button>
  </div>
  <div
    className="offcanvas offcanvas-end shadow border-0"
    tabIndex={-1}
    id="theming"
    data-bs-scroll="true"
    data-bs-backdrop="false"
    aria-labelledby="theminglabel"
  >
    <div className="offcanvas-header border-bottom">
      <div>
        <h5 className="offcanvas-title" id="theminglabel">
          Personalize
        </h5>
        <p className="text-secondary small">Make it more like your own</p>
      </div>
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      />
    </div>
    <div className="offcanvas-body">
      <h6 className="offcanvas-title">Colors</h6>
      <p className="text-secondary small mb-4">Change colors of templates</p>
      <div className="row mb-4 theme-select">
        <div className="col-auto">
          <div className="select-box text-center mb-2" data-title="">
            <span className="avatar avatar-40 rounded-circle mb-2 bg-default">
              <i className="bi bi-arrow-clockwise" />
            </span>
          </div>
        </div>
        <div className="col-auto">
          <div className="select-box text-center mb-2" data-title="theme-blue">
            <span className="avatar avatar-40 rounded-circle mb-2 bg-blue" />
          </div>
        </div>
        <div className="col-auto">
          <div
            className="select-box text-center mb-2"
            data-title="theme-indigo"
          >
            <span className="avatar avatar-40 rounded-circle mb-2 bg-indigo" />
          </div>
        </div>
        <div className="col-auto">
          <div
            className="select-box text-center mb-2"
            data-title="theme-purple"
          >
            <span className="avatar avatar-40 rounded-circle mb-2 bg-purple" />
          </div>
        </div>
        <div className="col-auto">
          <div className="select-box text-center mb-2" data-title="theme-pink">
            <span className="avatar avatar-40 rounded-circle mb-2 bg-pink" />
          </div>
        </div>
        <div className="col-auto">
          <div className="select-box text-center mb-2" data-title="theme-red">
            <span className="avatar avatar-40 rounded-circle mb-2 bg-red" />
          </div>
        </div>
        <div className="col-auto">
          <div
            className="select-box text-center mb-2"
            data-title="theme-orange"
          >
            <span className="avatar avatar-40 rounded-circle mb-2 bg-orange" />
          </div>
        </div>
        <div className="col-auto">
          <div
            className="select-box text-center mb-2"
            data-title="theme-yellow"
          >
            <span className="avatar avatar-40 rounded-circle mb-2 bg-yellow" />
          </div>
        </div>
        <div className="col-auto">
          <div className="select-box text-center mb-2" data-title="theme-green">
            <span className="avatar avatar-40 rounded-circle mb-2 bg-green" />
          </div>
        </div>
        <div className="col-auto">
          <div className="select-box text-center mb-2" data-title="theme-teal">
            <span className="avatar avatar-40 rounded-circle mb-2 bg-teal" />
          </div>
        </div>
        <div className="col-auto">
          <div className="select-box text-center mb-2" data-title="theme-cyan">
            <span className="avatar avatar-40 rounded-circle mb-2 bg-cyan" />
          </div>
        </div>
        <div className="col-auto">
          <div className="select-box text-center mb-2" data-title="theme-grey">
            <span className="avatar avatar-40 rounded-circle mb-2 bg-grey" />
          </div>
        </div>
        <div className="col-auto">
          <div className="select-box text-center mb-2" data-title="theme-brown">
            <span className="avatar avatar-40 rounded-circle mb-2 bg-brown" />
          </div>
        </div>
        <div className="col-auto">
          <div
            className="select-box text-center mb-2"
            data-title="theme-chocolate"
          >
            <span className="avatar avatar-40 rounded-circle mb-2 bg-chocolate" />
          </div>
        </div>
        <div className="col-auto">
          <div className="select-box text-center mb-2" data-title="theme-black">
            <span className="avatar avatar-40 rounded-circle mb-2 bg-dark" />
          </div>
        </div>
      </div>
      <h6 className="offcanvas-title">Backgrounds</h6>
      <p className="text-secondary small mb-4">Change color for background</p>
      <div className="row mb-4 theme-background">
        <div className="col-auto">
          <div
            className="gradient-box text-center mb-2"
            data-title="bg-default"
          >
            <span className="avatar avatar-40 rounded-circle mb-2 bg-default">
              <i className="bi bi-arrow-clockwise" />
            </span>
          </div>
        </div>
        <div className="col-auto">
          <div className="gradient-box text-center mb-2" data-title="bg-white">
            <span className="avatar avatar-40 rounded-circle mb-2 bg-white" />
          </div>
        </div>
        <div className="col-auto">
          <div
            className="gradient-box text-center mb-2"
            data-title="bg-r-gradient"
          >
            <span className="avatar avatar-40 rounded-circle mb-2 bg-r-gradient" />
          </div>
        </div>
        <div className="col-auto">
          <div
            className="gradient-box text-center mb-2"
            data-title="bg-gradient-1"
          >
            <span className="avatar avatar-40 rounded-circle mb-2 bg-gradient-1" />
          </div>
        </div>
        <div className="col-auto">
          <div
            className="gradient-box text-center mb-2"
            data-title="bg-gradient-2"
          >
            <span className="avatar avatar-40 rounded-circle mb-2 bg-gradient-2" />
          </div>
        </div>
        <div className="col-auto">
          <div
            className="gradient-box text-center mb-2"
            data-title="bg-gradient-3"
          >
            <span className="avatar avatar-40 rounded-circle mb-2 bg-gradient-3" />
          </div>
        </div>
        <div className="col-auto">
          <div
            className="gradient-box text-center mb-2"
            data-title="bg-gradient-4"
          >
            <span className="avatar avatar-40 rounded-circle mb-2 bg-gradient-4" />
          </div>
        </div>
        <div className="col-auto">
          <div
            className="gradient-box text-center mb-2"
            data-title="bg-gradient-5"
          >
            <span className="avatar avatar-40 rounded-circle mb-2 bg-gradient-5" />
          </div>
        </div>
        <div className="col-auto">
          <div
            className="gradient-box text-center mb-2"
            data-title="bg-gradient-6"
          >
            <span className="avatar avatar-40 rounded-circle mb-2 bg-gradient-6" />
          </div>
        </div>
        <div className="col-auto">
          <div
            className="gradient-box text-center mb-2"
            data-title="bg-gradient-7"
          >
            <span className="avatar avatar-40 rounded-circle mb-2 bg-gradient-7" />
          </div>
        </div>
        <div className="col-auto">
          <div
            className="gradient-box text-center mb-2"
            data-title="bg-gradient-8"
          >
            <span className="avatar avatar-40 rounded-circle mb-2 bg-gradient-8" />
          </div>
        </div>
        <div className="col-auto">
          <div
            className="gradient-box text-center mb-2"
            data-title="bg-gradient-9"
          >
            <span className="avatar avatar-40 rounded-circle mb-2 bg-gradient-9" />
          </div>
        </div>
        <div className="col-auto">
          <div
            className="gradient-box text-center mb-2"
            data-title="bg-gradient-10"
          >
            <span className="avatar avatar-40 rounded-circle mb-2 bg-gradient-10" />
          </div>
        </div>
      </div>
      <h6 className="offcanvas-title">Sidebar Layout</h6>
      <p className="text-secondary small mb-4">Change sidebar layout style</p>
      <div className="row mb-4 sidebar-layout">
        <div className="col-auto">
          <div
            className="select-box text-center mb-2"
            data-title="adminuiux-sidebar-standard"
            data-bs-toggle="tooltip"
            title="None"
          >
            <span className="avatar avatar-40 rounded-circle mb-2 bg-default">
              <i className="bi bi-arrow-clockwise" />
            </span>
          </div>
        </div>
        <div className="col-auto">
          <div
            className="select-box text-center mb-2"
            data-title="adminuiux-sidebar-iconic"
            data-bs-toggle="tooltip"
            title="Iconic"
          >
            <span className="avatar avatar-40 rounded-circle mb-2 bg-default">
              <i className="bi bi-bezier h4" />
            </span>
          </div>
        </div>
        <div className="col-auto">
          <div
            className="select-box text-center mb-2"
            data-title="adminuiux-sidebar-boxed"
            data-bs-toggle="tooltip"
            title="Boxed"
          >
            <span className="avatar avatar-40 rounded-circle mb-2 bg-default">
              <i className="bi bi-box h5" />
            </span>
          </div>
        </div>
        <div className="col-auto">
          <div
            className="select-box text-center mb-2"
            data-title="adminuiux-sidebar-boxed adminuiux-sidebar-iconic"
            data-bs-toggle="tooltip"
            title="Iconic+Boxed"
          >
            <span className="avatar avatar-40 rounded-circle mb-2 bg-default">
              <i className="bi bi-bounding-box h5" />
            </span>
          </div>
        </div>
      </div>
      <div className="text-center mb-4">
        <a
          href="investment-personalization.html"
          className="btn btn-sm btn-outline-theme"
        >
          More options <i className="bi bi-arrow-right-short" />
        </a>
      </div>
    </div>
  </div>
</>

  );
};

export default SignIn;
