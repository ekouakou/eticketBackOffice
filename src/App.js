import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignIn from './pageComponent/login/SignIn';
import SaveEventPage from './pageComponent/eventsaveform/SaveEventPage';
import EventListPage from './pageComponent/eventliste/EventListPage';
import SaveBannerPage from './pageComponent/banner/SaveBannerPage';
import ClientListPage from './pageComponent/client/ClientListPage';
import DetailClient from './pageComponent/client/DetailClient';
import TicketListPage from './pageComponent/ticket/TicketListPage';
import TableauDeBord from './pageComponent/dashboard/TableauDeBord';
import SaveEventData from './pageComponent/EticketEvent/SaveEventData';
import ListeEventData from './pageComponent/EticketEvent/ListeEventData';
import SaveEventBanner from './pageComponent/EticketBanner/SaveEventBanner';
import ListeEventBanner from './pageComponent/EticketBanner/ListeEventBanner';
import SaveUtilisateur from './pageComponent/EticketUtilisateur/SaveUtilisateur';
import ListeUtilisateurData from './pageComponent/EticketUtilisateur/ListeUtilisateurData';
import NotFound from './pageComponent/NotFound';




function App() {

  useEffect(() => {
    // Charger les scripts comme avant
    const loadScript = (src) => {
      return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = src;
        script.onload = resolve;
        script.onerror = reject;
        document.body.appendChild(script);
      });
    };
    //liste-event-data

    loadScript(`${process.env.PUBLIC_URL}/assets/plugins/global/plugins.bundle.js`)
      .then(() => loadScript(`${process.env.PUBLIC_URL}/assets/js/scripts.bundle.js`))
      .then(() => loadScript(`${process.env.PUBLIC_URL}/assets/js/custom/utilities/modals/new-target.js`))
      .then(() => loadScript(`${process.env.PUBLIC_URL}/assets/js/custom/apps/file-manager/list.js`))
      .catch(err => console.error('Failed to load scripts', err));
  }, []);

  // Récupérer les chemins depuis localStorage
  const paths = JSON.parse(localStorage.getItem("appPaths"));

  return (
    <div>
      <Router basename="/eticketAdmin/">
        <Routes>
          <Route path={paths.signIn} element={<SignIn />} />
          <Route path={paths.saveEvent} element={<SaveEventPage />} />
          <Route path={paths.eventDetails} element={<SaveEventPage />} />
          <Route path={paths.eventList} element={<EventListPage />} />
          <Route path={paths.saveBanner} element={<SaveBannerPage />} />
          <Route path={paths.clientList} element={<ClientListPage />} />
          <Route path={paths.ticketList} element={<TicketListPage />} />
          <Route path={paths.detailClient} element={<DetailClient />} />
          <Route path={paths.dashboard} element={<TableauDeBord />} />
          <Route path={paths.saveEventData} element={<SaveEventData />} />
          <Route path={paths.listeEventData} element={<ListeEventData />} />
          <Route path={paths.saveEventBanner} element={<SaveEventBanner />} />
          <Route path={paths.listeEventBanner} element={<ListeEventBanner />} />
          <Route path={paths.listeUtilisateurs} element={<ListeUtilisateurData />} />
          <Route path={paths.saveUtilisateurs} element={<SaveUtilisateur />} />
          <Route path={paths.notFound} element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
