import React from 'react';
import SidebarMenu from '../SideBar/SidebarMenu';
import AppHeader from '../AppHeader/AppHeader';
import EventListe from './EventListe';
import LayoutBuilder from '../LayoutBuilder'
import LayoutDemo from '../LayoutDemo'
import ScrollTop from '../ScrollTop'
import RightSettingButton from '../RightSettingButton'
import LayoutHelp from '../LayoutHelp'



const ListeEventBanner = () => {
  return (
    <>
      <div className="app-wrapper flex-column flex-row-fluid menu-gray-800" id="kt_app_page">

            
            <div className="app-main flex-column flex-row-fluid " id="kt_app_main">
            <h1>Ajouter un nouvel événement</h1>

                <EventListe />
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

      <LayoutBuilder />
      <RightSettingButton />
      <LayoutDemo />
      <LayoutHelp />
      <ScrollTop />
    </>
  );
};

export default ListeEventBanner;
