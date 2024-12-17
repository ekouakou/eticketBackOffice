import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

//import './AppHeader.css'; // Assuming you have a CSS file for the styles

const AppHeader = ({pageTitle, desctioptionPage}) => {
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();
  const urlBaseImage  = localStorage.getItem("urlBaseImage");


  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('userConnectedData'));
    const paths = JSON.parse(localStorage.getItem("appPaths"));
    if (!user) {
      navigate(paths.signIn);
    } else {
      setUserData(user);
    }
  }, [navigate]);

  //{LG_UTIID, STR_UTIFIRSTLASTNAME, STR_UTIPHONE, STR_UTIMAIL, STR_UTILOGIN, STR_UTIPIC, STR_UTITOKEN, STR_PRODESCRIPTION, LG_PROID, STR_PROTYPE, STR_SOCNAME, STR_SOCDESCRIPTION, STR_SOCLOGO, LG_SOCID, LG_AGEID, code_statut, desc_statut}
  return (
    <div id="kt_app_header" className="app-header"
      data-kt-sticky="true" data-kt-sticky-activate="{default: false, lg: true}"
      data-kt-sticky-name="app-header-sticky" data-kt-sticky-offset="{default: false, lg: '300px'}"
    >
      {/* Header container */}
      <div
        className="app-container container-fluid d-flex align-items-center justify-content-between"
        id="kt_app_header_container"
      >
        {/* Sidebar toggle */}
        <div
          className="d-flex align-items-center d-block d-lg-none ms-n3"
          title="Show sidebar menu"
        >
          <div
            className="btn btn-icon btn-active-color-primary w-35px h-35px me-2"
            id="kt_app_sidebar_mobile_toggle"
          >
            <i className="ki-duotone ki-abstract-14 fs-1">
              <span className="path1"></span>
              <span className="path2"></span>
            </i>
          </div>
          {/* Logo image */}
          <a href="index.html">
            <img
              alt="Logo"
              src="assets/media/logos/logo_light.svg"
              className="h-35px theme-light-show"
            />
            <img
              alt="Logo"
              src="assets/media/logos/logo_light.svg"
              className="h-35px theme-dark-show"
            />
          </a>
        </div>
        <div className="d-flex align-items-stretch justify-content-between flex-lg-grow-1"
          id="kt_app_header_wrapper"
        >
          {/* Page title */}
          <div
            data-kt-swapper="true"
            data-kt-swapper-mode="{default: 'prepend', lg: 'prepend'}"
            data-kt-swapper-parent="{default: '#kt_app_content_container', lg: '#kt_app_header_wrapper'}"
            className="page-title d-flex flex-column justify-content-center me-3 mb-4 mb-lg-0"
          >
            {/* Title */}
            <h1 className="page-heading d-flex text-gray-900 fw-bold fs-3 flex-column justify-content-center my-0">
              {pageTitle}
              <span className="page-desc text-muted fs-7 fw-semibold pt-2">
               {desctioptionPage}
              </span>
            </h1>
          </div>

          <div className="d-flex">
            <div className="app-navbar flex-shrink-0">
              <div
                className="app-navbar-item ms-1 ms-lg-3"
                id="kt_header_user_menu_toggle"
              >
                <div className="d-none d-md-block text-end me-4">
                  <a
                    href="#"
                    className="fs-6 fw-semibold text-white text-hover-primary"
                  >
                    {userData?.STR_UTIFIRSTLASTNAME}
                  </a>
                  <span className="fs-7 fw-semibold text-gray-600 d-block">
                  {userData?.STR_UTIMAIL}
                  </span>
                </div>
                {/* End Username */}

                {/* Menu wrapper */}
                <div
                  className="cursor-pointer symbol"
                  data-kt-menu-trigger="{default: 'click', lg: 'hover'}"
                  data-kt-menu-attach="parent"
                  data-kt-menu-placement="bottom-end"
                >
                  <img
                    className="h-40px w-40px w-lg-45px h-lg-45px"
                    src={userData?.STR_UTIPIC ? urlBaseImage + userData.STR_UTIPIC : 'assets/media/avatars/300-1.jpg'}
                    alt="user"
                  />
                </div>
                {/* User account menu */}
                <div
                  className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg menu-state-color fw-semibold py-4 fs-6 w-275px"
                  data-kt-menu="true"
                >
                  {/* Menu item */}
                  <div className="menu-item px-3">
                    <div className="menu-content d-flex align-items-center px-3">
                      {/* Avatar */}
                      <div className="symbol symbol-50px me-5">
                        <img alt="Logo"   src={userData?.STR_UTIPIC ? urlBaseImage + userData.STR_UTIPIC : 'assets/media/avatars/300-1.jpg'}  />
                      </div>
                      {/* End Avatar */}

                      {/* Username */}
                      <div className="d-flex flex-column">
                        <div className="fw-bold d-flex align-items-center fs-5">
                          Max Smith
                          <span className="badge badge-light-success fw-bold fs-8 px-2 py-1 ms-2">
                            Pro
                          </span>
                        </div>
                        <a
                          href="#"
                          className="fw-semibold text-muted text-hover-primary fs-7"
                        >
                          max@kt.com
                        </a>
                      </div>
                      {/* End Username */}
                    </div>
                  </div>
                  {/* End Menu item */}

                  {/* Menu separator */}
                  <div className="separator my-2"></div>
                  {/* End Menu separator */}

                  {/* Menu item */}
                  <div className="menu-item px-5">
                    <a href="account/overview.html" className="menu-link px-5">
                      My Profile
                    </a>
                  </div>
                  {/* End Menu item */}

                  {/* Menu item */}
                  <div className="menu-item px-5">
                    <a href="apps/projects/list.html" className="menu-link px-5">
                      <span className="menu-text">My Projects</span>
                      <span className="menu-badge">
                        <span className="badge badge-light-danger badge-circle fw-bold fs-7">
                          3
                        </span>
                      </span>
                    </a>
                  </div>
                  {/* End Menu item */}

                  {/* Menu item */}
                  <div
                    className="menu-item px-5"
                    data-kt-menu-trigger="{default: 'click', lg: 'hover'}"
                    data-kt-menu-placement="left-start"
                    data-kt-menu-offset="-15px, 0"
                  >
                    <a href="#" className="menu-link px-5">
                      <span className="menu-title">My Subscription</span>
                      <span className="menu-arrow"></span>
                    </a>
                    {/* Menu sub */}
                    <div className="menu-sub menu-sub-dropdown w-175px py-4">
                      {/* Menu item */}
                      <div className="menu-item px-3">
                        <a href="account/referrals.html" className="menu-link px-5">
                          Referrals
                        </a>
                      </div>
                      {/* End Menu item */}

                      {/* Menu item */}
                      <div className="menu-item px-3">
                        <a href="account/billing.html" className="menu-link px-5">
                          Billing
                        </a>
                      </div>
                      {/* End Menu item */}

                      {/* Menu item */}
                      <div className="menu-item px-3">
                        <a href="account/statements.html" className="menu-link px-5">
                          Payments
                        </a>
                      </div>
                      {/* End Menu item */}

                      {/* Menu item */}
                      <div className="menu-item px-3">
                        <a
                          href="account/statements.html"
                          className="menu-link d-flex flex-stack px-5"
                        >
                          Statements
                          <span
                            className="ms-2 lh-0"
                            data-bs-toggle="tooltip"
                            aria-label="View your statements"
                            data-bs-original-title="View your statements"
                            data-kt-initialized="1"
                          >
                            <i className="ki-duotone ki-information-5 fs-5">
                              <span className="path1"></span>
                              <span className="path2"></span>
                              <span className="path3"></span>
                            </i>
                          </span>
                        </a>
                      </div>
                      {/* End Menu item */}

                      {/* Menu separator */}
                      <div className="separator my-2"></div>
                      {/* End Menu separator */}

                      {/* Menu item */}
                      <div className="menu-item px-3">
                        <div className="menu-content px-3">
                          <label className="form-check form-switch form-check-custom form-check-solid">
                            <input
                              className="form-check-input w-30px h-20px"
                              type="checkbox"
                              value="1"
                              checked="checked"
                              name="notifications"
                            />
                            <span className="form-check-label text-muted fs-7">
                              Notifications
                            </span>
                          </label>
                        </div>
                      </div>
                      {/* End Menu item */}
                    </div>
                    {/* End Menu sub */}
                  </div>
                  {/* End Menu item */}

                  {/* Menu item */}
                  <div className="menu-item px-5">
                    <a href="account/statements.html" className="menu-link px-5">
                      <span className="menu-text">My Statements</span>
                      <span className="menu-badge">
                        <span className="badge badge-light-primary badge-circle fw-bold fs-7">
                          5
                        </span>
                      </span>
                    </a>
                  </div>
                  {/* End Menu item */}

                  {/* Menu separator */}
                  <div className="separator my-2"></div>
                  {/* End Menu separator */}

                  {/* Menu item */}
                  <div className="menu-item px-5 my-1">
                    <a href="account/settings.html" className="menu-link px-5">
                      Account Settings
                    </a>
                  </div>
                  {/* End Menu item */}

                  {/* Menu item */}
                  <div className="menu-item px-5">
                    <a
                      href="authentication/flows/basic/sign-in.html"
                      className="menu-link px-5"
                    >
                      Sign Out
                    </a>
                  </div>
                  {/* End Menu item */}
                </div>
                {/* End User account menu */}
              </div>
              {/* End User menu */}
            </div>
            {/* End Navbar */}
          </div>
          {/* End Wrapper */}
        </div>
        {/* End Header wrapper */}
      </div>
      {/* End Header container */}
    </div>
  );
};

export default AppHeader;
