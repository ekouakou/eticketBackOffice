import React, { useState } from 'react';
import { useTheme } from '../../contexts/ThemeProvider';
import { useNavigate } from 'react-router-dom';
import {
  handleLogin
} from '../../utils/formHandlers'; // Assurez-vous d'importer correctement le chemin vers handleLogin

const SignIn = () => {

  return (
    <>

<>
  <div className="d-flex flex-column flex-root app-root" id="kt_app_root">
    {/*begin::Page*/}
    <div className="app-page  flex-column flex-column-fluid " id="kt_app_page">
      {/*begin::Header*/}
      <div
        id="kt_app_header"
        className="app-header "
        data-kt-sticky="true"
        data-kt-sticky-activate="{default: false, lg: true}"
        data-kt-sticky-name="app-header-sticky"
        data-kt-sticky-offset="{default: false, lg: '300px'}"
      >
        {/*begin::Header container*/}
        <div
          className="app-container  container-fluid d-flex align-items-center justify-content-between "
          id="kt_app_header_container"
        >
          {/*begin::Sidebar toggle*/}
          <div
            className="d-flex align-items-center d-block d-lg-none ms-n3"
            title="Show sidebar menu"
          >
            <div
              className="btn btn-icon btn-active-color-primary w-35px h-35px me-2"
              id="kt_app_sidebar_mobile_toggle"
            >
              <i className="ki-duotone ki-abstract-14 fs-1">
                <span className="path1" />
                <span className="path2" />
              </i>{" "}
            </div>
            {/*begin::Logo image*/}
            <a href="index.html">
              <img
                alt="Logo"
                src="assets/media/logos/demo3-dark.svg"
                className="h-35px theme-light-show"
              />
              <img
                alt="Logo"
                src="assets/media/logos/demo3-dark.svg"
                className="h-35px theme-dark-show"
              />
            </a>
            {/*end::Logo image*/}
          </div>
          {/*end::Sidebar toggle*/}
          {/*begin::Header wrapper*/}
          <div
            className="d-flex align-items-stretch justify-content-between flex-lg-grow-1"
            id="kt_app_header_wrapper"
          >
            {/*begin::Page title*/}
            <div
              data-kt-swapper="true"
              data-kt-swapper-mode="{default: 'prepend', lg: 'prepend'}"
              data-kt-swapper-parent="{default: '#kt_app_content_container', lg: '#kt_app_header_wrapper'}"
              className="page-title d-flex flex-column justify-content-center me-3 mb-4 mb-lg-0"
            >
              {/*begin::Title*/}
              <h1 className="page-heading d-flex text-gray-900 fw-bold fs-3 flex-column justify-content-center my-0">
                Overview
                {/*begin::Description*/}
                <span className="page-desc text-muted fs-7 fw-semibold pt-2">
                  Let’s add here useful info like Campaign ID #XRT-246{" "}
                </span>
                {/*end::Description*/}
              </h1>
              {/*end::Title*/}
            </div>
            {/*end::Page title*/}
            {/*begin::Wrapper*/}
            <div className="d-flex">
              {/*begin::Navbar*/}
              <div className="app-navbar flex-shrink-0">
                {/*begin::User menu*/}
                <div
                  className="app-navbar-item ms-1 ms-lg-3"
                  id="kt_header_user_menu_toggle"
                >
                  {/*begin::Username*/}
                  <div className="d-none d-md-block text-end me-4">
                    <a
                      href="#"
                      className="fs-6 fw-semibold text-white text-hover-primary"
                    >
                      Paul Melone
                    </a>
                    <span className="fs-7 fw-semibold text-gray-600 d-block">
                      Ad Expert
                    </span>
                  </div>
                  {/*end::Username*/}
                  {/*begin::Menu wrapper*/}
                  <div
                    className="cursor-pointer symbol "
                    data-kt-menu-trigger="{default: 'click', lg: 'hover'}"
                    data-kt-menu-attach="parent"
                    data-kt-menu-placement="bottom-end"
                  >
                    <img
                      className="h-40px w-40px w-lg-45px h-lg-45px"
                      src="assets/media/avatars/300-1.jpg"
                      alt="user"
                    />
                  </div>
                </div>
                {/*end::User menu*/}
                {/*begin::New campaign*/}
                <div className="app-navbar-item ms-2 ms-lg-9">
                  <a className="btn btn-warning d-flex flex-center h-40px h-lg-45px" data-bs-toggle="modal" data-bs-target="#kt_modal_create_campaign">
                    New
                    <span className="d-none d-md-block ps-2">Campaign</span>
                  </a>
                </div>
                {/*end::New campaign*/}
              </div>
              {/*end::Navbar*/}
            </div>
          </div>
        </div>
      </div>
      <div className="app-wrapper  flex-column flex-row-fluid " id="kt_app_wrapper">
        <div id="kt_app_sidebar" className="app-sidebar  flex-column " data-kt-drawer="true" data-kt-drawer-name="app-sidebar" data-kt-drawer-activate="{default: true, lg: false}" data-kt-drawer-overlay="true" data-kt-drawer-width="250px" data-kt-drawer-direction="start" data-kt-drawer-toggle="#kt_app_sidebar_mobile_toggle">
          <div className="app-sidebar-logo d-none d-md-block pt-7 px-8 pt-xl-11 mb-2" id="kt_app_sidebar_logo">
            <a href="index.html">
              <img alt="Logo" src="assets/media/logos/demo3.svg" className="h-35px theme-light-show"/>
              <img alt="Logo" src="assets/media/logos/demo3-dark.svg" className="h-35px theme-dark-show"/>
            </a>
          </div>
          <div
            className="app-sidebar-menu app-sidebar-menu-arrow overflow-hidden flex-column-fluid mb-5"
            id="kt_app_sidebar_menu"
          >
            {/*begin::Menu wrapper*/}
            <div id="kt_app_sidebar_menu_wrapper" className="app-sidebar-wrapper hover-scroll-y my-5 mx-3" data-kt-scroll="true" data-kt-scroll-activate="true" data-kt-scroll-height="auto" data-kt-scroll-dependencies="#kt_app_sidebar_logo, #kt_app_sidebar_footer" data-kt-scroll-wrappers="#kt_app_sidebar_menu" data-kt-scroll-offset="5px">
              {/*begin::Menu*/}
              <div className=" menu  menu-column  menu-rounded menu-sub-indention menu-active-bg "
                id="#kt_app_sidebar_menu"
                data-kt-menu="true"
                data-kt-menu-expand="false"
              >

                <div
                  data-kt-menu-trigger="click"
                  className="menu-item here show menu-accordion"
                >
                  <span className="menu-link">
                    <span className="menu-icon">
                      <i className="ki-duotone ki-black-right fs-3" />
                    </span>
                    <span className="menu-title">Dashboards</span>
                  </span>
                  <div className="menu-sub menu-sub-accordion">
                    {/*begin:Menu item*/}
                    <div className="menu-item">
                      {/*begin:Menu link*/}
                      <a className="menu-link active" href="index.html">
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">Default</span>
                      </a>
                      {/*end:Menu link*/}
                    </div>
                    {/*end:Menu item*/}
                    {/*begin:Menu item*/}
                    <div className="menu-item">
                      {/*begin:Menu link*/}
                      <a className="menu-link" href="dashboards/projects.html">
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">Projects</span>
                      </a>
                      {/*end:Menu link*/}
                    </div>
                    {/*end:Menu item*/}
                    {/*begin:Menu item*/}
                    <div className="menu-item">
                      {/*begin:Menu link*/}
                      <a className="menu-link" href="dashboards/ecommerce.html">
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">eCommerce</span>
                      </a>
                      {/*end:Menu link*/}
                    </div>
                    {/*end:Menu item*/}
                    {/*begin:Menu item*/}
                    <div className="menu-item">
                      {/*begin:Menu link*/}
                      <a className="menu-link" href="dashboards/marketing.html">
                        <span className="menu-bullet">
                          <span className="bullet bullet-dot" />
                        </span>
                        <span className="menu-title">Marketing</span>
                      </a>
                      {/*end:Menu link*/}
                    </div>
                    {/*end:Menu item*/}
                    <div
                      className="menu-inner flex-column collapse "
                      id="kt_app_sidebar_menu_dashboards_collapse"
                    >
                      {/*begin:Menu item*/}
                      <div className="menu-item">
                        {/*begin:Menu link*/}
                        <a className="menu-link" href="dashboards/social.html">
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot" />
                          </span>
                          <span className="menu-title">Social</span>
                        </a>
                        {/*end:Menu link*/}
                      </div>
                      {/*end:Menu item*/}
                      {/*begin:Menu item*/}
                      <div className="menu-item">
                        {/*begin:Menu link*/}
                        <a className="menu-link" href="dashboards/bidding.html">
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot" />
                          </span>
                          <span className="menu-title">Bidding</span>
                        </a>
                        {/*end:Menu link*/}
                      </div>
                      {/*end:Menu item*/}
                      {/*begin:Menu item*/}
                      <div className="menu-item">
                        {/*begin:Menu link*/}
                        <a
                          className="menu-link"
                          href="dashboards/online-courses.html"
                        >
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot" />
                          </span>
                          <span className="menu-title">Online Courses</span>
                        </a>
                        {/*end:Menu link*/}
                      </div>
                      {/*end:Menu item*/}
                      {/*begin:Menu item*/}
                      <div className="menu-item">
                        {/*begin:Menu link*/}
                        <a
                          className="menu-link"
                          href="dashboards/logistics.html"
                        >
                          <span className="menu-bullet">
                            <span className="bullet bullet-dot" />
                          </span>
                          <span className="menu-title">Logistics</span>
                        </a>
                        {/*end:Menu link*/}
                      </div>
                      {/*end:Menu item*/}
                    </div>
                    <div className="menu-item">
                      <div className="menu-content">
                        <a
                          className="btn btn-flex btn-color-gray-500 btn-icon-gray-500 d-flex flex-stack fs-base p-0 ms-2 mb-2 toggle collapsible collapsed"
                          data-bs-toggle="collapse"
                          href="#kt_app_sidebar_menu_dashboards_collapse"
                          data-kt-toggle-text="Show Less"
                        >
                          <span data-kt-toggle-text-target="true">
                            Show 4 More
                          </span>{" "}
                          <i className="ki-duotone ki-minus-square toggle-on fs-2 me-0 pe-0">
                            <span className="path1" />
                            <span className="path2" />
                          </i>
                          <i className="ki-duotone ki-plus-square toggle-off fs-2 me-0 pe-0">
                            <span className="path1" />
                            <span className="path2" />
                            <span className="path3" />
                          </i>
                        </a>
                      </div>
                    </div>
                  </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>


</>

    
    </>
  );
};

export default SignIn;
