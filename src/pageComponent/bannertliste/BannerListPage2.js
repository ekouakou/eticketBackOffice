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
                    <div class="app-sidebar-footer position-relative bg-light flex-column-auto m-6 mb-10 rounded-4" id="kt_app_sidebar_footer">    
                      <div class="text-center p-9">   
                          <h6 class="text-gray-600 text-center fw-semibold mb-7 lh-base">
                              Our support team is available<br/>
                              to give you answers fast                                        
                          </h6>

                          <div class="row">
                            <img class="maut_button-appstore-logo" src="https://developer.apple.com/app-store/marketing/guidelines/images/badge-example-preferred.png" alt="Get it on Google Play"/>
                            <img class="maut_button-appstore-logo" src="https://lh3.googleusercontent.com/cjsqrWQKJQp9RFO7-hJ9AfpKzbUb_Y84vXfjlP0iRHBvladwAfXih984olktDhPnFqyZ0nu9A5jvFwOEQPXzv7hr3ce3QVsLN8kQ2Ao=s0" alt="Get it on Google Play"/>
                          </div>  
                          {/* <div class="row">
                            <a href="/keen/demo3/apps/support-center/tickets/list.html" class="btn btn-sm btn-primary">
                                <img class="maut_button-appstore-logo" src="https://developer.apple.com/app-store/marketing/guidelines/images/badge-example-preferred.png" alt="Get it on Google Play"/>
                            </a>  
                            <a href="/keen/demo3/apps/support-center/tickets/list.html" class="btn btn-sm btn-primary">
                              <img class="maut_button-appstore-logo" src="https://lh3.googleusercontent.com/cjsqrWQKJQp9RFO7-hJ9AfpKzbUb_Y84vXfjlP0iRHBvladwAfXih984olktDhPnFqyZ0nu9A5jvFwOEQPXzv7hr3ce3QVsLN8kQ2Ao=s0" alt="Get it on Google Play"/>
                            </a> 
                          </div>  */}

                                         
                      </div>
                    </div>
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

export default BannerListPage;
