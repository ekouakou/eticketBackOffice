import React from 'react';
import SidebarMenu from '../dashboard/SidebarMenu'
import Footer from '../dashboard/Footer'

import AppHeader from '../dashboard/AppHeader'
import FileManagerCard from '../dashboard/FileManagerCard'
import ListeEvent from './ListeEvent'
import LayoutBuilder from '../LayoutBuilder'
import LayoutDemo from '../LayoutDemo'
import ScrollTop from '../ScrollTop'
import RightSettingButton from '../RightSettingButton'
import LayoutHelp from '../LayoutHelp'



const Dashboard = () => {
  return (
    

    <>

{/* // <>
    //     <div className={`d-flex flex-column flex-root app-root`} id="kt_app_root">
    //         <div class="app-page  flex-column flex-column-fluid " id='kt_app_page'>
    //             <AppHeader />
    //             <div class="app-wrapper  flex-column flex-row-fluid  " id='kt_app_page'>
    //                 <div id="kt_app_sidebar" class="app-sidebar flex-column" data-kt-drawer="true" data-kt-drawer-name="app-sidebar" data-kt-drawer-activate="{default: true, lg: false}" data-kt-drawer-overlay="true" data-kt-drawer-width="250px" data-kt-drawer-direction="start" data-kt-drawer-toggle="#kt_app_sidebar_mobile_toggle">
    //                     <SidebarMenu />
    //                 </div>
    //                 <ListeEvent />
    //                 <Footer />
    //             </div>
    //         </div>
    //     </div>
    // </> */}
        <>
          <div className="d-flex flex-column flex-root app-root" id="kt_app_root">
            <div className="app-page  flex-column flex-column-fluid " id="kt_app_page">
              <AppHeader pageTitle = "Liste des bannière" desctioptionPage="Cette page permet de définir le titre et la description des bannières affichées en haut de chaque page de l'application."/>

              <div className="app-wrapper  flex-column flex-row-fluid " id="kt_app_wrapper">
                <div id="kt_app_sidebar" className="app-sidebar  flex-column " data-kt-drawer="true" data-kt-drawer-name="app-sidebar" data-kt-drawer-activate="{default: true, lg: false}" data-kt-drawer-overlay="true" data-kt-drawer-width="250px" data-kt-drawer-direction="start" data-kt-drawer-toggle="#kt_app_sidebar_mobile_toggle">
                  <div className="app-sidebar-logo d-none d-md-block pt-7 px-8 pt-xl-11 mb-2" id="kt_app_sidebar_logo">
                    <a href="index.html">
                      <img alt="Logo" src="assets/media/logos/demo3.svg" className="h-35px theme-light-show"/>
                      <img alt="Logo" src="assets/media/logos/demo3-dark.svg" className="h-35px theme-dark-show"/>
                    </a>
                  </div>
                  <div className="app-sidebar-menu app-sidebar-menu-arrow overflow-hidden flex-column-fluid mb-5" id="kt_app_sidebar_menu">
                    <SidebarMenu />
                  </div>
                </div>
                <ListeEvent />
              </div>
              <Footer />
            </div>
          </div>
        </>
        <LayoutBuilder />
        <RightSettingButton />
        <LayoutDemo />
        <LayoutHelp />
        <ScrollTop />
    </>

    
  );
};

export default Dashboard;
