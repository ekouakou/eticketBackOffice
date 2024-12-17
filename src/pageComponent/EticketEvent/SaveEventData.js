import React from 'react';
import SidebarMenu from '../SideBar/SidebarMenu';
import AppHeader from '../AppHeader/AppHeader';
// import AddNewAddressForm from './AddBannerForm';
import FormBanner from '../form/FormBanner';
import AddEventForm from './AddEventForm';

import LayoutBuilder from '../LayoutBuilder'
import LayoutDemo from '../LayoutDemo'
import ScrollTop from '../ScrollTop'
import RightSettingButton from '../RightSettingButton'
import LayoutHelp from '../LayoutHelp'



const TableauDeBord = () => {
  return (
    <>
      <div className={`d-flex flex-column flex-root app-root`} id="kt_app_root">
        <div className="app-page flex-column flex-column-fluid" id="kt_app_page">
          <AppHeader />

          <div className="app-wrapper flex-column flex-row-fluid menu-gray-800" id="kt_app_page">
            <div id="kt_app_sidebar" className="app-sidebar flex-column" data-kt-drawer="true" data-kt-drawer-name="app-sidebar" data-kt-drawer-activate="{default: true, lg: false}" data-kt-drawer-overlay="true" data-kt-drawer-width="250px" data-kt-drawer-direction="start" data-kt-drawer-toggle="#kt_app_sidebar_mobile_toggle">
              {/* Logo de l'application */}
              <div className="app-sidebar-logo d-none d-md-block pt-7 px-8 pt-xl-11 mb-2" id="kt_app_sidebar_logo">
                <a href="index.html">
                  <img alt="Logo" src="assets/media/logos/logo_light.svg" className="h-65px theme-light-show" />
                  <img alt="Logo" src="assets/media/logos/logo_dark.svg" className="h-65px theme-dark-show" />
                </a>
              </div>
              <SidebarMenu  />
            </div>
            <div className="app-main flex-column flex-row-fluid " id="kt_app_main">
                <div className="d-flex flex-column flex-column-fluid">
                  {/*begin::Content*/}
                  <div id="kt_app_content" className="app-content  flex-column-fluid ">
                    {/*begin::Content container*/}
                    <AddEventForm />
                    {/*end::Content container*/}
                  </div>
                  {/*end::Content*/}
                </div>

              <div id="kt_app_footer" className="app-footer ">
                {/*begin::Footer container*/}
                <div className="app-container  container-fluid d-flex flex-column flex-md-row flex-center flex-md-stack py-3 ">
                  {/*begin::Copyright*/}
                  <div className="text-gray-900 order-2 order-md-1">
                    <span className="text-muted fw-semibold me-1">2024©</span>
                    <a
                      href="../../../../keenthemes.com/index.html"
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
                        href="../../../../keenthemes.com/index.html"
                        target="_blank"
                        className="menu-link px-2"
                      >
                        About
                      </a>
                    </li>
                    <li className="menu-item">
                      <a
                        href="../../../../devs.keenthemes.com/index.html"
                        target="_blank"
                        className="menu-link px-2"
                      >
                        Support
                      </a>
                    </li>
                    <li className="menu-item">
                      <a
                        href="../../../../themes.getbootstrap.com/product/keen-the-ultimate-bootstrap-admin-theme/index.html"
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
            </div>

          </div>
        </div>
      </div>

      <LayoutBuilder />
      <RightSettingButton />
      <LayoutDemo />
      <LayoutHelp />
      <ScrollTop />
    </>
  );
};

export default TableauDeBord;
