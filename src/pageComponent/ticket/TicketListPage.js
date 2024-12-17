import React from 'react';
import SidebarMenu from '../dashboard/SidebarMenu'
import Footer from '../dashboard/Footer'

import AppHeader from '../dashboard/AppHeader'
import FileManagerCard from '../dashboard/FileManagerCard'
import ListeTicket from './ListeTicket'


const TicketListPage = () => {
  return (
    <>
        <div className={`d-flex flex-column flex-root app-root`} id="kt_app_root">
            <div class="app-page  flex-column flex-column-fluid " id='kt_app_page'>
                <AppHeader />
               
                <div class="app-wrapper  flex-column flex-row-fluid  " id='kt_app_page'>
                    <div id="kt_app_sidebar" class="app-sidebar flex-column" data-kt-drawer="true" data-kt-drawer-name="app-sidebar" data-kt-drawer-activate="{default: true, lg: false}" data-kt-drawer-overlay="true" data-kt-drawer-width="250px" data-kt-drawer-direction="start" data-kt-drawer-toggle="#kt_app_sidebar_mobile_toggle">
                        
                        <SidebarMenu />
                    </div>
                    <ListeTicket />
                    
                    <Footer />
                </div>
            </div>
        </div>
    </>
  );
};

export default TicketListPage;
