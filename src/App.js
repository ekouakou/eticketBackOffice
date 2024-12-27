import React, { useEffect, useState } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import SignIn from './pageComponent/login/SignIn';
import SaveEventPage from './pageComponent/eventsaveform_delete/SaveEventPage';
import EventListPage from './pageComponent/eventliste/EventListPage';
import SaveBannerPage from './pageComponent/banner/SaveBannerPage';
import ClientListPage from './pageComponent/client/ClientListPage';
import DetailClient from './pageComponent/client/DetailClient';
import TicketListPage from './pageComponent/ticket/TicketListPage';
import TableauDeBord from './pageComponent/dashboard/TableauDeBord';
import DashboardAnnonceur from './pageComponent/dashboard/DashboardAnnonceur';
import SaveEventData from './pageComponent/EticketEvent/SaveEventData';
import ListeEventData from './pageComponent/EticketEvent/ListeEventData';
import SaveEventBanner from './pageComponent/EticketBanner/SaveEventBanner';
import ListeEventBanner from './pageComponent/EticketBanner/ListeEventBanner';
import SaveUtilisateur from './pageComponent/EticketUtilisateur/SaveUtilisateur';
import ListeUtilisateurData from './pageComponent/EticketUtilisateur/ListeUtilisateurData';
import NotFound from './pageComponent/NotFound';

import SidebarMenu from './pageComponent/AppHeader/SidebarMenu';
import AppHeader from './pageComponent/AppHeader/AppHeader';


function AppContent() {
  const [isRoot, setIsRoot] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsRoot(location.pathname === '/');
  }, [location]);

  useEffect(() => {
    const loadScript = (src) => {
      return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = src;
        script.onload = resolve;
        script.onerror = reject;
        document.body.appendChild(script);
      });
    };

    loadScript(`${process.env.PUBLIC_URL}/assets/plugins/global/plugins.bundle.js`)
      .then(() => loadScript(`${process.env.PUBLIC_URL}/assets/js/scripts.bundle.js`))
      .then(() => loadScript(`${process.env.PUBLIC_URL}/assets/js/custom/utilities/modals/new-target.js`))
      .then(() => loadScript(`${process.env.PUBLIC_URL}/assets/js/custom/apps/file-manager/list.js`))
      .catch(err => console.error('Failed to load scripts', err));
  }, []);

  const paths = {
    signIn: process.env.REACT_APP_SIGN_IN,
    saveEvent: process.env.REACT_APP_SAVE_EVENT,
    eventDetails: process.env.REACT_APP_EVENT_DETAILS,
    eventList: process.env.REACT_APP_EVENT_LIST,
    saveBanner: process.env.REACT_APP_SAVE_BANNER,
    clientList: process.env.REACT_APP_CLIENT_LIST,
    ticketList: process.env.REACT_APP_TICKET_LIST,
    detailClient: process.env.REACT_APP_DETAIL_CLIENT,
    dashboard: process.env.REACT_APP_DASHBOARD,
    saveEventData: process.env.REACT_APP_SAVE_EVENT_DATA,
    listeEventData: process.env.REACT_APP_LISTE_EVENT_DATA,
    saveEventBanner: process.env.REACT_APP_SAVE_EVENT_BANNER,
    listeEventBanner: process.env.REACT_APP_LISTE_EVENT_BANNER,
    listeUtilisateurs: process.env.REACT_APP_LISTE_UTILISATEURS,
    saveUtilisateurs: process.env.REACT_APP_SAVE_UTILISATEURS,
    notFound: process.env.REACT_APP_NOT_FOUND,
  };


  return (
    <>
      {!isRoot && (
        <div className="d-flex flex-column flex-root app-root" id="kt_app_root">
          <div className="app-page flex-column flex-column-fluid" id="kt_app_page">
            <AppHeader />
            <div className="app-wrapper flex-column flex-row-fluid menu-gray-800" id="kt_app_page">
              <div id="kt_app_sidebar" className="app-sidebar flex-column" data-kt-drawer="true" data-kt-drawer-name="app-sidebar" data-kt-drawer-activate="{default: true, lg: false}" data-kt-drawer-overlay="true" data-kt-drawer-width="250px" data-kt-drawer-direction="start" data-kt-drawer-toggle="#kt_app_sidebar_mobile_toggle">
                <div className="app-sidebar-logo d-none d-md-block pt-7 px-8 pt-xl-11 mb-2" id="kt_app_sidebar_logo">
                  <a href="index.html">
                    <img alt="Logo" src="assets/media/logos/logo_light.svg" className="h-65px theme-light-show" />
                    <img alt="Logo" src="assets/media/logos/logo_dark.svg" className="h-65px theme-dark-show" />
                  </a>
                </div>
                <SidebarMenu />
              </div>
            </div>

            <Routes>
            <Route path={paths.signIn} element={<SignIn />} />
                <Route path={paths.saveEvent} element={<SaveEventPage />} />
                <Route path={paths.eventDetails} element={<SaveEventPage />} />
                <Route path={paths.eventList} element={<EventListPage />} />
                <Route path={paths.saveBanner} element={<SaveBannerPage />} />
                <Route path={paths.clientList} element={<ClientListPage />} />
                <Route path={paths.ticketList} element={<TicketListPage />} />
                <Route path={paths.detailClient} element={<DetailClient />} />
                <Route path={paths.dashboard} element={<DashboardAnnonceur />} />
                <Route path={paths.saveEventData} element={<SaveEventData />} />
                <Route path={paths.listeEventData} element={<ListeEventData />} />
                <Route path={paths.saveEventBanner} element={<SaveEventBanner />} />
                <Route path={paths.listeEventBanner} element={<ListeEventBanner />} />
                <Route path={paths.listeUtilisateurs} element={<ListeUtilisateurData />} />
                <Route path={paths.saveUtilisateurs} element={<SaveUtilisateur />} />
                <Route path={paths.notFound} element={<NotFound />} />
            </Routes>
          </div>
        </div>
      )}

      <Routes>
        <Route path={paths.signIn} element={<SignIn />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;