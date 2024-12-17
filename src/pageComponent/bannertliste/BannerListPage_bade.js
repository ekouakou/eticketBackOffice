import React from 'react';
import SidebarMenu from '../dashboard/SidebarMenu'
import Footer from '../dashboard/Footer'

import AppHeader from '../dashboard/AppHeader'
import FileManagerCard from '../dashboard/FileManagerCard'
import ListeEvent from './ListeBanner'
import LayoutBuilder from '../LayoutBuilder'
import LayoutDemo from '../LayoutDemo'
import ScrollTop from '../ScrollTop'
import RightSettingButton from '../RightSettingButton'
import LayoutHelp from '../LayoutHelp'







const BannerListPage = () => {
  return (
    <>
  {/*
Author: Keenthemes
Product Name: KeenProduct Version: 3.0.8
Purchase: https://themes.getbootstrap.com/product/keen-the-ultimate-bootstrap-admin-theme/
Website: http://www.keenthemes.com
Contact: support@keenthemes.com
Follow: www.twitter.com/keenthemes
Dribbble: www.dribbble.com/keenthemes
Like: www.facebook.com/keenthemes
License: For each use you must have a valid license purchased only from above link in order to legally use the theme for your project.
*/}
  {/*begin::Head*/}
  {/* Mirrored from preview.keenthemes.com/keen/demo3/dashboards/social.html by HTTrack Website Copier/3.x [XR&CO'2014], Sun, 01 Sep 2024 06:31:15 GMT */}
  {/* Added by HTTrack */}
  <meta httpEquiv="content-type" content="text/html;charset=UTF-8" />
  {/* /Added by HTTrack */}
  <title>
    Keen - Multi-demo Bootstrap 5 HTML Admin Dashboard Template by KeenThemes
  </title>
  <meta charSet="utf-8" />
  <meta
    name="description"
    content="The most advanced Bootstrap Admin Theme on Bootstrap Market trusted by over 4,000 beginners and professionals. Multi-demo, Dark Mode, RTL support. Grab your copy now and get life-time updates for free."
  />
  <meta
    name="keywords"
    content="keen, bootstrap, bootstrap 5, bootstrap 4, admin themes, web design, figma, web development, free templates, free admin themes, bootstrap theme, bootstrap template, bootstrap dashboard, bootstrap dak mode, bootstrap button, bootstrap datepicker, bootstrap timepicker, fullcalendar, datatables, flaticon"
  />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta property="og:locale" content="en_US" />
  <meta property="og:type" content="article" />
  <meta
    property="og:title"
    content="Keen - Multi-demo Bootstrap 5 HTML Admin Dashboard Template by KeenThemes"
  />
  <meta property="og:url" content="https://keenthemes.com/keen" />
  <meta property="og:site_name" content="Keen by Keenthemes" />
  <link rel="canonical" href="social.html" />
  <link
    rel="shortcut icon"
    href="https://preview.keenthemes.com/keen/demo3/assets/media/logos/favicon.ico"
  />
  {/*begin::Fonts(mandatory for all pages)*/}
  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/css?family=Inter:300,400,500,600,700"
  />{" "}
  {/*end::Fonts*/}
  {/*begin::Vendor Stylesheets(used for this page only)*/}
  <link
    href="https://preview.keenthemes.com/keen/demo3/assets/plugins/custom/datatables/datatables.bundle.css"
    rel="stylesheet"
    type="text/css"
  />
  <link
    href="https://preview.keenthemes.com/keen/demo3/assets/plugins/custom/vis-timeline/vis-timeline.bundle.css"
    rel="stylesheet"
    type="text/css"
  />
  {/*end::Vendor Stylesheets*/}
  {/*begin::Global Stylesheets Bundle(mandatory for all pages)*/}
  <link
    href="https://preview.keenthemes.com/keen/demo3/assets/plugins/global/plugins.bundle.css"
    rel="stylesheet"
    type="text/css"
  />
  <link
    href="https://preview.keenthemes.com/keen/demo3/assets/css/style.bundle.css"
    rel="stylesheet"
    type="text/css"
  />
  {/*end::Global Stylesheets Bundle*/}
  {/*begin::Google tag*/}
  {/*end::Google tag*/}
  {/*end::Head*/}
  {/*begin::Body*/}
  {/*begin::Theme mode setup on page load*/}
  {/*end::Theme mode setup on page load*/}
  {/*Begin::Google Tag Manager (noscript) */}
  <noscript>
    &lt;iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5FS8GGP"
    height="0" width="0"
    style="display:none;visibility:hidden"&gt;&lt;/iframe&gt;
  </noscript>
  {/*End::Google Tag Manager (noscript) */}
  {/*begin::App*/}
  <div className="d-flex flex-column flex-root app-root" id="kt_app_root">
    {/*begin::Page*/}
    <div className="app-page  flex-column flex-column-fluid " id="kt_app_page">
      {/*begin::Header*/}
      <div id="kt_app_header" className="app-header ">
        {/*begin::Header container*/}
        <div
          className="app-container  container-fluid d-flex align-items-stretch justify-content-between "
          id="kt_app_header_container"
        >
          {/*begin::sidebar mobile toggle*/}
          <div
            className="d-flex align-items-center d-lg-none ms-n3 me-2"
            title="Show sidebar menu"
          >
            <div
              className="btn btn-icon btn-active-color-primary w-35px h-35px"
              id="kt_app_sidebar_mobile_toggle"
            >
              <i className="ki-duotone ki-abstract-14 fs-1">
                <span className="path1" />
                <span className="path2" />
              </i>{" "}
            </div>
          </div>
          {/*end::sidebar mobile toggle*/}
          {/*begin::Mobile logo*/}
          <div className="d-flex align-items-center flex-grow-1 flex-lg-grow-0">
            <a
              href="https://preview.keenthemes.com/keen/demo3/index.html"
              className="d-lg-none"
            >
              <img
                alt="Logo"
                src="https://preview.keenthemes.com/keen/demo3/assets/media/logos/default-small.svg"
                className="theme-light-show h-30px"
              />
              <img
                alt="Logo"
                src="https://preview.keenthemes.com/keen/demo3/assets/media/logos/default-small-dark.svg"
                className="theme-dark-show h-30px"
              />
            </a>
          </div>
          {/*end::Mobile logo*/}
          {/*begin::Header wrapper*/}
          <div
            className="d-flex align-items-stretch justify-content-between flex-lg-grow-1"
            id="kt_app_header_wrapper"
          >
            {/*begin::Menu wrapper*/}
            <div
              className="
  app-header-menu 
  app-header-mobile-drawer 
  align-items-stretch
    "
              data-kt-drawer="true"
              data-kt-drawer-name="app-header-menu"
              data-kt-drawer-activate="{default: true, lg: false}"
              data-kt-drawer-overlay="true"
              data-kt-drawer-width="225px"
              data-kt-drawer-direction="end"
              data-kt-drawer-toggle="#kt_app_header_menu_toggle"
              data-kt-swapper="true"
              data-kt-swapper-mode="{default: 'append', lg: 'prepend'}"
              data-kt-swapper-parent="{default: '#kt_app_body', lg: '#kt_app_header_wrapper'}"
            >
              {/*begin::Menu*/}
              <div
                className="
      menu 
      menu-rounded  
      menu-column 
      menu-lg-row 
      my-5 
      my-lg-0 
      align-items-stretch 
      fw-semibold
      px-2 px-lg-0
  "
                id="kt_app_header_menu"
                data-kt-menu="true"
              >
                {/*begin:Menu item*/}
                <div
                  data-kt-menu-trigger="{default: 'click', lg: 'hover'}"
                  data-kt-menu-placement="bottom-start"
                  className="menu-item here show menu-here-bg menu-lg-down-accordion me-0 me-lg-2"
                >
                  {/*begin:Menu link*/}
                  <span className="menu-link">
                    <span className="menu-title">Dashboards</span>
                    <span className="menu-arrow d-lg-none" />
                  </span>
                  {/*end:Menu link*/}
                  {/*begin:Menu sub*/}
                  <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown p-0 w-100 w-lg-600px">
                    {/*begin:Dashboards menu*/}
                    <div
                      className="menu-state-bg menu-extended overflow-hidden overflow-lg-visible py-2 py-lg-6"
                      data-kt-menu-dismiss="true"
                    >
                      {/*begin:Row*/}
                      <div className="row px-lg-5">
                        {/*begin:Col*/}
                        <div className="col-lg-6 py-1">
                          {/*begin:Menu item*/}
                          <div className="menu-item p-0 m-0">
                            {/*begin:Menu link*/}
                            <a
                              href="https://preview.keenthemes.com/keen/demo3/index.html"
                              className="menu-link "
                            >
                              <span className="menu-custom-icon d-flex flex-center flex-shrink-0 rounded w-40px h-40px me-3">
                                <i className="ki-duotone ki-basket text-primary fs-1">
                                  <span className="path1" />
                                  <span className="path2" />
                                  <span className="path3" />
                                  <span className="path4" />
                                </i>{" "}
                              </span>
                              <span className="d-flex flex-column">
                                <span className="fs-6 fw-semibold text-gray-800">
                                  Default
                                </span>
                                <span className="fs-7 fw-semibold text-muted">
                                  Reports &amp; statistics
                                </span>
                              </span>
                            </a>
                            {/*end:Menu link*/}
                          </div>
                          {/*end:Menu item*/}
                        </div>
                        {/*end:Col*/}
                        {/*begin:Col*/}
                        <div className="col-lg-6 py-1">
                          {/*begin:Menu item*/}
                          <div className="menu-item p-0 m-0">
                            {/*begin:Menu link*/}
                            <a href="projects.html" className="menu-link ">
                              <span className="menu-custom-icon d-flex flex-center flex-shrink-0 rounded w-40px h-40px me-3">
                                <i className="ki-duotone ki-abstract-44 text-info fs-1">
                                  <span className="path1" />
                                  <span className="path2" />
                                </i>{" "}
                              </span>
                              <span className="d-flex flex-column">
                                <span className="fs-6 fw-semibold text-gray-800">
                                  Projects
                                </span>
                                <span className="fs-7 fw-semibold text-muted">
                                  Tasts, graphs &amp; charts
                                </span>
                              </span>
                            </a>
                            {/*end:Menu link*/}
                          </div>
                          {/*end:Menu item*/}
                        </div>
                        {/*end:Col*/}
                        {/*begin:Col*/}
                        <div className="col-lg-6 py-1">
                          {/*begin:Menu item*/}
                          <div className="menu-item p-0 m-0">
                            {/*begin:Menu link*/}
                            <a href="ecommerce.html" className="menu-link ">
                              <span className="menu-custom-icon d-flex flex-center flex-shrink-0 rounded w-40px h-40px me-3">
                                <i className="ki-duotone ki-element-11 text-danger fs-1">
                                  <span className="path1" />
                                  <span className="path2" />
                                  <span className="path3" />
                                  <span className="path4" />
                                </i>{" "}
                              </span>
                              <span className="d-flex flex-column">
                                <span className="fs-6 fw-semibold text-gray-800">
                                  eCommerce
                                </span>
                                <span className="fs-7 fw-semibold text-muted">
                                  Sales reports
                                </span>
                              </span>
                            </a>
                            {/*end:Menu link*/}
                          </div>
                          {/*end:Menu item*/}
                        </div>
                        {/*end:Col*/}
                        {/*begin:Col*/}
                        <div className="col-lg-6 py-1">
                          {/*begin:Menu item*/}
                          <div className="menu-item p-0 m-0">
                            {/*begin:Menu link*/}
                            <a href="marketing.html" className="menu-link ">
                              <span className="menu-custom-icon d-flex flex-center flex-shrink-0 rounded w-40px h-40px me-3">
                                <i className="ki-duotone ki-chart-simple text-gray-900 fs-1">
                                  <span className="path1" />
                                  <span className="path2" />
                                  <span className="path3" />
                                  <span className="path4" />
                                </i>{" "}
                              </span>
                              <span className="d-flex flex-column">
                                <span className="fs-6 fw-semibold text-gray-800">
                                  Marketing
                                </span>
                                <span className="fs-7 fw-semibold text-muted">
                                  Campaings &amp; conversions
                                </span>
                              </span>
                            </a>
                            {/*end:Menu link*/}
                          </div>
                          {/*end:Menu item*/}
                        </div>
                        {/*end:Col*/}
                        {/*begin:Col*/}
                        <div className="col-lg-6 py-1">
                          {/*begin:Menu item*/}
                          <div className="menu-item p-0 m-0">
                            {/*begin:Menu link*/}
                            <a href="social.html" className="menu-link active">
                              <span className="menu-custom-icon d-flex flex-center flex-shrink-0 rounded w-40px h-40px me-3">
                                <i className="ki-duotone ki-abstract-39 text-success fs-1">
                                  <span className="path1" />
                                  <span className="path2" />
                                </i>{" "}
                              </span>
                              <span className="d-flex flex-column">
                                <span className="fs-6 fw-semibold text-gray-800">
                                  Social
                                </span>
                                <span className="fs-7 fw-semibold text-muted">
                                  Feeds &amp; Activities
                                </span>
                              </span>
                            </a>
                            {/*end:Menu link*/}
                          </div>
                          {/*end:Menu item*/}
                        </div>
                        {/*end:Col*/}
                        {/*begin:Col*/}
                        <div className="col-lg-6 py-1">
                          {/*begin:Menu item*/}
                          <div className="menu-item p-0 m-0">
                            {/*begin:Menu link*/}
                            <a href="bidding.html" className="menu-link ">
                              <span className="menu-custom-icon d-flex flex-center flex-shrink-0 rounded w-40px h-40px me-3">
                                <i className="ki-duotone ki-switch text-warning fs-1">
                                  <span className="path1" />
                                  <span className="path2" />
                                </i>{" "}
                              </span>
                              <span className="d-flex flex-column">
                                <span className="fs-6 fw-semibold text-gray-800">
                                  Bidding
                                </span>
                                <span className="fs-7 fw-semibold text-muted">
                                  Deals &amp; stock exchange
                                </span>
                              </span>
                            </a>
                            {/*end:Menu link*/}
                          </div>
                          {/*end:Menu item*/}
                        </div>
                        {/*end:Col*/}
                        {/*begin:Col*/}
                        <div className="col-lg-6 py-1">
                          {/*begin:Menu item*/}
                          <div className="menu-item p-0 m-0">
                            {/*begin:Menu link*/}
                            <a
                              href="online-courses.html"
                              className="menu-link "
                            >
                              <span className="menu-custom-icon d-flex flex-center flex-shrink-0 rounded w-40px h-40px me-3">
                                <i className="ki-duotone ki-color-swatch text-success fs-1">
                                  <span className="path1" />
                                  <span className="path2" />
                                  <span className="path3" />
                                  <span className="path4" />
                                  <span className="path5" />
                                  <span className="path6" />
                                  <span className="path7" />
                                  <span className="path8" />
                                  <span className="path9" />
                                  <span className="path10" />
                                  <span className="path11" />
                                  <span className="path12" />
                                  <span className="path13" />
                                  <span className="path14" />
                                  <span className="path15" />
                                  <span className="path16" />
                                  <span className="path17" />
                                  <span className="path18" />
                                  <span className="path19" />
                                  <span className="path20" />
                                  <span className="path21" />
                                </i>{" "}
                              </span>
                              <span className="d-flex flex-column">
                                <span className="fs-6 fw-semibold text-gray-800">
                                  Online Courses
                                </span>
                                <span className="fs-7 fw-semibold text-muted">
                                  Student progress
                                </span>
                              </span>
                            </a>
                            {/*end:Menu link*/}
                          </div>
                          {/*end:Menu item*/}
                        </div>
                        {/*end:Col*/}
                        {/*begin:Col*/}
                        <div className="col-lg-6 py-1">
                          {/*begin:Menu item*/}
                          <div className="menu-item p-0 m-0">
                            {/*begin:Menu link*/}
                            <a href="logistics.html" className="menu-link ">
                              <span className="menu-custom-icon d-flex flex-center flex-shrink-0 rounded w-40px h-40px me-3">
                                <i className="ki-duotone ki-truck text-info fs-1">
                                  <span className="path1" />
                                  <span className="path2" />
                                  <span className="path3" />
                                  <span className="path4" />
                                  <span className="path5" />
                                </i>{" "}
                              </span>
                              <span className="d-flex flex-column">
                                <span className="fs-6 fw-semibold text-gray-800">
                                  Logistics
                                </span>
                                <span className="fs-7 fw-semibold text-muted">
                                  Shipments and delivery
                                </span>
                              </span>
                            </a>
                            {/*end:Menu link*/}
                          </div>
                          {/*end:Menu item*/}
                        </div>
                        {/*end:Col*/}
                      </div>
                      {/*end:Row*/}
                    </div>
                    {/*end:Dashboards menu*/}
                  </div>
                  {/*end:Menu sub*/}
                </div>
                {/*end:Menu item*/}
                {/*begin:Menu item*/}
                <div
                  data-kt-menu-trigger="{default: 'click', lg: 'hover'}"
                  data-kt-menu-placement="bottom-start"
                  className="menu-item menu-lg-down-accordion me-0 me-lg-2"
                >
                  {/*begin:Menu link*/}
                  <span className="menu-link">
                    <span className="menu-title">Pages</span>
                    <span className="menu-arrow d-lg-none" />
                  </span>
                  {/*end:Menu link*/}
                  {/*begin:Menu sub*/}
                  <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown p-0">
                    {/*begin:Pages menu*/}
                    <div className="menu-active-bg px-4 px-lg-0">
                      {/*begin:Tabs nav*/}
                      <div className="d-flex w-100 overflow-auto">
                        <ul className="nav nav-stretch nav-line-tabs fw-semibold fs-6 p-0 p-lg-10 flex-nowrap flex-grow-1">
                          {/*begin:Nav item*/}
                          <li className="nav-item mx-lg-1">
                            <a
                              className="nav-link py-3 py-lg-6 active text-active-primary"
                              href="#"
                              data-bs-toggle="tab"
                              data-bs-target="#kt_app_header_menu_pages_pages"
                            >
                              General{" "}
                            </a>
                          </li>
                          {/*end:Nav item*/}
                          {/*begin:Nav item*/}
                          <li className="nav-item mx-lg-1">
                            <a
                              className="nav-link py-3 py-lg-6  text-active-primary"
                              href="#"
                              data-bs-toggle="tab"
                              data-bs-target="#kt_app_header_menu_pages_account"
                            >
                              Account{" "}
                            </a>
                          </li>
                          {/*end:Nav item*/}
                          {/*begin:Nav item*/}
                          <li className="nav-item mx-lg-1">
                            <a
                              className="nav-link py-3 py-lg-6  text-active-primary"
                              href="#"
                              data-bs-toggle="tab"
                              data-bs-target="#kt_app_header_menu_pages_authentication"
                            >
                              Authentication{" "}
                            </a>
                          </li>
                          {/*end:Nav item*/}
                          {/*begin:Nav item*/}
                          <li className="nav-item mx-lg-1">
                            <a
                              className="nav-link py-3 py-lg-6  text-active-primary"
                              href="#"
                              data-bs-toggle="tab"
                              data-bs-target="#kt_app_header_menu_pages_utilities"
                            >
                              Utilities{" "}
                            </a>
                          </li>
                          {/*end:Nav item*/}
                        </ul>
                      </div>
                      {/*end:Tabs nav*/}
                      {/*begin:Tab content*/}
                      <div className="tab-content py-4 py-lg-8 px-lg-7">
                        {/*begin:Tab pane*/}
                        <div
                          className="tab-pane active w-lg-1000px"
                          id="kt_app_header_menu_pages_pages"
                        >
                          {/*begin:Row*/}
                          <div className="row">
                            {/*begin:Col*/}
                            <div className="col-lg-8">
                              {/*begin:Row*/}
                              <div className="row">
                                {/*begin:Col*/}
                                <div className="col-lg-3 mb-6 mb-lg-0">
                                  {/*begin:Menu heading*/}
                                  <h4 className="fs-6 fs-lg-4 fw-semibold mb-3 ms-4">
                                    User Profile
                                  </h4>
                                  {/*end:Menu heading*/}
                                  {/*begin:Menu item*/}
                                  <div className="menu-item p-0 m-0">
                                    {/*begin:Menu link*/}
                                    <a
                                      href="https://preview.keenthemes.com/keen/demo3/pages/user-profile/overview.html"
                                      className="menu-link "
                                    >
                                      <span className="menu-title">
                                        Overview
                                      </span>
                                    </a>
                                    {/*end:Menu link*/}
                                  </div>
                                  {/*end:Menu item*/}
                                  {/*begin:Menu item*/}
                                  <div className="menu-item p-0 m-0">
                                    {/*begin:Menu link*/}
                                    <a
                                      href="https://preview.keenthemes.com/keen/demo3/pages/user-profile/projects.html"
                                      className="menu-link "
                                    >
                                      <span className="menu-title">
                                        Projects
                                      </span>
                                    </a>
                                    {/*end:Menu link*/}
                                  </div>
                                  {/*end:Menu item*/}
                                  {/*begin:Menu item*/}
                                  <div className="menu-item p-0 m-0">
                                    {/*begin:Menu link*/}
                                    <a
                                      href="https://preview.keenthemes.com/keen/demo3/pages/user-profile/campaigns.html"
                                      className="menu-link "
                                    >
                                      <span className="menu-title">
                                        Campaigns
                                      </span>
                                    </a>
                                    {/*end:Menu link*/}
                                  </div>
                                  {/*end:Menu item*/}
                                  {/*begin:Menu item*/}
                                  <div className="menu-item p-0 m-0">
                                    {/*begin:Menu link*/}
                                    <a
                                      href="https://preview.keenthemes.com/keen/demo3/pages/user-profile/documents.html"
                                      className="menu-link "
                                    >
                                      <span className="menu-title">
                                        Documents
                                      </span>
                                    </a>
                                    {/*end:Menu link*/}
                                  </div>
                                  {/*end:Menu item*/}
                                  {/*begin:Menu item*/}
                                  <div className="menu-item p-0 m-0">
                                    {/*begin:Menu link*/}
                                    <a
                                      href="https://preview.keenthemes.com/keen/demo3/pages/user-profile/followers.html"
                                      className="menu-link "
                                    >
                                      <span className="menu-title">
                                        Followers
                                      </span>
                                    </a>
                                    {/*end:Menu link*/}
                                  </div>
                                  {/*end:Menu item*/}
                                  {/*begin:Menu item*/}
                                  <div className="menu-item p-0 m-0">
                                    {/*begin:Menu link*/}
                                    <a
                                      href="https://preview.keenthemes.com/keen/demo3/pages/user-profile/activity.html"
                                      className="menu-link "
                                    >
                                      <span className="menu-title">
                                        Activity
                                      </span>
                                    </a>
                                    {/*end:Menu link*/}
                                  </div>
                                  {/*end:Menu item*/}
                                </div>
                                {/*end:Col*/}
                                {/*begin:Col*/}
                                <div className="col-lg-3 mb-6 mb-lg-0">
                                  {/*begin:Menu section*/}
                                  <div className="mb-6">
                                    {/*begin:Menu heading*/}
                                    <h4 className="fs-6 fs-lg-4 fw-semibold mb-3 ms-4">
                                      Corporate
                                    </h4>
                                    {/*end:Menu heading*/}
                                    {/*begin:Menu item*/}
                                    <div className="menu-item p-0 m-0">
                                      {/*begin:Menu link*/}
                                      <a
                                        href="https://preview.keenthemes.com/keen/demo3/pages/about.html"
                                        className="menu-link "
                                      >
                                        <span className="menu-title">
                                          About
                                        </span>
                                      </a>
                                      {/*end:Menu link*/}
                                    </div>
                                    {/*end:Menu item*/}
                                    {/*begin:Menu item*/}
                                    <div className="menu-item p-0 m-0">
                                      {/*begin:Menu link*/}
                                      <a
                                        href="https://preview.keenthemes.com/keen/demo3/pages/team.html"
                                        className="menu-link "
                                      >
                                        <span className="menu-title">
                                          Our Team
                                        </span>
                                      </a>
                                      {/*end:Menu link*/}
                                    </div>
                                    {/*end:Menu item*/}
                                    {/*begin:Menu item*/}
                                    <div className="menu-item p-0 m-0">
                                      {/*begin:Menu link*/}
                                      <a
                                        href="https://preview.keenthemes.com/keen/demo3/pages/faq.html"
                                        className="menu-link "
                                      >
                                        <span className="menu-title">FAQ</span>
                                      </a>
                                      {/*end:Menu link*/}
                                    </div>
                                    {/*end:Menu item*/}
                                    {/*begin:Menu item*/}
                                    <div className="menu-item p-0 m-0">
                                      {/*begin:Menu link*/}
                                      <a
                                        href="https://preview.keenthemes.com/keen/demo3/pages/contact.html"
                                        className="menu-link "
                                      >
                                        <span className="menu-title">
                                          Contact Us
                                        </span>
                                      </a>
                                      {/*end:Menu link*/}
                                    </div>
                                    {/*end:Menu item*/}
                                    {/*begin:Menu item*/}
                                    <div className="menu-item p-0 m-0">
                                      {/*begin:Menu link*/}
                                      <a
                                        href="https://preview.keenthemes.com/keen/demo3/pages/pricing.html"
                                        className="menu-link "
                                      >
                                        <span className="menu-title">
                                          Pricing
                                        </span>
                                      </a>
                                      {/*end:Menu link*/}
                                    </div>
                                    {/*end:Menu item*/}
                                    {/*begin:Menu item*/}
                                    <div className="menu-item p-0 m-0">
                                      {/*begin:Menu link*/}
                                      <a
                                        href="https://preview.keenthemes.com/keen/demo3/pages/licenses.html"
                                        className="menu-link "
                                      >
                                        <span className="menu-title">
                                          Licenses
                                        </span>
                                      </a>
                                      {/*end:Menu link*/}
                                    </div>
                                    {/*end:Menu item*/}
                                    {/*begin:Menu item*/}
                                    <div className="menu-item p-0 m-0">
                                      {/*begin:Menu link*/}
                                      <a
                                        href="https://preview.keenthemes.com/keen/demo3/pages/sitemap.html"
                                        className="menu-link "
                                      >
                                        <span className="menu-title">
                                          Sitemap
                                        </span>
                                      </a>
                                      {/*end:Menu link*/}
                                    </div>
                                    {/*end:Menu item*/}
                                  </div>
                                  {/*end:Menu section*/}
                                </div>
                                {/*end:Col*/}
                                {/*begin:Col*/}
                                <div className="col-lg-3 mb-6 mb-lg-0">
                                  {/*begin:Menu section*/}
                                  <div className="mb-6">
                                    {/*begin:Menu heading*/}
                                    <h4 className="fs-6 fs-lg-4 fw-semibold mb-3 ms-4">
                                      Blog
                                    </h4>
                                    {/*end:Menu heading*/}
                                    {/*begin:Menu item*/}
                                    <div className="menu-item p-0 m-0">
                                      {/*begin:Menu link*/}
                                      <a
                                        href="https://preview.keenthemes.com/keen/demo3/pages/blog/home.html"
                                        className="menu-link "
                                      >
                                        <span className="menu-title">
                                          Blog Home
                                        </span>
                                      </a>
                                      {/*end:Menu link*/}
                                    </div>
                                    {/*end:Menu item*/}
                                    {/*begin:Menu item*/}
                                    <div className="menu-item p-0 m-0">
                                      {/*begin:Menu link*/}
                                      <a
                                        href="https://preview.keenthemes.com/keen/demo3/pages/blog/post.html"
                                        className="menu-link "
                                      >
                                        <span className="menu-title">
                                          Blog Post
                                        </span>
                                      </a>
                                      {/*end:Menu link*/}
                                    </div>
                                    {/*end:Menu item*/}
                                  </div>
                                  {/*end:Menu section*/}
                                  {/*begin:Menu section*/}
                                  <div className="mb-0">
                                    {/*begin:Menu heading*/}
                                    <h4 className="fs-6 fs-lg-4 fw-semibold mb-3 ms-4">
                                      Careers
                                    </h4>
                                    {/*end:Menu heading*/}
                                    {/*begin:Menu item*/}
                                    <div className="menu-item p-0 m-0">
                                      {/*begin:Menu link*/}
                                      <a
                                        href="https://preview.keenthemes.com/keen/demo3/pages/careers/list.html"
                                        className="menu-link "
                                      >
                                        <span className="menu-title">
                                          Careers List
                                        </span>
                                      </a>
                                      {/*end:Menu link*/}
                                    </div>
                                    {/*end:Menu item*/}
                                    {/*begin:Menu item*/}
                                    <div className="menu-item p-0 m-0">
                                      {/*begin:Menu link*/}
                                      <a
                                        href="https://preview.keenthemes.com/keen/demo3/pages/careers/apply.html"
                                        className="menu-link "
                                      >
                                        <span className="menu-title">
                                          Careers Apply
                                        </span>
                                      </a>
                                      {/*end:Menu link*/}
                                    </div>
                                    {/*end:Menu item*/}
                                  </div>
                                  {/*end:Menu section*/}
                                </div>
                                {/*end:Col*/}
                                {/*begin:Col*/}
                                <div className="col-lg-3 mb-6 mb-lg-0">
                                  {/*begin:Menu section*/}
                                  <div className="mb-0">
                                    {/*begin:Menu heading*/}
                                    <h4 className="fs-6 fs-lg-4 fw-semibold mb-3 ms-4">
                                      Social
                                    </h4>
                                    {/*end:Menu heading*/}
                                    {/*begin:Menu item*/}
                                    <div className="menu-item p-0 m-0">
                                      {/*begin:Menu link*/}
                                      <a
                                        href="https://preview.keenthemes.com/keen/demo3/pages/social/feeds.html"
                                        className="menu-link "
                                      >
                                        <span className="menu-title">
                                          Feeds
                                        </span>
                                      </a>
                                      {/*end:Menu link*/}
                                    </div>
                                    {/*end:Menu item*/}
                                    {/*begin:Menu item*/}
                                    <div className="menu-item p-0 m-0">
                                      {/*begin:Menu link*/}
                                      <a
                                        href="https://preview.keenthemes.com/keen/demo3/pages/social/activity.html"
                                        className="menu-link "
                                      >
                                        <span className="menu-title">
                                          Activty
                                        </span>
                                      </a>
                                      {/*end:Menu link*/}
                                    </div>
                                    {/*end:Menu item*/}
                                    {/*begin:Menu item*/}
                                    <div className="menu-item p-0 m-0">
                                      {/*begin:Menu link*/}
                                      <a
                                        href="https://preview.keenthemes.com/keen/demo3/pages/social/followers.html"
                                        className="menu-link "
                                      >
                                        <span className="menu-title">
                                          Followers
                                        </span>
                                      </a>
                                      {/*end:Menu link*/}
                                    </div>
                                    {/*end:Menu item*/}
                                    {/*begin:Menu item*/}
                                    <div className="menu-item p-0 m-0">
                                      {/*begin:Menu link*/}
                                      <a
                                        href="https://preview.keenthemes.com/keen/demo3/pages/social/settings.html"
                                        className="menu-link "
                                      >
                                        <span className="menu-title">
                                          Settings
                                        </span>
                                      </a>
                                      {/*end:Menu link*/}
                                    </div>
                                    {/*end:Menu item*/}
                                  </div>
                                  {/*end:Menu section*/}
                                </div>
                                {/*end:Col*/}
                              </div>
                              {/*end:Row*/}
                            </div>
                            {/*end:Col*/}
                            {/*begin:Col*/}
                            <div className="col-lg-4">
                              <img
                                src="https://preview.keenthemes.com/keen/demo3/assets/media/stock/600x600/img-82.jpg"
                                className="rounded mw-100"
                                alt=""
                              />
                            </div>
                            {/*end:Col*/}
                          </div>
                          {/*end:Row*/}
                        </div>
                        {/*end:Tab pane*/}
                        {/*begin:Tab pane*/}
                        <div
                          className="tab-pane  w-lg-600px"
                          id="kt_app_header_menu_pages_account"
                        >
                          {/*begin:Row*/}
                          <div className="row">
                            {/*begin:Col*/}
                            <div className="col-lg-5 mb-6 mb-lg-0">
                              {/*begin:Row*/}
                              <div className="row">
                                {/*begin:Col*/}
                                <div className="col-lg-6">
                                  {/*begin:Menu item*/}
                                  <div className="menu-item p-0 m-0">
                                    {/*begin:Menu link*/}
                                    <a
                                      href="https://preview.keenthemes.com/keen/demo3/account/overview.html"
                                      className="menu-link "
                                    >
                                      <span className="menu-title">
                                        Overview
                                      </span>
                                    </a>
                                    {/*end:Menu link*/}
                                  </div>
                                  {/*end:Menu item*/}
                                  {/*begin:Menu item*/}
                                  <div className="menu-item p-0 m-0">
                                    {/*begin:Menu link*/}
                                    <a
                                      href="https://preview.keenthemes.com/keen/demo3/account/settings.html"
                                      className="menu-link "
                                    >
                                      <span className="menu-title">
                                        Settings
                                      </span>
                                    </a>
                                    {/*end:Menu link*/}
                                  </div>
                                  {/*end:Menu item*/}
                                  {/*begin:Menu item*/}
                                  <div className="menu-item p-0 m-0">
                                    {/*begin:Menu link*/}
                                    <a
                                      href="https://preview.keenthemes.com/keen/demo3/account/security.html"
                                      className="menu-link "
                                    >
                                      <span className="menu-title">
                                        Security
                                      </span>
                                    </a>
                                    {/*end:Menu link*/}
                                  </div>
                                  {/*end:Menu item*/}
                                  {/*begin:Menu item*/}
                                  <div className="menu-item p-0 m-0">
                                    {/*begin:Menu link*/}
                                    <a
                                      href="https://preview.keenthemes.com/keen/demo3/account/activity.html"
                                      className="menu-link "
                                    >
                                      <span className="menu-title">
                                        Activity
                                      </span>
                                    </a>
                                    {/*end:Menu link*/}
                                  </div>
                                  {/*end:Menu item*/}
                                  {/*begin:Menu item*/}
                                  <div className="menu-item p-0 m-0">
                                    {/*begin:Menu link*/}
                                    <a
                                      href="https://preview.keenthemes.com/keen/demo3/account/billing.html"
                                      className="menu-link "
                                    >
                                      <span className="menu-title">
                                        Billing
                                      </span>
                                    </a>
                                    {/*end:Menu link*/}
                                  </div>
                                  {/*end:Menu item*/}
                                </div>
                                {/*end:Col*/}
                                {/*begin:Col*/}
                                <div className="col-lg-6">
                                  {/*begin:Menu item*/}
                                  <div className="menu-item p-0 m-0">
                                    {/*begin:Menu link*/}
                                    <a
                                      href="https://preview.keenthemes.com/keen/demo3/account/statements.html"
                                      className="menu-link "
                                    >
                                      <span className="menu-title">
                                        Statements
                                      </span>
                                    </a>
                                    {/*end:Menu link*/}
                                  </div>
                                  {/*end:Menu item*/}
                                  {/*begin:Menu item*/}
                                  <div className="menu-item p-0 m-0">
                                    {/*begin:Menu link*/}
                                    <a
                                      href="https://preview.keenthemes.com/keen/demo3/account/referrals.html"
                                      className="menu-link "
                                    >
                                      <span className="menu-title">
                                        Referrals
                                      </span>
                                    </a>
                                    {/*end:Menu link*/}
                                  </div>
                                  {/*end:Menu item*/}
                                  {/*begin:Menu item*/}
                                  <div className="menu-item p-0 m-0">
                                    {/*begin:Menu link*/}
                                    <a
                                      href="https://preview.keenthemes.com/keen/demo3/account/api-keys.html"
                                      className="menu-link "
                                    >
                                      <span className="menu-title">
                                        API Keys
                                      </span>
                                    </a>
                                    {/*end:Menu link*/}
                                  </div>
                                  {/*end:Menu item*/}
                                  {/*begin:Menu item*/}
                                  <div className="menu-item p-0 m-0">
                                    {/*begin:Menu link*/}
                                    <a
                                      href="https://preview.keenthemes.com/keen/demo3/account/logs.html"
                                      className="menu-link "
                                    >
                                      <span className="menu-title">Logs</span>
                                    </a>
                                    {/*end:Menu link*/}
                                  </div>
                                  {/*end:Menu item*/}
                                </div>
                                {/*end:Col*/}
                              </div>
                              {/*end:Row*/}
                            </div>
                            {/*end:Col*/}
                            {/*begin:Col*/}
                            <div className="col-lg-7">
                              <img
                                src="https://preview.keenthemes.com/keen/demo3/assets/media/stock/900x600/46.jpg"
                                className="rounded mw-100"
                                alt=""
                              />
                            </div>
                            {/*end:Col*/}
                          </div>
                          {/*end:Row*/}{" "}
                        </div>
                        {/*end:Tab pane*/}
                        {/*begin:Tab pane*/}
                        <div
                          className="tab-pane  w-lg-600px"
                          id="kt_app_header_menu_pages_authentication"
                        >
                          {/*begin:Row*/}
                          <div className="row">
                            {/*begin:Col*/}
                            <div className="col-lg-4 mb-6 mb-lg-0">
                              {/*begin:Menu section*/}
                              <div className="mb-6">
                                {/*begin:Menu heading*/}
                                <h4 className="fs-6 fs-lg-4 fw-semibold mb-3 ms-4">
                                  Corporate
                                </h4>
                                {/*end:Menu heading*/}
                                {/*begin:Menu item*/}
                                <div className="menu-item p-0 m-0">
                                  {/*begin:Menu link*/}
                                  <a
                                    href="https://preview.keenthemes.com/keen/demo3/authentication/layouts/corporate/sign-in.html"
                                    className="menu-link "
                                  >
                                    <span className="menu-title">Sign-In</span>
                                  </a>
                                  {/*end:Menu link*/}
                                </div>
                                {/*end:Menu item*/}
                                {/*begin:Menu item*/}
                                <div className="menu-item p-0 m-0">
                                  {/*begin:Menu link*/}
                                  <a
                                    href="https://preview.keenthemes.com/keen/demo3/authentication/layouts/corporate/sign-up.html"
                                    className="menu-link "
                                  >
                                    <span className="menu-title">Sign-Up</span>
                                  </a>
                                  {/*end:Menu link*/}
                                </div>
                                {/*end:Menu item*/}
                                {/*begin:Menu item*/}
                                <div className="menu-item p-0 m-0">
                                  {/*begin:Menu link*/}
                                  <a
                                    href="https://preview.keenthemes.com/keen/demo3/authentication/layouts/corporate/two-factor.html"
                                    className="menu-link "
                                  >
                                    <span className="menu-title">
                                      Two-steps
                                    </span>
                                  </a>
                                  {/*end:Menu link*/}
                                </div>
                                {/*end:Menu item*/}
                                {/*begin:Menu item*/}
                                <div className="menu-item p-0 m-0">
                                  {/*begin:Menu link*/}
                                  <a
                                    href="https://preview.keenthemes.com/keen/demo3/authentication/layouts/corporate/reset-password.html"
                                    className="menu-link "
                                  >
                                    <span className="menu-title">
                                      Reset Password
                                    </span>
                                  </a>
                                  {/*end:Menu link*/}
                                </div>
                                {/*end:Menu item*/}
                                {/*begin:Menu item*/}
                                <div className="menu-item p-0 m-0">
                                  {/*begin:Menu link*/}
                                  <a
                                    href="https://preview.keenthemes.com/keen/demo3/authentication/layouts/corporate/new-password.html"
                                    className="menu-link "
                                  >
                                    <span className="menu-title">
                                      New Password
                                    </span>
                                  </a>
                                  {/*end:Menu link*/}
                                </div>
                                {/*end:Menu item*/}
                                {/*begin:Menu item*/}
                                <div className="menu-item p-0 m-0">
                                  {/*begin:Menu link*/}
                                  <a
                                    href="https://preview.keenthemes.com/keen/demo3/authentication/extended/multi-steps-sign-up.html"
                                    className="menu-link "
                                  >
                                    <span className="menu-title">
                                      Multi-steps Sign-Up
                                    </span>
                                  </a>
                                  {/*end:Menu link*/}
                                </div>
                                {/*end:Menu item*/}
                                {/*begin:Menu item*/}
                                <div className="menu-item p-0 m-0">
                                  {/*begin:Menu link*/}
                                  <a
                                    href="https://preview.keenthemes.com/keen/demo3/authentication/extended/two-factor-auth.html"
                                    className="menu-link "
                                  >
                                    <span className="menu-title">
                                      Two Factor Auth
                                    </span>
                                  </a>
                                  {/*end:Menu link*/}
                                </div>
                                {/*end:Menu item*/}
                              </div>
                              {/*end:Menu section*/}
                            </div>
                            {/*end:Col*/}
                            {/*begin:Col*/}
                            <div className="col-lg-4 mb-6 mb-lg-0">
                              {/*begin:Menu section*/}
                              <div className="mb-0">
                                {/*begin:Menu heading*/}
                                <h4 className="fs-6 fs-lg-4 fw-semibold mb-3 ms-4">
                                  General
                                </h4>
                                {/*end:Menu heading*/}
                                {/*begin:Menu item*/}
                                <div className="menu-item p-0 m-0">
                                  {/*begin:Menu link*/}
                                  <a
                                    href="https://preview.keenthemes.com/keen/demo3/authentication/general/welcome.html"
                                    className="menu-link "
                                  >
                                    <span className="menu-title">
                                      Welcome Message
                                    </span>
                                  </a>
                                  {/*end:Menu link*/}
                                </div>
                                {/*end:Menu item*/}
                                {/*begin:Menu item*/}
                                <div className="menu-item p-0 m-0">
                                  {/*begin:Menu link*/}
                                  <a
                                    href="https://preview.keenthemes.com/keen/demo3/authentication/general/verify-email.html"
                                    className="menu-link "
                                  >
                                    <span className="menu-title">
                                      Verify Email
                                    </span>
                                  </a>
                                  {/*end:Menu link*/}
                                </div>
                                {/*end:Menu item*/}
                                {/*begin:Menu item*/}
                                <div className="menu-item p-0 m-0">
                                  {/*begin:Menu link*/}
                                  <a
                                    href="https://preview.keenthemes.com/keen/demo3/authentication/general/coming-soon.html"
                                    className="menu-link "
                                  >
                                    <span className="menu-title">
                                      Coming Soon
                                    </span>
                                  </a>
                                  {/*end:Menu link*/}
                                </div>
                                {/*end:Menu item*/}
                                {/*begin:Menu item*/}
                                <div className="menu-item p-0 m-0">
                                  {/*begin:Menu link*/}
                                  <a
                                    href="https://preview.keenthemes.com/keen/demo3/authentication/general/password-confirmation.html"
                                    className="menu-link "
                                  >
                                    <span className="menu-title">
                                      Password Confirmation
                                    </span>
                                  </a>
                                  {/*end:Menu link*/}
                                </div>
                                {/*end:Menu item*/}
                                {/*begin:Menu item*/}
                                <div className="menu-item p-0 m-0">
                                  {/*begin:Menu link*/}
                                  <a
                                    href="https://preview.keenthemes.com/keen/demo3/authentication/general/account-deactivated.html"
                                    className="menu-link "
                                  >
                                    <span className="menu-title">
                                      Account Deactivation
                                    </span>
                                  </a>
                                  {/*end:Menu link*/}
                                </div>
                                {/*end:Menu item*/}
                                {/*begin:Menu item*/}
                                <div className="menu-item p-0 m-0">
                                  {/*begin:Menu link*/}
                                  <a
                                    href="https://preview.keenthemes.com/keen/demo3/authentication/general/error-404.html"
                                    className="menu-link "
                                  >
                                    <span className="menu-title">
                                      Error 404
                                    </span>
                                  </a>
                                  {/*end:Menu link*/}
                                </div>
                                {/*end:Menu item*/}
                                {/*begin:Menu item*/}
                                <div className="menu-item p-0 m-0">
                                  {/*begin:Menu link*/}
                                  <a
                                    href="https://preview.keenthemes.com/keen/demo3/authentication/general/error-500.html"
                                    className="menu-link "
                                  >
                                    <span className="menu-title">
                                      Error 500
                                    </span>
                                  </a>
                                  {/*end:Menu link*/}
                                </div>
                                {/*end:Menu item*/}
                                {/*begin:Menu item*/}
                                <div className="menu-item p-0 m-0">
                                  {/*begin:Menu link*/}
                                  <a
                                    href="https://preview.keenthemes.com/keen/demo3/authentication/general/maintenance.html"
                                    className="menu-link "
                                  >
                                    <span className="menu-title">
                                      Maintenance
                                    </span>
                                  </a>
                                  {/*end:Menu link*/}
                                </div>
                                {/*end:Menu item*/}
                              </div>
                              {/*end:Menu section*/}
                            </div>
                            {/*end:Col*/}
                            {/*begin:Col*/}
                            <div className="col-lg-4 mb-6 mb-lg-0">
                              {/*begin:Menu section*/}
                              <div className="mb-0">
                                {/*begin:Menu heading*/}
                                <h4 className="fs-6 fs-lg-4 fw-semibold mb-3 ms-4">
                                  Email Templates
                                </h4>
                                {/*end:Menu heading*/}
                                {/*begin:Menu item*/}
                                <div className="menu-item p-0 m-0">
                                  {/*begin:Menu link*/}
                                  <a
                                    href="https://preview.keenthemes.com/keen/demo3/authentication/email/welcome-message.html"
                                    className="menu-link "
                                  >
                                    <span className="menu-title">
                                      Welcome Message
                                    </span>
                                  </a>
                                  {/*end:Menu link*/}
                                </div>
                                {/*end:Menu item*/}
                                {/*begin:Menu item*/}
                                <div className="menu-item p-0 m-0">
                                  {/*begin:Menu link*/}
                                  <a
                                    href="https://preview.keenthemes.com/keen/demo3/authentication/email/reset-password.html"
                                    className="menu-link "
                                  >
                                    <span className="menu-title">
                                      Reset Password
                                    </span>
                                  </a>
                                  {/*end:Menu link*/}
                                </div>
                                {/*end:Menu item*/}
                                {/*begin:Menu item*/}
                                <div className="menu-item p-0 m-0">
                                  {/*begin:Menu link*/}
                                  <a
                                    href="https://preview.keenthemes.com/keen/demo3/authentication/email/subscription-confirmed.html"
                                    className="menu-link "
                                  >
                                    <span className="menu-title">
                                      Subscription Confirmed
                                    </span>
                                  </a>
                                  {/*end:Menu link*/}
                                </div>
                                {/*end:Menu item*/}
                                {/*begin:Menu item*/}
                                <div className="menu-item p-0 m-0">
                                  {/*begin:Menu link*/}
                                  <a
                                    href="https://preview.keenthemes.com/keen/demo3/authentication/email/card-declined.html"
                                    className="menu-link "
                                  >
                                    <span className="menu-title">
                                      Credit Card Declined
                                    </span>
                                  </a>
                                  {/*end:Menu link*/}
                                </div>
                                {/*end:Menu item*/}
                                {/*begin:Menu item*/}
                                <div className="menu-item p-0 m-0">
                                  {/*begin:Menu link*/}
                                  <a
                                    href="https://preview.keenthemes.com/keen/demo3/authentication/email/promo-1.html"
                                    className="menu-link "
                                  >
                                    <span className="menu-title">Promo 1</span>
                                  </a>
                                  {/*end:Menu link*/}
                                </div>
                                {/*end:Menu item*/}
                                {/*begin:Menu item*/}
                                <div className="menu-item p-0 m-0">
                                  {/*begin:Menu link*/}
                                  <a
                                    href="https://preview.keenthemes.com/keen/demo3/authentication/email/promo-2.html"
                                    className="menu-link "
                                  >
                                    <span className="menu-title">Promo 2</span>
                                  </a>
                                  {/*end:Menu link*/}
                                </div>
                                {/*end:Menu item*/}
                                {/*begin:Menu item*/}
                                <div className="menu-item p-0 m-0">
                                  {/*begin:Menu link*/}
                                  <a
                                    href="https://preview.keenthemes.com/keen/demo3/authentication/email/promo-3.html"
                                    className="menu-link "
                                  >
                                    <span className="menu-title">Promo 3</span>
                                  </a>
                                  {/*end:Menu link*/}
                                </div>
                                {/*end:Menu item*/}
                              </div>
                              {/*end:Menu section*/}
                            </div>
                            {/*end:Col*/}
                          </div>
                          {/*end:Row*/}{" "}
                        </div>
                        {/*end:Tab pane*/}
                        {/*begin:Tab pane*/}
                        <div
                          className="tab-pane  w-lg-1000px"
                          id="kt_app_header_menu_pages_utilities"
                        >
                          {/*begin:Row*/}
                          <div className="row">
                            {/*begin:Col*/}
                            <div className="col-lg-7">
                              {/*begin:Row*/}
                              <div className="row">
                                {/*begin:Col*/}
                                <div className="col-lg-4 mb-6 mb-lg-0">
                                  {/*begin:Menu section*/}
                                  <div className="mb-0">
                                    {/*begin:Menu heading*/}
                                    <h4 className="fs-6 fs-lg-4 fw-semibold mb-3 ms-4">
                                      General Modals
                                    </h4>
                                    {/*end:Menu heading*/}
                                    {/*begin:Menu item*/}
                                    <div className="menu-item p-0 m-0">
                                      {/*begin:Menu link*/}
                                      <a
                                        href="https://preview.keenthemes.com/keen/demo3/utilities/modals/general/invite-friends.html"
                                        className="menu-link "
                                      >
                                        <span className="menu-title">
                                          Invite Friends
                                        </span>
                                      </a>
                                      {/*end:Menu link*/}
                                    </div>
                                    {/*end:Menu item*/}
                                    {/*begin:Menu item*/}
                                    <div className="menu-item p-0 m-0">
                                      {/*begin:Menu link*/}
                                      <a
                                        href="https://preview.keenthemes.com/keen/demo3/utilities/modals/general/view-users.html"
                                        className="menu-link "
                                      >
                                        <span className="menu-title">
                                          View Users
                                        </span>
                                      </a>
                                      {/*end:Menu link*/}
                                    </div>
                                    {/*end:Menu item*/}
                                    {/*begin:Menu item*/}
                                    <div className="menu-item p-0 m-0">
                                      {/*begin:Menu link*/}
                                      <a
                                        href="https://preview.keenthemes.com/keen/demo3/utilities/modals/general/select-users.html"
                                        className="menu-link "
                                      >
                                        <span className="menu-title">
                                          Select Users
                                        </span>
                                      </a>
                                      {/*end:Menu link*/}
                                    </div>
                                    {/*end:Menu item*/}
                                    {/*begin:Menu item*/}
                                    <div className="menu-item p-0 m-0">
                                      {/*begin:Menu link*/}
                                      <a
                                        href="https://preview.keenthemes.com/keen/demo3/utilities/modals/general/upgrade-plan.html"
                                        className="menu-link "
                                      >
                                        <span className="menu-title">
                                          Upgrade Plan
                                        </span>
                                      </a>
                                      {/*end:Menu link*/}
                                    </div>
                                    {/*end:Menu item*/}
                                    {/*begin:Menu item*/}
                                    <div className="menu-item p-0 m-0">
                                      {/*begin:Menu link*/}
                                      <a
                                        href="https://preview.keenthemes.com/keen/demo3/utilities/modals/general/share-earn.html"
                                        className="menu-link "
                                      >
                                        <span className="menu-title">
                                          Share &amp; Earn
                                        </span>
                                      </a>
                                      {/*end:Menu link*/}
                                    </div>
                                    {/*end:Menu item*/}
                                    {/*begin:Menu item*/}
                                    <div className="menu-item p-0 m-0">
                                      {/*begin:Menu link*/}
                                      <a
                                        href="https://preview.keenthemes.com/keen/demo3/utilities/modals/forms/new-target.html"
                                        className="menu-link "
                                      >
                                        <span className="menu-title">
                                          New Target
                                        </span>
                                      </a>
                                      {/*end:Menu link*/}
                                    </div>
                                    {/*end:Menu item*/}
                                    {/*begin:Menu item*/}
                                    <div className="menu-item p-0 m-0">
                                      {/*begin:Menu link*/}
                                      <a
                                        href="https://preview.keenthemes.com/keen/demo3/utilities/modals/forms/new-card.html"
                                        className="menu-link "
                                      >
                                        <span className="menu-title">
                                          New Card
                                        </span>
                                      </a>
                                      {/*end:Menu link*/}
                                    </div>
                                    {/*end:Menu item*/}
                                    {/*begin:Menu item*/}
                                    <div className="menu-item p-0 m-0">
                                      {/*begin:Menu link*/}
                                      <a
                                        href="https://preview.keenthemes.com/keen/demo3/utilities/modals/forms/new-address.html"
                                        className="menu-link "
                                      >
                                        <span className="menu-title">
                                          New Address
                                        </span>
                                      </a>
                                      {/*end:Menu link*/}
                                    </div>
                                    {/*end:Menu item*/}
                                    {/*begin:Menu item*/}
                                    <div className="menu-item p-0 m-0">
                                      {/*begin:Menu link*/}
                                      <a
                                        href="https://preview.keenthemes.com/keen/demo3/utilities/modals/forms/create-api-key.html"
                                        className="menu-link "
                                      >
                                        <span className="menu-title">
                                          Create API Key
                                        </span>
                                      </a>
                                      {/*end:Menu link*/}
                                    </div>
                                    {/*end:Menu item*/}
                                    {/*begin:Menu item*/}
                                    <div className="menu-item p-0 m-0">
                                      {/*begin:Menu link*/}
                                      <a
                                        href="https://preview.keenthemes.com/keen/demo3/utilities/modals/forms/bidding.html"
                                        className="menu-link "
                                      >
                                        <span className="menu-title">
                                          Bidding
                                        </span>
                                      </a>
                                      {/*end:Menu link*/}
                                    </div>
                                    {/*end:Menu item*/}
                                  </div>
                                  {/*end:Menu section*/}
                                </div>
                                {/*end:Col*/}
                                {/*begin:Col*/}
                                <div className="col-lg-4 mb-6 mb-lg-0">
                                  {/*begin:Menu section*/}
                                  <div className="mb-6">
                                    {/*begin:Menu heading*/}
                                    <h4 className="fs-6 fs-lg-4 fw-semibold mb-3 ms-4">
                                      Advanced Modals
                                    </h4>
                                    {/*end:Menu heading*/}
                                    {/*begin:Menu item*/}
                                    <div className="menu-item p-0 m-0">
                                      {/*begin:Menu link*/}
                                      <a
                                        href="https://preview.keenthemes.com/keen/demo3/utilities/modals/wizards/create-app.html"
                                        className="menu-link "
                                      >
                                        <span className="menu-title">
                                          Create App
                                        </span>
                                      </a>
                                      {/*end:Menu link*/}
                                    </div>
                                    {/*end:Menu item*/}
                                    {/*begin:Menu item*/}
                                    <div className="menu-item p-0 m-0">
                                      {/*begin:Menu link*/}
                                      <a
                                        href="https://preview.keenthemes.com/keen/demo3/utilities/modals/wizards/create-campaign.html"
                                        className="menu-link "
                                      >
                                        <span className="menu-title">
                                          Create Campaign
                                        </span>
                                      </a>
                                      {/*end:Menu link*/}
                                    </div>
                                    {/*end:Menu item*/}
                                    {/*begin:Menu item*/}
                                    <div className="menu-item p-0 m-0">
                                      {/*begin:Menu link*/}
                                      <a
                                        href="https://preview.keenthemes.com/keen/demo3/utilities/modals/wizards/create-account.html"
                                        className="menu-link "
                                      >
                                        <span className="menu-title">
                                          Create Business Acc
                                        </span>
                                      </a>
                                      {/*end:Menu link*/}
                                    </div>
                                    {/*end:Menu item*/}
                                    {/*begin:Menu item*/}
                                    <div className="menu-item p-0 m-0">
                                      {/*begin:Menu link*/}
                                      <a
                                        href="https://preview.keenthemes.com/keen/demo3/utilities/modals/wizards/create-project.html"
                                        className="menu-link "
                                      >
                                        <span className="menu-title">
                                          Create Project
                                        </span>
                                      </a>
                                      {/*end:Menu link*/}
                                    </div>
                                    {/*end:Menu item*/}
                                    {/*begin:Menu item*/}
                                    <div className="menu-item p-0 m-0">
                                      {/*begin:Menu link*/}
                                      <a
                                        href="https://preview.keenthemes.com/keen/demo3/utilities/modals/wizards/top-up-wallet.html"
                                        className="menu-link "
                                      >
                                        <span className="menu-title">
                                          Top Up Wallet
                                        </span>
                                      </a>
                                      {/*end:Menu link*/}
                                    </div>
                                    {/*end:Menu item*/}
                                    {/*begin:Menu item*/}
                                    <div className="menu-item p-0 m-0">
                                      {/*begin:Menu link*/}
                                      <a
                                        href="https://preview.keenthemes.com/keen/demo3/utilities/modals/wizards/offer-a-deal.html"
                                        className="menu-link "
                                      >
                                        <span className="menu-title">
                                          Offer a Deal
                                        </span>
                                      </a>
                                      {/*end:Menu link*/}
                                    </div>
                                    {/*end:Menu item*/}
                                    {/*begin:Menu item*/}
                                    <div className="menu-item p-0 m-0">
                                      {/*begin:Menu link*/}
                                      <a
                                        href="https://preview.keenthemes.com/keen/demo3/utilities/modals/wizards/two-factor-authentication.html"
                                        className="menu-link "
                                      >
                                        <span className="menu-title">
                                          Two Factor Auth
                                        </span>
                                      </a>
                                      {/*end:Menu link*/}
                                    </div>
                                    {/*end:Menu item*/}
                                  </div>
                                  {/*end:Menu section*/}
                                  {/*begin:Menu section*/}
                                  <div className="mb-0">
                                    {/*begin:Menu heading*/}
                                    <h4 className="fs-6 fs-lg-4 fw-semibold mb-3 ms-4">
                                      Search
                                    </h4>
                                    {/*end:Menu heading*/}
                                    {/*begin:Menu item*/}
                                    <div className="menu-item p-0 m-0">
                                      {/*begin:Menu link*/}
                                      <a
                                        href="https://preview.keenthemes.com/keen/demo3/utilities/search/horizontal.html"
                                        className="menu-link "
                                      >
                                        <span className="menu-title">
                                          Horizontal
                                        </span>
                                      </a>
                                      {/*end:Menu link*/}
                                    </div>
                                    {/*end:Menu item*/}
                                    {/*begin:Menu item*/}
                                    <div className="menu-item p-0 m-0">
                                      {/*begin:Menu link*/}
                                      <a
                                        href="https://preview.keenthemes.com/keen/demo3/utilities/search/vertical.html"
                                        className="menu-link "
                                      >
                                        <span className="menu-title">
                                          Vertical
                                        </span>
                                      </a>
                                      {/*end:Menu link*/}
                                    </div>
                                    {/*end:Menu item*/}
                                    {/*begin:Menu item*/}
                                    <div className="menu-item p-0 m-0">
                                      {/*begin:Menu link*/}
                                      <a
                                        href="https://preview.keenthemes.com/keen/demo3/utilities/modals/search/users.html"
                                        className="menu-link "
                                      >
                                        <span className="menu-title">
                                          Users
                                        </span>
                                      </a>
                                      {/*end:Menu link*/}
                                    </div>
                                    {/*end:Menu item*/}
                                    {/*begin:Menu item*/}
                                    <div className="menu-item p-0 m-0">
                                      {/*begin:Menu link*/}
                                      <a
                                        href="https://preview.keenthemes.com/keen/demo3/utilities/modals/search/select-location.html"
                                        className="menu-link "
                                      >
                                        <span className="menu-title">
                                          Select Location
                                        </span>
                                      </a>
                                      {/*end:Menu link*/}
                                    </div>
                                    {/*end:Menu item*/}
                                  </div>
                                  {/*end:Menu section*/}
                                </div>
                                {/*end:Col*/}
                                {/*begin:Col*/}
                                <div className="col-lg-4 mb-6 mb-lg-0">
                                  {/*begin:Menu section*/}
                                  <div className="mb-0">
                                    {/*begin:Menu heading*/}
                                    <h4 className="fs-6 fs-lg-4 fw-semibold mb-3 ms-4">
                                      Wizards
                                    </h4>
                                    {/*end:Menu heading*/}
                                    {/*begin:Menu item*/}
                                    <div className="menu-item p-0 m-0">
                                      {/*begin:Menu link*/}
                                      <a
                                        href="https://preview.keenthemes.com/keen/demo3/utilities/wizards/horizontal.html"
                                        className="menu-link "
                                      >
                                        <span className="menu-title">
                                          Horizontal
                                        </span>
                                      </a>
                                      {/*end:Menu link*/}
                                    </div>
                                    {/*end:Menu item*/}
                                    {/*begin:Menu item*/}
                                    <div className="menu-item p-0 m-0">
                                      {/*begin:Menu link*/}
                                      <a
                                        href="https://preview.keenthemes.com/keen/demo3/utilities/wizards/vertical.html"
                                        className="menu-link "
                                      >
                                        <span className="menu-title">
                                          Vertical
                                        </span>
                                      </a>
                                      {/*end:Menu link*/}
                                    </div>
                                    {/*end:Menu item*/}
                                    {/*begin:Menu item*/}
                                    <div className="menu-item p-0 m-0">
                                      {/*begin:Menu link*/}
                                      <a
                                        href="https://preview.keenthemes.com/keen/demo3/utilities/wizards/two-factor-authentication.html"
                                        className="menu-link "
                                      >
                                        <span className="menu-title">
                                          Two Factor Auth
                                        </span>
                                      </a>
                                      {/*end:Menu link*/}
                                    </div>
                                    {/*end:Menu item*/}
                                    {/*begin:Menu item*/}
                                    <div className="menu-item p-0 m-0">
                                      {/*begin:Menu link*/}
                                      <a
                                        href="https://preview.keenthemes.com/keen/demo3/utilities/wizards/create-app.html"
                                        className="menu-link "
                                      >
                                        <span className="menu-title">
                                          Create App
                                        </span>
                                      </a>
                                      {/*end:Menu link*/}
                                    </div>
                                    {/*end:Menu item*/}
                                    {/*begin:Menu item*/}
                                    <div className="menu-item p-0 m-0">
                                      {/*begin:Menu link*/}
                                      <a
                                        href="https://preview.keenthemes.com/keen/demo3/utilities/wizards/create-campaign.html"
                                        className="menu-link "
                                      >
                                        <span className="menu-title">
                                          Create Campaign
                                        </span>
                                      </a>
                                      {/*end:Menu link*/}
                                    </div>
                                    {/*end:Menu item*/}
                                    {/*begin:Menu item*/}
                                    <div className="menu-item p-0 m-0">
                                      {/*begin:Menu link*/}
                                      <a
                                        href="https://preview.keenthemes.com/keen/demo3/utilities/wizards/create-account.html"
                                        className="menu-link "
                                      >
                                        <span className="menu-title">
                                          Create Account
                                        </span>
                                      </a>
                                      {/*end:Menu link*/}
                                    </div>
                                    {/*end:Menu item*/}
                                    {/*begin:Menu item*/}
                                    <div className="menu-item p-0 m-0">
                                      {/*begin:Menu link*/}
                                      <a
                                        href="https://preview.keenthemes.com/keen/demo3/utilities/wizards/create-project.html"
                                        className="menu-link "
                                      >
                                        <span className="menu-title">
                                          Create Project
                                        </span>
                                      </a>
                                      {/*end:Menu link*/}
                                    </div>
                                    {/*end:Menu item*/}
                                    {/*begin:Menu item*/}
                                    <div className="menu-item p-0 m-0">
                                      {/*begin:Menu link*/}
                                      <a
                                        href="https://preview.keenthemes.com/keen/demo3/utilities/modals/wizards/top-up-wallet.html"
                                        className="menu-link "
                                      >
                                        <span className="menu-title">
                                          Top Up Wallet
                                        </span>
                                      </a>
                                      {/*end:Menu link*/}
                                    </div>
                                    {/*end:Menu item*/}
                                    {/*begin:Menu item*/}
                                    <div className="menu-item p-0 m-0">
                                      {/*begin:Menu link*/}
                                      <a
                                        href="https://preview.keenthemes.com/keen/demo3/utilities/wizards/offer-a-deal.html"
                                        className="menu-link "
                                      >
                                        <span className="menu-title">
                                          Offer a Deal
                                        </span>
                                      </a>
                                      {/*end:Menu link*/}
                                    </div>
                                    {/*end:Menu item*/}
                                  </div>
                                  {/*end:Menu section*/}
                                </div>
                                {/*end:Col*/}
                              </div>
                              {/*end:Row*/}
                            </div>
                            {/*end:Col*/}
                            {/*begin:Col*/}
                            <div className="col-lg-5 pe-lg-5">
                              <img
                                src="https://preview.keenthemes.com/keen/demo3/assets/media/stock/600x600/img-84.jpg"
                                className="rounded mw-100"
                                alt=""
                              />
                            </div>
                            {/*end:Col*/}
                          </div>
                          {/*end:Row*/}{" "}
                        </div>
                        {/*end:Tab pane*/}
                      </div>
                      {/*end:Tab content*/}
                    </div>
                    <div
                      className="menu-state-bg pt-1 pb-3 px-3 py-lg-6 px-lg-6"
                      data-kt-menu-dismiss="true"
                    >
                      {/*begin:Row*/}
                      <div className="row">
                        {/*begin:Col*/}
                        <div className="col-lg-5 mb-3 pt-2">
                          {/*begin:Menu item*/}
                          <div className="menu-item p-0 m-0">
                            {/*begin:Menu link*/}
                            <a
                              href="https://preview.keenthemes.com/keen/demo3/layouts/light-sidebar.html"
                              className="menu-link "
                            >
                              <span className="menu-bullet">
                                <span className="bullet bullet-dot h-6px w-6px" />
                              </span>
                              <span className="menu-title">Light Sidebar</span>
                            </a>
                            {/*end:Menu link*/}
                          </div>
                          {/*end:Menu item*/}
                          {/*begin:Menu item*/}
                          <div className="menu-item p-0 m-0">
                            {/*begin:Menu link*/}
                            <a
                              href="https://preview.keenthemes.com/keen/demo3/layouts/dark-sidebar.html"
                              className="menu-link "
                            >
                              <span className="menu-bullet">
                                <span className="bullet bullet-dot h-6px w-6px" />
                              </span>
                              <span className="menu-title">Dark Sidebar</span>
                            </a>
                            {/*end:Menu link*/}
                          </div>
                          {/*end:Menu item*/}
                          {/*begin:Menu item*/}
                          <div className="menu-item p-0 m-0">
                            {/*begin:Menu link*/}
                            <a
                              href="https://preview.keenthemes.com/keen/demo3/layouts/light-header.html"
                              className="menu-link "
                            >
                              <span className="menu-bullet">
                                <span className="bullet bullet-dot h-6px w-6px" />
                              </span>
                              <span className="menu-title">Light Header</span>
                            </a>
                            {/*end:Menu link*/}
                          </div>
                          {/*end:Menu item*/}
                          {/*begin:Menu item*/}
                          <div className="menu-item p-0 m-0">
                            {/*begin:Menu link*/}
                            <a
                              href="https://preview.keenthemes.com/keen/demo3/layouts/dark-header.html"
                              className="menu-link "
                            >
                              <span className="menu-bullet">
                                <span className="bullet bullet-dot h-6px w-6px" />
                              </span>
                              <span className="menu-title">Dark Header</span>
                            </a>
                            {/*end:Menu link*/}
                          </div>
                          {/*end:Menu item*/}
                        </div>
                        {/*end:Col*/}
                        {/*begin:Col*/}
                        <div className="col-lg-7 mb-3 pt-2 pe-lg-8">
                          <img
                            src="https://preview.keenthemes.com/keen/demo3/assets/media/stock/900x600/74.jpg"
                            className="rounded mw-100"
                            alt=""
                          />
                        </div>
                        {/*end:Col*/}
                      </div>
                      {/*end:Row*/}
                      <div className="separator separator-dashed mx-lg-5 my-4" />
                      {/*begin:Landing*/}
                      <div className="d-flex flex-stack flex-wrap flex-lg-nowrap gap-2 mx-lg-5">
                        <div className="d-flex flex-column me-5">
                          <div className="fs-6 fw-bold text-gray-800">
                            Layout Builder
                          </div>
                          <div className="fs-7 fw-semibold text-muted">
                            Customize, preview and export
                          </div>
                        </div>
                        <a
                          href="https://preview.keenthemes.com/keen/demo3/layout-builder.html"
                          className="btn btn-sm btn-primary fw-bold"
                        >
                          Try Builder
                        </a>
                      </div>
                      {/*end:Landing*/}
                    </div>
                    {/*end:Dashboards menu*/}
                  </div>
                  {/*end:Menu sub*/}
                </div>
                {/*end:Menu item*/}
                {/*begin:Menu item*/}
                <div
                  data-kt-menu-trigger="{default: 'click', lg: 'hover'}"
                  data-kt-menu-placement="bottom-start"
                  className="menu-item menu-lg-down-accordion menu-sub-lg-down-indention me-0 me-lg-2"
                >
                  {/*begin:Menu link*/}
                  <span className="menu-link">
                    <span className="menu-title">Help</span>
                    <span className="menu-arrow d-lg-none" />
                  </span>
                  {/*end:Menu link*/}
                  {/*begin:Menu sub*/}
                  <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown px-lg-2 py-lg-4 w-lg-200px">
                    {/*begin:Menu item*/}
                    <div className="menu-item">
                      {/*begin:Menu link*/}
                      <a
                        className="menu-link"
                        href="https://preview.keenthemes.com/html/keen/docs/base/utilities"
                        target="_blank"
                        title="Check out over 200 in-house components, plugins and ready for use solutions"
                        data-bs-toggle="tooltip"
                        data-bs-trigger="hover"
                        data-bs-dismiss="click"
                        data-bs-placement="right"
                      >
                        <span className="menu-icon">
                          <i className="ki-duotone ki-rocket fs-2">
                            <span className="path1" />
                            <span className="path2" />
                          </i>
                        </span>
                        <span className="menu-title">Components</span>
                      </a>
                      {/*end:Menu link*/}
                    </div>
                    {/*end:Menu item*/}
                    {/*begin:Menu item*/}
                    <div className="menu-item">
                      {/*begin:Menu link*/}
                      <a
                        className="menu-link"
                        href="https://preview.keenthemes.com/html/keen/docs"
                        target="_blank"
                        title="Check out the complete documentation"
                        data-bs-toggle="tooltip"
                        data-bs-trigger="hover"
                        data-bs-dismiss="click"
                        data-bs-placement="right"
                      >
                        <span className="menu-icon">
                          <i className="ki-duotone ki-abstract-26 fs-2">
                            <span className="path1" />
                            <span className="path2" />
                          </i>
                        </span>
                        <span className="menu-title">Documentation</span>
                      </a>
                      {/*end:Menu link*/}
                    </div>
                    {/*end:Menu item*/}
                    {/*begin:Menu item*/}
                    <div className="menu-item">
                      {/*begin:Menu link*/}
                      <a
                        className="menu-link"
                        href="https://preview.keenthemes.com/html/keen/docs/getting-started/changelog"
                        target="_blank"
                      >
                        <span className="menu-icon">
                          <i className="ki-duotone ki-code fs-2">
                            <span className="path1" />
                            <span className="path2" />
                            <span className="path3" />
                            <span className="path4" />
                          </i>
                        </span>
                        <span className="menu-title">Changelog v3.0.8</span>
                      </a>
                      {/*end:Menu link*/}
                    </div>
                    {/*end:Menu item*/}
                  </div>
                  {/*end:Menu sub*/}
                </div>
                {/*end:Menu item*/}{" "}
              </div>
              {/*end::Menu*/}
            </div>
            {/*end::Menu wrapper*/}
            {/*begin::Navbar*/}
            
            {/*end::Navbar*/}
          </div>
          {/*end::Header wrapper*/}{" "}
        </div>
        {/*end::Header container*/}
      </div>
      {/*end::Header*/}
      {/*begin::Wrapper*/}
      <div
        className="app-wrapper  flex-column flex-row-fluid "
        id="kt_app_wrapper"
      >
        {/*begin::Sidebar*/}
        <div
          id="kt_app_sidebar"
          className="app-sidebar  flex-column "
          data-kt-drawer="true"
          data-kt-drawer-name="app-sidebar"
          data-kt-drawer-activate="{default: true, lg: false}"
          data-kt-drawer-overlay="true"
          data-kt-drawer-width="225px"
          data-kt-drawer-direction="start"
          data-kt-drawer-toggle="#kt_app_sidebar_mobile_toggle"
        >
          {/*begin::Logo*/}
          <div className="app-sidebar-logo px-6" id="kt_app_sidebar_logo">
            {/*begin::Logo image*/}
            <a href="https://preview.keenthemes.com/keen/demo3/index.html">
              <img
                alt="Logo"
                src="https://preview.keenthemes.com/keen/demo3/assets/media/logos/default-dark.svg"
                className="h-30px app-sidebar-logo-default"
              />
            </a>
            {/*end::Logo image*/}
            {/*begin::Sidebar toggle*/}
            <div
              id="kt_app_sidebar_toggle"
              className="app-sidebar-toggle btn btn-icon btn-sm h-30px w-30px rotate "
              data-kt-toggle="true"
              data-kt-toggle-state="active"
              data-kt-toggle-target="body"
              data-kt-toggle-name="app-sidebar-minimize"
            >
              <i className="ki-duotone ki-double-left fs-2 rotate-180">
                <span className="path1" />
                <span className="path2" />
              </i>{" "}
            </div>
            {/*end::Sidebar toggle*/}
          </div>
          {/*end::Logo*/}
          {/*begin::sidebar menu*/}
          <div className="app-sidebar-menu overflow-hidden flex-column-fluid">
            {/*begin::Menu wrapper*/}
            <div
              id="kt_app_sidebar_menu_wrapper"
              className="app-sidebar-wrapper"
            >
              {/*begin::Scroll wrapper*/}
              <div
                id="kt_app_sidebar_menu_scroll"
                className="hover-scroll-y my-5 mx-3"
                data-kt-scroll="true"
                data-kt-scroll-activate="true"
                data-kt-scroll-height="auto"
                data-kt-scroll-dependencies="#kt_app_sidebar_logo, #kt_app_sidebar_footer"
                data-kt-scroll-wrappers="#kt_app_sidebar_menu"
                data-kt-scroll-offset="5px"
                data-kt-scroll-save-state="true"
              >
                {/*begin::Menu*/}
                <SidebarMenu />
                
                {/*end::Menu*/}
              </div>
              {/*end::Scroll wrapper*/}
            </div>
            {/*end::Menu wrapper*/}
          </div>
          {/*end::sidebar menu*/}
          {/*begin::Footer*/}
          <div
            className="app-sidebar-footer flex-column-auto pt-2 pb-6 px-6"
            id="kt_app_sidebar_footer"
          >
            <a
              href="https://preview.keenthemes.com/html/keen/docs"
              className="btn btn-flex flex-center btn-custom btn-primary overflow-hidden text-nowrap px-0 h-40px w-100"
              data-bs-toggle="tooltip"
              data-bs-trigger="hover"
              data-bs-dismiss-="click"
              title="200+ in-house components and 3rd-party plugins"
            >
              <span className="btn-label">Docs &amp; Components</span>
              <i className="ki-duotone ki-document btn-icon fs-2 m-0">
                <span className="path1" />
                <span className="path2" />
              </i>{" "}
            </a>
          </div>
          {/*end::Footer*/}{" "}
        </div>
        {/*end::Sidebar*/}
        {/*begin::Main*/}
        <div className="app-main flex-column flex-row-fluid " id="kt_app_main">
          {/*begin::Content wrapper*/}
          <div className="d-flex flex-column flex-column-fluid">
            {/*begin::Toolbar*/}
            <div id="kt_app_toolbar" className="app-toolbar  py-3 py-lg-6 ">
              {/*begin::Toolbar container*/}
              <div
                id="kt_app_toolbar_container"
                className="app-container  container-xxl d-flex flex-stack "
              >
                {/*begin::Page title*/}
                <div className="page-title d-flex flex-column justify-content-center flex-wrap me-3 ">
                  {/*begin::Title*/}
                  <h1 className="page-heading d-flex text-gray-900 fw-bold fs-3 flex-column justify-content-center my-0">
                    Social Dashboard
                  </h1>
                  {/*end::Title*/}
                </div>
                {/*end::Page title*/}
                {/*begin::Actions*/}
                <div className="d-flex align-items-center gap-2 gap-lg-3">
                  {/*begin::Daterangepicker(defined in src/js/layout/app.js)*/}
                  <div
                    data-kt-daterangepicker="true"
                    data-kt-daterangepicker-opens="left"
                    className="btn btn-sm fw-bold bg-body btn-color-gray-700 btn-active-color-primary d-flex align-items-center px-4"
                  >
                    {/*begin::Display range*/}
                    <div className="text-gray-600 fw-bold">
                      Loading date range...
                    </div>
                    {/*end::Display range*/}
                    <i className="ki-duotone ki-calendar-8 fs-1 ms-2 me-0">
                      <span className="path1" />
                      <span className="path2" />
                      <span className="path3" />
                      <span className="path4" />
                      <span className="path5" />
                      <span className="path6" />
                    </i>
                  </div>
                  {/*end::Daterangepicker*/}
                  {/*begin::Secondary button*/}
                  {/*end::Secondary button*/}
                  {/*begin::Primary button*/}
                  <a
                    href="https://preview.keenthemes.com/keen/demo3/pages/social/feeds.html"
                    className="btn btn-sm fw-bold btn-primary"
                  >
                    Feeds{" "}
                  </a>
                  {/*end::Primary button*/}
                </div>
                {/*end::Actions*/}
              </div>
              {/*end::Toolbar container*/}
            </div>
            {/*end::Toolbar*/}
            {/*begin::Content*/}
            <div
              id="kt_app_content"
              className="app-content  flex-column-fluid "
            >
              {/*begin::Content container*/}
              <div
                id="kt_app_content_container"
                className="app-container  container-xxl "
              >
                {/*begin::Row*/}
                <div className="row g-5 gx-xl-10 mb-5 mb-xl-10">
                  {/*begin::Col*/}
                  <div className="col-xl-8">
                    {/*begin::Chart Widget 1*/}
                    <div className="card card-flush h-lg-100">
                      {/*begin::Header*/}
                      <div className="card-header pt-5">
                        {/*begin::Title*/}
                        <h3 className="card-title align-items-start flex-column">
                          <span className="card-label fw-bold text-gray-900">
                            Instagram Subscribers
                          </span>
                          <span className="text-gray-500 pt-2 fw-semibold fs-6">
                            75% activity growth
                          </span>
                        </h3>
                        {/*end::Title*/}
                        {/*begin::Toolbar*/}
                        <div className="card-toolbar">
                          {/*begin::Menu*/}
                          <button
                            className="btn btn-icon btn-color-gray-500 btn-active-color-primary justify-content-end"
                            data-kt-menu-trigger="click"
                            data-kt-menu-placement="bottom-end"
                            data-kt-menu-overflow="true"
                          >
                            <i className="ki-duotone ki-dots-square fs-1 text-gray-500 me-n1">
                              <span className="path1" />
                              <span className="path2" />
                              <span className="path3" />
                              <span className="path4" />
                            </i>
                          </button>
                          {/*begin::Menu 2*/}
                          <div
                            className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-semibold w-200px"
                            data-kt-menu="true"
                          >
                            {/*begin::Menu item*/}
                            <div className="menu-item px-3">
                              <div className="menu-content fs-6 text-gray-900 fw-bold px-3 py-4">
                                Quick Actions
                              </div>
                            </div>
                            {/*end::Menu item*/}
                            {/*begin::Menu separator*/}
                            <div className="separator mb-3 opacity-75" />
                            {/*end::Menu separator*/}
                            {/*begin::Menu item*/}
                            <div className="menu-item px-3">
                              <a href="#" className="menu-link px-3">
                                New Ticket
                              </a>
                            </div>
                            {/*end::Menu item*/}
                            {/*begin::Menu item*/}
                            <div className="menu-item px-3">
                              <a href="#" className="menu-link px-3">
                                New Customer
                              </a>
                            </div>
                            {/*end::Menu item*/}
                            {/*begin::Menu item*/}
                            <div
                              className="menu-item px-3"
                              data-kt-menu-trigger="hover"
                              data-kt-menu-placement="right-start"
                            >
                              {/*begin::Menu item*/}
                              <a href="#" className="menu-link px-3">
                                <span className="menu-title">New Group</span>
                                <span className="menu-arrow" />
                              </a>
                              {/*end::Menu item*/}
                              {/*begin::Menu sub*/}
                              <div className="menu-sub menu-sub-dropdown w-175px py-4">
                                {/*begin::Menu item*/}
                                <div className="menu-item px-3">
                                  <a href="#" className="menu-link px-3">
                                    Admin Group
                                  </a>
                                </div>
                                {/*end::Menu item*/}
                                {/*begin::Menu item*/}
                                <div className="menu-item px-3">
                                  <a href="#" className="menu-link px-3">
                                    Staff Group
                                  </a>
                                </div>
                                {/*end::Menu item*/}
                                {/*begin::Menu item*/}
                                <div className="menu-item px-3">
                                  <a href="#" className="menu-link px-3">
                                    Member Group
                                  </a>
                                </div>
                                {/*end::Menu item*/}
                              </div>
                              {/*end::Menu sub*/}
                            </div>
                            {/*end::Menu item*/}
                            {/*begin::Menu item*/}
                            <div className="menu-item px-3">
                              <a href="#" className="menu-link px-3">
                                New Contact
                              </a>
                            </div>
                            {/*end::Menu item*/}
                            {/*begin::Menu separator*/}
                            <div className="separator mt-3 opacity-75" />
                            {/*end::Menu separator*/}
                            {/*begin::Menu item*/}
                            <div className="menu-item px-3">
                              <div className="menu-content px-3 py-3">
                                <a
                                  className="btn btn-primary  btn-sm px-4"
                                  href="#"
                                >
                                  Generate Reports
                                </a>
                              </div>
                            </div>
                            {/*end::Menu item*/}
                          </div>
                          {/*end::Menu 2*/}
                          {/*end::Menu*/}
                        </div>
                        {/*end::Toolbar*/}
                      </div>
                      {/*end::Header*/}
                      {/*begin::Body*/}
                      <div className="card-body pt-0 px-0">
                        {/*begin::Chart*/}
                        <div
                          id="kt_charts_widget_1"
                          className="min-h-auto ps-4 pe-6 mb-3"
                          style={{ height: 350 }}
                        ></div>
                        {/*end::Chart*/}
                        {/*begin::Info*/}
                        <div className="d-flex align-items-center px-9">
                          {/*begin::Item*/}
                          <div className="d-flex align-items-center me-6">
                            {/*begin::Bullet*/}
                            <span className="rounded-1 bg-primary me-2 h-10px w-10px" />
                            {/*end::Bullet*/}
                            {/*begin::Label*/}
                            <span className="fw-semibold fs-6 text-gray-600">
                              Gained
                            </span>
                            {/*end::Label*/}
                          </div>
                          {/*ed::Item*/}
                          {/*begin::Item*/}
                          <div className="d-flex align-items-center">
                            {/*begin::Bullet*/}
                            <span className="rounded-1 bg-success me-2 h-10px w-10px" />
                            {/*end::Bullet*/}
                            {/*begin::Label*/}
                            <span className="fw-semibold fs-6 text-gray-600">
                              Lost
                            </span>
                            {/*end::Label*/}
                          </div>
                          {/*ed::Item*/}
                        </div>
                        {/*ed::Info*/}
                      </div>
                      {/*end::Body*/}
                    </div>
                    {/*end::Chart Widget 1*/}
                  </div>
                  {/*end::Col*/}
                  {/*begin::Col*/}
                  <div className="col-xl-4">
                    {/*begin::Engage widget 1*/}
                    <div className="card h-md-100" dir="ltr">
                      {/*begin::Body*/}
                      <div className="card-body d-flex flex-column flex-center">
                        {/*begin::Heading*/}
                        <div className="mb-2">
                          {/*begin::Title*/}
                          <h1 className="fw-semibold text-gray-800 text-center lh-lg">
                            Have you tried <br /> new
                            <span className="fw-bolder">
                              {" "}
                              Mobile Application ?
                            </span>
                          </h1>
                          {/*end::Title*/}
                          {/*begin::Illustration*/}
                          <div className="py-10 text-center">
                            <img
                              src="https://preview.keenthemes.com/keen/demo3/assets/media/svg/illustrations/easy/1.svg"
                              className="theme-light-show w-200px"
                              alt=""
                            />
                            <img
                              src="https://preview.keenthemes.com/keen/demo3/assets/media/svg/illustrations/easy/1-dark.svg"
                              className="theme-dark-show w-200px"
                              alt=""
                            />
                          </div>
                          {/*end::Illustration*/}
                        </div>
                        {/*end::Heading*/}
                        {/*begin::Links*/}
                        <div className="text-center mb-1">
                          {/*begin::Link*/}
                          <a
                            className="btn btn-sm btn-primary me-2"
                            data-bs-target="#kt_modal_create_app"
                            data-bs-toggle="modal"
                          >
                            Try now{" "}
                          </a>
                          {/*end::Link*/}
                          {/*begin::Link*/}
                          <a
                            className="btn btn-sm btn-light"
                            href="https://preview.keenthemes.com/keen/demo3/pages/user-profile/activity.html"
                          >
                            Learn more{" "}
                          </a>
                          {/*end::Link*/}
                        </div>
                        {/*end::Links*/}
                      </div>
                      {/*end::Body*/}
                    </div>
                    {/*end::Engage widget 1*/}
                  </div>
                  {/*end::Col*/}
                </div>
                {/*end::Row*/}
                {/*begin::Row*/}
                <div className="row g-5 g-xl-10">
                  {/*begin::Col*/}
                  <div className="col-sm-6 col-xl-2 mb-xl-10">
                    {/*begin::Card widget 2*/}
                    <div className="card h-lg-100">
                      {/*begin::Body*/}
                      <div className="card-body d-flex justify-content-between align-items-start flex-column">
                        {/*begin::Icon*/}
                        <div className="m-0">
                          <img
                            src="https://preview.keenthemes.com/keen/demo3/assets/media/svg/brand-logos/instagram-2-1.svg"
                            className="w-35px"
                            alt=""
                          />
                        </div>
                        {/*end::Icon*/}
                        {/*begin::Section*/}
                        <div className="d-flex flex-column my-7">
                          {/*begin::Number*/}
                          <span className="fw-semibold fs-3x text-gray-800 lh-1 ls-n2">
                            320k
                          </span>
                          {/*end::Number*/}
                          {/*begin::Follower*/}
                          <div className="m-0">
                            <span className="fw-semibold fs-6 text-gray-500">
                              Followers
                            </span>
                          </div>
                          {/*end::Follower*/}
                        </div>
                        {/*end::Section*/}
                        {/*begin::Badge*/}
                        <span className="badge badge-light-success fs-base">
                          <i className="ki-duotone ki-arrow-up fs-5 text-success ms-n1">
                            <span className="path1" />
                            <span className="path2" />
                          </i>
                          2.1%
                        </span>
                        {/*end::Badge*/}
                      </div>
                      {/*end::Body*/}
                    </div>
                    {/*end::Card widget 2*/}
                  </div>
                  {/*end::Col*/}
                  {/*begin::Col*/}
                  <div className="col-sm-6 col-xl-2 mb-xl-10">
                    {/*begin::Card widget 2*/}
                    <div className="card h-lg-100">
                      {/*begin::Body*/}
                      <div className="card-body d-flex justify-content-between align-items-start flex-column">
                        {/*begin::Icon*/}
                        <div className="m-0">
                          <img
                            src="https://preview.keenthemes.com/keen/demo3/assets/media/svg/brand-logos/facebook-3.svg"
                            className="w-35px"
                            alt=""
                          />
                        </div>
                        {/*end::Icon*/}
                        {/*begin::Section*/}
                        <div className="d-flex flex-column my-7">
                          {/*begin::Number*/}
                          <span className="fw-semibold fs-3x text-gray-800 lh-1 ls-n2">
                            1.5M
                          </span>
                          {/*end::Number*/}
                          {/*begin::Follower*/}
                          <div className="m-0">
                            <span className="fw-semibold fs-6 text-gray-500">
                              Followers
                            </span>
                          </div>
                          {/*end::Follower*/}
                        </div>
                        {/*end::Section*/}
                        {/*begin::Badge*/}
                        <span className="badge badge-light-danger fs-base">
                          <i className="ki-duotone ki-arrow-down fs-5 text-danger ms-n1">
                            <span className="path1" />
                            <span className="path2" />
                          </i>
                          0.47%
                        </span>
                        {/*end::Badge*/}
                      </div>
                      {/*end::Body*/}
                    </div>
                    {/*end::Card widget 2*/}
                  </div>
                  {/*end::Col*/}
                  {/*begin::Col*/}
                  <div className="col-sm-6 col-xl-2 mb-xl-10">
                    {/*begin::Card widget 2*/}
                    <div className="card h-lg-100">
                      {/*begin::Body*/}
                      <div className="card-body d-flex justify-content-between align-items-start flex-column">
                        {/*begin::Icon*/}
                        <div className="m-0">
                          <img
                            src="https://preview.keenthemes.com/keen/demo3/assets/media/svg/brand-logos/dribbble-icon-1.svg"
                            className="w-35px"
                            alt=""
                          />
                        </div>
                        {/*end::Icon*/}
                        {/*begin::Section*/}
                        <div className="d-flex flex-column my-7">
                          {/*begin::Number*/}
                          <span className="fw-semibold fs-3x text-gray-800 lh-1 ls-n2">
                            84k
                          </span>
                          {/*end::Number*/}
                          {/*begin::Follower*/}
                          <div className="m-0">
                            <span className="fw-semibold fs-6 text-gray-500">
                              Followers
                            </span>
                          </div>
                          {/*end::Follower*/}
                        </div>
                        {/*end::Section*/}
                        {/*begin::Badge*/}
                        <span className="badge badge-light-success fs-base">
                          <i className="ki-duotone ki-arrow-up fs-5 text-success ms-n1">
                            <span className="path1" />
                            <span className="path2" />
                          </i>
                          0.6%
                        </span>
                        {/*end::Badge*/}
                      </div>
                      {/*end::Body*/}
                    </div>
                    {/*end::Card widget 2*/}
                  </div>
                  {/*end::Col*/}
                  {/*begin::Col*/}
                  <div className="col-sm-6 col-xl-2 mb-xl-10">
                    {/*begin::Card widget 2*/}
                    <div className="card h-lg-100">
                      {/*begin::Body*/}
                      <div className="card-body d-flex justify-content-between align-items-start flex-column">
                        {/*begin::Icon*/}
                        <div className="m-0">
                          <img
                            src="https://preview.keenthemes.com/keen/demo3/assets/media/svg/brand-logos/twitter.svg"
                            className="w-35px"
                            alt=""
                          />
                        </div>
                        {/*end::Icon*/}
                        {/*begin::Section*/}
                        <div className="d-flex flex-column my-7">
                          {/*begin::Number*/}
                          <span className="fw-semibold fs-3x text-gray-800 lh-1 ls-n2">
                            570k
                          </span>
                          {/*end::Number*/}
                          {/*begin::Follower*/}
                          <div className="m-0">
                            <span className="fw-semibold fs-6 text-gray-500">
                              Followers
                            </span>
                          </div>
                          {/*end::Follower*/}
                        </div>
                        {/*end::Section*/}
                        {/*begin::Badge*/}
                        <span className="badge badge-light-success fs-base">
                          <i className="ki-duotone ki-arrow-up fs-5 text-success ms-n1">
                            <span className="path1" />
                            <span className="path2" />
                          </i>
                          3%
                        </span>
                        {/*end::Badge*/}
                      </div>
                      {/*end::Body*/}
                    </div>
                    {/*end::Card widget 2*/}
                  </div>
                  {/*end::Col*/}
                  {/*begin::Col*/}
                  <div className="col-xl-4 mb-5 mb-xl-10">
                    {/*begin::Card widget 1*/}
                    <div
                      className="card card-flush border-0 h-lg-100"
                      data-bs-theme="light"
                      style={{ backgroundColor: "#7239EA" }}
                    >
                      {/*begin::Header*/}
                      <div className="card-header pt-2">
                        {/*begin::Title*/}
                        <h3 className="card-title">
                          <span className="text-white fs-3 fw-bold me-2">
                            Facebook Campaign
                          </span>
                          <span className="badge badge-success">Active</span>
                        </h3>
                        {/*end::Title*/}
                        {/*begin::Toolbar*/}
                        <div className="card-toolbar">
                          {/*begin::Menu*/}
                          <button
                            className="btn btn-icon bg-white bg-opacity-10 btn-color-white btn-active-success w-25px h-25px"
                            data-kt-menu-trigger="click"
                            data-kt-menu-placement="bottom-end"
                            data-kt-menu-overflow="true"
                          >
                            <i className="ki-duotone ki-black-right fs-5" />
                          </button>
                          {/*begin::Menu 2*/}
                          <div
                            className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-semibold w-200px"
                            data-kt-menu="true"
                          >
                            {/*begin::Menu item*/}
                            <div className="menu-item px-3">
                              <div className="menu-content fs-6 text-gray-900 fw-bold px-3 py-4">
                                Quick Actions
                              </div>
                            </div>
                            {/*end::Menu item*/}
                            {/*begin::Menu separator*/}
                            <div className="separator mb-3 opacity-75" />
                            {/*end::Menu separator*/}
                            {/*begin::Menu item*/}
                            <div className="menu-item px-3">
                              <a href="#" className="menu-link px-3">
                                New Ticket
                              </a>
                            </div>
                            {/*end::Menu item*/}
                            {/*begin::Menu item*/}
                            <div className="menu-item px-3">
                              <a href="#" className="menu-link px-3">
                                New Customer
                              </a>
                            </div>
                            {/*end::Menu item*/}
                            {/*begin::Menu item*/}
                            <div
                              className="menu-item px-3"
                              data-kt-menu-trigger="hover"
                              data-kt-menu-placement="right-start"
                            >
                              {/*begin::Menu item*/}
                              <a href="#" className="menu-link px-3">
                                <span className="menu-title">New Group</span>
                                <span className="menu-arrow" />
                              </a>
                              {/*end::Menu item*/}
                              {/*begin::Menu sub*/}
                              <div className="menu-sub menu-sub-dropdown w-175px py-4">
                                {/*begin::Menu item*/}
                                <div className="menu-item px-3">
                                  <a href="#" className="menu-link px-3">
                                    Admin Group
                                  </a>
                                </div>
                                {/*end::Menu item*/}
                                {/*begin::Menu item*/}
                                <div className="menu-item px-3">
                                  <a href="#" className="menu-link px-3">
                                    Staff Group
                                  </a>
                                </div>
                                {/*end::Menu item*/}
                                {/*begin::Menu item*/}
                                <div className="menu-item px-3">
                                  <a href="#" className="menu-link px-3">
                                    Member Group
                                  </a>
                                </div>
                                {/*end::Menu item*/}
                              </div>
                              {/*end::Menu sub*/}
                            </div>
                            {/*end::Menu item*/}
                            {/*begin::Menu item*/}
                            <div className="menu-item px-3">
                              <a href="#" className="menu-link px-3">
                                New Contact
                              </a>
                            </div>
                            {/*end::Menu item*/}
                            {/*begin::Menu separator*/}
                            <div className="separator mt-3 opacity-75" />
                            {/*end::Menu separator*/}
                            {/*begin::Menu item*/}
                            <div className="menu-item px-3">
                              <div className="menu-content px-3 py-3">
                                <a
                                  className="btn btn-primary  btn-sm px-4"
                                  href="#"
                                >
                                  Generate Reports
                                </a>
                              </div>
                            </div>
                            {/*end::Menu item*/}
                          </div>
                          {/*end::Menu 2*/}
                          {/*end::Menu*/}
                        </div>
                        {/*end::Toolbar*/}
                      </div>
                      {/*end::Header*/}
                      {/*begin::Body*/}
                      <div className="card-body d-flex justify-content-between flex-column pt-1 px-0 pb-0">
                        {/*begin::Wrapper*/}
                        <div className="d-flex flex-wrap px-9 mb-5">
                          {/*begin::Stat*/}
                          <div
                            className="rounded min-w-125px py-3 px-4 my-1 me-6"
                            style={{
                              border: "1px dashed rgba(255, 255, 255, 0.2)"
                            }}
                          >
                            {/*begin::Number*/}
                            <div className="d-flex align-items-center">
                              <div
                                className="text-white fs-2 fw-bold"
                                data-kt-countup="true"
                                data-kt-countup-value={4368}
                                data-kt-countup-prefix="$"
                              >
                                0
                              </div>
                            </div>
                            {/*end::Number*/}
                            {/*begin::Label*/}
                            <div className="fw-semibold fs-6 text-white opacity-50">
                              New Followers
                            </div>
                            {/*end::Label*/}
                          </div>
                          {/*end::Stat*/}
                          {/*begin::Stat*/}
                          <div
                            className="rounded min-w-125px py-3 px-4 my-1"
                            style={{
                              border: "1px dashed rgba(255, 255, 255, 0.2)"
                            }}
                          >
                            {/*begin::Number*/}
                            <div className="d-flex align-items-center">
                              <div
                                className="text-white fs-2 fw-bold"
                                data-kt-countup="true"
                                data-kt-countup-value="120,000"
                              >
                                0
                              </div>
                            </div>
                            {/*end::Number*/}
                            {/*begin::Label*/}
                            <div className="fw-semibold fs-6 text-white opacity-50">
                              Followers Goal
                            </div>
                            {/*end::Label*/}
                          </div>
                          {/*end::Stat*/}
                        </div>
                        {/*end::Wrapper*/}
                        {/*begin::Chart*/}
                        <div
                          id="kt_card_widget_1_chart"
                          data-kt-chart-color="#8F5FF4"
                          style={{ height: 105 }}
                        ></div>
                        {/*end::Chart*/}
                      </div>
                      {/*end::Body*/}
                    </div>
                    {/*end::Card widget 1*/}
                  </div>
                  {/*end::Col*/}
                </div>
                {/*end::Row*/}
                {/*begin::Row*/}
                <div className="row gy-5 g-xl-10">
                  {/*begin::Col*/}
                  <div className="col-xl-8 mb-xl-10">
                    {/*begin::Timeline Widget 1*/}
                    <div className="card card-flush h-xl-100">
                      {/*begin::Card header*/}
                      <div className="card-header pt-5">
                        {/*begin::Card title*/}
                        <h3 className="card-title align-items-start flex-column">
                          <span className="card-label fw-bold text-gray-900">
                            Team Schedule
                          </span>
                          <span className="text-gray-500 pt-2 fw-semibold fs-6">
                            49 Acual Tasks
                          </span>
                        </h3>
                        {/*end::Card title*/}
                        {/*begin::Card toolbar*/}
                        <div className="card-toolbar">
                          {/*begin::Tabs*/}
                          <ul className="nav">
                            <li className="nav-item">
                              <a
                                className="nav-link btn btn-sm btn-color-muted btn-active btn-active-light fw-bold px-4 me-1 active"
                                data-kt-timeline-widget-1="tab"
                                data-bs-toggle="tab"
                                href="#kt_timeline_widget_1_tab_day"
                              >
                                Day
                              </a>
                            </li>
                            <li className="nav-item">
                              <a
                                className="nav-link btn btn-sm btn-color-muted btn-active btn-active-light fw-bold px-4 me-1"
                                data-kt-timeline-widget-1="tab"
                                data-bs-toggle="tab"
                                href="#kt_timeline_widget_1_tab_week"
                              >
                                Week
                              </a>
                            </li>
                            <li className="nav-item">
                              <a
                                className="nav-link btn btn-sm btn-color-muted btn-active btn-active-light fw-bold px-4 me-1"
                                data-kt-timeline-widget-1="tab"
                                data-bs-toggle="tab"
                                href="#kt_timeline_widget_1_tab_month"
                              >
                                Month
                              </a>
                            </li>
                          </ul>
                          {/*end::Tabs*/}
                        </div>
                        {/*end::Card toolbar*/}
                      </div>
                      {/*end::Card header*/}
                      {/*begin::Card body*/}
                      <div className="card-body pb-0">
                        {/*begin::Tab content*/}
                        <div className="tab-content">
                          {/*begin::Tab pane*/}
                          <div
                            className="tab-pane active"
                            id="kt_timeline_widget_1_tab_day"
                            role="tabpanel"
                            aria-labelledby="day-tab"
                            data-kt-timeline-widget-1-blockui="true"
                          >
                            <div className="table-responsive pb-10">
                              {/*begin::Timeline*/}
                              <div
                                id="kt_timeline_widget_1_1"
                                className="vis-timeline-custom h-350px min-w-700px"
                                data-kt-timeline-widget-1-image-root="/keen/demo3/assets/media/"
                              />
                              {/*end::Timeline*/}
                            </div>
                          </div>
                          {/*end::Tab pane*/}
                          {/*begin::Tab pane*/}
                          <div
                            className="tab-pane"
                            id="kt_timeline_widget_1_tab_week"
                            role="tabpanel"
                            aria-labelledby="week-tab"
                            data-kt-timeline-widget-1-blockui="true"
                          >
                            <div className="table-responsive pb-10">
                              {/*begin::Timeline*/}
                              <div
                                id="kt_timeline_widget_1_2"
                                className="vis-timeline-custom h-350px min-w-700px"
                                data-kt-timeline-widget-1-image-root="/keen/demo3/assets/media/"
                              />
                              {/*end::Timeline*/}
                            </div>
                          </div>
                          {/*end::Tab pane*/}
                          {/*begin::Tab pane*/}
                          <div
                            className="tab-pane"
                            id="kt_timeline_widget_1_tab_month"
                            role="tabpanel"
                            aria-labelledby="month-tab"
                            data-kt-timeline-widget-1-blockui="true"
                          >
                            <div className="table-responsive pb-10">
                              {/*begin::Timeline*/}
                              <div
                                id="kt_timeline_widget_1_3"
                                className="vis-timeline-custom h-350px min-w-700px"
                                data-kt-timeline-widget-1-image-root="/keen/demo3/assets/media/"
                              />
                              {/*end::Timeline*/}
                            </div>
                          </div>
                          {/*end::Tab pane*/}
                        </div>
                        {/*end::Tab content*/}
                      </div>
                      {/*end::Card body*/}
                    </div>
                    {/*end::Timeline Widget 1*/}{" "}
                  </div>
                  {/*end::Col*/}
                  {/*begin::Col*/}
                  <div className="col-xl-4 mb-5 mb-xl-10">
                    {/*begin::List widget 4*/}
                    <div className="card card-flush h-lg-100">
                      {/*begin::Header*/}
                      <div className="card-header pt-5">
                        {/*begin::Title*/}
                        <h3 className="card-title align-items-start flex-column">
                          <span className="card-label fw-bold text-gray-900">
                            Key Statistics
                          </span>
                          <span className="text-gray-500 mt-1 fw-semibold fs-6">
                            Social activities overview
                          </span>
                        </h3>
                        {/*end::Title*/}
                        {/*begin::Toolbar*/}
                        <div className="card-toolbar">
                          {/*begin::Menu*/}
                          <button
                            className="btn btn-icon btn-color-gray-500 btn-active-color-primary justify-content-end"
                            data-kt-menu-trigger="click"
                            data-kt-menu-placement="bottom-end"
                            data-kt-menu-overflow="true"
                          >
                            <i className="ki-duotone ki-dots-square fs-1">
                              <span className="path1" />
                              <span className="path2" />
                              <span className="path3" />
                              <span className="path4" />
                            </i>
                          </button>
                          {/*begin::Menu 2*/}
                          <div
                            className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-semibold w-200px"
                            data-kt-menu="true"
                          >
                            {/*begin::Menu item*/}
                            <div className="menu-item px-3">
                              <div className="menu-content fs-6 text-gray-900 fw-bold px-3 py-4">
                                Quick Actions
                              </div>
                            </div>
                            {/*end::Menu item*/}
                            {/*begin::Menu separator*/}
                            <div className="separator mb-3 opacity-75" />
                            {/*end::Menu separator*/}
                            {/*begin::Menu item*/}
                            <div className="menu-item px-3">
                              <a href="#" className="menu-link px-3">
                                New Ticket
                              </a>
                            </div>
                            {/*end::Menu item*/}
                            {/*begin::Menu item*/}
                            <div className="menu-item px-3">
                              <a href="#" className="menu-link px-3">
                                New Customer
                              </a>
                            </div>
                            {/*end::Menu item*/}
                            {/*begin::Menu item*/}
                            <div
                              className="menu-item px-3"
                              data-kt-menu-trigger="hover"
                              data-kt-menu-placement="right-start"
                            >
                              {/*begin::Menu item*/}
                              <a href="#" className="menu-link px-3">
                                <span className="menu-title">New Group</span>
                                <span className="menu-arrow" />
                              </a>
                              {/*end::Menu item*/}
                              {/*begin::Menu sub*/}
                              <div className="menu-sub menu-sub-dropdown w-175px py-4">
                                {/*begin::Menu item*/}
                                <div className="menu-item px-3">
                                  <a href="#" className="menu-link px-3">
                                    Admin Group
                                  </a>
                                </div>
                                {/*end::Menu item*/}
                                {/*begin::Menu item*/}
                                <div className="menu-item px-3">
                                  <a href="#" className="menu-link px-3">
                                    Staff Group
                                  </a>
                                </div>
                                {/*end::Menu item*/}
                                {/*begin::Menu item*/}
                                <div className="menu-item px-3">
                                  <a href="#" className="menu-link px-3">
                                    Member Group
                                  </a>
                                </div>
                                {/*end::Menu item*/}
                              </div>
                              {/*end::Menu sub*/}
                            </div>
                            {/*end::Menu item*/}
                            {/*begin::Menu item*/}
                            <div className="menu-item px-3">
                              <a href="#" className="menu-link px-3">
                                New Contact
                              </a>
                            </div>
                            {/*end::Menu item*/}
                            {/*begin::Menu separator*/}
                            <div className="separator mt-3 opacity-75" />
                            {/*end::Menu separator*/}
                            {/*begin::Menu item*/}
                            <div className="menu-item px-3">
                              <div className="menu-content px-3 py-3">
                                <a
                                  className="btn btn-primary  btn-sm px-4"
                                  href="#"
                                >
                                  Generate Reports
                                </a>
                              </div>
                            </div>
                            {/*end::Menu item*/}
                          </div>
                          {/*end::Menu 2*/}
                          {/*end::Menu*/}
                        </div>
                        {/*end::Toolbar*/}
                      </div>
                      {/*end::Header*/}
                      {/*begin::Body*/}
                      <div className="card-body pt-9 pb-5">
                        {/*begin::Slider*/}
                        <div className="tns">
                          {/*begin::Slider wrapper*/}
                          <div
                            data-tns="true"
                            data-tns-nav-position="bottom"
                            data-tns-controls="false"
                          >
                            {/*begin::Slide*/}
                            <div className="mb-3">
                              {/*begin::Item*/}
                              <div className="d-flex flex-stack">
                                {/*begin::Section*/}
                                <div className="m-0">
                                  <span className="text-gray-800 fw-bold d-block fs-2hx lh-1 ls-n2">
                                    6.3k
                                  </span>
                                  <span className="text-gray-500 fw-semibold fs-6">
                                    Avarage <br /> Likes
                                  </span>
                                </div>
                                {/*end::Section*/}
                                {/*begin::Statistics*/}
                                <div className="d-flex flex-column align-items-end w-100 mw-250px overflow-hidden">
                                  {/*begin::Select*/}
                                  <div className="mb-2">
                                    <select
                                      className="form-select form-select-transparent p-0 w-150px me-n5"
                                      data-control="select2"
                                      data-placeholder="All Users"
                                      data-dropdown-css-class="w-150px"
                                      data-hide-search="true"
                                    >
                                      <option value={1} selected="">
                                        Jul 22 - Aug 22
                                      </option>
                                      <option value={2}>Jul 24 - Aug 24</option>
                                      <option value={3}>Jul 26 - Aug 29</option>
                                    </select>
                                  </div>
                                  {/*end::Select*/}
                                  {/*begin::Progress*/}
                                  <div className="progress h-6px w-100 bg-light">
                                    <div
                                      className="progress-bar bg-warning"
                                      role="progressbar"
                                      style={{ width: "65%" }}
                                      aria-valuemin={0}
                                      aria-valuemax={100}
                                    />
                                  </div>
                                  {/*end::Progress*/}
                                </div>
                                {/*end::Statistics*/}
                              </div>
                              {/*end::Item*/}
                              {/*begin::Separator*/}
                              <div className="separator separator-dashed my-5" />
                              {/*end::Separator*/}
                              {/*begin::Item*/}
                              <div className="d-flex flex-stack">
                                {/*begin::Section*/}
                                <div className="m-0">
                                  <span className="text-gray-800 fw-bold d-block fs-2hx lh-1 ls-n2">
                                    2.1k
                                  </span>
                                  <span className="text-gray-500 fw-semibold fs-6">
                                    Avarage <br /> Comments
                                  </span>
                                </div>
                                {/*end::Section*/}
                                {/*begin::Statistics*/}
                                <div className="d-flex flex-column align-items-end w-100 mw-250px overflow-hidden">
                                  {/*begin::Select*/}
                                  <div className="mb-2">
                                    <select
                                      className="form-select form-select-transparent p-0 w-150px me-n5"
                                      data-control="select2"
                                      data-placeholder="All Users"
                                      data-dropdown-css-class="w-150px"
                                      data-hide-search="true"
                                    >
                                      <option value={1} selected="">
                                        Jul 22 - Aug 22
                                      </option>
                                      <option value={2}>Jul 24 - Aug 24</option>
                                      <option value={3}>Jul 26 - Aug 29</option>
                                    </select>
                                  </div>
                                  {/*end::Select*/}
                                  {/*begin::Progress*/}
                                  <div className="progress h-6px w-100 bg-light">
                                    <div
                                      className="progress-bar bg-warning"
                                      role="progressbar"
                                      style={{ width: "45%" }}
                                      aria-valuemin={0}
                                      aria-valuemax={100}
                                    />
                                  </div>
                                  {/*end::Progress*/}
                                </div>
                                {/*end::Statistics*/}
                              </div>
                              {/*end::Item*/}
                              {/*begin::Separator*/}
                              <div className="separator separator-dashed my-5" />
                              {/*end::Separator*/}
                              {/*begin::Item*/}
                              <div className="d-flex flex-stack">
                                {/*begin::Section*/}
                                <div className="m-0">
                                  <span className="text-gray-800 fw-bold d-block fs-2hx lh-1 ls-n2">
                                    650
                                  </span>
                                  <span className="text-gray-500 fw-semibold fs-6">
                                    Avarage <br /> Shares
                                  </span>
                                </div>
                                {/*end::Section*/}
                                {/*begin::Statistics*/}
                                <div className="d-flex flex-column align-items-end w-100 mw-250px overflow-hidden">
                                  {/*begin::Select*/}
                                  <div className="mb-2">
                                    <select
                                      className="form-select form-select-transparent p-0 w-150px me-n5"
                                      data-control="select2"
                                      data-placeholder="All Users"
                                      data-dropdown-css-class="w-150px"
                                      data-hide-search="true"
                                    >
                                      <option value={1} selected="">
                                        Jul 22 - Aug 22
                                      </option>
                                      <option value={2}>Jul 24 - Aug 24</option>
                                      <option value={3}>Jul 26 - Aug 29</option>
                                    </select>
                                  </div>
                                  {/*end::Select*/}
                                  {/*begin::Progress*/}
                                  <div className="progress h-6px w-100 bg-light">
                                    <div
                                      className="progress-bar bg-warning"
                                      role="progressbar"
                                      style={{ width: "85%" }}
                                      aria-valuemin={0}
                                      aria-valuemax={100}
                                    />
                                  </div>
                                  {/*end::Progress*/}
                                </div>
                                {/*end::Statistics*/}
                              </div>
                              {/*end::Item*/}
                            </div>
                            {/*end::Slide*/}
                            {/*begin::Slide*/}
                            <div className="mb-3">
                              {/*begin::Item*/}
                              <div className="d-flex flex-stack">
                                {/*begin::Section*/}
                                <div className="m-0">
                                  <span className="text-gray-800 fw-bold d-block fs-2hx lh-1 ls-n2">
                                    3.4k
                                  </span>
                                  <span className="text-gray-500 fw-semibold fs-6">
                                    Avarage <br /> Comments
                                  </span>
                                </div>
                                {/*end::Section*/}
                                {/*begin::Statistics*/}
                                <div className="d-flex flex-column align-items-end w-100 mw-250px overflow-hidden">
                                  {/*begin::Select*/}
                                  <div className="mb-2">
                                    <select
                                      className="form-select form-select-transparent p-0 w-150px me-n5"
                                      data-control="select2"
                                      data-placeholder="All Users"
                                      data-dropdown-css-class="w-150px"
                                      data-hide-search="true"
                                    >
                                      <option value={1} selected="">
                                        Jul 22 - Aug 22
                                      </option>
                                      <option value={2}>Jul 24 - Aug 24</option>
                                      <option value={3}>Jul 26 - Aug 29</option>
                                    </select>
                                  </div>
                                  {/*end::Select*/}
                                  {/*begin::Progress*/}
                                  <div className="progress h-6px w-100 bg-light">
                                    <div
                                      className="progress-bar bg-warning"
                                      role="progressbar"
                                      style={{ width: "45%" }}
                                      aria-valuemin={0}
                                      aria-valuemax={100}
                                    />
                                  </div>
                                  {/*end::Progress*/}
                                </div>
                                {/*end::Statistics*/}
                              </div>
                              {/*end::Item*/}
                              {/*begin::Separator*/}
                              <div className="separator separator-dashed my-5" />
                              {/*end::Separator*/}
                              {/*begin::Item*/}
                              <div className="d-flex flex-stack">
                                {/*begin::Section*/}
                                <div className="m-0">
                                  <span className="text-gray-800 fw-bold d-block fs-2hx lh-1 ls-n2">
                                    7.1k
                                  </span>
                                  <span className="text-gray-500 fw-semibold fs-6">
                                    Avarage <br /> Likes
                                  </span>
                                </div>
                                {/*end::Section*/}
                                {/*begin::Statistics*/}
                                <div className="d-flex flex-column align-items-end w-100 mw-250px overflow-hidden">
                                  {/*begin::Select*/}
                                  <div className="mb-2">
                                    <select
                                      className="form-select form-select-transparent p-0 w-150px me-n5"
                                      data-control="select2"
                                      data-placeholder="All Users"
                                      data-dropdown-css-class="w-150px"
                                      data-hide-search="true"
                                    >
                                      <option value={1} selected="">
                                        Jul 22 - Aug 22
                                      </option>
                                      <option value={2}>Jul 24 - Aug 24</option>
                                      <option value={3}>Jul 26 - Aug 29</option>
                                    </select>
                                  </div>
                                  {/*end::Select*/}
                                  {/*begin::Progress*/}
                                  <div className="progress h-6px w-100 bg-light">
                                    <div
                                      className="progress-bar bg-warning"
                                      role="progressbar"
                                      style={{ width: "65%" }}
                                      aria-valuemin={0}
                                      aria-valuemax={100}
                                    />
                                  </div>
                                  {/*end::Progress*/}
                                </div>
                                {/*end::Statistics*/}
                              </div>
                              {/*end::Item*/}
                              {/*begin::Separator*/}
                              <div className="separator separator-dashed my-5" />
                              {/*end::Separator*/}
                              {/*begin::Item*/}
                              <div className="d-flex flex-stack">
                                {/*begin::Section*/}
                                <div className="m-0">
                                  <span className="text-gray-800 fw-bold d-block fs-2hx lh-1 ls-n2">
                                    345
                                  </span>
                                  <span className="text-gray-500 fw-semibold fs-6">
                                    Avarage <br /> Shares
                                  </span>
                                </div>
                                {/*end::Section*/}
                                {/*begin::Statistics*/}
                                <div className="d-flex flex-column align-items-end w-100 mw-250px overflow-hidden">
                                  {/*begin::Select*/}
                                  <div className="mb-2">
                                    <select
                                      className="form-select form-select-transparent p-0 w-150px me-n5"
                                      data-control="select2"
                                      data-placeholder="All Users"
                                      data-dropdown-css-class="w-150px"
                                      data-hide-search="true"
                                    >
                                      <option value={1} selected="">
                                        Jul 22 - Aug 22
                                      </option>
                                      <option value={2}>Jul 24 - Aug 24</option>
                                      <option value={3}>Jul 26 - Aug 29</option>
                                    </select>
                                  </div>
                                  {/*end::Select*/}
                                  {/*begin::Progress*/}
                                  <div className="progress h-6px w-100 bg-light">
                                    <div
                                      className="progress-bar bg-warning"
                                      role="progressbar"
                                      style={{ width: "85%" }}
                                      aria-valuemin={0}
                                      aria-valuemax={100}
                                    />
                                  </div>
                                  {/*end::Progress*/}
                                </div>
                                {/*end::Statistics*/}
                              </div>
                              {/*end::Item*/}
                            </div>
                            {/*end::Slide*/}
                            {/*begin::Slide*/}
                            <div className="mb-3">
                              {/*begin::Item*/}
                              <div className="d-flex flex-stack">
                                {/*begin::Section*/}
                                <div className="m-0">
                                  <span className="text-gray-800 fw-bold d-block fs-2hx lh-1 ls-n2">
                                    650
                                  </span>
                                  <span className="text-gray-500 fw-semibold fs-6">
                                    Avarage <br /> Shares
                                  </span>
                                </div>
                                {/*end::Section*/}
                                {/*begin::Statistics*/}
                                <div className="d-flex flex-column align-items-end w-100 mw-250px overflow-hidden">
                                  {/*begin::Select*/}
                                  <div className="mb-2">
                                    <select
                                      className="form-select form-select-transparent p-0 w-150px me-n5"
                                      data-control="select2"
                                      data-placeholder="All Users"
                                      data-dropdown-css-class="w-150px"
                                      data-hide-search="true"
                                    >
                                      <option value={1} selected="">
                                        Jul 22 - Aug 22
                                      </option>
                                      <option value={2}>Jul 24 - Aug 24</option>
                                      <option value={3}>Jul 26 - Aug 29</option>
                                    </select>
                                  </div>
                                  {/*end::Select*/}
                                  {/*begin::Progress*/}
                                  <div className="progress h-6px w-100 bg-light">
                                    <div
                                      className="progress-bar bg-warning"
                                      role="progressbar"
                                      style={{ width: "85%" }}
                                      aria-valuemin={0}
                                      aria-valuemax={100}
                                    />
                                  </div>
                                  {/*end::Progress*/}
                                </div>
                                {/*end::Statistics*/}
                              </div>
                              {/*end::Item*/}
                              {/*begin::Separator*/}
                              <div className="separator separator-dashed my-5" />
                              {/*end::Separator*/}
                              {/*begin::Item*/}
                              <div className="d-flex flex-stack">
                                {/*begin::Section*/}
                                <div className="m-0">
                                  <span className="text-gray-800 fw-bold d-block fs-2hx lh-1 ls-n2">
                                    3.5k
                                  </span>
                                  <span className="text-gray-500 fw-semibold fs-6">
                                    Avarage <br /> Comments
                                  </span>
                                </div>
                                {/*end::Section*/}
                                {/*begin::Statistics*/}
                                <div className="d-flex flex-column align-items-end w-100 mw-250px overflow-hidden">
                                  {/*begin::Select*/}
                                  <div className="mb-2">
                                    <select
                                      className="form-select form-select-transparent p-0 w-150px me-n5"
                                      data-control="select2"
                                      data-placeholder="All Users"
                                      data-dropdown-css-class="w-150px"
                                      data-hide-search="true"
                                    >
                                      <option value={1} selected="">
                                        Jul 22 - Aug 22
                                      </option>
                                      <option value={2}>Jul 24 - Aug 24</option>
                                      <option value={3}>Jul 26 - Aug 29</option>
                                    </select>
                                  </div>
                                  {/*end::Select*/}
                                  {/*begin::Progress*/}
                                  <div className="progress h-6px w-100 bg-light">
                                    <div
                                      className="progress-bar bg-warning"
                                      role="progressbar"
                                      style={{ width: "45%" }}
                                      aria-valuemin={0}
                                      aria-valuemax={100}
                                    />
                                  </div>
                                  {/*end::Progress*/}
                                </div>
                                {/*end::Statistics*/}
                              </div>
                              {/*end::Item*/}
                              {/*begin::Separator*/}
                              <div className="separator separator-dashed my-5" />
                              {/*end::Separator*/}
                              {/*begin::Item*/}
                              <div className="d-flex flex-stack">
                                {/*begin::Section*/}
                                <div className="m-0">
                                  <span className="text-gray-800 fw-bold d-block fs-2hx lh-1 ls-n2">
                                    7.5k
                                  </span>
                                  <span className="text-gray-500 fw-semibold fs-6">
                                    Avarage <br /> Likes
                                  </span>
                                </div>
                                {/*end::Section*/}
                                {/*begin::Statistics*/}
                                <div className="d-flex flex-column align-items-end w-100 mw-250px overflow-hidden">
                                  {/*begin::Select*/}
                                  <div className="mb-2">
                                    <select
                                      className="form-select form-select-transparent p-0 w-150px me-n5"
                                      data-control="select2"
                                      data-placeholder="All Users"
                                      data-dropdown-css-class="w-150px"
                                      data-hide-search="true"
                                    >
                                      <option value={1} selected="">
                                        Jul 22 - Aug 22
                                      </option>
                                      <option value={2}>Jul 24 - Aug 24</option>
                                      <option value={3}>Jul 26 - Aug 29</option>
                                    </select>
                                  </div>
                                  {/*end::Select*/}
                                  {/*begin::Progress*/}
                                  <div className="progress h-6px w-100 bg-light">
                                    <div
                                      className="progress-bar bg-warning"
                                      role="progressbar"
                                      style={{ width: "65%" }}
                                      aria-valuemin={0}
                                      aria-valuemax={100}
                                    />
                                  </div>
                                  {/*end::Progress*/}
                                </div>
                                {/*end::Statistics*/}
                              </div>
                              {/*end::Item*/}
                            </div>
                            {/*end::Slide*/}
                            {/*begin::Slide*/}
                            <div className="mb-3">
                              {/*begin::Item*/}
                              <div className="d-flex flex-stack">
                                {/*begin::Section*/}
                                <div className="m-0">
                                  <span className="text-gray-800 fw-bold d-block fs-2hx lh-1 ls-n2">
                                    9.1k
                                  </span>
                                  <span className="text-gray-500 fw-semibold fs-6">
                                    Avarage <br /> Likes
                                  </span>
                                </div>
                                {/*end::Section*/}
                                {/*begin::Statistics*/}
                                <div className="d-flex flex-column align-items-end w-100 mw-250px overflow-hidden">
                                  {/*begin::Select*/}
                                  <div className="mb-2">
                                    <select
                                      className="form-select form-select-transparent p-0 w-150px me-n5"
                                      data-control="select2"
                                      data-placeholder="All Users"
                                      data-dropdown-css-class="w-150px"
                                      data-hide-search="true"
                                    >
                                      <option value={1} selected="">
                                        Jul 22 - Aug 22
                                      </option>
                                      <option value={2}>Jul 24 - Aug 24</option>
                                      <option value={3}>Jul 26 - Aug 29</option>
                                    </select>
                                  </div>
                                  {/*end::Select*/}
                                  {/*begin::Progress*/}
                                  <div className="progress h-6px w-100 bg-light">
                                    <div
                                      className="progress-bar bg-warning"
                                      role="progressbar"
                                      style={{ width: "65%" }}
                                      aria-valuemin={0}
                                      aria-valuemax={100}
                                    />
                                  </div>
                                  {/*end::Progress*/}
                                </div>
                                {/*end::Statistics*/}
                              </div>
                              {/*end::Item*/}
                              {/*begin::Separator*/}
                              <div className="separator separator-dashed my-5" />
                              {/*end::Separator*/}
                              {/*begin::Item*/}
                              <div className="d-flex flex-stack">
                                {/*begin::Section*/}
                                <div className="m-0">
                                  <span className="text-gray-800 fw-bold d-block fs-2hx lh-1 ls-n2">
                                    4.2k
                                  </span>
                                  <span className="text-gray-500 fw-semibold fs-6">
                                    Avarage <br /> Comments
                                  </span>
                                </div>
                                {/*end::Section*/}
                                {/*begin::Statistics*/}
                                <div className="d-flex flex-column align-items-end w-100 mw-250px overflow-hidden">
                                  {/*begin::Select*/}
                                  <div className="mb-2">
                                    <select
                                      className="form-select form-select-transparent p-0 w-150px me-n5"
                                      data-control="select2"
                                      data-placeholder="All Users"
                                      data-dropdown-css-class="w-150px"
                                      data-hide-search="true"
                                    >
                                      <option value={1} selected="">
                                        Jul 22 - Aug 22
                                      </option>
                                      <option value={2}>Jul 24 - Aug 24</option>
                                      <option value={3}>Jul 26 - Aug 29</option>
                                    </select>
                                  </div>
                                  {/*end::Select*/}
                                  {/*begin::Progress*/}
                                  <div className="progress h-6px w-100 bg-light">
                                    <div
                                      className="progress-bar bg-warning"
                                      role="progressbar"
                                      style={{ width: "45%" }}
                                      aria-valuemin={0}
                                      aria-valuemax={100}
                                    />
                                  </div>
                                  {/*end::Progress*/}
                                </div>
                                {/*end::Statistics*/}
                              </div>
                              {/*end::Item*/}
                              {/*begin::Separator*/}
                              <div className="separator separator-dashed my-5" />
                              {/*end::Separator*/}
                              {/*begin::Item*/}
                              <div className="d-flex flex-stack">
                                {/*begin::Section*/}
                                <div className="m-0">
                                  <span className="text-gray-800 fw-bold d-block fs-2hx lh-1 ls-n2">
                                    450
                                  </span>
                                  <span className="text-gray-500 fw-semibold fs-6">
                                    Avarage <br /> Shares
                                  </span>
                                </div>
                                {/*end::Section*/}
                                {/*begin::Statistics*/}
                                <div className="d-flex flex-column align-items-end w-100 mw-250px overflow-hidden">
                                  {/*begin::Select*/}
                                  <div className="mb-2">
                                    <select
                                      className="form-select form-select-transparent p-0 w-150px me-n5"
                                      data-control="select2"
                                      data-placeholder="All Users"
                                      data-dropdown-css-class="w-150px"
                                      data-hide-search="true"
                                    >
                                      <option value={1} selected="">
                                        Jul 22 - Aug 22
                                      </option>
                                      <option value={2}>Jul 24 - Aug 24</option>
                                      <option value={3}>Jul 26 - Aug 29</option>
                                    </select>
                                  </div>
                                  {/*end::Select*/}
                                  {/*begin::Progress*/}
                                  <div className="progress h-6px w-100 bg-light">
                                    <div
                                      className="progress-bar bg-warning"
                                      role="progressbar"
                                      style={{ width: "85%" }}
                                      aria-valuemin={0}
                                      aria-valuemax={100}
                                    />
                                  </div>
                                  {/*end::Progress*/}
                                </div>
                                {/*end::Statistics*/}
                              </div>
                              {/*end::Item*/}
                            </div>
                            {/*end::Slide*/}
                          </div>
                          {/*end::Slider wrapper*/}
                        </div>
                        {/*end::Slider*/}
                      </div>
                      {/*end::Body*/}
                    </div>
                    {/*end::List widget 4*/}{" "}
                  </div>
                  {/*end::Col*/}
                </div>
                {/*end::Row*/}
                {/*begin::Row*/}
                <div className="row gy-5 g-xl-10">
                  {/*begin::Col*/}
                  <div className="col-xl-8">
                    {/*begin::Table Widget 3*/}
                    <div className="card card-flush h-lg-100">
                      {/*begin::Card header*/}
                      <div className="card-header py-7">
                        {/*begin::Tabs*/}
                        <div
                          className="card-title pt-3 mb-0 gap-4 gap-lg-10 gap-xl-15 nav nav-tabs border-bottom-0"
                          data-kt-table-widget-3="tabs_nav"
                        >
                          {/*begin::Tab item*/}
                          <div
                            className="fs-4 fw-bold pb-3 border-bottom border-3 border-primary cursor-pointer"
                            data-kt-table-widget-3="tab"
                            data-kt-table-widget-3-value="Show All"
                          >
                            All Campaigns (47)
                          </div>
                          {/*end::Tab item*/}
                          {/*begin::Tab item*/}
                          <div
                            className="fs-4 fw-bold text-muted pb-3 cursor-pointer"
                            data-kt-table-widget-3="tab"
                            data-kt-table-widget-3-value="Pending"
                          >
                            Pending (8)
                          </div>
                          {/*end::Tab item*/}
                          {/*begin::Tab item*/}
                          <div
                            className="fs-4 fw-bold text-muted pb-3 cursor-pointer"
                            data-kt-table-widget-3="tab"
                            data-kt-table-widget-3-value="Completed"
                          >
                            Completed (39)
                          </div>
                          {/*end::Tab item*/}
                        </div>
                        {/*end::Tabs*/}
                        {/*begin::Create campaign button*/}
                        <div className="card-toolbar">
                          <a
                            href="#"
                            type="button"
                            className="btn btn-primary"
                            data-bs-toggle="modal"
                            data-bs-target="#kt_modal_create_campaign"
                          >
                            Create Campaign
                          </a>
                        </div>
                        {/*end::Create campaign button*/}
                      </div>
                      {/*end::Card header*/}
                      {/*begin::Card body*/}
                      <div className="card-body pt-1">
                        {/*begin::Sort & Filter*/}
                        <div className="d-flex flex-stack flex-wrap gap-4">
                          {/*begin::Sort*/}
                          <div className="d-flex align-items-center flex-wrap gap-3 gap-xl-9">
                            {/*begin::Type*/}
                            <div className="d-flex align-items-center fw-bold">
                              {/*begin::Label*/}
                              <div className="text-muted fs-7">Type</div>
                              {/*end::Label*/}
                              {/*begin::Select*/}
                              <select
                                className="form-select form-select-transparent text-gray-900 fs-7 lh-1 fw-bold py-0 ps-3 w-auto"
                                data-hide-search="true"
                                data-control="select2"
                                data-dropdown-css-class="w-150px"
                                data-placeholder="Select an option"
                              >
                                <option />
                                <option value="Show All" selected="">
                                  Show All
                                </option>
                                <option value="Newest">Newest</option>
                                <option value="oldest">Oldest</option>
                              </select>
                              {/*end::Select*/}
                            </div>
                            {/*end::Type*/}
                            {/*begin::Status*/}
                            <div className="d-flex align-items-center fw-bold">
                              {/*begin::Label*/}
                              <div className="text-muted fs-7 me-2">Status</div>
                              {/*end::Label*/}
                              {/*begin::Select*/}
                              <select
                                className="form-select form-select-transparent text-gray-900 fs-7 lh-1 fw-bold py-0 ps-3 w-auto"
                                data-hide-search="true"
                                data-control="select2"
                                data-dropdown-css-class="w-150px"
                                data-placeholder="Select an option"
                                data-kt-table-widget-3="filter_status"
                              >
                                <option />
                                <option value="Show All" selected="">
                                  Show All
                                </option>
                                <option value="Live Now">Live Now</option>
                                <option value="Reviewing">Reviewing</option>
                                <option value="Paused">Paused</option>
                              </select>
                              {/*end::Select*/}
                            </div>
                            {/*begin::Status*/}
                            {/*begin::Budget*/}
                            <div className="d-flex align-items-center fw-bold">
                              {/*begin::Label*/}
                              <div className="text-muted me-2">Budget</div>
                              {/*end::Label*/}
                              {/*begin::Select*/}
                              <select
                                className="form-select form-select-transparent text-gray-900 fs-7 lh-1 fw-bold py-0 ps-3 w-auto"
                                data-hide-search="true"
                                data-dropdown-css-class="w-150px"
                                data-control="select2"
                                data-placeholder="Select an option"
                                data-kt-table-widget-3="filter_status"
                              >
                                <option />
                                <option value="Show All" selected="">
                                  Show All
                                </option>
                                <option value="<5000">Less than $5,000</option>
                                <option value="5000-10000">
                                  $5,001 - $10,000
                                </option>
                                <option value=">10000">
                                  More than $10,001
                                </option>
                              </select>
                              {/*end::Select*/}
                            </div>
                            {/*begin::Budget*/}
                          </div>
                          {/*end::Sort*/}
                          {/*begin::Filter*/}
                          <div className="d-flex align-items-center gap-4">
                            {/*begin::Filter button*/}
                            <a
                              href="#"
                              className="text-hover-primary ps-4"
                              data-kt-menu-trigger="click"
                              data-kt-menu-placement="bottom-end"
                            >
                              <i className="ki-duotone ki-filter fs-2 text-gray-500">
                                <span className="path1" />
                                <span className="path2" />
                              </i>{" "}
                            </a>
                            {/*begin::Menu 1*/}
                            <div
                              className="menu menu-sub menu-sub-dropdown w-250px w-md-300px"
                              data-kt-menu="true"
                              id="kt_menu_66d40a2f72644"
                            >
                              {/*begin::Header*/}
                              <div className="px-7 py-5">
                                <div className="fs-5 text-gray-900 fw-bold">
                                  Filter Options
                                </div>
                              </div>
                              {/*end::Header*/}
                              {/*begin::Menu separator*/}
                              <div className="separator border-gray-200" />
                              {/*end::Menu separator*/}
                              {/*begin::Form*/}
                              <div className="px-7 py-5">
                                {/*begin::Input group*/}
                                <div className="mb-10">
                                  {/*begin::Label*/}
                                  <label className="form-label fw-semibold">
                                    Status:
                                  </label>
                                  {/*end::Label*/}
                                  {/*begin::Input*/}
                                  <div>
                                    <select
                                      className="form-select form-select-solid"
                                      multiple=""
                                      data-kt-select2="true"
                                      data-close-on-select="false"
                                      data-placeholder="Select option"
                                      data-dropdown-parent="#kt_menu_66d40a2f72644"
                                      data-allow-clear="true"
                                    >
                                      <option />
                                      <option value={1}>Approved</option>
                                      <option value={2}>Pending</option>
                                      <option value={2}>In Process</option>
                                      <option value={2}>Rejected</option>
                                    </select>
                                  </div>
                                  {/*end::Input*/}
                                </div>
                                {/*end::Input group*/}
                                {/*begin::Input group*/}
                                <div className="mb-10">
                                  {/*begin::Label*/}
                                  <label className="form-label fw-semibold">
                                    Member Type:
                                  </label>
                                  {/*end::Label*/}
                                  {/*begin::Options*/}
                                  <div className="d-flex">
                                    {/*begin::Options*/}
                                    <label className="form-check form-check-sm form-check-custom form-check-solid me-5">
                                      <input
                                        className="form-check-input"
                                        type="checkbox"
                                        defaultValue={1}
                                      />
                                      <span className="form-check-label">
                                        Author
                                      </span>
                                    </label>
                                    {/*end::Options*/}
                                    {/*begin::Options*/}
                                    <label className="form-check form-check-sm form-check-custom form-check-solid">
                                      <input
                                        className="form-check-input"
                                        type="checkbox"
                                        defaultValue={2}
                                        defaultChecked="checked"
                                      />
                                      <span className="form-check-label">
                                        Customer
                                      </span>
                                    </label>
                                    {/*end::Options*/}
                                  </div>
                                  {/*end::Options*/}
                                </div>
                                {/*end::Input group*/}
                                {/*begin::Input group*/}
                                <div className="mb-10">
                                  {/*begin::Label*/}
                                  <label className="form-label fw-semibold">
                                    Notifications:
                                  </label>
                                  {/*end::Label*/}
                                  {/*begin::Switch*/}
                                  <div className="form-check form-switch form-switch-sm form-check-custom form-check-solid">
                                    <input
                                      className="form-check-input"
                                      type="checkbox"
                                      defaultValue=""
                                      name="notifications"
                                      defaultChecked=""
                                    />
                                    <label className="form-check-label">
                                      Enabled
                                    </label>
                                  </div>
                                  {/*end::Switch*/}
                                </div>
                                {/*end::Input group*/}
                                {/*begin::Actions*/}
                                <div className="d-flex justify-content-end">
                                  <button
                                    type="reset"
                                    className="btn btn-sm btn-light btn-active-light-primary me-2"
                                    data-kt-menu-dismiss="true"
                                  >
                                    Reset
                                  </button>
                                  <button
                                    type="submit"
                                    className="btn btn-sm btn-primary"
                                    data-kt-menu-dismiss="true"
                                  >
                                    Apply
                                  </button>
                                </div>
                                {/*end::Actions*/}
                              </div>
                              {/*end::Form*/}
                            </div>
                            {/*end::Menu 1*/} {/*end::Filter button*/}
                          </div>
                          {/*end::Filter*/}
                        </div>
                        {/*end::Sort & Filter*/}
                        {/*begin::Seprator*/}
                        <div className="separator separator-dashed my-5" />
                        {/*end::Seprator*/}
                        {/*begin::Table*/}
                        <table
                          id="kt_widget_table_3"
                          className="table table-row-dashed align-middle fs-6 gy-4 my-0 pb-3"
                          data-kt-table-widget-3="all"
                        >
                          <thead className="d-none">
                            <tr>
                              <th>Campaign</th>
                              <th>Platforms</th>
                              <th>Status</th>
                              <th>Team</th>
                              <th>Date</th>
                              <th>Progress</th>
                              <th>Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="min-w-175px">
                                <div className="position-relative ps-6 pe-3 py-2">
                                  <div className="position-absolute start-0 top-0 w-4px h-100 rounded-2 bg-info" />
                                  <a
                                    href="#"
                                    className="mb-1 text-gray-900 text-hover-primary fw-bold"
                                  >
                                    Happy Christmas
                                  </a>
                                  <div className="fs-7 text-muted fw-bold">
                                    Created on 24 Dec 21
                                  </div>
                                </div>
                              </td>
                              <td>
                                {/*begin::Icons*/}
                                <div className="d-flex gap-2 mb-2">
                                  <a href="#">
                                    <img
                                      src="https://preview.keenthemes.com/keen/demo3/assets/media/svg/brand-logos/facebook-4.svg"
                                      className="w-20px"
                                      alt=""
                                    />
                                  </a>
                                  <a href="#">
                                    <img
                                      src="https://preview.keenthemes.com/keen/demo3/assets/media/svg/brand-logos/twitter-2.svg"
                                      className="w-20px"
                                      alt=""
                                    />
                                  </a>
                                  <a href="#">
                                    <img
                                      src="https://preview.keenthemes.com/keen/demo3/assets/media/svg/brand-logos/linkedin-2.svg"
                                      className="w-20px"
                                      alt=""
                                    />
                                  </a>
                                  <a href="#">
                                    <img
                                      src="https://preview.keenthemes.com/keen/demo3/assets/media/svg/brand-logos/youtube-3.svg"
                                      className="w-20px"
                                      alt=""
                                    />
                                  </a>
                                </div>
                                {/*end::Icons*/}
                                <div className="fs-7 text-muted fw-bold">
                                  Labor 24 - 35 years
                                </div>
                              </td>
                              <td>
                                <span className="badge badge-light-success">
                                  Live Now
                                </span>
                              </td>
                              <td className="min-w-125px">
                                {/*begin::Team members*/}
                                <div className="symbol-group symbol-hover mb-1">
                                  {/*begin::Member*/}
                                  <div className="symbol symbol-circle symbol-25px">
                                    <img
                                      src="https://preview.keenthemes.com/keen/demo3/assets/media/avatars/300-6.jpg"
                                      alt=""
                                    />
                                  </div>
                                  {/*end::Member*/}
                                  {/*begin::Member*/}
                                  <div className="symbol symbol-circle symbol-25px">
                                    <img
                                      src="https://preview.keenthemes.com/keen/demo3/assets/media/avatars/300-5.jpg"
                                      alt=""
                                    />
                                  </div>
                                  {/*end::Member*/}
                                  {/*begin::Member*/}
                                  <div className="symbol symbol-circle symbol-25px">
                                    <img
                                      src="https://preview.keenthemes.com/keen/demo3/assets/media/avatars/300-25.jpg"
                                      alt=""
                                    />
                                  </div>
                                  {/*end::Member*/}
                                  {/*begin::Member*/}
                                  <div className="symbol symbol-circle symbol-25px">
                                    <img
                                      src="https://preview.keenthemes.com/keen/demo3/assets/media/avatars/300-9.jpg"
                                      alt=""
                                    />
                                  </div>
                                  {/*end::Member*/}
                                  {/*begin::Member*/}
                                  <div className="symbol symbol-circle symbol-25px">
                                    <div className="symbol-label bg-danger">
                                      <span className="fs-7 text-inverse-danger">
                                        E
                                      </span>
                                    </div>
                                  </div>
                                  {/*end::Member*/}
                                  {/*begin::More members*/}
                                  <div className="symbol symbol-circle symbol-25px">
                                    <div className="symbol-label bg-dark">
                                      <span className="fs-8 text-inverse-dark">
                                        +0
                                      </span>
                                    </div>
                                  </div>
                                  {/*end::More members*/}
                                </div>
                                {/*end::Team members*/}
                                <div className="fs-7 fw-bold text-muted">
                                  Team Members
                                </div>
                              </td>
                              <td className="min-w-150px">
                                <div className="mb-2 fw-bold">
                                  24 Dec 21 - 06 Jan 22
                                </div>
                                <div className="fs-7 fw-bold text-muted">
                                  Date range
                                </div>
                              </td>
                              <td className="d-none">Pending</td>
                              <td className="text-end">
                                <button
                                  type="button"
                                  className="btn btn-icon btn-sm btn-light btn-active-primary w-25px h-25px"
                                >
                                  <i className="ki-duotone ki-black-right fs-2 text-muted" />{" "}
                                </button>
                              </td>
                            </tr>
                            <tr>
                              <td className="min-w-175px">
                                <div className="position-relative ps-6 pe-3 py-2">
                                  <div className="position-absolute start-0 top-0 w-4px h-100 rounded-2 bg-warning" />
                                  <a
                                    href="#"
                                    className="mb-1 text-gray-900 text-hover-primary fw-bold"
                                  >
                                    Halloween
                                  </a>
                                  <div className="fs-7 text-muted fw-bold">
                                    Created on 24 Dec 21
                                  </div>
                                </div>
                              </td>
                              <td>
                                {/*begin::Icons*/}
                                <div className="d-flex gap-2 mb-2">
                                  <a href="#">
                                    <img
                                      src="https://preview.keenthemes.com/keen/demo3/assets/media/svg/brand-logos/twitter-2.svg"
                                      className="w-20px"
                                      alt=""
                                    />
                                  </a>
                                  <a href="#">
                                    <img
                                      src="https://preview.keenthemes.com/keen/demo3/assets/media/svg/brand-logos/instagram-2-1.svg"
                                      className="w-20px"
                                      alt=""
                                    />
                                  </a>
                                  <a href="#">
                                    <img
                                      src="https://preview.keenthemes.com/keen/demo3/assets/media/svg/brand-logos/youtube-3.svg"
                                      className="w-20px"
                                      alt=""
                                    />
                                  </a>
                                </div>
                                {/*end::Icons*/}
                                <div className="fs-7 text-muted fw-bold">
                                  Labor 37 - 52 years
                                </div>
                              </td>
                              <td>
                                <span className="badge badge-light-primary">
                                  Reviewing
                                </span>
                              </td>
                              <td className="min-w-125px">
                                {/*begin::Team members*/}
                                <div className="symbol-group symbol-hover mb-1">
                                  {/*begin::Member*/}
                                  <div className="symbol symbol-circle symbol-25px">
                                    <img
                                      src="https://preview.keenthemes.com/keen/demo3/assets/media/avatars/300-1.jpg"
                                      alt=""
                                    />
                                  </div>
                                  {/*end::Member*/}
                                  {/*begin::Member*/}
                                  <div className="symbol symbol-circle symbol-25px">
                                    <img
                                      src="https://preview.keenthemes.com/keen/demo3/assets/media/avatars/300-25.jpg"
                                      alt=""
                                    />
                                  </div>
                                  {/*end::Member*/}
                                  {/*begin::Member*/}
                                  <div className="symbol symbol-circle symbol-25px">
                                    <img
                                      src="https://preview.keenthemes.com/keen/demo3/assets/media/avatars/300-6.jpg"
                                      alt=""
                                    />
                                  </div>
                                  {/*end::Member*/}
                                </div>
                                {/*end::Team members*/}
                                <div className="fs-7 fw-bold text-muted">
                                  Team Members
                                </div>
                              </td>
                              <td className="min-w-150px">
                                <div className="mb-2 fw-bold">
                                  03 Feb 22 - 14 Feb 22
                                </div>
                                <div className="fs-7 fw-bold text-muted">
                                  Date range
                                </div>
                              </td>
                              <td className="d-none">Completed</td>
                              <td className="text-end">
                                <button
                                  type="button"
                                  className="btn btn-icon btn-sm btn-light btn-active-primary w-25px h-25px"
                                >
                                  <i className="ki-duotone ki-black-right fs-2 text-muted" />{" "}
                                </button>
                              </td>
                            </tr>
                            <tr>
                              <td className="min-w-175px">
                                <div className="position-relative ps-6 pe-3 py-2">
                                  <div className="position-absolute start-0 top-0 w-4px h-100 rounded-2 bg-success" />
                                  <a
                                    href="#"
                                    className="mb-1 text-gray-900 text-hover-primary fw-bold"
                                  >
                                    Cyber Monday
                                  </a>
                                  <div className="fs-7 text-muted fw-bold">
                                    Created on 24 Dec 21
                                  </div>
                                </div>
                              </td>
                              <td>
                                {/*begin::Icons*/}
                                <div className="d-flex gap-2 mb-2">
                                  <a href="#">
                                    <img
                                      src="https://preview.keenthemes.com/keen/demo3/assets/media/svg/brand-logos/facebook-4.svg"
                                      className="w-20px"
                                      alt=""
                                    />
                                  </a>
                                  <a href="#">
                                    <img
                                      src="https://preview.keenthemes.com/keen/demo3/assets/media/svg/brand-logos/instagram-2-1.svg"
                                      className="w-20px"
                                      alt=""
                                    />
                                  </a>
                                </div>
                                {/*end::Icons*/}
                                <div className="fs-7 text-muted fw-bold">
                                  Labor 24 - 38 years
                                </div>
                              </td>
                              <td>
                                <span className="badge badge-light-success">
                                  Live Now
                                </span>
                              </td>
                              <td className="min-w-125px">
                                {/*begin::Team members*/}
                                <div className="symbol-group symbol-hover mb-1">
                                  {/*begin::Member*/}
                                  <div className="symbol symbol-circle symbol-25px">
                                    <div className="symbol-label bg-danger">
                                      <span className="fs-7 text-inverse-danger">
                                        M
                                      </span>
                                    </div>
                                  </div>
                                  {/*end::Member*/}
                                  {/*begin::Member*/}
                                  <div className="symbol symbol-circle symbol-25px">
                                    <img
                                      src="https://preview.keenthemes.com/keen/demo3/assets/media/avatars/300-6.jpg"
                                      alt=""
                                    />
                                  </div>
                                  {/*end::Member*/}
                                  {/*begin::Member*/}
                                  <div className="symbol symbol-circle symbol-25px">
                                    <div className="symbol-label bg-primary">
                                      <span className="fs-7 text-inverse-primary">
                                        N
                                      </span>
                                    </div>
                                  </div>
                                  {/*end::Member*/}
                                  {/*begin::Member*/}
                                  <div className="symbol symbol-circle symbol-25px">
                                    <img
                                      src="https://preview.keenthemes.com/keen/demo3/assets/media/avatars/300-13.jpg"
                                      alt=""
                                    />
                                  </div>
                                  {/*end::Member*/}
                                </div>
                                {/*end::Team members*/}
                                <div className="fs-7 fw-bold text-muted">
                                  Team Members
                                </div>
                              </td>
                              <td className="min-w-150px">
                                <div className="mb-2 fw-bold">
                                  19 Mar 22 - 04 Apr 22
                                </div>
                                <div className="fs-7 fw-bold text-muted">
                                  Date range
                                </div>
                              </td>
                              <td className="d-none">Pending</td>
                              <td className="text-end">
                                <button
                                  type="button"
                                  className="btn btn-icon btn-sm btn-light btn-active-primary w-25px h-25px"
                                >
                                  <i className="ki-duotone ki-black-right fs-2 text-muted" />{" "}
                                </button>
                              </td>
                            </tr>
                            <tr>
                              <td className="min-w-175px">
                                <div className="position-relative ps-6 pe-3 py-2">
                                  <div className="position-absolute start-0 top-0 w-4px h-100 rounded-2 bg-danger" />
                                  <a
                                    href="#"
                                    className="mb-1 text-gray-900 text-hover-primary fw-bold"
                                  >
                                    Thanksgiving
                                  </a>
                                  <div className="fs-7 text-muted fw-bold">
                                    Created on 24 Dec 21
                                  </div>
                                </div>
                              </td>
                              <td>
                                {/*begin::Icons*/}
                                <div className="d-flex gap-2 mb-2">
                                  <a href="#">
                                    <img
                                      src="https://preview.keenthemes.com/keen/demo3/assets/media/svg/brand-logos/twitter-2.svg"
                                      className="w-20px"
                                      alt=""
                                    />
                                  </a>
                                  <a href="#">
                                    <img
                                      src="https://preview.keenthemes.com/keen/demo3/assets/media/svg/brand-logos/instagram-2-1.svg"
                                      className="w-20px"
                                      alt=""
                                    />
                                  </a>
                                  <a href="#">
                                    <img
                                      src="https://preview.keenthemes.com/keen/demo3/assets/media/svg/brand-logos/linkedin-2.svg"
                                      className="w-20px"
                                      alt=""
                                    />
                                  </a>
                                </div>
                                {/*end::Icons*/}
                                <div className="fs-7 text-muted fw-bold">
                                  Labor 24 - 38 years
                                </div>
                              </td>
                              <td>
                                <span className="badge badge-light-warning">
                                  Paused
                                </span>
                              </td>
                              <td className="min-w-125px">
                                {/*begin::Team members*/}
                                <div className="symbol-group symbol-hover mb-1">
                                  {/*begin::Member*/}
                                  <div className="symbol symbol-circle symbol-25px">
                                    <img
                                      src="https://preview.keenthemes.com/keen/demo3/assets/media/avatars/300-6.jpg"
                                      alt=""
                                    />
                                  </div>
                                  {/*end::Member*/}
                                  {/*begin::Member*/}
                                  <div className="symbol symbol-circle symbol-25px">
                                    <img
                                      src="https://preview.keenthemes.com/keen/demo3/assets/media/avatars/300-25.jpg"
                                      alt=""
                                    />
                                  </div>
                                  {/*end::Member*/}
                                  {/*begin::Member*/}
                                  <div className="symbol symbol-circle symbol-25px">
                                    <img
                                      src="https://preview.keenthemes.com/keen/demo3/assets/media/avatars/300-1.jpg"
                                      alt=""
                                    />
                                  </div>
                                  {/*end::Member*/}
                                  {/*begin::Member*/}
                                  <div className="symbol symbol-circle symbol-25px">
                                    <div className="symbol-label bg-primary">
                                      <span className="fs-7 text-inverse-primary">
                                        N
                                      </span>
                                    </div>
                                  </div>
                                  {/*end::Member*/}
                                  {/*begin::Member*/}
                                  <div className="symbol symbol-circle symbol-25px">
                                    <img
                                      src="https://preview.keenthemes.com/keen/demo3/assets/media/avatars/300-5.jpg"
                                      alt=""
                                    />
                                  </div>
                                  {/*end::Member*/}
                                  {/*begin::More members*/}
                                  <div className="symbol symbol-circle symbol-25px">
                                    <div className="symbol-label bg-dark">
                                      <span className="fs-8 text-inverse-dark">
                                        +0
                                      </span>
                                    </div>
                                  </div>
                                  {/*end::More members*/}
                                </div>
                                {/*end::Team members*/}
                                <div className="fs-7 fw-bold text-muted">
                                  Team Members
                                </div>
                              </td>
                              <td className="min-w-150px">
                                <div className="mb-2 fw-bold">
                                  20 Jun 22 - 30 Jun 22
                                </div>
                                <div className="fs-7 fw-bold text-muted">
                                  Date range
                                </div>
                              </td>
                              <td className="d-none">Pending</td>
                              <td className="text-end">
                                <button
                                  type="button"
                                  className="btn btn-icon btn-sm btn-light btn-active-primary w-25px h-25px"
                                >
                                  <i className="ki-duotone ki-black-right fs-2 text-muted" />{" "}
                                </button>
                              </td>
                            </tr>
                            <tr>
                              <td className="min-w-175px">
                                <div className="position-relative ps-6 pe-3 py-2">
                                  <div className="position-absolute start-0 top-0 w-4px h-100 rounded-2 bg-primary" />
                                  <a
                                    href="#"
                                    className="mb-1 text-gray-900 text-hover-primary fw-bold"
                                  >
                                    Happy Mother's Day
                                  </a>
                                  <div className="fs-7 text-muted fw-bold">
                                    Created on 24 Dec 21
                                  </div>
                                </div>
                              </td>
                              <td>
                                {/*begin::Icons*/}
                                <div className="d-flex gap-2 mb-2">
                                  <a href="#">
                                    <img
                                      src="https://preview.keenthemes.com/keen/demo3/assets/media/svg/brand-logos/youtube-3.svg"
                                      className="w-20px"
                                      alt=""
                                    />
                                  </a>
                                </div>
                                {/*end::Icons*/}
                                <div className="fs-7 text-muted fw-bold">
                                  Labor 30 - 40 years
                                </div>
                              </td>
                              <td>
                                <span className="badge badge-light-warning">
                                  Paused
                                </span>
                              </td>
                              <td className="min-w-125px">
                                {/*begin::Team members*/}
                                <div className="symbol-group symbol-hover mb-1">
                                  {/*begin::Member*/}
                                  <div className="symbol symbol-circle symbol-25px">
                                    <img
                                      src="https://preview.keenthemes.com/keen/demo3/assets/media/avatars/300-23.jpg"
                                      alt=""
                                    />
                                  </div>
                                  {/*end::Member*/}
                                  {/*begin::Member*/}
                                  <div className="symbol symbol-circle symbol-25px">
                                    <img
                                      src="https://preview.keenthemes.com/keen/demo3/assets/media/avatars/300-13.jpg"
                                      alt=""
                                    />
                                  </div>
                                  {/*end::Member*/}
                                </div>
                                {/*end::Team members*/}
                                <div className="fs-7 fw-bold text-muted">
                                  Team Members
                                </div>
                              </td>
                              <td className="min-w-150px">
                                <div className="mb-2 fw-bold">
                                  01 Aug 22 - 01 Sep 22
                                </div>
                                <div className="fs-7 fw-bold text-muted">
                                  Date range
                                </div>
                              </td>
                              <td className="d-none">Completed</td>
                              <td className="text-end">
                                <button
                                  type="button"
                                  className="btn btn-icon btn-sm btn-light btn-active-primary w-25px h-25px"
                                >
                                  <i className="ki-duotone ki-black-right fs-2 text-muted" />{" "}
                                </button>
                              </td>
                            </tr>
                          </tbody>
                          {/*end::Table*/}
                        </table>
                        {/*end::Table*/}
                      </div>
                      {/*end::Card body*/}
                    </div>
                    {/*end::Table Widget 3*/}{" "}
                  </div>
                  {/*end::Col*/}
                  {/*begin::Col*/}
                  <div className="col-xl-4">
                    {/*begin::Chart widget 2*/}
                    <div className="card card-flush h-lg-100">
                      {/*begin::Header*/}
                      <div className="card-header pt-5 mb-7">
                        {/*begin::Title*/}
                        <h3 className="card-title align-items-start flex-column">
                          <span className="card-label fw-bold text-gray-900">
                            Notable Channels
                          </span>
                          <span className="text-gray-500 mt-1 fw-semibold fs-6">
                            Social networks overview
                          </span>
                        </h3>
                        {/*end::Title*/}
                        {/*begin::Toolbar*/}
                        <div className="card-toolbar">
                          {/*begin::Menu*/}
                          <button
                            className="btn btn-icon btn-color-gray-500 btn-active-color-primary justify-content-end"
                            data-kt-menu-trigger="click"
                            data-kt-menu-placement="bottom-end"
                            data-kt-menu-overflow="true"
                          >
                            <i className="ki-duotone ki-dots-square fs-1">
                              <span className="path1" />
                              <span className="path2" />
                              <span className="path3" />
                              <span className="path4" />
                            </i>
                          </button>
                          {/*begin::Menu 2*/}
                          <div
                            className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-semibold w-200px"
                            data-kt-menu="true"
                          >
                            {/*begin::Menu item*/}
                            <div className="menu-item px-3">
                              <div className="menu-content fs-6 text-gray-900 fw-bold px-3 py-4">
                                Quick Actions
                              </div>
                            </div>
                            {/*end::Menu item*/}
                            {/*begin::Menu separator*/}
                            <div className="separator mb-3 opacity-75" />
                            {/*end::Menu separator*/}
                            {/*begin::Menu item*/}
                            <div className="menu-item px-3">
                              <a href="#" className="menu-link px-3">
                                New Ticket
                              </a>
                            </div>
                            {/*end::Menu item*/}
                            {/*begin::Menu item*/}
                            <div className="menu-item px-3">
                              <a href="#" className="menu-link px-3">
                                New Customer
                              </a>
                            </div>
                            {/*end::Menu item*/}
                            {/*begin::Menu item*/}
                            <div
                              className="menu-item px-3"
                              data-kt-menu-trigger="hover"
                              data-kt-menu-placement="right-start"
                            >
                              {/*begin::Menu item*/}
                              <a href="#" className="menu-link px-3">
                                <span className="menu-title">New Group</span>
                                <span className="menu-arrow" />
                              </a>
                              {/*end::Menu item*/}
                              {/*begin::Menu sub*/}
                              <div className="menu-sub menu-sub-dropdown w-175px py-4">
                                {/*begin::Menu item*/}
                                <div className="menu-item px-3">
                                  <a href="#" className="menu-link px-3">
                                    Admin Group
                                  </a>
                                </div>
                                {/*end::Menu item*/}
                                {/*begin::Menu item*/}
                                <div className="menu-item px-3">
                                  <a href="#" className="menu-link px-3">
                                    Staff Group
                                  </a>
                                </div>
                                {/*end::Menu item*/}
                                {/*begin::Menu item*/}
                                <div className="menu-item px-3">
                                  <a href="#" className="menu-link px-3">
                                    Member Group
                                  </a>
                                </div>
                                {/*end::Menu item*/}
                              </div>
                              {/*end::Menu sub*/}
                            </div>
                            {/*end::Menu item*/}
                            {/*begin::Menu item*/}
                            <div className="menu-item px-3">
                              <a href="#" className="menu-link px-3">
                                New Contact
                              </a>
                            </div>
                            {/*end::Menu item*/}
                            {/*begin::Menu separator*/}
                            <div className="separator mt-3 opacity-75" />
                            {/*end::Menu separator*/}
                            {/*begin::Menu item*/}
                            <div className="menu-item px-3">
                              <div className="menu-content px-3 py-3">
                                <a
                                  className="btn btn-primary  btn-sm px-4"
                                  href="#"
                                >
                                  Generate Reports
                                </a>
                              </div>
                            </div>
                            {/*end::Menu item*/}
                          </div>
                          {/*end::Menu 2*/}
                          {/*end::Menu*/}
                        </div>
                        {/*end::Toolbar*/}
                      </div>
                      {/*end::Header*/}
                      {/*begin::Body*/}
                      <div className="card-body d-flex justify-content-between flex-column p-0">
                        {/*begin::Items*/}
                        <div className="mb-5 px-9">
                          {/*begin::Item*/}
                          <div className="d-flex flex-stack">
                            {/*begin::Section*/}
                            <div className="d-flex align-items-center me-3">
                              {/*begin::Icon*/}
                              <img
                                src="https://preview.keenthemes.com/keen/demo3/assets/media/svg/brand-logos/dribbble-icon-1.svg"
                                className="me-3 w-30px"
                                alt=""
                              />
                              {/*end::Icon*/}
                              {/*begin::Section*/}
                              <div className="flex-grow-1">
                                <a
                                  href="#"
                                  className="text-gray-800 text-hover-primary fs-5 fw-bold lh-0"
                                >
                                  Dribbble
                                </a>
                                <span className="text-gray-500 fw-semibold d-block fs-6">
                                  Community
                                </span>
                              </div>
                              {/*end::Section*/}
                            </div>
                            {/*end::Section*/}
                            {/*begin::Statistics*/}
                            <div className="d-flex align-items-center w-100 mw-125px">
                              {/*begin::Progress*/}
                              <div className="progress h-6px w-100 me-2 bg-light-success">
                                <div
                                  className="progress-bar bg-success"
                                  role="progressbar"
                                  style={{ width: "65%" }}
                                  aria-valuenow={65}
                                  aria-valuemin={0}
                                  aria-valuemax={100}
                                />
                              </div>
                              {/*end::Progress*/}
                              {/*begin::Value*/}
                              <span className="text-gray-500 fw-semibold">
                                65%
                              </span>
                              {/*end::Value*/}
                            </div>
                            {/*end::Statistics*/}
                          </div>
                          {/*end::Item*/}
                          {/*begin::Separator*/}
                          <div className="separator separator-dashed my-4" />
                          {/*end::Separator*/}
                          {/*begin::Item*/}
                          <div className="d-flex flex-stack">
                            {/*begin::Section*/}
                            <div className="d-flex align-items-center me-3">
                              {/*begin::Icon*/}
                              <img
                                src="https://preview.keenthemes.com/keen/demo3/assets/media/svg/brand-logos/instagram-2-1.svg"
                                className="me-3 w-30px"
                                alt=""
                              />
                              {/*end::Icon*/}
                              {/*begin::Section*/}
                              <div className="flex-grow-1">
                                <a
                                  href="#"
                                  className="text-gray-800 text-hover-primary fs-5 fw-bold lh-0"
                                >
                                  Linked In
                                </a>
                                <span className="text-gray-500 fw-semibold d-block fs-6">
                                  Social Media
                                </span>
                              </div>
                              {/*end::Section*/}
                            </div>
                            {/*end::Section*/}
                            {/*begin::Statistics*/}
                            <div className="d-flex align-items-center w-100 mw-125px">
                              {/*begin::Progress*/}
                              <div className="progress h-6px w-100 me-2 bg-light-warning">
                                <div
                                  className="progress-bar bg-warning"
                                  role="progressbar"
                                  style={{ width: "87%" }}
                                  aria-valuenow={87}
                                  aria-valuemin={0}
                                  aria-valuemax={100}
                                />
                              </div>
                              {/*end::Progress*/}
                              {/*begin::Value*/}
                              <span className="text-gray-500 fw-semibold">
                                87%
                              </span>
                              {/*end::Value*/}
                            </div>
                            {/*end::Statistics*/}
                          </div>
                          {/*end::Item*/}
                          {/*begin::Separator*/}
                          <div className="separator separator-dashed my-4" />
                          {/*end::Separator*/}
                          {/*begin::Item*/}
                          <div className="d-flex flex-stack">
                            {/*begin::Section*/}
                            <div className="d-flex align-items-center me-3">
                              {/*begin::Icon*/}
                              <img
                                src="https://preview.keenthemes.com/keen/demo3/assets/media/svg/brand-logos/slack-icon.svg"
                                className="me-3 w-30px"
                                alt=""
                              />
                              {/*end::Icon*/}
                              {/*begin::Section*/}
                              <div className="flex-grow-1">
                                <a
                                  href="#"
                                  className="text-gray-800 text-hover-primary fs-5 fw-bold lh-0"
                                >
                                  Slack
                                </a>
                                <span className="text-gray-500 fw-semibold d-block fs-6">
                                  Messanger
                                </span>
                              </div>
                              {/*end::Section*/}
                            </div>
                            {/*end::Section*/}
                            {/*begin::Statistics*/}
                            <div className="d-flex align-items-center w-100 mw-125px">
                              {/*begin::Progress*/}
                              <div className="progress h-6px w-100 me-2 bg-light-primary">
                                <div
                                  className="progress-bar bg-primary"
                                  role="progressbar"
                                  style={{ width: "44%" }}
                                  aria-valuenow={44}
                                  aria-valuemin={0}
                                  aria-valuemax={100}
                                />
                              </div>
                              {/*end::Progress*/}
                              {/*begin::Value*/}
                              <span className="text-gray-500 fw-semibold">
                                44%
                              </span>
                              {/*end::Value*/}
                            </div>
                            {/*end::Statistics*/}
                          </div>
                          {/*end::Item*/}
                          {/*begin::Separator*/}
                          <div className="separator separator-dashed my-4" />
                          {/*end::Separator*/}
                          {/*begin::Item*/}
                          <div className="d-flex flex-stack">
                            {/*begin::Section*/}
                            <div className="d-flex align-items-center me-3">
                              {/*begin::Icon*/}
                              <img
                                src="https://preview.keenthemes.com/keen/demo3/assets/media/svg/brand-logos/google-icon.svg"
                                className="me-3 w-30px"
                                alt=""
                              />
                              {/*end::Icon*/}
                              {/*begin::Section*/}
                              <div className="flex-grow-1">
                                <a
                                  href="#"
                                  className="text-gray-800 text-hover-primary fs-5 fw-bold lh-0"
                                >
                                  Google
                                </a>
                                <span className="text-gray-500 fw-semibold d-block fs-6">
                                  SEO &amp; PPC
                                </span>
                              </div>
                              {/*end::Section*/}
                            </div>
                            {/*end::Section*/}
                            {/*begin::Statistics*/}
                            <div className="d-flex align-items-center w-100 mw-125px">
                              {/*begin::Progress*/}
                              <div className="progress h-6px w-100 me-2 bg-light-info">
                                <div
                                  className="progress-bar bg-info"
                                  role="progressbar"
                                  style={{ width: "70%" }}
                                  aria-valuenow={70}
                                  aria-valuemin={0}
                                  aria-valuemax={100}
                                />
                              </div>
                              {/*end::Progress*/}
                              {/*begin::Value*/}
                              <span className="text-gray-500 fw-semibold">
                                70%
                              </span>
                              {/*end::Value*/}
                            </div>
                            {/*end::Statistics*/}
                          </div>
                          {/*end::Item*/}
                          {/*begin::Separator*/}
                          <div className="separator separator-dashed my-4" />
                          {/*end::Separator*/}
                          {/*begin::Item*/}
                          <div className="d-flex flex-stack">
                            {/*begin::Section*/}
                            <div className="d-flex align-items-center me-3">
                              {/*begin::Icon*/}
                              <img
                                src="https://preview.keenthemes.com/keen/demo3/assets/media/svg/brand-logos/invision.svg"
                                className="me-3 w-30px"
                                alt=""
                              />
                              {/*end::Icon*/}
                              {/*begin::Section*/}
                              <div className="flex-grow-1">
                                <a
                                  href="#"
                                  className="text-gray-800 text-hover-primary fs-5 fw-bold lh-0"
                                >
                                  inVision
                                </a>
                                <span className="text-gray-500 fw-semibold d-block fs-6">
                                  Collaboration
                                </span>
                              </div>
                              {/*end::Section*/}
                            </div>
                            {/*end::Section*/}
                            {/*begin::Statistics*/}
                            <div className="d-flex align-items-center w-100 mw-125px">
                              {/*begin::Progress*/}
                              <div className="progress h-6px w-100 me-2 bg-light-danger">
                                <div
                                  className="progress-bar bg-danger"
                                  role="progressbar"
                                  style={{ width: "56%" }}
                                  aria-valuenow={56}
                                  aria-valuemin={0}
                                  aria-valuemax={100}
                                />
                              </div>
                              {/*end::Progress*/}
                              {/*begin::Value*/}
                              <span className="text-gray-500 fw-semibold">
                                56%
                              </span>
                              {/*end::Value*/}
                            </div>
                            {/*end::Statistics*/}
                          </div>
                          {/*end::Item*/}
                          {/*begin::Separator*/}
                          <div className="separator separator-dashed my-4" />
                          {/*end::Separator*/}
                          {/*begin::Item*/}
                          <div className="d-flex flex-stack">
                            {/*begin::Section*/}
                            <div className="d-flex align-items-center me-3">
                              {/*begin::Icon*/}
                              <img
                                src="https://preview.keenthemes.com/keen/demo3/assets/media/svg/brand-logos/facebook-3.svg"
                                className="me-3 w-30px"
                                alt=""
                              />
                              {/*end::Icon*/}
                              {/*begin::Section*/}
                              <div className="flex-grow-1">
                                <a
                                  href="#"
                                  className="text-gray-800 text-hover-primary fs-5 fw-bold lh-0"
                                >
                                  Facebook
                                </a>
                                <span className="text-gray-500 fw-semibold d-block fs-6">
                                  Social Network
                                </span>
                              </div>
                              {/*end::Section*/}
                            </div>
                            {/*end::Section*/}
                            {/*begin::Statistics*/}
                            <div className="d-flex align-items-center w-100 mw-125px">
                              {/*begin::Progress*/}
                              <div className="progress h-6px w-100 me-2 bg-light-success">
                                <div
                                  className="progress-bar bg-success"
                                  role="progressbar"
                                  style={{ width: "82%" }}
                                  aria-valuenow={82}
                                  aria-valuemin={0}
                                  aria-valuemax={100}
                                />
                              </div>
                              {/*end::Progress*/}
                              {/*begin::Value*/}
                              <span className="text-gray-500 fw-semibold">
                                82%
                              </span>
                              {/*end::Value*/}
                            </div>
                            {/*end::Statistics*/}
                          </div>
                          {/*end::Item*/}
                        </div>
                        {/*end::Items*/}
                        {/*begin::Chart*/}
                        <div
                          className="card-rounded-bottom"
                          id="kt_charts_widget_2"
                          data-kt-chart-color="primary"
                          style={{ height: 90 }}
                        />
                        {/*end::Chart*/}
                      </div>
                      {/*end::Body*/}
                    </div>
                    {/*end::Chart widget 2*/}
                  </div>
                  {/*end::Col*/}
                </div>
                {/*end::Row*/}
              </div>
              {/*end::Content container*/}
            </div>
            {/*end::Content*/}
          </div>
          {/*end::Content wrapper*/}
          {/*begin::Footer*/}
          <div id="kt_app_footer" className="app-footer ">
            {/*begin::Footer container*/}
            <div className="app-container  container-fluid d-flex flex-column flex-md-row flex-center flex-md-stack py-3 ">
              {/*begin::Copyright*/}
              <div className="text-gray-900 order-2 order-md-1">
                <span className="text-muted fw-semibold me-1">2024©</span>
                <a
                  href="https://keenthemes.com/"
                  target="_blank"
                  className="text-gray-800 text-hover-primary"
                >
                  Keenthemes
                </a>
              </div>
              {/*end::Copyright*/}
              {/*begin::Menu*/}
              <ul className="menu menu-gray-600 menu-hover-primary fw-semibold order-1">
                <li className="menu-item">
                  <a
                    href="https://keenthemes.com/"
                    target="_blank"
                    className="menu-link px-2"
                  >
                    About
                  </a>
                </li>
                <li className="menu-item">
                  <a
                    href="https://devs.keenthemes.com/"
                    target="_blank"
                    className="menu-link px-2"
                  >
                    Support
                  </a>
                </li>
                <li className="menu-item">
                  <a
                    href="https://themes.getbootstrap.com/product/keen-the-ultimate-bootstrap-admin-theme/"
                    target="_blank"
                    className="menu-link px-2"
                  >
                    Purchase
                  </a>
                </li>
              </ul>
              {/*end::Menu*/}{" "}
            </div>
            {/*end::Footer container*/}
          </div>
          {/*end::Footer*/}{" "}
        </div>
        {/*end:::Main*/}
      </div>
      {/*end::Wrapper*/}
    </div>
    {/*end::Page*/}
  </div>
  {/*end::App*/}
  {/*begin::App layout builder*/}
  <div
    id="kt_app_layout_builder"
    className="bg-body"
    data-kt-drawer="true"
    data-kt-drawer-name="app-settings"
    data-kt-drawer-activate="true"
    data-kt-drawer-overlay="true"
    data-kt-drawer-width="{default:'300px', 'lg': '380px'}"
    data-kt-drawer-direction="end"
    data-kt-drawer-toggle="#kt_app_layout_builder_toggle"
    data-kt-drawer-close="#kt_app_layout_builder_close"
  >
    {/*begin::Card*/}
    <div className="card border-0 shadow-none rounded-0 w-100">
      {/*begin::Card header*/}
      <div
        className="card-header bgi-position-y-bottom bgi-position-x-end bgi-size-cover bgi-no-repeat rounded-0 border-0 py-4"
        id="kt_app_layout_builder_header"
        style={{
          backgroundImage:
            'url("https://preview.keenthemes.com/keen/demo3/assets/media/misc/layout/customizer-header-bg.jpg")'
        }}
      >
        {/*begin::Card title*/}
        <h3 className="card-title fs-3 fw-bold text-white flex-column m-0">
          Keen Builder
          <small className="text-white opacity-50 fs-7 fw-semibold pt-1">
            Get your product deeply customized
          </small>
        </h3>
        {/*end::Card title*/}
        {/*begin::Card toolbar*/}
        <div className="card-toolbar">
          <button
            type="button"
            className="btn btn-sm btn-icon btn-color-white p-0 w-20px h-20px rounded-1"
            id="kt_app_layout_builder_close"
          >
            <i className="ki-duotone ki-cross-square fs-2">
              <span className="path1" />
              <span className="path2" />
            </i>{" "}
          </button>
        </div>
        {/*end::Card toolbar*/}
      </div>
      {/*end::Card header*/}
      {/*begin::Card body*/}
      <div
        className="card-body position-relative"
        id="kt_app_layout_builder_body"
      >
        {/*begin::Content*/}
        <div
          id="kt_app_settings_content"
          className="position-relative scroll-y me-n5 pe-5"
          data-kt-scroll="true"
          data-kt-scroll-height="auto"
          data-kt-scroll-wrappers="#kt_app_layout_builder_body"
          data-kt-scroll-dependencies="#kt_app_layout_builder_header, #kt_app_layout_builder_footer"
          data-kt-scroll-offset="5px"
        >
          {/*begin::Form*/}
          <form
            className="form"
            method="POST"
            id="kt_app_layout_builder_form"
            action="https://preview.keenthemes.com/keen/demo3/index.php"
          >
            <input
              type="hidden"
              id="kt_app_layout_builder_action"
              name="layout-builder[action]"
            />
            {/*begin::Card body*/}
            <div className="card-body p-0">
              {/*begin::Form group*/}
              <div className="form-group">
                {/*begin::Heading*/}
                <div className="mb-6">
                  <h4 className="fw-bold text-gray-900">Theme Mode</h4>
                  <div className="fw-semibold text-muted fs-7 d-block lh-1">
                    Enjoy Dark &amp; Light modes.
                    <a
                      className="fw-semibold"
                      href="https://preview.keenthemes.com/html/keen/docs/getting-started/dark-mode"
                      target="_blank"
                    >
                      See docs
                    </a>
                  </div>
                </div>
                {/*end::Heading*/}
                {/*begin::Options*/}
                <div
                  className="row "
                  data-kt-buttons="true"
                  data-kt-buttons-target=".form-check-image,.form-check-input"
                >
                  {/*begin::Col*/}
                  <div className="col-6">
                    {/*begin::Option*/}
                    <label className="form-check-image form-check-success">
                      {/*begin::Image*/}
                      <div className="form-check-wrapper border-gray-200 border-2">
                        <img
                          src="https://preview.keenthemes.com/keen/demo3/assets/media/preview/demos/demo3/light-ltr.png"
                          className="form-check-rounded mw-100"
                          alt=""
                        />
                      </div>
                      {/*end::Image*/}
                      {/*begin::Check*/}
                      <div className="form-check form-check-custom form-check-solid form-check-sm form-check-success">
                        <input
                          className="form-check-input"
                          type="radio"
                          defaultValue="light"
                          name="theme_mode"
                          id="kt_layout_builder_theme_mode_light"
                        />
                        {/*begin::Label*/}
                        <div className="form-check-label text-gray-700">
                          Light{" "}
                        </div>
                        {/*end::Label*/}
                      </div>
                      {/*end::Check*/}
                    </label>
                    {/*end::Option*/}
                  </div>
                  {/*end::Col*/}
                  {/*begin::Col*/}
                  <div className="col-6">
                    {/*begin::Option*/}
                    <label className="form-check-image form-check-success">
                      {/*begin::Image*/}
                      <div className="form-check-wrapper border-gray-200 border-2">
                        <img
                          src="https://preview.keenthemes.com/keen/demo3/assets/media/preview/demos/demo3/dark-ltr.png"
                          className="form-check-rounded mw-100"
                          alt=""
                        />
                      </div>
                      {/*end::Image*/}
                      {/*begin::Check*/}
                      <div className="form-check form-check-custom form-check-solid form-check-sm form-check-success">
                        <input
                          className="form-check-input"
                          type="radio"
                          defaultValue="dark"
                          name="theme_mode"
                          id="kt_layout_builder_theme_mode_dark"
                        />
                        {/*begin::Label*/}
                        <div className="form-check-label text-gray-700">
                          Dark{" "}
                        </div>
                        {/*end::Label*/}
                      </div>
                      {/*end::Check*/}
                    </label>
                    {/*end::Option*/}
                  </div>
                  {/*end::Col*/}
                </div>
                {/*end::Options*/}
              </div>
              {/*end::Form group*/}
              <div className="separator separator-dashed my-5" />
              {/*begin::Form group*/}
              <div className="form-group d-flex flex-stack">
                {/*begin::Heading*/}
                <div className="d-flex flex-column">
                  <h4 className="fw-bold text-gray-900">RTL Mode</h4>
                  <div className="fs-7 fw-semibold text-muted">
                    Change Language Direction.
                    <a
                      className="fw-semibold"
                      href="https://preview.keenthemes.com/html/keen/docs/getting-started/rtl"
                      target="_blank"
                    >
                      See docs
                    </a>
                  </div>
                </div>
                {/*end::Heading*/}
                {/*begin::Option*/}
                <div className="d-flex justify-content-end">
                  {/*begin::Check*/}
                  <div className="form-check form-check-custom form-check-solid form-check-success form-switch">
                    <input
                      type="hidden"
                      defaultValue="false"
                      name="layout-builder[layout][app][general][rtl]"
                    />
                    <input
                      className="form-check-input w-45px h-30px"
                      type="checkbox"
                      defaultValue="true"
                      name="layout-builder[layout][app][general][rtl]"
                    />
                  </div>
                  {/*end::Check*/}
                </div>
                {/*end::Option*/}
              </div>
              {/*end::Form group*/}
              <div className="separator separator-dashed my-5" />
              {/*begin::Form group*/}
              <div className="form-group ">
                {/*begin::Heading*/}
                <div className="d-flex flex-column mb-4">
                  <h4 className="fw-bold text-gray-900">Width Mode</h4>
                  <div className="fs-7 fw-semibold text-muted">
                    Page width options
                  </div>
                </div>
                {/*end::Heading*/}
                {/*begin::Options*/}
                <div className="d-flex gap-7">
                  {/*begin::Check*/}
                  <div className="form-check form-check-custom form-check-success form-check-solid form-check-sm">
                    <input
                      className="form-check-input"
                      type="radio"
                      defaultChecked=""
                      defaultValue="default"
                      id="kt_layout_builder_page_width_default"
                      name="layout-builder[layout][app][general][page-width]"
                    />
                    {/*begin::Label*/}
                    <label
                      className="form-check-label text-gray-700 fw-bold text-nowrap"
                      htmlFor="kt_layout_builder_page_width_default"
                    >
                      Default{" "}
                    </label>
                    {/*end::Label*/}
                  </div>
                  {/*end::Check*/}
                  {/*begin::Check*/}
                  <div className="form-check form-check-custom form-check-success form-check-solid form-check-sm">
                    <input
                      className="form-check-input"
                      type="radio"
                      defaultValue="fluid"
                      id="kt_layout_builder_page_width_fluid"
                      name="layout-builder[layout][app][general][page-width]"
                    />
                    {/*begin::Label*/}
                    <label
                      className="form-check-label text-gray-700 fw-bold text-nowrap"
                      htmlFor="kt_layout_builder_page_width_fluid"
                    >
                      Fluid{" "}
                    </label>
                    {/*end::Label*/}
                  </div>
                  {/*end::Check*/}
                  {/*begin::Check*/}
                  <div className="form-check form-check-custom form-check-success form-check-solid form-check-sm">
                    <input
                      className="form-check-input"
                      type="radio"
                      defaultValue="fixed"
                      id="kt_layout_builder_page_width_fixed"
                      name="layout-builder[layout][app][general][page-width]"
                    />
                    {/*begin::Label*/}
                    <label
                      className="form-check-label text-gray-700 fw-bold text-nowrap"
                      htmlFor="kt_layout_builder_page_width_fixed"
                    >
                      Fixed{" "}
                    </label>
                    {/*end::Label*/}
                  </div>
                  {/*end::Check*/}
                </div>
                {/*end::Options*/}
              </div>
              {/*end::Form group*/}
              <div className="separator separator-dashed my-5" />
              {/*begin::Form group*/}
              <div className="form-group ">
                {/*begin::Heading*/}
                <div className="d-flex flex-column mb-4">
                  <h4 className="fw-bold text-gray-900">KeenIcons Style</h4>
                  <div>
                    <span className="fs-7 fw-semibold text-muted">
                      Select global UI icons style.
                    </span>
                    <a
                      className="fw-semibold"
                      href="https://preview.keenthemes.com/html/keen/docs/icons/keenicons"
                      target="_blank"
                    >
                      Learn more
                    </a>
                  </div>
                </div>
                {/*end::Heading*/}
                {/*begin::Options*/}
                <div
                  className="d-flex flex-stack gap-3 "
                  data-kt-buttons="true"
                  data-kt-buttons-target=".form-check-image,.form-check-input"
                >
                  {/*begin::Option*/}
                  <label className="form-check-image form-check-success w-100 parent-active parent-hover active">
                    {/*begin::Image*/}
                    <div className="form-check-wrapper d-flex flex-center border-gray-200 border-2 mb-0 py-3 px-4">
                      <i className="ki-duotone ki-picture fs-1 text-gray-500 parent-active-gray-700 parent-hover-gray-700">
                        <span className="path1" />
                        <span className="path2" />
                      </i>
                      <span className="fs-7 fw-semibold ms-2 text-gray-500 parent-active-gray-700 parent-hover-gray-700">
                        Duotone
                      </span>
                    </div>
                    {/*end::Image*/}
                    {/*begin::Check*/}
                    <div
                      style={{
                        visibility: "hidden",
                        height: "0 !important",
                        width: "0 !importnat",
                        overflow: "hidden"
                      }}
                    >
                      <input
                        className="form-check-input"
                        type="radio"
                        defaultValue="duotone"
                        defaultChecked=""
                        name="layout-builder[layout][app][general][icons]"
                      />
                    </div>
                    {/*end::Check*/}
                  </label>
                  {/*end::Option*/}
                  {/*begin::Option*/}
                  <label className="form-check-image form-check-success w-100 parent-active parent-hover ">
                    {/*begin::Image*/}
                    <div className="form-check-wrapper d-flex flex-center border-gray-200 border-2 mb-0 py-3 px-4">
                      <i className="ki-outline ki-picture fs-1 text-gray-500 parent-active-gray-700 parent-hover-gray-700" />
                      <span className="fs-7 fw-semibold ms-2 text-gray-500 parent-active-gray-700 parent-hover-gray-700">
                        Outline
                      </span>
                    </div>
                    {/*end::Image*/}
                    {/*begin::Check*/}
                    <div
                      style={{
                        visibility: "hidden",
                        height: "0 !important",
                        width: "0 !importnat",
                        overflow: "hidden"
                      }}
                    >
                      <input
                        className="form-check-input"
                        type="radio"
                        defaultValue="outline"
                        name="layout-builder[layout][app][general][icons]"
                      />
                    </div>
                    {/*end::Check*/}
                  </label>
                  {/*end::Option*/}
                  {/*begin::Option*/}
                  <label className="form-check-image form-check-success w-100 parent-active parent-hover ">
                    {/*begin::Image*/}
                    <div className="form-check-wrapper d-flex flex-center border-gray-200 border-2 mb-0 py-3 px-4">
                      <i className="ki-solid ki-picture fs-1 text-gray-500 parent-active-gray-700 parent-hover-gray-700" />
                      <span className="fs-7 fw-semibold ms-2 text-gray-500 parent-active-gray-700 parent-hover-gray-700">
                        Solid
                      </span>
                    </div>
                    {/*end::Image*/}
                    {/*begin::Check*/}
                    <div
                      style={{
                        visibility: "hidden",
                        height: "0 !important",
                        width: "0 !importnat",
                        overflow: "hidden"
                      }}
                    >
                      <input
                        className="form-check-input"
                        type="radio"
                        defaultValue="solid"
                        name="layout-builder[layout][app][general][icons]"
                      />
                    </div>
                    {/*end::Check*/}
                  </label>
                  {/*end::Option*/}
                </div>
                {/*end::Options*/}
              </div>
              {/*end::Form group*/}
              <div className="separator separator-dashed my-5" />
              {/*begin::Form group*/}
              <div className="form-group">
                {/*begin::Heading*/}
                <div className="mb-6">
                  <h4 className="fw-bold text-gray-900">Layouts</h4>
                  <span className="fw-semibold text-muted fs-7 lh-1">
                    4 main layouts.
                  </span>
                  <a
                    href="https://preview.keenthemes.com/keen/demo3/layout-builder.html"
                    className="fw-semibold text-primary"
                  >
                    More layout options
                  </a>
                </div>
                {/*end::Heading*/}
                {/*begin::Options*/}
                <div
                  className="row gy-3"
                  data-kt-buttons="true"
                  data-kt-buttons-target=".form-check-image:not(.disabled),.form-check-input:not([disabled])"
                >
                  {/*begin::Col*/}
                  <div className="col-6">
                    {/*begin::Option*/}
                    <label className="form-check-image form-check-success active  active">
                      {/*begin::Image*/}
                      <div className="form-check-wrapper border-gray-200 border-2">
                        <img
                          src="https://preview.keenthemes.com/keen/demo3/assets/media/misc/layout/dark-sidebar.png"
                          className="form-check-rounded mw-100"
                          alt=""
                        />
                      </div>
                      {/*end::Image*/}
                      {/*begin::Check*/}
                      <div className="form-check form-check-custom form-check-success form-check-sm form-check-solid">
                        <input
                          className="form-check-input"
                          type="radio"
                          defaultChecked=""
                          defaultValue="dark-sidebar"
                          name="layout-builder[layout][app][general][layout]"
                        />
                        {/*begin::Label*/}
                        <div className="form-check-label text-gray-700">
                          Dark Sidebar{" "}
                        </div>
                        {/*end::Label*/}
                      </div>
                      {/*end::Check*/}
                    </label>
                    {/*end::Option*/}
                  </div>
                  {/*end::Col*/}
                  {/*begin::Col*/}
                  <div className="col-6">
                    {/*begin::Option*/}
                    <label className="form-check-image form-check-success   ">
                      {/*begin::Image*/}
                      <div className="form-check-wrapper border-gray-200 border-2">
                        <img
                          src="https://preview.keenthemes.com/keen/demo3/assets/media/misc/layout/light-sidebar.png"
                          className="form-check-rounded mw-100"
                          alt=""
                        />
                      </div>
                      {/*end::Image*/}
                      {/*begin::Check*/}
                      <div className="form-check form-check-custom form-check-success form-check-sm form-check-solid">
                        <input
                          className="form-check-input"
                          type="radio"
                          defaultValue="light-sidebar"
                          name="layout-builder[layout][app][general][layout]"
                        />
                        {/*begin::Label*/}
                        <div className="form-check-label text-gray-700">
                          Light Sidebar{" "}
                        </div>
                        {/*end::Label*/}
                      </div>
                      {/*end::Check*/}
                    </label>
                    {/*end::Option*/}
                  </div>
                  {/*end::Col*/}
                  {/*begin::Col*/}
                  <div className="col-6">
                    {/*begin::Option*/}
                    <label className="form-check-image form-check-success   ">
                      {/*begin::Image*/}
                      <div className="form-check-wrapper border-gray-200 border-2">
                        <img
                          src="https://preview.keenthemes.com/keen/demo3/assets/media/misc/layout/dark-header.png"
                          className="form-check-rounded mw-100"
                          alt=""
                        />
                      </div>
                      {/*end::Image*/}
                      {/*begin::Check*/}
                      <div className="form-check form-check-custom form-check-success form-check-sm form-check-solid">
                        <input
                          className="form-check-input"
                          type="radio"
                          defaultValue="dark-header"
                          name="layout-builder[layout][app][general][layout]"
                        />
                        {/*begin::Label*/}
                        <div className="form-check-label text-gray-700">
                          Dark Header{" "}
                        </div>
                        {/*end::Label*/}
                      </div>
                      {/*end::Check*/}
                    </label>
                    {/*end::Option*/}
                  </div>
                  {/*end::Col*/}
                  {/*begin::Col*/}
                  <div className="col-6">
                    {/*begin::Option*/}
                    <label className="form-check-image form-check-success   ">
                      {/*begin::Image*/}
                      <div className="form-check-wrapper border-gray-200 border-2">
                        <img
                          src="https://preview.keenthemes.com/keen/demo3/assets/media/misc/layout/light-header.png"
                          className="form-check-rounded mw-100"
                          alt=""
                        />
                      </div>
                      {/*end::Image*/}
                      {/*begin::Check*/}
                      <div className="form-check form-check-custom form-check-success form-check-sm form-check-solid">
                        <input
                          className="form-check-input"
                          type="radio"
                          defaultValue="light-header"
                          name="layout-builder[layout][app][general][layout]"
                        />
                        {/*begin::Label*/}
                        <div className="form-check-label text-gray-700">
                          Light Header{" "}
                        </div>
                        {/*end::Label*/}
                      </div>
                      {/*end::Check*/}
                    </label>
                    {/*end::Option*/}
                  </div>
                  {/*end::Col*/}
                </div>
                {/*end::Options*/}
              </div>
              {/*end::Form group*/}
            </div>
            {/*end::Card body*/}{" "}
          </form>
          {/*end::Form*/}
        </div>
        {/*end::Content*/}
      </div>
      {/*end::Card body*/}
      {/*begin::Card footer*/}
      <div
        className="card-footer border-0 d-flex gap-3 pb-9 pt-0"
        id="kt_app_layout_builder_footer"
      >
        <button
          type="button"
          id="kt_app_layout_builder_preview"
          className="btn btn-primary flex-grow-1 fw-semibold"
        >
          {/*begin::Indicator label*/}
          <span className="indicator-label">Preview</span>
          {/*end::Indicator label*/}
          {/*begin::Indicator progress*/}
          <span className="indicator-progress">
            Please wait...{" "}
            <span className="spinner-border spinner-border-sm align-middle ms-2" />
          </span>
          {/*end::Indicator progress*/}{" "}
        </button>
        <button
          type="button"
          id="kt_app_layout_builder_reset"
          className="btn btn-light flex-grow-1 fw-semibold"
        >
          {/*begin::Indicator label*/}
          <span className="indicator-label">Reset</span>
          {/*end::Indicator label*/}
          {/*begin::Indicator progress*/}
          <span className="indicator-progress">
            Please wait...{" "}
            <span className="spinner-border spinner-border-sm align-middle ms-2" />
          </span>
          {/*end::Indicator progress*/}{" "}
        </button>
      </div>
      {/*end::Card footer*/}{" "}
    </div>
    {/*end::Card*/}
  </div>
  {/*end::App layout builder*/}
  {/*begin::App settings toggle*/}
  <button
    id="kt_app_layout_builder_toggle"
    className="btn btn-dark app-layout-builder-toggle lh-1 py-4 "
    title="Keen Builder"
    data-bs-custom-class="tooltip-inverse"
    data-bs-toggle="tooltip"
    data-bs-placement="left"
    data-bs-dismiss="click"
    data-bs-trigger="hover"
  >
    <i className="ki-duotone ki-setting-4 fs-4 me-1" /> Customize
  </button>
  {/*end::App settings toggle*/}
  {/*begin::Drawers*/}
  {/*begin::Activities drawer*/}
  <div
    id="kt_activities"
    className="bg-body"
    data-kt-drawer="true"
    data-kt-drawer-name="activities"
    data-kt-drawer-activate="true"
    data-kt-drawer-overlay="true"
    data-kt-drawer-width="{default:'300px', 'lg': '900px'}"
    data-kt-drawer-direction="end"
    data-kt-drawer-toggle="#kt_activities_toggle"
    data-kt-drawer-close="#kt_activities_close"
  >
    <div className="card shadow-none border-0 rounded-0">
      {/*begin::Header*/}
      <div className="card-header" id="kt_activities_header">
        <h3 className="card-title fw-bold text-gray-900">Activity Logs</h3>
        <div className="card-toolbar">
          <button
            type="button"
            className="btn btn-sm btn-icon btn-active-light-primary me-n5"
            id="kt_activities_close"
          >
            <i className="ki-duotone ki-cross fs-1">
              <span className="path1" />
              <span className="path2" />
            </i>{" "}
          </button>
        </div>
      </div>
      {/*end::Header*/}
      {/*begin::Body*/}
      <div className="card-body position-relative" id="kt_activities_body">
        {/*begin::Content*/}
        <div
          id="kt_activities_scroll"
          className="position-relative scroll-y me-n5 pe-5"
          data-kt-scroll="true"
          data-kt-scroll-height="auto"
          data-kt-scroll-wrappers="#kt_activities_body"
          data-kt-scroll-dependencies="#kt_activities_header, #kt_activities_footer"
          data-kt-scroll-offset="5px"
        >
          {/*begin::Timeline items*/}
          <div className="timeline timeline-border-dashed">
            {/*begin::Timeline item*/}
            <div className="timeline-item">
              {/*begin::Timeline line*/}
              <div className="timeline-line" />
              {/*end::Timeline line*/}
              {/*begin::Timeline icon*/}
              <div className="timeline-icon">
                <i className="ki-duotone ki-message-text-2 fs-2 text-gray-500">
                  <span className="path1" />
                  <span className="path2" />
                  <span className="path3" />
                </i>{" "}
              </div>
              {/*end::Timeline icon*/}
              {/*begin::Timeline content*/}
              <div className="timeline-content mb-10 mt-n1">
                {/*begin::Timeline heading*/}
                <div className="pe-3 mb-5">
                  {/*begin::Title*/}
                  <div className="fs-5 fw-semibold mb-2">
                    There are 2 new tasks for you in “AirPlus Mobile App”
                    project:
                  </div>
                  {/*end::Title*/}
                  {/*begin::Description*/}
                  <div className="d-flex align-items-center mt-1 fs-6">
                    {/*begin::Info*/}
                    <div className="text-muted me-2 fs-7">
                      Added at 4:23 PM by
                    </div>
                    {/*end::Info*/}
                    {/*begin::User*/}
                    <div
                      className="symbol symbol-circle symbol-25px"
                      data-bs-toggle="tooltip"
                      data-bs-boundary="window"
                      data-bs-placement="top"
                      title="Nina Nilson"
                    >
                      <img
                        src="https://preview.keenthemes.com/keen/demo3/assets/media/avatars/300-14.jpg"
                        alt="img"
                      />
                    </div>
                    {/*end::User*/}
                  </div>
                  {/*end::Description*/}
                </div>
                {/*end::Timeline heading*/}
                {/*begin::Timeline details*/}
                <div className="overflow-auto pb-5">
                  {/*begin::Record*/}
                  <div className="d-flex align-items-center border border-dashed border-gray-300 rounded min-w-750px px-7 py-3 mb-5">
                    {/*begin::Title*/}
                    <a
                      href="https://preview.keenthemes.com/keen/demo3/apps/projects/project.html"
                      className="fs-5 text-gray-900 text-hover-primary fw-semibold w-375px min-w-200px"
                    >
                      Meeting with customer
                    </a>
                    {/*end::Title*/}
                    {/*begin::Label*/}
                    <div className="min-w-175px pe-2">
                      <span className="badge badge-light text-muted">
                        Application Design
                      </span>
                    </div>
                    {/*end::Label*/}
                    {/*begin::Users*/}
                    <div className="symbol-group symbol-hover flex-nowrap flex-grow-1 min-w-100px pe-2">
                      {/*begin::User*/}
                      <div className="symbol symbol-circle symbol-25px">
                        <img
                          src="https://preview.keenthemes.com/keen/demo3/assets/media/avatars/300-2.jpg"
                          alt="img"
                        />
                      </div>
                      {/*end::User*/}
                      {/*begin::User*/}
                      <div className="symbol symbol-circle symbol-25px">
                        <img
                          src="https://preview.keenthemes.com/keen/demo3/assets/media/avatars/300-14.jpg"
                          alt="img"
                        />
                      </div>
                      {/*end::User*/}
                      {/*begin::User*/}
                      <div className="symbol symbol-circle symbol-25px">
                        <div className="symbol-label fs-8 fw-semibold bg-primary text-inverse-primary">
                          A
                        </div>
                      </div>
                      {/*end::User*/}
                    </div>
                    {/*end::Users*/}
                    {/*begin::Progress*/}
                    <div className="min-w-125px pe-2">
                      <span className="badge badge-light-primary">
                        In Progress
                      </span>
                    </div>
                    {/*end::Progress*/}
                    {/*begin::Action*/}
                    <a
                      href="https://preview.keenthemes.com/keen/demo3/apps/projects/project.html"
                      className="btn btn-sm btn-light btn-active-light-primary"
                    >
                      View
                    </a>
                    {/*end::Action*/}
                  </div>
                  {/*end::Record*/}
                  {/*begin::Record*/}
                  <div className="d-flex align-items-center border border-dashed border-gray-300 rounded min-w-750px px-7 py-3 mb-0">
                    {/*begin::Title*/}
                    <a
                      href="https://preview.keenthemes.com/keen/demo3/apps/projects/project.html"
                      className="fs-5 text-gray-900 text-hover-primary fw-semibold w-375px min-w-200px"
                    >
                      Project Delivery Preparation
                    </a>
                    {/*end::Title*/}
                    {/*begin::Label*/}
                    <div className="min-w-175px">
                      <span className="badge badge-light text-muted">
                        CRM System Development
                      </span>
                    </div>
                    {/*end::Label*/}
                    {/*begin::Users*/}
                    <div className="symbol-group symbol-hover flex-nowrap flex-grow-1 min-w-100px">
                      {/*begin::User*/}
                      <div className="symbol symbol-circle symbol-25px">
                        <img
                          src="https://preview.keenthemes.com/keen/demo3/assets/media/avatars/300-20.jpg"
                          alt="img"
                        />
                      </div>
                      {/*end::User*/}
                      {/*begin::User*/}
                      <div className="symbol symbol-circle symbol-25px">
                        <div className="symbol-label fs-8 fw-semibold bg-success text-inverse-primary">
                          B
                        </div>
                      </div>
                      {/*end::User*/}
                    </div>
                    {/*end::Users*/}
                    {/*begin::Progress*/}
                    <div className="min-w-125px">
                      <span className="badge badge-light-success">
                        Completed
                      </span>
                    </div>
                    {/*end::Progress*/}
                    {/*begin::Action*/}
                    <a
                      href="https://preview.keenthemes.com/keen/demo3/apps/projects/project.html"
                      className="btn btn-sm btn-light btn-active-light-primary"
                    >
                      View
                    </a>
                    {/*end::Action*/}
                  </div>
                  {/*end::Record*/}
                </div>
                {/*end::Timeline details*/}
              </div>
              {/*end::Timeline content*/}
            </div>
            {/*end::Timeline item*/}
            {/*begin::Timeline item*/}
            <div className="timeline-item">
              {/*begin::Timeline line*/}
              <div className="timeline-line" />
              {/*end::Timeline line*/}
              {/*begin::Timeline icon*/}
              <div className="timeline-icon me-4">
                <i className="ki-duotone ki-flag fs-2 text-gray-500">
                  <span className="path1" />
                  <span className="path2" />
                </i>{" "}
              </div>
              {/*end::Timeline icon*/}
              {/*begin::Timeline content*/}
              <div className="timeline-content mb-10 mt-n2">
                {/*begin::Timeline heading*/}
                <div className="overflow-auto pe-3">
                  {/*begin::Title*/}
                  <div className="fs-5 fw-semibold mb-2">
                    Invitation for crafting engaging designs that speak human
                    workshop
                  </div>
                  {/*end::Title*/}
                  {/*begin::Description*/}
                  <div className="d-flex align-items-center mt-1 fs-6">
                    {/*begin::Info*/}
                    <div className="text-muted me-2 fs-7">
                      Sent at 4:23 PM by
                    </div>
                    {/*end::Info*/}
                    {/*begin::User*/}
                    <div
                      className="symbol symbol-circle symbol-25px"
                      data-bs-toggle="tooltip"
                      data-bs-boundary="window"
                      data-bs-placement="top"
                      title="Alan Nilson"
                    >
                      <img
                        src="https://preview.keenthemes.com/keen/demo3/assets/media/avatars/300-1.jpg"
                        alt="img"
                      />
                    </div>
                    {/*end::User*/}
                  </div>
                  {/*end::Description*/}
                </div>
                {/*end::Timeline heading*/}
              </div>
              {/*end::Timeline content*/}
            </div>
            {/*end::Timeline item*/}
            {/*begin::Timeline item*/}
            <div className="timeline-item">
              {/*begin::Timeline line*/}
              <div className="timeline-line" />
              {/*end::Timeline line*/}
              {/*begin::Timeline icon*/}
              <div className="timeline-icon">
                <i className="ki-duotone ki-disconnect fs-2 text-gray-500">
                  <span className="path1" />
                  <span className="path2" />
                  <span className="path3" />
                  <span className="path4" />
                  <span className="path5" />
                </i>{" "}
              </div>
              {/*end::Timeline icon*/}
              {/*begin::Timeline content*/}
              <div className="timeline-content mb-10 mt-n1">
                {/*begin::Timeline heading*/}
                <div className="mb-5 pe-3">
                  {/*begin::Title*/}
                  <a
                    href="#"
                    className="fs-5 fw-semibold text-gray-800 text-hover-primary mb-2"
                  >
                    3 New Incoming Project Files:
                  </a>
                  {/*end::Title*/}
                  {/*begin::Description*/}
                  <div className="d-flex align-items-center mt-1 fs-6">
                    {/*begin::Info*/}
                    <div className="text-muted me-2 fs-7">
                      Sent at 10:30 PM by
                    </div>
                    {/*end::Info*/}
                    {/*begin::User*/}
                    <div
                      className="symbol symbol-circle symbol-25px"
                      data-bs-toggle="tooltip"
                      data-bs-boundary="window"
                      data-bs-placement="top"
                      title="Jan Hummer"
                    >
                      <img
                        src="https://preview.keenthemes.com/keen/demo3/assets/media/avatars/300-23.jpg"
                        alt="img"
                      />
                    </div>
                    {/*end::User*/}
                  </div>
                  {/*end::Description*/}
                </div>
                {/*end::Timeline heading*/}
                {/*begin::Timeline details*/}
                <div className="overflow-auto pb-5">
                  <div className="d-flex align-items-center border border-dashed border-gray-300 rounded min-w-700px p-5">
                    {/*begin::Item*/}
                    <div className="d-flex flex-aligns-center pe-10 pe-lg-20">
                      {/*begin::Icon*/}
                      <img
                        alt=""
                        className="w-30px me-3"
                        src="https://preview.keenthemes.com/keen/demo3/assets/media/svg/files/pdf.svg"
                      />
                      {/*end::Icon*/}
                      {/*begin::Info*/}
                      <div className="ms-1 fw-semibold">
                        {/*begin::Desc*/}
                        <a
                          href="https://preview.keenthemes.com/keen/demo3/apps/projects/project.html"
                          className="fs-6 text-hover-primary fw-bold"
                        >
                          Finance KPI App Guidelines
                        </a>
                        {/*end::Desc*/}
                        {/*begin::Number*/}
                        <div className="text-gray-500">1.9mb</div>
                        {/*end::Number*/}
                      </div>
                      {/*begin::Info*/}
                    </div>
                    {/*end::Item*/}
                    {/*begin::Item*/}
                    <div className="d-flex flex-aligns-center pe-10 pe-lg-20">
                      {/*begin::Icon*/}
                      <img
                        alt="/keen/demo3/apps/projects/project.html"
                        className="w-30px me-3"
                        src="https://preview.keenthemes.com/keen/demo3/assets/media/svg/files/doc.svg"
                      />
                      {/*end::Icon*/}
                      {/*begin::Info*/}
                      <div className="ms-1 fw-semibold">
                        {/*begin::Desc*/}
                        <a href="#" className="fs-6 text-hover-primary fw-bold">
                          Client UAT Testing Results
                        </a>
                        {/*end::Desc*/}
                        {/*begin::Number*/}
                        <div className="text-gray-500">18kb</div>
                        {/*end::Number*/}
                      </div>
                      {/*end::Info*/}
                    </div>
                    {/*end::Item*/}
                    {/*begin::Item*/}
                    <div className="d-flex flex-aligns-center">
                      {/*begin::Icon*/}
                      <img
                        alt="/keen/demo3/apps/projects/project.html"
                        className="w-30px me-3"
                        src="https://preview.keenthemes.com/keen/demo3/assets/media/svg/files/css.svg"
                      />
                      {/*end::Icon*/}
                      {/*begin::Info*/}
                      <div className="ms-1 fw-semibold">
                        {/*begin::Desc*/}
                        <a href="#" className="fs-6 text-hover-primary fw-bold">
                          Finance Reports
                        </a>
                        {/*end::Desc*/}
                        {/*begin::Number*/}
                        <div className="text-gray-500">20mb</div>
                        {/*end::Number*/}
                      </div>
                      {/*end::Icon*/}
                    </div>
                    {/*end::Item*/}
                  </div>
                </div>
                {/*end::Timeline details*/}
              </div>
              {/*end::Timeline content*/}
            </div>
            {/*end::Timeline item*/}
            {/*begin::Timeline item*/}
            <div className="timeline-item">
              {/*begin::Timeline line*/}
              <div className="timeline-line" />
              {/*end::Timeline line*/}
              {/*begin::Timeline icon*/}
              <div className="timeline-icon">
                <i className="ki-duotone ki-abstract-26 fs-2 text-gray-500">
                  <span className="path1" />
                  <span className="path2" />
                </i>{" "}
              </div>
              {/*end::Timeline icon*/}
              {/*begin::Timeline content*/}
              <div className="timeline-content mb-10 mt-n1">
                {/*begin::Timeline heading*/}
                <div className="pe-3 mb-5">
                  {/*begin::Title*/}
                  <div className="fs-5 fw-semibold mb-2">
                    Task{" "}
                    <a href="#" className="text-primary fw-bold me-1">
                      #45890
                    </a>
                    merged with{" "}
                    <a href="#" className="text-primary fw-bold me-1">
                      #45890
                    </a>{" "}
                    in “Ads Pro Admin Dashboard project:
                  </div>
                  {/*end::Title*/}
                  {/*begin::Description*/}
                  <div className="d-flex align-items-center mt-1 fs-6">
                    {/*begin::Info*/}
                    <div className="text-muted me-2 fs-7">
                      Initiated at 4:23 PM by
                    </div>
                    {/*end::Info*/}
                    {/*begin::User*/}
                    <div
                      className="symbol symbol-circle symbol-25px"
                      data-bs-toggle="tooltip"
                      data-bs-boundary="window"
                      data-bs-placement="top"
                      title="Nina Nilson"
                    >
                      <img
                        src="https://preview.keenthemes.com/keen/demo3/assets/media/avatars/300-14.jpg"
                        alt="img"
                      />
                    </div>
                    {/*end::User*/}
                  </div>
                  {/*end::Description*/}
                </div>
                {/*end::Timeline heading*/}
              </div>
              {/*end::Timeline content*/}
            </div>
            {/*end::Timeline item*/}
            {/*begin::Timeline item*/}
            <div className="timeline-item">
              {/*begin::Timeline line*/}
              <div className="timeline-line" />
              {/*end::Timeline line*/}
              {/*begin::Timeline icon*/}
              <div className="timeline-icon">
                <i className="ki-duotone ki-pencil fs-2 text-gray-500">
                  <span className="path1" />
                  <span className="path2" />
                </i>{" "}
              </div>
              {/*end::Timeline icon*/}
              {/*begin::Timeline content*/}
              <div className="timeline-content mb-10 mt-n1">
                {/*begin::Timeline heading*/}
                <div className="pe-3 mb-5">
                  {/*begin::Title*/}
                  <div className="fs-5 fw-semibold mb-2">
                    3 new application design concepts added:
                  </div>
                  {/*end::Title*/}
                  {/*begin::Description*/}
                  <div className="d-flex align-items-center mt-1 fs-6">
                    {/*begin::Info*/}
                    <div className="text-muted me-2 fs-7">
                      Created at 4:23 PM by
                    </div>
                    {/*end::Info*/}
                    {/*begin::User*/}
                    <div
                      className="symbol symbol-circle symbol-25px"
                      data-bs-toggle="tooltip"
                      data-bs-boundary="window"
                      data-bs-placement="top"
                      title="Marcus Dotson"
                    >
                      <img
                        src="https://preview.keenthemes.com/keen/demo3/assets/media/avatars/300-2.jpg"
                        alt="img"
                      />
                    </div>
                    {/*end::User*/}
                  </div>
                  {/*end::Description*/}
                </div>
                {/*end::Timeline heading*/}
                {/*begin::Timeline details*/}
                <div className="overflow-auto pb-5">
                  <div className="d-flex align-items-center border border-dashed border-gray-300 rounded min-w-700px p-7">
                    {/*begin::Item*/}
                    <div className="overlay me-10">
                      {/*begin::Image*/}
                      <div className="overlay-wrapper">
                        <img
                          alt="img"
                          className="rounded w-150px"
                          src="https://preview.keenthemes.com/keen/demo3/assets/media/stock/600x400/img-29.jpg"
                        />
                      </div>
                      {/*end::Image*/}
                      {/*begin::Link*/}
                      <div className="overlay-layer bg-dark bg-opacity-10 rounded">
                        <a
                          href="#"
                          className="btn btn-sm btn-primary btn-shadow"
                        >
                          Explore
                        </a>
                      </div>
                      {/*end::Link*/}
                    </div>
                    {/*end::Item*/}
                    {/*begin::Item*/}
                    <div className="overlay me-10">
                      {/*begin::Image*/}
                      <div className="overlay-wrapper">
                        <img
                          alt="img"
                          className="rounded w-150px"
                          src="https://preview.keenthemes.com/keen/demo3/assets/media/stock/600x400/img-31.jpg"
                        />
                      </div>
                      {/*end::Image*/}
                      {/*begin::Link*/}
                      <div className="overlay-layer bg-dark bg-opacity-10 rounded">
                        <a
                          href="#"
                          className="btn btn-sm btn-primary btn-shadow"
                        >
                          Explore
                        </a>
                      </div>
                      {/*end::Link*/}
                    </div>
                    {/*end::Item*/}
                    {/*begin::Item*/}
                    <div className="overlay">
                      {/*begin::Image*/}
                      <div className="overlay-wrapper">
                        <img
                          alt="img"
                          className="rounded w-150px"
                          src="https://preview.keenthemes.com/keen/demo3/assets/media/stock/600x400/img-40.jpg"
                        />
                      </div>
                      {/*end::Image*/}
                      {/*begin::Link*/}
                      <div className="overlay-layer bg-dark bg-opacity-10 rounded">
                        <a
                          href="#"
                          className="btn btn-sm btn-primary btn-shadow"
                        >
                          Explore
                        </a>
                      </div>
                      {/*end::Link*/}
                    </div>
                    {/*end::Item*/}
                  </div>
                </div>
                {/*end::Timeline details*/}
              </div>
              {/*end::Timeline content*/}
            </div>
            {/*end::Timeline item*/}
            {/*begin::Timeline item*/}
            <div className="timeline-item">
              {/*begin::Timeline line*/}
              <div className="timeline-line" />
              {/*end::Timeline line*/}
              {/*begin::Timeline icon*/}
              <div className="timeline-icon">
                <i className="ki-duotone ki-sms fs-2 text-gray-500">
                  <span className="path1" />
                  <span className="path2" />
                </i>{" "}
              </div>
              {/*end::Timeline icon*/}
              {/*begin::Timeline content*/}
              <div className="timeline-content mb-10 mt-n1">
                {/*begin::Timeline heading*/}
                <div className="pe-3 mb-5">
                  {/*begin::Title*/}
                  <div className="fs-5 fw-semibold mb-2">
                    New case{" "}
                    <a href="#" className="text-primary fw-bold me-1">
                      #67890
                    </a>
                    is assigned to you in Multi-platform Database Design project
                  </div>
                  {/*end::Title*/}
                  {/*begin::Description*/}
                  <div className="overflow-auto pb-5">
                    {/*begin::Wrapper*/}
                    <div className="d-flex align-items-center mt-1 fs-6">
                      {/*begin::Info*/}
                      <div className="text-muted me-2 fs-7">
                        Added at 4:23 PM by
                      </div>
                      {/*end::Info*/}
                      {/*begin::User*/}
                      <a href="#" className="text-primary fw-bold me-1">
                        Alice Tan
                      </a>
                      {/*end::User*/}
                    </div>
                    {/*end::Wrapper*/}
                  </div>
                  {/*end::Description*/}
                </div>
                {/*end::Timeline heading*/}
              </div>
              {/*end::Timeline content*/}
            </div>
            {/*end::Timeline item*/}
            {/*begin::Timeline item*/}
            <div className="timeline-item">
              {/*begin::Timeline line*/}
              <div className="timeline-line" />
              {/*end::Timeline line*/}
              {/*begin::Timeline icon*/}
              <div className="timeline-icon">
                <i className="ki-duotone ki-pencil fs-2 text-gray-500">
                  <span className="path1" />
                  <span className="path2" />
                </i>{" "}
              </div>
              {/*end::Timeline icon*/}
              {/*begin::Timeline content*/}
              <div className="timeline-content mb-10 mt-n1">
                {/*begin::Timeline heading*/}
                <div className="pe-3 mb-5">
                  {/*begin::Title*/}
                  <div className="fs-5 fw-semibold mb-2">
                    You have received a new order:
                  </div>
                  {/*end::Title*/}
                  {/*begin::Description*/}
                  <div className="d-flex align-items-center mt-1 fs-6">
                    {/*begin::Info*/}
                    <div className="text-muted me-2 fs-7">
                      Placed at 5:05 AM by
                    </div>
                    {/*end::Info*/}
                    {/*begin::User*/}
                    <div
                      className="symbol symbol-circle symbol-25px"
                      data-bs-toggle="tooltip"
                      data-bs-boundary="window"
                      data-bs-placement="top"
                      title="Robert Rich"
                    >
                      <img
                        src="https://preview.keenthemes.com/keen/demo3/assets/media/avatars/300-4.jpg"
                        alt="img"
                      />
                    </div>
                    {/*end::User*/}
                  </div>
                  {/*end::Description*/}
                </div>
                {/*end::Timeline heading*/}
                {/*begin::Timeline details*/}
                <div className="overflow-auto pb-5">
                  {/*begin::Notice*/}
                  <div className="notice d-flex bg-light-primary rounded border-primary border border-dashed min-w-lg-600px flex-shrink-0 p-6">
                    {/*begin::Icon*/}
                    <i className="ki-duotone ki-devices-2 fs-2tx text-primary me-4">
                      <span className="path1" />
                      <span className="path2" />
                      <span className="path3" />
                    </i>{" "}
                    {/*end::Icon*/}
                    {/*begin::Wrapper*/}
                    <div className="d-flex flex-stack flex-grow-1 flex-wrap flex-md-nowrap">
                      {/*begin::Content*/}
                      <div className="mb-3 mb-md-0 fw-semibold">
                        <h4 className="text-gray-900 fw-bold">
                          Database Backup Process Completed!
                        </h4>
                        <div className="fs-6 text-gray-700 pe-7">
                          Login into Admin Dashboard to make sure the data
                          integrity is OK
                        </div>
                      </div>
                      {/*end::Content*/}
                      {/*begin::Action*/}
                      <a
                        href="#"
                        className="btn btn-primary px-6 align-self-center text-nowrap"
                      >
                        Proceed{" "}
                      </a>
                      {/*end::Action*/}
                    </div>
                    {/*end::Wrapper*/}
                  </div>
                  {/*end::Notice*/}
                </div>
                {/*end::Timeline details*/}
              </div>
              {/*end::Timeline content*/}
            </div>
            {/*end::Timeline item*/}
            {/*begin::Timeline item*/}
            <div className="timeline-item">
              {/*begin::Timeline line*/}
              <div className="timeline-line" />
              {/*end::Timeline line*/}
              {/*begin::Timeline icon*/}
              <div className="timeline-icon">
                <i className="ki-duotone ki-basket fs-2 text-gray-500">
                  <span className="path1" />
                  <span className="path2" />
                  <span className="path3" />
                  <span className="path4" />
                </i>{" "}
              </div>
              {/*end::Timeline icon*/}
              {/*begin::Timeline content*/}
              <div className="timeline-content mt-n1">
                {/*begin::Timeline heading*/}
                <div className="pe-3 mb-5">
                  {/*begin::Title*/}
                  <div className="fs-5 fw-semibold mb-2">
                    New order{" "}
                    <a href="#" className="text-primary fw-bold me-1">
                      #67890
                    </a>
                    is placed for Workshow Planning &amp; Budget Estimation
                  </div>
                  {/*end::Title*/}
                  {/*begin::Description*/}
                  <div className="d-flex align-items-center mt-1 fs-6">
                    {/*begin::Info*/}
                    <div className="text-muted me-2 fs-7">
                      Placed at 4:23 PM by
                    </div>
                    {/*end::Info*/}
                    {/*begin::User*/}
                    <a href="#" className="text-primary fw-bold me-1">
                      Jimmy Bold
                    </a>
                    {/*end::User*/}
                  </div>
                  {/*end::Description*/}
                </div>
                {/*end::Timeline heading*/}
              </div>
              {/*end::Timeline content*/}
            </div>
            {/*end::Timeline item*/}{" "}
          </div>
          {/*end::Timeline items*/}
        </div>
        {/*end::Content*/}
      </div>
      {/*end::Body*/}
      {/*begin::Footer*/}
      <div className="card-footer py-5 text-center" id="kt_activities_footer">
        <a
          href="https://preview.keenthemes.com/keen/demo3/pages/user-profile/activity.html"
          className="btn btn-bg-body text-primary"
        >
          View All Activities{" "}
          <i className="ki-duotone ki-arrow-right fs-3 text-primary">
            <span className="path1" />
            <span className="path2" />
          </i>{" "}
        </a>
      </div>
      {/*end::Footer*/}
    </div>
  </div>
  {/*end::Activities drawer*/}
  {/*begin::Chat drawer*/}
  <div
    id="kt_drawer_chat"
    className="bg-body"
    data-kt-drawer="true"
    data-kt-drawer-name="chat"
    data-kt-drawer-activate="true"
    data-kt-drawer-overlay="true"
    data-kt-drawer-width="{default:'300px', 'md': '500px'}"
    data-kt-drawer-direction="end"
    data-kt-drawer-toggle="#kt_drawer_chat_toggle"
    data-kt-drawer-close="#kt_drawer_chat_close"
  >
    {/*begin::Messenger*/}
    <div
      className="card w-100 border-0 rounded-0"
      id="kt_drawer_chat_messenger"
    >
      {/*begin::Card header*/}
      <div className="card-header pe-5" id="kt_drawer_chat_messenger_header">
        {/*begin::Title*/}
        <div className="card-title">
          {/*begin::User*/}
          <div className="d-flex justify-content-center flex-column me-3">
            <a
              href="#"
              className="fs-4 fw-bold text-gray-900 text-hover-primary me-1 mb-2 lh-1"
            >
              Brian Cox
            </a>
            {/*begin::Info*/}
            <div className="mb-0 lh-1">
              <span className="badge badge-success badge-circle w-10px h-10px me-1" />
              <span className="fs-7 fw-semibold text-muted">Active</span>
            </div>
            {/*end::Info*/}
          </div>
          {/*end::User*/}
        </div>
        {/*end::Title*/}
        {/*begin::Card toolbar*/}
        <div className="card-toolbar">
          {/*begin::Menu*/}
          <div className="me-0">
            <button
              className="btn btn-sm btn-icon btn-active-color-primary"
              data-kt-menu-trigger="click"
              data-kt-menu-placement="bottom-end"
            >
              <i className="ki-duotone ki-dots-square fs-2">
                <span className="path1" />
                <span className="path2" />
                <span className="path3" />
                <span className="path4" />
              </i>{" "}
            </button>
            {/*begin::Menu 3*/}
            <div
              className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-semibold w-200px py-3"
              data-kt-menu="true"
            >
              {/*begin::Heading*/}
              <div className="menu-item px-3">
                <div className="menu-content text-muted pb-2 px-3 fs-7 text-uppercase">
                  Contacts
                </div>
              </div>
              {/*end::Heading*/}
              {/*begin::Menu item*/}
              <div className="menu-item px-3">
                <a
                  href="#"
                  className="menu-link px-3"
                  data-bs-toggle="modal"
                  data-bs-target="#kt_modal_users_search"
                >
                  Add Contact
                </a>
              </div>
              {/*end::Menu item*/}
              {/*begin::Menu item*/}
              <div className="menu-item px-3">
                <a
                  href="#"
                  className="menu-link flex-stack px-3"
                  data-bs-toggle="modal"
                  data-bs-target="#kt_modal_invite_friends"
                >
                  Invite Contacts
                  <span
                    className="ms-2"
                    data-bs-toggle="tooltip"
                    title="Specify a contact email to send an invitation"
                  >
                    <i className="ki-duotone ki-information fs-7">
                      <span className="path1" />
                      <span className="path2" />
                      <span className="path3" />
                    </i>{" "}
                  </span>
                </a>
              </div>
              {/*end::Menu item*/}
              {/*begin::Menu item*/}
              <div
                className="menu-item px-3"
                data-kt-menu-trigger="hover"
                data-kt-menu-placement="right-start"
              >
                <a href="#" className="menu-link px-3">
                  <span className="menu-title">Groups</span>
                  <span className="menu-arrow" />
                </a>
                {/*begin::Menu sub*/}
                <div className="menu-sub menu-sub-dropdown w-175px py-4">
                  {/*begin::Menu item*/}
                  <div className="menu-item px-3">
                    <a
                      href="#"
                      className="menu-link px-3"
                      data-bs-toggle="tooltip"
                      title="Coming soon"
                    >
                      Create Group
                    </a>
                  </div>
                  {/*end::Menu item*/}
                  {/*begin::Menu item*/}
                  <div className="menu-item px-3">
                    <a
                      href="#"
                      className="menu-link px-3"
                      data-bs-toggle="tooltip"
                      title="Coming soon"
                    >
                      Invite Members
                    </a>
                  </div>
                  {/*end::Menu item*/}
                  {/*begin::Menu item*/}
                  <div className="menu-item px-3">
                    <a
                      href="#"
                      className="menu-link px-3"
                      data-bs-toggle="tooltip"
                      title="Coming soon"
                    >
                      Settings
                    </a>
                  </div>
                  {/*end::Menu item*/}
                </div>
                {/*end::Menu sub*/}
              </div>
              {/*end::Menu item*/}
              {/*begin::Menu item*/}
              <div className="menu-item px-3 my-1">
                <a
                  href="#"
                  className="menu-link px-3"
                  data-bs-toggle="tooltip"
                  title="Coming soon"
                >
                  Settings
                </a>
              </div>
              {/*end::Menu item*/}
            </div>
            {/*end::Menu 3*/}
          </div>
          {/*end::Menu*/}
          {/*begin::Close*/}
          <div
            className="btn btn-sm btn-icon btn-active-color-primary"
            id="kt_drawer_chat_close"
          >
            <i className="ki-duotone ki-cross-square fs-2">
              <span className="path1" />
              <span className="path2" />
            </i>{" "}
          </div>
          {/*end::Close*/}
        </div>
        {/*end::Card toolbar*/}
      </div>
      {/*end::Card header*/}
      {/*begin::Card body*/}
      <div className="card-body" id="kt_drawer_chat_messenger_body">
        {/*begin::Messages*/}
        <div
          className="scroll-y me-n5 pe-5"
          data-kt-element="messages"
          data-kt-scroll="true"
          data-kt-scroll-activate="true"
          data-kt-scroll-height="auto"
          data-kt-scroll-dependencies="#kt_drawer_chat_messenger_header, #kt_drawer_chat_messenger_footer"
          data-kt-scroll-wrappers="#kt_drawer_chat_messenger_body"
          data-kt-scroll-offset="0px"
        >
          {/*begin::Message(in)*/}
          <div className="d-flex justify-content-start mb-10 ">
            {/*begin::Wrapper*/}
            <div className="d-flex flex-column align-items-start">
              {/*begin::User*/}
              <div className="d-flex align-items-center mb-2">
                {/*begin::Avatar*/}
                <div className="symbol  symbol-35px symbol-circle ">
                  <img
                    alt="Pic"
                    src="https://preview.keenthemes.com/keen/demo3/assets/media/avatars/300-25.jpg"
                  />
                </div>
                {/*end::Avatar*/}
                {/*begin::Details*/}
                <div className="ms-3">
                  <a
                    href="#"
                    className="fs-5 fw-bold text-gray-900 text-hover-primary me-1"
                  >
                    Brian Cox
                  </a>
                  <span className="text-muted fs-7 mb-1">2 mins</span>
                </div>
                {/*end::Details*/}
              </div>
              {/*end::User*/}
              {/*begin::Text*/}
              <div
                className="p-5 rounded bg-light-info text-gray-900 fw-semibold mw-lg-400px text-start"
                data-kt-element="message-text"
              >
                How likely are you to recommend our company to your friends and
                family ?{" "}
              </div>
              {/*end::Text*/}
            </div>
            {/*end::Wrapper*/}
          </div>
          {/*end::Message(in)*/}
          {/*begin::Message(out)*/}
          <div className="d-flex justify-content-end mb-10 ">
            {/*begin::Wrapper*/}
            <div className="d-flex flex-column align-items-end">
              {/*begin::User*/}
              <div className="d-flex align-items-center mb-2">
                {/*begin::Details*/}
                <div className="me-3">
                  <span className="text-muted fs-7 mb-1">5 mins</span>
                  <a
                    href="#"
                    className="fs-5 fw-bold text-gray-900 text-hover-primary ms-1"
                  >
                    You
                  </a>
                </div>
                {/*end::Details*/}
                {/*begin::Avatar*/}
                <div className="symbol  symbol-35px symbol-circle ">
                  <img
                    alt="Pic"
                    src="https://preview.keenthemes.com/keen/demo3/assets/media/avatars/300-1.jpg"
                  />
                </div>
                {/*end::Avatar*/}
              </div>
              {/*end::User*/}
              {/*begin::Text*/}
              <div
                className="p-5 rounded bg-light-primary text-gray-900 fw-semibold mw-lg-400px text-end"
                data-kt-element="message-text"
              >
                Hey there, we’re just writing to let you know that you’ve been
                subscribed to a repository on GitHub.{" "}
              </div>
              {/*end::Text*/}
            </div>
            {/*end::Wrapper*/}
          </div>
          {/*end::Message(out)*/}
          {/*begin::Message(in)*/}
          <div className="d-flex justify-content-start mb-10 ">
            {/*begin::Wrapper*/}
            <div className="d-flex flex-column align-items-start">
              {/*begin::User*/}
              <div className="d-flex align-items-center mb-2">
                {/*begin::Avatar*/}
                <div className="symbol  symbol-35px symbol-circle ">
                  <img
                    alt="Pic"
                    src="https://preview.keenthemes.com/keen/demo3/assets/media/avatars/300-25.jpg"
                  />
                </div>
                {/*end::Avatar*/}
                {/*begin::Details*/}
                <div className="ms-3">
                  <a
                    href="#"
                    className="fs-5 fw-bold text-gray-900 text-hover-primary me-1"
                  >
                    Brian Cox
                  </a>
                  <span className="text-muted fs-7 mb-1">1 Hour</span>
                </div>
                {/*end::Details*/}
              </div>
              {/*end::User*/}
              {/*begin::Text*/}
              <div
                className="p-5 rounded bg-light-info text-gray-900 fw-semibold mw-lg-400px text-start"
                data-kt-element="message-text"
              >
                Ok, Understood!{" "}
              </div>
              {/*end::Text*/}
            </div>
            {/*end::Wrapper*/}
          </div>
          {/*end::Message(in)*/}
          {/*begin::Message(out)*/}
          <div className="d-flex justify-content-end mb-10 ">
            {/*begin::Wrapper*/}
            <div className="d-flex flex-column align-items-end">
              {/*begin::User*/}
              <div className="d-flex align-items-center mb-2">
                {/*begin::Details*/}
                <div className="me-3">
                  <span className="text-muted fs-7 mb-1">2 Hours</span>
                  <a
                    href="#"
                    className="fs-5 fw-bold text-gray-900 text-hover-primary ms-1"
                  >
                    You
                  </a>
                </div>
                {/*end::Details*/}
                {/*begin::Avatar*/}
                <div className="symbol  symbol-35px symbol-circle ">
                  <img
                    alt="Pic"
                    src="https://preview.keenthemes.com/keen/demo3/assets/media/avatars/300-1.jpg"
                  />
                </div>
                {/*end::Avatar*/}
              </div>
              {/*end::User*/}
              {/*begin::Text*/}
              <div
                className="p-5 rounded bg-light-primary text-gray-900 fw-semibold mw-lg-400px text-end"
                data-kt-element="message-text"
              >
                You’ll receive notifications for all issues, pull requests!{" "}
              </div>
              {/*end::Text*/}
            </div>
            {/*end::Wrapper*/}
          </div>
          {/*end::Message(out)*/}
          {/*begin::Message(in)*/}
          <div className="d-flex justify-content-start mb-10 ">
            {/*begin::Wrapper*/}
            <div className="d-flex flex-column align-items-start">
              {/*begin::User*/}
              <div className="d-flex align-items-center mb-2">
                {/*begin::Avatar*/}
                <div className="symbol  symbol-35px symbol-circle ">
                  <img
                    alt="Pic"
                    src="https://preview.keenthemes.com/keen/demo3/assets/media/avatars/300-25.jpg"
                  />
                </div>
                {/*end::Avatar*/}
                {/*begin::Details*/}
                <div className="ms-3">
                  <a
                    href="#"
                    className="fs-5 fw-bold text-gray-900 text-hover-primary me-1"
                  >
                    Brian Cox
                  </a>
                  <span className="text-muted fs-7 mb-1">3 Hours</span>
                </div>
                {/*end::Details*/}
              </div>
              {/*end::User*/}
              {/*begin::Text*/}
              <div
                className="p-5 rounded bg-light-info text-gray-900 fw-semibold mw-lg-400px text-start"
                data-kt-element="message-text"
              >
                You can unwatch this repository immediately by clicking here:{" "}
                <a href="https://keenthemes.com/">Keenthemes.com</a>{" "}
              </div>
              {/*end::Text*/}
            </div>
            {/*end::Wrapper*/}
          </div>
          {/*end::Message(in)*/}
          {/*begin::Message(out)*/}
          <div className="d-flex justify-content-end mb-10 ">
            {/*begin::Wrapper*/}
            <div className="d-flex flex-column align-items-end">
              {/*begin::User*/}
              <div className="d-flex align-items-center mb-2">
                {/*begin::Details*/}
                <div className="me-3">
                  <span className="text-muted fs-7 mb-1">4 Hours</span>
                  <a
                    href="#"
                    className="fs-5 fw-bold text-gray-900 text-hover-primary ms-1"
                  >
                    You
                  </a>
                </div>
                {/*end::Details*/}
                {/*begin::Avatar*/}
                <div className="symbol  symbol-35px symbol-circle ">
                  <img
                    alt="Pic"
                    src="https://preview.keenthemes.com/keen/demo3/assets/media/avatars/300-1.jpg"
                  />
                </div>
                {/*end::Avatar*/}
              </div>
              {/*end::User*/}
              {/*begin::Text*/}
              <div
                className="p-5 rounded bg-light-primary text-gray-900 fw-semibold mw-lg-400px text-end"
                data-kt-element="message-text"
              >
                Most purchased Business courses during this sale!{" "}
              </div>
              {/*end::Text*/}
            </div>
            {/*end::Wrapper*/}
          </div>
          {/*end::Message(out)*/}
          {/*begin::Message(in)*/}
          <div className="d-flex justify-content-start mb-10 ">
            {/*begin::Wrapper*/}
            <div className="d-flex flex-column align-items-start">
              {/*begin::User*/}
              <div className="d-flex align-items-center mb-2">
                {/*begin::Avatar*/}
                <div className="symbol  symbol-35px symbol-circle ">
                  <img
                    alt="Pic"
                    src="https://preview.keenthemes.com/keen/demo3/assets/media/avatars/300-25.jpg"
                  />
                </div>
                {/*end::Avatar*/}
                {/*begin::Details*/}
                <div className="ms-3">
                  <a
                    href="#"
                    className="fs-5 fw-bold text-gray-900 text-hover-primary me-1"
                  >
                    Brian Cox
                  </a>
                  <span className="text-muted fs-7 mb-1">5 Hours</span>
                </div>
                {/*end::Details*/}
              </div>
              {/*end::User*/}
              {/*begin::Text*/}
              <div
                className="p-5 rounded bg-light-info text-gray-900 fw-semibold mw-lg-400px text-start"
                data-kt-element="message-text"
              >
                Company BBQ to celebrate the last quater achievements and goals.
                Food and drinks provided{" "}
              </div>
              {/*end::Text*/}
            </div>
            {/*end::Wrapper*/}
          </div>
          {/*end::Message(in)*/}
          {/*begin::Message(template for out)*/}
          <div
            className="d-flex justify-content-end mb-10 d-none"
            data-kt-element="template-out"
          >
            {/*begin::Wrapper*/}
            <div className="d-flex flex-column align-items-end">
              {/*begin::User*/}
              <div className="d-flex align-items-center mb-2">
                {/*begin::Details*/}
                <div className="me-3">
                  <span className="text-muted fs-7 mb-1">Just now</span>
                  <a
                    href="#"
                    className="fs-5 fw-bold text-gray-900 text-hover-primary ms-1"
                  >
                    You
                  </a>
                </div>
                {/*end::Details*/}
                {/*begin::Avatar*/}
                <div className="symbol  symbol-35px symbol-circle ">
                  <img
                    alt="Pic"
                    src="https://preview.keenthemes.com/keen/demo3/assets/media/avatars/300-1.jpg"
                  />
                </div>
                {/*end::Avatar*/}
              </div>
              {/*end::User*/}
              {/*begin::Text*/}
              <div
                className="p-5 rounded bg-light-primary text-gray-900 fw-semibold mw-lg-400px text-end"
                data-kt-element="message-text"
              ></div>
              {/*end::Text*/}
            </div>
            {/*end::Wrapper*/}
          </div>
          {/*end::Message(template for out)*/}
          {/*begin::Message(template for in)*/}
          <div
            className="d-flex justify-content-start mb-10 d-none"
            data-kt-element="template-in"
          >
            {/*begin::Wrapper*/}
            <div className="d-flex flex-column align-items-start">
              {/*begin::User*/}
              <div className="d-flex align-items-center mb-2">
                {/*begin::Avatar*/}
                <div className="symbol  symbol-35px symbol-circle ">
                  <img
                    alt="Pic"
                    src="https://preview.keenthemes.com/keen/demo3/assets/media/avatars/300-25.jpg"
                  />
                </div>
                {/*end::Avatar*/}
                {/*begin::Details*/}
                <div className="ms-3">
                  <a
                    href="#"
                    className="fs-5 fw-bold text-gray-900 text-hover-primary me-1"
                  >
                    Brian Cox
                  </a>
                  <span className="text-muted fs-7 mb-1">Just now</span>
                </div>
                {/*end::Details*/}
              </div>
              {/*end::User*/}
              {/*begin::Text*/}
              <div
                className="p-5 rounded bg-light-info text-gray-900 fw-semibold mw-lg-400px text-start"
                data-kt-element="message-text"
              >
                Right before vacation season we have the next Big Deal for you.{" "}
              </div>
              {/*end::Text*/}
            </div>
            {/*end::Wrapper*/}
          </div>
          {/*end::Message(template for in)*/}
        </div>
        {/*end::Messages*/}
      </div>
      {/*end::Card body*/}
      {/*begin::Card footer*/}
      <div className="card-footer pt-4" id="kt_drawer_chat_messenger_footer">
        {/*begin::Input*/}
        <textarea
          className="form-control form-control-flush mb-3"
          rows={1}
          data-kt-element="input"
          placeholder="Type a message"
          defaultValue={"                \n            "}
        />
        {/*end::Input*/}
        {/*begin:Toolbar*/}
        <div className="d-flex flex-stack">
          {/*begin::Actions*/}
          <div className="d-flex align-items-center me-2">
            <button
              className="btn btn-sm btn-icon btn-active-light-primary me-1"
              type="button"
              data-bs-toggle="tooltip"
              title="Coming soon"
            >
              <i className="ki-duotone ki-paper-clip fs-3" />{" "}
            </button>
            <button
              className="btn btn-sm btn-icon btn-active-light-primary me-1"
              type="button"
              data-bs-toggle="tooltip"
              title="Coming soon"
            >
              <i className="ki-duotone ki-cloud-add fs-3">
                <span className="path1" />
                <span className="path2" />
              </i>{" "}
            </button>
          </div>
          {/*end::Actions*/}
          {/*begin::Send*/}
          <button
            className="btn btn-primary"
            type="button"
            data-kt-element="send"
          >
            Send
          </button>
          {/*end::Send*/}
        </div>
        {/*end::Toolbar*/}
      </div>
      {/*end::Card footer*/}
    </div>
    {/*end::Messenger*/}
  </div>
  {/*end::Chat drawer*/}
  {/*begin::Chat drawer*/}
  <div
    id="kt_shopping_cart"
    className="bg-body"
    data-kt-drawer="true"
    data-kt-drawer-name="cart"
    data-kt-drawer-activate="true"
    data-kt-drawer-overlay="true"
    data-kt-drawer-width="{default:'300px', 'md': '500px'}"
    data-kt-drawer-direction="end"
    data-kt-drawer-toggle="#kt_drawer_shopping_cart_toggle"
    data-kt-drawer-close="#kt_drawer_shopping_cart_close"
  >
    {/*begin::Messenger*/}
    <div className="card card-flush w-100 rounded-0">
      {/*begin::Card header*/}
      <div className="card-header">
        {/*begin::Title*/}
        <h3 className="card-title text-gray-900 fw-bold">Shopping Cart</h3>
        {/*end::Title*/}
        {/*begin::Card toolbar*/}
        <div className="card-toolbar">
          {/*begin::Close*/}
          <div
            className="btn btn-sm btn-icon btn-active-light-primary"
            id="kt_drawer_shopping_cart_close"
          >
            <i className="ki-duotone ki-cross fs-2">
              <span className="path1" />
              <span className="path2" />
            </i>{" "}
          </div>
          {/*end::Close*/}
        </div>
        {/*end::Card toolbar*/}
      </div>
      {/*end::Card header*/}
      {/*begin::Card body*/}
      <div className="card-body hover-scroll-overlay-y h-400px pt-5">
        {/*begin::Item*/}
        <div className="d-flex flex-stack">
          {/*begin::Wrapper*/}
          <div className="d-flex flex-column me-3">
            {/*begin::Section*/}
            <div className="mb-3">
              <a
                href="https://preview.keenthemes.com/keen/demo3/apps/ecommerce/sales/details.html"
                className="text-gray-800 text-hover-primary fs-4 fw-bold"
              >
                Iblender
              </a>
              <span className="text-gray-500 fw-semibold d-block">
                The best kitchen gadget in 2022
              </span>
            </div>
            {/*end::Section*/}
            {/*begin::Section*/}
            <div className="d-flex align-items-center">
              <span className="fw-bold text-gray-800 fs-5">$ 350</span>
              <span className="text-muted mx-2">for</span>
              <span className="fw-bold text-gray-800 fs-5 me-3">5</span>
              <a
                href="#"
                className="btn btn-sm btn-light-success btn-icon-success btn-icon w-25px h-25px me-2"
              >
                <i className="ki-duotone ki-minus fs-4" />{" "}
              </a>
              <a
                href="#"
                className="btn btn-sm btn-light-success btn-icon w-25px h-25px"
              >
                <i className="ki-duotone ki-plus fs-4" />{" "}
              </a>
            </div>
            {/*end::Wrapper*/}
          </div>
          {/*end::Wrapper*/}
          {/*begin::Pic*/}
          <div className="symbol symbol-70px symbol-2by3 flex-shrink-0">
            <img
              src="https://preview.keenthemes.com/keen/demo3/assets/media/stock/600x400/img-1.jpg"
              alt=""
            />
          </div>
          {/*end::Pic*/}
        </div>
        {/*end::Item*/}
        {/*begin::Separator*/}
        <div className="separator separator-dashed my-6" />
        {/*end::Separator*/}
        {/*begin::Item*/}
        <div className="d-flex flex-stack">
          {/*begin::Wrapper*/}
          <div className="d-flex flex-column me-3">
            {/*begin::Section*/}
            <div className="mb-3">
              <a
                href="https://preview.keenthemes.com/keen/demo3/apps/ecommerce/sales/details.html"
                className="text-gray-800 text-hover-primary fs-4 fw-bold"
              >
                SmartCleaner
              </a>
              <span className="text-gray-500 fw-semibold d-block">
                Smart tool for cooking
              </span>
            </div>
            {/*end::Section*/}
            {/*begin::Section*/}
            <div className="d-flex align-items-center">
              <span className="fw-bold text-gray-800 fs-5">$ 650</span>
              <span className="text-muted mx-2">for</span>
              <span className="fw-bold text-gray-800 fs-5 me-3">4</span>
              <a
                href="#"
                className="btn btn-sm btn-light-success btn-icon-success btn-icon w-25px h-25px me-2"
              >
                <i className="ki-duotone ki-minus fs-4" />{" "}
              </a>
              <a
                href="#"
                className="btn btn-sm btn-light-success btn-icon w-25px h-25px"
              >
                <i className="ki-duotone ki-plus fs-4" />{" "}
              </a>
            </div>
            {/*end::Wrapper*/}
          </div>
          {/*end::Wrapper*/}
          {/*begin::Pic*/}
          <div className="symbol symbol-70px symbol-2by3 flex-shrink-0">
            <img
              src="https://preview.keenthemes.com/keen/demo3/assets/media/stock/600x400/img-3.jpg"
              alt=""
            />
          </div>
          {/*end::Pic*/}
        </div>
        {/*end::Item*/}
        {/*begin::Separator*/}
        <div className="separator separator-dashed my-6" />
        {/*end::Separator*/}
        {/*begin::Item*/}
        <div className="d-flex flex-stack">
          {/*begin::Wrapper*/}
          <div className="d-flex flex-column me-3">
            {/*begin::Section*/}
            <div className="mb-3">
              <a
                href="https://preview.keenthemes.com/keen/demo3/apps/ecommerce/sales/details.html"
                className="text-gray-800 text-hover-primary fs-4 fw-bold"
              >
                CameraMaxr
              </a>
              <span className="text-gray-500 fw-semibold d-block">
                Professional camera for edge
              </span>
            </div>
            {/*end::Section*/}
            {/*begin::Section*/}
            <div className="d-flex align-items-center">
              <span className="fw-bold text-gray-800 fs-5">$ 150</span>
              <span className="text-muted mx-2">for</span>
              <span className="fw-bold text-gray-800 fs-5 me-3">3</span>
              <a
                href="#"
                className="btn btn-sm btn-light-success btn-icon-success btn-icon w-25px h-25px me-2"
              >
                <i className="ki-duotone ki-minus fs-4" />{" "}
              </a>
              <a
                href="#"
                className="btn btn-sm btn-light-success btn-icon w-25px h-25px"
              >
                <i className="ki-duotone ki-plus fs-4" />{" "}
              </a>
            </div>
            {/*end::Wrapper*/}
          </div>
          {/*end::Wrapper*/}
          {/*begin::Pic*/}
          <div className="symbol symbol-70px symbol-2by3 flex-shrink-0">
            <img
              src="https://preview.keenthemes.com/keen/demo3/assets/media/stock/600x400/img-8.jpg"
              alt=""
            />
          </div>
          {/*end::Pic*/}
        </div>
        {/*end::Item*/}
        {/*begin::Separator*/}
        <div className="separator separator-dashed my-6" />
        {/*end::Separator*/}
        {/*begin::Item*/}
        <div className="d-flex flex-stack">
          {/*begin::Wrapper*/}
          <div className="d-flex flex-column me-3">
            {/*begin::Section*/}
            <div className="mb-3">
              <a
                href="https://preview.keenthemes.com/keen/demo3/apps/ecommerce/sales/details.html"
                className="text-gray-800 text-hover-primary fs-4 fw-bold"
              >
                $D Printer
              </a>
              <span className="text-gray-500 fw-semibold d-block">
                Manfactoring unique objekts
              </span>
            </div>
            {/*end::Section*/}
            {/*begin::Section*/}
            <div className="d-flex align-items-center">
              <span className="fw-bold text-gray-800 fs-5">$ 1450</span>
              <span className="text-muted mx-2">for</span>
              <span className="fw-bold text-gray-800 fs-5 me-3">7</span>
              <a
                href="#"
                className="btn btn-sm btn-light-success btn-icon-success btn-icon w-25px h-25px me-2"
              >
                <i className="ki-duotone ki-minus fs-4" />{" "}
              </a>
              <a
                href="#"
                className="btn btn-sm btn-light-success btn-icon w-25px h-25px"
              >
                <i className="ki-duotone ki-plus fs-4" />{" "}
              </a>
            </div>
            {/*end::Wrapper*/}
          </div>
          {/*end::Wrapper*/}
          {/*begin::Pic*/}
          <div className="symbol symbol-70px symbol-2by3 flex-shrink-0">
            <img
              src="https://preview.keenthemes.com/keen/demo3/assets/media/stock/600x400/img-26.jpg"
              alt=""
            />
          </div>
          {/*end::Pic*/}
        </div>
        {/*end::Item*/}
        {/*begin::Separator*/}
        <div className="separator separator-dashed my-6" />
        {/*end::Separator*/}
        {/*begin::Item*/}
        <div className="d-flex flex-stack">
          {/*begin::Wrapper*/}
          <div className="d-flex flex-column me-3">
            {/*begin::Section*/}
            <div className="mb-3">
              <a
                href="https://preview.keenthemes.com/keen/demo3/apps/ecommerce/sales/details.html"
                className="text-gray-800 text-hover-primary fs-4 fw-bold"
              >
                MotionWire
              </a>
              <span className="text-gray-500 fw-semibold d-block">
                Perfect animation tool
              </span>
            </div>
            {/*end::Section*/}
            {/*begin::Section*/}
            <div className="d-flex align-items-center">
              <span className="fw-bold text-gray-800 fs-5">$ 650</span>
              <span className="text-muted mx-2">for</span>
              <span className="fw-bold text-gray-800 fs-5 me-3">7</span>
              <a
                href="#"
                className="btn btn-sm btn-light-success btn-icon-success btn-icon w-25px h-25px me-2"
              >
                <i className="ki-duotone ki-minus fs-4" />{" "}
              </a>
              <a
                href="#"
                className="btn btn-sm btn-light-success btn-icon w-25px h-25px"
              >
                <i className="ki-duotone ki-plus fs-4" />{" "}
              </a>
            </div>
            {/*end::Wrapper*/}
          </div>
          {/*end::Wrapper*/}
          {/*begin::Pic*/}
          <div className="symbol symbol-70px symbol-2by3 flex-shrink-0">
            <img
              src="https://preview.keenthemes.com/keen/demo3/assets/media/stock/600x400/img-21.jpg"
              alt=""
            />
          </div>
          {/*end::Pic*/}
        </div>
        {/*end::Item*/}
        {/*begin::Separator*/}
        <div className="separator separator-dashed my-6" />
        {/*end::Separator*/}
        {/*begin::Item*/}
        <div className="d-flex flex-stack">
          {/*begin::Wrapper*/}
          <div className="d-flex flex-column me-3">
            {/*begin::Section*/}
            <div className="mb-3">
              <a
                href="https://preview.keenthemes.com/keen/demo3/apps/ecommerce/sales/details.html"
                className="text-gray-800 text-hover-primary fs-4 fw-bold"
              >
                Samsung
              </a>
              <span className="text-gray-500 fw-semibold d-block">
                Profile info,Timeline etc
              </span>
            </div>
            {/*end::Section*/}
            {/*begin::Section*/}
            <div className="d-flex align-items-center">
              <span className="fw-bold text-gray-800 fs-5">$ 720</span>
              <span className="text-muted mx-2">for</span>
              <span className="fw-bold text-gray-800 fs-5 me-3">6</span>
              <a
                href="#"
                className="btn btn-sm btn-light-success btn-icon-success btn-icon w-25px h-25px me-2"
              >
                <i className="ki-duotone ki-minus fs-4" />{" "}
              </a>
              <a
                href="#"
                className="btn btn-sm btn-light-success btn-icon w-25px h-25px"
              >
                <i className="ki-duotone ki-plus fs-4" />{" "}
              </a>
            </div>
            {/*end::Wrapper*/}
          </div>
          {/*end::Wrapper*/}
          {/*begin::Pic*/}
          <div className="symbol symbol-70px symbol-2by3 flex-shrink-0">
            <img
              src="https://preview.keenthemes.com/keen/demo3/assets/media/stock/600x400/img-34.jpg"
              alt=""
            />
          </div>
          {/*end::Pic*/}
        </div>
        {/*end::Item*/}
        {/*begin::Separator*/}
        <div className="separator separator-dashed my-6" />
        {/*end::Separator*/}
        {/*begin::Item*/}
        <div className="d-flex flex-stack">
          {/*begin::Wrapper*/}
          <div className="d-flex flex-column me-3">
            {/*begin::Section*/}
            <div className="mb-3">
              <a
                href="https://preview.keenthemes.com/keen/demo3/apps/ecommerce/sales/details.html"
                className="text-gray-800 text-hover-primary fs-4 fw-bold"
              >
                $D Printer
              </a>
              <span className="text-gray-500 fw-semibold d-block">
                Manfactoring unique objekts
              </span>
            </div>
            {/*end::Section*/}
            {/*begin::Section*/}
            <div className="d-flex align-items-center">
              <span className="fw-bold text-gray-800 fs-5">$ 430</span>
              <span className="text-muted mx-2">for</span>
              <span className="fw-bold text-gray-800 fs-5 me-3">8</span>
              <a
                href="#"
                className="btn btn-sm btn-light-success btn-icon-success btn-icon w-25px h-25px me-2"
              >
                <i className="ki-duotone ki-minus fs-4" />{" "}
              </a>
              <a
                href="#"
                className="btn btn-sm btn-light-success btn-icon w-25px h-25px"
              >
                <i className="ki-duotone ki-plus fs-4" />{" "}
              </a>
            </div>
            {/*end::Wrapper*/}
          </div>
          {/*end::Wrapper*/}
          {/*begin::Pic*/}
          <div className="symbol symbol-70px symbol-2by3 flex-shrink-0">
            <img
              src="https://preview.keenthemes.com/keen/demo3/assets/media/stock/600x400/img-27.jpg"
              alt=""
            />
          </div>
          {/*end::Pic*/}
        </div>
        {/*end::Item*/}
      </div>
      {/*end::Card body*/}
      {/*begin::Card footer*/}
      <div className="card-footer">
        {/*begin::Item*/}
        <div className="d-flex flex-stack">
          <span className="fw-bold text-gray-600">Total</span>
          <span className="text-gray-800 fw-bolder fs-5">$ 1840.00</span>
        </div>
        {/*end::Item*/}
        {/*begin::Item*/}
        <div className="d-flex flex-stack">
          <span className="fw-bold text-gray-600">Sub total</span>
          <span className="text-primary fw-bolder fs-5">$ 246.35</span>
        </div>
        {/*end::Item*/}
        {/*end::Action*/}
        <div className="d-flex justify-content-end mt-9">
          <a href="#" className="btn btn-primary d-flex justify-content-end">
            Pleace Order
          </a>
        </div>
        {/*end::Action*/}
      </div>
      {/*end::Card footer*/}
    </div>
    {/*end::Messenger*/}
  </div>
  {/*end::Chat drawer*/}
  {/*end::Drawers*/} {/*begin::Engage drawers*/}
  {/*begin::Demos drawer*/}
  <div
    id="kt_engage_demos"
    className="bg-body"
    data-kt-drawer="true"
    data-kt-drawer-name="explore"
    data-kt-drawer-activate="true"
    data-kt-drawer-overlay="true"
    data-kt-drawer-width="{default:'350px', 'lg': '475px'}"
    data-kt-drawer-direction="end"
    data-kt-drawer-toggle="#kt_engage_demos_toggle"
    data-kt-drawer-close="#kt_engage_demos_close"
  >
    {/*begin::Card*/}
    <div className="card shadow-none rounded-0 w-100">
      {/*begin::Header*/}
      <div className="card-header" id="kt_engage_demos_header">
        <h3 className="card-title fw-bold text-gray-700">Demos</h3>
        <div className="card-toolbar">
          <button
            type="button"
            className="btn btn-sm btn-icon btn-active-color-primary h-40px w-40px me-n6"
            id="kt_engage_demos_close"
          >
            <i className="ki-duotone ki-cross fs-2">
              <span className="path1" />
              <span className="path2" />
            </i>{" "}
          </button>
        </div>
      </div>
      {/*end::Header*/}
      {/*begin::Body*/}
      <div className="card-body" id="kt_engage_demos_body">
        {/*begin::Content*/}
        <div
          id="kt_explore_scroll"
          className="scroll-y me-n5 pe-5"
          data-kt-scroll="true"
          data-kt-scroll-height="auto"
          data-kt-scroll-wrappers="#kt_engage_demos_body"
          data-kt-scroll-dependencies="#kt_engage_demos_header"
          data-kt-scroll-offset="5px"
        >
          {/*begin::Wrapper*/}
          <div className="mb-0">
            {/*begin::Heading*/}
            <div className="mb-7">
              <div className="d-flex flex-stack">
                <h3 className="mb-0">Keen Licenses</h3>
                <a
                  href="https://themes.getbootstrap.com/licenses/"
                  className="fw-semibold"
                  target="_blank"
                >
                  License FAQs
                </a>
              </div>
            </div>
            {/*end::Heading*/}
            {/*begin::License*/}
            <div className="rounded border border-dashed border-gray-300 py-4 px-6 mb-5">
              <div className="d-flex flex-stack">
                <div className="d-flex flex-column">
                  <div className="d-flex align-items-center mb-1">
                    <div className="fs-6 fw-semibold text-gray-800 fw-semibold mb-0 me-1">
                      Standard License
                    </div>
                    <i
                      className="text-gray-500 fas fa-exclamation-circle ms-1 fs-7"
                      data-bs-toggle="popover"
                      data-bs-custom-class="popover-inverse"
                      data-bs-trigger="hover"
                      data-bs-placement="top"
                      data-bs-content="Use, by you or one client in a single site which end users are not charged for"
                    ></i>
                  </div>
                  <div className="fs-7 text-muted">
                    For single site used by you or one client
                  </div>
                </div>
                <div className="text-nowrap">
                  <span className="text-muted fs-7 fw-semibold me-n1">$</span>
                  <span className="text-gray-900 fs-1 fw-bold">49</span>
                </div>
              </div>
            </div>
            {/*end::License*/}
            {/*begin::License*/}
            <div className="rounded border border-dashed border-gray-300 py-4 px-6 mb-5">
              <div className="d-flex flex-stack">
                <div className="d-flex flex-column">
                  <div className="d-flex align-items-center mb-1">
                    <div className="fs-6 fw-semibold text-gray-800 fw-semibold mb-0 me-1">
                      Multisite License
                    </div>
                    <i
                      className="text-gray-500 fas fa-exclamation-circle ms-1 fs-7"
                      data-bs-toggle="popover"
                      data-bs-custom-class="popover-inverse"
                      data-bs-trigger="hover"
                      data-bs-placement="top"
                      data-bs-content="Use, by you or one client, in a single site which end users can be charged for."
                    ></i>
                  </div>
                  <div className="fs-7 text-muted">
                    For unlimited sites used by you or one client
                  </div>
                </div>
                <div className="text-nowrap">
                  <span className="text-muted fs-7 fw-semibold me-n1">$</span>
                  <span className="text-gray-900 fs-1 fw-bold">129</span>
                </div>
              </div>
            </div>
            {/*end::License*/}
            {/*begin::License*/}
            <div className="rounded border border-dashed border-gray-300 py-4 px-6 mb-5">
              <div className="d-flex flex-stack">
                <div className="d-flex flex-column">
                  <div className="d-flex align-items-center mb-1">
                    <div className="fs-6 fw-semibold text-gray-800 fw-semibold mb-0 me-1">
                      Extended License
                    </div>
                    <i
                      className="text-gray-500 fas fa-exclamation-circle ms-1 fs-7"
                      data-bs-toggle="popover"
                      data-bs-custom-class="popover-inverse"
                      data-bs-trigger="hover"
                      data-bs-placement="top"
                      data-bs-content="Use, by you or one client, in a single site which end users can be charged for."
                    ></i>
                  </div>
                  <div className="fs-7 text-muted">
                    For single SaaS app with paying users
                  </div>
                </div>
                <div className="text-nowrap">
                  <span className="text-muted fs-7 fw-semibold me-n1">$</span>
                  <span className="text-gray-900 fs-1 fw-bold">429</span>
                </div>
              </div>
            </div>
            {/*end::License*/}
            {/*begin::License*/}
            <div className="rounded border border-dashed border-gray-300 py-4 px-6 mb-5">
              <div className="d-flex flex-stack">
                <div className="d-flex flex-column">
                  <div className="d-flex align-items-center mb-1">
                    <div className="fs-6 fw-semibold text-gray-800 fw-semibold mb-0 me-1">
                      Custom License
                    </div>
                  </div>
                  <div className="fs-7 text-muted">
                    Reach us for custom license offers.
                  </div>
                </div>
                <div className="text-nowrap">
                  <a
                    href="https://keenthemes.com/contact"
                    className="btn btn-sm btn-success"
                    target="_blank"
                  >
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
            {/*end::License*/}
            {/*begin::Purchase*/}
            <a
              href="https://themes.getbootstrap.com/product/keen-the-ultimate-bootstrap-admin-theme/"
              className="btn btn-primary fw-bold mb-15 w-100"
            >
              Buy Now
            </a>
            {/*end::Purchase*/}
            {/*begin::Demos*/}
            <div className="mb-0">
              <h3 className="fw-bold text-center mb-6">9 Keen Demos</h3>
              {/*begin::Row*/}
              <div className="row g-5">
                {/*begin::Col*/}
                <div className="col-6">
                  {/*begin::Demo*/}
                  <div className="overlay overflow-hidden position-relative border border-4 border-success rounded">
                    <div className="overlay-wrapper">
                      <img
                        src="https://preview.keenthemes.com/keen/demo3/assets/media/preview/demos/demo3/light-ltr.png"
                        alt="demo"
                        className="w-100"
                      />
                    </div>
                    <div className="overlay-layer bg-dark bg-opacity-10">
                      <a
                        href="https://preview.keenthemes.com/keen/demo3/index.html"
                        className="btn btn-sm btn-success shadow"
                      >
                        Demo 1{" "}
                      </a>
                    </div>
                  </div>
                  {/*end::Demo*/}
                </div>
                {/*end::Col*/}
                {/*begin::Col*/}
                <div className="col-6">
                  {/*begin::Demo*/}
                  <div className="overlay overflow-hidden position-relative border border-4 border-gray-200 rounded">
                    <div className="overlay-wrapper">
                      <img
                        src="https://preview.keenthemes.com/keen/demo3/assets/media/preview/demos/demo2/light-ltr.png"
                        alt="demo"
                        className="w-100"
                      />
                    </div>
                    <div className="overlay-layer bg-dark bg-opacity-10">
                      <a
                        href="https://preview.keenthemes.com/keen/demo2/index.html"
                        className="btn btn-sm btn-success shadow"
                      >
                        Demo 2{" "}
                      </a>
                    </div>
                  </div>
                  {/*end::Demo*/}
                </div>
                {/*end::Col*/}
                {/*begin::Col*/}
                <div className="col-6">
                  {/*begin::Demo*/}
                  <div className="overlay overflow-hidden position-relative border border-4 border-gray-200 rounded">
                    <div className="overlay-wrapper">
                      <img
                        src="https://preview.keenthemes.com/keen/demo3/assets/media/preview/demos/demo3/light-ltr.png"
                        alt="demo"
                        className="w-100"
                      />
                    </div>
                    <div className="overlay-layer bg-dark bg-opacity-10">
                      <a
                        href="https://preview.keenthemes.com/keen/demo3/index.html"
                        className="btn btn-sm btn-success shadow"
                      >
                        Demo 3{" "}
                      </a>
                    </div>
                  </div>
                  {/*end::Demo*/}
                </div>
                {/*end::Col*/}
                {/*begin::Col*/}
                <div className="col-6">
                  {/*begin::Demo*/}
                  <div className="overlay overflow-hidden position-relative border border-4 border-gray-200 rounded">
                    <div className="overlay-wrapper">
                      <img
                        src="https://preview.keenthemes.com/keen/demo3/assets/media/preview/demos/demo4/light-ltr.png"
                        alt="demo"
                        className="w-100"
                      />
                    </div>
                    <div className="overlay-layer bg-dark bg-opacity-10">
                      <a
                        href="https://preview.keenthemes.com/keen/demo4/index.html"
                        className="btn btn-sm btn-success shadow"
                      >
                        Demo 4{" "}
                      </a>
                    </div>
                  </div>
                  {/*end::Demo*/}
                </div>
                {/*end::Col*/}
                {/*begin::Col*/}
                <div className="col-6">
                  {/*begin::Demo*/}
                  <div className="overlay overflow-hidden position-relative border border-4 border-gray-200 rounded">
                    <div className="overlay-wrapper">
                      <img
                        src="https://preview.keenthemes.com/keen/demo3/assets/media/preview/demos/demo5/light-ltr.png"
                        alt="demo"
                        className="w-100"
                      />
                    </div>
                    <div className="overlay-layer bg-dark bg-opacity-10">
                      <a
                        href="https://preview.keenthemes.com/keen/demo5/index.html"
                        className="btn btn-sm btn-success shadow"
                      >
                        Demo 5{" "}
                      </a>
                    </div>
                  </div>
                  {/*end::Demo*/}
                </div>
                {/*end::Col*/}
                {/*begin::Col*/}
                <div className="col-6">
                  {/*begin::Demo*/}
                  <div className="overlay overflow-hidden position-relative border border-4 border-gray-200 rounded">
                    <div className="overlay-wrapper">
                      <img
                        src="https://preview.keenthemes.com/keen/demo3/assets/media/preview/demos/demo6/light-ltr.png"
                        alt="demo"
                        className="w-100"
                      />
                    </div>
                    <div className="overlay-layer bg-dark bg-opacity-10">
                      <a
                        href="https://preview.keenthemes.com/keen/demo6/index.html"
                        className="btn btn-sm btn-success shadow"
                      >
                        Demo 6{" "}
                      </a>
                    </div>
                  </div>
                  {/*end::Demo*/}
                </div>
                {/*end::Col*/}
                {/*begin::Col*/}
                <div className="col-6">
                  {/*begin::Demo*/}
                  <div className="overlay overflow-hidden position-relative border border-4 border-gray-200 rounded">
                    <div className="overlay-wrapper">
                      <img
                        src="https://preview.keenthemes.com/keen/demo3/assets/media/preview/demos/demo7/light-ltr.png"
                        alt="demo"
                        className="w-100"
                      />
                    </div>
                    <div className="overlay-layer bg-dark bg-opacity-10">
                      <a
                        href="https://preview.keenthemes.com/keen/demo7/index.html"
                        className="btn btn-sm btn-success shadow"
                      >
                        Demo 7{" "}
                      </a>
                    </div>
                  </div>
                  {/*end::Demo*/}
                </div>
                {/*end::Col*/}
                {/*begin::Col*/}
                <div className="col-6">
                  {/*begin::Demo*/}
                  <div className="overlay overflow-hidden position-relative border border-4 border-gray-200 rounded">
                    <div className="overlay-wrapper">
                      <img
                        src="https://preview.keenthemes.com/keen/demo3/assets/media/preview/demos/demo8/light-ltr.png"
                        alt="demo"
                        className="w-100"
                      />
                    </div>
                    <div className="overlay-layer bg-dark bg-opacity-10">
                      <a
                        href="https://preview.keenthemes.com/keen/demo8/index.html"
                        className="btn btn-sm btn-success shadow"
                      >
                        Demo 8{" "}
                      </a>
                    </div>
                  </div>
                  {/*end::Demo*/}
                </div>
                {/*end::Col*/}
                {/*begin::Col*/}
                <div className="col-6">
                  {/*begin::Demo*/}
                  <div className="overlay overflow-hidden position-relative border border-4 border-gray-200 rounded">
                    <div className="overlay-wrapper">
                      <img
                        src="https://preview.keenthemes.com/keen/demo3/assets/media/preview/demos/demo9/light-ltr.png"
                        alt="demo"
                        className="w-100"
                      />
                    </div>
                    <div className="overlay-layer bg-dark bg-opacity-10">
                      <a
                        href="https://preview.keenthemes.com/keen/demo9/index.html"
                        className="btn btn-sm btn-success shadow"
                      >
                        Demo 9{" "}
                      </a>
                    </div>
                  </div>
                  {/*end::Demo*/}
                </div>
                {/*end::Col*/}
              </div>
              {/*end::Row*/}
            </div>
            {/*end::Demos*/}
          </div>
          {/*end::Wrapper*/}
        </div>
        {/*end::Content*/}
      </div>
      {/*end::Body*/}
    </div>
    {/*end::Card*/}
  </div>
  {/*end::Demos drawer*/}
  {/*begin::Help drawer*/}
  <div
    id="kt_help"
    className="bg-body"
    data-kt-drawer="true"
    data-kt-drawer-name="help"
    data-kt-drawer-activate="true"
    data-kt-drawer-overlay="true"
    data-kt-drawer-width="{default:'350px', 'md': '525px'}"
    data-kt-drawer-direction="end"
    data-kt-drawer-toggle="#kt_help_toggle"
    data-kt-drawer-close="#kt_help_close"
  >
    {/*begin::Card*/}
    <div className="card shadow-none rounded-0 w-100">
      {/*begin::Header*/}
      <div className="card-header" id="kt_help_header">
        <h5 className="card-title fw-semibold text-gray-600">
          Learn &amp; Get Inspired
        </h5>
        <div className="card-toolbar">
          <button
            type="button"
            className="btn btn-sm btn-icon explore-btn-dismiss me-n5"
            id="kt_help_close"
          >
            <i className="ki-duotone ki-cross fs-2">
              <span className="path1" />
              <span className="path2" />
            </i>{" "}
          </button>
        </div>
      </div>
      {/*end::Header*/}
      {/*begin::Body*/}
      <div className="card-body" id="kt_help_body">
        {/*begin::Content*/}
        <div
          id="kt_help_scroll"
          className="hover-scroll-overlay-y"
          data-kt-scroll="true"
          data-kt-scroll-height="auto"
          data-kt-scroll-wrappers="#kt_help_body"
          data-kt-scroll-dependencies="#kt_help_header"
          data-kt-scroll-offset="5px"
        >
          {/*begin::Support*/}
          <div className="rounded border border-dashed border-gray-300 p-6 p-lg-8 mb-10">
            {/*begin::Heading*/}
            <h2 className="fw-bold mb-5">
              Support at{" "}
              <a href="https://devs.keenthemes.com/" className="">
                devs.keenthemes.com
              </a>
            </h2>
            {/*end::Heading*/}
            {/*begin::Description*/}
            <div className="fs-5 fw-semibold mb-5">
              <span className="text-gray-500">
                Join our developers community to find answer to your question
                and help others.
              </span>
              <a
                className="explore-link d-none"
                href="https://keenthemes.com/licensing"
              >
                FAQs
              </a>
            </div>
            {/*end::Description*/}
            {/*begin::Link*/}
            <a
              href="https://devs.keenthemes.com/"
              className="btn btn-lg explore-btn-primary w-100"
            >
              Get Support
            </a>
            {/*end::Link*/}
          </div>
          {/*end::Support*/}
          {/*begin::Link*/}
          <a
            href="https://preview.keenthemes.com/html/keen/docs"
            className="parent-hover d-flex align-items-center mb-7"
          >
            {/*begin::Icon*/}
            <div className="d-flex flex-center w-50px h-50px w-lg-75px h-lg-75px flex-shrink-0 rounded bg-light-warning">
              <i className="ki-duotone ki-abstract-26 text-warning fs-2x fs-lg-3x">
                <span className="path1" />
                <span className="path2" />
              </i>{" "}
            </div>
            {/*end::Icon*/}
            {/*begin::Info*/}
            <div className="d-flex flex-stack flex-grow-1 ms-4 ms-lg-6">
              {/*begin::Wrapper*/}
              <div className="d-flex flex-column me-2 me-lg-5">
                {/*begin::Title*/}
                <div className="text-gray-900 parent-hover-primary fw-bold fs-6 fs-lg-4 mb-1">
                  Documentation{" "}
                </div>
                {/*end::Title*/}
                {/*begin::Description*/}
                <div className="text-muted fw-semibold fs-7 fs-lg-6">
                  From guides and how-tos, to live demos and code examples to
                  get started right away.{" "}
                </div>
                {/*end::Description*/}
              </div>
              {/*end::Wrapper*/}
              <i className="ki-duotone ki-arrow-right text-gray-500 fs-2">
                <span className="path1" />
                <span className="path2" />
              </i>{" "}
            </div>
            {/*end::Info*/}
          </a>
          {/*end::Link*/}
          {/*begin::Link*/}
          <a
            href="https://preview.keenthemes.com/html/keen/docs/base/utilities"
            className="parent-hover d-flex align-items-center mb-7"
          >
            {/*begin::Icon*/}
            <div className="d-flex flex-center w-50px h-50px w-lg-75px h-lg-75px flex-shrink-0 rounded bg-light-primary">
              <i className="ki-duotone ki-wallet text-primary fs-2x fs-lg-3x">
                <span className="path1" />
                <span className="path2" />
                <span className="path3" />
                <span className="path4" />
              </i>{" "}
            </div>
            {/*end::Icon*/}
            {/*begin::Info*/}
            <div className="d-flex flex-stack flex-grow-1 ms-4 ms-lg-6">
              {/*begin::Wrapper*/}
              <div className="d-flex flex-column me-2 me-lg-5">
                {/*begin::Title*/}
                <div className="text-gray-900 parent-hover-primary fw-bold fs-6 fs-lg-4 mb-1">
                  Plugins &amp; Components{" "}
                </div>
                {/*end::Title*/}
                {/*begin::Description*/}
                <div className="text-muted fw-semibold fs-7 fs-lg-6">
                  Check out our 300+ in-house components and customized
                  3rd-party plugins.{" "}
                </div>
                {/*end::Description*/}
              </div>
              {/*end::Wrapper*/}
              <i className="ki-duotone ki-arrow-right text-gray-500 fs-2">
                <span className="path1" />
                <span className="path2" />
              </i>{" "}
            </div>
            {/*end::Info*/}
          </a>
          {/*end::Link*/}
          {/*begin::Link*/}
          <a
            href="https://preview.keenthemes.com/keen/demo3/layout-builder.html"
            className="parent-hover d-flex align-items-center mb-7"
          >
            {/*begin::Icon*/}
            <div className="d-flex flex-center w-50px h-50px w-lg-75px h-lg-75px flex-shrink-0 rounded bg-light-info">
              <i className="ki-duotone ki-design text-info fs-2x fs-lg-3x">
                <span className="path1" />
                <span className="path2" />
              </i>{" "}
            </div>
            {/*end::Icon*/}
            {/*begin::Info*/}
            <div className="d-flex flex-stack flex-grow-1 ms-4 ms-lg-6">
              {/*begin::Wrapper*/}
              <div className="d-flex flex-column me-2 me-lg-5">
                {/*begin::Title*/}
                <div className="text-gray-900 parent-hover-primary fw-bold fs-6 fs-lg-4 mb-1">
                  Layout Builder{" "}
                </div>
                {/*end::Title*/}
                {/*begin::Description*/}
                <div className="text-muted fw-semibold fs-7 fs-lg-6">
                  Build your layout, preview it and export the HTML for server
                  side integration.{" "}
                </div>
                {/*end::Description*/}
              </div>
              {/*end::Wrapper*/}
              <i className="ki-duotone ki-arrow-right text-gray-500 fs-2">
                <span className="path1" />
                <span className="path2" />
              </i>{" "}
            </div>
            {/*end::Info*/}
          </a>
          {/*end::Link*/}
          {/*begin::Link*/}
          <a
            href="https://preview.keenthemes.com/html/keen/docs/getting-started/changelog"
            className="parent-hover d-flex align-items-center mb-7"
          >
            {/*begin::Icon*/}
            <div className="d-flex flex-center w-50px h-50px w-lg-75px h-lg-75px flex-shrink-0 rounded bg-light-danger">
              <i className="ki-duotone ki-keyboard text-danger fs-2x fs-lg-3x">
                <span className="path1" />
                <span className="path2" />
              </i>{" "}
            </div>
            {/*end::Icon*/}
            {/*begin::Info*/}
            <div className="d-flex flex-stack flex-grow-1 ms-4 ms-lg-6">
              {/*begin::Wrapper*/}
              <div className="d-flex flex-column me-2 me-lg-5">
                {/*begin::Title*/}
                <div className="text-gray-900 parent-hover-primary fw-bold fs-6 fs-lg-4 mb-1">
                  What's New ?{" "}
                </div>
                {/*end::Title*/}
                {/*begin::Description*/}
                <div className="text-muted fw-semibold fs-7 fs-lg-6">
                  Latest features and improvements added with our users feedback
                  in mind.{" "}
                </div>
                {/*end::Description*/}
              </div>
              {/*end::Wrapper*/}
              <i className="ki-duotone ki-arrow-right text-gray-500 fs-2">
                <span className="path1" />
                <span className="path2" />
              </i>{" "}
            </div>
            {/*end::Info*/}
          </a>
          {/*end::Link*/}
        </div>
        {/*end::Content*/}
      </div>
      {/*end::Body*/}
    </div>
    {/*end::Card*/}
  </div>
  {/*end::Help drawer*/}
  {/*end::Engage drawers*/}
  {/*begin::Engage toolbar*/}
  <div className="engage-toolbar d-flex position-fixed px-5 fw-bold zindex-2 top-50 end-0 transform-90 mt-5 mt-lg-20 gap-2">
    {/*begin::Demos drawer toggle*/}
    <button
      id="kt_engage_demos_toggle"
      className="engage-demos-toggle engage-btn btn shadow-sm fs-6 px-4 rounded-top-0"
      title="Check out 9 more demos"
      data-bs-toggle="tooltip"
      data-bs-custom-class="tooltip-inverse"
      data-bs-placement="left"
      data-bs-dismiss="click"
      data-bs-trigger="hover"
    >
      <span id="kt_engage_demos_label">Demos</span>
    </button>
    {/*end::Demos drawer toggle*/}
    {/*begin::Help drawer toggle*/}
    <button
      id="kt_help_toggle"
      className="engage-help-toggle btn engage-btn shadow-sm px-5 rounded-top-0"
      title="Learn & Get Inspired"
      data-bs-toggle="tooltip"
      data-bs-custom-class="tooltip-inverse"
      data-bs-placement="left"
      data-bs-dismiss="click"
      data-bs-trigger="hover"
    >
      Help
    </button>
    {/*end::Help drawer toggle*/}
  </div>
  {/*end::Engage toolbar*/}
  {/*begin::Scrolltop*/}
  <div id="kt_scrolltop" className="scrolltop" data-kt-scrolltop="true">
    <i className="ki-duotone ki-arrow-up">
      <span className="path1" />
      <span className="path2" />
    </i>
  </div>
  {/*end::Scrolltop*/}
  {/*begin::Modals*/}
  {/*begin::Modal - Upgrade plan*/}
  <div
    className="modal fade"
    id="kt_modal_upgrade_plan"
    tabIndex={-1}
    aria-hidden="true"
  >
    {/*begin::Modal dialog*/}
    <div className="modal-dialog modal-xl">
      {/*begin::Modal content*/}
      <div className="modal-content rounded">
        {/*begin::Modal header*/}
        <div className="modal-header justify-content-end border-0 pb-0">
          {/*begin::Close*/}
          <div
            className="btn btn-sm btn-icon btn-active-color-primary"
            data-bs-dismiss="modal"
          >
            <i className="ki-duotone ki-cross fs-1">
              <span className="path1" />
              <span className="path2" />
            </i>{" "}
          </div>
          {/*end::Close*/}
        </div>
        {/*end::Modal header*/}
        {/*begin::Modal body*/}
        <div className="modal-body pt-0 pb-15 px-5 px-xl-20">
          {/*begin::Heading*/}
          <div className="mb-13 text-center">
            <h1 className="mb-3">Upgrade a Plan</h1>
            <div className="text-muted fw-semibold fs-5">
              If you need more info, please check{" "}
              <a href="#" className="link-primary fw-bold">
                Pricing Guidelines
              </a>
              .
            </div>
          </div>
          {/*end::Heading*/}
          {/*begin::Plans*/}
          <div className="d-flex flex-column">
            {/*begin::Nav group*/}
            <div
              className="nav-group nav-group-outline mx-auto"
              data-kt-buttons="true"
            >
              <button
                className="btn btn-color-gray-500 btn-active btn-active-secondary px-6 py-3 me-2 active"
                data-kt-plan="month"
              >
                Monthly
              </button>
              <button
                className="btn btn-color-gray-500 btn-active btn-active-secondary px-6 py-3"
                data-kt-plan="annual"
              >
                Annual
              </button>
            </div>
            {/*end::Nav group*/}
            {/*begin::Row*/}
            <div className="row mt-10">
              {/*begin::Col*/}
              <div className="col-lg-6 mb-10 mb-lg-0">
                {/*begin::Tabs*/}
                <div className="nav flex-column">
                  {/*begin::Tab link*/}
                  <label
                    className="nav-link btn btn-outline btn-outline-dashed btn-color-dark btn-active btn-active-primary d-flex flex-stack text-start p-6 active mb-6"
                    data-bs-toggle="tab"
                    data-bs-target="#kt_upgrade_plan_startup"
                  >
                    {/*end::Description*/}
                    <div className="d-flex align-items-center me-2">
                      {/*begin::Radio*/}
                      <div className="form-check form-check-custom form-check-solid form-check-success flex-shrink-0 me-6">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="plan"
                          defaultChecked="checked"
                          defaultValue="startup"
                        />
                      </div>
                      {/*end::Radio*/}
                      {/*begin::Info*/}
                      <div className="flex-grow-1">
                        <div className="d-flex align-items-center fs-2 fw-bold flex-wrap">
                          Startup
                        </div>
                        <div className="fw-semibold opacity-75">
                          Best for startups{" "}
                        </div>
                      </div>
                      {/*end::Info*/}
                    </div>
                    {/*end::Description*/}
                    {/*begin::Price*/}
                    <div className="ms-5">
                      <span className="mb-2">$</span>
                      <span
                        className="fs-3x fw-bold"
                        data-kt-plan-price-month={39}
                        data-kt-plan-price-annual={399}
                      >
                        39{" "}
                      </span>
                      <span className="fs-7 opacity-50">
                        /<span data-kt-element="period">Mon</span>
                      </span>
                    </div>
                    {/*end::Price*/}
                  </label>
                  {/*end::Tab link*/}
                  {/*begin::Tab link*/}
                  <label
                    className="nav-link btn btn-outline btn-outline-dashed btn-color-dark btn-active btn-active-primary d-flex flex-stack text-start p-6  mb-6"
                    data-bs-toggle="tab"
                    data-bs-target="#kt_upgrade_plan_advanced"
                  >
                    {/*end::Description*/}
                    <div className="d-flex align-items-center me-2">
                      {/*begin::Radio*/}
                      <div className="form-check form-check-custom form-check-solid form-check-success flex-shrink-0 me-6">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="plan"
                          defaultValue="advanced"
                        />
                      </div>
                      {/*end::Radio*/}
                      {/*begin::Info*/}
                      <div className="flex-grow-1">
                        <div className="d-flex align-items-center fs-2 fw-bold flex-wrap">
                          Advanced
                        </div>
                        <div className="fw-semibold opacity-75">
                          Best for 100+ team size{" "}
                        </div>
                      </div>
                      {/*end::Info*/}
                    </div>
                    {/*end::Description*/}
                    {/*begin::Price*/}
                    <div className="ms-5">
                      <span className="mb-2">$</span>
                      <span
                        className="fs-3x fw-bold"
                        data-kt-plan-price-month={339}
                        data-kt-plan-price-annual={3399}
                      >
                        339{" "}
                      </span>
                      <span className="fs-7 opacity-50">
                        /<span data-kt-element="period">Mon</span>
                      </span>
                    </div>
                    {/*end::Price*/}
                  </label>
                  {/*end::Tab link*/}
                  {/*begin::Tab link*/}
                  <label
                    className="nav-link btn btn-outline btn-outline-dashed btn-color-dark btn-active btn-active-primary d-flex flex-stack text-start p-6  mb-6"
                    data-bs-toggle="tab"
                    data-bs-target="#kt_upgrade_plan_enterprise"
                  >
                    {/*end::Description*/}
                    <div className="d-flex align-items-center me-2">
                      {/*begin::Radio*/}
                      <div className="form-check form-check-custom form-check-solid form-check-success flex-shrink-0 me-6">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="plan"
                          defaultValue="enterprise"
                        />
                      </div>
                      {/*end::Radio*/}
                      {/*begin::Info*/}
                      <div className="flex-grow-1">
                        <div className="d-flex align-items-center fs-2 fw-bold flex-wrap">
                          Enterprise
                          <span className="badge badge-light-success ms-2 py-2 px-3 fs-7">
                            Popular
                          </span>
                        </div>
                        <div className="fw-semibold opacity-75">
                          Best value for 1000+ team{" "}
                        </div>
                      </div>
                      {/*end::Info*/}
                    </div>
                    {/*end::Description*/}
                    {/*begin::Price*/}
                    <div className="ms-5">
                      <span className="mb-2">$</span>
                      <span
                        className="fs-3x fw-bold"
                        data-kt-plan-price-month={999}
                        data-kt-plan-price-annual={9999}
                      >
                        999{" "}
                      </span>
                      <span className="fs-7 opacity-50">
                        /<span data-kt-element="period">Mon</span>
                      </span>
                    </div>
                    {/*end::Price*/}
                  </label>
                  {/*end::Tab link*/}
                  {/*begin::Tab link*/}
                  <label
                    className="nav-link btn btn-outline btn-outline-dashed btn-color-dark btn-active btn-active-primary d-flex flex-stack text-start p-6 mb-6"
                    data-bs-toggle="tab"
                    data-bs-target="#kt_upgrade_plan_custom"
                  >
                    {/*end::Description*/}
                    <div className="d-flex align-items-center me-2">
                      {/*begin::Radio*/}
                      <div className="form-check form-check-custom form-check-solid form-check-success flex-shrink-0 me-6">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="plan"
                          defaultValue="custom"
                        />
                      </div>
                      {/*end::Radio*/}
                      {/*begin::Info*/}
                      <div className="flex-grow-1">
                        <div className="d-flex align-items-center fs-2 fw-bold flex-wrap">
                          Custom
                        </div>
                        <div className="fw-semibold opacity-75">
                          Requet a custom license{" "}
                        </div>
                      </div>
                      {/*end::Info*/}
                    </div>
                    {/*end::Description*/}
                    {/*begin::Price*/}
                    <div className="ms-5">
                      <a href="#" className="btn btn-sm btn-success">
                        Contact Us
                      </a>
                    </div>
                    {/*end::Price*/}
                  </label>
                  {/*end::Tab link*/}
                </div>
                {/*end::Tabs*/}
              </div>
              {/*end::Col*/}
              {/*begin::Col*/}
              <div className="col-lg-6">
                {/*begin::Tab content*/}
                <div className="tab-content rounded h-100 bg-light p-10">
                  {/*begin::Tab Pane*/}
                  <div
                    className="tab-pane fade show active"
                    id="kt_upgrade_plan_startup"
                  >
                    {/*begin::Heading*/}
                    <div className="pb-5">
                      <h2 className="fw-bold text-gray-900">
                        What’s in Startup Plan?
                      </h2>
                      <div className="text-muted fw-semibold">
                        Optimal for 10+ team size and new startup
                      </div>
                    </div>
                    {/*end::Heading*/}
                    {/*begin::Body*/}
                    <div className="pt-1">
                      {/*begin::Item*/}
                      <div className="d-flex align-items-center mb-7">
                        <span className="fw-semibold fs-5 text-gray-700 flex-grow-1">
                          Up to 10 Active Users{" "}
                        </span>
                        <i className="ki-duotone ki-check-circle fs-1 text-success">
                          <span className="path1" />
                          <span className="path2" />
                        </i>
                      </div>
                      {/*end::Item*/}
                      {/*begin::Item*/}
                      <div className="d-flex align-items-center mb-7">
                        <span className="fw-semibold fs-5 text-gray-700 flex-grow-1">
                          Up to 30 Project Integrations{" "}
                        </span>
                        <i className="ki-duotone ki-check-circle fs-1 text-success">
                          <span className="path1" />
                          <span className="path2" />
                        </i>
                      </div>
                      {/*end::Item*/}
                      {/*begin::Item*/}
                      <div className="d-flex align-items-center mb-7">
                        <span className="fw-semibold fs-5 text-gray-700 flex-grow-1">
                          Analytics Module{" "}
                        </span>
                        <i className="ki-duotone ki-check-circle fs-1 text-success">
                          <span className="path1" />
                          <span className="path2" />
                        </i>
                      </div>
                      {/*end::Item*/}
                      {/*begin::Item*/}
                      <div className="d-flex align-items-center mb-7">
                        <span className="fw-semibold fs-5 text-muted flex-grow-1">
                          Finance Module{" "}
                        </span>
                        <i className="ki-duotone ki-cross-circle fs-1">
                          <span className="path1" />
                          <span className="path2" />
                        </i>
                      </div>
                      {/*end::Item*/}
                      {/*begin::Item*/}
                      <div className="d-flex align-items-center mb-7">
                        <span className="fw-semibold fs-5 text-muted flex-grow-1">
                          Accounting Module{" "}
                        </span>
                        <i className="ki-duotone ki-cross-circle fs-1">
                          <span className="path1" />
                          <span className="path2" />
                        </i>
                      </div>
                      {/*end::Item*/}
                      {/*begin::Item*/}
                      <div className="d-flex align-items-center mb-7">
                        <span className="fw-semibold fs-5 text-muted flex-grow-1">
                          Network Platform{" "}
                        </span>
                        <i className="ki-duotone ki-cross-circle fs-1">
                          <span className="path1" />
                          <span className="path2" />
                        </i>
                      </div>
                      {/*end::Item*/}
                      {/*begin::Item*/}
                      <div className="d-flex align-items-center ">
                        <span className="fw-semibold fs-5 text-muted flex-grow-1">
                          Unlimited Cloud Space{" "}
                        </span>
                        <i className="ki-duotone ki-cross-circle fs-1">
                          <span className="path1" />
                          <span className="path2" />
                        </i>
                      </div>
                      {/*end::Item*/}
                    </div>
                    {/*end::Body*/}
                  </div>
                  {/*end::Tab Pane*/}
                  {/*begin::Tab Pane*/}
                  <div className="tab-pane fade " id="kt_upgrade_plan_advanced">
                    {/*begin::Heading*/}
                    <div className="pb-5">
                      <h2 className="fw-bold text-gray-900">
                        What’s in Startup Plan?
                      </h2>
                      <div className="text-muted fw-semibold">
                        Optimal for 100+ team size and grown company
                      </div>
                    </div>
                    {/*end::Heading*/}
                    {/*begin::Body*/}
                    <div className="pt-1">
                      {/*begin::Item*/}
                      <div className="d-flex align-items-center mb-7">
                        <span className="fw-semibold fs-5 text-gray-700 flex-grow-1">
                          Up to 10 Active Users{" "}
                        </span>
                        <i className="ki-duotone ki-check-circle fs-1 text-success">
                          <span className="path1" />
                          <span className="path2" />
                        </i>
                      </div>
                      {/*end::Item*/}
                      {/*begin::Item*/}
                      <div className="d-flex align-items-center mb-7">
                        <span className="fw-semibold fs-5 text-gray-700 flex-grow-1">
                          Up to 30 Project Integrations{" "}
                        </span>
                        <i className="ki-duotone ki-check-circle fs-1 text-success">
                          <span className="path1" />
                          <span className="path2" />
                        </i>
                      </div>
                      {/*end::Item*/}
                      {/*begin::Item*/}
                      <div className="d-flex align-items-center mb-7">
                        <span className="fw-semibold fs-5 text-gray-700 flex-grow-1">
                          Analytics Module{" "}
                        </span>
                        <i className="ki-duotone ki-check-circle fs-1 text-success">
                          <span className="path1" />
                          <span className="path2" />
                        </i>
                      </div>
                      {/*end::Item*/}
                      {/*begin::Item*/}
                      <div className="d-flex align-items-center mb-7">
                        <span className="fw-semibold fs-5 text-gray-700 flex-grow-1">
                          Finance Module{" "}
                        </span>
                        <i className="ki-duotone ki-check-circle fs-1 text-success">
                          <span className="path1" />
                          <span className="path2" />
                        </i>
                      </div>
                      {/*end::Item*/}
                      {/*begin::Item*/}
                      <div className="d-flex align-items-center mb-7">
                        <span className="fw-semibold fs-5 text-gray-700 flex-grow-1">
                          Accounting Module{" "}
                        </span>
                        <i className="ki-duotone ki-check-circle fs-1 text-success">
                          <span className="path1" />
                          <span className="path2" />
                        </i>
                      </div>
                      {/*end::Item*/}
                      {/*begin::Item*/}
                      <div className="d-flex align-items-center mb-7">
                        <span className="fw-semibold fs-5 text-muted flex-grow-1">
                          Network Platform{" "}
                        </span>
                        <i className="ki-duotone ki-cross-circle fs-1">
                          <span className="path1" />
                          <span className="path2" />
                        </i>
                      </div>
                      {/*end::Item*/}
                      {/*begin::Item*/}
                      <div className="d-flex align-items-center ">
                        <span className="fw-semibold fs-5 text-muted flex-grow-1">
                          Unlimited Cloud Space{" "}
                        </span>
                        <i className="ki-duotone ki-cross-circle fs-1">
                          <span className="path1" />
                          <span className="path2" />
                        </i>
                      </div>
                      {/*end::Item*/}
                    </div>
                    {/*end::Body*/}
                  </div>
                  {/*end::Tab Pane*/}
                  {/*begin::Tab Pane*/}
                  <div
                    className="tab-pane fade "
                    id="kt_upgrade_plan_enterprise"
                  >
                    {/*begin::Heading*/}
                    <div className="pb-5">
                      <h2 className="fw-bold text-gray-900">
                        What’s in Startup Plan?
                      </h2>
                      <div className="text-muted fw-semibold">
                        Optimal for 1000+ team and enterpise
                      </div>
                    </div>
                    {/*end::Heading*/}
                    {/*begin::Body*/}
                    <div className="pt-1">
                      {/*begin::Item*/}
                      <div className="d-flex align-items-center mb-7">
                        <span className="fw-semibold fs-5 text-gray-700 flex-grow-1">
                          Up to 10 Active Users{" "}
                        </span>
                        <i className="ki-duotone ki-check-circle fs-1 text-success">
                          <span className="path1" />
                          <span className="path2" />
                        </i>
                      </div>
                      {/*end::Item*/}
                      {/*begin::Item*/}
                      <div className="d-flex align-items-center mb-7">
                        <span className="fw-semibold fs-5 text-gray-700 flex-grow-1">
                          Up to 30 Project Integrations{" "}
                        </span>
                        <i className="ki-duotone ki-check-circle fs-1 text-success">
                          <span className="path1" />
                          <span className="path2" />
                        </i>
                      </div>
                      {/*end::Item*/}
                      {/*begin::Item*/}
                      <div className="d-flex align-items-center mb-7">
                        <span className="fw-semibold fs-5 text-gray-700 flex-grow-1">
                          Analytics Module{" "}
                        </span>
                        <i className="ki-duotone ki-check-circle fs-1 text-success">
                          <span className="path1" />
                          <span className="path2" />
                        </i>
                      </div>
                      {/*end::Item*/}
                      {/*begin::Item*/}
                      <div className="d-flex align-items-center mb-7">
                        <span className="fw-semibold fs-5 text-gray-700 flex-grow-1">
                          Finance Module{" "}
                        </span>
                        <i className="ki-duotone ki-check-circle fs-1 text-success">
                          <span className="path1" />
                          <span className="path2" />
                        </i>
                      </div>
                      {/*end::Item*/}
                      {/*begin::Item*/}
                      <div className="d-flex align-items-center mb-7">
                        <span className="fw-semibold fs-5 text-gray-700 flex-grow-1">
                          Accounting Module{" "}
                        </span>
                        <i className="ki-duotone ki-check-circle fs-1 text-success">
                          <span className="path1" />
                          <span className="path2" />
                        </i>
                      </div>
                      {/*end::Item*/}
                      {/*begin::Item*/}
                      <div className="d-flex align-items-center mb-7">
                        <span className="fw-semibold fs-5 text-gray-700 flex-grow-1">
                          Network Platform{" "}
                        </span>
                        <i className="ki-duotone ki-check-circle fs-1 text-success">
                          <span className="path1" />
                          <span className="path2" />
                        </i>
                      </div>
                      {/*end::Item*/}
                      {/*begin::Item*/}
                      <div className="d-flex align-items-center ">
                        <span className="fw-semibold fs-5 text-gray-700 flex-grow-1">
                          Unlimited Cloud Space{" "}
                        </span>
                        <i className="ki-duotone ki-check-circle fs-1 text-success">
                          <span className="path1" />
                          <span className="path2" />
                        </i>
                      </div>
                      {/*end::Item*/}
                    </div>
                    {/*end::Body*/}
                  </div>
                  {/*end::Tab Pane*/}
                  {/*begin::Tab Pane*/}
                  <div className="tab-pane fade " id="kt_upgrade_plan_custom">
                    {/*begin::Heading*/}
                    <div className="pb-5">
                      <h2 className="fw-bold text-gray-900">
                        What’s in Startup Plan?
                      </h2>
                      <div className="text-muted fw-semibold">
                        Optimal for corporations
                      </div>
                    </div>
                    {/*end::Heading*/}
                    {/*begin::Body*/}
                    <div className="pt-1">
                      {/*begin::Item*/}
                      <div className="d-flex align-items-center mb-7">
                        <span className="fw-semibold fs-5 text-gray-700 flex-grow-1">
                          Unlimited Users{" "}
                        </span>
                        <i className="ki-duotone ki-check-circle fs-1 text-success">
                          <span className="path1" />
                          <span className="path2" />
                        </i>
                      </div>
                      {/*end::Item*/}
                      {/*begin::Item*/}
                      <div className="d-flex align-items-center mb-7">
                        <span className="fw-semibold fs-5 text-gray-700 flex-grow-1">
                          Unlimited Project Integrations{" "}
                        </span>
                        <i className="ki-duotone ki-check-circle fs-1 text-success">
                          <span className="path1" />
                          <span className="path2" />
                        </i>
                      </div>
                      {/*end::Item*/}
                      {/*begin::Item*/}
                      <div className="d-flex align-items-center mb-7">
                        <span className="fw-semibold fs-5 text-gray-700 flex-grow-1">
                          Analytics Module{" "}
                        </span>
                        <i className="ki-duotone ki-check-circle fs-1 text-success">
                          <span className="path1" />
                          <span className="path2" />
                        </i>
                      </div>
                      {/*end::Item*/}
                      {/*begin::Item*/}
                      <div className="d-flex align-items-center mb-7">
                        <span className="fw-semibold fs-5 text-gray-700 flex-grow-1">
                          Finance Module{" "}
                        </span>
                        <i className="ki-duotone ki-check-circle fs-1 text-success">
                          <span className="path1" />
                          <span className="path2" />
                        </i>
                      </div>
                      {/*end::Item*/}
                      {/*begin::Item*/}
                      <div className="d-flex align-items-center mb-7">
                        <span className="fw-semibold fs-5 text-gray-700 flex-grow-1">
                          Accounting Module{" "}
                        </span>
                        <i className="ki-duotone ki-check-circle fs-1 text-success">
                          <span className="path1" />
                          <span className="path2" />
                        </i>
                      </div>
                      {/*end::Item*/}
                      {/*begin::Item*/}
                      <div className="d-flex align-items-center mb-7">
                        <span className="fw-semibold fs-5 text-gray-700 flex-grow-1">
                          Network Platform{" "}
                        </span>
                        <i className="ki-duotone ki-check-circle fs-1 text-success">
                          <span className="path1" />
                          <span className="path2" />
                        </i>
                      </div>
                      {/*end::Item*/}
                      {/*begin::Item*/}
                      <div className="d-flex align-items-center ">
                        <span className="fw-semibold fs-5 text-gray-700 flex-grow-1">
                          Unlimited Cloud Space{" "}
                        </span>
                        <i className="ki-duotone ki-check-circle fs-1 text-success">
                          <span className="path1" />
                          <span className="path2" />
                        </i>
                      </div>
                      {/*end::Item*/}
                    </div>
                    {/*end::Body*/}
                  </div>
                  {/*end::Tab Pane*/}
                </div>
                {/*end::Tab content*/}
              </div>
              {/*end::Col*/}
            </div>
            {/*end::Row*/}
          </div>
          {/*end::Plans*/}
          {/*begin::Actions*/}
          <div className="d-flex flex-center flex-row-fluid pt-12">
            <button
              type="reset"
              className="btn btn-light me-3"
              data-bs-dismiss="modal"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="btn btn-primary"
              id="kt_modal_upgrade_plan_btn"
            >
              {/*begin::Indicator label*/}
              <span className="indicator-label">Upgrade Plan</span>
              {/*end::Indicator label*/}
              {/*begin::Indicator progress*/}
              <span className="indicator-progress">
                Please wait...{" "}
                <span className="spinner-border spinner-border-sm align-middle ms-2" />
              </span>
              {/*end::Indicator progress*/}
            </button>
          </div>
          {/*end::Actions*/}
        </div>
        {/*end::Modal body*/}
      </div>
      {/*end::Modal content*/}
    </div>
    {/*end::Modal dialog*/}
  </div>
  {/*end::Modal - Upgrade plan*/}
  {/*begin::Modal - Create App*/}
  <div
    className="modal fade"
    id="kt_modal_create_app"
    tabIndex={-1}
    aria-hidden="true"
  >
    {/*begin::Modal dialog*/}
    <div className="modal-dialog modal-dialog-centered mw-900px">
      {/*begin::Modal content*/}
      <div className="modal-content">
        {/*begin::Modal header*/}
        <div className="modal-header">
          {/*begin::Modal title*/}
          <h2>Create App</h2>
          {/*end::Modal title*/}
          {/*begin::Close*/}
          <div
            className="btn btn-sm btn-icon btn-active-color-primary"
            data-bs-dismiss="modal"
          >
            <i className="ki-duotone ki-cross fs-1">
              <span className="path1" />
              <span className="path2" />
            </i>{" "}
          </div>
          {/*end::Close*/}
        </div>
        {/*end::Modal header*/}
        {/*begin::Modal body*/}
        <div className="modal-body py-lg-10 px-lg-10">
          {/*begin::Stepper*/}
          <div
            className="stepper stepper-pills stepper-column d-flex flex-column flex-xl-row flex-row-fluid"
            id="kt_modal_create_app_stepper"
          >
            {/*begin::Aside*/}
            <div className="d-flex justify-content-center justify-content-xl-start flex-row-auto w-100 w-xl-300px">
              {/*begin::Nav*/}
              <div className="stepper-nav ps-lg-10">
                {/*begin::Step 1*/}
                <div
                  className="stepper-item current"
                  data-kt-stepper-element="nav"
                >
                  {/*begin::Wrapper*/}
                  <div className="stepper-wrapper">
                    {/*begin::Icon*/}
                    <div className="stepper-icon w-40px h-40px">
                      <i className="ki-duotone ki-check stepper-check fs-2" />{" "}
                      <span className="stepper-number">1</span>
                    </div>
                    {/*end::Icon*/}
                    {/*begin::Label*/}
                    <div className="stepper-label">
                      <h3 className="stepper-title">Details</h3>
                      <div className="stepper-desc">Name your App</div>
                    </div>
                    {/*end::Label*/}
                  </div>
                  {/*end::Wrapper*/}
                  {/*begin::Line*/}
                  <div className="stepper-line h-40px" />
                  {/*end::Line*/}
                </div>
                {/*end::Step 1*/}
                {/*begin::Step 2*/}
                <div className="stepper-item" data-kt-stepper-element="nav">
                  {/*begin::Wrapper*/}
                  <div className="stepper-wrapper">
                    {/*begin::Icon*/}
                    <div className="stepper-icon w-40px h-40px">
                      <i className="ki-duotone ki-check stepper-check fs-2" />{" "}
                      <span className="stepper-number">2</span>
                    </div>
                    {/*begin::Icon*/}
                    {/*begin::Label*/}
                    <div className="stepper-label">
                      <h3 className="stepper-title">Frameworks</h3>
                      <div className="stepper-desc">
                        Define your app framework
                      </div>
                    </div>
                    {/*begin::Label*/}
                  </div>
                  {/*end::Wrapper*/}
                  {/*begin::Line*/}
                  <div className="stepper-line h-40px" />
                  {/*end::Line*/}
                </div>
                {/*end::Step 2*/}
                {/*begin::Step 3*/}
                <div className="stepper-item" data-kt-stepper-element="nav">
                  {/*begin::Wrapper*/}
                  <div className="stepper-wrapper">
                    {/*begin::Icon*/}
                    <div className="stepper-icon w-40px h-40px">
                      <i className="ki-duotone ki-check stepper-check fs-2" />{" "}
                      <span className="stepper-number">3</span>
                    </div>
                    {/*end::Icon*/}
                    {/*begin::Label*/}
                    <div className="stepper-label">
                      <h3 className="stepper-title">Database</h3>
                      <div className="stepper-desc">
                        Select the app database type
                      </div>
                    </div>
                    {/*end::Label*/}
                  </div>
                  {/*end::Wrapper*/}
                  {/*begin::Line*/}
                  <div className="stepper-line h-40px" />
                  {/*end::Line*/}
                </div>
                {/*end::Step 3*/}
                {/*begin::Step 4*/}
                <div className="stepper-item" data-kt-stepper-element="nav">
                  {/*begin::Wrapper*/}
                  <div className="stepper-wrapper">
                    {/*begin::Icon*/}
                    <div className="stepper-icon w-40px h-40px">
                      <i className="ki-duotone ki-check stepper-check fs-2" />{" "}
                      <span className="stepper-number">4</span>
                    </div>
                    {/*end::Icon*/}
                    {/*begin::Label*/}
                    <div className="stepper-label">
                      <h3 className="stepper-title">Billing</h3>
                      <div className="stepper-desc">
                        Provide payment details
                      </div>
                    </div>
                    {/*end::Label*/}
                  </div>
                  {/*end::Wrapper*/}
                  {/*begin::Line*/}
                  <div className="stepper-line h-40px" />
                  {/*end::Line*/}
                </div>
                {/*end::Step 4*/}
                {/*begin::Step 5*/}
                <div
                  className="stepper-item mark-completed"
                  data-kt-stepper-element="nav"
                >
                  {/*begin::Wrapper*/}
                  <div className="stepper-wrapper">
                    {/*begin::Icon*/}
                    <div className="stepper-icon w-40px h-40px">
                      <i className="ki-duotone ki-check stepper-check fs-2" />{" "}
                      <span className="stepper-number">5</span>
                    </div>
                    {/*end::Icon*/}
                    {/*begin::Label*/}
                    <div className="stepper-label">
                      <h3 className="stepper-title">Completed</h3>
                      <div className="stepper-desc">Review and Submit</div>
                    </div>
                    {/*end::Label*/}
                  </div>
                  {/*end::Wrapper*/}
                </div>
                {/*end::Step 5*/}
              </div>
              {/*end::Nav*/}
            </div>
            {/*begin::Aside*/}
            {/*begin::Content*/}
            <div className="flex-row-fluid py-lg-5 px-lg-15">
              {/*begin::Form*/}
              <form
                className="form"
                noValidate="novalidate"
                id="kt_modal_create_app_form"
              >
                {/*begin::Step 1*/}
                <div className="current" data-kt-stepper-element="content">
                  <div className="w-100">
                    {/*begin::Input group*/}
                    <div className="fv-row mb-10">
                      {/*begin::Label*/}
                      <label className="d-flex align-items-center fs-5 fw-semibold mb-2">
                        <span className="required">App Name</span>
                        <span
                          className="ms-1"
                          data-bs-toggle="tooltip"
                          title="Specify your unique app name"
                        >
                          <i className="ki-duotone ki-information-5 text-gray-500 fs-6">
                            <span className="path1" />
                            <span className="path2" />
                            <span className="path3" />
                          </i>
                        </span>{" "}
                      </label>
                      {/*end::Label*/}
                      {/*begin::Input*/}
                      <input
                        type="text"
                        className="form-control form-control-lg form-control-solid"
                        name="name"
                        placeholder=""
                        defaultValue=""
                      />
                      {/*end::Input*/}
                    </div>
                    {/*end::Input group*/}
                    {/*begin::Input group*/}
                    <div className="fv-row">
                      {/*begin::Label*/}
                      <label className="d-flex align-items-center fs-5 fw-semibold mb-4">
                        <span className="required">Category</span>
                        <span
                          className="ms-1"
                          data-bs-toggle="tooltip"
                          title="Select your app category"
                        >
                          <i className="ki-duotone ki-information-5 text-gray-500 fs-6">
                            <span className="path1" />
                            <span className="path2" />
                            <span className="path3" />
                          </i>
                        </span>{" "}
                      </label>
                      {/*end::Label*/}
                      {/*begin:Options*/}
                      <div className="fv-row">
                        {/*begin:Option*/}
                        <label className="d-flex flex-stack mb-5 cursor-pointer">
                          {/*begin:Label*/}
                          <span className="d-flex align-items-center me-2">
                            {/*begin:Icon*/}
                            <span className="symbol symbol-50px me-6">
                              <span className="symbol-label bg-light-primary">
                                <i className="ki-duotone ki-compass fs-1 text-primary">
                                  <span className="path1" />
                                  <span className="path2" />
                                </i>{" "}
                              </span>
                            </span>
                            {/*end:Icon*/}
                            {/*begin:Info*/}
                            <span className="d-flex flex-column">
                              <span className="fw-bold fs-6">
                                Quick Online Courses
                              </span>
                              <span className="fs-7 text-muted">
                                Creating a clear text structure is just one SEO
                              </span>
                            </span>
                            {/*end:Info*/}
                          </span>
                          {/*end:Label*/}
                          {/*begin:Input*/}
                          <span className="form-check form-check-custom form-check-solid">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="category"
                              defaultValue={1}
                            />
                          </span>
                          {/*end:Input*/}
                        </label>
                        {/*end::Option*/}
                        {/*begin:Option*/}
                        <label className="d-flex flex-stack mb-5 cursor-pointer">
                          {/*begin:Label*/}
                          <span className="d-flex align-items-center me-2">
                            {/*begin:Icon*/}
                            <span className="symbol symbol-50px me-6">
                              <span className="symbol-label bg-light-danger  ">
                                <i className="ki-duotone ki-element-11 fs-1 text-danger">
                                  <span className="path1" />
                                  <span className="path2" />
                                  <span className="path3" />
                                  <span className="path4" />
                                </i>{" "}
                              </span>
                            </span>
                            {/*end:Icon*/}
                            {/*begin:Info*/}
                            <span className="d-flex flex-column">
                              <span className="fw-bold fs-6">
                                Face to Face Discussions
                              </span>
                              <span className="fs-7 text-muted">
                                Creating a clear text structure is just one
                                aspect
                              </span>
                            </span>
                            {/*end:Info*/}
                          </span>
                          {/*end:Label*/}
                          {/*begin:Input*/}
                          <span className="form-check form-check-custom form-check-solid">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="category"
                              defaultValue={2}
                            />
                          </span>
                          {/*end:Input*/}
                        </label>
                        {/*end::Option*/}
                        {/*begin:Option*/}
                        <label className="d-flex flex-stack cursor-pointer">
                          {/*begin:Label*/}
                          <span className="d-flex align-items-center me-2">
                            {/*begin:Icon*/}
                            <span className="symbol symbol-50px me-6">
                              <span className="symbol-label bg-light-success">
                                <i className="ki-duotone ki-timer fs-1 text-success">
                                  <span className="path1" />
                                  <span className="path2" />
                                  <span className="path3" />
                                </i>{" "}
                              </span>
                            </span>
                            {/*end:Icon*/}
                            {/*begin:Info*/}
                            <span className="d-flex flex-column">
                              <span className="fw-bold fs-6">
                                Full Intro Training
                              </span>
                              <span className="fs-7 text-muted">
                                Creating a clear text structure copywriting
                              </span>
                            </span>
                            {/*end:Info*/}
                          </span>
                          {/*end:Label*/}
                          {/*begin:Input*/}
                          <span className="form-check form-check-custom form-check-solid">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="category"
                              defaultValue={3}
                            />
                          </span>
                          {/*end:Input*/}
                        </label>
                        {/*end::Option*/}
                      </div>
                      {/*end:Options*/}
                    </div>
                    {/*end::Input group*/}
                  </div>
                </div>
                {/*end::Step 1*/}
                {/*begin::Step 2*/}
                <div data-kt-stepper-element="content">
                  <div className="w-100">
                    {/*begin::Input group*/}
                    <div className="fv-row">
                      {/*begin::Label*/}
                      <label className="d-flex align-items-center fs-5 fw-semibold mb-4">
                        <span className="required">Select Framework</span>
                        <span
                          className="ms-1"
                          data-bs-toggle="tooltip"
                          title="Specify your apps framework"
                        >
                          <i className="ki-duotone ki-information-5 text-gray-500 fs-6">
                            <span className="path1" />
                            <span className="path2" />
                            <span className="path3" />
                          </i>
                        </span>{" "}
                      </label>
                      {/*end::Label*/}
                      {/*begin:Option*/}
                      <label className="d-flex flex-stack cursor-pointer mb-5">
                        {/*begin:Label*/}
                        <span className="d-flex align-items-center me-2">
                          {/*begin:Icon*/}
                          <span className="symbol symbol-50px me-6">
                            <span className="symbol-label bg-light-warning">
                              <i className="ki-duotone ki-html fs-2x text-warning">
                                <span className="path1" />
                                <span className="path2" />
                              </i>
                            </span>
                          </span>
                          {/*end:Icon*/}
                          {/*begin:Info*/}
                          <span className="d-flex flex-column">
                            <span className="fw-bold fs-6">HTML5</span>
                            <span className="fs-7 text-muted">
                              Base Web Projec
                            </span>
                          </span>
                          {/*end:Info*/}
                        </span>
                        {/*end:Label*/}
                        {/*begin:Input*/}
                        <span className="form-check form-check-custom form-check-solid">
                          <input
                            className="form-check-input"
                            type="radio"
                            defaultChecked=""
                            name="framework"
                            defaultValue={1}
                          />
                        </span>
                        {/*end:Input*/}
                      </label>
                      {/*end::Option*/}
                      {/*begin:Option*/}
                      <label className="d-flex flex-stack cursor-pointer mb-5">
                        {/*begin:Label*/}
                        <span className="d-flex align-items-center me-2">
                          {/*begin:Icon*/}
                          <span className="symbol symbol-50px me-6">
                            <span className="symbol-label bg-light-success">
                              <i className="ki-duotone ki-react fs-2x text-success">
                                <span className="path1" />
                                <span className="path2" />
                              </i>
                            </span>
                          </span>
                          {/*end:Icon*/}
                          {/*begin:Info*/}
                          <span className="d-flex flex-column">
                            <span className="fw-bold fs-6">ReactJS</span>
                            <span className="fs-7 text-muted">
                              Robust and flexible app framework
                            </span>
                          </span>
                          {/*end:Info*/}
                        </span>
                        {/*end:Label*/}
                        {/*begin:Input*/}
                        <span className="form-check form-check-custom form-check-solid">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="framework"
                            defaultValue={2}
                          />
                        </span>
                        {/*end:Input*/}
                      </label>
                      {/*end::Option*/}
                      {/*begin:Option*/}
                      <label className="d-flex flex-stack cursor-pointer mb-5">
                        {/*begin:Label*/}
                        <span className="d-flex align-items-center me-2">
                          {/*begin:Icon*/}
                          <span className="symbol symbol-50px me-6">
                            <span className="symbol-label bg-light-danger">
                              <i className="ki-duotone ki-angular fs-2x text-danger">
                                <span className="path1" />
                                <span className="path2" />
                                <span className="path3" />
                              </i>{" "}
                            </span>
                          </span>
                          {/*end:Icon*/}
                          {/*begin:Info*/}
                          <span className="d-flex flex-column">
                            <span className="fw-bold fs-6">Angular</span>
                            <span className="fs-7 text-muted">
                              Powerful data mangement
                            </span>
                          </span>
                          {/*end:Info*/}
                        </span>
                        {/*end:Label*/}
                        {/*begin:Input*/}
                        <span className="form-check form-check-custom form-check-solid">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="framework"
                            defaultValue={3}
                          />
                        </span>
                        {/*end:Input*/}
                      </label>
                      {/*end::Option*/}
                      {/*begin:Option*/}
                      <label className="d-flex flex-stack cursor-pointer">
                        {/*begin:Label*/}
                        <span className="d-flex align-items-center me-2">
                          {/*begin:Icon*/}
                          <span className="symbol symbol-50px me-6">
                            <span className="symbol-label bg-light-primary">
                              <i className="ki-duotone ki-vue fs-2x text-primary">
                                <span className="path1" />
                                <span className="path2" />
                              </i>{" "}
                            </span>
                          </span>
                          {/*end:Icon*/}
                          {/*begin:Info*/}
                          <span className="d-flex flex-column">
                            <span className="fw-bold fs-6">Vue</span>
                            <span className="fs-7 text-muted">
                              Lightweight and responsive framework
                            </span>
                          </span>
                          {/*end:Info*/}
                        </span>
                        {/*end:Label*/}
                        {/*begin:Input*/}
                        <span className="form-check form-check-custom form-check-solid">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="framework"
                            defaultValue={4}
                          />
                        </span>
                        {/*end:Input*/}
                      </label>
                      {/*end::Option*/}
                    </div>
                    {/*end::Input group*/}
                  </div>
                </div>
                {/*end::Step 2*/}
                {/*begin::Step 3*/}
                <div data-kt-stepper-element="content">
                  <div className="w-100">
                    {/*begin::Input group*/}
                    <div className="fv-row mb-10">
                      {/*begin::Label*/}
                      <label className="required fs-5 fw-semibold mb-2">
                        Database Name
                      </label>
                      {/*end::Label*/}
                      {/*begin::Input*/}
                      <input
                        type="text"
                        className="form-control form-control-lg form-control-solid"
                        name="dbname"
                        placeholder=""
                        defaultValue="master_db"
                      />
                      {/*end::Input*/}
                    </div>
                    {/*end::Input group*/}
                    {/*begin::Input group*/}
                    <div className="fv-row">
                      {/*begin::Label*/}
                      <label className="d-flex align-items-center fs-5 fw-semibold mb-4">
                        <span className="required">Select Database Engine</span>
                        <span
                          className="ms-1"
                          data-bs-toggle="tooltip"
                          title="Select your app database engine"
                        >
                          <i className="ki-duotone ki-information-5 text-gray-500 fs-6">
                            <span className="path1" />
                            <span className="path2" />
                            <span className="path3" />
                          </i>
                        </span>{" "}
                      </label>
                      {/*end::Label*/}
                      {/*begin:Option*/}
                      <label className="d-flex flex-stack cursor-pointer mb-5">
                        {/*begin::Label*/}
                        <span className="d-flex align-items-center me-2">
                          {/*begin::Icon*/}
                          <span className="symbol symbol-50px me-6">
                            <span className="symbol-label bg-light-success">
                              <i className="ki-duotone ki-note text-success fs-2x">
                                <span className="path1" />
                                <span className="path2" />
                              </i>
                            </span>
                          </span>
                          {/*end::Icon*/}
                          {/*begin::Info*/}
                          <span className="d-flex flex-column">
                            <span className="fw-bold fs-6">MySQL</span>
                            <span className="fs-7 text-muted">
                              Basic MySQL database
                            </span>
                          </span>
                          {/*end::Info*/}
                        </span>
                        {/*end::Label*/}
                        {/*begin::Input*/}
                        <span className="form-check form-check-custom form-check-solid">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="dbengine"
                            defaultChecked=""
                            defaultValue={1}
                          />
                        </span>
                        {/*end::Input*/}
                      </label>
                      {/*end::Option*/}
                      {/*begin:Option*/}
                      <label className="d-flex flex-stack cursor-pointer mb-5">
                        {/*begin::Label*/}
                        <span className="d-flex align-items-center me-2">
                          {/*begin::Icon*/}
                          <span className="symbol symbol-50px me-6">
                            <span className="symbol-label bg-light-danger">
                              <i className="ki-duotone ki-google text-danger fs-2x">
                                <span className="path1" />
                                <span className="path2" />
                              </i>
                            </span>
                          </span>
                          {/*end::Icon*/}
                          {/*begin::Info*/}
                          <span className="d-flex flex-column">
                            <span className="fw-bold fs-6">Firebase</span>
                            <span className="fs-7 text-muted">
                              Google based app data management
                            </span>
                          </span>
                          {/*end::Info*/}
                        </span>
                        {/*end::Label*/}
                        {/*begin::Input*/}
                        <span className="form-check form-check-custom form-check-solid">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="dbengine"
                            defaultValue={2}
                          />
                        </span>
                        {/*end::Input*/}
                      </label>
                      {/*end::Option*/}
                      {/*begin:Option*/}
                      <label className="d-flex flex-stack cursor-pointer">
                        {/*begin::Label*/}
                        <span className="d-flex align-items-center me-2">
                          {/*begin::Icon*/}
                          <span className="symbol symbol-50px me-6">
                            <span className="symbol-label bg-light-warning">
                              <i className="ki-duotone ki-microsoft text-warning fs-2x">
                                <span className="path1" />
                                <span className="path2" />
                                <span className="path3" />
                                <span className="path4" />
                              </i>
                            </span>
                          </span>
                          {/*end::Icon*/}
                          {/*begin::Info*/}
                          <span className="d-flex flex-column">
                            <span className="fw-bold fs-6">DynamoDB</span>
                            <span className="fs-7 text-muted">
                              Microsoft Fast NoSQL Database
                            </span>
                          </span>
                          {/*end::Info*/}
                        </span>
                        {/*end::Label*/}
                        {/*begin::Input*/}
                        <span className="form-check form-check-custom form-check-solid">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="dbengine"
                            defaultValue={3}
                          />
                        </span>
                        {/*end::Input*/}
                      </label>
                      {/*end::Option*/}
                    </div>
                    {/*end::Input group*/}
                  </div>
                </div>
                {/*end::Step 3*/}
                {/*begin::Step 4*/}
                <div data-kt-stepper-element="content">
                  <div className="w-100">
                    {/*begin::Input group*/}
                    <div className="d-flex flex-column mb-7 fv-row">
                      {/*begin::Label*/}
                      <label className="d-flex align-items-center fs-6 fw-semibold form-label mb-2">
                        <span className="required">Name On Card</span>
                        <span
                          className="ms-1"
                          data-bs-toggle="tooltip"
                          title="Specify a card holder's name"
                        >
                          <i className="ki-duotone ki-information-5 text-gray-500 fs-6">
                            <span className="path1" />
                            <span className="path2" />
                            <span className="path3" />
                          </i>
                        </span>{" "}
                      </label>
                      {/*end::Label*/}
                      <input
                        type="text"
                        className="form-control form-control-solid"
                        placeholder=""
                        name="card_name"
                        defaultValue="Max Doe"
                      />
                    </div>
                    {/*end::Input group*/}
                    {/*begin::Input group*/}
                    <div className="d-flex flex-column mb-7 fv-row">
                      {/*begin::Label*/}
                      <label className="required fs-6 fw-semibold form-label mb-2">
                        Card Number
                      </label>
                      {/*end::Label*/}
                      {/*begin::Input wrapper*/}
                      <div className="position-relative">
                        {/*begin::Input*/}
                        <input
                          type="text"
                          className="form-control form-control-solid"
                          placeholder="Enter card number"
                          name="card_number"
                          defaultValue="4111 1111 1111 1111"
                        />
                        {/*end::Input*/}
                        {/*begin::Card logos*/}
                        <div className="position-absolute translate-middle-y top-50 end-0 me-5">
                          <img
                            src="https://preview.keenthemes.com/keen/demo3/assets/media/svg/card-logos/visa.svg"
                            alt=""
                            className="h-25px"
                          />
                          <img
                            src="https://preview.keenthemes.com/keen/demo3/assets/media/svg/card-logos/mastercard.svg"
                            alt=""
                            className="h-25px"
                          />
                          <img
                            src="https://preview.keenthemes.com/keen/demo3/assets/media/svg/card-logos/american-express.svg"
                            alt=""
                            className="h-25px"
                          />
                        </div>
                        {/*end::Card logos*/}
                      </div>
                      {/*end::Input wrapper*/}
                    </div>
                    {/*end::Input group*/}
                    {/*begin::Input group*/}
                    <div className="row mb-10">
                      {/*begin::Col*/}
                      <div className="col-md-8 fv-row">
                        {/*begin::Label*/}
                        <label className="required fs-6 fw-semibold form-label mb-2">
                          Expiration Date
                        </label>
                        {/*end::Label*/}
                        {/*begin::Row*/}
                        <div className="row fv-row">
                          {/*begin::Col*/}
                          <div className="col-6">
                            <select
                              name="card_expiry_month"
                              className="form-select form-select-solid"
                              data-control="select2"
                              data-hide-search="true"
                              data-placeholder="Month"
                            >
                              <option />
                              <option value={1}>1</option>
                              <option value={2}>2</option>
                              <option value={3}>3</option>
                              <option value={4}>4</option>
                              <option value={5}>5</option>
                              <option value={6}>6</option>
                              <option value={7}>7</option>
                              <option value={8}>8</option>
                              <option value={9}>9</option>
                              <option value={10}>10</option>
                              <option value={11}>11</option>
                              <option value={12}>12</option>
                            </select>
                          </div>
                          {/*end::Col*/}
                          {/*begin::Col*/}
                          <div className="col-6">
                            <select
                              name="card_expiry_year"
                              className="form-select form-select-solid"
                              data-control="select2"
                              data-hide-search="true"
                              data-placeholder="Year"
                            >
                              <option />
                              <option value={2024}>2024</option>
                              <option value={2025}>2025</option>
                              <option value={2026}>2026</option>
                              <option value={2027}>2027</option>
                              <option value={2028}>2028</option>
                              <option value={2029}>2029</option>
                              <option value={2030}>2030</option>
                              <option value={2031}>2031</option>
                              <option value={2032}>2032</option>
                              <option value={2033}>2033</option>
                              <option value={2034}>2034</option>
                            </select>
                          </div>
                          {/*end::Col*/}
                        </div>
                        {/*end::Row*/}
                      </div>
                      {/*end::Col*/}
                      {/*begin::Col*/}
                      <div className="col-md-4 fv-row">
                        {/*begin::Label*/}
                        <label className="d-flex align-items-center fs-6 fw-semibold form-label mb-2">
                          <span className="required">CVV</span>
                          <span
                            className="ms-1"
                            data-bs-toggle="tooltip"
                            title="Enter a card CVV code"
                          >
                            <i className="ki-duotone ki-information-5 text-gray-500 fs-6">
                              <span className="path1" />
                              <span className="path2" />
                              <span className="path3" />
                            </i>
                          </span>{" "}
                        </label>
                        {/*end::Label*/}
                        {/*begin::Input wrapper*/}
                        <div className="position-relative">
                          {/*begin::Input*/}
                          <input
                            type="text"
                            className="form-control form-control-solid"
                            minLength={3}
                            maxLength={4}
                            placeholder="CVV"
                            name="card_cvv"
                          />
                          {/*end::Input*/}
                          {/*begin::CVV icon*/}
                          <div className="position-absolute translate-middle-y top-50 end-0 me-3">
                            <i className="ki-duotone ki-credit-cart fs-2hx">
                              <span className="path1" />
                              <span className="path2" />
                            </i>{" "}
                          </div>
                          {/*end::CVV icon*/}
                        </div>
                        {/*end::Input wrapper*/}
                      </div>
                      {/*end::Col*/}
                    </div>
                    {/*end::Input group*/}
                    {/*begin::Input group*/}
                    <div className="d-flex flex-stack">
                      {/*begin::Label*/}
                      <div className="me-5">
                        <label className="fs-6 fw-semibold form-label">
                          Save Card for further billing?
                        </label>
                        <div className="fs-7 fw-semibold text-muted">
                          If you need more info, please check budget planning
                        </div>
                      </div>
                      {/*end::Label*/}
                      {/*begin::Switch*/}
                      <label className="form-check form-switch form-check-custom form-check-solid">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue={1}
                          defaultChecked="checked"
                        />
                        <span className="form-check-label fw-semibold text-muted">
                          Save Card
                        </span>
                      </label>
                      {/*end::Switch*/}
                    </div>
                    {/*end::Input group*/}
                  </div>
                </div>
                {/*end::Step 4*/}
                {/*begin::Step 5*/}
                <div data-kt-stepper-element="content">
                  <div className="w-100 text-center">
                    {/*begin::Heading*/}
                    <h1 className="fw-bold text-gray-900 mb-3">Release!</h1>
                    {/*end::Heading*/}
                    {/*begin::Description*/}
                    <div className="text-muted fw-semibold fs-3">
                      Submit your app to kickstart your project.
                    </div>
                    {/*end::Description*/}
                    {/*begin::Illustration*/}
                    <div className="text-center px-4 py-15">
                      <img
                        src="https://preview.keenthemes.com/keen/demo3/assets/media/illustrations/sketchy-1/9.png"
                        alt=""
                        className="mw-100 mh-300px"
                      />
                    </div>
                    {/*end::Illustration*/}
                  </div>
                </div>
                {/*end::Step 5*/}
                {/*begin::Actions*/}
                <div className="d-flex flex-stack pt-10">
                  {/*begin::Wrapper*/}
                  <div className="me-2">
                    <button
                      type="button"
                      className="btn btn-lg btn-light-primary me-3"
                      data-kt-stepper-action="previous"
                    >
                      <i className="ki-duotone ki-arrow-left fs-3 me-1">
                        <span className="path1" />
                        <span className="path2" />
                      </i>{" "}
                      Back
                    </button>
                  </div>
                  {/*end::Wrapper*/}
                  {/*begin::Wrapper*/}
                  <div>
                    <button
                      type="button"
                      className="btn btn-lg btn-primary"
                      data-kt-stepper-action="submit"
                    >
                      <span className="indicator-label">
                        Submit
                        <i className="ki-duotone ki-arrow-right fs-3 ms-2 me-0">
                          <span className="path1" />
                          <span className="path2" />
                        </i>{" "}
                      </span>
                      <span className="indicator-progress">
                        Please wait...{" "}
                        <span className="spinner-border spinner-border-sm align-middle ms-2" />
                      </span>
                    </button>
                    <button
                      type="button"
                      className="btn btn-lg btn-primary"
                      data-kt-stepper-action="next"
                    >
                      Continue
                      <i className="ki-duotone ki-arrow-right fs-3 ms-1 me-0">
                        <span className="path1" />
                        <span className="path2" />
                      </i>{" "}
                    </button>
                  </div>
                  {/*end::Wrapper*/}
                </div>
                {/*end::Actions*/}
              </form>
              {/*end::Form*/}
            </div>
            {/*end::Content*/}
          </div>
          {/*end::Stepper*/}
        </div>
        {/*end::Modal body*/}
      </div>
      {/*end::Modal content*/}
    </div>
    {/*end::Modal dialog*/}
  </div>
  {/*end::Modal - Create App*/}
  {/*begin::Modal - Create Campaign*/}
  <div
    className="modal fade"
    id="kt_modal_create_campaign"
    tabIndex={-1}
    aria-hidden="true"
  >
    {/*begin::Modal dialog*/}
    <div className="modal-dialog modal-fullscreen p-9">
      {/*begin::Modal content*/}
      <div className="modal-content modal-rounded">
        {/*begin::Modal header*/}
        <div className="modal-header py-7 d-flex justify-content-between">
          {/*begin::Modal title*/}
          <h2>Create Campaign</h2>
          {/*end::Modal title*/}
          {/*begin::Close*/}
          <div
            className="btn btn-sm btn-icon btn-active-color-primary"
            data-bs-dismiss="modal"
          >
            <i className="ki-duotone ki-cross fs-1">
              <span className="path1" />
              <span className="path2" />
            </i>{" "}
          </div>
          {/*end::Close*/}
        </div>
        {/*begin::Modal header*/}
        {/*begin::Modal body*/}
        <div className="modal-body scroll-y m-5">
          {/*begin::Stepper*/}
          <div
            className="stepper stepper-links d-flex flex-column"
            id="kt_modal_create_campaign_stepper"
          >
            {/*begin::Nav*/}
            <div className="stepper-nav justify-content-center py-2">
              {/*begin::Step 1*/}
              <div
                className="stepper-item me-5 me-md-15 current"
                data-kt-stepper-element="nav"
              >
                <h3 className="stepper-title">Campaign Details</h3>
              </div>
              {/*end::Step 1*/}
              {/*begin::Step 2*/}
              <div
                className="stepper-item me-5 me-md-15"
                data-kt-stepper-element="nav"
              >
                <h3 className="stepper-title">Creative Uploads</h3>
              </div>
              {/*end::Step 2*/}
              {/*begin::Step 3*/}
              <div
                className="stepper-item me-5 me-md-15"
                data-kt-stepper-element="nav"
              >
                <h3 className="stepper-title">Audiences</h3>
              </div>
              {/*end::Step 3*/}
              {/*begin::Step 4*/}
              <div
                className="stepper-item me-5 me-md-15"
                data-kt-stepper-element="nav"
              >
                <h3 className="stepper-title">Budget Estimates</h3>
              </div>
              {/*end::Step 4*/}
              {/*begin::Step 5*/}
              <div className="stepper-item" data-kt-stepper-element="nav">
                <h3 className="stepper-title">Completed</h3>
              </div>
              {/*end::Step 5*/}
            </div>
            {/*end::Nav*/}
            {/*begin::Form*/}
            <form
              className="mx-auto w-100 mw-600px pt-15 pb-10"
              noValidate="novalidate"
              id="kt_modal_create_campaign_stepper_form"
            >
              {/*begin::Step 1*/}
              <div className="current" data-kt-stepper-element="content">
                {/*begin::Wrapper*/}
                <div className="w-100">
                  {/*begin::Heading*/}
                  <div className="pb-10 pb-lg-15">
                    {/*begin::Title*/}
                    <h2 className="fw-bold d-flex align-items-center text-gray-900">
                      Setup Campaign Details
                      <span
                        className="ms-1"
                        data-bs-toggle="tooltip"
                        title="Campaign name will be used as reference within your campaign reports"
                      >
                        <i className="ki-duotone ki-information-5 text-gray-500 fs-6">
                          <span className="path1" />
                          <span className="path2" />
                          <span className="path3" />
                        </i>
                      </span>{" "}
                    </h2>
                    {/*end::Title*/}
                    {/*begin::Notice*/}
                    <div className="text-muted fw-semibold fs-6">
                      If you need more info, please check out
                      <a href="#" className="link-primary fw-bold">
                        Help Page
                      </a>
                      .
                    </div>
                    {/*end::Notice*/}
                  </div>
                  {/*end::Heading*/}
                  {/*begin::Input group*/}
                  <div className="mb-10 fv-row">
                    {/*begin::Label*/}
                    <label className="required form-label mb-3">
                      Campaign Name
                    </label>
                    {/*end::Label*/}
                    {/*begin::Input*/}
                    <input
                      type="text"
                      className="form-control form-control-lg form-control-solid"
                      name="campaign_name"
                      placeholder=""
                      defaultValue=""
                    />
                    {/*end::Input*/}
                  </div>
                  {/*end::Input group*/}
                  {/*begin::Input group*/}
                  <div className="fv-row mb-10">
                    {/*begin::Label*/}
                    <label className="d-block fw-semibold fs-6 mb-5">
                      <span className="required">Company Logo</span>
                      <span
                        className="ms-1"
                        data-bs-toggle="tooltip"
                        title="E.g. Select a logo to represent the company that's running the campaign."
                      >
                        <i className="ki-duotone ki-information-5 text-gray-500 fs-6">
                          <span className="path1" />
                          <span className="path2" />
                          <span className="path3" />
                        </i>
                      </span>{" "}
                    </label>
                    {/*end::Label*/}
                    {/*begin::Image input placeholder*/}
                    <style
                      dangerouslySetInnerHTML={{
                        __html:
                          "\n                .image-input-placeholder {\n                    background-image: url('https://preview.keenthemes.com/keen/demo3/assets/media/svg/files/blank-image.svg');\n                }\n\n                [data-bs-theme=\"dark\"] .image-input-placeholder {\n                    background-image: url('https://preview.keenthemes.com/keen/demo3/assets/media/svg/files/blank-image-dark.svg');\n                }                \n            "
                      }}
                    />
                    {/*end::Image input placeholder*/}
                    {/*begin::Image input*/}
                    <div
                      className="image-input image-input-empty image-input-outline image-input-placeholder"
                      data-kt-image-input="true"
                    >
                      {/*begin::Preview existing avatar*/}
                      <div className="image-input-wrapper w-125px h-125px" />
                      {/*end::Preview existing avatar*/}
                      {/*begin::Label*/}
                      <label
                        className="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow"
                        data-kt-image-input-action="change"
                        data-bs-toggle="tooltip"
                        title="Change avatar"
                      >
                        <i className="ki-duotone ki-pencil fs-7">
                          <span className="path1" />
                          <span className="path2" />
                        </i>
                        {/*begin::Inputs*/}
                        <input
                          type="file"
                          name="avatar"
                          accept=".png, .jpg, .jpeg"
                        />
                        <input type="hidden" name="avatar_remove" />
                        {/*end::Inputs*/}
                      </label>
                      {/*end::Label*/}
                      {/*begin::Cancel*/}
                      <span
                        className="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow"
                        data-kt-image-input-action="cancel"
                        data-bs-toggle="tooltip"
                        title="Cancel avatar"
                      >
                        <i className="ki-duotone ki-cross fs-2">
                          <span className="path1" />
                          <span className="path2" />
                        </i>{" "}
                      </span>
                      {/*end::Cancel*/}
                      {/*begin::Remove*/}
                      <span
                        className="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow"
                        data-kt-image-input-action="remove"
                        data-bs-toggle="tooltip"
                        title="Remove avatar"
                      >
                        <i className="ki-duotone ki-cross fs-2">
                          <span className="path1" />
                          <span className="path2" />
                        </i>{" "}
                      </span>
                      {/*end::Remove*/}
                    </div>
                    {/*end::Image input*/}
                    {/*begin::Hint*/}
                    <div className="form-text">
                      Allowed file types: png, jpg, jpeg.
                    </div>
                    {/*end::Hint*/}
                  </div>
                  {/*end::Input group*/}
                  {/*begin::Input group*/}
                  <div className="mb-10">
                    {/*begin::Label*/}
                    <label className="required fw-semibold fs-6 mb-5">
                      Campaign Goal
                    </label>
                    {/*end::Label*/}
                    {/*begin::Roles*/}
                    {/*begin::Input row*/}
                    <div className="d-flex fv-row">
                      {/*begin::Radio*/}
                      <div className="form-check form-check-custom form-check-solid">
                        {/*begin::Input*/}
                        <input
                          className="form-check-input me-3"
                          name="user_role"
                          type="radio"
                          defaultValue={0}
                          id="kt_modal_update_role_option_0"
                          defaultChecked="checked"
                        />
                        {/*end::Input*/}
                        {/*begin::Label*/}
                        <label
                          className="form-check-label"
                          htmlFor="kt_modal_update_role_option_0"
                        >
                          <div className="fw-bold text-gray-800">
                            Get more visitors
                          </div>
                          <div className="text-gray-600">
                            Increase impression traffic onto the platform
                          </div>
                        </label>
                        {/*end::Label*/}
                      </div>
                      {/*end::Radio*/}
                    </div>
                    {/*end::Input row*/}
                    <div className="separator separator-dashed my-5" />{" "}
                    {/*begin::Input row*/}
                    <div className="d-flex fv-row">
                      {/*begin::Radio*/}
                      <div className="form-check form-check-custom form-check-solid">
                        {/*begin::Input*/}
                        <input
                          className="form-check-input me-3"
                          name="user_role"
                          type="radio"
                          defaultValue={1}
                          id="kt_modal_update_role_option_1"
                        />
                        {/*end::Input*/}
                        {/*begin::Label*/}
                        <label
                          className="form-check-label"
                          htmlFor="kt_modal_update_role_option_1"
                        >
                          <div className="fw-bold text-gray-800">
                            Get more messages on chat
                          </div>
                          <div className="text-gray-600">
                            Increase community interaction and communication
                          </div>
                        </label>
                        {/*end::Label*/}
                      </div>
                      {/*end::Radio*/}
                    </div>
                    {/*end::Input row*/}
                    <div className="separator separator-dashed my-5" />{" "}
                    {/*begin::Input row*/}
                    <div className="d-flex fv-row">
                      {/*begin::Radio*/}
                      <div className="form-check form-check-custom form-check-solid">
                        {/*begin::Input*/}
                        <input
                          className="form-check-input me-3"
                          name="user_role"
                          type="radio"
                          defaultValue={2}
                          id="kt_modal_update_role_option_2"
                        />
                        {/*end::Input*/}
                        {/*begin::Label*/}
                        <label
                          className="form-check-label"
                          htmlFor="kt_modal_update_role_option_2"
                        >
                          <div className="fw-bold text-gray-800">
                            Get more calls
                          </div>
                          <div className="text-gray-600">
                            Boost telecommunication feedback to provide precise
                            and accurate information
                          </div>
                        </label>
                        {/*end::Label*/}
                      </div>
                      {/*end::Radio*/}
                    </div>
                    {/*end::Input row*/}
                    <div className="separator separator-dashed my-5" />{" "}
                    {/*begin::Input row*/}
                    <div className="d-flex fv-row">
                      {/*begin::Radio*/}
                      <div className="form-check form-check-custom form-check-solid">
                        {/*begin::Input*/}
                        <input
                          className="form-check-input me-3"
                          name="user_role"
                          type="radio"
                          defaultValue={3}
                          id="kt_modal_update_role_option_3"
                        />
                        {/*end::Input*/}
                        {/*begin::Label*/}
                        <label
                          className="form-check-label"
                          htmlFor="kt_modal_update_role_option_3"
                        >
                          <div className="fw-bold text-gray-800">
                            Get more likes
                          </div>
                          <div className="text-gray-600">
                            Increase positive interactivity on social media
                            platforms
                          </div>
                        </label>
                        {/*end::Label*/}
                      </div>
                      {/*end::Radio*/}
                    </div>
                    {/*end::Input row*/}
                    <div className="separator separator-dashed my-5" />{" "}
                    {/*begin::Input row*/}
                    <div className="d-flex fv-row">
                      {/*begin::Radio*/}
                      <div className="form-check form-check-custom form-check-solid">
                        {/*begin::Input*/}
                        <input
                          className="form-check-input me-3"
                          name="user_role"
                          type="radio"
                          defaultValue={4}
                          id="kt_modal_update_role_option_4"
                        />
                        {/*end::Input*/}
                        {/*begin::Label*/}
                        <label
                          className="form-check-label"
                          htmlFor="kt_modal_update_role_option_4"
                        >
                          <div className="fw-bold text-gray-800">
                            Lead generation
                          </div>
                          <div className="text-gray-600">
                            Collect contact information for potential customers
                          </div>
                        </label>
                        {/*end::Label*/}
                      </div>
                      {/*end::Radio*/}
                    </div>
                    {/*end::Input row*/}
                    {/*end::Roles*/}
                  </div>
                  {/*end::Input group*/}
                </div>
                {/*end::Wrapper*/}
              </div>
              {/*end::Step 1*/}
              {/*begin::Step 2*/}
              <div data-kt-stepper-element="content">
                {/*begin::Wrapper*/}
                <div className="w-100">
                  {/*begin::Heading*/}
                  <div className="pb-10 pb-lg-12">
                    {/*begin::Title*/}
                    <h1 className="fw-bold text-gray-900">Upload Files</h1>
                    {/*end::Title*/}
                    {/*begin::Description*/}
                    <div className="text-muted fw-semibold fs-4">
                      If you need more info, please check
                      <a href="#" className="link-primary">
                        Campaign Guidelines
                      </a>
                    </div>
                    {/*end::Description*/}
                  </div>
                  {/*end::Heading*/}
                  {/*begin::Input group*/}
                  <div className="fv-row mb-10">
                    {/*begin::Dropzone*/}
                    <div
                      className="dropzone"
                      id="kt_modal_create_campaign_files_upload"
                    >
                      {/*begin::Message*/}
                      <div className="dz-message needsclick">
                        {/*begin::Icon*/}
                        <i className="ki-duotone ki-file-up fs-3hx text-primary">
                          <span className="path1" />
                          <span className="path2" />
                        </i>{" "}
                        {/*end::Icon*/}
                        {/*begin::Info*/}
                        <div className="ms-4">
                          <h3 className="dfs-3 fw-bold text-gray-900 mb-1">
                            Drop campaign files here or click to upload.
                          </h3>
                          <span className="fw-semibold fs-4 text-muted">
                            Upload up to 10 files
                          </span>
                        </div>
                        {/*end::Info*/}
                      </div>
                    </div>
                    {/*end::Dropzone*/}
                  </div>
                  {/*end::Input group*/}
                  {/*begin::Input group*/}
                  <div className="mb-10">
                    {/*begin::Label*/}
                    <label className="fs-6 fw-semibold mb-2">
                      Uploaded File
                    </label>
                    {/*End::Label*/}
                    {/*begin::Files*/}
                    <div className="mh-300px scroll-y me-n7 pe-7">
                      {/*begin::File*/}
                      <div className="d-flex flex-stack py-4 border border-top-0 border-left-0 border-right-0 border-dashed">
                        <div className="d-flex align-items-center">
                          {/*begin::Avatar*/}
                          <div className="symbol symbol-35px">
                            <img
                              src="https://preview.keenthemes.com/keen/demo3/assets/media/svg/files/pdf.svg"
                              alt="icon"
                            />
                          </div>
                          {/*end::Avatar*/}
                          {/*begin::Details*/}
                          <div className="ms-6">
                            <a
                              href="#"
                              className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                            >
                              Product Specifications
                            </a>
                            <div className="fw-semibold text-muted">230kb</div>
                          </div>
                          {/*end::Details*/}
                        </div>
                        {/*begin::Menu*/}
                        <div className="min-w-100px">
                          <select
                            className="form-select form-select-solid form-select-sm"
                            data-control="select2"
                            data-hide-search="true"
                            data-placeholder="Edit"
                          >
                            <option />
                            <option value={1}>Remove</option>
                            <option value={2}>Modify</option>
                            <option value={3}>Select</option>
                          </select>
                        </div>
                        {/*end::Menu*/}
                      </div>
                      {/*end::File*/}
                      {/*begin::File*/}
                      <div className="d-flex flex-stack py-4 border border-top-0 border-left-0 border-right-0 border-dashed">
                        <div className="d-flex align-items-center">
                          {/*begin::Avatar*/}
                          <div className="symbol symbol-35px">
                            <img
                              src="https://preview.keenthemes.com/keen/demo3/assets/media/svg/files/tif.svg"
                              alt="icon"
                            />
                          </div>
                          {/*end::Avatar*/}
                          {/*begin::Details*/}
                          <div className="ms-6">
                            <a
                              href="#"
                              className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                            >
                              Campaign Creative Poster
                            </a>
                            <div className="fw-semibold text-muted">2.4mb</div>
                          </div>
                          {/*end::Details*/}
                        </div>
                        {/*begin::Menu*/}
                        <div className="min-w-100px">
                          <select
                            className="form-select form-select-solid form-select-sm"
                            data-control="select2"
                            data-hide-search="true"
                            data-placeholder="Edit"
                          >
                            <option />
                            <option value={1}>Remove</option>
                            <option value={2}>Modify</option>
                            <option value={3}>Select</option>
                          </select>
                        </div>
                        {/*end::Menu*/}
                      </div>
                      {/*end::File*/}
                      {/*begin::File*/}
                      <div className="d-flex flex-stack py-4 border border-top-0 border-left-0 border-right-0 border-dashed">
                        <div className="d-flex align-items-center">
                          {/*begin::Avatar*/}
                          <div className="symbol symbol-35px">
                            <img
                              src="https://preview.keenthemes.com/keen/demo3/assets/media/svg/files/folder-document.svg"
                              alt="icon"
                            />
                          </div>
                          {/*end::Avatar*/}
                          {/*begin::Details*/}
                          <div className="ms-6">
                            <a
                              href="#"
                              className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                            >
                              Campaign Landing Page Source
                            </a>
                            <div className="fw-semibold text-muted">1.12mb</div>
                          </div>
                          {/*end::Details*/}
                        </div>
                        {/*begin::Menu*/}
                        <div className="min-w-100px">
                          <select
                            className="form-select form-select-solid form-select-sm"
                            data-control="select2"
                            data-hide-search="true"
                            data-placeholder="Edit"
                          >
                            <option />
                            <option value={1}>Remove</option>
                            <option value={2}>Modify</option>
                            <option value={3}>Select</option>
                          </select>
                        </div>
                        {/*end::Menu*/}
                      </div>
                      {/*end::File*/}
                      {/*begin::File*/}
                      <div className="d-flex flex-stack py-4 border border-top-0 border-left-0 border-right-0 border-dashed">
                        <div className="d-flex align-items-center">
                          {/*begin::Avatar*/}
                          <div className="symbol symbol-35px">
                            <img
                              src="https://preview.keenthemes.com/keen/demo3/assets/media/svg/files/css.svg"
                              alt="icon"
                            />
                          </div>
                          {/*end::Avatar*/}
                          {/*begin::Details*/}
                          <div className="ms-6">
                            <a
                              href="#"
                              className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                            >
                              Landing Page Styling
                            </a>
                            <div className="fw-semibold text-muted">85kb</div>
                          </div>
                          {/*end::Details*/}
                        </div>
                        {/*begin::Menu*/}
                        <div className="min-w-100px">
                          <select
                            className="form-select form-select-solid form-select-sm"
                            data-control="select2"
                            data-hide-search="true"
                            data-placeholder="Edit"
                          >
                            <option />
                            <option value={1}>Remove</option>
                            <option value={2}>Modify</option>
                            <option value={3}>Select</option>
                          </select>
                        </div>
                        {/*end::Menu*/}
                      </div>
                      {/*end::File*/}
                      {/*begin::File*/}
                      <div className="d-flex flex-stack py-4 border border-top-0 border-left-0 border-right-0 border-dashed">
                        <div className="d-flex align-items-center">
                          {/*begin::Avatar*/}
                          <div className="symbol symbol-35px">
                            <img
                              src="https://preview.keenthemes.com/keen/demo3/assets/media/svg/files/ai.svg"
                              alt="icon"
                            />
                          </div>
                          {/*end::Avatar*/}
                          {/*begin::Details*/}
                          <div className="ms-6">
                            <a
                              href="#"
                              className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                            >
                              Design Source Files
                            </a>
                            <div className="fw-semibold text-muted">48mb</div>
                          </div>
                          {/*end::Details*/}
                        </div>
                        {/*begin::Menu*/}
                        <div className="min-w-100px">
                          <select
                            className="form-select form-select-solid form-select-sm"
                            data-control="select2"
                            data-hide-search="true"
                            data-placeholder="Edit"
                          >
                            <option />
                            <option value={1}>Remove</option>
                            <option value={2}>Modify</option>
                            <option value={3}>Select</option>
                          </select>
                        </div>
                        {/*end::Menu*/}
                      </div>
                      {/*end::File*/}
                      {/*begin::File*/}
                      <div className="d-flex flex-stack py-4 ">
                        <div className="d-flex align-items-center">
                          {/*begin::Avatar*/}
                          <div className="symbol symbol-35px">
                            <img
                              src="https://preview.keenthemes.com/keen/demo3/assets/media/svg/files/doc.svg"
                              alt="icon"
                            />
                          </div>
                          {/*end::Avatar*/}
                          {/*begin::Details*/}
                          <div className="ms-6">
                            <a
                              href="#"
                              className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                            >
                              Campaign Plan Document
                            </a>
                            <div className="fw-semibold text-muted">27kb</div>
                          </div>
                          {/*end::Details*/}
                        </div>
                        {/*begin::Menu*/}
                        <div className="min-w-100px">
                          <select
                            className="form-select form-select-solid form-select-sm"
                            data-control="select2"
                            data-hide-search="true"
                            data-placeholder="Edit"
                          >
                            <option />
                            <option value={1}>Remove</option>
                            <option value={2}>Modify</option>
                            <option value={3}>Select</option>
                          </select>
                        </div>
                        {/*end::Menu*/}
                      </div>
                      {/*end::File*/}
                    </div>
                    {/*end::Files*/}
                  </div>
                  {/*end::Input group*/}
                </div>
                {/*end::Wrapper*/}
              </div>
              {/*end::Step 2*/}
              {/*begin::Step 3*/}
              <div data-kt-stepper-element="content">
                {/*begin::Wrapper*/}
                <div className="w-100">
                  {/*begin::Heading*/}
                  <div className="pb-10 pb-lg-12">
                    {/*begin::Title*/}
                    <h1 className="fw-bold text-gray-900">
                      Configure Audiences
                    </h1>
                    {/*end::Title*/}
                    {/*begin::Description*/}
                    <div className="text-muted fw-semibold fs-4">
                      If you need more info, please check
                      <a href="#" className="link-primary">
                        Campaign Guidelines
                      </a>
                    </div>
                    {/*end::Description*/}
                  </div>
                  {/*end::Heading*/}
                  {/*begin::Input group*/}
                  <div className="fv-row mb-10">
                    {/*begin::Label*/}
                    <label className="fs-6 fw-semibold mb-2">
                      Gender
                      <span
                        className="ms-1"
                        data-bs-toggle="tooltip"
                        title="Show your ads to either men or women, or select 'All' for both"
                      >
                        <i className="ki-duotone ki-information-5 text-gray-500 fs-6">
                          <span className="path1" />
                          <span className="path2" />
                          <span className="path3" />
                        </i>
                      </span>{" "}
                    </label>
                    {/*End::Label*/}
                    {/*begin::Row*/}
                    <div
                      className="row g-9"
                      data-kt-buttons="true"
                      data-kt-buttons-target="[data-kt-button='true']"
                    >
                      {/*begin::Col*/}
                      <div className="col">
                        {/*begin::Option*/}
                        <label
                          className="btn btn-outline btn-outline-dashed btn-active-light-primary active d-flex text-start p-6"
                          data-kt-button="true"
                        >
                          {/*begin::Radio*/}
                          <span className="form-check form-check-custom form-check-solid form-check-sm align-items-start mt-1">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="campaign_gender"
                              defaultValue={1}
                              defaultChecked="checked"
                            />
                          </span>
                          {/*end::Radio*/}
                          {/*begin::Info*/}
                          <span className="ms-5">
                            <span className="fs-4 fw-bold text-gray-800 d-block">
                              All
                            </span>
                          </span>
                          {/*end::Info*/}
                        </label>
                        {/*end::Option*/}
                      </div>
                      {/*end::Col*/}
                      {/*begin::Col*/}
                      <div className="col">
                        {/*begin::Option*/}
                        <label
                          className="btn btn-outline btn-outline-dashed btn-active-light-primary d-flex text-start p-6"
                          data-kt-button="true"
                        >
                          {/*begin::Radio*/}
                          <span className="form-check form-check-custom form-check-solid form-check-sm align-items-start mt-1">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="campaign_gender"
                              defaultValue={2}
                            />
                          </span>
                          {/*end::Radio*/}
                          {/*begin::Info*/}
                          <span className="ms-5">
                            <span className="fs-4 fw-bold text-gray-800 d-block">
                              Male
                            </span>
                          </span>
                          {/*end::Info*/}
                        </label>
                        {/*end::Option*/}
                      </div>
                      {/*end::Col*/}
                      {/*begin::Col*/}
                      <div className="col">
                        {/*begin::Option*/}
                        <label
                          className="btn btn-outline btn-outline-dashed btn-active-light-primary d-flex text-start p-6"
                          data-kt-button="true"
                        >
                          {/*begin::Radio*/}
                          <span className="form-check form-check-custom form-check-solid form-check-sm align-items-start mt-1">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="campaign_gender"
                              defaultValue={3}
                            />
                          </span>
                          {/*end::Radio*/}
                          {/*begin::Info*/}
                          <span className="ms-5">
                            <span className="fs-4 fw-bold text-gray-800 d-block">
                              Female
                            </span>
                          </span>
                          {/*end::Info*/}
                        </label>
                        {/*end::Option*/}
                      </div>
                      {/*end::Col*/}
                    </div>
                    {/*end::Row*/}
                  </div>
                  {/*end::Input group*/}
                  {/*begin::Input group*/}
                  <div className="fv-row mb-10">
                    {/*begin::Label*/}
                    <label className="fs-6 fw-semibold mb-2">
                      Age
                      <span
                        className="ms-1"
                        data-bs-toggle="tooltip"
                        title="Select the minimum and maximum age of the people who will find your ad relevant."
                      >
                        <i className="ki-duotone ki-information-5 text-gray-500 fs-6">
                          <span className="path1" />
                          <span className="path2" />
                          <span className="path3" />
                        </i>
                      </span>{" "}
                    </label>
                    {/*End::Label*/}
                    {/*begin::Slider*/}
                    <div className="d-flex flex-stack">
                      <div
                        id="kt_modal_create_campaign_age_min"
                        className="fs-7 fw-semibold text-muted"
                      />
                      <div
                        id="kt_modal_create_campaign_age_slider"
                        className="noUi-sm w-100 ms-5 me-8"
                      />
                      <div
                        id="kt_modal_create_campaign_age_max"
                        className="fs-7 fw-semibold text-muted"
                      />
                    </div>
                    {/*end::Slider*/}
                  </div>
                  {/*end::Input group*/}
                  {/*begin::Input group*/}
                  <div className="fv-row mb-10">
                    {/*begin::Label*/}
                    <label className="fs-6 fw-semibold mb-2">
                      Location
                      <span
                        className="ms-1"
                        data-bs-toggle="tooltip"
                        title="Enter one or more location points for more specific targeting."
                      >
                        <i className="ki-duotone ki-information-5 text-gray-500 fs-6">
                          <span className="path1" />
                          <span className="path2" />
                          <span className="path3" />
                        </i>
                      </span>{" "}
                    </label>
                    {/*End::Label*/}
                    {/*begin::Tagify*/}
                    <input
                      className="form-control d-flex align-items-center"
                      defaultValue=""
                      id="kt_modal_create_campaign_location"
                      data-kt-flags-path="/keen/demo3/assets/media/flags/"
                    />
                    {/*end::Tagify*/}
                  </div>
                  {/*end::Input group*/}
                </div>
                {/*end::Wrapper*/}
              </div>
              {/*end::Step 3*/}
              {/*begin::Step 4*/}
              <div data-kt-stepper-element="content">
                {/*begin::Wrapper*/}
                <div className="w-100">
                  {/*begin::Heading*/}
                  <div className="pb-10 pb-lg-12">
                    {/*begin::Title*/}
                    <h1 className="fw-bold text-gray-900">Budget Estimates</h1>
                    {/*end::Title*/}
                    {/*begin::Description*/}
                    <div className="text-muted fw-semibold fs-4">
                      If you need more info, please check
                      <a href="#" className="link-primary">
                        Campaign Guidelines
                      </a>
                    </div>
                    {/*end::Description*/}
                  </div>
                  {/*end::Heading*/}
                  {/*begin::Input group*/}
                  <div className="fv-row mb-10">
                    {/*begin::Label*/}
                    <label className="fs-6 fw-semibold mb-2">
                      Campaign Duration
                      <span
                        className="ms-1"
                        data-bs-toggle="tooltip"
                        title="Choose how long you want your ad to run for"
                      >
                        <i className="ki-duotone ki-information-5 text-gray-500 fs-6">
                          <span className="path1" />
                          <span className="path2" />
                          <span className="path3" />
                        </i>
                      </span>{" "}
                    </label>
                    {/*end::Label*/}
                    {/*begin::Duration option*/}
                    <div className="d-flex gap-9 mb-7">
                      {/*begin::Button*/}
                      <button
                        type="button"
                        className="btn btn-outline btn-outline-dashed btn-active-light-primary active"
                        id="kt_modal_create_campaign_duration_all"
                      >
                        Continuous duration
                        <br />
                        <span className="fs-7">
                          Your ad will run continuously for a daily budget.
                        </span>
                      </button>
                      {/*end::Button*/}
                      {/*begin::Button*/}
                      <button
                        type="button"
                        className="btn btn-outline btn-outline-dashed btn-active-light-primary btn-outline-default"
                        id="kt_modal_create_campaign_duration_fixed"
                      >
                        Fixed duration
                        <br />
                        <span className="fs-7">
                          Your ad will run on the specified dates only.
                        </span>
                      </button>
                      {/*end::Button*/}
                    </div>
                    {/*end::Duration option*/}
                    {/*begin::Datepicker*/}
                    <input
                      className="form-control form-control-solid d-none"
                      placeholder="Pick date & time"
                      id="kt_modal_create_campaign_datepicker"
                    />
                    {/*end::Datepicker*/}
                  </div>
                  {/*end::Input group*/}
                  {/*begin::Input group*/}
                  <div className="fv-row mb-10">
                    {/*begin::Label*/}
                    <label className="fs-6 fw-semibold mb-2">
                      Daily Budget
                      <span
                        className="ms-1"
                        data-bs-toggle="tooltip"
                        title="Choose the budget allocated for each day. Higher budget will generate better results"
                      >
                        <i className="ki-duotone ki-information-5 text-gray-500 fs-6">
                          <span className="path1" />
                          <span className="path2" />
                          <span className="path3" />
                        </i>
                      </span>{" "}
                    </label>
                    {/*end::Label*/}
                    {/*begin::Slider*/}
                    <div className="d-flex flex-column text-center">
                      <div className="d-flex align-items-start justify-content-center mb-7">
                        <span className="fw-bold fs-4 mt-1 me-2">$</span>
                        <span
                          className="fw-bold fs-3x"
                          id="kt_modal_create_campaign_budget_label"
                        />
                        <span className="fw-bold fs-3x">.00</span>
                      </div>
                      <div
                        id="kt_modal_create_campaign_budget_slider"
                        className="noUi-sm"
                      />
                    </div>
                    {/*end::Slider*/}
                  </div>
                  {/*end::Input group*/}
                </div>
                {/*end::Wrapper*/}
              </div>
              {/*end::Step 4*/}
              {/*begin::Step 5*/}
              <div data-kt-stepper-element="content">
                {/*begin::Wrapper*/}
                <div className="w-100">
                  {/*begin::Heading*/}
                  <div className="pb-12 text-center">
                    {/*begin::Title*/}
                    <h1 className="fw-bold text-gray-900">Campaign Created!</h1>
                    {/*end::Title*/}
                    {/*begin::Description*/}
                    <div className="fw-semibold text-muted fs-4">
                      You will receive an email with with the summary of your
                      newly created campaign!
                    </div>
                    {/*end::Description*/}
                  </div>
                  {/*end::Heading*/}
                  {/*begin::Actions*/}
                  <div className="d-flex flex-center pb-20">
                    <button
                      id="kt_modal_create_campaign_create_new"
                      type="button"
                      className="btn btn-lg btn-light me-3"
                      data-kt-element="complete-start"
                    >
                      Create New Campaign
                    </button>
                    <a
                      href="#"
                      className="btn btn-lg btn-primary"
                      data-bs-toggle="tooltip"
                      title="Coming Soon"
                    >
                      View Campaign
                    </a>
                  </div>
                  {/*end::Actions*/}
                  {/*begin::Illustration*/}
                  <div className="text-center px-4">
                    <img
                      src="https://preview.keenthemes.com/keen/demo3/assets/media/illustrations/sketchy-1/9.png"
                      alt=""
                      className="mww-100 mh-350px"
                    />
                  </div>
                  {/*end::Illustration*/}
                </div>
              </div>
              {/*end::Step 5*/}
              {/*begin::Actions*/}
              <div className="d-flex flex-stack pt-10">
                {/*begin::Wrapper*/}
                <div className="me-2">
                  <button
                    type="button"
                    className="btn btn-lg btn-light-primary me-3"
                    data-kt-stepper-action="previous"
                    data-kt-stepper-state="hide-on-last-step"
                  >
                    <i className="ki-duotone ki-arrow-left fs-3 me-1">
                      <span className="path1" />
                      <span className="path2" />
                    </i>{" "}
                    Back
                  </button>
                </div>
                {/*end::Wrapper*/}
                {/*begin::Wrapper*/}
                <div>
                  <button
                    type="button"
                    className="btn btn-lg btn-primary"
                    data-kt-stepper-action="submit"
                  >
                    <span className="indicator-label">
                      Submit
                      <i className="ki-duotone ki-arrow-right fs-3 ms-2 me-0">
                        <span className="path1" />
                        <span className="path2" />
                      </i>{" "}
                    </span>
                    <span className="indicator-progress">
                      Please wait...{" "}
                      <span className="spinner-border spinner-border-sm align-middle ms-2" />
                    </span>
                  </button>
                  <button
                    type="button"
                    className="btn btn-lg btn-primary"
                    data-kt-stepper-action="next"
                  >
                    Continue
                    <i className="ki-duotone ki-arrow-right fs-3 ms-1 me-0">
                      <span className="path1" />
                      <span className="path2" />
                    </i>{" "}
                  </button>
                </div>
                {/*end::Wrapper*/}
              </div>
              {/*end::Actions*/}
            </form>
            {/*end::Form*/}
          </div>
          {/*end::Stepper*/}
        </div>
        {/*begin::Modal body*/}
      </div>
    </div>
  </div>
  {/*end::Modal - Create Campaign*/}
  {/*begin::Modal - Users Search*/}
  <div
    className="modal fade"
    id="kt_modal_users_search"
    tabIndex={-1}
    aria-hidden="true"
  >
    {/*begin::Modal dialog*/}
    <div className="modal-dialog modal-dialog-centered mw-650px">
      {/*begin::Modal content*/}
      <div className="modal-content">
        {/*begin::Modal header*/}
        <div className="modal-header pb-0 border-0 justify-content-end">
          {/*begin::Close*/}
          <div
            className="btn btn-sm btn-icon btn-active-color-primary"
            data-bs-dismiss="modal"
          >
            <i className="ki-duotone ki-cross fs-1">
              <span className="path1" />
              <span className="path2" />
            </i>{" "}
          </div>
          {/*end::Close*/}
        </div>
        {/*begin::Modal header*/}
        {/*begin::Modal body*/}
        <div className="modal-body scroll-y mx-5 mx-xl-18 pt-0 pb-15">
          {/*begin::Content*/}
          <div className="text-center mb-13">
            <h1 className="mb-3">Search Users</h1>
            <div className="text-muted fw-semibold fs-5">
              Invite Collaborators To Your Project
            </div>
          </div>
          {/*end::Content*/}
          {/*begin::Search*/}
          <div
            id="kt_modal_users_search_handler"
            data-kt-search-keypress="true"
            data-kt-search-min-length={2}
            data-kt-search-enter="enter"
            data-kt-search-layout="inline"
          >
            {/*begin::Form*/}
            <form
              data-kt-search-element="form"
              className="w-100 position-relative mb-5"
              autoComplete="off"
            >
              {/*begin::Hidden input(Added to disable form autocomplete)*/}
              <input type="hidden" />
              {/*end::Hidden input*/}
              {/*begin::Icon*/}
              <i className="ki-duotone ki-magnifier fs-2 fs-lg-1 text-gray-500 position-absolute top-50 ms-5 translate-middle-y">
                <span className="path1" />
                <span className="path2" />
              </i>{" "}
              {/*end::Icon*/}
              {/*begin::Input*/}
              <input
                type="text"
                className="form-control form-control-lg form-control-solid px-15"
                name="search"
                defaultValue=""
                placeholder="Search by username, full name or email..."
                data-kt-search-element="input"
              />
              {/*end::Input*/}
              {/*begin::Spinner*/}
              <span
                className="position-absolute top-50 end-0 translate-middle-y lh-0 d-none me-5"
                data-kt-search-element="spinner"
              >
                <span className="spinner-border h-15px w-15px align-middle text-muted" />
              </span>
              {/*end::Spinner*/}
              {/*begin::Reset*/}
              <span
                className="btn btn-flush btn-active-color-primary position-absolute top-50 end-0 translate-middle-y lh-0 me-5 d-none"
                data-kt-search-element="clear"
              >
                <i className="ki-duotone ki-cross fs-2 fs-lg-1 me-0">
                  <span className="path1" />
                  <span className="path2" />
                </i>{" "}
              </span>
              {/*end::Reset*/}
            </form>
            {/*end::Form*/}
            {/*begin::Wrapper*/}
            <div className="py-5">
              {/*begin::Suggestions*/}
              <div data-kt-search-element="suggestions">
                {/*begin::Heading*/}
                <h3 className="fw-semibold mb-5">Recently searched:</h3>
                {/*end::Heading*/}
                {/*begin::Users*/}
                <div className="mh-375px scroll-y me-n7 pe-7">
                  {/*begin::User*/}
                  <a
                    href="#"
                    className="d-flex align-items-center p-3 rounded bg-state-light bg-state-opacity-50 mb-1"
                  >
                    {/*begin::Avatar*/}
                    <div className="symbol symbol-35px symbol-circle me-5">
                      <img
                        alt="Pic"
                        src="https://preview.keenthemes.com/keen/demo3/assets/media/avatars/300-6.jpg"
                      />
                    </div>
                    {/*end::Avatar*/}
                    {/*begin::Info*/}
                    <div className="fw-semibold">
                      <span className="fs-6 text-gray-800 me-2">
                        Emma Smith
                      </span>
                      <span className="badge badge-light">Art Director</span>
                    </div>
                    {/*end::Info*/}
                  </a>
                  {/*end::User*/}
                  {/*begin::User*/}
                  <a
                    href="#"
                    className="d-flex align-items-center p-3 rounded bg-state-light bg-state-opacity-50 mb-1"
                  >
                    {/*begin::Avatar*/}
                    <div className="symbol symbol-35px symbol-circle me-5">
                      <span className="symbol-label bg-light-danger text-danger fw-semibold">
                        M{" "}
                      </span>
                    </div>
                    {/*end::Avatar*/}
                    {/*begin::Info*/}
                    <div className="fw-semibold">
                      <span className="fs-6 text-gray-800 me-2">
                        Melody Macy
                      </span>
                      <span className="badge badge-light">
                        Marketing Analytic
                      </span>
                    </div>
                    {/*end::Info*/}
                  </a>
                  {/*end::User*/}
                  {/*begin::User*/}
                  <a
                    href="#"
                    className="d-flex align-items-center p-3 rounded bg-state-light bg-state-opacity-50 mb-1"
                  >
                    {/*begin::Avatar*/}
                    <div className="symbol symbol-35px symbol-circle me-5">
                      <img
                        alt="Pic"
                        src="https://preview.keenthemes.com/keen/demo3/assets/media/avatars/300-1.jpg"
                      />
                    </div>
                    {/*end::Avatar*/}
                    {/*begin::Info*/}
                    <div className="fw-semibold">
                      <span className="fs-6 text-gray-800 me-2">Max Smith</span>
                      <span className="badge badge-light">
                        Software Enginer
                      </span>
                    </div>
                    {/*end::Info*/}
                  </a>
                  {/*end::User*/}
                  {/*begin::User*/}
                  <a
                    href="#"
                    className="d-flex align-items-center p-3 rounded bg-state-light bg-state-opacity-50 mb-1"
                  >
                    {/*begin::Avatar*/}
                    <div className="symbol symbol-35px symbol-circle me-5">
                      <img
                        alt="Pic"
                        src="https://preview.keenthemes.com/keen/demo3/assets/media/avatars/300-5.jpg"
                      />
                    </div>
                    {/*end::Avatar*/}
                    {/*begin::Info*/}
                    <div className="fw-semibold">
                      <span className="fs-6 text-gray-800 me-2">Sean Bean</span>
                      <span className="badge badge-light">Web Developer</span>
                    </div>
                    {/*end::Info*/}
                  </a>
                  {/*end::User*/}
                  {/*begin::User*/}
                  <a
                    href="#"
                    className="d-flex align-items-center p-3 rounded bg-state-light bg-state-opacity-50 mb-1"
                  >
                    {/*begin::Avatar*/}
                    <div className="symbol symbol-35px symbol-circle me-5">
                      <img
                        alt="Pic"
                        src="https://preview.keenthemes.com/keen/demo3/assets/media/avatars/300-25.jpg"
                      />
                    </div>
                    {/*end::Avatar*/}
                    {/*begin::Info*/}
                    <div className="fw-semibold">
                      <span className="fs-6 text-gray-800 me-2">Brian Cox</span>
                      <span className="badge badge-light">UI/UX Designer</span>
                    </div>
                    {/*end::Info*/}
                  </a>
                  {/*end::User*/}
                </div>
                {/*end::Users*/}
              </div>
              {/*end::Suggestions*/}
              {/*begin::Results(add d-none to below element to hide the users list by default)*/}
              <div data-kt-search-element="results" className="d-none">
                {/*begin::Users*/}
                <div className="mh-375px scroll-y me-n7 pe-7">
                  {/*begin::User*/}
                  <div
                    className="rounded d-flex flex-stack bg-active-lighten p-4"
                    data-user-id={0}
                  >
                    {/*begin::Details*/}
                    <div className="d-flex align-items-center">
                      {/*begin::Checkbox*/}
                      <label className="form-check form-check-custom form-check-solid me-5">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          name="users"
                          data-kt-check="true"
                          data-kt-check-target="[data-user-id='0']"
                          defaultValue={0}
                        />
                      </label>
                      {/*end::Checkbox*/}
                      {/*begin::Avatar*/}
                      <div className="symbol symbol-35px symbol-circle">
                        <img
                          alt="Pic"
                          src="https://preview.keenthemes.com/keen/demo3/assets/media/avatars/300-6.jpg"
                        />
                      </div>
                      {/*end::Avatar*/}
                      {/*begin::Details*/}
                      <div className="ms-5">
                        <a
                          href="#"
                          className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                        >
                          Emma Smith
                        </a>
                        <div className="fw-semibold text-muted">
                          smith@kpmg.com
                        </div>
                      </div>
                      {/*end::Details*/}
                    </div>
                    {/*end::Details*/}
                    {/*begin::Access menu*/}
                    <div className="ms-2 w-100px">
                      <select
                        className="form-select form-select-solid form-select-sm"
                        data-control="select2"
                        data-hide-search="true"
                      >
                        <option value={1}>Guest</option>
                        <option value={2} selected="">
                          Owner
                        </option>
                        <option value={3}>Can Edit</option>
                      </select>
                    </div>
                    {/*end::Access menu*/}
                  </div>
                  {/*end::User*/}
                  {/*begin::Separator*/}
                  <div className="border-bottom border-gray-300 border-bottom-dashed" />
                  {/*end::Separator*/}
                  {/*begin::User*/}
                  <div
                    className="rounded d-flex flex-stack bg-active-lighten p-4"
                    data-user-id={1}
                  >
                    {/*begin::Details*/}
                    <div className="d-flex align-items-center">
                      {/*begin::Checkbox*/}
                      <label className="form-check form-check-custom form-check-solid me-5">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          name="users"
                          data-kt-check="true"
                          data-kt-check-target="[data-user-id='1']"
                          defaultValue={1}
                        />
                      </label>
                      {/*end::Checkbox*/}
                      {/*begin::Avatar*/}
                      <div className="symbol symbol-35px symbol-circle">
                        <span className="symbol-label bg-light-danger text-danger fw-semibold">
                          M{" "}
                        </span>
                      </div>
                      {/*end::Avatar*/}
                      {/*begin::Details*/}
                      <div className="ms-5">
                        <a
                          href="#"
                          className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                        >
                          Melody Macy
                        </a>
                        <div className="fw-semibold text-muted">
                          melody@altbox.com
                        </div>
                      </div>
                      {/*end::Details*/}
                    </div>
                    {/*end::Details*/}
                    {/*begin::Access menu*/}
                    <div className="ms-2 w-100px">
                      <select
                        className="form-select form-select-solid form-select-sm"
                        data-control="select2"
                        data-hide-search="true"
                      >
                        <option value={1} selected="">
                          Guest
                        </option>
                        <option value={2}>Owner</option>
                        <option value={3}>Can Edit</option>
                      </select>
                    </div>
                    {/*end::Access menu*/}
                  </div>
                  {/*end::User*/}
                  {/*begin::Separator*/}
                  <div className="border-bottom border-gray-300 border-bottom-dashed" />
                  {/*end::Separator*/}
                  {/*begin::User*/}
                  <div
                    className="rounded d-flex flex-stack bg-active-lighten p-4"
                    data-user-id={2}
                  >
                    {/*begin::Details*/}
                    <div className="d-flex align-items-center">
                      {/*begin::Checkbox*/}
                      <label className="form-check form-check-custom form-check-solid me-5">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          name="users"
                          data-kt-check="true"
                          data-kt-check-target="[data-user-id='2']"
                          defaultValue={2}
                        />
                      </label>
                      {/*end::Checkbox*/}
                      {/*begin::Avatar*/}
                      <div className="symbol symbol-35px symbol-circle">
                        <img
                          alt="Pic"
                          src="https://preview.keenthemes.com/keen/demo3/assets/media/avatars/300-1.jpg"
                        />
                      </div>
                      {/*end::Avatar*/}
                      {/*begin::Details*/}
                      <div className="ms-5">
                        <a
                          href="#"
                          className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                        >
                          Max Smith
                        </a>
                        <div className="fw-semibold text-muted">max@kt.com</div>
                      </div>
                      {/*end::Details*/}
                    </div>
                    {/*end::Details*/}
                    {/*begin::Access menu*/}
                    <div className="ms-2 w-100px">
                      <select
                        className="form-select form-select-solid form-select-sm"
                        data-control="select2"
                        data-hide-search="true"
                      >
                        <option value={1}>Guest</option>
                        <option value={2}>Owner</option>
                        <option value={3} selected="">
                          Can Edit
                        </option>
                      </select>
                    </div>
                    {/*end::Access menu*/}
                  </div>
                  {/*end::User*/}
                  {/*begin::Separator*/}
                  <div className="border-bottom border-gray-300 border-bottom-dashed" />
                  {/*end::Separator*/}
                  {/*begin::User*/}
                  <div
                    className="rounded d-flex flex-stack bg-active-lighten p-4"
                    data-user-id={3}
                  >
                    {/*begin::Details*/}
                    <div className="d-flex align-items-center">
                      {/*begin::Checkbox*/}
                      <label className="form-check form-check-custom form-check-solid me-5">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          name="users"
                          data-kt-check="true"
                          data-kt-check-target="[data-user-id='3']"
                          defaultValue={3}
                        />
                      </label>
                      {/*end::Checkbox*/}
                      {/*begin::Avatar*/}
                      <div className="symbol symbol-35px symbol-circle">
                        <img
                          alt="Pic"
                          src="https://preview.keenthemes.com/keen/demo3/assets/media/avatars/300-5.jpg"
                        />
                      </div>
                      {/*end::Avatar*/}
                      {/*begin::Details*/}
                      <div className="ms-5">
                        <a
                          href="#"
                          className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                        >
                          Sean Bean
                        </a>
                        <div className="fw-semibold text-muted">
                          sean@dellito.com
                        </div>
                      </div>
                      {/*end::Details*/}
                    </div>
                    {/*end::Details*/}
                    {/*begin::Access menu*/}
                    <div className="ms-2 w-100px">
                      <select
                        className="form-select form-select-solid form-select-sm"
                        data-control="select2"
                        data-hide-search="true"
                      >
                        <option value={1}>Guest</option>
                        <option value={2} selected="">
                          Owner
                        </option>
                        <option value={3}>Can Edit</option>
                      </select>
                    </div>
                    {/*end::Access menu*/}
                  </div>
                  {/*end::User*/}
                  {/*begin::Separator*/}
                  <div className="border-bottom border-gray-300 border-bottom-dashed" />
                  {/*end::Separator*/}
                  {/*begin::User*/}
                  <div
                    className="rounded d-flex flex-stack bg-active-lighten p-4"
                    data-user-id={4}
                  >
                    {/*begin::Details*/}
                    <div className="d-flex align-items-center">
                      {/*begin::Checkbox*/}
                      <label className="form-check form-check-custom form-check-solid me-5">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          name="users"
                          data-kt-check="true"
                          data-kt-check-target="[data-user-id='4']"
                          defaultValue={4}
                        />
                      </label>
                      {/*end::Checkbox*/}
                      {/*begin::Avatar*/}
                      <div className="symbol symbol-35px symbol-circle">
                        <img
                          alt="Pic"
                          src="https://preview.keenthemes.com/keen/demo3/assets/media/avatars/300-25.jpg"
                        />
                      </div>
                      {/*end::Avatar*/}
                      {/*begin::Details*/}
                      <div className="ms-5">
                        <a
                          href="#"
                          className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                        >
                          Brian Cox
                        </a>
                        <div className="fw-semibold text-muted">
                          brian@exchange.com
                        </div>
                      </div>
                      {/*end::Details*/}
                    </div>
                    {/*end::Details*/}
                    {/*begin::Access menu*/}
                    <div className="ms-2 w-100px">
                      <select
                        className="form-select form-select-solid form-select-sm"
                        data-control="select2"
                        data-hide-search="true"
                      >
                        <option value={1}>Guest</option>
                        <option value={2}>Owner</option>
                        <option value={3} selected="">
                          Can Edit
                        </option>
                      </select>
                    </div>
                    {/*end::Access menu*/}
                  </div>
                  {/*end::User*/}
                  {/*begin::Separator*/}
                  <div className="border-bottom border-gray-300 border-bottom-dashed" />
                  {/*end::Separator*/}
                  {/*begin::User*/}
                  <div
                    className="rounded d-flex flex-stack bg-active-lighten p-4"
                    data-user-id={5}
                  >
                    {/*begin::Details*/}
                    <div className="d-flex align-items-center">
                      {/*begin::Checkbox*/}
                      <label className="form-check form-check-custom form-check-solid me-5">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          name="users"
                          data-kt-check="true"
                          data-kt-check-target="[data-user-id='5']"
                          defaultValue={5}
                        />
                      </label>
                      {/*end::Checkbox*/}
                      {/*begin::Avatar*/}
                      <div className="symbol symbol-35px symbol-circle">
                        <span className="symbol-label bg-light-warning text-warning fw-semibold">
                          C{" "}
                        </span>
                      </div>
                      {/*end::Avatar*/}
                      {/*begin::Details*/}
                      <div className="ms-5">
                        <a
                          href="#"
                          className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                        >
                          Mikaela Collins
                        </a>
                        <div className="fw-semibold text-muted">
                          mik@pex.com
                        </div>
                      </div>
                      {/*end::Details*/}
                    </div>
                    {/*end::Details*/}
                    {/*begin::Access menu*/}
                    <div className="ms-2 w-100px">
                      <select
                        className="form-select form-select-solid form-select-sm"
                        data-control="select2"
                        data-hide-search="true"
                      >
                        <option value={1}>Guest</option>
                        <option value={2} selected="">
                          Owner
                        </option>
                        <option value={3}>Can Edit</option>
                      </select>
                    </div>
                    {/*end::Access menu*/}
                  </div>
                  {/*end::User*/}
                  {/*begin::Separator*/}
                  <div className="border-bottom border-gray-300 border-bottom-dashed" />
                  {/*end::Separator*/}
                  {/*begin::User*/}
                  <div
                    className="rounded d-flex flex-stack bg-active-lighten p-4"
                    data-user-id={6}
                  >
                    {/*begin::Details*/}
                    <div className="d-flex align-items-center">
                      {/*begin::Checkbox*/}
                      <label className="form-check form-check-custom form-check-solid me-5">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          name="users"
                          data-kt-check="true"
                          data-kt-check-target="[data-user-id='6']"
                          defaultValue={6}
                        />
                      </label>
                      {/*end::Checkbox*/}
                      {/*begin::Avatar*/}
                      <div className="symbol symbol-35px symbol-circle">
                        <img
                          alt="Pic"
                          src="https://preview.keenthemes.com/keen/demo3/assets/media/avatars/300-9.jpg"
                        />
                      </div>
                      {/*end::Avatar*/}
                      {/*begin::Details*/}
                      <div className="ms-5">
                        <a
                          href="#"
                          className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                        >
                          Francis Mitcham
                        </a>
                        <div className="fw-semibold text-muted">
                          f.mit@kpmg.com
                        </div>
                      </div>
                      {/*end::Details*/}
                    </div>
                    {/*end::Details*/}
                    {/*begin::Access menu*/}
                    <div className="ms-2 w-100px">
                      <select
                        className="form-select form-select-solid form-select-sm"
                        data-control="select2"
                        data-hide-search="true"
                      >
                        <option value={1}>Guest</option>
                        <option value={2}>Owner</option>
                        <option value={3} selected="">
                          Can Edit
                        </option>
                      </select>
                    </div>
                    {/*end::Access menu*/}
                  </div>
                  {/*end::User*/}
                  {/*begin::Separator*/}
                  <div className="border-bottom border-gray-300 border-bottom-dashed" />
                  {/*end::Separator*/}
                  {/*begin::User*/}
                  <div
                    className="rounded d-flex flex-stack bg-active-lighten p-4"
                    data-user-id={7}
                  >
                    {/*begin::Details*/}
                    <div className="d-flex align-items-center">
                      {/*begin::Checkbox*/}
                      <label className="form-check form-check-custom form-check-solid me-5">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          name="users"
                          data-kt-check="true"
                          data-kt-check-target="[data-user-id='7']"
                          defaultValue={7}
                        />
                      </label>
                      {/*end::Checkbox*/}
                      {/*begin::Avatar*/}
                      <div className="symbol symbol-35px symbol-circle">
                        <span className="symbol-label bg-light-danger text-danger fw-semibold">
                          O{" "}
                        </span>
                      </div>
                      {/*end::Avatar*/}
                      {/*begin::Details*/}
                      <div className="ms-5">
                        <a
                          href="#"
                          className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                        >
                          Olivia Wild
                        </a>
                        <div className="fw-semibold text-muted">
                          olivia@corpmail.com
                        </div>
                      </div>
                      {/*end::Details*/}
                    </div>
                    {/*end::Details*/}
                    {/*begin::Access menu*/}
                    <div className="ms-2 w-100px">
                      <select
                        className="form-select form-select-solid form-select-sm"
                        data-control="select2"
                        data-hide-search="true"
                      >
                        <option value={1}>Guest</option>
                        <option value={2} selected="">
                          Owner
                        </option>
                        <option value={3}>Can Edit</option>
                      </select>
                    </div>
                    {/*end::Access menu*/}
                  </div>
                  {/*end::User*/}
                  {/*begin::Separator*/}
                  <div className="border-bottom border-gray-300 border-bottom-dashed" />
                  {/*end::Separator*/}
                  {/*begin::User*/}
                  <div
                    className="rounded d-flex flex-stack bg-active-lighten p-4"
                    data-user-id={8}
                  >
                    {/*begin::Details*/}
                    <div className="d-flex align-items-center">
                      {/*begin::Checkbox*/}
                      <label className="form-check form-check-custom form-check-solid me-5">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          name="users"
                          data-kt-check="true"
                          data-kt-check-target="[data-user-id='8']"
                          defaultValue={8}
                        />
                      </label>
                      {/*end::Checkbox*/}
                      {/*begin::Avatar*/}
                      <div className="symbol symbol-35px symbol-circle">
                        <span className="symbol-label bg-light-primary text-primary fw-semibold">
                          N{" "}
                        </span>
                      </div>
                      {/*end::Avatar*/}
                      {/*begin::Details*/}
                      <div className="ms-5">
                        <a
                          href="#"
                          className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                        >
                          Neil Owen
                        </a>
                        <div className="fw-semibold text-muted">
                          owen.neil@gmail.com
                        </div>
                      </div>
                      {/*end::Details*/}
                    </div>
                    {/*end::Details*/}
                    {/*begin::Access menu*/}
                    <div className="ms-2 w-100px">
                      <select
                        className="form-select form-select-solid form-select-sm"
                        data-control="select2"
                        data-hide-search="true"
                      >
                        <option value={1} selected="">
                          Guest
                        </option>
                        <option value={2}>Owner</option>
                        <option value={3}>Can Edit</option>
                      </select>
                    </div>
                    {/*end::Access menu*/}
                  </div>
                  {/*end::User*/}
                  {/*begin::Separator*/}
                  <div className="border-bottom border-gray-300 border-bottom-dashed" />
                  {/*end::Separator*/}
                  {/*begin::User*/}
                  <div
                    className="rounded d-flex flex-stack bg-active-lighten p-4"
                    data-user-id={9}
                  >
                    {/*begin::Details*/}
                    <div className="d-flex align-items-center">
                      {/*begin::Checkbox*/}
                      <label className="form-check form-check-custom form-check-solid me-5">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          name="users"
                          data-kt-check="true"
                          data-kt-check-target="[data-user-id='9']"
                          defaultValue={9}
                        />
                      </label>
                      {/*end::Checkbox*/}
                      {/*begin::Avatar*/}
                      <div className="symbol symbol-35px symbol-circle">
                        <img
                          alt="Pic"
                          src="https://preview.keenthemes.com/keen/demo3/assets/media/avatars/300-23.jpg"
                        />
                      </div>
                      {/*end::Avatar*/}
                      {/*begin::Details*/}
                      <div className="ms-5">
                        <a
                          href="#"
                          className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                        >
                          Dan Wilson
                        </a>
                        <div className="fw-semibold text-muted">
                          dam@consilting.com
                        </div>
                      </div>
                      {/*end::Details*/}
                    </div>
                    {/*end::Details*/}
                    {/*begin::Access menu*/}
                    <div className="ms-2 w-100px">
                      <select
                        className="form-select form-select-solid form-select-sm"
                        data-control="select2"
                        data-hide-search="true"
                      >
                        <option value={1}>Guest</option>
                        <option value={2}>Owner</option>
                        <option value={3} selected="">
                          Can Edit
                        </option>
                      </select>
                    </div>
                    {/*end::Access menu*/}
                  </div>
                  {/*end::User*/}
                  {/*begin::Separator*/}
                  <div className="border-bottom border-gray-300 border-bottom-dashed" />
                  {/*end::Separator*/}
                  {/*begin::User*/}
                  <div
                    className="rounded d-flex flex-stack bg-active-lighten p-4"
                    data-user-id={10}
                  >
                    {/*begin::Details*/}
                    <div className="d-flex align-items-center">
                      {/*begin::Checkbox*/}
                      <label className="form-check form-check-custom form-check-solid me-5">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          name="users"
                          data-kt-check="true"
                          data-kt-check-target="[data-user-id='10']"
                          defaultValue={10}
                        />
                      </label>
                      {/*end::Checkbox*/}
                      {/*begin::Avatar*/}
                      <div className="symbol symbol-35px symbol-circle">
                        <span className="symbol-label bg-light-danger text-danger fw-semibold">
                          E{" "}
                        </span>
                      </div>
                      {/*end::Avatar*/}
                      {/*begin::Details*/}
                      <div className="ms-5">
                        <a
                          href="#"
                          className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                        >
                          Emma Bold
                        </a>
                        <div className="fw-semibold text-muted">
                          emma@intenso.com
                        </div>
                      </div>
                      {/*end::Details*/}
                    </div>
                    {/*end::Details*/}
                    {/*begin::Access menu*/}
                    <div className="ms-2 w-100px">
                      <select
                        className="form-select form-select-solid form-select-sm"
                        data-control="select2"
                        data-hide-search="true"
                      >
                        <option value={1}>Guest</option>
                        <option value={2} selected="">
                          Owner
                        </option>
                        <option value={3}>Can Edit</option>
                      </select>
                    </div>
                    {/*end::Access menu*/}
                  </div>
                  {/*end::User*/}
                  {/*begin::Separator*/}
                  <div className="border-bottom border-gray-300 border-bottom-dashed" />
                  {/*end::Separator*/}
                  {/*begin::User*/}
                  <div
                    className="rounded d-flex flex-stack bg-active-lighten p-4"
                    data-user-id={11}
                  >
                    {/*begin::Details*/}
                    <div className="d-flex align-items-center">
                      {/*begin::Checkbox*/}
                      <label className="form-check form-check-custom form-check-solid me-5">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          name="users"
                          data-kt-check="true"
                          data-kt-check-target="[data-user-id='11']"
                          defaultValue={11}
                        />
                      </label>
                      {/*end::Checkbox*/}
                      {/*begin::Avatar*/}
                      <div className="symbol symbol-35px symbol-circle">
                        <img
                          alt="Pic"
                          src="https://preview.keenthemes.com/keen/demo3/assets/media/avatars/300-12.jpg"
                        />
                      </div>
                      {/*end::Avatar*/}
                      {/*begin::Details*/}
                      <div className="ms-5">
                        <a
                          href="#"
                          className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                        >
                          Ana Crown
                        </a>
                        <div className="fw-semibold text-muted">
                          ana.cf@limtel.com
                        </div>
                      </div>
                      {/*end::Details*/}
                    </div>
                    {/*end::Details*/}
                    {/*begin::Access menu*/}
                    <div className="ms-2 w-100px">
                      <select
                        className="form-select form-select-solid form-select-sm"
                        data-control="select2"
                        data-hide-search="true"
                      >
                        <option value={1} selected="">
                          Guest
                        </option>
                        <option value={2}>Owner</option>
                        <option value={3}>Can Edit</option>
                      </select>
                    </div>
                    {/*end::Access menu*/}
                  </div>
                  {/*end::User*/}
                  {/*begin::Separator*/}
                  <div className="border-bottom border-gray-300 border-bottom-dashed" />
                  {/*end::Separator*/}
                  {/*begin::User*/}
                  <div
                    className="rounded d-flex flex-stack bg-active-lighten p-4"
                    data-user-id={12}
                  >
                    {/*begin::Details*/}
                    <div className="d-flex align-items-center">
                      {/*begin::Checkbox*/}
                      <label className="form-check form-check-custom form-check-solid me-5">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          name="users"
                          data-kt-check="true"
                          data-kt-check-target="[data-user-id='12']"
                          defaultValue={12}
                        />
                      </label>
                      {/*end::Checkbox*/}
                      {/*begin::Avatar*/}
                      <div className="symbol symbol-35px symbol-circle">
                        <span className="symbol-label bg-light-info text-info fw-semibold">
                          A{" "}
                        </span>
                      </div>
                      {/*end::Avatar*/}
                      {/*begin::Details*/}
                      <div className="ms-5">
                        <a
                          href="#"
                          className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                        >
                          Robert Doe
                        </a>
                        <div className="fw-semibold text-muted">
                          robert@benko.com
                        </div>
                      </div>
                      {/*end::Details*/}
                    </div>
                    {/*end::Details*/}
                    {/*begin::Access menu*/}
                    <div className="ms-2 w-100px">
                      <select
                        className="form-select form-select-solid form-select-sm"
                        data-control="select2"
                        data-hide-search="true"
                      >
                        <option value={1}>Guest</option>
                        <option value={2}>Owner</option>
                        <option value={3} selected="">
                          Can Edit
                        </option>
                      </select>
                    </div>
                    {/*end::Access menu*/}
                  </div>
                  {/*end::User*/}
                  {/*begin::Separator*/}
                  <div className="border-bottom border-gray-300 border-bottom-dashed" />
                  {/*end::Separator*/}
                  {/*begin::User*/}
                  <div
                    className="rounded d-flex flex-stack bg-active-lighten p-4"
                    data-user-id={13}
                  >
                    {/*begin::Details*/}
                    <div className="d-flex align-items-center">
                      {/*begin::Checkbox*/}
                      <label className="form-check form-check-custom form-check-solid me-5">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          name="users"
                          data-kt-check="true"
                          data-kt-check-target="[data-user-id='13']"
                          defaultValue={13}
                        />
                      </label>
                      {/*end::Checkbox*/}
                      {/*begin::Avatar*/}
                      <div className="symbol symbol-35px symbol-circle">
                        <img
                          alt="Pic"
                          src="https://preview.keenthemes.com/keen/demo3/assets/media/avatars/300-13.jpg"
                        />
                      </div>
                      {/*end::Avatar*/}
                      {/*begin::Details*/}
                      <div className="ms-5">
                        <a
                          href="#"
                          className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                        >
                          John Miller
                        </a>
                        <div className="fw-semibold text-muted">
                          miller@mapple.com
                        </div>
                      </div>
                      {/*end::Details*/}
                    </div>
                    {/*end::Details*/}
                    {/*begin::Access menu*/}
                    <div className="ms-2 w-100px">
                      <select
                        className="form-select form-select-solid form-select-sm"
                        data-control="select2"
                        data-hide-search="true"
                      >
                        <option value={1}>Guest</option>
                        <option value={2}>Owner</option>
                        <option value={3} selected="">
                          Can Edit
                        </option>
                      </select>
                    </div>
                    {/*end::Access menu*/}
                  </div>
                  {/*end::User*/}
                  {/*begin::Separator*/}
                  <div className="border-bottom border-gray-300 border-bottom-dashed" />
                  {/*end::Separator*/}
                  {/*begin::User*/}
                  <div
                    className="rounded d-flex flex-stack bg-active-lighten p-4"
                    data-user-id={14}
                  >
                    {/*begin::Details*/}
                    <div className="d-flex align-items-center">
                      {/*begin::Checkbox*/}
                      <label className="form-check form-check-custom form-check-solid me-5">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          name="users"
                          data-kt-check="true"
                          data-kt-check-target="[data-user-id='14']"
                          defaultValue={14}
                        />
                      </label>
                      {/*end::Checkbox*/}
                      {/*begin::Avatar*/}
                      <div className="symbol symbol-35px symbol-circle">
                        <span className="symbol-label bg-light-success text-success fw-semibold">
                          L{" "}
                        </span>
                      </div>
                      {/*end::Avatar*/}
                      {/*begin::Details*/}
                      <div className="ms-5">
                        <a
                          href="#"
                          className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                        >
                          Lucy Kunic
                        </a>
                        <div className="fw-semibold text-muted">
                          lucy.m@fentech.com
                        </div>
                      </div>
                      {/*end::Details*/}
                    </div>
                    {/*end::Details*/}
                    {/*begin::Access menu*/}
                    <div className="ms-2 w-100px">
                      <select
                        className="form-select form-select-solid form-select-sm"
                        data-control="select2"
                        data-hide-search="true"
                      >
                        <option value={1}>Guest</option>
                        <option value={2} selected="">
                          Owner
                        </option>
                        <option value={3}>Can Edit</option>
                      </select>
                    </div>
                    {/*end::Access menu*/}
                  </div>
                  {/*end::User*/}
                  {/*begin::Separator*/}
                  <div className="border-bottom border-gray-300 border-bottom-dashed" />
                  {/*end::Separator*/}
                  {/*begin::User*/}
                  <div
                    className="rounded d-flex flex-stack bg-active-lighten p-4"
                    data-user-id={15}
                  >
                    {/*begin::Details*/}
                    <div className="d-flex align-items-center">
                      {/*begin::Checkbox*/}
                      <label className="form-check form-check-custom form-check-solid me-5">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          name="users"
                          data-kt-check="true"
                          data-kt-check-target="[data-user-id='15']"
                          defaultValue={15}
                        />
                      </label>
                      {/*end::Checkbox*/}
                      {/*begin::Avatar*/}
                      <div className="symbol symbol-35px symbol-circle">
                        <img
                          alt="Pic"
                          src="https://preview.keenthemes.com/keen/demo3/assets/media/avatars/300-21.jpg"
                        />
                      </div>
                      {/*end::Avatar*/}
                      {/*begin::Details*/}
                      <div className="ms-5">
                        <a
                          href="#"
                          className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                        >
                          Ethan Wilder
                        </a>
                        <div className="fw-semibold text-muted">
                          ethan@loop.com.au
                        </div>
                      </div>
                      {/*end::Details*/}
                    </div>
                    {/*end::Details*/}
                    {/*begin::Access menu*/}
                    <div className="ms-2 w-100px">
                      <select
                        className="form-select form-select-solid form-select-sm"
                        data-control="select2"
                        data-hide-search="true"
                      >
                        <option value={1} selected="">
                          Guest
                        </option>
                        <option value={2}>Owner</option>
                        <option value={3}>Can Edit</option>
                      </select>
                    </div>
                    {/*end::Access menu*/}
                  </div>
                  {/*end::User*/}
                  {/*begin::Separator*/}
                  <div className="border-bottom border-gray-300 border-bottom-dashed" />
                  {/*end::Separator*/}
                  {/*begin::User*/}
                  <div
                    className="rounded d-flex flex-stack bg-active-lighten p-4"
                    data-user-id={16}
                  >
                    {/*begin::Details*/}
                    <div className="d-flex align-items-center">
                      {/*begin::Checkbox*/}
                      <label className="form-check form-check-custom form-check-solid me-5">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          name="users"
                          data-kt-check="true"
                          data-kt-check-target="[data-user-id='16']"
                          defaultValue={16}
                        />
                      </label>
                      {/*end::Checkbox*/}
                      {/*begin::Avatar*/}
                      <div className="symbol symbol-35px symbol-circle">
                        <span className="symbol-label bg-light-danger text-danger fw-semibold">
                          O{" "}
                        </span>
                      </div>
                      {/*end::Avatar*/}
                      {/*begin::Details*/}
                      <div className="ms-5">
                        <a
                          href="#"
                          className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                        >
                          Olivia Wild
                        </a>
                        <div className="fw-semibold text-muted">
                          olivia@corpmail.com
                        </div>
                      </div>
                      {/*end::Details*/}
                    </div>
                    {/*end::Details*/}
                    {/*begin::Access menu*/}
                    <div className="ms-2 w-100px">
                      <select
                        className="form-select form-select-solid form-select-sm"
                        data-control="select2"
                        data-hide-search="true"
                      >
                        <option value={1}>Guest</option>
                        <option value={2}>Owner</option>
                        <option value={3} selected="">
                          Can Edit
                        </option>
                      </select>
                    </div>
                    {/*end::Access menu*/}
                  </div>
                  {/*end::User*/}
                </div>
                {/*end::Users*/}
                {/*begin::Actions*/}
                <div className="d-flex flex-center mt-15">
                  <button
                    type="reset"
                    id="kt_modal_users_search_reset"
                    data-bs-dismiss="modal"
                    className="btn btn-active-light me-3"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    id="kt_modal_users_search_submit"
                    className="btn btn-primary"
                  >
                    Add Selected Users
                  </button>
                </div>
                {/*end::Actions*/}
              </div>
              {/*end::Results*/}
              {/*begin::Empty*/}
              <div
                data-kt-search-element="empty"
                className="text-center d-none"
              >
                {/*begin::Message*/}
                <div className="fw-semibold py-10">
                  <div className="text-gray-600 fs-3 mb-2">No users found</div>
                  <div className="text-muted fs-6">
                    Try to search by username, full name or email...
                  </div>
                </div>
                {/*end::Message*/}
                {/*begin::Illustration*/}
                <div className="text-center px-5">
                  <img
                    src="https://preview.keenthemes.com/keen/demo3/assets/media/illustrations/sketchy-1/1.png"
                    alt=""
                    className="w-100 h-200px h-sm-325px"
                  />
                </div>
                {/*end::Illustration*/}
              </div>
              {/*end::Empty*/}{" "}
            </div>
            {/*end::Wrapper*/}
          </div>
          {/*end::Search*/}
        </div>
        {/*end::Modal body*/}
      </div>
      {/*end::Modal content*/}
    </div>
    {/*end::Modal dialog*/}
  </div>
  {/*end::Modal - Users Search*/}
  {/*begin::Modal - Invite Friends*/}
  <div
    className="modal fade"
    id="kt_modal_invite_friends"
    tabIndex={-1}
    aria-hidden="true"
  >
    {/*begin::Modal dialog*/}
    <div className="modal-dialog mw-650px">
      {/*begin::Modal content*/}
      <div className="modal-content">
        {/*begin::Modal header*/}
        <div className="modal-header pb-0 border-0 justify-content-end">
          {/*begin::Close*/}
          <div
            className="btn btn-sm btn-icon btn-active-color-primary"
            data-bs-dismiss="modal"
          >
            <i className="ki-duotone ki-cross fs-1">
              <span className="path1" />
              <span className="path2" />
            </i>{" "}
          </div>
          {/*end::Close*/}
        </div>
        {/*begin::Modal header*/}
        {/*begin::Modal body*/}
        <div className="modal-body scroll-y mx-5 mx-xl-18 pt-0 pb-15">
          {/*begin::Heading*/}
          <div className="text-center mb-13">
            {/*begin::Title*/}
            <h1 className="mb-3">Invite a Friend</h1>
            {/*end::Title*/}
            {/*begin::Description*/}
            <div className="text-muted fw-semibold fs-5">
              If you need more info, please check out
              <a href="#" className="link-primary fw-bold">
                FAQ Page
              </a>
              .
            </div>
            {/*end::Description*/}
          </div>
          {/*end::Heading*/}
          {/*begin::Google Contacts Invite*/}
          <div className="btn btn-light-primary fw-bold w-100 mb-8">
            <img
              alt="Logo"
              src="https://preview.keenthemes.com/keen/demo3/assets/media/svg/brand-logos/google-icon.svg"
              className="h-20px me-3"
            />
            Invite Gmail Contacts
          </div>
          {/*end::Google Contacts Invite*/}
          {/*begin::Separator*/}
          <div className="separator d-flex flex-center mb-8">
            <span className="text-uppercase bg-body fs-7 fw-semibold text-muted px-3">
              or
            </span>
          </div>
          {/*end::Separator*/}
          {/*begin::Textarea*/}
          <textarea
            className="form-control form-control-solid mb-8"
            rows={3}
            placeholder="Type or paste emails here"
            defaultValue={"                "}
          />
          {/*end::Textarea*/}
          {/*begin::Users*/}
          <div className="mb-10">
            {/*begin::Heading*/}
            <div className="fs-6 fw-semibold mb-2">Your Invitations</div>
            {/*end::Heading*/}
            {/*begin::List*/}
            <div className="mh-300px scroll-y me-n7 pe-7">
              {/*begin::User*/}
              <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                {/*begin::Details*/}
                <div className="d-flex align-items-center">
                  {/*begin::Avatar*/}
                  <div className="symbol symbol-35px symbol-circle">
                    <img
                      alt="Pic"
                      src="https://preview.keenthemes.com/keen/demo3/assets/media/avatars/300-6.jpg"
                    />
                  </div>
                  {/*end::Avatar*/}
                  {/*begin::Details*/}
                  <div className="ms-5">
                    <a
                      href="#"
                      className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                    >
                      Emma Smith
                    </a>
                    <div className="fw-semibold text-muted">smith@kpmg.com</div>
                  </div>
                  {/*end::Details*/}
                </div>
                {/*end::Details*/}
                {/*begin::Access menu*/}
                <div className="ms-2 w-100px">
                  <select
                    className="form-select form-select-solid form-select-sm"
                    data-control="select2"
                    data-dropdown-parent="#kt_modal_invite_friends"
                    data-hide-search="true"
                  >
                    <option value={1}>Guest</option>
                    <option value={2} selected="">
                      Owner
                    </option>
                    <option value={3}>Can Edit</option>
                  </select>
                </div>
                {/*end::Access menu*/}
              </div>
              {/*end::User*/}
              {/*begin::User*/}
              <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                {/*begin::Details*/}
                <div className="d-flex align-items-center">
                  {/*begin::Avatar*/}
                  <div className="symbol symbol-35px symbol-circle">
                    <span className="symbol-label bg-light-danger text-danger fw-semibold">
                      M{" "}
                    </span>
                  </div>
                  {/*end::Avatar*/}
                  {/*begin::Details*/}
                  <div className="ms-5">
                    <a
                      href="#"
                      className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                    >
                      Melody Macy
                    </a>
                    <div className="fw-semibold text-muted">
                      melody@altbox.com
                    </div>
                  </div>
                  {/*end::Details*/}
                </div>
                {/*end::Details*/}
                {/*begin::Access menu*/}
                <div className="ms-2 w-100px">
                  <select
                    className="form-select form-select-solid form-select-sm"
                    data-control="select2"
                    data-dropdown-parent="#kt_modal_invite_friends"
                    data-hide-search="true"
                  >
                    <option value={1} selected="">
                      Guest
                    </option>
                    <option value={2}>Owner</option>
                    <option value={3}>Can Edit</option>
                  </select>
                </div>
                {/*end::Access menu*/}
              </div>
              {/*end::User*/}
              {/*begin::User*/}
              <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                {/*begin::Details*/}
                <div className="d-flex align-items-center">
                  {/*begin::Avatar*/}
                  <div className="symbol symbol-35px symbol-circle">
                    <img
                      alt="Pic"
                      src="https://preview.keenthemes.com/keen/demo3/assets/media/avatars/300-1.jpg"
                    />
                  </div>
                  {/*end::Avatar*/}
                  {/*begin::Details*/}
                  <div className="ms-5">
                    <a
                      href="#"
                      className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                    >
                      Max Smith
                    </a>
                    <div className="fw-semibold text-muted">max@kt.com</div>
                  </div>
                  {/*end::Details*/}
                </div>
                {/*end::Details*/}
                {/*begin::Access menu*/}
                <div className="ms-2 w-100px">
                  <select
                    className="form-select form-select-solid form-select-sm"
                    data-control="select2"
                    data-dropdown-parent="#kt_modal_invite_friends"
                    data-hide-search="true"
                  >
                    <option value={1}>Guest</option>
                    <option value={2}>Owner</option>
                    <option value={3} selected="">
                      Can Edit
                    </option>
                  </select>
                </div>
                {/*end::Access menu*/}
              </div>
              {/*end::User*/}
              {/*begin::User*/}
              <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                {/*begin::Details*/}
                <div className="d-flex align-items-center">
                  {/*begin::Avatar*/}
                  <div className="symbol symbol-35px symbol-circle">
                    <img
                      alt="Pic"
                      src="https://preview.keenthemes.com/keen/demo3/assets/media/avatars/300-5.jpg"
                    />
                  </div>
                  {/*end::Avatar*/}
                  {/*begin::Details*/}
                  <div className="ms-5">
                    <a
                      href="#"
                      className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                    >
                      Sean Bean
                    </a>
                    <div className="fw-semibold text-muted">
                      sean@dellito.com
                    </div>
                  </div>
                  {/*end::Details*/}
                </div>
                {/*end::Details*/}
                {/*begin::Access menu*/}
                <div className="ms-2 w-100px">
                  <select
                    className="form-select form-select-solid form-select-sm"
                    data-control="select2"
                    data-dropdown-parent="#kt_modal_invite_friends"
                    data-hide-search="true"
                  >
                    <option value={1}>Guest</option>
                    <option value={2} selected="">
                      Owner
                    </option>
                    <option value={3}>Can Edit</option>
                  </select>
                </div>
                {/*end::Access menu*/}
              </div>
              {/*end::User*/}
              {/*begin::User*/}
              <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                {/*begin::Details*/}
                <div className="d-flex align-items-center">
                  {/*begin::Avatar*/}
                  <div className="symbol symbol-35px symbol-circle">
                    <img
                      alt="Pic"
                      src="https://preview.keenthemes.com/keen/demo3/assets/media/avatars/300-25.jpg"
                    />
                  </div>
                  {/*end::Avatar*/}
                  {/*begin::Details*/}
                  <div className="ms-5">
                    <a
                      href="#"
                      className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                    >
                      Brian Cox
                    </a>
                    <div className="fw-semibold text-muted">
                      brian@exchange.com
                    </div>
                  </div>
                  {/*end::Details*/}
                </div>
                {/*end::Details*/}
                {/*begin::Access menu*/}
                <div className="ms-2 w-100px">
                  <select
                    className="form-select form-select-solid form-select-sm"
                    data-control="select2"
                    data-dropdown-parent="#kt_modal_invite_friends"
                    data-hide-search="true"
                  >
                    <option value={1}>Guest</option>
                    <option value={2}>Owner</option>
                    <option value={3} selected="">
                      Can Edit
                    </option>
                  </select>
                </div>
                {/*end::Access menu*/}
              </div>
              {/*end::User*/}
              {/*begin::User*/}
              <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                {/*begin::Details*/}
                <div className="d-flex align-items-center">
                  {/*begin::Avatar*/}
                  <div className="symbol symbol-35px symbol-circle">
                    <span className="symbol-label bg-light-warning text-warning fw-semibold">
                      C{" "}
                    </span>
                  </div>
                  {/*end::Avatar*/}
                  {/*begin::Details*/}
                  <div className="ms-5">
                    <a
                      href="#"
                      className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                    >
                      Mikaela Collins
                    </a>
                    <div className="fw-semibold text-muted">mik@pex.com</div>
                  </div>
                  {/*end::Details*/}
                </div>
                {/*end::Details*/}
                {/*begin::Access menu*/}
                <div className="ms-2 w-100px">
                  <select
                    className="form-select form-select-solid form-select-sm"
                    data-control="select2"
                    data-dropdown-parent="#kt_modal_invite_friends"
                    data-hide-search="true"
                  >
                    <option value={1}>Guest</option>
                    <option value={2} selected="">
                      Owner
                    </option>
                    <option value={3}>Can Edit</option>
                  </select>
                </div>
                {/*end::Access menu*/}
              </div>
              {/*end::User*/}
              {/*begin::User*/}
              <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                {/*begin::Details*/}
                <div className="d-flex align-items-center">
                  {/*begin::Avatar*/}
                  <div className="symbol symbol-35px symbol-circle">
                    <img
                      alt="Pic"
                      src="https://preview.keenthemes.com/keen/demo3/assets/media/avatars/300-9.jpg"
                    />
                  </div>
                  {/*end::Avatar*/}
                  {/*begin::Details*/}
                  <div className="ms-5">
                    <a
                      href="#"
                      className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                    >
                      Francis Mitcham
                    </a>
                    <div className="fw-semibold text-muted">f.mit@kpmg.com</div>
                  </div>
                  {/*end::Details*/}
                </div>
                {/*end::Details*/}
                {/*begin::Access menu*/}
                <div className="ms-2 w-100px">
                  <select
                    className="form-select form-select-solid form-select-sm"
                    data-control="select2"
                    data-dropdown-parent="#kt_modal_invite_friends"
                    data-hide-search="true"
                  >
                    <option value={1}>Guest</option>
                    <option value={2}>Owner</option>
                    <option value={3} selected="">
                      Can Edit
                    </option>
                  </select>
                </div>
                {/*end::Access menu*/}
              </div>
              {/*end::User*/}
              {/*begin::User*/}
              <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                {/*begin::Details*/}
                <div className="d-flex align-items-center">
                  {/*begin::Avatar*/}
                  <div className="symbol symbol-35px symbol-circle">
                    <span className="symbol-label bg-light-danger text-danger fw-semibold">
                      O{" "}
                    </span>
                  </div>
                  {/*end::Avatar*/}
                  {/*begin::Details*/}
                  <div className="ms-5">
                    <a
                      href="#"
                      className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                    >
                      Olivia Wild
                    </a>
                    <div className="fw-semibold text-muted">
                      olivia@corpmail.com
                    </div>
                  </div>
                  {/*end::Details*/}
                </div>
                {/*end::Details*/}
                {/*begin::Access menu*/}
                <div className="ms-2 w-100px">
                  <select
                    className="form-select form-select-solid form-select-sm"
                    data-control="select2"
                    data-dropdown-parent="#kt_modal_invite_friends"
                    data-hide-search="true"
                  >
                    <option value={1}>Guest</option>
                    <option value={2} selected="">
                      Owner
                    </option>
                    <option value={3}>Can Edit</option>
                  </select>
                </div>
                {/*end::Access menu*/}
              </div>
              {/*end::User*/}
              {/*begin::User*/}
              <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                {/*begin::Details*/}
                <div className="d-flex align-items-center">
                  {/*begin::Avatar*/}
                  <div className="symbol symbol-35px symbol-circle">
                    <span className="symbol-label bg-light-primary text-primary fw-semibold">
                      N{" "}
                    </span>
                  </div>
                  {/*end::Avatar*/}
                  {/*begin::Details*/}
                  <div className="ms-5">
                    <a
                      href="#"
                      className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                    >
                      Neil Owen
                    </a>
                    <div className="fw-semibold text-muted">
                      owen.neil@gmail.com
                    </div>
                  </div>
                  {/*end::Details*/}
                </div>
                {/*end::Details*/}
                {/*begin::Access menu*/}
                <div className="ms-2 w-100px">
                  <select
                    className="form-select form-select-solid form-select-sm"
                    data-control="select2"
                    data-dropdown-parent="#kt_modal_invite_friends"
                    data-hide-search="true"
                  >
                    <option value={1} selected="">
                      Guest
                    </option>
                    <option value={2}>Owner</option>
                    <option value={3}>Can Edit</option>
                  </select>
                </div>
                {/*end::Access menu*/}
              </div>
              {/*end::User*/}
              {/*begin::User*/}
              <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                {/*begin::Details*/}
                <div className="d-flex align-items-center">
                  {/*begin::Avatar*/}
                  <div className="symbol symbol-35px symbol-circle">
                    <img
                      alt="Pic"
                      src="https://preview.keenthemes.com/keen/demo3/assets/media/avatars/300-23.jpg"
                    />
                  </div>
                  {/*end::Avatar*/}
                  {/*begin::Details*/}
                  <div className="ms-5">
                    <a
                      href="#"
                      className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                    >
                      Dan Wilson
                    </a>
                    <div className="fw-semibold text-muted">
                      dam@consilting.com
                    </div>
                  </div>
                  {/*end::Details*/}
                </div>
                {/*end::Details*/}
                {/*begin::Access menu*/}
                <div className="ms-2 w-100px">
                  <select
                    className="form-select form-select-solid form-select-sm"
                    data-control="select2"
                    data-dropdown-parent="#kt_modal_invite_friends"
                    data-hide-search="true"
                  >
                    <option value={1}>Guest</option>
                    <option value={2}>Owner</option>
                    <option value={3} selected="">
                      Can Edit
                    </option>
                  </select>
                </div>
                {/*end::Access menu*/}
              </div>
              {/*end::User*/}
              {/*begin::User*/}
              <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                {/*begin::Details*/}
                <div className="d-flex align-items-center">
                  {/*begin::Avatar*/}
                  <div className="symbol symbol-35px symbol-circle">
                    <span className="symbol-label bg-light-danger text-danger fw-semibold">
                      E{" "}
                    </span>
                  </div>
                  {/*end::Avatar*/}
                  {/*begin::Details*/}
                  <div className="ms-5">
                    <a
                      href="#"
                      className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                    >
                      Emma Bold
                    </a>
                    <div className="fw-semibold text-muted">
                      emma@intenso.com
                    </div>
                  </div>
                  {/*end::Details*/}
                </div>
                {/*end::Details*/}
                {/*begin::Access menu*/}
                <div className="ms-2 w-100px">
                  <select
                    className="form-select form-select-solid form-select-sm"
                    data-control="select2"
                    data-dropdown-parent="#kt_modal_invite_friends"
                    data-hide-search="true"
                  >
                    <option value={1}>Guest</option>
                    <option value={2} selected="">
                      Owner
                    </option>
                    <option value={3}>Can Edit</option>
                  </select>
                </div>
                {/*end::Access menu*/}
              </div>
              {/*end::User*/}
              {/*begin::User*/}
              <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                {/*begin::Details*/}
                <div className="d-flex align-items-center">
                  {/*begin::Avatar*/}
                  <div className="symbol symbol-35px symbol-circle">
                    <img
                      alt="Pic"
                      src="https://preview.keenthemes.com/keen/demo3/assets/media/avatars/300-12.jpg"
                    />
                  </div>
                  {/*end::Avatar*/}
                  {/*begin::Details*/}
                  <div className="ms-5">
                    <a
                      href="#"
                      className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                    >
                      Ana Crown
                    </a>
                    <div className="fw-semibold text-muted">
                      ana.cf@limtel.com
                    </div>
                  </div>
                  {/*end::Details*/}
                </div>
                {/*end::Details*/}
                {/*begin::Access menu*/}
                <div className="ms-2 w-100px">
                  <select
                    className="form-select form-select-solid form-select-sm"
                    data-control="select2"
                    data-dropdown-parent="#kt_modal_invite_friends"
                    data-hide-search="true"
                  >
                    <option value={1} selected="">
                      Guest
                    </option>
                    <option value={2}>Owner</option>
                    <option value={3}>Can Edit</option>
                  </select>
                </div>
                {/*end::Access menu*/}
              </div>
              {/*end::User*/}
              {/*begin::User*/}
              <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                {/*begin::Details*/}
                <div className="d-flex align-items-center">
                  {/*begin::Avatar*/}
                  <div className="symbol symbol-35px symbol-circle">
                    <span className="symbol-label bg-light-info text-info fw-semibold">
                      A{" "}
                    </span>
                  </div>
                  {/*end::Avatar*/}
                  {/*begin::Details*/}
                  <div className="ms-5">
                    <a
                      href="#"
                      className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                    >
                      Robert Doe
                    </a>
                    <div className="fw-semibold text-muted">
                      robert@benko.com
                    </div>
                  </div>
                  {/*end::Details*/}
                </div>
                {/*end::Details*/}
                {/*begin::Access menu*/}
                <div className="ms-2 w-100px">
                  <select
                    className="form-select form-select-solid form-select-sm"
                    data-control="select2"
                    data-dropdown-parent="#kt_modal_invite_friends"
                    data-hide-search="true"
                  >
                    <option value={1}>Guest</option>
                    <option value={2}>Owner</option>
                    <option value={3} selected="">
                      Can Edit
                    </option>
                  </select>
                </div>
                {/*end::Access menu*/}
              </div>
              {/*end::User*/}
              {/*begin::User*/}
              <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                {/*begin::Details*/}
                <div className="d-flex align-items-center">
                  {/*begin::Avatar*/}
                  <div className="symbol symbol-35px symbol-circle">
                    <img
                      alt="Pic"
                      src="https://preview.keenthemes.com/keen/demo3/assets/media/avatars/300-13.jpg"
                    />
                  </div>
                  {/*end::Avatar*/}
                  {/*begin::Details*/}
                  <div className="ms-5">
                    <a
                      href="#"
                      className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                    >
                      John Miller
                    </a>
                    <div className="fw-semibold text-muted">
                      miller@mapple.com
                    </div>
                  </div>
                  {/*end::Details*/}
                </div>
                {/*end::Details*/}
                {/*begin::Access menu*/}
                <div className="ms-2 w-100px">
                  <select
                    className="form-select form-select-solid form-select-sm"
                    data-control="select2"
                    data-dropdown-parent="#kt_modal_invite_friends"
                    data-hide-search="true"
                  >
                    <option value={1}>Guest</option>
                    <option value={2}>Owner</option>
                    <option value={3} selected="">
                      Can Edit
                    </option>
                  </select>
                </div>
                {/*end::Access menu*/}
              </div>
              {/*end::User*/}
              {/*begin::User*/}
              <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                {/*begin::Details*/}
                <div className="d-flex align-items-center">
                  {/*begin::Avatar*/}
                  <div className="symbol symbol-35px symbol-circle">
                    <span className="symbol-label bg-light-success text-success fw-semibold">
                      L{" "}
                    </span>
                  </div>
                  {/*end::Avatar*/}
                  {/*begin::Details*/}
                  <div className="ms-5">
                    <a
                      href="#"
                      className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                    >
                      Lucy Kunic
                    </a>
                    <div className="fw-semibold text-muted">
                      lucy.m@fentech.com
                    </div>
                  </div>
                  {/*end::Details*/}
                </div>
                {/*end::Details*/}
                {/*begin::Access menu*/}
                <div className="ms-2 w-100px">
                  <select
                    className="form-select form-select-solid form-select-sm"
                    data-control="select2"
                    data-dropdown-parent="#kt_modal_invite_friends"
                    data-hide-search="true"
                  >
                    <option value={1}>Guest</option>
                    <option value={2} selected="">
                      Owner
                    </option>
                    <option value={3}>Can Edit</option>
                  </select>
                </div>
                {/*end::Access menu*/}
              </div>
              {/*end::User*/}
              {/*begin::User*/}
              <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                {/*begin::Details*/}
                <div className="d-flex align-items-center">
                  {/*begin::Avatar*/}
                  <div className="symbol symbol-35px symbol-circle">
                    <img
                      alt="Pic"
                      src="https://preview.keenthemes.com/keen/demo3/assets/media/avatars/300-21.jpg"
                    />
                  </div>
                  {/*end::Avatar*/}
                  {/*begin::Details*/}
                  <div className="ms-5">
                    <a
                      href="#"
                      className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                    >
                      Ethan Wilder
                    </a>
                    <div className="fw-semibold text-muted">
                      ethan@loop.com.au
                    </div>
                  </div>
                  {/*end::Details*/}
                </div>
                {/*end::Details*/}
                {/*begin::Access menu*/}
                <div className="ms-2 w-100px">
                  <select
                    className="form-select form-select-solid form-select-sm"
                    data-control="select2"
                    data-dropdown-parent="#kt_modal_invite_friends"
                    data-hide-search="true"
                  >
                    <option value={1} selected="">
                      Guest
                    </option>
                    <option value={2}>Owner</option>
                    <option value={3}>Can Edit</option>
                  </select>
                </div>
                {/*end::Access menu*/}
              </div>
              {/*end::User*/}
              {/*begin::User*/}
              <div className="d-flex flex-stack py-4 ">
                {/*begin::Details*/}
                <div className="d-flex align-items-center">
                  {/*begin::Avatar*/}
                  <div className="symbol symbol-35px symbol-circle">
                    <img
                      alt="Pic"
                      src="https://preview.keenthemes.com/keen/demo3/assets/media/avatars/300-13.jpg"
                    />
                  </div>
                  {/*end::Avatar*/}
                  {/*begin::Details*/}
                  <div className="ms-5">
                    <a
                      href="#"
                      className="fs-5 fw-bold text-gray-900 text-hover-primary mb-2"
                    >
                      John Miller
                    </a>
                    <div className="fw-semibold text-muted">
                      miller@mapple.com
                    </div>
                  </div>
                  {/*end::Details*/}
                </div>
                {/*end::Details*/}
                {/*begin::Access menu*/}
                <div className="ms-2 w-100px">
                  <select
                    className="form-select form-select-solid form-select-sm"
                    data-control="select2"
                    data-dropdown-parent="#kt_modal_invite_friends"
                    data-hide-search="true"
                  >
                    <option value={1}>Guest</option>
                    <option value={2}>Owner</option>
                    <option value={3} selected="">
                      Can Edit
                    </option>
                  </select>
                </div>
                {/*end::Access menu*/}
              </div>
              {/*end::User*/}
            </div>
            {/*end::List*/}
          </div>
          {/*end::Users*/}
          {/*begin::Notice*/}
          <div className="d-flex flex-stack">
            {/*begin::Label*/}
            <div className="me-5 fw-semibold">
              <label className="fs-6">Adding Users by Team Members</label>
              <div className="fs-7 text-muted">
                If you need more info, please check budget planning
              </div>
            </div>
            {/*end::Label*/}
            {/*begin::Switch*/}
            <label className="form-check form-switch form-check-custom form-check-solid">
              <input
                className="form-check-input"
                type="checkbox"
                defaultValue={1}
                defaultChecked="checked"
              />
              <span className="form-check-label fw-semibold text-muted">
                Allowed
              </span>
            </label>
            {/*end::Switch*/}
          </div>
          {/*end::Notice*/}
        </div>
        {/*end::Modal body*/}
      </div>
      {/*end::Modal content*/}
    </div>
    {/*end::Modal dialog*/}
  </div>
</>

  );
};

export default BannerListPage;
