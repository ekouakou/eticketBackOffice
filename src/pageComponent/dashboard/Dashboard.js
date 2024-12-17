import React from 'react';
import SidebarMenu from './SidebarMenu';
import AppHeader from './AppHeader';
// import AddNewAddressForm from './AddBannerForm';
//import AddNewAddressForm from '../eventsaveform/AddNewAddressForm';
// import AddBannerForm from './AddBannerForm';



const Dashboard = () => {
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
              <SidebarMenu />
            </div>
            <div className="app-main flex-column flex-row-fluid" id="kt_app_main">
              <div className="d-flex flex-column flex-column-fluid">
                <div id="kt_app_content" className="app-content flex-column-fluid">
                  {/* <FileManagerCard /> */}
                  {/* <AddNewAddressForm /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
