import React from 'react';
import SidebarMenu from '../SideBar/SidebarMenu';
import AppHeader from './AppHeader';
// import AddNewAddressForm from './AddBannerForm';
import FormBanner from '../form/FormBanner';
import Timeline from '../EticketDashboard/Timeline';
import SalesStatisticsCard from '../EticketDashboard/SalesStatisticsCard';
import HighlightCard from '../EticketDashboard/HighlightCard';
import TicketCard from '../EticketDashboard/TicketCard';
import EventComponent from '../EticketDashboard/EventComponent';



const menuItems = [
  {
    title: 'Dashboards',
    icon: 'ki-duotone ki-black-right fs-3',
    subItems: [
      { title: 'Default', href: '../index.html' },
      { title: 'Projects', href: 'projects.html', active: true },
      { title: 'Social', href: 'social.html' },
      { title: 'Logistics', href: 'logistics.html' },
    ],
    showMore: 'Show 4 More'
  },
  {
    title: 'Pages',
    icon: 'ki-duotone ki-black-right fs-3',
    subItems: [
      {
        title: 'User Profile',
        subItems: [{ title: 'Overview', href: '../pages/user-profile/overview.html' }]
      },
      {
        title: 'Account',
        subItems: [{ title: 'Overview', href: '../account/overview.html' }]
      },
    ],
  },
  {
    title: 'Apps',
    icon: 'ki-duotone ki-black-right fs-3',
    subItems: [
      {
        title: 'Projects',
        subItems: [{ title: 'My Projects', href: '../apps/projects/list.html' }]
      },
      {
        title: 'eCommerce',
        subItems: [
          {
            title: 'Catalog',
            subItems: [{ title: 'Products', href: '../apps/ecommerce/catalog/products.html' }]
          },
          {
            title: 'Customers',
            subItems: [
              { title: 'Customer Listing', href: '../apps/ecommerce/customers/listing.html' },
              { title: 'Customer Details', href: '../apps/ecommerce/customers/details.html' }
            ]
          },
          { title: 'Settings', href: '../apps/ecommerce/settings.html' }
        ]
      },
      {
        title: 'Contacts',
        subItems: [
          { title: 'Getting Started', href: '../apps/contacts/getting-started.html' },
          { title: 'Add Contact', href: '../apps/contacts/add-contact.html' }
        ]
      },
      {
        title: 'Support Center',
        subItems: [
          { title: 'Overview', href: '../apps/support-center/overview.html' },
          { title: 'Tickets', subItems: [
            { title: 'Tickets List', href: '../apps/support-center/tickets/list.html' },
            { title: 'View Ticket', href: '../apps/support-center/tickets/view.html' }
          ]},
          { title: 'FAQ', href: '../apps/support-center/faq.html' }
        ]
      },
      {
        title: 'User Management',
        subItems: [
          { title: 'Users', subItems: [
            { title: 'Users List', href: '../apps/user-management/users/list.html' },
            { title: 'View User', href: '../apps/user-management/users/view.html' }
          ]},
          { title: 'Permissions', href: '../apps/user-management/permissions.html' }
        ]
      },
      {
        title: 'Subscription',
        subItems: [
          { title: 'Getting Started', href: '../apps/subscriptions/getting-started.html' },
          { title: 'Subscription List', href: '../apps/subscriptions/list.html' }
        ]
      },
      {
        title: 'Invoice Manager',
        subItems: [
          { title: 'View Invoices', subItems: [
            { title: 'Invoice 1', href: '../apps/invoices/view/invoice-1.html' },
            { title: 'Invoice 2', href: '../apps/invoices/view/invoice-2.html' }
          ]},
          { title: 'Create Invoice', href: '../apps/invoices/create.html' }
        ]
      },
      {
        title: 'File Manager',
        subItems: [
          { title: 'Folders', href: '../apps/file-manager/folders.html' },
          { title: 'Files', href: '../apps/file-manager/files.html' }
        ]
      },
      { title: 'Calendar', href: '../apps/calendar.html' }
    ]
  }
];

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
                  <div
                    id="kt_app_content_container"
                    className="app-container  container-fluid "
                  >
                    {/*begin::Row*/}
                    <div className="row">
                      <div className='col-lg-6'>
                        <div className='row'>
                          <div className="col-lg-6 col-xl-6">                
                            <TicketCard totalTickets={79} pendingTickets={43} progressPercentage={10} />
                            </div>
                            <div className="col-lg-6 col-xl-6">
                              <HighlightCard/>
                          </div>
                        </div>
                      </div>

                      <div className='col-lg-6'>
                      <Timeline />
                      </div>
                    
                      {/*end::Col*/}
                    </div>

                    <div className="row  mt-5">

                      <div className="col-md-6 col-lg-6 col-xl-6 col-xxl-6 mb-10">
                        <SalesStatisticsCard />
                      </div>
                      <EventComponent />

                    </div>

                    <div className="col-xxl-6">
                        {/*begin::Engage widget 8*/}
                        <div
                          className="card border-0 h-md-100"
                          data-bs-theme="light"
                          style={{
                            background:
                              "linear-gradient(112.14deg, #00D2FF 0%, #3A7BD5 100%)"
                          }}
                        >
                          {/*begin::Body*/}
                          <div className="card-body">
                            {/*begin::Row*/}
                            <div className="row align-items-center h-100">
                              {/*begin::Col*/}
                              <div className="col-7 ps-xl-13">
                                {/*begin::Title*/}
                                <div className="text-white mb-6 pt-6">
                                  <span className="fs-4 fw-semibold me-2 d-block lh-1 pb-2 opacity-75">
                                    Get best offer
                                  </span>
                                  <span className="fs-2qx fw-bold">Upgrade Your Plan</span>
                                </div>
                                {/*end::Title*/}
                                {/*begin::Text*/}
                                <span className="fw-semibold text-white fs-6 mb-8 d-block opacity-75">
                                  Flat cartoony and illustrations with vivid unblended
                                  purple hair lady
                                </span>
                                {/*end::Text*/}
                                {/*begin::Items*/}
                                <div className="d-flex align-items-center flex-wrap d-grid gap-2 mb-10 mb-xl-20">
                                  {/*begin::Item*/}
                                  <div className="d-flex align-items-center me-5 me-xl-13">
                                    {/*begin::Symbol*/}
                                    <div className="symbol symbol-30px symbol-circle me-3">
                                      <span
                                        className="symbol-label"
                                        style={{ background: "#35C7FF" }}
                                      >
                                        <i className="ki-duotone ki-abstract-41 fs-5 text-white">
                                          <span className="path1" />
                                          <span className="path2" />
                                        </i>{" "}
                                      </span>
                                    </div>
                                    {/*end::Symbol*/}
                                    {/*begin::Info*/}
                                    <div className="text-white">
                                      <span className="fw-semibold d-block fs-8 opacity-75">
                                        Projects
                                      </span>
                                      <span className="fw-bold fs-7">Up to 500</span>
                                    </div>
                                    {/*end::Info*/}
                                  </div>
                                  {/*end::Item*/}
                                  {/*begin::Item*/}
                                  <div className="d-flex align-items-center">
                                    {/*begin::Symbol*/}
                                    <div className="symbol symbol-30px symbol-circle me-3">
                                      <span
                                        className="symbol-label"
                                        style={{ background: "#35C7FF" }}
                                      >
                                        <i className="ki-duotone ki-abstract-26 fs-5 text-white">
                                          <span className="path1" />
                                          <span className="path2" />
                                        </i>{" "}
                                      </span>
                                    </div>
                                    {/*end::Symbol*/}
                                    {/*begin::Info*/}
                                    <div className="text-white">
                                      <span className="fw-semibold opacity-75 d-block fs-8">
                                        Tasks
                                      </span>
                                      <span className="fw-bold fs-7">Unlimited</span>
                                    </div>
                                    {/*end::Info*/}
                                  </div>
                                  {/*end::Item*/}
                                </div>
                                {/*end::Items*/}
                                {/*begin::Action*/}
                                <div className="d-flex flex-column flex-sm-row d-grid gap-2">
                                  <a
                                    href="#"
                                    className="btn btn-success flex-shrink-0 me-lg-2"
                                    data-bs-toggle="modal"
                                    data-bs-target="#kt_modal_upgrade_plan"
                                  >
                                    Upgrade Plan
                                  </a>
                                  <a
                                    href="#"
                                    className="btn btn-primary flex-shrink-0"
                                    style={{ background: "rgba(255, 255, 255, 0.2)" }}
                                    data-bs-toggle="modal"
                                    data-bs-target="#kt_modal_create_app"
                                  >
                                    Read Guides
                                  </a>
                                </div>
                                {/*end::Action*/}
                              </div>
                              {/*end::Col*/}
                              {/*begin::Col*/}
                              <div className="col-5 pt-10">
                                {/*begin::Illustration*/}
                                <div
                                  className="bgi-no-repeat bgi-size-contain bgi-position-x-end h-225px"
                                  style={{
                                    backgroundImage:
                                      'url("/keen/demo3/assets/media/svg/illustrations/easy/5.svg'
                                  }}
                                ></div>
                                {/*end::Illustration*/}
                              </div>
                              {/*end::Col*/}
                            </div>
                            {/*end::Row*/}
                          </div>
                          {/*end::Body*/}
                        </div>
                        {/*end::Engage widget 8*/}{" "}
                      </div>

                   

                    


                    <div className="row gy-5 g-xl-10">
                      <div className="col-xl-6 mb-xl-10">
                        {/*begin::Table widget 2*/}
                        <div className="card h-md-100">
                          {/*begin::Header*/}
                          <div className="card-header align-items-center border-0">
                            {/*begin::Title*/}
                            <h3 className="fw-bold text-gray-900 m-0">Recent Orders</h3>
                            {/*end::Title*/}
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
                                  <a className="btn btn-primary  btn-sm px-4" href="#">
                                    Generate Reports
                                  </a>
                                </div>
                              </div>
                              {/*end::Menu item*/}
                            </div>
                            {/*end::Menu 2*/}
                            {/*end::Menu*/}
                          </div>
                          {/*end::Header*/}
                          {/*begin::Body*/}
                          <div className="card-body pt-2">
                            {/*begin::Nav*/}
                            <ul className="nav nav-pills nav-pills-custom mb-3" role="tablist">
                              {/*begin::Item*/}
                              <li className="nav-item mb-3 me-3 me-lg-6" role="presentation">
                                {/*begin::Link*/}
                                <a
                                  className="nav-link d-flex justify-content-between flex-column flex-center overflow-hidden w-80px h-85px py-4"
                                  data-bs-toggle="pill"
                                  href="#kt_stats_widget_2_tab_1"
                                  aria-selected="false"
                                  role="tab"
                                  tabIndex={-1}
                                >
                                  {/*begin::Icon*/}
                                  <div className="nav-icon">
                                    <img
                                      alt=""
                                      src="assets/media/svg/products-categories/t-shirt.svg"
                                      className=""
                                    />
                                  </div>
                                  {/*end::Icon*/}
                                  {/*begin::Subtitle*/}
                                  <span className="nav-text text-gray-700 fw-bold fs-6 lh-1">
                                    T-shirt
                                  </span>
                                  {/*end::Subtitle*/}
                                  {/*begin::Bullet*/}
                                  <span className="bullet-custom position-absolute bottom-0 w-100 h-4px bg-primary" />
                                  {/*end::Bullet*/}
                                </a>
                                {/*end::Link*/}
                              </li>
                              {/*end::Item*/}
                              {/*begin::Item*/}
                              <li className="nav-item mb-3 me-3 me-lg-6" role="presentation">
                                {/*begin::Link*/}
                                <a
                                  className="nav-link d-flex justify-content-between flex-column flex-center overflow-hidden w-80px h-85px py-4"
                                  data-bs-toggle="pill"
                                  href="#kt_stats_widget_2_tab_2"
                                  aria-selected="false"
                                  role="tab"
                                  tabIndex={-1}
                                >
                                  {/*begin::Icon*/}
                                  <div className="nav-icon">
                                    <img
                                      alt=""
                                      src="assets/media/svg/products-categories/gaming.svg"
                                      className=""
                                    />
                                  </div>
                                  {/*end::Icon*/}
                                  {/*begin::Subtitle*/}
                                  <span className="nav-text text-gray-700 fw-bold fs-6 lh-1">
                                    Gaming
                                  </span>
                                  {/*end::Subtitle*/}
                                  {/*begin::Bullet*/}
                                  <span className="bullet-custom position-absolute bottom-0 w-100 h-4px bg-primary" />
                                  {/*end::Bullet*/}
                                </a>
                                {/*end::Link*/}
                              </li>
                              {/*end::Item*/}
                              {/*begin::Item*/}
                              <li className="nav-item mb-3 me-3 me-lg-6" role="presentation">
                                {/*begin::Link*/}
                                <a
                                  className="nav-link d-flex justify-content-between flex-column flex-center overflow-hidden w-80px h-85px py-4"
                                  data-bs-toggle="pill"
                                  href="#kt_stats_widget_2_tab_3"
                                  aria-selected="false"
                                  role="tab"
                                  tabIndex={-1}
                                >
                                  {/*begin::Icon*/}
                                  <div className="nav-icon">
                                    <img
                                      alt=""
                                      src="assets/media/svg/products-categories/watch.svg"
                                      className=""
                                    />
                                  </div>
                                  {/*end::Icon*/}
                                  {/*begin::Subtitle*/}
                                  <span className="nav-text text-gray-600 fw-bold fs-6 lh-1">
                                    Watch
                                  </span>
                                  {/*end::Subtitle*/}
                                  {/*begin::Bullet*/}
                                  <span className="bullet-custom position-absolute bottom-0 w-100 h-4px bg-primary" />
                                  {/*end::Bullet*/}
                                </a>
                                {/*end::Link*/}
                              </li>
                              {/*end::Item*/}
                              {/*begin::Item*/}
                              <li className="nav-item mb-3 me-3 me-lg-6" role="presentation">
                                {/*begin::Link*/}
                                <a
                                  className="nav-link d-flex justify-content-between flex-column flex-center overflow-hidden w-80px h-85px py-4 active"
                                  data-bs-toggle="pill"
                                  href="#kt_stats_widget_2_tab_4"
                                  aria-selected="true"
                                  role="tab"
                                >
                                  {/*begin::Icon*/}
                                  <div className="nav-icon">
                                    <img
                                      alt=""
                                      src="assets/media/svg/products-categories/gloves.svg"
                                      className="nav-icon"
                                    />
                                  </div>
                                  {/*end::Icon*/}
                                  {/*begin::Subtitle*/}
                                  <span className="nav-text text-gray-600 fw-bold fs-6 lh-1">
                                    Gloves
                                  </span>
                                  {/*end::Subtitle*/}
                                  {/*begin::Bullet*/}
                                  <span className="bullet-custom position-absolute bottom-0 w-100 h-4px bg-primary" />
                                  {/*end::Bullet*/}
                                </a>
                                {/*end::Link*/}
                              </li>
                              {/*end::Item*/}
                              {/*begin::Item*/}
                              <li className="nav-item mb-3" role="presentation">
                                {/*begin::Link*/}
                                <a
                                  className="nav-link d-flex justify-content-between flex-column flex-center overflow-hidden w-80px h-85px py-4"
                                  data-bs-toggle="pill"
                                  href="#kt_stats_widget_2_tab_5"
                                  aria-selected="false"
                                  tabIndex={-1}
                                  role="tab"
                                >
                                  {/*begin::Icon*/}
                                  <div className="nav-icon">
                                    <img
                                      alt=""
                                      src="assets/media/svg/products-categories/shoes.svg"
                                      className="nav-icon"
                                    />
                                  </div>
                                  {/*end::Icon*/}
                                  {/*begin::Subtitle*/}
                                  <span className="nav-text text-gray-600 fw-bold fs-6 lh-1">
                                    Shoes
                                  </span>
                                  {/*end::Subtitle*/}
                                  {/*begin::Bullet*/}
                                  <span className="bullet-custom position-absolute bottom-0 w-100 h-4px bg-primary" />
                                  {/*end::Bullet*/}
                                </a>
                                {/*end::Link*/}
                              </li>
                              {/*end::Item*/}
                            </ul>
                            {/*end::Nav*/}
                            {/*begin::Tab Content*/}
                            <div className="tab-content">
                              {/*begin::Tap pane*/}
                              <div
                                className="tab-pane fade"
                                id="kt_stats_widget_2_tab_1"
                                role="tabpanel"
                              >
                                {/*begin::Table container*/}
                                <div className="table-responsive">
                                  {/*begin::Table*/}
                                  <table className="table table-row-dashed align-middle gs-0 gy-4 my-0">
                                    {/*begin::Table head*/}
                                    <thead>
                                      <tr className="fs-7 fw-bold text-gray-500 border-bottom-0">
                                        <th className="ps-0 w-50px">ITEM</th>
                                        <th className="min-w-125px" />
                                        <th className="text-end min-w-100px">QTY</th>
                                        <th className="pe-0 text-end min-w-100px">PRICE</th>
                                        <th className="pe-0 text-end min-w-100px">TOTAL PRICE</th>
                                      </tr>
                                    </thead>
                                    {/*end::Table head*/}
                                    {/*begin::Table body*/}
                                    <tbody>
                                      <tr>
                                        <td>
                                          <img
                                            src="assets/media/stock/ecommerce/210.png"
                                            className="w-50px ms-n1"
                                            alt=""
                                          />
                                        </td>
                                        <td className="ps-0">
                                          <a
                                            href="../apps/ecommerce/catalog/edit-product.html"
                                            className="text-gray-800 fw-bold text-hover-primary mb-1 fs-6 text-start pe-0"
                                          >
                                            Elephant 1802
                                          </a>
                                          <span className="text-gray-500 fw-semibold fs-7 d-block text-start ps-0">
                                            Item: #XDG-2347
                                          </span>
                                        </td>
                                        <td>
                                          <span className="text-gray-800 fw-bold d-block fs-6 ps-0 text-end">
                                            x1
                                          </span>
                                        </td>
                                        <td className="text-end pe-0">
                                          <span className="text-gray-800 fw-bold d-block fs-6">
                                            $72.00
                                          </span>
                                        </td>
                                        <td className="text-end pe-0">
                                          <span className="text-gray-800 fw-bold d-block fs-6">
                                            $126.00
                                          </span>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>
                                          <img
                                            src="assets/media/stock/ecommerce/215.png"
                                            className="w-50px ms-n1"
                                            alt=""
                                          />
                                        </td>
                                        <td className="ps-0">
                                          <a
                                            href="../apps/ecommerce/catalog/edit-product.html"
                                            className="text-gray-800 fw-bold text-hover-primary mb-1 fs-6 text-start pe-0"
                                          >
                                            Red Laga
                                          </a>
                                          <span className="text-gray-500 fw-semibold fs-7 d-block text-start ps-0">
                                            Item: #XDG-1321
                                          </span>
                                        </td>
                                        <td>
                                          <span className="text-gray-800 fw-bold d-block fs-6 ps-0 text-end">
                                            x2
                                          </span>
                                        </td>
                                        <td className="text-end pe-0">
                                          <span className="text-gray-800 fw-bold d-block fs-6">
                                            $45.00
                                          </span>
                                        </td>
                                        <td className="text-end pe-0">
                                          <span className="text-gray-800 fw-bold d-block fs-6">
                                            $76.00
                                          </span>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>
                                          <img
                                            src="assets/media/stock/ecommerce/209.png"
                                            className="w-50px ms-n1"
                                            alt=""
                                          />
                                        </td>
                                        <td className="ps-0">
                                          <a
                                            href="../apps/ecommerce/catalog/edit-product.html"
                                            className="text-gray-800 fw-bold text-hover-primary mb-1 fs-6 text-start pe-0"
                                          >
                                            RiseUP
                                          </a>
                                          <span className="text-gray-500 fw-semibold fs-7 d-block text-start ps-0">
                                            Item: #XDG-4312
                                          </span>
                                        </td>
                                        <td>
                                          <span className="text-gray-800 fw-bold d-block fs-6 ps-0 text-end">
                                            x3
                                          </span>
                                        </td>
                                        <td className="text-end pe-0">
                                          <span className="text-gray-800 fw-bold d-block fs-6">
                                            $84.00
                                          </span>
                                        </td>
                                        <td className="text-end pe-0">
                                          <span className="text-gray-800 fw-bold d-block fs-6">
                                            $168.00
                                          </span>
                                        </td>
                                      </tr>
                                    </tbody>
                                    {/*end::Table body*/}
                                  </table>
                                  {/*end::Table*/}
                                </div>
                                {/*end::Table container*/}
                              </div>
                              {/*end::Tap pane*/}
                              {/*begin::Tap pane*/}
                              <div
                                className="tab-pane fade"
                                id="kt_stats_widget_2_tab_2"
                                role="tabpanel"
                              >
                                {/*begin::Table container*/}
                                <div className="table-responsive">
                                  {/*begin::Table*/}
                                  <table className="table table-row-dashed align-middle gs-0 gy-4 my-0">
                                    {/*begin::Table head*/}
                                    <thead>
                                      <tr className="fs-7 fw-bold text-gray-500 border-bottom-0">
                                        <th className="ps-0 w-50px">ITEM</th>
                                        <th className="min-w-125px" />
                                        <th className="text-end min-w-100px">QTY</th>
                                        <th className="pe-0 text-end min-w-100px">PRICE</th>
                                        <th className="pe-0 text-end min-w-100px">TOTAL PRICE</th>
                                      </tr>
                                    </thead>
                                    {/*end::Table head*/}
                                    {/*begin::Table body*/}
                                    <tbody>
                                      <tr>
                                        <td>
                                          <img
                                            src="assets/media/stock/ecommerce/197.png"
                                            className="w-50px ms-n1"
                                            alt=""
                                          />
                                        </td>
                                        <td className="ps-0">
                                          <a
                                            href="../apps/ecommerce/catalog/edit-product.html"
                                            className="text-gray-800 fw-bold text-hover-primary mb-1 fs-6 text-start pe-0"
                                          >
                                            Elephant 1802
                                          </a>
                                          <span className="text-gray-500 fw-semibold fs-7 d-block text-start ps-0">
                                            Item: #XDG-4312
                                          </span>
                                        </td>
                                        <td>
                                          <span className="text-gray-800 fw-bold d-block fs-6 ps-0 text-end">
                                            x1
                                          </span>
                                        </td>
                                        <td className="text-end pe-0">
                                          <span className="text-gray-800 fw-bold d-block fs-6">
                                            $32.00
                                          </span>
                                        </td>
                                        <td className="text-end pe-0">
                                          <span className="text-gray-800 fw-bold d-block fs-6">
                                            $312.00
                                          </span>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>
                                          <img
                                            src="assets/media/stock/ecommerce/178.png"
                                            className="w-50px ms-n1"
                                            alt=""
                                          />
                                        </td>
                                        <td className="ps-0">
                                          <a
                                            href="../apps/ecommerce/catalog/edit-product.html"
                                            className="text-gray-800 fw-bold text-hover-primary mb-1 fs-6 text-start pe-0"
                                          >
                                            Red Laga
                                          </a>
                                          <span className="text-gray-500 fw-semibold fs-7 d-block text-start ps-0">
                                            Item: #XDG-3122
                                          </span>
                                        </td>
                                        <td>
                                          <span className="text-gray-800 fw-bold d-block fs-6 ps-0 text-end">
                                            x2
                                          </span>
                                        </td>
                                        <td className="text-end pe-0">
                                          <span className="text-gray-800 fw-bold d-block fs-6">
                                            $53.00
                                          </span>
                                        </td>
                                        <td className="text-end pe-0">
                                          <span className="text-gray-800 fw-bold d-block fs-6">
                                            $62.00
                                          </span>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>
                                          <img
                                            src="assets/media/stock/ecommerce/22.png"
                                            className="w-50px ms-n1"
                                            alt=""
                                          />
                                        </td>
                                        <td className="ps-0">
                                          <a
                                            href="../apps/ecommerce/catalog/edit-product.html"
                                            className="text-gray-800 fw-bold text-hover-primary mb-1 fs-6 text-start pe-0"
                                          >
                                            RiseUP
                                          </a>
                                          <span className="text-gray-500 fw-semibold fs-7 d-block text-start ps-0">
                                            Item: #XDG-1142
                                          </span>
                                        </td>
                                        <td>
                                          <span className="text-gray-800 fw-bold d-block fs-6 ps-0 text-end">
                                            x3
                                          </span>
                                        </td>
                                        <td className="text-end pe-0">
                                          <span className="text-gray-800 fw-bold d-block fs-6">
                                            $74.00
                                          </span>
                                        </td>
                                        <td className="text-end pe-0">
                                          <span className="text-gray-800 fw-bold d-block fs-6">
                                            $139.00
                                          </span>
                                        </td>
                                      </tr>
                                    </tbody>
                                    {/*end::Table body*/}
                                  </table>
                                  {/*end::Table*/}
                                </div>
                                {/*end::Table container*/}
                              </div>
                              {/*end::Tap pane*/}
                              {/*begin::Tap pane*/}
                              <div
                                className="tab-pane fade"
                                id="kt_stats_widget_2_tab_3"
                                role="tabpanel"
                              >
                                {/*begin::Table container*/}
                                <div className="table-responsive">
                                  {/*begin::Table*/}
                                  <table className="table table-row-dashed align-middle gs-0 gy-4 my-0">
                                    {/*begin::Table head*/}
                                    <thead>
                                      <tr className="fs-7 fw-bold text-gray-500 border-bottom-0">
                                        <th className="ps-0 w-50px">ITEM</th>
                                        <th className="min-w-125px" />
                                        <th className="text-end min-w-100px">QTY</th>
                                        <th className="pe-0 text-end min-w-100px">PRICE</th>
                                        <th className="pe-0 text-end min-w-100px">TOTAL PRICE</th>
                                      </tr>
                                    </thead>
                                    {/*end::Table head*/}
                                    {/*begin::Table body*/}
                                    <tbody>
                                      <tr>
                                        <td>
                                          <img
                                            src="assets/media/stock/ecommerce/1.png"
                                            className="w-50px ms-n1"
                                            alt=""
                                          />
                                        </td>
                                        <td className="ps-0">
                                          <a
                                            href="../apps/ecommerce/catalog/edit-product.html"
                                            className="text-gray-800 fw-bold text-hover-primary mb-1 fs-6 text-start pe-0"
                                          >
                                            Elephant 1324
                                          </a>
                                          <span className="text-gray-500 fw-semibold fs-7 d-block text-start ps-0">
                                            Item: #XDG-1523
                                          </span>
                                        </td>
                                        <td>
                                          <span className="text-gray-800 fw-bold d-block fs-6 ps-0 text-end">
                                            x1
                                          </span>
                                        </td>
                                        <td className="text-end pe-0">
                                          <span className="text-gray-800 fw-bold d-block fs-6">
                                            $43.00
                                          </span>
                                        </td>
                                        <td className="text-end pe-0">
                                          <span className="text-gray-800 fw-bold d-block fs-6">
                                            $231.00
                                          </span>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>
                                          <img
                                            src="assets/media/stock/ecommerce/24.png"
                                            className="w-50px ms-n1"
                                            alt=""
                                          />
                                        </td>
                                        <td className="ps-0">
                                          <a
                                            href="../apps/ecommerce/catalog/edit-product.html"
                                            className="text-gray-800 fw-bold text-hover-primary mb-1 fs-6 text-start pe-0"
                                          >
                                            Red Laga
                                          </a>
                                          <span className="text-gray-500 fw-semibold fs-7 d-block text-start ps-0">
                                            Item: #XDG-5314
                                          </span>
                                        </td>
                                        <td>
                                          <span className="text-gray-800 fw-bold d-block fs-6 ps-0 text-end">
                                            x2
                                          </span>
                                        </td>
                                        <td className="text-end pe-0">
                                          <span className="text-gray-800 fw-bold d-block fs-6">
                                            $71.00
                                          </span>
                                        </td>
                                        <td className="text-end pe-0">
                                          <span className="text-gray-800 fw-bold d-block fs-6">
                                            $53.00
                                          </span>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>
                                          <img
                                            src="assets/media/stock/ecommerce/71.png"
                                            className="w-50px ms-n1"
                                            alt=""
                                          />
                                        </td>
                                        <td className="ps-0">
                                          <a
                                            href="../apps/ecommerce/catalog/edit-product.html"
                                            className="text-gray-800 fw-bold text-hover-primary mb-1 fs-6 text-start pe-0"
                                          >
                                            RiseUP
                                          </a>
                                          <span className="text-gray-500 fw-semibold fs-7 d-block text-start ps-0">
                                            Item: #XDG-4222
                                          </span>
                                        </td>
                                        <td>
                                          <span className="text-gray-800 fw-bold d-block fs-6 ps-0 text-end">
                                            x3
                                          </span>
                                        </td>
                                        <td className="text-end pe-0">
                                          <span className="text-gray-800 fw-bold d-block fs-6">
                                            $23.00
                                          </span>
                                        </td>
                                        <td className="text-end pe-0">
                                          <span className="text-gray-800 fw-bold d-block fs-6">
                                            $213.00
                                          </span>
                                        </td>
                                      </tr>
                                    </tbody>
                                    {/*end::Table body*/}
                                  </table>
                                  {/*end::Table*/}
                                </div>
                                {/*end::Table container*/}
                              </div>
                              {/*end::Tap pane*/}
                              {/*begin::Tap pane*/}
                              <div
                                className="tab-pane fade active show"
                                id="kt_stats_widget_2_tab_4"
                                role="tabpanel"
                              >
                                {/*begin::Table container*/}
                                <div className="table-responsive">
                                  {/*begin::Table*/}
                                  <table className="table table-row-dashed align-middle gs-0 gy-4 my-0">
                                    {/*begin::Table head*/}
                                    <thead>
                                      <tr className="fs-7 fw-bold text-gray-500 border-bottom-0">
                                        <th className="ps-0 w-50px">ITEM</th>
                                        <th className="min-w-125px" />
                                        <th className="text-end min-w-100px">QTY</th>
                                        <th className="pe-0 text-end min-w-100px">PRICE</th>
                                        <th className="pe-0 text-end min-w-100px">TOTAL PRICE</th>
                                      </tr>
                                    </thead>
                                    {/*end::Table head*/}
                                    {/*begin::Table body*/}
                                    <tbody>
                                      <tr>
                                        <td>
                                          <img
                                            src="assets/media/stock/ecommerce/41.png"
                                            className="w-50px ms-n1"
                                            alt=""
                                          />
                                        </td>
                                        <td className="ps-0">
                                          <a
                                            href="../apps/ecommerce/catalog/edit-product.html"
                                            className="text-gray-800 fw-bold text-hover-primary mb-1 fs-6 text-start pe-0"
                                          >
                                            Elephant 2635
                                          </a>
                                          <span className="text-gray-500 fw-semibold fs-7 d-block text-start ps-0">
                                            Item: #XDG-1523
                                          </span>
                                        </td>
                                        <td>
                                          <span className="text-gray-800 fw-bold d-block fs-6 ps-0 text-end">
                                            x1
                                          </span>
                                        </td>
                                        <td className="text-end pe-0">
                                          <span className="text-gray-800 fw-bold d-block fs-6">
                                            $65.00
                                          </span>
                                        </td>
                                        <td className="text-end pe-0">
                                          <span className="text-gray-800 fw-bold d-block fs-6">
                                            $163.00
                                          </span>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>
                                          <img
                                            src="assets/media/stock/ecommerce/63.png"
                                            className="w-50px ms-n1"
                                            alt=""
                                          />
                                        </td>
                                        <td className="ps-0">
                                          <a
                                            href="../apps/ecommerce/catalog/edit-product.html"
                                            className="text-gray-800 fw-bold text-hover-primary mb-1 fs-6 text-start pe-0"
                                          >
                                            Red Laga
                                          </a>
                                          <span className="text-gray-500 fw-semibold fs-7 d-block text-start ps-0">
                                            Item: #XDG-2745
                                          </span>
                                        </td>
                                        <td>
                                          <span className="text-gray-800 fw-bold d-block fs-6 ps-0 text-end">
                                            x2
                                          </span>
                                        </td>
                                        <td className="text-end pe-0">
                                          <span className="text-gray-800 fw-bold d-block fs-6">
                                            $64.00
                                          </span>
                                        </td>
                                        <td className="text-end pe-0">
                                          <span className="text-gray-800 fw-bold d-block fs-6">
                                            $73.00
                                          </span>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>
                                          <img
                                            src="assets/media/stock/ecommerce/59.png"
                                            className="w-50px ms-n1"
                                            alt=""
                                          />
                                        </td>
                                        <td className="ps-0">
                                          <a
                                            href="../apps/ecommerce/catalog/edit-product.html"
                                            className="text-gray-800 fw-bold text-hover-primary mb-1 fs-6 text-start pe-0"
                                          >
                                            RiseUP
                                          </a>
                                          <span className="text-gray-500 fw-semibold fs-7 d-block text-start ps-0">
                                            Item: #XDG-5173
                                          </span>
                                        </td>
                                        <td>
                                          <span className="text-gray-800 fw-bold d-block fs-6 ps-0 text-end">
                                            x3
                                          </span>
                                        </td>
                                        <td className="text-end pe-0">
                                          <span className="text-gray-800 fw-bold d-block fs-6">
                                            $54.00
                                          </span>
                                        </td>
                                        <td className="text-end pe-0">
                                          <span className="text-gray-800 fw-bold d-block fs-6">
                                            $173.00
                                          </span>
                                        </td>
                                      </tr>
                                    </tbody>
                                    {/*end::Table body*/}
                                  </table>
                                  {/*end::Table*/}
                                </div>
                                {/*end::Table container*/}
                              </div>
                              {/*end::Tap pane*/}
                              {/*begin::Tap pane*/}
                              <div
                                className="tab-pane fade "
                                id="kt_stats_widget_2_tab_5"
                                role="tabpanel"
                              >
                                {/*begin::Table container*/}
                                <div className="table-responsive">
                                  {/*begin::Table*/}
                                  <table className="table table-row-dashed align-middle gs-0 gy-4 my-0">
                                    {/*begin::Table head*/}
                                    <thead>
                                      <tr className="fs-7 fw-bold text-gray-500 border-bottom-0">
                                        <th className="ps-0 w-50px">ITEM</th>
                                        <th className="min-w-125px" />
                                        <th className="text-end min-w-100px">QTY</th>
                                        <th className="pe-0 text-end min-w-100px">PRICE</th>
                                        <th className="pe-0 text-end min-w-100px">TOTAL PRICE</th>
                                      </tr>
                                    </thead>
                                    {/*end::Table head*/}
                                    {/*begin::Table body*/}
                                    <tbody>
                                      <tr>
                                        <td>
                                          <img
                                            src="assets/media/stock/ecommerce/10.png"
                                            className="w-50px ms-n1"
                                            alt=""
                                          />
                                        </td>
                                        <td className="ps-0">
                                          <a
                                            href="../apps/ecommerce/catalog/edit-product.html"
                                            className="text-gray-800 fw-bold text-hover-primary mb-1 fs-6 text-start pe-0"
                                          >
                                            Nike
                                          </a>
                                          <span className="text-gray-500 fw-semibold fs-7 d-block text-start ps-0">
                                            Item: #XDG-2163
                                          </span>
                                        </td>
                                        <td>
                                          <span className="text-gray-800 fw-bold d-block fs-6 ps-0 text-end">
                                            x1
                                          </span>
                                        </td>
                                        <td className="text-end pe-0">
                                          <span className="text-gray-800 fw-bold d-block fs-6">
                                            $64.00
                                          </span>
                                        </td>
                                        <td className="text-end pe-0">
                                          <span className="text-gray-800 fw-bold d-block fs-6">
                                            $287.00
                                          </span>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>
                                          <img
                                            src="assets/media/stock/ecommerce/96.png"
                                            className="w-50px ms-n1"
                                            alt=""
                                          />
                                        </td>
                                        <td className="ps-0">
                                          <a
                                            href="../apps/ecommerce/catalog/edit-product.html"
                                            className="text-gray-800 fw-bold text-hover-primary mb-1 fs-6 text-start pe-0"
                                          >
                                            Adidas
                                          </a>
                                          <span className="text-gray-500 fw-semibold fs-7 d-block text-start ps-0">
                                            Item: #XDG-2162
                                          </span>
                                        </td>
                                        <td>
                                          <span className="text-gray-800 fw-bold d-block fs-6 ps-0 text-end">
                                            x2
                                          </span>
                                        </td>
                                        <td className="text-end pe-0">
                                          <span className="text-gray-800 fw-bold d-block fs-6">
                                            $76.00
                                          </span>
                                        </td>
                                        <td className="text-end pe-0">
                                          <span className="text-gray-800 fw-bold d-block fs-6">
                                            $51.00
                                          </span>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>
                                          <img
                                            src="assets/media/stock/ecommerce/13.png"
                                            className="w-50px ms-n1"
                                            alt=""
                                          />
                                        </td>
                                        <td className="ps-0">
                                          <a
                                            href="../apps/ecommerce/catalog/edit-product.html"
                                            className="text-gray-800 fw-bold text-hover-primary mb-1 fs-6 text-start pe-0"
                                          >
                                            Puma
                                          </a>
                                          <span className="text-gray-500 fw-semibold fs-7 d-block text-start ps-0">
                                            Item: #XDG-1537
                                          </span>
                                        </td>
                                        <td>
                                          <span className="text-gray-800 fw-bold d-block fs-6 ps-0 text-end">
                                            x3
                                          </span>
                                        </td>
                                        <td className="text-end pe-0">
                                          <span className="text-gray-800 fw-bold d-block fs-6">
                                            $27.00
                                          </span>
                                        </td>
                                        <td className="text-end pe-0">
                                          <span className="text-gray-800 fw-bold d-block fs-6">
                                            $167.00
                                          </span>
                                        </td>
                                      </tr>
                                    </tbody>
                                    {/*end::Table body*/}
                                  </table>
                                  {/*end::Table*/}
                                </div>
                                {/*end::Table container*/}
                              </div>
                              {/*end::Tap pane*/}
                            </div>
                            {/*end::Tab Content*/}
                          </div>
                          {/*end: Card Body*/}
                        </div>
                        {/*end::Table widget 2*/}{" "}
                      </div>
                      <div className="col-xl-6 mb-5 mb-xl-10">
                        {/*begin::Chart widget 4*/}
                        <div className="card card-flush overflow-hidden h-md-100">
                          {/*begin::Header*/}
                          <div className="card-header py-5">
                            {/*begin::Title*/}
                            <h3 className="card-title align-items-start flex-column">
                              <span className="card-label fw-bold text-gray-900">
                                Discounted Product Sales
                              </span>
                              <span className="text-gray-500 mt-1 fw-semibold fs-6">
                                Users from all channels
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
                                    <a className="btn btn-primary  btn-sm px-4" href="#">
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
                          {/*begin::Card body*/}
                          <div className="card-body d-flex justify-content-between flex-column pb-1 px-0">
                            {/*begin::Info*/}
                            <div className="px-9 mb-5">
                              {/*begin::Statistics*/}
                              <div className="d-flex align-items-center mb-2">
                                {/*begin::Currency*/}
                                <span className="fs-4 fw-semibold text-gray-500 align-self-start me-1">
                                  $
                                </span>
                                {/*end::Currency*/}
                                {/*begin::Value*/}
                                <span className="fs-2hx fw-bold text-gray-800 me-2 lh-1 ls-n2">
                                  3,706
                                </span>
                                {/*end::Value*/}
                                {/*begin::Label*/}
                                <span className="badge badge-light-success fs-base">
                                  <i className="ki-duotone ki-arrow-down fs-5 text-success ms-n1">
                                    <span className="path1" />
                                    <span className="path2" />
                                  </i>{" "}
                                  4.5%
                                </span>
                                {/*end::Label*/}
                              </div>
                              {/*end::Statistics*/}
                              {/*begin::Description*/}
                              <span className="fs-6 fw-semibold text-gray-500">
                                Total Discounted Sales This Month
                              </span>
                              {/*end::Description*/}
                            </div>
                            {/*end::Info*/}
                            {/*begin::Chart*/}
                            <div
                              id="kt_charts_widget_4"
                              className="min-h-auto ps-4 pe-6"
                              style={{ height: 300, minHeight: 315 }}
                            >
                              <div
                                id="apexcharts75o297p8"
                                className="apexcharts-canvas apexcharts75o297p8 apexcharts-theme-light"
                                style={{ width: "578.5px", height: 300 }}
                              >
                                <svg
                                  id="SvgjsSvg1410"
                                  width="578.5"
                                  height={300}
                                  
                                  className="apexcharts-svg apexcharts-zoomable"
                                  
                                  transform="translate(0, 0)"
                                  style={{ background: "transparent" }}
                                >
                                  <foreignObject x={0} y={0} width="578.5" height={300}>
                                    <div
                                      className="apexcharts-legend"
                                      xmlns="http://www.w3.org/1999/xhtml"
                                      style={{ maxHeight: 150 }}
                                    />
                                  </foreignObject>
                                  <rect
                                    id="SvgjsRect1441"
                                    width={0}
                                    height={0}
                                    x={0}
                                    y={0}
                                    rx={0}
                                    ry={0}
                                    opacity={1}
                                    strokeWidth={0}
                                    stroke="none"
                                    strokeDasharray={0}
                                    fill="#fefefe"
                                  />
                                  <g
                                    id="SvgjsG1504"
                                    className="apexcharts-yaxis"
                                    rel={0}
                                    transform="translate(23.6953125, 0)"
                                  >
                                    <g id="SvgjsG1505" className="apexcharts-yaxis-texts-g">
                                      <text
                                        id="SvgjsText1507"
                                        fontFamily="inherit"
                                        x={20}
                                        y="31.6"
                                        textAnchor="end"
                                        dominantBaseline="auto"
                                        fontSize="12px"
                                        fontWeight={400}
                                        fill="#99a1b7"
                                        className="apexcharts-text apexcharts-yaxis-label "
                                        style={{ fontFamily: "inherit" }}
                                      >
                                        <tspan id="SvgjsTspan1508">$363</tspan>
                                        <title>$363</title>
                                      </text>
                                      <text
                                        id="SvgjsText1510"
                                        fontFamily="inherit"
                                        x={20}
                                        y="68.74977777777778"
                                        textAnchor="end"
                                        dominantBaseline="auto"
                                        fontSize="12px"
                                        fontWeight={400}
                                        fill="#99a1b7"
                                        className="apexcharts-text apexcharts-yaxis-label "
                                        style={{ fontFamily: "inherit" }}
                                      >
                                        <tspan id="SvgjsTspan1511">$357</tspan>
                                        <title>$357</title>
                                      </text>
                                      <text
                                        id="SvgjsText1513"
                                        fontFamily="inherit"
                                        x={20}
                                        y="105.89955555555557"
                                        textAnchor="end"
                                        dominantBaseline="auto"
                                        fontSize="12px"
                                        fontWeight={400}
                                        fill="#99a1b7"
                                        className="apexcharts-text apexcharts-yaxis-label "
                                        style={{ fontFamily: "inherit" }}
                                      >
                                        <tspan id="SvgjsTspan1514">$352</tspan>
                                        <title>$352</title>
                                      </text>
                                      <text
                                        id="SvgjsText1516"
                                        fontFamily="inherit"
                                        x={20}
                                        y="143.04933333333335"
                                        textAnchor="end"
                                        dominantBaseline="auto"
                                        fontSize="12px"
                                        fontWeight={400}
                                        fill="#99a1b7"
                                        className="apexcharts-text apexcharts-yaxis-label "
                                        style={{ fontFamily: "inherit" }}
                                      >
                                        <tspan id="SvgjsTspan1517">$346</tspan>
                                        <title>$346</title>
                                      </text>
                                      <text
                                        id="SvgjsText1519"
                                        fontFamily="inherit"
                                        x={20}
                                        y="180.19911111111114"
                                        textAnchor="end"
                                        dominantBaseline="auto"
                                        fontSize="12px"
                                        fontWeight={400}
                                        fill="#99a1b7"
                                        className="apexcharts-text apexcharts-yaxis-label "
                                        style={{ fontFamily: "inherit" }}
                                      >
                                        <tspan id="SvgjsTspan1520">$341</tspan>
                                        <title>$341</title>
                                      </text>
                                      <text
                                        id="SvgjsText1522"
                                        fontFamily="inherit"
                                        x={20}
                                        y="217.34888888888892"
                                        textAnchor="end"
                                        dominantBaseline="auto"
                                        fontSize="12px"
                                        fontWeight={400}
                                        fill="#99a1b7"
                                        className="apexcharts-text apexcharts-yaxis-label "
                                        style={{ fontFamily: "inherit" }}
                                      >
                                        <tspan id="SvgjsTspan1523">$335</tspan>
                                        <title>$335</title>
                                      </text>
                                      <text
                                        id="SvgjsText1525"
                                        fontFamily="inherit"
                                        x={20}
                                        y="254.4986666666667"
                                        textAnchor="end"
                                        dominantBaseline="auto"
                                        fontSize="12px"
                                        fontWeight={400}
                                        fill="#99a1b7"
                                        className="apexcharts-text apexcharts-yaxis-label "
                                        style={{ fontFamily: "inherit" }}
                                      >
                                        <tspan id="SvgjsTspan1526">$330</tspan>
                                        <title>$330</title>
                                      </text>
                                    </g>
                                  </g>
                                  <g
                                    id="SvgjsG1412"
                                    className="apexcharts-inner apexcharts-graphical"
                                    transform="translate(53.6953125, 30)"
                                  >
                                    <defs id="SvgjsDefs1411">
                                      <clipPath id="gridRectMask75o297p8">
                                        <rect
                                          id="SvgjsRect1416"
                                          width="521.8046875"
                                          height="229.89866666666666"
                                          x="-3.5"
                                          y="-3.5"
                                          rx={0}
                                          ry={0}
                                          opacity={1}
                                          strokeWidth={0}
                                          stroke="none"
                                          strokeDasharray={0}
                                          fill="#fff"
                                        />
                                      </clipPath>
                                      <clipPath id="forecastMask75o297p8" />
                                      <clipPath id="nonForecastMask75o297p8" />
                                      <clipPath id="gridRectMarkerMask75o297p8">
                                        <rect
                                          id="SvgjsRect1417"
                                          width="518.8046875"
                                          height="226.89866666666666"
                                          x={-2}
                                          y={-2}
                                          rx={0}
                                          ry={0}
                                          opacity={1}
                                          strokeWidth={0}
                                          stroke="none"
                                          strokeDasharray={0}
                                          fill="#fff"
                                        />
                                      </clipPath>
                                      <linearGradient
                                        id="SvgjsLinearGradient1422"
                                        x1={0}
                                        y1={0}
                                        x2={0}
                                        y2={1}
                                      >
                                        <stop
                                          id="SvgjsStop1423"
                                          stopOpacity="0.4"
                                          stopColor="rgba(44,154,255,0.4)"
                                          offset={0}
                                        />
                                        <stop
                                          id="SvgjsStop1424"
                                          stopOpacity={0}
                                          stopColor="rgba(255,255,255,0)"
                                          offset="0.8"
                                        />
                                        <stop
                                          id="SvgjsStop1425"
                                          stopOpacity={0}
                                          stopColor="rgba(255,255,255,0)"
                                          offset={1}
                                        />
                                      </linearGradient>
                                    </defs>
                                    <g id="SvgjsG1428" className="apexcharts-grid">
                                      <g
                                        id="SvgjsG1429"
                                        className="apexcharts-gridlines-horizontal"
                                      >
                                        <line
                                          id="SvgjsLine1433"
                                          x1={0}
                                          y1="37.14977777777778"
                                          x2="514.8046875"
                                          y2="37.14977777777778"
                                          stroke="#dbdfe9"
                                          strokeDasharray={4}
                                          strokeLinecap="butt"
                                          className="apexcharts-gridline"
                                        />
                                        <line
                                          id="SvgjsLine1434"
                                          x1={0}
                                          y1="74.29955555555556"
                                          x2="514.8046875"
                                          y2="74.29955555555556"
                                          stroke="#dbdfe9"
                                          strokeDasharray={4}
                                          strokeLinecap="butt"
                                          className="apexcharts-gridline"
                                        />
                                        <line
                                          id="SvgjsLine1435"
                                          x1={0}
                                          y1="111.44933333333333"
                                          x2="514.8046875"
                                          y2="111.44933333333333"
                                          stroke="#dbdfe9"
                                          strokeDasharray={4}
                                          strokeLinecap="butt"
                                          className="apexcharts-gridline"
                                        />
                                        <line
                                          id="SvgjsLine1436"
                                          x1={0}
                                          y1="148.5991111111111"
                                          x2="514.8046875"
                                          y2="148.5991111111111"
                                          stroke="#dbdfe9"
                                          strokeDasharray={4}
                                          strokeLinecap="butt"
                                          className="apexcharts-gridline"
                                        />
                                        <line
                                          id="SvgjsLine1437"
                                          x1={0}
                                          y1="185.7488888888889"
                                          x2="514.8046875"
                                          y2="185.7488888888889"
                                          stroke="#dbdfe9"
                                          strokeDasharray={4}
                                          strokeLinecap="butt"
                                          className="apexcharts-gridline"
                                        />
                                        <line
                                          id="SvgjsLine1438"
                                          x1={0}
                                          y1="222.89866666666668"
                                          x2="514.8046875"
                                          y2="222.89866666666668"
                                          stroke="#dbdfe9"
                                          strokeDasharray={4}
                                          strokeLinecap="butt"
                                          className="apexcharts-gridline"
                                        />
                                      </g>
                                      <g
                                        id="SvgjsG1430"
                                        className="apexcharts-gridlines-vertical"
                                      />
                                      <line
                                        id="SvgjsLine1440"
                                        x1={0}
                                        y1="222.89866666666666"
                                        x2="514.8046875"
                                        y2="222.89866666666666"
                                        stroke="transparent"
                                        strokeDasharray={0}
                                        strokeLinecap="butt"
                                      />
                                      <line
                                        id="SvgjsLine1439"
                                        x1={0}
                                        y1={1}
                                        x2={0}
                                        y2="222.89866666666666"
                                        stroke="transparent"
                                        strokeDasharray={0}
                                        strokeLinecap="butt"
                                      />
                                    </g>
                                    <g id="SvgjsG1431" className="apexcharts-grid-borders">
                                      <line
                                        id="SvgjsLine1432"
                                        x1={0}
                                        y1={0}
                                        x2="514.8046875"
                                        y2={0}
                                        stroke="#dbdfe9"
                                        strokeDasharray={4}
                                        strokeLinecap="butt"
                                        className="apexcharts-gridline"
                                      />
                                    </g>
                                    <g
                                      id="SvgjsG1418"
                                      className="apexcharts-area-series apexcharts-plot-series"
                                    >
                                      <g id="SvgjsG1419"
                                        className="apexcharts-series"
                                        zindex={0}
                                        seriesname="Sales" >
                                        <path
                                          id="SvgjsPath1426"
                                          d="M 0 121.58109090909056C 10.010091145833332 121.58109090909056 18.590169270833332 121.58109090909056 28.600260416666664 121.58109090909056C 38.6103515625 121.58109090909056 47.1904296875 87.8085656565654 57.20052083333333 87.8085656565654C 67.21061197916666 87.8085656565654 75.79069010416666 87.8085656565654 85.80078124999999 87.8085656565654C 95.81087239583331 87.8085656565654 104.39095052083333 54.03604040404025 114.40104166666666 54.03604040404025C 124.41113281249999 54.03604040404025 132.9912109375 54.03604040404025 143.00130208333331 54.03604040404025C 153.01139322916663 54.03604040404025 161.59147135416663 87.8085656565654 171.60156249999997 87.8085656565654C 181.61165364583331 87.8085656565654 190.19173177083331 87.8085656565654 200.20182291666666 87.8085656565654C 210.2119140625 87.8085656565654 218.7919921875 54.03604040404025 228.80208333333331 54.03604040404025C 238.81217447916666 54.03604040404025 247.39225260416666 54.03604040404025 257.40234375 54.03604040404025C 267.4124348958333 54.03604040404025 275.9925130208333 87.8085656565654 286.00260416666663 87.8085656565654C 296.01269531249994 87.8085656565654 304.5927734375 87.8085656565654 314.6028645833333 87.8085656565654C 324.61295572916663 87.8085656565654 333.19303385416663 121.58109090909056 343.20312499999994 121.58109090909056C 353.21321614583326 121.58109090909056 361.7932942708333 121.58109090909056 371.80338541666663 121.58109090909056C 381.81347656249994 121.58109090909056 390.3935546875 87.8085656565654 400.4036458333333 87.8085656565654C 410.41373697916663 87.8085656565654 418.99381510416663 87.8085656565654 429.00390624999994 87.8085656565654C 439.01399739583326 87.8085656565654 447.5940755208333 54.03604040404025 457.60416666666663 54.03604040404025C 467.61425781249994 54.03604040404025 476.1943359375 54.03604040404025 486.2044270833333 54.03604040404025C 496.21451822916663 54.03604040404025 504.7945963541667 87.8085656565654 514.8046875 87.8085656565654C 514.8046875 87.8085656565654 514.8046875 87.8085656565654 514.8046875 222.89866666666666 L 0 222.89866666666666z"
                                          fill="url(#SvgjsLinearGradient1422)"
                                          fillOpacity={1}
                                          strokeOpacity={1}
                                          strokeLinecap="butt"
                                          strokeWidth={0}
                                          strokeDasharray={0}
                                          className="apexcharts-area"
                                          index={0}
                                          clipPath="url(#gridRectMask75o297p8)"
                                          pathto="M 0 121.58109090909056C 10.010091145833332 121.58109090909056 18.590169270833332 121.58109090909056 28.600260416666664 121.58109090909056C 38.6103515625 121.58109090909056 47.1904296875 87.8085656565654 57.20052083333333 87.8085656565654C 67.21061197916666 87.8085656565654 75.79069010416666 87.8085656565654 85.80078124999999 87.8085656565654C 95.81087239583331 87.8085656565654 104.39095052083333 54.03604040404025 114.40104166666666 54.03604040404025C 124.41113281249999 54.03604040404025 132.9912109375 54.03604040404025 143.00130208333331 54.03604040404025C 153.01139322916663 54.03604040404025 161.59147135416663 87.8085656565654 171.60156249999997 87.8085656565654C 181.61165364583331 87.8085656565654 190.19173177083331 87.8085656565654 200.20182291666666 87.8085656565654C 210.2119140625 87.8085656565654 218.7919921875 54.03604040404025 228.80208333333331 54.03604040404025C 238.81217447916666 54.03604040404025 247.39225260416666 54.03604040404025 257.40234375 54.03604040404025C 267.4124348958333 54.03604040404025 275.9925130208333 87.8085656565654 286.00260416666663 87.8085656565654C 296.01269531249994 87.8085656565654 304.5927734375 87.8085656565654 314.6028645833333 87.8085656565654C 324.61295572916663 87.8085656565654 333.19303385416663 121.58109090909056 343.20312499999994 121.58109090909056C 353.21321614583326 121.58109090909056 361.7932942708333 121.58109090909056 371.80338541666663 121.58109090909056C 381.81347656249994 121.58109090909056 390.3935546875 87.8085656565654 400.4036458333333 87.8085656565654C 410.41373697916663 87.8085656565654 418.99381510416663 87.8085656565654 429.00390624999994 87.8085656565654C 439.01399739583326 87.8085656565654 447.5940755208333 54.03604040404025 457.60416666666663 54.03604040404025C 467.61425781249994 54.03604040404025 476.1943359375 54.03604040404025 486.2044270833333 54.03604040404025C 496.21451822916663 54.03604040404025 504.7945963541667 87.8085656565654 514.8046875 87.8085656565654C 514.8046875 87.8085656565654 514.8046875 87.8085656565654 514.8046875 222.89866666666666 L 0 222.89866666666666z"
                                          pathfrom="M -1 2451.885333333335 L -1 2451.885333333335 L 28.600260416666664 2451.885333333335 L 57.20052083333333 2451.885333333335 L 85.80078124999999 2451.885333333335 L 114.40104166666666 2451.885333333335 L 143.00130208333331 2451.885333333335 L 171.60156249999997 2451.885333333335 L 200.20182291666666 2451.885333333335 L 228.80208333333331 2451.885333333335 L 257.40234375 2451.885333333335 L 286.00260416666663 2451.885333333335 L 314.6028645833333 2451.885333333335 L 343.20312499999994 2451.885333333335 L 371.80338541666663 2451.885333333335 L 400.4036458333333 2451.885333333335 L 429.00390624999994 2451.885333333335 L 457.60416666666663 2451.885333333335 L 486.2044270833333 2451.885333333335 L 514.8046875 2451.885333333335"
                                        />
                                        <path
                                          id="SvgjsPath1427"
                                          d="M 0 121.58109090909056C 10.010091145833332 121.58109090909056 18.590169270833332 121.58109090909056 28.600260416666664 121.58109090909056C 38.6103515625 121.58109090909056 47.1904296875 87.8085656565654 57.20052083333333 87.8085656565654C 67.21061197916666 87.8085656565654 75.79069010416666 87.8085656565654 85.80078124999999 87.8085656565654C 95.81087239583331 87.8085656565654 104.39095052083333 54.03604040404025 114.40104166666666 54.03604040404025C 124.41113281249999 54.03604040404025 132.9912109375 54.03604040404025 143.00130208333331 54.03604040404025C 153.01139322916663 54.03604040404025 161.59147135416663 87.8085656565654 171.60156249999997 87.8085656565654C 181.61165364583331 87.8085656565654 190.19173177083331 87.8085656565654 200.20182291666666 87.8085656565654C 210.2119140625 87.8085656565654 218.7919921875 54.03604040404025 228.80208333333331 54.03604040404025C 238.81217447916666 54.03604040404025 247.39225260416666 54.03604040404025 257.40234375 54.03604040404025C 267.4124348958333 54.03604040404025 275.9925130208333 87.8085656565654 286.00260416666663 87.8085656565654C 296.01269531249994 87.8085656565654 304.5927734375 87.8085656565654 314.6028645833333 87.8085656565654C 324.61295572916663 87.8085656565654 333.19303385416663 121.58109090909056 343.20312499999994 121.58109090909056C 353.21321614583326 121.58109090909056 361.7932942708333 121.58109090909056 371.80338541666663 121.58109090909056C 381.81347656249994 121.58109090909056 390.3935546875 87.8085656565654 400.4036458333333 87.8085656565654C 410.41373697916663 87.8085656565654 418.99381510416663 87.8085656565654 429.00390624999994 87.8085656565654C 439.01399739583326 87.8085656565654 447.5940755208333 54.03604040404025 457.60416666666663 54.03604040404025C 467.61425781249994 54.03604040404025 476.1943359375 54.03604040404025 486.2044270833333 54.03604040404025C 496.21451822916663 54.03604040404025 504.7945963541667 87.8085656565654 514.8046875 87.8085656565654M 514.8046875 87.8085656565654"
                                          fill="none"
                                          fillOpacity={1}
                                          stroke="#2c9aff"
                                          strokeOpacity={1}
                                          strokeLinecap="butt"
                                          strokeWidth={3}
                                          strokeDasharray={0}
                                          className="apexcharts-area"
                                          index={0}
                                          clipPath="url(#gridRectMask75o297p8)"
                                          pathto="M 0 121.58109090909056C 10.010091145833332 121.58109090909056 18.590169270833332 121.58109090909056 28.600260416666664 121.58109090909056C 38.6103515625 121.58109090909056 47.1904296875 87.8085656565654 57.20052083333333 87.8085656565654C 67.21061197916666 87.8085656565654 75.79069010416666 87.8085656565654 85.80078124999999 87.8085656565654C 95.81087239583331 87.8085656565654 104.39095052083333 54.03604040404025 114.40104166666666 54.03604040404025C 124.41113281249999 54.03604040404025 132.9912109375 54.03604040404025 143.00130208333331 54.03604040404025C 153.01139322916663 54.03604040404025 161.59147135416663 87.8085656565654 171.60156249999997 87.8085656565654C 181.61165364583331 87.8085656565654 190.19173177083331 87.8085656565654 200.20182291666666 87.8085656565654C 210.2119140625 87.8085656565654 218.7919921875 54.03604040404025 228.80208333333331 54.03604040404025C 238.81217447916666 54.03604040404025 247.39225260416666 54.03604040404025 257.40234375 54.03604040404025C 267.4124348958333 54.03604040404025 275.9925130208333 87.8085656565654 286.00260416666663 87.8085656565654C 296.01269531249994 87.8085656565654 304.5927734375 87.8085656565654 314.6028645833333 87.8085656565654C 324.61295572916663 87.8085656565654 333.19303385416663 121.58109090909056 343.20312499999994 121.58109090909056C 353.21321614583326 121.58109090909056 361.7932942708333 121.58109090909056 371.80338541666663 121.58109090909056C 381.81347656249994 121.58109090909056 390.3935546875 87.8085656565654 400.4036458333333 87.8085656565654C 410.41373697916663 87.8085656565654 418.99381510416663 87.8085656565654 429.00390624999994 87.8085656565654C 439.01399739583326 87.8085656565654 447.5940755208333 54.03604040404025 457.60416666666663 54.03604040404025C 467.61425781249994 54.03604040404025 476.1943359375 54.03604040404025 486.2044270833333 54.03604040404025C 496.21451822916663 54.03604040404025 504.7945963541667 87.8085656565654 514.8046875 87.8085656565654M 514.8046875 87.8085656565654"
                                          pathfrom="M -1 2451.885333333335 L -1 2451.885333333335 L 28.600260416666664 2451.885333333335 L 57.20052083333333 2451.885333333335 L 85.80078124999999 2451.885333333335 L 114.40104166666666 2451.885333333335 L 143.00130208333331 2451.885333333335 L 171.60156249999997 2451.885333333335 L 200.20182291666666 2451.885333333335 L 228.80208333333331 2451.885333333335 L 257.40234375 2451.885333333335 L 286.00260416666663 2451.885333333335 L 314.6028645833333 2451.885333333335 L 343.20312499999994 2451.885333333335 L 371.80338541666663 2451.885333333335 L 400.4036458333333 2451.885333333335 L 429.00390624999994 2451.885333333335 L 457.60416666666663 2451.885333333335 L 486.2044270833333 2451.885333333335 L 514.8046875 2451.885333333335"
                                          fillRule="evenodd"
                                        />
                                        <g
                                          id="SvgjsG1420"
                                          className="apexcharts-series-markers-wrap apexcharts-hidden-element-shown"
                                          
                                        >
                                          <g className="apexcharts-series-markers">
                                            <circle
                                              id="SvgjsCircle1530"
                                              r={0}
                                              cx="228.80208333333331"
                                              cy="54.03604040404025"
                                              className="apexcharts-marker wsah7u50i no-pointer-events"
                                              stroke="#2c9aff"
                                              fill="#2c9aff"
                                              fillOpacity={1}
                                              strokeWidth={3}
                                              strokeOpacity="0.9"
                                              default-marker-size={0}
                                            />
                                          </g>
                                        </g>
                                      </g>
                                      <g
                                        id="SvgjsG1421"
                                        className="apexcharts-datalabels"
                                        
                                      />
                                    </g>
                                    <line
                                      id="SvgjsLine1442"
                                      x1="228.30208333333331"
                                      y1={0}
                                      x2="228.30208333333331"
                                      y2="222.89866666666666"
                                      stroke="#2c9aff"
                                      strokeDasharray={3}
                                      strokeLinecap="butt"
                                      className="apexcharts-xcrosshairs"
                                      x="228.30208333333331"
                                      y={0}
                                      width={1}
                                      height="222.89866666666666"
                                      fill="#b1b9c4"
                                      filter="none"
                                      fillOpacity="0.9"
                                      strokeWidth={1}
                                    />
                                    <line
                                      id="SvgjsLine1443"
                                      x1={0}
                                      y1={0}
                                      x2="514.8046875"
                                      y2={0}
                                      stroke="#b6b6b6"
                                      strokeDasharray={0}
                                      strokeWidth={1}
                                      strokeLinecap="butt"
                                      className="apexcharts-ycrosshairs"
                                    />
                                    <line
                                      id="SvgjsLine1444"
                                      x1={0}
                                      y1={0}
                                      x2="514.8046875"
                                      y2={0}
                                      strokeDasharray={0}
                                      strokeWidth={0}
                                      strokeLinecap="butt"
                                      className="apexcharts-ycrosshairs-hidden"
                                    />
                                    <g
                                      id="SvgjsG1445"
                                      className="apexcharts-xaxis"
                                      transform="translate(0, 0)"
                                    >
                                      <g
                                        id="SvgjsG1446"
                                        className="apexcharts-xaxis-texts-g"
                                        transform="translate(0, -10)"
                                      >
                                        <text
                                          id="SvgjsText1448"
                                          fontFamily="inherit"
                                          x={0}
                                          y="245.89866666666666"
                                          textAnchor="end"
                                          dominantBaseline="auto"
                                          fontSize="12px"
                                          fontWeight={400}
                                          fill="#99a1b7"
                                          className="apexcharts-text apexcharts-xaxis-label "
                                          style={{ fontFamily: "inherit" }}
                                          transform="rotate(0 1 -1)"
                                        >
                                          <tspan id="SvgjsTspan1449" />
                                          <title />
                                        </text>
                                        <text
                                          id="SvgjsText1451"
                                          fontFamily="inherit"
                                          x="28.600260416666664"
                                          y="245.89866666666666"
                                          textAnchor="end"
                                          dominantBaseline="auto"
                                          fontSize="12px"
                                          fontWeight={400}
                                          fill="#99a1b7"
                                          className="apexcharts-text apexcharts-xaxis-label "
                                          style={{ fontFamily: "inherit" }}
                                          transform="rotate(0 1 -1)"
                                        >
                                          <tspan id="SvgjsTspan1452" />
                                          <title />
                                        </text>
                                        <text
                                          id="SvgjsText1454"
                                          fontFamily="inherit"
                                          x="57.200520833333336"
                                          y="245.89866666666666"
                                          textAnchor="end"
                                          dominantBaseline="auto"
                                          fontSize="12px"
                                          fontWeight={400}
                                          fill="#99a1b7"
                                          className="apexcharts-text apexcharts-xaxis-label "
                                          style={{ fontFamily: "inherit" }}
                                          transform="rotate(0 1 -1)"
                                        >
                                          <tspan id="SvgjsTspan1455" />
                                          <title />
                                        </text>
                                        <text
                                          id="SvgjsText1457"
                                          fontFamily="inherit"
                                          x="85.80078125000001"
                                          y="245.89866666666666"
                                          textAnchor="end"
                                          dominantBaseline="auto"
                                          fontSize="12px"
                                          fontWeight={400}
                                          fill="#99a1b7"
                                          className="apexcharts-text apexcharts-xaxis-label "
                                          style={{ fontFamily: "inherit" }}
                                          transform="rotate(0 86.80078125 240.89866638183594)"
                                        >
                                          <tspan id="SvgjsTspan1458">Apr 04</tspan>
                                          <title>Apr 04</title>
                                        </text>
                                        <text
                                          id="SvgjsText1460"
                                          fontFamily="inherit"
                                          x="114.40104166666667"
                                          y="245.89866666666666"
                                          textAnchor="end"
                                          dominantBaseline="auto"
                                          fontSize="12px"
                                          fontWeight={400}
                                          fill="#99a1b7"
                                          className="apexcharts-text apexcharts-xaxis-label "
                                          style={{ fontFamily: "inherit" }}
                                          transform="rotate(0 1 -1)"
                                        >
                                          <tspan id="SvgjsTspan1461" />
                                          <title />
                                        </text>
                                        <text
                                          id="SvgjsText1463"
                                          fontFamily="inherit"
                                          x="143.00130208333331"
                                          y="245.89866666666666"
                                          textAnchor="end"
                                          dominantBaseline="auto"
                                          fontSize="12px"
                                          fontWeight={400}
                                          fill="#99a1b7"
                                          className="apexcharts-text apexcharts-xaxis-label "
                                          style={{ fontFamily: "inherit" }}
                                          transform="rotate(0 1 -1)"
                                        >
                                          <tspan id="SvgjsTspan1464" />
                                          <title />
                                        </text>
                                        <text
                                          id="SvgjsText1466"
                                          fontFamily="inherit"
                                          x="171.60156249999997"
                                          y="245.89866666666666"
                                          textAnchor="end"
                                          dominantBaseline="auto"
                                          fontSize="12px"
                                          fontWeight={400}
                                          fill="#99a1b7"
                                          className="apexcharts-text apexcharts-xaxis-label "
                                          style={{ fontFamily: "inherit" }}
                                          transform="rotate(0 172.6015625 240.89866638183594)"
                                        >
                                          <tspan id="SvgjsTspan1467">Apr 07</tspan>
                                          <title>Apr 07</title>
                                        </text>
                                        <text
                                          id="SvgjsText1469"
                                          fontFamily="inherit"
                                          x="200.20182291666663"
                                          y="245.89866666666666"
                                          textAnchor="end"
                                          dominantBaseline="auto"
                                          fontSize="12px"
                                          fontWeight={400}
                                          fill="#99a1b7"
                                          className="apexcharts-text apexcharts-xaxis-label "
                                          style={{ fontFamily: "inherit" }}
                                          transform="rotate(0 1 -1)"
                                        >
                                          <tspan id="SvgjsTspan1470" />
                                          <title />
                                        </text>
                                        <text
                                          id="SvgjsText1472"
                                          fontFamily="inherit"
                                          x="228.8020833333333"
                                          y="245.89866666666666"
                                          textAnchor="end"
                                          dominantBaseline="auto"
                                          fontSize="12px"
                                          fontWeight={400}
                                          fill="#99a1b7"
                                          className="apexcharts-text apexcharts-xaxis-label "
                                          style={{ fontFamily: "inherit" }}
                                          transform="rotate(0 1 -1)"
                                        >
                                          <tspan id="SvgjsTspan1473" />
                                          <title />
                                        </text>
                                        <text
                                          id="SvgjsText1475"
                                          fontFamily="inherit"
                                          x="257.40234375"
                                          y="245.89866666666666"
                                          textAnchor="end"
                                          dominantBaseline="auto"
                                          fontSize="12px"
                                          fontWeight={400}
                                          fill="#99a1b7"
                                          className="apexcharts-text apexcharts-xaxis-label "
                                          style={{ fontFamily: "inherit" }}
                                          transform="rotate(0 258.40234375 240.89866638183594)"
                                        >
                                          <tspan id="SvgjsTspan1476">Apr 10</tspan>
                                          <title>Apr 10</title>
                                        </text>
                                        <text
                                          id="SvgjsText1478"
                                          fontFamily="inherit"
                                          x="286.0026041666667"
                                          y="245.89866666666666"
                                          textAnchor="end"
                                          dominantBaseline="auto"
                                          fontSize="12px"
                                          fontWeight={400}
                                          fill="#99a1b7"
                                          className="apexcharts-text apexcharts-xaxis-label "
                                          style={{ fontFamily: "inherit" }}
                                          transform="rotate(0 1 -1)"
                                        >
                                          <tspan id="SvgjsTspan1479" />
                                          <title />
                                        </text>
                                        <text
                                          id="SvgjsText1481"
                                          fontFamily="inherit"
                                          x="314.60286458333337"
                                          y="245.89866666666666"
                                          textAnchor="end"
                                          dominantBaseline="auto"
                                          fontSize="12px"
                                          fontWeight={400}
                                          fill="#99a1b7"
                                          className="apexcharts-text apexcharts-xaxis-label "
                                          style={{ fontFamily: "inherit" }}
                                          transform="rotate(0 1 -1)"
                                        >
                                          <tspan id="SvgjsTspan1482" />
                                          <title />
                                        </text>
                                        <text
                                          id="SvgjsText1484"
                                          fontFamily="inherit"
                                          x="343.20312500000006"
                                          y="245.89866666666666"
                                          textAnchor="end"
                                          dominantBaseline="auto"
                                          fontSize="12px"
                                          fontWeight={400}
                                          fill="#99a1b7"
                                          className="apexcharts-text apexcharts-xaxis-label "
                                          style={{ fontFamily: "inherit" }}
                                          transform="rotate(0 344.203125 240.89866638183594)"
                                        >
                                          <tspan id="SvgjsTspan1485">Apr 13</tspan>
                                          <title>Apr 13</title>
                                        </text>
                                        <text
                                          id="SvgjsText1487"
                                          fontFamily="inherit"
                                          x="371.80338541666674"
                                          y="245.89866666666666"
                                          textAnchor="end"
                                          dominantBaseline="auto"
                                          fontSize="12px"
                                          fontWeight={400}
                                          fill="#99a1b7"
                                          className="apexcharts-text apexcharts-xaxis-label "
                                          style={{ fontFamily: "inherit" }}
                                          transform="rotate(0 1 -1)"
                                        >
                                          <tspan id="SvgjsTspan1488" />
                                          <title />
                                        </text>
                                        <text
                                          id="SvgjsText1490"
                                          fontFamily="inherit"
                                          x="400.4036458333334"
                                          y="245.89866666666666"
                                          textAnchor="end"
                                          dominantBaseline="auto"
                                          fontSize="12px"
                                          fontWeight={400}
                                          fill="#99a1b7"
                                          className="apexcharts-text apexcharts-xaxis-label "
                                          style={{ fontFamily: "inherit" }}
                                          transform="rotate(0 1 -1)"
                                        >
                                          <tspan id="SvgjsTspan1491" />
                                          <title />
                                        </text>
                                        <text
                                          id="SvgjsText1493"
                                          fontFamily="inherit"
                                          x="429.0039062500001"
                                          y="245.89866666666666"
                                          textAnchor="end"
                                          dominantBaseline="auto"
                                          fontSize="12px"
                                          fontWeight={400}
                                          fill="#99a1b7"
                                          className="apexcharts-text apexcharts-xaxis-label "
                                          style={{ fontFamily: "inherit" }}
                                          transform="rotate(0 430.00390625 240.89866638183594)"
                                        >
                                          <tspan id="SvgjsTspan1494">Apr 18</tspan>
                                          <title>Apr 18</title>
                                        </text>
                                        <text
                                          id="SvgjsText1496"
                                          fontFamily="inherit"
                                          x="457.6041666666668"
                                          y="245.89866666666666"
                                          textAnchor="end"
                                          dominantBaseline="auto"
                                          fontSize="12px"
                                          fontWeight={400}
                                          fill="#99a1b7"
                                          className="apexcharts-text apexcharts-xaxis-label "
                                          style={{ fontFamily: "inherit" }}
                                          transform="rotate(0 1 -1)"
                                        >
                                          <tspan id="SvgjsTspan1497" />
                                          <title />
                                        </text>
                                        <text
                                          id="SvgjsText1499"
                                          fontFamily="inherit"
                                          x="486.2044270833335"
                                          y="245.89866666666666"
                                          textAnchor="end"
                                          dominantBaseline="auto"
                                          fontSize="12px"
                                          fontWeight={400}
                                          fill="#99a1b7"
                                          className="apexcharts-text apexcharts-xaxis-label "
                                          style={{ fontFamily: "inherit" }}
                                          transform="rotate(0 1 -1)"
                                        >
                                          <tspan id="SvgjsTspan1500" />
                                          <title />
                                        </text>
                                        <text
                                          id="SvgjsText1502"
                                          fontFamily="inherit"
                                          x="514.8046875000001"
                                          y="245.89866666666666"
                                          textAnchor="end"
                                          dominantBaseline="auto"
                                          fontSize="12px"
                                          fontWeight={400}
                                          fill="#99a1b7"
                                          className="apexcharts-text apexcharts-xaxis-label "
                                          style={{ fontFamily: "inherit" }}
                                          transform="rotate(0 1 -1)"
                                        >
                                          <tspan id="SvgjsTspan1503" />
                                          <title />
                                        </text>
                                      </g>
                                    </g>
                                    <g id="SvgjsG1527" className="apexcharts-yaxis-annotations" />
                                    <g id="SvgjsG1528" className="apexcharts-xaxis-annotations" />
                                    <g id="SvgjsG1529" className="apexcharts-point-annotations" />
                                    <rect
                                      id="SvgjsRect1531"
                                      width={0}
                                      height={0}
                                      x={0}
                                      y={0}
                                      rx={0}
                                      ry={0}
                                      opacity={1}
                                      strokeWidth={0}
                                      stroke="none"
                                      strokeDasharray={0}
                                      fill="#fefefe"
                                      className="apexcharts-zoom-rect"
                                    />
                                    <rect
                                      id="SvgjsRect1532"
                                      width={0}
                                      height={0}
                                      x={0}
                                      y={0}
                                      rx={0}
                                      ry={0}
                                      opacity={1}
                                      strokeWidth={0}
                                      stroke="none"
                                      strokeDasharray={0}
                                      fill="#fefefe"
                                      className="apexcharts-selection-rect"
                                    />
                                  </g>
                                </svg>
                                <div
                                  className="apexcharts-tooltip apexcharts-theme-light"
                                  style={{ left: "293.497px", top: "57.036px" }}
                                >
                                  <div
                                    className="apexcharts-tooltip-title"
                                    style={{ fontFamily: "inherit", fontSize: 12 }}
                                  >
                                    Apr 09
                                  </div>
                                  <div
                                    className="apexcharts-tooltip-series-group apexcharts-active"
                                    style={{ order: 1, display: "flex" }}
                                  >
                                    <span
                                      className="apexcharts-tooltip-marker"
                                      style={{ backgroundColor: "rgb(44, 154, 255)" }}
                                    />
                                    <div
                                      className="apexcharts-tooltip-text"
                                      style={{ fontFamily: "inherit", fontSize: 12 }}
                                    >
                                      <div className="apexcharts-tooltip-y-group">
                                        <span className="apexcharts-tooltip-text-y-label">
                                          Sales:{" "}
                                        </span>
                                        <span className="apexcharts-tooltip-text-y-value">
                                          $355
                                        </span>
                                      </div>
                                      <div className="apexcharts-tooltip-goals-group">
                                        <span className="apexcharts-tooltip-text-goals-label" />
                                        <span className="apexcharts-tooltip-text-goals-value" />
                                      </div>
                                      <div className="apexcharts-tooltip-z-group">
                                        <span className="apexcharts-tooltip-text-z-label" />
                                        <span className="apexcharts-tooltip-text-z-value" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="apexcharts-xaxistooltip apexcharts-xaxistooltip-bottom apexcharts-theme-light"
                                  style={{ left: "254.318px", top: "254.899px" }}
                                >
                                  <div
                                    className="apexcharts-xaxistooltip-text"
                                    style={{
                                      fontFamily: "inherit",
                                      fontSize: 12,
                                      minWidth: "32.4141px"
                                    }}
                                  >
                                    Apr 09
                                  </div>
                                </div>
                                <div className="apexcharts-yaxistooltip apexcharts-yaxistooltip-0 apexcharts-yaxistooltip-left apexcharts-theme-light">
                                  <div className="apexcharts-yaxistooltip-text" />
                                </div>
                              </div>
                            </div>
                            {/*end::Chart*/}
                          </div>
                          {/*end::Card body*/}
                        </div>
                        {/*end::Chart widget 4*/}{" "}
                      </div>
                    </div>



                    {/*end::Row*/}
                    {/*begin::Row*/}
                    
                    {/*end::Row*/}
                    {/*begin::Row*/}
                    <div className="row g-5 g-xl-10 mb-5 mb-xl-10">
                      {/*begin::Col*/}
                      <div className="col-xl-4">
                        {/*begin::Chart Widget 35*/}
                        <div className="card card-flush h-md-100">
                          {/*begin::Header*/}
                          <div className="card-header pt-5 mb-6">
                            {/*begin::Title*/}
                            <h3 className="card-title align-items-start flex-column">
                              {/*begin::Statistics*/}
                              <div className="d-flex align-items-center mb-2">
                                {/*begin::Currency*/}
                                <span className="fs-3 fw-semibold text-gray-500 align-self-start me-1">
                                  $
                                </span>
                                {/*end::Currency*/}
                                {/*begin::Value*/}
                                <span className="fs-2hx fw-bold text-gray-800 me-2 lh-1 ls-n2">
                                  3,274.94
                                </span>
                                {/*end::Value*/}
                                {/*begin::Label*/}
                                <span className="badge badge-light-success fs-base">
                                  <i className="ki-duotone ki-arrow-up fs-5 text-success ms-n1">
                                    <span className="path1" />
                                    <span className="path2" />
                                  </i>
                                  9.2%
                                </span>
                                {/*end::Label*/}
                              </div>
                              {/*end::Statistics*/}
                              {/*begin::Description*/}
                              <span className="fs-6 fw-semibold text-gray-500">
                                Avg. Agent Earnings
                              </span>
                              {/*end::Description*/}
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
                                    <a className="btn btn-primary  btn-sm px-4" href="#">
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
                          <div className="card-body py-0 px-0">
                            {/*begin::Nav*/}
                            <ul
                              className="nav d-flex justify-content-between mb-3 mx-9"
                              role="tablist"
                            >
                              {/*begin::Item*/}
                              <li className="nav-item mb-3" role="presentation">
                                {/*begin::Link*/}
                                <a
                                  className="nav-link btn btn-flex flex-center btn-active-danger btn-color-gray-600 btn-active-color-white rounded-2 w-45px h-35px active"
                                  data-bs-toggle="tab"
                                  id="kt_charts_widget_35_tab_1"
                                  href="#kt_charts_widget_35_tab_content_1"
                                  aria-selected="true"
                                  role="tab"
                                >
                                  1d
                                </a>
                                {/*end::Link*/}
                              </li>
                              {/*end::Item*/}
                              {/*begin::Item*/}
                              <li className="nav-item mb-3" role="presentation">
                                {/*begin::Link*/}
                                <a
                                  className="nav-link btn btn-flex flex-center btn-active-danger btn-color-gray-600 btn-active-color-white rounded-2 w-45px h-35px "
                                  data-bs-toggle="tab"
                                  id="kt_charts_widget_35_tab_2"
                                  href="#kt_charts_widget_35_tab_content_2"
                                  aria-selected="false"
                                  tabIndex={-1}
                                  role="tab"
                                >
                                  5d
                                </a>
                                {/*end::Link*/}
                              </li>
                              {/*end::Item*/}
                              {/*begin::Item*/}
                              <li className="nav-item mb-3" role="presentation">
                                {/*begin::Link*/}
                                <a
                                  className="nav-link btn btn-flex flex-center btn-active-danger btn-color-gray-600 btn-active-color-white rounded-2 w-45px h-35px "
                                  data-bs-toggle="tab"
                                  id="kt_charts_widget_35_tab_3"
                                  href="#kt_charts_widget_35_tab_content_3"
                                  aria-selected="false"
                                  tabIndex={-1}
                                  role="tab"
                                >
                                  1m
                                </a>
                                {/*end::Link*/}
                              </li>
                              {/*end::Item*/}
                              {/*begin::Item*/}
                              <li className="nav-item mb-3" role="presentation">
                                {/*begin::Link*/}
                                <a
                                  className="nav-link btn btn-flex flex-center btn-active-danger btn-color-gray-600 btn-active-color-white rounded-2 w-45px h-35px "
                                  data-bs-toggle="tab"
                                  id="kt_charts_widget_35_tab_4"
                                  href="#kt_charts_widget_35_tab_content_4"
                                  aria-selected="false"
                                  tabIndex={-1}
                                  role="tab"
                                >
                                  6m
                                </a>
                                {/*end::Link*/}
                              </li>
                              {/*end::Item*/}
                              {/*begin::Item*/}
                              <li className="nav-item mb-3" role="presentation">
                                {/*begin::Link*/}
                                <a
                                  className="nav-link btn btn-flex flex-center btn-active-danger btn-color-gray-600 btn-active-color-white rounded-2 w-45px h-35px "
                                  data-bs-toggle="tab"
                                  id="kt_charts_widget_35_tab_5"
                                  href="#kt_charts_widget_35_tab_content_5"
                                  aria-selected="false"
                                  tabIndex={-1}
                                  role="tab"
                                >
                                  1y
                                </a>
                                {/*end::Link*/}
                              </li>
                              {/*end::Item*/}
                            </ul>
                            {/*end::Nav*/}
                            {/*begin::Tab Content*/}
                            <div className="tab-content mt-n6">
                              {/*begin::Tap pane*/}
                              <div
                                className="tab-pane fade active show"
                                id="kt_charts_widget_35_tab_content_1"
                                role="tabpanel"
                                aria-labelledby="kt_charts_widget_35_tab_1"
                              >
                                {/*begin::Chart*/}
                                <div
                                  id="kt_charts_widget_35_chart_1"
                                  data-kt-chart-color="primary"
                                  className="min-h-auto h-200px ps-3 pe-6"
                                  style={{ minHeight: 215 }}
                                >
                                  <div
                                    id="apexchartsyk7tf2i5"
                                    className="apexcharts-canvas apexchartsyk7tf2i5 apexcharts-theme-light"
                                    style={{ width: "366.75px", height: 200 }}
                                  >
                                    <svg
                                      id="SvgjsSvg1278"
                                      width="366.75"
                                      height={200}
                                      xmlns="http://www.w3.org/2000/svg"
                                      version="1.1"
                                      xmlnsXlink="http://www.w3.org/1999/xlink"
                                      
                                      className="apexcharts-svg apexcharts-zoomable"
                                      
                                      transform="translate(0, 0)"
                                      style={{ background: "transparent" }}
                                    >
                                      <foreignObject
                                        x={0}
                                        y={0}
                                        width="366.75"
                                        height={200}
                                      >
                                        <div
                                          className="apexcharts-legend"
                                          xmlns="http://www.w3.org/1999/xhtml"
                                          style={{ maxHeight: 100 }}
                                        />
                                      </foreignObject>
                                      <rect
                                        id="SvgjsRect1305"
                                        width={0}
                                        height={0}
                                        x={0}
                                        y={0}
                                        rx={0}
                                        ry={0}
                                        opacity={1}
                                        strokeWidth={0}
                                        stroke="none"
                                        strokeDasharray={0}
                                        fill="#fefefe"
                                      />
                                      <g
                                        id="SvgjsG1326"
                                        className="apexcharts-yaxis"
                                        rel={0}
                                        transform="translate(-8, 0)"
                                      >
                                        <g
                                          id="SvgjsG1327"
                                          className="apexcharts-yaxis-texts-g"
                                        />
                                      </g>
                                      <g
                                        id="SvgjsG1280"
                                        className="apexcharts-inner apexcharts-graphical"
                                        transform="translate(22, 30)"
                                      >
                                        <defs id="SvgjsDefs1279">
                                          <clipPath id="gridRectMaskyk7tf2i5">
                                            <rect
                                              id="SvgjsRect1282"
                                              width="341.75"
                                              height={162}
                                              x="-3.5"
                                              y="-3.5"
                                              rx={0}
                                              ry={0}
                                              opacity={1}
                                              strokeWidth={0}
                                              stroke="none"
                                              strokeDasharray={0}
                                              fill="#fff"
                                            />
                                          </clipPath>
                                          <clipPath id="forecastMaskyk7tf2i5" />
                                          <clipPath id="nonForecastMaskyk7tf2i5" />
                                          <clipPath id="gridRectMarkerMaskyk7tf2i5">
                                            <rect
                                              id="SvgjsRect1283"
                                              width="338.75"
                                              height={159}
                                              x={-2}
                                              y={-2}
                                              rx={0}
                                              ry={0}
                                              opacity={1}
                                              strokeWidth={0}
                                              stroke="none"
                                              strokeDasharray={0}
                                              fill="#fff"
                                            />
                                          </clipPath>
                                          <linearGradient
                                            id="SvgjsLinearGradient1288"
                                            x1={0}
                                            y1={0}
                                            x2={0}
                                            y2={1}
                                          >
                                            <stop
                                              id="SvgjsStop1289"
                                              stopOpacity="0.4"
                                              stopColor="rgba(44,154,255,0.4)"
                                              offset="0.15"
                                            />
                                            <stop
                                              id="SvgjsStop1290"
                                              stopOpacity="0.2"
                                              stopColor="rgba(255,255,255,0.2)"
                                              offset="1.2"
                                            />
                                            <stop
                                              id="SvgjsStop1291"
                                              stopOpacity="0.2"
                                              stopColor="rgba(255,255,255,0.2)"
                                              offset={1}
                                            />
                                          </linearGradient>
                                        </defs>
                                        <g id="SvgjsG1294" className="apexcharts-grid">
                                          <g
                                            id="SvgjsG1295"
                                            className="apexcharts-gridlines-horizontal"
                                          >
                                            <line
                                              id="SvgjsLine1299"
                                              x1={0}
                                              y1="38.75"
                                              x2="334.75"
                                              y2="38.75"
                                              stroke="#dbdfe9"
                                              strokeDasharray={3}
                                              strokeLinecap="butt"
                                              className="apexcharts-gridline"
                                            />
                                            <line
                                              id="SvgjsLine1300"
                                              x1={0}
                                              y1="77.5"
                                              x2="334.75"
                                              y2="77.5"
                                              stroke="#dbdfe9"
                                              strokeDasharray={3}
                                              strokeLinecap="butt"
                                              className="apexcharts-gridline"
                                            />
                                            <line
                                              id="SvgjsLine1301"
                                              x1={0}
                                              y1="116.25"
                                              x2="334.75"
                                              y2="116.25"
                                              stroke="#dbdfe9"
                                              strokeDasharray={3}
                                              strokeLinecap="butt"
                                              className="apexcharts-gridline"
                                            />
                                          </g>
                                          <g
                                            id="SvgjsG1296"
                                            className="apexcharts-gridlines-vertical"
                                          />
                                          <line
                                            id="SvgjsLine1304"
                                            x1={0}
                                            y1={155}
                                            x2="334.75"
                                            y2={155}
                                            stroke="transparent"
                                            strokeDasharray={0}
                                            strokeLinecap="butt"
                                          />
                                          <line
                                            id="SvgjsLine1303"
                                            x1={0}
                                            y1={1}
                                            x2={0}
                                            y2={155}
                                            stroke="transparent"
                                            strokeDasharray={0}
                                            strokeLinecap="butt"
                                          />
                                        </g>
                                        <g
                                          id="SvgjsG1297"
                                          className="apexcharts-grid-borders"
                                        >
                                          <line
                                            id="SvgjsLine1298"
                                            x1={0}
                                            y1={0}
                                            x2="334.75"
                                            y2={0}
                                            stroke="#dbdfe9"
                                            strokeDasharray={3}
                                            strokeLinecap="butt"
                                            className="apexcharts-gridline"
                                          />
                                          <line
                                            id="SvgjsLine1302"
                                            x1={0}
                                            y1={155}
                                            x2="334.75"
                                            y2={155}
                                            stroke="#dbdfe9"
                                            strokeDasharray={3}
                                            strokeLinecap="butt"
                                            className="apexcharts-gridline"
                                          />
                                        </g>
                                        <g
                                          id="SvgjsG1284"
                                          className="apexcharts-area-series apexcharts-plot-series"
                                        >
                                          <g
                                            id="SvgjsG1285"
                                            className="apexcharts-series"
                                            zindex={0}
                                            seriesname="Earnings"
                                            
                                            rel={1}
                                            
                                          >
                                            <path
                                              id="SvgjsPath1292"
                                              d="M 0 98.16666666666666C 8.368749999999999 98.16666666666666 15.541964285714286 46.5 23.910714285714285 46.5C 32.27946428571428 46.5 39.45267857142857 46.5 47.82142857142857 46.5C 56.190178571428575 46.5 63.363392857142856 82.66666666666666 71.73214285714286 82.66666666666666C 80.10089285714285 82.66666666666666 87.27410714285715 82.66666666666666 95.64285714285714 82.66666666666666C 104.01160714285714 82.66666666666666 111.18482142857142 113.66666666666666 119.55357142857143 113.66666666666666C 127.92232142857144 113.66666666666666 135.09553571428572 113.66666666666666 143.46428571428572 113.66666666666666C 151.83303571428573 113.66666666666666 159.00625 82.66666666666666 167.375 82.66666666666666C 175.74375 82.66666666666666 182.91696428571427 82.66666666666666 191.28571428571428 82.66666666666666C 199.65446428571428 82.66666666666666 206.82767857142855 41.33333333333334 215.19642857142856 41.33333333333334C 223.56517857142856 41.33333333333334 230.73839285714286 41.33333333333334 239.10714285714286 41.33333333333334C 247.47589285714284 41.33333333333334 254.64910714285713 62 263.0178571428571 62C 271.38660714285714 62 278.5598214285714 62 286.92857142857144 62C 295.2973214285714 62 302.47053571428575 38.75 310.8392857142857 38.75C 319.2080357142857 38.75 326.38125 38.75 334.75 38.75C 334.75 38.75 334.75 38.75 334.75 155 L 0 155z"
                                              fill="url(#SvgjsLinearGradient1288)"
                                              fillOpacity={1}
                                              strokeOpacity={1}
                                              strokeLinecap="butt"
                                              strokeWidth={0}
                                              strokeDasharray={0}
                                              className="apexcharts-area"
                                              index={0}
                                              clipPath="url(#gridRectMaskyk7tf2i5)"
                                              pathto="M 0 98.16666666666666C 8.368749999999999 98.16666666666666 15.541964285714286 46.5 23.910714285714285 46.5C 32.27946428571428 46.5 39.45267857142857 46.5 47.82142857142857 46.5C 56.190178571428575 46.5 63.363392857142856 82.66666666666666 71.73214285714286 82.66666666666666C 80.10089285714285 82.66666666666666 87.27410714285715 82.66666666666666 95.64285714285714 82.66666666666666C 104.01160714285714 82.66666666666666 111.18482142857142 113.66666666666666 119.55357142857143 113.66666666666666C 127.92232142857144 113.66666666666666 135.09553571428572 113.66666666666666 143.46428571428572 113.66666666666666C 151.83303571428573 113.66666666666666 159.00625 82.66666666666666 167.375 82.66666666666666C 175.74375 82.66666666666666 182.91696428571427 82.66666666666666 191.28571428571428 82.66666666666666C 199.65446428571428 82.66666666666666 206.82767857142855 41.33333333333334 215.19642857142856 41.33333333333334C 223.56517857142856 41.33333333333334 230.73839285714286 41.33333333333334 239.10714285714286 41.33333333333334C 247.47589285714284 41.33333333333334 254.64910714285713 62 263.0178571428571 62C 271.38660714285714 62 278.5598214285714 62 286.92857142857144 62C 295.2973214285714 62 302.47053571428575 38.75 310.8392857142857 38.75C 319.2080357142857 38.75 326.38125 38.75 334.75 38.75C 334.75 38.75 334.75 38.75 334.75 155 L 0 155z"
                                              pathfrom="M -1 206.66666666666666 L -1 206.66666666666666 L 23.910714285714285 206.66666666666666 L 47.82142857142857 206.66666666666666 L 71.73214285714286 206.66666666666666 L 95.64285714285714 206.66666666666666 L 119.55357142857143 206.66666666666666 L 143.46428571428572 206.66666666666666 L 167.375 206.66666666666666 L 191.28571428571428 206.66666666666666 L 215.19642857142856 206.66666666666666 L 239.10714285714286 206.66666666666666 L 263.0178571428571 206.66666666666666 L 286.92857142857144 206.66666666666666 L 310.8392857142857 206.66666666666666 L 334.75 206.66666666666666"
                                            />
                                            <path
                                              id="SvgjsPath1293"
                                              d="M 0 98.16666666666666C 8.368749999999999 98.16666666666666 15.541964285714286 46.5 23.910714285714285 46.5C 32.27946428571428 46.5 39.45267857142857 46.5 47.82142857142857 46.5C 56.190178571428575 46.5 63.363392857142856 82.66666666666666 71.73214285714286 82.66666666666666C 80.10089285714285 82.66666666666666 87.27410714285715 82.66666666666666 95.64285714285714 82.66666666666666C 104.01160714285714 82.66666666666666 111.18482142857142 113.66666666666666 119.55357142857143 113.66666666666666C 127.92232142857144 113.66666666666666 135.09553571428572 113.66666666666666 143.46428571428572 113.66666666666666C 151.83303571428573 113.66666666666666 159.00625 82.66666666666666 167.375 82.66666666666666C 175.74375 82.66666666666666 182.91696428571427 82.66666666666666 191.28571428571428 82.66666666666666C 199.65446428571428 82.66666666666666 206.82767857142855 41.33333333333334 215.19642857142856 41.33333333333334C 223.56517857142856 41.33333333333334 230.73839285714286 41.33333333333334 239.10714285714286 41.33333333333334C 247.47589285714284 41.33333333333334 254.64910714285713 62 263.0178571428571 62C 271.38660714285714 62 278.5598214285714 62 286.92857142857144 62C 295.2973214285714 62 302.47053571428575 38.75 310.8392857142857 38.75C 319.2080357142857 38.75 326.38125 38.75 334.75 38.75M 334.75 38.75"
                                              fill="none"
                                              fillOpacity={1}
                                              stroke="#2c9aff"
                                              strokeOpacity={1}
                                              strokeLinecap="butt"
                                              strokeWidth={3}
                                              strokeDasharray={0}
                                              className="apexcharts-area"
                                              index={0}
                                              clipPath="url(#gridRectMaskyk7tf2i5)"
                                              pathto="M 0 98.16666666666666C 8.368749999999999 98.16666666666666 15.541964285714286 46.5 23.910714285714285 46.5C 32.27946428571428 46.5 39.45267857142857 46.5 47.82142857142857 46.5C 56.190178571428575 46.5 63.363392857142856 82.66666666666666 71.73214285714286 82.66666666666666C 80.10089285714285 82.66666666666666 87.27410714285715 82.66666666666666 95.64285714285714 82.66666666666666C 104.01160714285714 82.66666666666666 111.18482142857142 113.66666666666666 119.55357142857143 113.66666666666666C 127.92232142857144 113.66666666666666 135.09553571428572 113.66666666666666 143.46428571428572 113.66666666666666C 151.83303571428573 113.66666666666666 159.00625 82.66666666666666 167.375 82.66666666666666C 175.74375 82.66666666666666 182.91696428571427 82.66666666666666 191.28571428571428 82.66666666666666C 199.65446428571428 82.66666666666666 206.82767857142855 41.33333333333334 215.19642857142856 41.33333333333334C 223.56517857142856 41.33333333333334 230.73839285714286 41.33333333333334 239.10714285714286 41.33333333333334C 247.47589285714284 41.33333333333334 254.64910714285713 62 263.0178571428571 62C 271.38660714285714 62 278.5598214285714 62 286.92857142857144 62C 295.2973214285714 62 302.47053571428575 38.75 310.8392857142857 38.75C 319.2080357142857 38.75 326.38125 38.75 334.75 38.75M 334.75 38.75"
                                              pathfrom="M -1 206.66666666666666 L -1 206.66666666666666 L 23.910714285714285 206.66666666666666 L 47.82142857142857 206.66666666666666 L 71.73214285714286 206.66666666666666 L 95.64285714285714 206.66666666666666 L 119.55357142857143 206.66666666666666 L 143.46428571428572 206.66666666666666 L 167.375 206.66666666666666 L 191.28571428571428 206.66666666666666 L 215.19642857142856 206.66666666666666 L 239.10714285714286 206.66666666666666 L 263.0178571428571 206.66666666666666 L 286.92857142857144 206.66666666666666 L 310.8392857142857 206.66666666666666 L 334.75 206.66666666666666"
                                              fillRule="evenodd"
                                            />
                                            <g
                                              id="SvgjsG1286"
                                              className="apexcharts-series-markers-wrap apexcharts-hidden-element-shown"
                                              
                                            >
                                              <g className="apexcharts-series-markers">
                                                <circle
                                                  id="SvgjsCircle1331"
                                                  r={0}
                                                  cx={0}
                                                  cy={0}
                                                  className="apexcharts-marker wn6nuqe4p no-pointer-events"
                                                  stroke="#2c9aff"
                                                  fill="#2c9aff"
                                                  fillOpacity={1}
                                                  strokeWidth={3}
                                                  strokeOpacity="0.9"
                                                  default-marker-size={0}
                                                />
                                              </g>
                                            </g>
                                          </g>
                                          <g
                                            id="SvgjsG1287"
                                            className="apexcharts-datalabels"
                                            
                                          />
                                        </g>
                                        <line
                                          id="SvgjsLine1306"
                                          x1={0}
                                          y1={0}
                                          x2={0}
                                          y2={155}
                                          stroke="#2c9aff"
                                          strokeDasharray={3}
                                          strokeLinecap="butt"
                                          className="apexcharts-xcrosshairs"
                                          x={0}
                                          y={0}
                                          width={1}
                                          height={155}
                                          fill="#b1b9c4"
                                          filter="none"
                                          fillOpacity="0.9"
                                          strokeWidth={1}
                                        />
                                        <line
                                          id="SvgjsLine1307"
                                          x1={0}
                                          y1={0}
                                          x2="334.75"
                                          y2={0}
                                          stroke="#b6b6b6"
                                          strokeDasharray={0}
                                          strokeWidth={1}
                                          strokeLinecap="butt"
                                          className="apexcharts-ycrosshairs"
                                        />
                                        <line
                                          id="SvgjsLine1308"
                                          x1={0}
                                          y1={0}
                                          x2="334.75"
                                          y2={0}
                                          strokeDasharray={0}
                                          strokeWidth={0}
                                          strokeLinecap="butt"
                                          className="apexcharts-ycrosshairs-hidden"
                                        />
                                        <g
                                          id="SvgjsG1309"
                                          className="apexcharts-xaxis"
                                          transform="translate(20, 0)"
                                        >
                                          <g
                                            id="SvgjsG1310"
                                            className="apexcharts-xaxis-texts-g"
                                            transform="translate(0, -4)"
                                          />
                                        </g>
                                        <g
                                          id="SvgjsG1328"
                                          className="apexcharts-yaxis-annotations"
                                        />
                                        <g
                                          id="SvgjsG1329"
                                          className="apexcharts-xaxis-annotations"
                                        />
                                        <g
                                          id="SvgjsG1330"
                                          className="apexcharts-point-annotations"
                                        />
                                        <rect
                                          id="SvgjsRect1332"
                                          width={0}
                                          height={0}
                                          x={0}
                                          y={0}
                                          rx={0}
                                          ry={0}
                                          opacity={1}
                                          strokeWidth={0}
                                          stroke="none"
                                          strokeDasharray={0}
                                          fill="#fefefe"
                                          className="apexcharts-zoom-rect"
                                        />
                                        <rect
                                          id="SvgjsRect1333"
                                          width={0}
                                          height={0}
                                          x={0}
                                          y={0}
                                          rx={0}
                                          ry={0}
                                          opacity={1}
                                          strokeWidth={0}
                                          stroke="none"
                                          strokeDasharray={0}
                                          fill="#fefefe"
                                          className="apexcharts-selection-rect"
                                        />
                                      </g>
                                    </svg>
                                    <div className="apexcharts-tooltip apexcharts-theme-light">
                                      <div
                                        className="apexcharts-tooltip-title"
                                        style={{ fontFamily: "inherit", fontSize: 12 }}
                                      />
                                      <div
                                        className="apexcharts-tooltip-series-group"
                                        style={{ order: 1 }}
                                      >
                                        <span
                                          className="apexcharts-tooltip-marker"
                                          style={{ backgroundColor: "rgb(44, 154, 255)" }}
                                        />
                                        <div
                                          className="apexcharts-tooltip-text"
                                          style={{ fontFamily: "inherit", fontSize: 12 }}
                                        >
                                          <div className="apexcharts-tooltip-y-group">
                                            <span className="apexcharts-tooltip-text-y-label" />
                                            <span className="apexcharts-tooltip-text-y-value" />
                                          </div>
                                          <div className="apexcharts-tooltip-goals-group">
                                            <span className="apexcharts-tooltip-text-goals-label" />
                                            <span className="apexcharts-tooltip-text-goals-value" />
                                          </div>
                                          <div className="apexcharts-tooltip-z-group">
                                            <span className="apexcharts-tooltip-text-z-label" />
                                            <span className="apexcharts-tooltip-text-z-value" />
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="apexcharts-xaxistooltip apexcharts-xaxistooltip-bottom apexcharts-theme-light">
                                      <div
                                        className="apexcharts-xaxistooltip-text"
                                        style={{ fontFamily: "inherit", fontSize: 12 }}
                                      />
                                    </div>
                                    <div className="apexcharts-yaxistooltip apexcharts-yaxistooltip-0 apexcharts-yaxistooltip-left apexcharts-theme-light">
                                      <div className="apexcharts-yaxistooltip-text" />
                                    </div>
                                  </div>
                                </div>
                                {/*end::Chart*/}
                                {/*begin::Table container*/}
                                <div className="table-responsive mx-9 mt-n6">
                                  {/*begin::Table*/}
                                  <table className="table align-middle gs-0 gy-4">
                                    {/*begin::Table head*/}
                                    <thead>
                                      <tr>
                                        <th className="min-w-100px" />
                                        <th className="min-w-100px text-end pe-0" />
                                        <th className="text-end min-w-50px" />
                                      </tr>
                                    </thead>
                                    {/*end::Table head*/}
                                    {/*begin::Table body*/}
                                    <tbody>
                                      <tr>
                                        <td>
                                          <a
                                            href="#"
                                            className="text-gray-600 fw-bold fs-6"
                                          >
                                            2:30 PM
                                          </a>
                                        </td>
                                        <td className="pe-0 text-end">
                                          <span className="text-gray-800 fw-bold fs-6 me-1">
                                            $2,756.26
                                          </span>
                                        </td>
                                        <td className="pe-0 text-end">
                                          <span className="fw-bold fs-6 text-danger">
                                            -139.34
                                          </span>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>
                                          <a
                                            href="#"
                                            className="text-gray-600 fw-bold fs-6"
                                          >
                                            3:10 PM
                                          </a>
                                        </td>
                                        <td className="pe-0 text-end">
                                          <span className="text-gray-800 fw-bold fs-6 me-1">
                                            $3,207.03
                                          </span>
                                        </td>
                                        <td className="pe-0 text-end">
                                          <span className="fw-bold fs-6 text-success">
                                            +576.24
                                          </span>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>
                                          <a
                                            href="#"
                                            className="text-gray-600 fw-bold fs-6"
                                          >
                                            3:55 PM
                                          </a>
                                        </td>
                                        <td className="pe-0 text-end">
                                          <span className="text-gray-800 fw-bold fs-6 me-1">
                                            $3,274.94
                                          </span>
                                        </td>
                                        <td className="pe-0 text-end">
                                          <span className="fw-bold fs-6 text-success">
                                            +124.03
                                          </span>
                                        </td>
                                      </tr>
                                    </tbody>
                                    {/*end::Table body*/}
                                  </table>
                                  {/*end::Table*/}
                                </div>
                                {/*end::Table container*/}
                              </div>
                              {/*end::Tap pane*/}
                              {/*begin::Tap pane*/}
                              <div
                                className="tab-pane fade "
                                id="kt_charts_widget_35_tab_content_2"
                                role="tabpanel"
                                aria-labelledby="kt_charts_widget_35_tab_2"
                              >
                                {/*begin::Chart*/}
                                <div
                                  id="kt_charts_widget_35_chart_2"
                                  data-kt-chart-color="primary"
                                  className="min-h-auto h-200px ps-3 pe-6"
                                />
                                {/*end::Chart*/}
                                {/*begin::Table container*/}
                                <div className="table-responsive mx-9 mt-n6">
                                  {/*begin::Table*/}
                                  <table className="table align-middle gs-0 gy-4">
                                    {/*begin::Table head*/}
                                    <thead>
                                      <tr>
                                        <th className="min-w-100px" />
                                        <th className="min-w-100px text-end pe-0" />
                                        <th className="text-end min-w-50px" />
                                      </tr>
                                    </thead>
                                    {/*end::Table head*/}
                                    {/*begin::Table body*/}
                                    <tbody>
                                      <tr>
                                        <td>
                                          <a
                                            href="#"
                                            className="text-gray-600 fw-bold fs-6"
                                          >
                                            4:30 PM
                                          </a>
                                        </td>
                                        <td className="pe-0 text-end">
                                          <span className="text-gray-800 fw-bold fs-6 me-1">
                                            $2,345.45
                                          </span>
                                        </td>
                                        <td className="pe-0 text-end">
                                          <span className="fw-bold fs-6 text-success">
                                            +134.02
                                          </span>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>
                                          <a
                                            href="#"
                                            className="text-gray-600 fw-bold fs-6"
                                          >
                                            11:35 AM
                                          </a>
                                        </td>
                                        <td className="pe-0 text-end">
                                          <span className="text-gray-800 fw-bold fs-6 me-1">
                                            $756.26
                                          </span>
                                        </td>
                                        <td className="pe-0 text-end">
                                          <span className="fw-bold fs-6 text-primary">
                                            -124.03
                                          </span>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>
                                          <a
                                            href="#"
                                            className="text-gray-600 fw-bold fs-6"
                                          >
                                            3:30 PM
                                          </a>
                                        </td>
                                        <td className="pe-0 text-end">
                                          <span className="text-gray-800 fw-bold fs-6 me-1">
                                            $1,756.26
                                          </span>
                                        </td>
                                        <td className="pe-0 text-end">
                                          <span className="fw-bold fs-6 text-danger">
                                            +144.04
                                          </span>
                                        </td>
                                      </tr>
                                    </tbody>
                                    {/*end::Table body*/}
                                  </table>
                                  {/*end::Table*/}
                                </div>
                                {/*end::Table container*/}
                              </div>
                              {/*end::Tap pane*/}
                              {/*begin::Tap pane*/}
                              <div
                                className="tab-pane fade "
                                id="kt_charts_widget_35_tab_content_3"
                                role="tabpanel"
                                aria-labelledby="kt_charts_widget_35_tab_3"
                              >
                                {/*begin::Chart*/}
                                <div
                                  id="kt_charts_widget_35_chart_3"
                                  data-kt-chart-color="primary"
                                  className="min-h-auto h-200px ps-3 pe-6"
                                />
                                {/*end::Chart*/}
                                {/*begin::Table container*/}
                                <div className="table-responsive mx-9 mt-n6">
                                  {/*begin::Table*/}
                                  <table className="table align-middle gs-0 gy-4">
                                    {/*begin::Table head*/}
                                    <thead>
                                      <tr>
                                        <th className="min-w-100px" />
                                        <th className="min-w-100px text-end pe-0" />
                                        <th className="text-end min-w-50px" />
                                      </tr>
                                    </thead>
                                    {/*end::Table head*/}
                                    {/*begin::Table body*/}
                                    <tbody>
                                      <tr>
                                        <td>
                                          <a
                                            href="#"
                                            className="text-gray-600 fw-bold fs-6"
                                          >
                                            3:20 AM
                                          </a>
                                        </td>
                                        <td className="pe-0 text-end">
                                          <span className="text-gray-800 fw-bold fs-6 me-1">
                                            $3,756.26
                                          </span>
                                        </td>
                                        <td className="pe-0 text-end">
                                          <span className="fw-bold fs-6 text-primary">
                                            +185.03
                                          </span>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>
                                          <a
                                            href="#"
                                            className="text-gray-600 fw-bold fs-6"
                                          >
                                            12:30 AM
                                          </a>
                                        </td>
                                        <td className="pe-0 text-end">
                                          <span className="text-gray-800 fw-bold fs-6 me-1">
                                            $2,756.26
                                          </span>
                                        </td>
                                        <td className="pe-0 text-end">
                                          <span className="fw-bold fs-6 text-danger">
                                            +124.03
                                          </span>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>
                                          <a
                                            href="#"
                                            className="text-gray-600 fw-bold fs-6"
                                          >
                                            4:30 PM
                                          </a>
                                        </td>
                                        <td className="pe-0 text-end">
                                          <span className="text-gray-800 fw-bold fs-6 me-1">
                                            $756.26
                                          </span>
                                        </td>
                                        <td className="pe-0 text-end">
                                          <span className="fw-bold fs-6 text-success">
                                            -154.03
                                          </span>
                                        </td>
                                      </tr>
                                    </tbody>
                                    {/*end::Table body*/}
                                  </table>
                                  {/*end::Table*/}
                                </div>
                                {/*end::Table container*/}
                              </div>
                              {/*end::Tap pane*/}
                              {/*begin::Tap pane*/}
                              <div
                                className="tab-pane fade "
                                id="kt_charts_widget_35_tab_content_4"
                                role="tabpanel"
                                aria-labelledby="kt_charts_widget_35_tab_4"
                              >
                                {/*begin::Chart*/}
                                <div
                                  id="kt_charts_widget_35_chart_4"
                                  data-kt-chart-color="primary"
                                  className="min-h-auto h-200px ps-3 pe-6"
                                />
                                {/*end::Chart*/}
                                {/*begin::Table container*/}
                                <div className="table-responsive mx-9 mt-n6">
                                  {/*begin::Table*/}
                                  <table className="table align-middle gs-0 gy-4">
                                    {/*begin::Table head*/}
                                    <thead>
                                      <tr>
                                        <th className="min-w-100px" />
                                        <th className="min-w-100px text-end pe-0" />
                                        <th className="text-end min-w-50px" />
                                      </tr>
                                    </thead>
                                    {/*end::Table head*/}
                                    {/*begin::Table body*/}
                                    <tbody>
                                      <tr>
                                        <td>
                                          <a
                                            href="#"
                                            className="text-gray-600 fw-bold fs-6"
                                          >
                                            2:30 PM
                                          </a>
                                        </td>
                                        <td className="pe-0 text-end">
                                          <span className="text-gray-800 fw-bold fs-6 me-1">
                                            $2,756.26
                                          </span>
                                        </td>
                                        <td className="pe-0 text-end">
                                          <span className="fw-bold fs-6 text-warning">
                                            +124.03
                                          </span>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>
                                          <a
                                            href="#"
                                            className="text-gray-600 fw-bold fs-6"
                                          >
                                            5:30 AM
                                          </a>
                                        </td>
                                        <td className="pe-0 text-end">
                                          <span className="text-gray-800 fw-bold fs-6 me-1">
                                            $1,756.26
                                          </span>
                                        </td>
                                        <td className="pe-0 text-end">
                                          <span className="fw-bold fs-6 text-info">
                                            +144.65
                                          </span>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>
                                          <a
                                            href="#"
                                            className="text-gray-600 fw-bold fs-6"
                                          >
                                            4:30 PM
                                          </a>
                                        </td>
                                        <td className="pe-0 text-end">
                                          <span className="text-gray-800 fw-bold fs-6 me-1">
                                            $2,085.25
                                          </span>
                                        </td>
                                        <td className="pe-0 text-end">
                                          <span className="fw-bold fs-6 text-primary">
                                            +154.06
                                          </span>
                                        </td>
                                      </tr>
                                    </tbody>
                                    {/*end::Table body*/}
                                  </table>
                                  {/*end::Table*/}
                                </div>
                                {/*end::Table container*/}
                              </div>
                              {/*end::Tap pane*/}
                              {/*begin::Tap pane*/}
                              <div
                                className="tab-pane fade "
                                id="kt_charts_widget_35_tab_content_5"
                                role="tabpanel"
                                aria-labelledby="kt_charts_widget_35_tab_5"
                              >
                                {/*begin::Chart*/}
                                <div
                                  id="kt_charts_widget_35_chart_5"
                                  data-kt-chart-color="primary"
                                  className="min-h-auto h-200px ps-3 pe-6"
                                />
                                {/*end::Chart*/}
                                {/*begin::Table container*/}
                                <div className="table-responsive mx-9 mt-n6">
                                  {/*begin::Table*/}
                                  <table className="table align-middle gs-0 gy-4">
                                    {/*begin::Table head*/}
                                    <thead>
                                      <tr>
                                        <th className="min-w-100px" />
                                        <th className="min-w-100px text-end pe-0" />
                                        <th className="text-end min-w-50px" />
                                      </tr>
                                    </thead>
                                    {/*end::Table head*/}
                                    {/*begin::Table body*/}
                                    <tbody>
                                      <tr>
                                        <td>
                                          <a
                                            href="#"
                                            className="text-gray-600 fw-bold fs-6"
                                          >
                                            2:30 PM
                                          </a>
                                        </td>
                                        <td className="pe-0 text-end">
                                          <span className="text-gray-800 fw-bold fs-6 me-1">
                                            $2,045.04
                                          </span>
                                        </td>
                                        <td className="pe-0 text-end">
                                          <span className="fw-bold fs-6 text-warning">
                                            +114.03
                                          </span>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>
                                          <a
                                            href="#"
                                            className="text-gray-600 fw-bold fs-6"
                                          >
                                            3:30 AM
                                          </a>
                                        </td>
                                        <td className="pe-0 text-end">
                                          <span className="text-gray-800 fw-bold fs-6 me-1">
                                            $756.26
                                          </span>
                                        </td>
                                        <td className="pe-0 text-end">
                                          <span className="fw-bold fs-6 text-primary">
                                            -124.03
                                          </span>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td>
                                          <a
                                            href="#"
                                            className="text-gray-600 fw-bold fs-6"
                                          >
                                            10:30 PM
                                          </a>
                                        </td>
                                        <td className="pe-0 text-end">
                                          <span className="text-gray-800 fw-bold fs-6 me-1">
                                            $1.756.26
                                          </span>
                                        </td>
                                        <td className="pe-0 text-end">
                                          <span className="fw-bold fs-6 text-info">
                                            +165.86
                                          </span>
                                        </td>
                                      </tr>
                                    </tbody>
                                    {/*end::Table body*/}
                                  </table>
                                  {/*end::Table*/}
                                </div>
                                {/*end::Table container*/}
                              </div>
                              {/*end::Tap pane*/}
                            </div>
                            {/*end::Tab Content*/}
                          </div>
                          {/*end::Body*/}
                        </div>
                        {/*end::Chart Widget 35*/}
                      </div>
                      {/*end::Col*/}
                      {/*begin::Col*/}
                      <div className="col-xl-8">
                        {/*begin::Table widget 14*/}
                        <div className="card card-flush h-md-100">
                          {/*begin::Header*/}
                          <div className="card-header pt-7">
                            {/*begin::Title*/}
                            <h3 className="card-title align-items-start flex-column">
                              <span className="card-label fw-bold text-gray-800">
                                Projects Stats
                              </span>
                              <span className="text-gray-500 mt-1 fw-semibold fs-6">
                                Updated 37 minutes ago
                              </span>
                            </h3>
                            {/*end::Title*/}
                            {/*begin::Toolbar*/}
                            <div className="card-toolbar">
                              <a
                                href="../apps/ecommerce/catalog/add-product.html"
                                className="btn btn-sm btn-light"
                              >
                                History
                              </a>
                            </div>
                            {/*end::Toolbar*/}
                          </div>
                          {/*end::Header*/}
                          {/*begin::Body*/}
                          <div className="card-body pt-6">
                            {/*begin::Table container*/}
                            <div className="table-responsive">
                              {/*begin::Table*/}
                              <table className="table table-row-dashed align-middle gs-0 gy-3 my-0">
                                {/*begin::Table head*/}
                                <thead>
                                  <tr className="fs-7 fw-bold text-gray-500 border-bottom-0">
                                    <th className="p-0 pb-3 min-w-175px text-start">
                                      ITEM
                                    </th>
                                    <th className="p-0 pb-3 min-w-100px text-end">
                                      BUDGET
                                    </th>
                                    <th className="p-0 pb-3 min-w-100px text-end">
                                      PROGRESS
                                    </th>
                                    <th className="p-0 pb-3 min-w-175px text-end pe-12">
                                      STATUS
                                    </th>
                                    <th className="p-0 pb-3 w-125px text-end pe-7">
                                      CHART
                                    </th>
                                    <th className="p-0 pb-3 w-50px text-end">VIEW</th>
                                  </tr>
                                </thead>
                                {/*end::Table head*/}
                                {/*begin::Table body*/}
                                <tbody>
                                  <tr>
                                    <td>
                                      <div className="d-flex align-items-center">
                                        <div className="symbol symbol-50px me-3">
                                          <img
                                            src="assets/media/stock/600x600/img-49.jpg"
                                            className=""
                                            alt=""
                                          />
                                        </div>
                                        <div className="d-flex justify-content-start flex-column">
                                          <a
                                            href="#"
                                            className="text-gray-800 fw-bold text-hover-primary mb-1 fs-6"
                                          >
                                            Mivy App
                                          </a>
                                          <span className="text-gray-500 fw-semibold d-block fs-7">
                                            Jane Cooper
                                          </span>
                                        </div>
                                      </div>
                                    </td>
                                    <td className="text-end pe-0">
                                      <span className="text-gray-600 fw-bold fs-6">
                                        $32,400
                                      </span>
                                    </td>
                                    <td className="text-end pe-0">
                                      {/*begin::Label*/}
                                      <span className="badge badge-light-success fs-base">
                                        <i className="ki-duotone ki-arrow-up fs-5 text-success ms-n1">
                                          <span className="path1" />
                                          <span className="path2" />
                                        </i>
                                        9.2%
                                      </span>
                                      {/*end::Label*/}
                                    </td>
                                    <td className="text-end pe-12">
                                      <span className="badge py-3 px-4 fs-7 badge-light-primary">
                                        In Process
                                      </span>
                                    </td>
                                    <td className="text-end pe-0">
                                      <div
                                        id="kt_table_widget_14_chart_1"
                                        className="h-50px mt-n8 pe-7"
                                        data-kt-chart-color="success"
                                        style={{ minHeight: 50 }}
                                      >
                                        <div
                                          id="apexcharts18xbueu0k"
                                          className="apexcharts-canvas apexcharts18xbueu0k apexcharts-theme-light"
                                          style={{ width: "92.25px", height: 50 }}
                                        >
                                          <svg
                                            id="SvgjsSvg1334"
                                            width="92.25"
                                            height={50}
                                            xmlns="http://www.w3.org/2000/svg"
                                            version="1.1"
                                            xmlnsXlink="http://www.w3.org/1999/xlink"
                                            
                                            className="apexcharts-svg"
                                            
                                            transform="translate(0, 0)"
                                            style={{ background: "transparent" }}
                                          >
                                            <foreignObject
                                              x={0}
                                              y={0}
                                              width="92.25"
                                              height={50}
                                            >
                                              <div
                                                className="apexcharts-legend"
                                                xmlns="http://www.w3.org/1999/xhtml"
                                                style={{ maxHeight: 25 }}
                                              />
                                            </foreignObject>
                                            <g
                                              id="SvgjsG1373"
                                              className="apexcharts-yaxis"
                                              rel={0}
                                              transform="translate(-18, 0)"
                                            />
                                            <g
                                              id="SvgjsG1336"
                                              className="apexcharts-inner apexcharts-graphical"
                                              transform="translate(0, 1)"
                                            >
                                              <defs id="SvgjsDefs1335">
                                                <clipPath id="gridRectMask18xbueu0k">
                                                  <rect
                                                    id="SvgjsRect1339"
                                                    width="98.25"
                                                    height={54}
                                                    x={-3}
                                                    y={-3}
                                                    rx={0}
                                                    ry={0}
                                                    opacity={1}
                                                    strokeWidth={0}
                                                    stroke="none"
                                                    strokeDasharray={0}
                                                    fill="#fff"
                                                  />
                                                </clipPath>
                                                <clipPath id="forecastMask18xbueu0k" />
                                                <clipPath id="nonForecastMask18xbueu0k" />
                                                <clipPath id="gridRectMarkerMask18xbueu0k">
                                                  <rect
                                                    id="SvgjsRect1340"
                                                    width="96.25"
                                                    height={52}
                                                    x={-2}
                                                    y={-2}
                                                    rx={0}
                                                    ry={0}
                                                    opacity={1}
                                                    strokeWidth={0}
                                                    stroke="none"
                                                    strokeDasharray={0}
                                                    fill="#fff"
                                                  />
                                                </clipPath>
                                              </defs>
                                              <g
                                                id="SvgjsG1347"
                                                className="apexcharts-grid"
                                              >
                                                <g
                                                  id="SvgjsG1348"
                                                  className="apexcharts-gridlines-horizontal"
                                                  style={{ display: "none" }}
                                                >
                                                  <line
                                                    id="SvgjsLine1351"
                                                    x1={0}
                                                    y1={0}
                                                    x2="92.25"
                                                    y2={0}
                                                    stroke="#e0e0e0"
                                                    strokeDasharray={0}
                                                    strokeLinecap="butt"
                                                    className="apexcharts-gridline"
                                                  />
                                                  <line
                                                    id="SvgjsLine1352"
                                                    x1={0}
                                                    y1={48}
                                                    x2="92.25"
                                                    y2={48}
                                                    stroke="#e0e0e0"
                                                    strokeDasharray={0}
                                                    strokeLinecap="butt"
                                                    className="apexcharts-gridline"
                                                  />
                                                </g>
                                                <g
                                                  id="SvgjsG1349"
                                                  className="apexcharts-gridlines-vertical"
                                                  style={{ display: "none" }}
                                                />
                                                <line
                                                  id="SvgjsLine1354"
                                                  x1={0}
                                                  y1={48}
                                                  x2="92.25"
                                                  y2={48}
                                                  stroke="transparent"
                                                  strokeDasharray={0}
                                                  strokeLinecap="butt"
                                                />
                                                <line
                                                  id="SvgjsLine1353"
                                                  x1={0}
                                                  y1={1}
                                                  x2={0}
                                                  y2={48}
                                                  stroke="transparent"
                                                  strokeDasharray={0}
                                                  strokeLinecap="butt"
                                                />
                                              </g>
                                              <g
                                                id="SvgjsG1350"
                                                className="apexcharts-grid-borders"
                                                style={{ display: "none" }}
                                              />
                                              <g
                                                id="SvgjsG1341"
                                                className="apexcharts-area-series apexcharts-plot-series"
                                              >
                                                <g
                                                  id="SvgjsG1342"
                                                  className="apexcharts-series"
                                                  zindex={0}
                                                  seriesname="NetxProfit"
                                                  
                                                  rel={1}
                                                  
                                                >
                                                  <path
                                                    id="SvgjsPath1345"
                                                    d="M 0 42.4C 2.483653846153846 42.4 4.612500000000001 40 7.096153846153847 40C 9.579807692307693 40 11.708653846153847 44 14.192307692307693 44C 16.67596153846154 44 18.804807692307694 31.2 21.28846153846154 31.2C 23.772115384615386 31.2 25.90096153846154 43.2 28.384615384615387 43.2C 30.868269230769233 43.2 32.997115384615384 39.2 35.48076923076923 39.2C 37.96442307692308 39.2 40.09326923076924 44 42.57692307692308 44C 45.06057692307692 44 47.18942307692308 29.6 49.67307692307693 29.6C 52.156730769230776 29.6 54.28557692307693 44 56.769230769230774 44C 59.252884615384616 44 61.38173076923077 39.2 63.86538461538462 39.2C 66.34903846153847 39.2 68.47788461538462 33.6 70.96153846153847 33.6C 73.44519230769231 33.6 75.57403846153846 42.4 78.0576923076923 42.4C 80.54134615384615 42.4 82.67019230769232 31.2 85.15384615384616 31.2C 87.6375 31.2 89.76634615384616 37.6 92.25 37.6C 92.25 37.6 92.25 37.6 92.25 48 L 0 48z"
                                                    fill="rgba(255,255,255,1)"
                                                    fillOpacity={1}
                                                    strokeOpacity={1}
                                                    strokeLinecap="butt"
                                                    strokeWidth={0}
                                                    strokeDasharray={0}
                                                    className="apexcharts-area"
                                                    index={0}
                                                    clipPath="url(#gridRectMask18xbueu0k)"
                                                    pathto="M 0 42.4C 2.483653846153846 42.4 4.612500000000001 40 7.096153846153847 40C 9.579807692307693 40 11.708653846153847 44 14.192307692307693 44C 16.67596153846154 44 18.804807692307694 31.2 21.28846153846154 31.2C 23.772115384615386 31.2 25.90096153846154 43.2 28.384615384615387 43.2C 30.868269230769233 43.2 32.997115384615384 39.2 35.48076923076923 39.2C 37.96442307692308 39.2 40.09326923076924 44 42.57692307692308 44C 45.06057692307692 44 47.18942307692308 29.6 49.67307692307693 29.6C 52.156730769230776 29.6 54.28557692307693 44 56.769230769230774 44C 59.252884615384616 44 61.38173076923077 39.2 63.86538461538462 39.2C 66.34903846153847 39.2 68.47788461538462 33.6 70.96153846153847 33.6C 73.44519230769231 33.6 75.57403846153846 42.4 78.0576923076923 42.4C 80.54134615384615 42.4 82.67019230769232 31.2 85.15384615384616 31.2C 87.6375 31.2 89.76634615384616 37.6 92.25 37.6C 92.25 37.6 92.25 37.6 92.25 48 L 0 48z"
                                                    pathfrom="M -1 48 L -1 48 L 7.096153846153847 48 L 14.192307692307693 48 L 21.28846153846154 48 L 28.384615384615387 48 L 35.48076923076923 48 L 42.57692307692308 48 L 49.67307692307693 48 L 56.769230769230774 48 L 63.86538461538462 48 L 70.96153846153847 48 L 78.0576923076923 48 L 85.15384615384616 48 L 92.25 48"
                                                  />
                                                  <path
                                                    id="SvgjsPath1346"
                                                    d="M 0 42.4C 2.483653846153846 42.4 4.612500000000001 40 7.096153846153847 40C 9.579807692307693 40 11.708653846153847 44 14.192307692307693 44C 16.67596153846154 44 18.804807692307694 31.2 21.28846153846154 31.2C 23.772115384615386 31.2 25.90096153846154 43.2 28.384615384615387 43.2C 30.868269230769233 43.2 32.997115384615384 39.2 35.48076923076923 39.2C 37.96442307692308 39.2 40.09326923076924 44 42.57692307692308 44C 45.06057692307692 44 47.18942307692308 29.6 49.67307692307693 29.6C 52.156730769230776 29.6 54.28557692307693 44 56.769230769230774 44C 59.252884615384616 44 61.38173076923077 39.2 63.86538461538462 39.2C 66.34903846153847 39.2 68.47788461538462 33.6 70.96153846153847 33.6C 73.44519230769231 33.6 75.57403846153846 42.4 78.0576923076923 42.4C 80.54134615384615 42.4 82.67019230769232 31.2 85.15384615384616 31.2C 87.6375 31.2 89.76634615384616 37.6 92.25 37.6M 92.25 37.6"
                                                    fill="none"
                                                    fillOpacity={1}
                                                    stroke="#75cc68"
                                                    strokeOpacity={1}
                                                    strokeLinecap="butt"
                                                    strokeWidth={2}
                                                    strokeDasharray={0}
                                                    className="apexcharts-area"
                                                    index={0}
                                                    clipPath="url(#gridRectMask18xbueu0k)"
                                                    pathto="M 0 42.4C 2.483653846153846 42.4 4.612500000000001 40 7.096153846153847 40C 9.579807692307693 40 11.708653846153847 44 14.192307692307693 44C 16.67596153846154 44 18.804807692307694 31.2 21.28846153846154 31.2C 23.772115384615386 31.2 25.90096153846154 43.2 28.384615384615387 43.2C 30.868269230769233 43.2 32.997115384615384 39.2 35.48076923076923 39.2C 37.96442307692308 39.2 40.09326923076924 44 42.57692307692308 44C 45.06057692307692 44 47.18942307692308 29.6 49.67307692307693 29.6C 52.156730769230776 29.6 54.28557692307693 44 56.769230769230774 44C 59.252884615384616 44 61.38173076923077 39.2 63.86538461538462 39.2C 66.34903846153847 39.2 68.47788461538462 33.6 70.96153846153847 33.6C 73.44519230769231 33.6 75.57403846153846 42.4 78.0576923076923 42.4C 80.54134615384615 42.4 82.67019230769232 31.2 85.15384615384616 31.2C 87.6375 31.2 89.76634615384616 37.6 92.25 37.6M 92.25 37.6"
                                                    pathfrom="M -1 48 L -1 48 L 7.096153846153847 48 L 14.192307692307693 48 L 21.28846153846154 48 L 28.384615384615387 48 L 35.48076923076923 48 L 42.57692307692308 48 L 49.67307692307693 48 L 56.769230769230774 48 L 63.86538461538462 48 L 70.96153846153847 48 L 78.0576923076923 48 L 85.15384615384616 48 L 92.25 48"
                                                    fillRule="evenodd"
                                                  />
                                                  <g
                                                    id="SvgjsG1343"
                                                    className="apexcharts-series-markers-wrap apexcharts-hidden-element-shown"
                                                    
                                                  />
                                                </g>
                                                <g
                                                  id="SvgjsG1344"
                                                  className="apexcharts-datalabels"
                                                  
                                                />
                                              </g>
                                              <line
                                                id="SvgjsLine1355"
                                                x1={0}
                                                y1={0}
                                                x2="92.25"
                                                y2={0}
                                                stroke="#b6b6b6"
                                                strokeDasharray={0}
                                                strokeWidth={1}
                                                strokeLinecap="butt"
                                                className="apexcharts-ycrosshairs"
                                              />
                                              <line
                                                id="SvgjsLine1356"
                                                x1={0}
                                                y1={0}
                                                x2="92.25"
                                                y2={0}
                                                strokeDasharray={0}
                                                strokeWidth={0}
                                                strokeLinecap="butt"
                                                className="apexcharts-ycrosshairs-hidden"
                                              />
                                              <g
                                                id="SvgjsG1357"
                                                className="apexcharts-xaxis"
                                                transform="translate(0, 0)"
                                              >
                                                <g
                                                  id="SvgjsG1358"
                                                  className="apexcharts-xaxis-texts-g"
                                                  transform="translate(0, 4)"
                                                />
                                              </g>
                                              <g
                                                id="SvgjsG1374"
                                                className="apexcharts-yaxis-annotations"
                                              />
                                              <g
                                                id="SvgjsG1375"
                                                className="apexcharts-xaxis-annotations"
                                              />
                                              <g
                                                id="SvgjsG1376"
                                                className="apexcharts-point-annotations"
                                              />
                                            </g>
                                          </svg>
                                        </div>
                                      </div>
                                    </td>
                                    <td className="text-end">
                                      <a
                                        href="#"
                                        className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary w-30px h-30px"
                                      >
                                        <i className="ki-duotone ki-black-right fs-2 text-gray-500" />{" "}
                                      </a>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <div className="d-flex align-items-center">
                                        <div className="symbol symbol-50px me-3">
                                          <img
                                            src="assets/media/stock/600x600/img-40.jpg"
                                            className=""
                                            alt=""
                                          />
                                        </div>
                                        <div className="d-flex justify-content-start flex-column">
                                          <a
                                            href="#"
                                            className="text-gray-800 fw-bold text-hover-primary mb-1 fs-6"
                                          >
                                            Avionica
                                          </a>
                                          <span className="text-gray-500 fw-semibold d-block fs-7">
                                            Esther Howard
                                          </span>
                                        </div>
                                      </div>
                                    </td>
                                    <td className="text-end pe-0">
                                      <span className="text-gray-600 fw-bold fs-6">
                                        $256,910
                                      </span>
                                    </td>
                                    <td className="text-end pe-0">
                                      {/*begin::Label*/}
                                      <span className="badge badge-light-danger fs-base">
                                        <i className="ki-duotone ki-arrow-down fs-5 text-danger ms-n1">
                                          <span className="path1" />
                                          <span className="path2" />
                                        </i>
                                        0.4%
                                      </span>
                                      {/*end::Label*/}
                                    </td>
                                    <td className="text-end pe-12">
                                      <span className="badge py-3 px-4 fs-7 badge-light-warning">
                                        On Hold
                                      </span>
                                    </td>
                                    <td className="text-end pe-0">
                                      <div
                                        id="kt_table_widget_14_chart_2"
                                        className="h-50px mt-n8 pe-7"
                                        data-kt-chart-color="danger"
                                        style={{ minHeight: 50 }}
                                      >
                                        <div
                                          id="apexchartsgvlho2zk"
                                          className="apexcharts-canvas apexchartsgvlho2zk apexcharts-theme-light"
                                          style={{ width: "92.25px", height: 50 }}
                                        >
                                          <svg
                                            id="SvgjsSvg1377"
                                            width="92.25"
                                            height={50}
                                            xmlns="http://www.w3.org/2000/svg"
                                            version="1.1"
                                            xmlnsXlink="http://www.w3.org/1999/xlink"
                                            
                                            className="apexcharts-svg"
                                            
                                            transform="translate(0, 0)"
                                            style={{ background: "transparent" }}
                                          >
                                            <foreignObject
                                              x={0}
                                              y={0}
                                              width="92.25"
                                              height={50}
                                            >
                                              <div
                                                className="apexcharts-legend"
                                                xmlns="http://www.w3.org/1999/xhtml"
                                                style={{ maxHeight: 25 }}
                                              />
                                            </foreignObject>
                                            <g
                                              id="SvgjsG1416"
                                              className="apexcharts-yaxis"
                                              rel={0}
                                              transform="translate(-18, 0)"
                                            />
                                            <g
                                              id="SvgjsG1379"
                                              className="apexcharts-inner apexcharts-graphical"
                                              transform="translate(0, 1)"
                                            >
                                              <defs id="SvgjsDefs1378">
                                                <clipPath id="gridRectMaskgvlho2zk">
                                                  <rect
                                                    id="SvgjsRect1382"
                                                    width="98.25"
                                                    height={54}
                                                    x={-3}
                                                    y={-3}
                                                    rx={0}
                                                    ry={0}
                                                    opacity={1}
                                                    strokeWidth={0}
                                                    stroke="none"
                                                    strokeDasharray={0}
                                                    fill="#fff"
                                                  />
                                                </clipPath>
                                                <clipPath id="forecastMaskgvlho2zk" />
                                                <clipPath id="nonForecastMaskgvlho2zk" />
                                                <clipPath id="gridRectMarkerMaskgvlho2zk">
                                                  <rect
                                                    id="SvgjsRect1383"
                                                    width="96.25"
                                                    height={52}
                                                    x={-2}
                                                    y={-2}
                                                    rx={0}
                                                    ry={0}
                                                    opacity={1}
                                                    strokeWidth={0}
                                                    stroke="none"
                                                    strokeDasharray={0}
                                                    fill="#fff"
                                                  />
                                                </clipPath>
                                              </defs>
                                              <g
                                                id="SvgjsG1390"
                                                className="apexcharts-grid"
                                              >
                                                <g
                                                  id="SvgjsG1391"
                                                  className="apexcharts-gridlines-horizontal"
                                                  style={{ display: "none" }}
                                                >
                                                  <line
                                                    id="SvgjsLine1394"
                                                    x1={0}
                                                    y1={0}
                                                    x2="92.25"
                                                    y2={0}
                                                    stroke="#e0e0e0"
                                                    strokeDasharray={0}
                                                    strokeLinecap="butt"
                                                    className="apexcharts-gridline"
                                                  />
                                                  <line
                                                    id="SvgjsLine1395"
                                                    x1={0}
                                                    y1={48}
                                                    x2="92.25"
                                                    y2={48}
                                                    stroke="#e0e0e0"
                                                    strokeDasharray={0}
                                                    strokeLinecap="butt"
                                                    className="apexcharts-gridline"
                                                  />
                                                </g>
                                                <g
                                                  id="SvgjsG1392"
                                                  className="apexcharts-gridlines-vertical"
                                                  style={{ display: "none" }}
                                                />
                                                <line
                                                  id="SvgjsLine1397"
                                                  x1={0}
                                                  y1={48}
                                                  x2="92.25"
                                                  y2={48}
                                                  stroke="transparent"
                                                  strokeDasharray={0}
                                                  strokeLinecap="butt"
                                                />
                                                <line
                                                  id="SvgjsLine1396"
                                                  x1={0}
                                                  y1={1}
                                                  x2={0}
                                                  y2={48}
                                                  stroke="transparent"
                                                  strokeDasharray={0}
                                                  strokeLinecap="butt"
                                                />
                                              </g>
                                              <g
                                                id="SvgjsG1393"
                                                className="apexcharts-grid-borders"
                                                style={{ display: "none" }}
                                              />
                                              <g
                                                id="SvgjsG1384"
                                                className="apexcharts-area-series apexcharts-plot-series"
                                              >
                                                <g
                                                  id="SvgjsG1385"
                                                  className="apexcharts-series"
                                                  zindex={0}
                                                  seriesname="NetxProfit"
                                                  
                                                  rel={1}
                                                  
                                                >
                                                  <path
                                                    id="SvgjsPath1388"
                                                    d="M 0 34.4C 2.483653846153846 34.4 4.612500000000001 44 7.096153846153847 44C 9.579807692307693 44 11.708653846153847 29.6 14.192307692307693 29.6C 16.67596153846154 29.6 18.804807692307694 46.4 21.28846153846154 46.4C 23.772115384615386 46.4 25.90096153846154 31.2 28.384615384615387 31.2C 30.868269230769233 31.2 32.997115384615384 40.8 35.48076923076923 40.8C 37.96442307692308 40.8 40.09326923076924 34.4 42.57692307692308 34.4C 45.06057692307692 34.4 47.18942307692308 29.6 49.67307692307693 29.6C 52.156730769230776 29.6 54.28557692307693 44.8 56.769230769230774 44.8C 59.252884615384616 44.8 61.38173076923077 28.8 63.86538461538462 28.8C 66.34903846153847 28.8 68.47788461538462 40.8 70.96153846153847 40.8C 73.44519230769231 40.8 75.57403846153846 34.4 78.0576923076923 34.4C 80.54134615384615 34.4 82.67019230769232 31.2 85.15384615384616 31.2C 87.6375 31.2 89.76634615384616 42.4 92.25 42.4C 92.25 42.4 92.25 42.4 92.25 48 L 0 48z"
                                                    fill="rgba(255,255,255,1)"
                                                    fillOpacity={1}
                                                    strokeOpacity={1}
                                                    strokeLinecap="butt"
                                                    strokeWidth={0}
                                                    strokeDasharray={0}
                                                    className="apexcharts-area"
                                                    index={0}
                                                    clipPath="url(#gridRectMaskgvlho2zk)"
                                                    pathto="M 0 34.4C 2.483653846153846 34.4 4.612500000000001 44 7.096153846153847 44C 9.579807692307693 44 11.708653846153847 29.6 14.192307692307693 29.6C 16.67596153846154 29.6 18.804807692307694 46.4 21.28846153846154 46.4C 23.772115384615386 46.4 25.90096153846154 31.2 28.384615384615387 31.2C 30.868269230769233 31.2 32.997115384615384 40.8 35.48076923076923 40.8C 37.96442307692308 40.8 40.09326923076924 34.4 42.57692307692308 34.4C 45.06057692307692 34.4 47.18942307692308 29.6 49.67307692307693 29.6C 52.156730769230776 29.6 54.28557692307693 44.8 56.769230769230774 44.8C 59.252884615384616 44.8 61.38173076923077 28.8 63.86538461538462 28.8C 66.34903846153847 28.8 68.47788461538462 40.8 70.96153846153847 40.8C 73.44519230769231 40.8 75.57403846153846 34.4 78.0576923076923 34.4C 80.54134615384615 34.4 82.67019230769232 31.2 85.15384615384616 31.2C 87.6375 31.2 89.76634615384616 42.4 92.25 42.4C 92.25 42.4 92.25 42.4 92.25 48 L 0 48z"
                                                    pathfrom="M -1 48 L -1 48 L 7.096153846153847 48 L 14.192307692307693 48 L 21.28846153846154 48 L 28.384615384615387 48 L 35.48076923076923 48 L 42.57692307692308 48 L 49.67307692307693 48 L 56.769230769230774 48 L 63.86538461538462 48 L 70.96153846153847 48 L 78.0576923076923 48 L 85.15384615384616 48 L 92.25 48"
                                                  />
                                                  <path
                                                    id="SvgjsPath1389"
                                                    d="M 0 34.4C 2.483653846153846 34.4 4.612500000000001 44 7.096153846153847 44C 9.579807692307693 44 11.708653846153847 29.6 14.192307692307693 29.6C 16.67596153846154 29.6 18.804807692307694 46.4 21.28846153846154 46.4C 23.772115384615386 46.4 25.90096153846154 31.2 28.384615384615387 31.2C 30.868269230769233 31.2 32.997115384615384 40.8 35.48076923076923 40.8C 37.96442307692308 40.8 40.09326923076924 34.4 42.57692307692308 34.4C 45.06057692307692 34.4 47.18942307692308 29.6 49.67307692307693 29.6C 52.156730769230776 29.6 54.28557692307693 44.8 56.769230769230774 44.8C 59.252884615384616 44.8 61.38173076923077 28.8 63.86538461538462 28.8C 66.34903846153847 28.8 68.47788461538462 40.8 70.96153846153847 40.8C 73.44519230769231 40.8 75.57403846153846 34.4 78.0576923076923 34.4C 80.54134615384615 34.4 82.67019230769232 31.2 85.15384615384616 31.2C 87.6375 31.2 89.76634615384616 42.4 92.25 42.4M 92.25 42.4"
                                                    fill="none"
                                                    fillOpacity={1}
                                                    stroke="#f14c41"
                                                    strokeOpacity={1}
                                                    strokeLinecap="butt"
                                                    strokeWidth={2}
                                                    strokeDasharray={0}
                                                    className="apexcharts-area"
                                                    index={0}
                                                    clipPath="url(#gridRectMaskgvlho2zk)"
                                                    pathto="M 0 34.4C 2.483653846153846 34.4 4.612500000000001 44 7.096153846153847 44C 9.579807692307693 44 11.708653846153847 29.6 14.192307692307693 29.6C 16.67596153846154 29.6 18.804807692307694 46.4 21.28846153846154 46.4C 23.772115384615386 46.4 25.90096153846154 31.2 28.384615384615387 31.2C 30.868269230769233 31.2 32.997115384615384 40.8 35.48076923076923 40.8C 37.96442307692308 40.8 40.09326923076924 34.4 42.57692307692308 34.4C 45.06057692307692 34.4 47.18942307692308 29.6 49.67307692307693 29.6C 52.156730769230776 29.6 54.28557692307693 44.8 56.769230769230774 44.8C 59.252884615384616 44.8 61.38173076923077 28.8 63.86538461538462 28.8C 66.34903846153847 28.8 68.47788461538462 40.8 70.96153846153847 40.8C 73.44519230769231 40.8 75.57403846153846 34.4 78.0576923076923 34.4C 80.54134615384615 34.4 82.67019230769232 31.2 85.15384615384616 31.2C 87.6375 31.2 89.76634615384616 42.4 92.25 42.4M 92.25 42.4"
                                                    pathfrom="M -1 48 L -1 48 L 7.096153846153847 48 L 14.192307692307693 48 L 21.28846153846154 48 L 28.384615384615387 48 L 35.48076923076923 48 L 42.57692307692308 48 L 49.67307692307693 48 L 56.769230769230774 48 L 63.86538461538462 48 L 70.96153846153847 48 L 78.0576923076923 48 L 85.15384615384616 48 L 92.25 48"
                                                    fillRule="evenodd"
                                                  />
                                                  <g
                                                    id="SvgjsG1386"
                                                    className="apexcharts-series-markers-wrap apexcharts-hidden-element-shown"
                                                    
                                                  />
                                                </g>
                                                <g
                                                  id="SvgjsG1387"
                                                  className="apexcharts-datalabels"
                                                  
                                                />
                                              </g>
                                              <line
                                                id="SvgjsLine1398"
                                                x1={0}
                                                y1={0}
                                                x2="92.25"
                                                y2={0}
                                                stroke="#b6b6b6"
                                                strokeDasharray={0}
                                                strokeWidth={1}
                                                strokeLinecap="butt"
                                                className="apexcharts-ycrosshairs"
                                              />
                                              <line
                                                id="SvgjsLine1399"
                                                x1={0}
                                                y1={0}
                                                x2="92.25"
                                                y2={0}
                                                strokeDasharray={0}
                                                strokeWidth={0}
                                                strokeLinecap="butt"
                                                className="apexcharts-ycrosshairs-hidden"
                                              />
                                              <g
                                                id="SvgjsG1400"
                                                className="apexcharts-xaxis"
                                                transform="translate(0, 0)"
                                              >
                                                <g
                                                  id="SvgjsG1401"
                                                  className="apexcharts-xaxis-texts-g"
                                                  transform="translate(0, 4)"
                                                />
                                              </g>
                                              <g
                                                id="SvgjsG1417"
                                                className="apexcharts-yaxis-annotations"
                                              />
                                              <g
                                                id="SvgjsG1418"
                                                className="apexcharts-xaxis-annotations"
                                              />
                                              <g
                                                id="SvgjsG1419"
                                                className="apexcharts-point-annotations"
                                              />
                                            </g>
                                          </svg>
                                        </div>
                                      </div>
                                    </td>
                                    <td className="text-end">
                                      <a
                                        href="#"
                                        className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary w-30px h-30px"
                                      >
                                        <i className="ki-duotone ki-black-right fs-2 text-gray-500" />{" "}
                                      </a>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <div className="d-flex align-items-center">
                                        <div className="symbol symbol-50px me-3">
                                          <img
                                            src="assets/media/stock/600x600/img-39.jpg"
                                            className=""
                                            alt=""
                                          />
                                        </div>
                                        <div className="d-flex justify-content-start flex-column">
                                          <a
                                            href="#"
                                            className="text-gray-800 fw-bold text-hover-primary mb-1 fs-6"
                                          >
                                            Charto CRM
                                          </a>
                                          <span className="text-gray-500 fw-semibold d-block fs-7">
                                            Jenny Wilson
                                          </span>
                                        </div>
                                      </div>
                                    </td>
                                    <td className="text-end pe-0">
                                      <span className="text-gray-600 fw-bold fs-6">
                                        $8,220
                                      </span>
                                    </td>
                                    <td className="text-end pe-0">
                                      {/*begin::Label*/}
                                      <span className="badge badge-light-success fs-base">
                                        <i className="ki-duotone ki-arrow-up fs-5 text-success ms-n1">
                                          <span className="path1" />
                                          <span className="path2" />
                                        </i>
                                        9.2%
                                      </span>
                                      {/*end::Label*/}
                                    </td>
                                    <td className="text-end pe-12">
                                      <span className="badge py-3 px-4 fs-7 badge-light-primary">
                                        In Process
                                      </span>
                                    </td>
                                    <td className="text-end pe-0">
                                      <div
                                        id="kt_table_widget_14_chart_3"
                                        className="h-50px mt-n8 pe-7"
                                        data-kt-chart-color="success"
                                        style={{ minHeight: 50 }}
                                      >
                                        <div
                                          id="apexchartsu70sg94d"
                                          className="apexcharts-canvas apexchartsu70sg94d apexcharts-theme-light"
                                          style={{ width: "92.25px", height: 50 }}
                                        >
                                          <svg
                                            id="SvgjsSvg1420"
                                            width="92.25"
                                            height={50}
                                            xmlns="http://www.w3.org/2000/svg"
                                            version="1.1"
                                            xmlnsXlink="http://www.w3.org/1999/xlink"
                                            
                                            className="apexcharts-svg"
                                            
                                            transform="translate(0, 0)"
                                            style={{ background: "transparent" }}
                                          >
                                            <foreignObject
                                              x={0}
                                              y={0}
                                              width="92.25"
                                              height={50}
                                            >
                                              <div
                                                className="apexcharts-legend"
                                                xmlns="http://www.w3.org/1999/xhtml"
                                                style={{ maxHeight: 25 }}
                                              />
                                            </foreignObject>
                                            <g
                                              id="SvgjsG1459"
                                              className="apexcharts-yaxis"
                                              rel={0}
                                              transform="translate(-18, 0)"
                                            />
                                            <g
                                              id="SvgjsG1422"
                                              className="apexcharts-inner apexcharts-graphical"
                                              transform="translate(0, 1)"
                                            >
                                              <defs id="SvgjsDefs1421">
                                                <clipPath id="gridRectMasku70sg94d">
                                                  <rect
                                                    id="SvgjsRect1425"
                                                    width="98.25"
                                                    height={54}
                                                    x={-3}
                                                    y={-3}
                                                    rx={0}
                                                    ry={0}
                                                    opacity={1}
                                                    strokeWidth={0}
                                                    stroke="none"
                                                    strokeDasharray={0}
                                                    fill="#fff"
                                                  />
                                                </clipPath>
                                                <clipPath id="forecastMasku70sg94d" />
                                                <clipPath id="nonForecastMasku70sg94d" />
                                                <clipPath id="gridRectMarkerMasku70sg94d">
                                                  <rect
                                                    id="SvgjsRect1426"
                                                    width="96.25"
                                                    height={52}
                                                    x={-2}
                                                    y={-2}
                                                    rx={0}
                                                    ry={0}
                                                    opacity={1}
                                                    strokeWidth={0}
                                                    stroke="none"
                                                    strokeDasharray={0}
                                                    fill="#fff"
                                                  />
                                                </clipPath>
                                              </defs>
                                              <g
                                                id="SvgjsG1433"
                                                className="apexcharts-grid"
                                              >
                                                <g
                                                  id="SvgjsG1434"
                                                  className="apexcharts-gridlines-horizontal"
                                                  style={{ display: "none" }}
                                                >
                                                  <line
                                                    id="SvgjsLine1437"
                                                    x1={0}
                                                    y1={0}
                                                    x2="92.25"
                                                    y2={0}
                                                    stroke="#e0e0e0"
                                                    strokeDasharray={0}
                                                    strokeLinecap="butt"
                                                    className="apexcharts-gridline"
                                                  />
                                                  <line
                                                    id="SvgjsLine1438"
                                                    x1={0}
                                                    y1={48}
                                                    x2="92.25"
                                                    y2={48}
                                                    stroke="#e0e0e0"
                                                    strokeDasharray={0}
                                                    strokeLinecap="butt"
                                                    className="apexcharts-gridline"
                                                  />
                                                </g>
                                                <g
                                                  id="SvgjsG1435"
                                                  className="apexcharts-gridlines-vertical"
                                                  style={{ display: "none" }}
                                                />
                                                <line
                                                  id="SvgjsLine1440"
                                                  x1={0}
                                                  y1={48}
                                                  x2="92.25"
                                                  y2={48}
                                                  stroke="transparent"
                                                  strokeDasharray={0}
                                                  strokeLinecap="butt"
                                                />
                                                <line
                                                  id="SvgjsLine1439"
                                                  x1={0}
                                                  y1={1}
                                                  x2={0}
                                                  y2={48}
                                                  stroke="transparent"
                                                  strokeDasharray={0}
                                                  strokeLinecap="butt"
                                                />
                                              </g>
                                              <g
                                                id="SvgjsG1436"
                                                className="apexcharts-grid-borders"
                                                style={{ display: "none" }}
                                              />
                                              <g
                                                id="SvgjsG1427"
                                                className="apexcharts-area-series apexcharts-plot-series"
                                              >
                                                <g
                                                  id="SvgjsG1428"
                                                  className="apexcharts-series"
                                                  zindex={0}
                                                  seriesname="NetxProfit"
                                                  
                                                  rel={1}
                                                  
                                                >
                                                  <path
                                                    id="SvgjsPath1431"
                                                    d="M 0 46.4C 2.483653846153846 46.4 4.612500000000001 28.8 7.096153846153847 28.8C 9.579807692307693 28.8 11.708653846153847 44 14.192307692307693 44C 16.67596153846154 44 18.804807692307694 34.4 21.28846153846154 34.4C 23.772115384615386 34.4 25.90096153846154 42.4 28.384615384615387 42.4C 30.868269230769233 42.4 32.997115384615384 46.4 35.48076923076923 46.4C 37.96442307692308 46.4 40.09326923076924 38.4 42.57692307692308 38.4C 45.06057692307692 38.4 47.18942307692308 28.8 49.67307692307693 28.8C 52.156730769230776 28.8 54.28557692307693 44 56.769230769230774 44C 59.252884615384616 44 61.38173076923077 28.8 63.86538461538462 28.8C 66.34903846153847 28.8 68.47788461538462 46.4 70.96153846153847 46.4C 73.44519230769231 46.4 75.57403846153846 41.6 78.0576923076923 41.6C 80.54134615384615 41.6 82.67019230769232 38.4 85.15384615384616 38.4C 87.6375 38.4 89.76634615384616 42.4 92.25 42.4C 92.25 42.4 92.25 42.4 92.25 48 L 0 48z"
                                                    fill="rgba(255,255,255,1)"
                                                    fillOpacity={1}
                                                    strokeOpacity={1}
                                                    strokeLinecap="butt"
                                                    strokeWidth={0}
                                                    strokeDasharray={0}
                                                    className="apexcharts-area"
                                                    index={0}
                                                    clipPath="url(#gridRectMasku70sg94d)"
                                                    pathto="M 0 46.4C 2.483653846153846 46.4 4.612500000000001 28.8 7.096153846153847 28.8C 9.579807692307693 28.8 11.708653846153847 44 14.192307692307693 44C 16.67596153846154 44 18.804807692307694 34.4 21.28846153846154 34.4C 23.772115384615386 34.4 25.90096153846154 42.4 28.384615384615387 42.4C 30.868269230769233 42.4 32.997115384615384 46.4 35.48076923076923 46.4C 37.96442307692308 46.4 40.09326923076924 38.4 42.57692307692308 38.4C 45.06057692307692 38.4 47.18942307692308 28.8 49.67307692307693 28.8C 52.156730769230776 28.8 54.28557692307693 44 56.769230769230774 44C 59.252884615384616 44 61.38173076923077 28.8 63.86538461538462 28.8C 66.34903846153847 28.8 68.47788461538462 46.4 70.96153846153847 46.4C 73.44519230769231 46.4 75.57403846153846 41.6 78.0576923076923 41.6C 80.54134615384615 41.6 82.67019230769232 38.4 85.15384615384616 38.4C 87.6375 38.4 89.76634615384616 42.4 92.25 42.4C 92.25 42.4 92.25 42.4 92.25 48 L 0 48z"
                                                    pathfrom="M -1 48 L -1 48 L 7.096153846153847 48 L 14.192307692307693 48 L 21.28846153846154 48 L 28.384615384615387 48 L 35.48076923076923 48 L 42.57692307692308 48 L 49.67307692307693 48 L 56.769230769230774 48 L 63.86538461538462 48 L 70.96153846153847 48 L 78.0576923076923 48 L 85.15384615384616 48 L 92.25 48"
                                                  />
                                                  <path
                                                    id="SvgjsPath1432"
                                                    d="M 0 46.4C 2.483653846153846 46.4 4.612500000000001 28.8 7.096153846153847 28.8C 9.579807692307693 28.8 11.708653846153847 44 14.192307692307693 44C 16.67596153846154 44 18.804807692307694 34.4 21.28846153846154 34.4C 23.772115384615386 34.4 25.90096153846154 42.4 28.384615384615387 42.4C 30.868269230769233 42.4 32.997115384615384 46.4 35.48076923076923 46.4C 37.96442307692308 46.4 40.09326923076924 38.4 42.57692307692308 38.4C 45.06057692307692 38.4 47.18942307692308 28.8 49.67307692307693 28.8C 52.156730769230776 28.8 54.28557692307693 44 56.769230769230774 44C 59.252884615384616 44 61.38173076923077 28.8 63.86538461538462 28.8C 66.34903846153847 28.8 68.47788461538462 46.4 70.96153846153847 46.4C 73.44519230769231 46.4 75.57403846153846 41.6 78.0576923076923 41.6C 80.54134615384615 41.6 82.67019230769232 38.4 85.15384615384616 38.4C 87.6375 38.4 89.76634615384616 42.4 92.25 42.4M 92.25 42.4"
                                                    fill="none"
                                                    fillOpacity={1}
                                                    stroke="#75cc68"
                                                    strokeOpacity={1}
                                                    strokeLinecap="butt"
                                                    strokeWidth={2}
                                                    strokeDasharray={0}
                                                    className="apexcharts-area"
                                                    index={0}
                                                    clipPath="url(#gridRectMasku70sg94d)"
                                                    pathto="M 0 46.4C 2.483653846153846 46.4 4.612500000000001 28.8 7.096153846153847 28.8C 9.579807692307693 28.8 11.708653846153847 44 14.192307692307693 44C 16.67596153846154 44 18.804807692307694 34.4 21.28846153846154 34.4C 23.772115384615386 34.4 25.90096153846154 42.4 28.384615384615387 42.4C 30.868269230769233 42.4 32.997115384615384 46.4 35.48076923076923 46.4C 37.96442307692308 46.4 40.09326923076924 38.4 42.57692307692308 38.4C 45.06057692307692 38.4 47.18942307692308 28.8 49.67307692307693 28.8C 52.156730769230776 28.8 54.28557692307693 44 56.769230769230774 44C 59.252884615384616 44 61.38173076923077 28.8 63.86538461538462 28.8C 66.34903846153847 28.8 68.47788461538462 46.4 70.96153846153847 46.4C 73.44519230769231 46.4 75.57403846153846 41.6 78.0576923076923 41.6C 80.54134615384615 41.6 82.67019230769232 38.4 85.15384615384616 38.4C 87.6375 38.4 89.76634615384616 42.4 92.25 42.4M 92.25 42.4"
                                                    pathfrom="M -1 48 L -1 48 L 7.096153846153847 48 L 14.192307692307693 48 L 21.28846153846154 48 L 28.384615384615387 48 L 35.48076923076923 48 L 42.57692307692308 48 L 49.67307692307693 48 L 56.769230769230774 48 L 63.86538461538462 48 L 70.96153846153847 48 L 78.0576923076923 48 L 85.15384615384616 48 L 92.25 48"
                                                    fillRule="evenodd"
                                                  />
                                                  <g
                                                    id="SvgjsG1429"
                                                    className="apexcharts-series-markers-wrap apexcharts-hidden-element-shown"
                                                    
                                                  />
                                                </g>
                                                <g
                                                  id="SvgjsG1430"
                                                  className="apexcharts-datalabels"
                                                  
                                                />
                                              </g>
                                              <line
                                                id="SvgjsLine1441"
                                                x1={0}
                                                y1={0}
                                                x2="92.25"
                                                y2={0}
                                                stroke="#b6b6b6"
                                                strokeDasharray={0}
                                                strokeWidth={1}
                                                strokeLinecap="butt"
                                                className="apexcharts-ycrosshairs"
                                              />
                                              <line
                                                id="SvgjsLine1442"
                                                x1={0}
                                                y1={0}
                                                x2="92.25"
                                                y2={0}
                                                strokeDasharray={0}
                                                strokeWidth={0}
                                                strokeLinecap="butt"
                                                className="apexcharts-ycrosshairs-hidden"
                                              />
                                              <g
                                                id="SvgjsG1443"
                                                className="apexcharts-xaxis"
                                                transform="translate(0, 0)"
                                              >
                                                <g
                                                  id="SvgjsG1444"
                                                  className="apexcharts-xaxis-texts-g"
                                                  transform="translate(0, 4)"
                                                />
                                              </g>
                                              <g
                                                id="SvgjsG1460"
                                                className="apexcharts-yaxis-annotations"
                                              />
                                              <g
                                                id="SvgjsG1461"
                                                className="apexcharts-xaxis-annotations"
                                              />
                                              <g
                                                id="SvgjsG1462"
                                                className="apexcharts-point-annotations"
                                              />
                                            </g>
                                          </svg>
                                        </div>
                                      </div>
                                    </td>
                                    <td className="text-end">
                                      <a
                                        href="#"
                                        className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary w-30px h-30px"
                                      >
                                        <i className="ki-duotone ki-black-right fs-2 text-gray-500" />{" "}
                                      </a>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <div className="d-flex align-items-center">
                                        <div className="symbol symbol-50px me-3">
                                          <img
                                            src="assets/media/stock/600x600/img-47.jpg"
                                            className=""
                                            alt=""
                                          />
                                        </div>
                                        <div className="d-flex justify-content-start flex-column">
                                          <a
                                            href="#"
                                            className="text-gray-800 fw-bold text-hover-primary mb-1 fs-6"
                                          >
                                            Tower Hill
                                          </a>
                                          <span className="text-gray-500 fw-semibold d-block fs-7">
                                            Cody Fisher
                                          </span>
                                        </div>
                                      </div>
                                    </td>
                                    <td className="text-end pe-0">
                                      <span className="text-gray-600 fw-bold fs-6">
                                        $74,000
                                      </span>
                                    </td>
                                    <td className="text-end pe-0">
                                      {/*begin::Label*/}
                                      <span className="badge badge-light-success fs-base">
                                        <i className="ki-duotone ki-arrow-up fs-5 text-success ms-n1">
                                          <span className="path1" />
                                          <span className="path2" />
                                        </i>
                                        9.2%
                                      </span>
                                      {/*end::Label*/}
                                    </td>
                                    <td className="text-end pe-12">
                                      <span className="badge py-3 px-4 fs-7 badge-light-success">
                                        Complated
                                      </span>
                                    </td>
                                    <td className="text-end pe-0">
                                      <div
                                        id="kt_table_widget_14_chart_4"
                                        className="h-50px mt-n8 pe-7"
                                        data-kt-chart-color="success"
                                        style={{ minHeight: 50 }}
                                      >
                                        <div
                                          id="apexchartsbzq7s5in"
                                          className="apexcharts-canvas apexchartsbzq7s5in apexcharts-theme-light"
                                          style={{ width: "92.25px", height: 50 }}
                                        >
                                          <svg
                                            id="SvgjsSvg1463"
                                            width="92.25"
                                            height={50}
                                            xmlns="http://www.w3.org/2000/svg"
                                            version="1.1"
                                            xmlnsXlink="http://www.w3.org/1999/xlink"
                                            
                                            className="apexcharts-svg"
                                            
                                            transform="translate(0, 0)"
                                            style={{ background: "transparent" }}
                                          >
                                            <foreignObject
                                              x={0}
                                              y={0}
                                              width="92.25"
                                              height={50}
                                            >
                                              <div
                                                className="apexcharts-legend"
                                                xmlns="http://www.w3.org/1999/xhtml"
                                                style={{ maxHeight: 25 }}
                                              />
                                            </foreignObject>
                                            <g
                                              id="SvgjsG1502"
                                              className="apexcharts-yaxis"
                                              rel={0}
                                              transform="translate(-18, 0)"
                                            />
                                            <g
                                              id="SvgjsG1465"
                                              className="apexcharts-inner apexcharts-graphical"
                                              transform="translate(0, 1)"
                                            >
                                              <defs id="SvgjsDefs1464">
                                                <clipPath id="gridRectMaskbzq7s5in">
                                                  <rect
                                                    id="SvgjsRect1468"
                                                    width="98.25"
                                                    height={54}
                                                    x={-3}
                                                    y={-3}
                                                    rx={0}
                                                    ry={0}
                                                    opacity={1}
                                                    strokeWidth={0}
                                                    stroke="none"
                                                    strokeDasharray={0}
                                                    fill="#fff"
                                                  />
                                                </clipPath>
                                                <clipPath id="forecastMaskbzq7s5in" />
                                                <clipPath id="nonForecastMaskbzq7s5in" />
                                                <clipPath id="gridRectMarkerMaskbzq7s5in">
                                                  <rect
                                                    id="SvgjsRect1469"
                                                    width="96.25"
                                                    height={52}
                                                    x={-2}
                                                    y={-2}
                                                    rx={0}
                                                    ry={0}
                                                    opacity={1}
                                                    strokeWidth={0}
                                                    stroke="none"
                                                    strokeDasharray={0}
                                                    fill="#fff"
                                                  />
                                                </clipPath>
                                              </defs>
                                              <g
                                                id="SvgjsG1476"
                                                className="apexcharts-grid"
                                              >
                                                <g
                                                  id="SvgjsG1477"
                                                  className="apexcharts-gridlines-horizontal"
                                                  style={{ display: "none" }}
                                                >
                                                  <line
                                                    id="SvgjsLine1480"
                                                    x1={0}
                                                    y1={0}
                                                    x2="92.25"
                                                    y2={0}
                                                    stroke="#e0e0e0"
                                                    strokeDasharray={0}
                                                    strokeLinecap="butt"
                                                    className="apexcharts-gridline"
                                                  />
                                                  <line
                                                    id="SvgjsLine1481"
                                                    x1={0}
                                                    y1={48}
                                                    x2="92.25"
                                                    y2={48}
                                                    stroke="#e0e0e0"
                                                    strokeDasharray={0}
                                                    strokeLinecap="butt"
                                                    className="apexcharts-gridline"
                                                  />
                                                </g>
                                                <g
                                                  id="SvgjsG1478"
                                                  className="apexcharts-gridlines-vertical"
                                                  style={{ display: "none" }}
                                                />
                                                <line
                                                  id="SvgjsLine1483"
                                                  x1={0}
                                                  y1={48}
                                                  x2="92.25"
                                                  y2={48}
                                                  stroke="transparent"
                                                  strokeDasharray={0}
                                                  strokeLinecap="butt"
                                                />
                                                <line
                                                  id="SvgjsLine1482"
                                                  x1={0}
                                                  y1={1}
                                                  x2={0}
                                                  y2={48}
                                                  stroke="transparent"
                                                  strokeDasharray={0}
                                                  strokeLinecap="butt"
                                                />
                                              </g>
                                              <g
                                                id="SvgjsG1479"
                                                className="apexcharts-grid-borders"
                                                style={{ display: "none" }}
                                              />
                                              <g
                                                id="SvgjsG1470"
                                                className="apexcharts-area-series apexcharts-plot-series"
                                              >
                                                <g
                                                  id="SvgjsG1471"
                                                  className="apexcharts-series"
                                                  zindex={0}
                                                  seriesname="NetxProfit"
                                                  
                                                  rel={1}
                                                  
                                                >
                                                  <path
                                                    id="SvgjsPath1474"
                                                    d="M 0 28.8C 2.483653846153846 28.8 4.612500000000001 45.6 7.096153846153847 45.6C 9.579807692307693 45.6 11.708653846153847 44 14.192307692307693 44C 16.67596153846154 44 18.804807692307694 32.8 21.28846153846154 32.8C 23.772115384615386 32.8 25.90096153846154 45.6 28.384615384615387 45.6C 30.868269230769233 45.6 32.997115384615384 42.4 35.48076923076923 42.4C 37.96442307692308 42.4 40.09326923076924 28 42.57692307692308 28C 45.06057692307692 28 47.18942307692308 36.8 49.67307692307693 36.8C 52.156730769230776 36.8 54.28557692307693 44 56.769230769230774 44C 59.252884615384616 44 61.38173076923077 36.8 63.86538461538462 36.8C 66.34903846153847 36.8 68.47788461538462 46.4 70.96153846153847 46.4C 73.44519230769231 46.4 75.57403846153846 41.6 78.0576923076923 41.6C 80.54134615384615 41.6 82.67019230769232 44 85.15384615384616 44C 87.6375 44 89.76634615384616 34.4 92.25 34.4C 92.25 34.4 92.25 34.4 92.25 48 L 0 48z"
                                                    fill="rgba(255,255,255,1)"
                                                    fillOpacity={1}
                                                    strokeOpacity={1}
                                                    strokeLinecap="butt"
                                                    strokeWidth={0}
                                                    strokeDasharray={0}
                                                    className="apexcharts-area"
                                                    index={0}
                                                    clipPath="url(#gridRectMaskbzq7s5in)"
                                                    pathto="M 0 28.8C 2.483653846153846 28.8 4.612500000000001 45.6 7.096153846153847 45.6C 9.579807692307693 45.6 11.708653846153847 44 14.192307692307693 44C 16.67596153846154 44 18.804807692307694 32.8 21.28846153846154 32.8C 23.772115384615386 32.8 25.90096153846154 45.6 28.384615384615387 45.6C 30.868269230769233 45.6 32.997115384615384 42.4 35.48076923076923 42.4C 37.96442307692308 42.4 40.09326923076924 28 42.57692307692308 28C 45.06057692307692 28 47.18942307692308 36.8 49.67307692307693 36.8C 52.156730769230776 36.8 54.28557692307693 44 56.769230769230774 44C 59.252884615384616 44 61.38173076923077 36.8 63.86538461538462 36.8C 66.34903846153847 36.8 68.47788461538462 46.4 70.96153846153847 46.4C 73.44519230769231 46.4 75.57403846153846 41.6 78.0576923076923 41.6C 80.54134615384615 41.6 82.67019230769232 44 85.15384615384616 44C 87.6375 44 89.76634615384616 34.4 92.25 34.4C 92.25 34.4 92.25 34.4 92.25 48 L 0 48z"
                                                    pathfrom="M -1 48 L -1 48 L 7.096153846153847 48 L 14.192307692307693 48 L 21.28846153846154 48 L 28.384615384615387 48 L 35.48076923076923 48 L 42.57692307692308 48 L 49.67307692307693 48 L 56.769230769230774 48 L 63.86538461538462 48 L 70.96153846153847 48 L 78.0576923076923 48 L 85.15384615384616 48 L 92.25 48"
                                                  />
                                                  <path
                                                    id="SvgjsPath1475"
                                                    d="M 0 28.8C 2.483653846153846 28.8 4.612500000000001 45.6 7.096153846153847 45.6C 9.579807692307693 45.6 11.708653846153847 44 14.192307692307693 44C 16.67596153846154 44 18.804807692307694 32.8 21.28846153846154 32.8C 23.772115384615386 32.8 25.90096153846154 45.6 28.384615384615387 45.6C 30.868269230769233 45.6 32.997115384615384 42.4 35.48076923076923 42.4C 37.96442307692308 42.4 40.09326923076924 28 42.57692307692308 28C 45.06057692307692 28 47.18942307692308 36.8 49.67307692307693 36.8C 52.156730769230776 36.8 54.28557692307693 44 56.769230769230774 44C 59.252884615384616 44 61.38173076923077 36.8 63.86538461538462 36.8C 66.34903846153847 36.8 68.47788461538462 46.4 70.96153846153847 46.4C 73.44519230769231 46.4 75.57403846153846 41.6 78.0576923076923 41.6C 80.54134615384615 41.6 82.67019230769232 44 85.15384615384616 44C 87.6375 44 89.76634615384616 34.4 92.25 34.4M 92.25 34.4"
                                                    fill="none"
                                                    fillOpacity={1}
                                                    stroke="#75cc68"
                                                    strokeOpacity={1}
                                                    strokeLinecap="butt"
                                                    strokeWidth={2}
                                                    strokeDasharray={0}
                                                    className="apexcharts-area"
                                                    index={0}
                                                    clipPath="url(#gridRectMaskbzq7s5in)"
                                                    pathto="M 0 28.8C 2.483653846153846 28.8 4.612500000000001 45.6 7.096153846153847 45.6C 9.579807692307693 45.6 11.708653846153847 44 14.192307692307693 44C 16.67596153846154 44 18.804807692307694 32.8 21.28846153846154 32.8C 23.772115384615386 32.8 25.90096153846154 45.6 28.384615384615387 45.6C 30.868269230769233 45.6 32.997115384615384 42.4 35.48076923076923 42.4C 37.96442307692308 42.4 40.09326923076924 28 42.57692307692308 28C 45.06057692307692 28 47.18942307692308 36.8 49.67307692307693 36.8C 52.156730769230776 36.8 54.28557692307693 44 56.769230769230774 44C 59.252884615384616 44 61.38173076923077 36.8 63.86538461538462 36.8C 66.34903846153847 36.8 68.47788461538462 46.4 70.96153846153847 46.4C 73.44519230769231 46.4 75.57403846153846 41.6 78.0576923076923 41.6C 80.54134615384615 41.6 82.67019230769232 44 85.15384615384616 44C 87.6375 44 89.76634615384616 34.4 92.25 34.4M 92.25 34.4"
                                                    pathfrom="M -1 48 L -1 48 L 7.096153846153847 48 L 14.192307692307693 48 L 21.28846153846154 48 L 28.384615384615387 48 L 35.48076923076923 48 L 42.57692307692308 48 L 49.67307692307693 48 L 56.769230769230774 48 L 63.86538461538462 48 L 70.96153846153847 48 L 78.0576923076923 48 L 85.15384615384616 48 L 92.25 48"
                                                    fillRule="evenodd"
                                                  />
                                                  <g
                                                    id="SvgjsG1472"
                                                    className="apexcharts-series-markers-wrap apexcharts-hidden-element-shown"
                                                    
                                                  />
                                                </g>
                                                <g
                                                  id="SvgjsG1473"
                                                  className="apexcharts-datalabels"
                                                  
                                                />
                                              </g>
                                              <line
                                                id="SvgjsLine1484"
                                                x1={0}
                                                y1={0}
                                                x2="92.25"
                                                y2={0}
                                                stroke="#b6b6b6"
                                                strokeDasharray={0}
                                                strokeWidth={1}
                                                strokeLinecap="butt"
                                                className="apexcharts-ycrosshairs"
                                              />
                                              <line
                                                id="SvgjsLine1485"
                                                x1={0}
                                                y1={0}
                                                x2="92.25"
                                                y2={0}
                                                strokeDasharray={0}
                                                strokeWidth={0}
                                                strokeLinecap="butt"
                                                className="apexcharts-ycrosshairs-hidden"
                                              />
                                              <g
                                                id="SvgjsG1486"
                                                className="apexcharts-xaxis"
                                                transform="translate(0, 0)"
                                              >
                                                <g
                                                  id="SvgjsG1487"
                                                  className="apexcharts-xaxis-texts-g"
                                                  transform="translate(0, 4)"
                                                />
                                              </g>
                                              <g
                                                id="SvgjsG1503"
                                                className="apexcharts-yaxis-annotations"
                                              />
                                              <g
                                                id="SvgjsG1504"
                                                className="apexcharts-xaxis-annotations"
                                              />
                                              <g
                                                id="SvgjsG1505"
                                                className="apexcharts-point-annotations"
                                              />
                                            </g>
                                          </svg>
                                        </div>
                                      </div>
                                    </td>
                                    <td className="text-end">
                                      <a
                                        href="#"
                                        className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary w-30px h-30px"
                                      >
                                        <i className="ki-duotone ki-black-right fs-2 text-gray-500" />{" "}
                                      </a>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <div className="d-flex align-items-center">
                                        <div className="symbol symbol-50px me-3">
                                          <img
                                            src="assets/media/stock/600x600/img-48.jpg"
                                            className=""
                                            alt=""
                                          />
                                        </div>
                                        <div className="d-flex justify-content-start flex-column">
                                          <a
                                            href="#"
                                            className="text-gray-800 fw-bold text-hover-primary mb-1 fs-6"
                                          >
                                            9 Degree
                                          </a>
                                          <span className="text-gray-500 fw-semibold d-block fs-7">
                                            Savannah Nguyen
                                          </span>
                                        </div>
                                      </div>
                                    </td>
                                    <td className="text-end pe-0">
                                      <span className="text-gray-600 fw-bold fs-6">
                                        $183,300
                                      </span>
                                    </td>
                                    <td className="text-end pe-0">
                                      {/*begin::Label*/}
                                      <span className="badge badge-light-danger fs-base">
                                        <i className="ki-duotone ki-arrow-down fs-5 text-danger ms-n1">
                                          <span className="path1" />
                                          <span className="path2" />
                                        </i>
                                        0.4%
                                      </span>
                                      {/*end::Label*/}
                                    </td>
                                    <td className="text-end pe-12">
                                      <span className="badge py-3 px-4 fs-7 badge-light-primary">
                                        In Process
                                      </span>
                                    </td>
                                    <td className="text-end pe-0">
                                      <div
                                        id="kt_table_widget_14_chart_5"
                                        className="h-50px mt-n8 pe-7"
                                        data-kt-chart-color="danger"
                                        style={{ minHeight: 50 }}
                                      >
                                        <div
                                          id="apexcharts60peu1iy"
                                          className="apexcharts-canvas apexcharts60peu1iy apexcharts-theme-light"
                                          style={{ width: "92.25px", height: 50 }}
                                        >
                                          <svg
                                            id="SvgjsSvg1506"
                                            width="92.25"
                                            height={50}
                                            xmlns="http://www.w3.org/2000/svg"
                                            version="1.1"
                                            xmlnsXlink="http://www.w3.org/1999/xlink"
                                            
                                            className="apexcharts-svg"
                                            
                                            transform="translate(0, 0)"
                                            style={{ background: "transparent" }}
                                          >
                                            <foreignObject
                                              x={0}
                                              y={0}
                                              width="92.25"
                                              height={50}
                                            >
                                              <div
                                                className="apexcharts-legend"
                                                xmlns="http://www.w3.org/1999/xhtml"
                                                style={{ maxHeight: 25 }}
                                              />
                                            </foreignObject>
                                            <g
                                              id="SvgjsG1545"
                                              className="apexcharts-yaxis"
                                              rel={0}
                                              transform="translate(-18, 0)"
                                            />
                                            <g
                                              id="SvgjsG1508"
                                              className="apexcharts-inner apexcharts-graphical"
                                              transform="translate(0, 1)"
                                            >
                                              <defs id="SvgjsDefs1507">
                                                <clipPath id="gridRectMask60peu1iy">
                                                  <rect
                                                    id="SvgjsRect1511"
                                                    width="98.25"
                                                    height={54}
                                                    x={-3}
                                                    y={-3}
                                                    rx={0}
                                                    ry={0}
                                                    opacity={1}
                                                    strokeWidth={0}
                                                    stroke="none"
                                                    strokeDasharray={0}
                                                    fill="#fff"
                                                  />
                                                </clipPath>
                                                <clipPath id="forecastMask60peu1iy" />
                                                <clipPath id="nonForecastMask60peu1iy" />
                                                <clipPath id="gridRectMarkerMask60peu1iy">
                                                  <rect
                                                    id="SvgjsRect1512"
                                                    width="96.25"
                                                    height={52}
                                                    x={-2}
                                                    y={-2}
                                                    rx={0}
                                                    ry={0}
                                                    opacity={1}
                                                    strokeWidth={0}
                                                    stroke="none"
                                                    strokeDasharray={0}
                                                    fill="#fff"
                                                  />
                                                </clipPath>
                                              </defs>
                                              <g
                                                id="SvgjsG1519"
                                                className="apexcharts-grid"
                                              >
                                                <g
                                                  id="SvgjsG1520"
                                                  className="apexcharts-gridlines-horizontal"
                                                  style={{ display: "none" }}
                                                >
                                                  <line
                                                    id="SvgjsLine1523"
                                                    x1={0}
                                                    y1={0}
                                                    x2="92.25"
                                                    y2={0}
                                                    stroke="#e0e0e0"
                                                    strokeDasharray={0}
                                                    strokeLinecap="butt"
                                                    className="apexcharts-gridline"
                                                  />
                                                  <line
                                                    id="SvgjsLine1524"
                                                    x1={0}
                                                    y1={48}
                                                    x2="92.25"
                                                    y2={48}
                                                    stroke="#e0e0e0"
                                                    strokeDasharray={0}
                                                    strokeLinecap="butt"
                                                    className="apexcharts-gridline"
                                                  />
                                                </g>
                                                <g
                                                  id="SvgjsG1521"
                                                  className="apexcharts-gridlines-vertical"
                                                  style={{ display: "none" }}
                                                />
                                                <line
                                                  id="SvgjsLine1526"
                                                  x1={0}
                                                  y1={48}
                                                  x2="92.25"
                                                  y2={48}
                                                  stroke="transparent"
                                                  strokeDasharray={0}
                                                  strokeLinecap="butt"
                                                />
                                                <line
                                                  id="SvgjsLine1525"
                                                  x1={0}
                                                  y1={1}
                                                  x2={0}
                                                  y2={48}
                                                  stroke="transparent"
                                                  strokeDasharray={0}
                                                  strokeLinecap="butt"
                                                />
                                              </g>
                                              <g
                                                id="SvgjsG1522"
                                                className="apexcharts-grid-borders"
                                                style={{ display: "none" }}
                                              />
                                              <g
                                                id="SvgjsG1513"
                                                className="apexcharts-area-series apexcharts-plot-series"
                                              >
                                                <g
                                                  id="SvgjsG1514"
                                                  className="apexcharts-series"
                                                  zindex={0}
                                                  seriesname="NetxProfit"
                                                  
                                                  rel={1}
                                                  
                                                >
                                                  <path
                                                    id="SvgjsPath1517"
                                                    d="M 0 45.6C 2.483653846153846 45.6 4.612500000000001 29.6 7.096153846153847 29.6C 9.579807692307693 29.6 11.708653846153847 47.2 14.192307692307693 47.2C 16.67596153846154 47.2 18.804807692307694 32.8 21.28846153846154 32.8C 23.772115384615386 32.8 25.90096153846154 45.6 28.384615384615387 45.6C 30.868269230769233 45.6 32.997115384615384 34.4 35.48076923076923 34.4C 37.96442307692308 34.4 40.09326923076924 45.6 42.57692307692308 45.6C 45.06057692307692 45.6 47.18942307692308 40.8 49.67307692307693 40.8C 52.156730769230776 40.8 54.28557692307693 28 56.769230769230774 28C 59.252884615384616 28 61.38173076923077 44.8 63.86538461538462 44.8C 66.34903846153847 44.8 68.47788461538462 46.4 70.96153846153847 46.4C 73.44519230769231 46.4 75.57403846153846 33.6 78.0576923076923 33.6C 80.54134615384615 33.6 82.67019230769232 28 85.15384615384616 28C 87.6375 28 89.76634615384616 45.6 92.25 45.6C 92.25 45.6 92.25 45.6 92.25 48 L 0 48z"
                                                    fill="rgba(255,255,255,1)"
                                                    fillOpacity={1}
                                                    strokeOpacity={1}
                                                    strokeLinecap="butt"
                                                    strokeWidth={0}
                                                    strokeDasharray={0}
                                                    className="apexcharts-area"
                                                    index={0}
                                                    clipPath="url(#gridRectMask60peu1iy)"
                                                    pathto="M 0 45.6C 2.483653846153846 45.6 4.612500000000001 29.6 7.096153846153847 29.6C 9.579807692307693 29.6 11.708653846153847 47.2 14.192307692307693 47.2C 16.67596153846154 47.2 18.804807692307694 32.8 21.28846153846154 32.8C 23.772115384615386 32.8 25.90096153846154 45.6 28.384615384615387 45.6C 30.868269230769233 45.6 32.997115384615384 34.4 35.48076923076923 34.4C 37.96442307692308 34.4 40.09326923076924 45.6 42.57692307692308 45.6C 45.06057692307692 45.6 47.18942307692308 40.8 49.67307692307693 40.8C 52.156730769230776 40.8 54.28557692307693 28 56.769230769230774 28C 59.252884615384616 28 61.38173076923077 44.8 63.86538461538462 44.8C 66.34903846153847 44.8 68.47788461538462 46.4 70.96153846153847 46.4C 73.44519230769231 46.4 75.57403846153846 33.6 78.0576923076923 33.6C 80.54134615384615 33.6 82.67019230769232 28 85.15384615384616 28C 87.6375 28 89.76634615384616 45.6 92.25 45.6C 92.25 45.6 92.25 45.6 92.25 48 L 0 48z"
                                                    pathfrom="M -1 48 L -1 48 L 7.096153846153847 48 L 14.192307692307693 48 L 21.28846153846154 48 L 28.384615384615387 48 L 35.48076923076923 48 L 42.57692307692308 48 L 49.67307692307693 48 L 56.769230769230774 48 L 63.86538461538462 48 L 70.96153846153847 48 L 78.0576923076923 48 L 85.15384615384616 48 L 92.25 48"
                                                  />
                                                  <path
                                                    id="SvgjsPath1518"
                                                    d="M 0 45.6C 2.483653846153846 45.6 4.612500000000001 29.6 7.096153846153847 29.6C 9.579807692307693 29.6 11.708653846153847 47.2 14.192307692307693 47.2C 16.67596153846154 47.2 18.804807692307694 32.8 21.28846153846154 32.8C 23.772115384615386 32.8 25.90096153846154 45.6 28.384615384615387 45.6C 30.868269230769233 45.6 32.997115384615384 34.4 35.48076923076923 34.4C 37.96442307692308 34.4 40.09326923076924 45.6 42.57692307692308 45.6C 45.06057692307692 45.6 47.18942307692308 40.8 49.67307692307693 40.8C 52.156730769230776 40.8 54.28557692307693 28 56.769230769230774 28C 59.252884615384616 28 61.38173076923077 44.8 63.86538461538462 44.8C 66.34903846153847 44.8 68.47788461538462 46.4 70.96153846153847 46.4C 73.44519230769231 46.4 75.57403846153846 33.6 78.0576923076923 33.6C 80.54134615384615 33.6 82.67019230769232 28 85.15384615384616 28C 87.6375 28 89.76634615384616 45.6 92.25 45.6M 92.25 45.6"
                                                    fill="none"
                                                    fillOpacity={1}
                                                    stroke="#f14c41"
                                                    strokeOpacity={1}
                                                    strokeLinecap="butt"
                                                    strokeWidth={2}
                                                    strokeDasharray={0}
                                                    className="apexcharts-area"
                                                    index={0}
                                                    clipPath="url(#gridRectMask60peu1iy)"
                                                    pathto="M 0 45.6C 2.483653846153846 45.6 4.612500000000001 29.6 7.096153846153847 29.6C 9.579807692307693 29.6 11.708653846153847 47.2 14.192307692307693 47.2C 16.67596153846154 47.2 18.804807692307694 32.8 21.28846153846154 32.8C 23.772115384615386 32.8 25.90096153846154 45.6 28.384615384615387 45.6C 30.868269230769233 45.6 32.997115384615384 34.4 35.48076923076923 34.4C 37.96442307692308 34.4 40.09326923076924 45.6 42.57692307692308 45.6C 45.06057692307692 45.6 47.18942307692308 40.8 49.67307692307693 40.8C 52.156730769230776 40.8 54.28557692307693 28 56.769230769230774 28C 59.252884615384616 28 61.38173076923077 44.8 63.86538461538462 44.8C 66.34903846153847 44.8 68.47788461538462 46.4 70.96153846153847 46.4C 73.44519230769231 46.4 75.57403846153846 33.6 78.0576923076923 33.6C 80.54134615384615 33.6 82.67019230769232 28 85.15384615384616 28C 87.6375 28 89.76634615384616 45.6 92.25 45.6M 92.25 45.6"
                                                    pathfrom="M -1 48 L -1 48 L 7.096153846153847 48 L 14.192307692307693 48 L 21.28846153846154 48 L 28.384615384615387 48 L 35.48076923076923 48 L 42.57692307692308 48 L 49.67307692307693 48 L 56.769230769230774 48 L 63.86538461538462 48 L 70.96153846153847 48 L 78.0576923076923 48 L 85.15384615384616 48 L 92.25 48"
                                                    fillRule="evenodd"
                                                  />
                                                  <g
                                                    id="SvgjsG1515"
                                                    className="apexcharts-series-markers-wrap apexcharts-hidden-element-shown"
                                                    
                                                  />
                                                </g>
                                                <g
                                                  id="SvgjsG1516"
                                                  className="apexcharts-datalabels"
                                                  
                                                />
                                              </g>
                                              <line
                                                id="SvgjsLine1527"
                                                x1={0}
                                                y1={0}
                                                x2="92.25"
                                                y2={0}
                                                stroke="#b6b6b6"
                                                strokeDasharray={0}
                                                strokeWidth={1}
                                                strokeLinecap="butt"
                                                className="apexcharts-ycrosshairs"
                                              />
                                              <line
                                                id="SvgjsLine1528"
                                                x1={0}
                                                y1={0}
                                                x2="92.25"
                                                y2={0}
                                                strokeDasharray={0}
                                                strokeWidth={0}
                                                strokeLinecap="butt"
                                                className="apexcharts-ycrosshairs-hidden"
                                              />
                                              <g
                                                id="SvgjsG1529"
                                                className="apexcharts-xaxis"
                                                transform="translate(0, 0)"
                                              >
                                                <g
                                                  id="SvgjsG1530"
                                                  className="apexcharts-xaxis-texts-g"
                                                  transform="translate(0, 4)"
                                                />
                                              </g>
                                              <g
                                                id="SvgjsG1546"
                                                className="apexcharts-yaxis-annotations"
                                              />
                                              <g
                                                id="SvgjsG1547"
                                                className="apexcharts-xaxis-annotations"
                                              />
                                              <g
                                                id="SvgjsG1548"
                                                className="apexcharts-point-annotations"
                                              />
                                            </g>
                                          </svg>
                                        </div>
                                      </div>
                                    </td>
                                    <td className="text-end">
                                      <a
                                        href="#"
                                        className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary w-30px h-30px"
                                      >
                                        <i className="ki-duotone ki-black-right fs-2 text-gray-500" />{" "}
                                      </a>
                                    </td>
                                  </tr>
                                </tbody>
                                {/*end::Table body*/}
                              </table>
                            </div>
                            {/*end::Table*/}
                          </div>
                          {/*end: Card Body*/}
                        </div>
                        {/*end::Table widget 14*/}{" "}
                      </div>
                      {/*end::Col*/}
                    </div>
                    {/*end::Row*/}
                    {/*begin::Row*/}
                    <div className="row g-5 g-xl-10">
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
                                Have your tried <br /> new
                                <span className="fw-bolder"> Invoice Manager?</span>
                              </h1>
                              {/*end::Title*/}
                              {/*begin::Illustration*/}
                              <div className="py-10 text-center">
                                <img
                                  src="assets/media/svg/illustrations/easy/2.svg"
                                  className="theme-light-show w-200px"
                                  alt=""
                                />
                                <img
                                  src="assets/media/svg/illustrations/easy/2-dark.svg"
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
                                data-bs-target="#kt_modal_new_address"
                                data-bs-toggle="modal"
                              >
                                Try Now{" "}
                              </a>
                              {/*end::Link*/}
                              {/*begin::Link*/}
                              <a
                                className="btn btn-sm btn-light"
                                href="../apps/user-management/users/view.html"
                              >
                                Learn More{" "}
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
                      {/*begin::Col*/}
                      <div className="col-xl-8">
                        {/*begin::Timeline Widget 4*/}
                        <div className="card h-md-100">
                          {/*begin::Card header*/}
                          <div className="card-header position-relative py-0 border-bottom-1">
                            {/*begin::Card title*/}
                            <h3 className="card-title text-gray-800 fw-bold">
                              Active Tasks
                            </h3>
                            {/*end::Card title*/}
                            {/*begin::Tabs*/}
                            <ul
                              className="nav nav-stretch nav-pills nav-pills-custom d-flex mt-4"
                              role="tablist"
                            >
                              {/*begin::Nav item*/}
                              <li className="nav-item p-0 ms-0" role="presentation">
                                <a
                                  className="nav-link btn btn-color-gray-500 flex-center px-3 active"
                                  data-kt-timeline-widget-4="tab"
                                  data-bs-toggle="tab"
                                  href="#kt_timeline_widget_4_tab_day"
                                  aria-selected="true"
                                  role="tab"
                                >
                                  {/*begin::Title*/}
                                  <span className="nav-text fw-semibold fs-4 mb-3">
                                    Day
                                  </span>
                                  {/*end::Title*/}
                                  {/*begin::Bullet*/}
                                  <span className="bullet-custom position-absolute z-index-2 w-100 h-1px top-100 bottom-n100 bg-primary rounded" />
                                  {/*end::Bullet*/}
                                </a>
                              </li>
                              {/*end::Nav item*/}
                              {/*begin::Nav item*/}
                              <li className="nav-item p-0 ms-0" role="presentation">
                                <a
                                  className="nav-link btn btn-color-gray-500 flex-center px-3"
                                  data-kt-timeline-widget-4="tab"
                                  data-bs-toggle="tab"
                                  href="#kt_timeline_widget_4_tab_week"
                                  aria-selected="false"
                                  tabIndex={-1}
                                  role="tab"
                                >
                                  {/*begin::Title*/}
                                  <span className="nav-text fw-semibold fs-4 mb-3">
                                    Week
                                  </span>
                                  {/*end::Title*/}
                                  {/*begin::Bullet*/}
                                  <span className="bullet-custom position-absolute z-index-2 w-100 h-1px top-100 bottom-n100 bg-primary rounded" />
                                  {/*end::Bullet*/}
                                </a>
                              </li>
                              {/*end::Nav item*/}
                              {/*begin::Nav item*/}
                              <li className="nav-item p-0 ms-0" role="presentation">
                                <a
                                  className="nav-link btn btn-color-gray-500 flex-center px-3"
                                  data-kt-timeline-widget-4="tab"
                                  data-bs-toggle="tab"
                                  href="#kt_timeline_widget_4_tab_month"
                                  aria-selected="false"
                                  tabIndex={-1}
                                  role="tab"
                                >
                                  {/*begin::Title*/}
                                  <span className="nav-text fw-semibold fs-4 mb-3">
                                    Month
                                  </span>
                                  {/*end::Title*/}
                                  {/*begin::Bullet*/}
                                  <span className="bullet-custom position-absolute z-index-2 w-100 h-1px top-100 bottom-n100 bg-primary rounded" />
                                  {/*end::Bullet*/}
                                </a>
                              </li>
                              {/*end::Nav item*/}
                              {/*begin::Nav item*/}
                              <li className="nav-item p-0 ms-0" role="presentation">
                                <a
                                  className="nav-link btn btn-color-gray-500 flex-center px-3"
                                  data-kt-timeline-widget-4="tab"
                                  data-bs-toggle="tab"
                                  href="#kt_timeline_widget_4_tab_2022"
                                  aria-selected="false"
                                  tabIndex={-1}
                                  role="tab"
                                >
                                  {/*begin::Title*/}
                                  <span className="nav-text fw-semibold fs-4 mb-3">
                                    2022
                                  </span>
                                  {/*end::Title*/}
                                  {/*begin::Bullet*/}
                                  <span className="bullet-custom position-absolute z-index-2 w-100 h-1px top-100 bottom-n100 bg-primary rounded" />
                                  {/*end::Bullet*/}
                                </a>
                              </li>
                              {/*end::Nav item*/}
                            </ul>
                            {/*end::Tabs*/}
                          </div>
                          {/*end::Card header*/}
                          {/*begin::Card body*/}
                          <div className="card-body pb-0">
                            {/*begin::Tab content*/}
                            <div className="tab-content">
                              {/*begin::Tab pane*/}
                              <div
                                className="tab-pane active blockui"
                                id="kt_timeline_widget_4_tab_day"
                                role="tabpanel"
                                aria-labelledby="day-tab"
                                data-kt-timeline-widget-4-blockui="true"
                                style={{}}
                              >
                                <div className="table-responsive pb-10">
                                  {/*begin::Timeline*/}
                                  <div
                                    id="kt_timeline_widget_4_1"
                                    className="vis-timeline-custom h-350px min-w-700px"
                                    data-kt-timeline-widget-4-image-root="/keen/demo3/assets/media/"
                                    style={{ position: "relative" }}
                                  >
                                    <div
                                      className="vis-timeline vis-bottom vis-ltr"
                                      style={{
                                        touchAction: "pan-y",
                                        userSelect: "none",
                                        WebkitUserDrag: "none",
                                        WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                                        visibility: "visible",
                                        height: 354
                                      }}
                                    >
                                      <div
                                        className="vis-panel vis-background"
                                        style={{ height: 354, width: 768, left: 0, top: 0 }}
                                      />
                                      <div
                                        className="vis-panel vis-background vis-vertical"
                                        style={{
                                          height: 354,
                                          width: 669,
                                          left: 101,
                                          top: 0
                                        }}
                                      >
                                        <div
                                          className="vis-axis"
                                          style={{ top: 304, left: 0 }}
                                        >
                                          <div className="vis-group" />
                                          <div className="vis-group" />
                                          <div className="vis-group" />
                                          <div className="vis-group" />
                                        </div>
                                        <div className="vis-time-axis vis-background">
                                          <div
                                            className="vis-grid vis-vertical vis-minor  vis-today  vis-even"
                                            style={{
                                              width: "54.0833px",
                                              height: 330,
                                              transform: "translate(-45.7603px, -1px)"
                                            }}
                                          />
                                          <div
                                            className="vis-grid vis-vertical vis-minor  vis-today  vis-odd"
                                            style={{
                                              width: "54.0833px",
                                              height: 330,
                                              transform: "translate(8.32304px, -1px)"
                                            }}
                                          />
                                          <div
                                            className="vis-grid vis-vertical vis-minor  vis-today  vis-even"
                                            style={{
                                              width: "54.0833px",
                                              height: 330,
                                              transform: "translate(62.4064px, -1px)"
                                            }}
                                          />
                                          <div
                                            className="vis-grid vis-vertical vis-minor  vis-today  vis-odd"
                                            style={{
                                              width: "54.0833px",
                                              height: 330,
                                              transform: "translate(116.49px, -1px)"
                                            }}
                                          />
                                          <div
                                            className="vis-grid vis-vertical vis-minor  vis-today  vis-even"
                                            style={{
                                              width: "54.0833px",
                                              height: 330,
                                              transform: "translate(170.573px, -1px)"
                                            }}
                                          />
                                          <div
                                            className="vis-grid vis-vertical vis-minor  vis-today  vis-odd"
                                            style={{
                                              width: "54.0833px",
                                              height: 330,
                                              transform: "translate(224.656px, -1px)"
                                            }}
                                          />
                                          <div
                                            className="vis-grid vis-vertical vis-minor  vis-today  vis-even"
                                            style={{
                                              width: "54.0833px",
                                              height: 330,
                                              transform: "translate(278.74px, -1px)"
                                            }}
                                          />
                                          <div
                                            className="vis-grid vis-vertical vis-minor  vis-today  vis-odd"
                                            style={{
                                              width: "54.0833px",
                                              height: 330,
                                              transform: "translate(332.823px, -1px)"
                                            }}
                                          />
                                          <div
                                            className="vis-grid vis-vertical vis-minor  vis-today  vis-even"
                                            style={{
                                              width: "54.0833px",
                                              height: 330,
                                              transform: "translate(386.906px, -1px)"
                                            }}
                                          />
                                          <div
                                            className="vis-grid vis-vertical vis-minor  vis-today  vis-odd"
                                            style={{
                                              width: "54.0833px",
                                              height: 330,
                                              transform: "translate(440.99px, -1px)"
                                            }}
                                          />
                                          <div
                                            className="vis-grid vis-vertical vis-minor  vis-today  vis-even"
                                            style={{
                                              width: "54.0833px",
                                              height: 330,
                                              transform: "translate(495.073px, -1px)"
                                            }}
                                          />
                                          <div
                                            className="vis-grid vis-vertical vis-minor  vis-today  vis-odd"
                                            style={{
                                              width: "54.0833px",
                                              height: 330,
                                              transform: "translate(549.156px, -1px)"
                                            }}
                                          />
                                          <div
                                            className="vis-grid vis-vertical vis-minor  vis-today  vis-even"
                                            style={{
                                              width: "54.0833px",
                                              height: 330,
                                              transform: "translate(603.24px, -1px)"
                                            }}
                                          />
                                          <div
                                            className="vis-grid vis-vertical vis-minor  vis-today  vis-odd"
                                            style={{
                                              width: "54.0833px",
                                              height: 330,
                                              transform: "translate(657.323px, -1px)"
                                            }}
                                          />
                                        </div>
                                      </div>
                                      <div
                                        className="vis-panel vis-background vis-horizontal"
                                        style={{
                                          height: 305,
                                          width: 768,
                                          left: 0,
                                          top: "-1px"
                                        }}
                                      />
                                      <div
                                        className="vis-panel vis-center"
                                        style={{
                                          touchAction: "pan-y",
                                          userSelect: "none",
                                          WebkitUserDrag: "none",
                                          WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                                          height: 305,
                                          width: 669,
                                          left: 100,
                                          top: "-1px"
                                        }}
                                      >
                                        <div
                                          className="vis-content"
                                          style={{ left: 0, transform: "translateY(0px)" }}
                                        >
                                          <div
                                            className="vis-itemset"
                                            style={{ height: 303 }}
                                          >
                                            <div className="vis-background">
                                              <div
                                                className="vis-group"
                                                style={{ height: 0 }}
                                              >
                                                <div
                                                  style={{
                                                    visibility: "hidden",
                                                    position: "absolute"
                                                  }}
                                                />
                                              </div>
                                              <div
                                                className="vis-group"
                                                style={{ height: 75 }}
                                              >
                                                <div
                                                  style={{
                                                    visibility: "hidden",
                                                    position: "absolute"
                                                  }}
                                                />
                                              </div>
                                              <div
                                                className="vis-group"
                                                style={{ height: 75 }}
                                              >
                                                <div
                                                  style={{
                                                    visibility: "hidden",
                                                    position: "absolute"
                                                  }}
                                                />
                                              </div>
                                              <div
                                                className="vis-group"
                                                style={{ height: 75 }}
                                              >
                                                <div
                                                  style={{
                                                    visibility: "hidden",
                                                    position: "absolute"
                                                  }}
                                                />
                                              </div>
                                              <div
                                                className="vis-group"
                                                style={{ height: 78 }}
                                              >
                                                <div
                                                  style={{
                                                    visibility: "hidden",
                                                    position: "absolute"
                                                  }}
                                                />
                                              </div>
                                            </div>
                                            <div className="vis-foreground">
                                              <div
                                                className="vis-group"
                                                style={{ height: 75 }}
                                              >
                                                <div
                                                  className="vis-item vis-range vis-readonly"
                                                  style={{
                                                    transform: "translateX(10px)",
                                                    width: "324.5px",
                                                    top: "17.5px"
                                                  }}
                                                >
                                                  <div className="vis-item-overflow">
                                                    <div
                                                      className="vis-item-content"
                                                      style={{
                                                        transform: "translateX(0px)"
                                                      }}
                                                    >
                                                      <div className="rounded-pill bg-light-primary d-flex align-items-center position-relative h-40px w-100 p-2 overflow-hidden">
                                                        <div
                                                          className="position-absolute rounded-pill d-block bg-primary start-0 top-0 h-100 z-index-1"
                                                          style={{ width: "60%" }}
                                                        />
                                                        <div className="d-flex align-items-center position-relative z-index-2">
                                                          <div className="symbol-group symbol-hover flex-nowrap me-3">
                                                            <div className="symbol symbol-circle symbol-25px">
                                                              <img
                                                                alt=""
                                                                src="/keen/demo3/assets/media/avatars/300-6.jpg"
                                                              />
                                                            </div>
                                                            <div className="symbol symbol-circle symbol-25px">
                                                              <img
                                                                alt=""
                                                                src="/keen/demo3/assets/media/avatars/300-1.jpg"
                                                              />
                                                            </div>
                                                          </div>
                                                          <a
                                                            href="#"
                                                            className="fw-bold text-white text-hover-dark"
                                                          >
                                                            Meeting
                                                          </a>
                                                        </div>
                                                        <div className="d-flex flex-center bg-body rounded-pill fs-7 fw-bolder ms-auto h-100 px-3 position-relative z-index-2">
                                                          60%
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div className="vis-item-visible-frame" />
                                                </div>
                                              </div>
                                              <div
                                                className="vis-group"
                                                style={{ height: 75 }}
                                              >
                                                <div
                                                  className="vis-item vis-range vis-readonly"
                                                  style={{
                                                    transform: "translateX(226.333px)",
                                                    width: "216.333px",
                                                    top: "17.5px"
                                                  }}
                                                >
                                                  <div className="vis-item-overflow">
                                                    <div
                                                      className="vis-item-content"
                                                      style={{
                                                        transform: "translateX(0px)"
                                                      }}
                                                    >
                                                      <div className="rounded-pill bg-light-success d-flex align-items-center position-relative h-40px w-100 p-2 overflow-hidden">
                                                        <div
                                                          className="position-absolute rounded-pill d-block bg-success start-0 top-0 h-100 z-index-1"
                                                          style={{ width: "47%" }}
                                                        />
                                                        <div className="d-flex align-items-center position-relative z-index-2">
                                                          <div className="symbol-group symbol-hover flex-nowrap me-3">
                                                            <div className="symbol symbol-circle symbol-25px">
                                                              <img
                                                                alt=""
                                                                src="/keen/demo3/assets/media/avatars/300-2.jpg"
                                                              />
                                                            </div>
                                                          </div>
                                                          <a
                                                            href="#"
                                                            className="fw-bold text-white text-hover-dark"
                                                          >
                                                            Testing
                                                          </a>
                                                        </div>
                                                        <div className="d-flex flex-center bg-body rounded-pill fs-7 fw-bolder ms-auto h-100 px-3 position-relative z-index-2">
                                                          47%
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div className="vis-item-visible-frame" />
                                                </div>
                                              </div>
                                              <div
                                                className="vis-group"
                                                style={{ height: 75 }}
                                              >
                                                <div
                                                  className="vis-item vis-range vis-readonly"
                                                  style={{
                                                    transform: "translateX(118.167px)",
                                                    width: "432.667px",
                                                    top: "17.5px"
                                                  }}
                                                >
                                                  <div className="vis-item-overflow">
                                                    <div
                                                      className="vis-item-content"
                                                      style={{
                                                        transform: "translateX(0px)"
                                                      }}
                                                    >
                                                      <div className="rounded-pill bg-light-danger d-flex align-items-center position-relative h-40px w-100 p-2 overflow-hidden">
                                                        <div
                                                          className="position-absolute rounded-pill d-block bg-danger start-0 top-0 h-100 z-index-1"
                                                          style={{ width: "55%" }}
                                                        />
                                                        <div className="d-flex align-items-center position-relative z-index-2">
                                                          <div className="symbol-group symbol-hover flex-nowrap me-3">
                                                            <div className="symbol symbol-circle symbol-25px">
                                                              <img
                                                                alt=""
                                                                src="/keen/demo3/assets/media/avatars/300-5.jpg"
                                                              />
                                                            </div>
                                                            <div className="symbol symbol-circle symbol-25px">
                                                              <img
                                                                alt=""
                                                                src="/keen/demo3/assets/media/avatars/300-20.jpg"
                                                              />
                                                            </div>
                                                          </div>
                                                          <a
                                                            href="#"
                                                            className="fw-bold text-white text-hover-dark"
                                                          >
                                                            Landing page
                                                          </a>
                                                        </div>
                                                        <div className="d-flex flex-center bg-body rounded-pill fs-7 fw-bolder ms-auto h-100 px-3 position-relative z-index-2">
                                                          55%
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div className="vis-item-visible-frame" />
                                                </div>
                                              </div>
                                              <div
                                                className="vis-group"
                                                style={{ height: 78 }}
                                              >
                                                <div
                                                  className="vis-item vis-range vis-readonly"
                                                  style={{
                                                    transform: "translateX(334.5px)",
                                                    width: "324.5px",
                                                    top: 18
                                                  }}
                                                >
                                                  <div className="vis-item-overflow">
                                                    <div
                                                      className="vis-item-content"
                                                      style={{
                                                        transform: "translateX(0px)"
                                                      }}
                                                    >
                                                      <div className="rounded-pill bg-light-info d-flex align-items-center position-relative h-40px w-100 p-2 overflow-hidden">
                                                        <div
                                                          className="position-absolute rounded-pill d-block bg-info start-0 top-0 h-100 z-index-1"
                                                          style={{ width: "75%" }}
                                                        />
                                                        <div className="d-flex align-items-center position-relative z-index-2">
                                                          <div className="symbol-group symbol-hover flex-nowrap me-3">
                                                            <div className="symbol symbol-circle symbol-25px">
                                                              <img
                                                                alt=""
                                                                src="/keen/demo3/assets/media/avatars/300-23.jpg"
                                                              />
                                                            </div>
                                                            <div className="symbol symbol-circle symbol-25px">
                                                              <img
                                                                alt=""
                                                                src="/keen/demo3/assets/media/avatars/300-12.jpg"
                                                              />
                                                            </div>
                                                            <div className="symbol symbol-circle symbol-25px">
                                                              <img
                                                                alt=""
                                                                src="/keen/demo3/assets/media/avatars/300-9.jpg"
                                                              />
                                                            </div>
                                                          </div>
                                                          <a
                                                            href="#"
                                                            className="fw-bold text-white text-hover-dark"
                                                          >
                                                            Products module
                                                          </a>
                                                        </div>
                                                        <div className="d-flex flex-center bg-body rounded-pill fs-7 fw-bolder ms-auto h-100 px-3 position-relative z-index-2">
                                                          75%
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div className="vis-item-visible-frame" />
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div
                                          className="vis-shadow vis-top"
                                          style={{ visibility: "hidden" }}
                                        />
                                        <div
                                          className="vis-shadow vis-bottom"
                                          style={{ visibility: "hidden" }}
                                        />
                                      </div>
                                      <div
                                        className="vis-panel vis-left"
                                        style={{
                                          touchAction: "none",
                                          userSelect: "none",
                                          WebkitUserDrag: "none",
                                          WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
                                          height: 305,
                                          left: 0,
                                          top: "-1px"
                                        }}
                                      >
                                        <div
                                          className="vis-content"
                                          style={{ left: 0, top: 0 }}
                                        >
                                          <div className="vis-labelset">
                                            <div
                                              className="vis-label vis-group-level-0"
                                              title=""
                                              style={{ height: 75 }}
                                            >
                                              <div className="vis-inner">Research</div>
                                            </div>
                                            <div
                                              className="vis-label vis-group-level-0"
                                              title=""
                                              style={{ height: 75 }}
                                            >
                                              <div className="vis-inner">Phase 2.6 QA</div>
                                            </div>
                                            <div
                                              className="vis-label vis-group-level-0"
                                              title=""
                                              style={{ height: 75 }}
                                            >
                                              <div className="vis-inner">UI Design</div>
                                            </div>
                                            <div
                                              className="vis-label vis-group-level-0"
                                              title=""
                                              style={{ height: 78 }}
                                            >
                                              <div className="vis-inner">Development</div>
                                            </div>
                                          </div>
                                        </div>
                                        <div
                                          className="vis-shadow vis-top"
                                          style={{ visibility: "hidden" }}
                                        />
                                        <div
                                          className="vis-shadow vis-bottom"
                                          style={{ visibility: "hidden" }}
                                        />
                                      </div>
                                      <div
                                        className="vis-panel vis-right"
                                        style={{ height: 305, left: 769, top: "-1px" }}
                                      >
                                        <div
                                          className="vis-content"
                                          style={{ left: 0, top: 0 }}
                                        />
                                        <div
                                          className="vis-shadow vis-top"
                                          style={{ visibility: "hidden" }}
                                        />
                                        <div
                                          className="vis-shadow vis-bottom"
                                          style={{ visibility: "hidden" }}
                                        />
                                      </div>
                                      <div
                                        className="vis-panel vis-top"
                                        style={{ width: 669, left: 100, top: 0 }}
                                      />
                                      <div
                                        className="vis-panel vis-bottom"
                                        style={{ width: 669, left: 100, top: 304 }}
                                      >
                                        <div
                                          className="vis-time-axis vis-foreground"
                                          style={{ height: 50 }}
                                        >
                                          <div
                                            className="vis-text vis-minor vis-measure"
                                            style={{ position: "absolute" }}
                                          >
                                            0
                                          </div>
                                          <div
                                            className="vis-text vis-major vis-measure"
                                            style={{ position: "absolute" }}
                                          >
                                            0
                                          </div>
                                          <div
                                            className="vis-text vis-minor  vis-today  vis-even"
                                            style={{
                                              transform: "translate(-45.2603px, 0px)",
                                              width: "54.0833px"
                                            }}
                                          >
                                            17:00
                                          </div>
                                          <div
                                            className="vis-text vis-minor  vis-today  vis-odd"
                                            style={{
                                              transform: "translate(8.82304px, 0px)",
                                              width: "54.0833px"
                                            }}
                                          >
                                            17:15
                                          </div>
                                          <div
                                            className="vis-text vis-minor  vis-today  vis-even"
                                            style={{
                                              transform: "translate(62.9064px, 0px)",
                                              width: "54.0833px"
                                            }}
                                          >
                                            17:30
                                          </div>
                                          <div
                                            className="vis-text vis-minor  vis-today  vis-odd"
                                            style={{
                                              transform: "translate(116.99px, 0px)",
                                              width: "54.0833px"
                                            }}
                                          >
                                            17:45
                                          </div>
                                          <div
                                            className="vis-text vis-major  vis-today  vis-odd"
                                            style={{ transform: "translate(0px, 25px)" }}
                                          >
                                            <div>lun. 1 juillet</div>
                                          </div>
                                          <div
                                            className="vis-text vis-minor  vis-today  vis-even"
                                            style={{
                                              transform: "translate(171.073px, 0px)",
                                              width: "54.0833px"
                                            }}
                                          >
                                            18:00
                                          </div>
                                          <div
                                            className="vis-text vis-minor  vis-today  vis-odd"
                                            style={{
                                              transform: "translate(225.156px, 0px)",
                                              width: "54.0833px"
                                            }}
                                          >
                                            18:15
                                          </div>
                                          <div
                                            className="vis-text vis-minor  vis-today  vis-even"
                                            style={{
                                              transform: "translate(279.24px, 0px)",
                                              width: "54.0833px"
                                            }}
                                          >
                                            18:30
                                          </div>
                                          <div
                                            className="vis-text vis-minor  vis-today  vis-odd"
                                            style={{
                                              transform: "translate(333.323px, 0px)",
                                              width: "54.0833px"
                                            }}
                                          >
                                            18:45
                                          </div>
                                          <div
                                            className="vis-text vis-minor  vis-today  vis-even"
                                            style={{
                                              transform: "translate(387.406px, 0px)",
                                              width: "54.0833px"
                                            }}
                                          >
                                            19:00
                                          </div>
                                          <div
                                            className="vis-text vis-minor  vis-today  vis-odd"
                                            style={{
                                              transform: "translate(441.49px, 0px)",
                                              width: "54.0833px"
                                            }}
                                          >
                                            19:15
                                          </div>
                                          <div
                                            className="vis-text vis-minor  vis-today  vis-even"
                                            style={{
                                              transform: "translate(495.573px, 0px)",
                                              width: "54.0833px"
                                            }}
                                          >
                                            19:30
                                          </div>
                                          <div
                                            className="vis-text vis-minor  vis-today  vis-odd"
                                            style={{
                                              transform: "translate(549.656px, 0px)",
                                              width: "54.0833px"
                                            }}
                                          >
                                            19:45
                                          </div>
                                          <div
                                            className="vis-text vis-minor  vis-today  vis-even"
                                            style={{
                                              transform: "translate(603.74px, 0px)",
                                              width: "54.0833px"
                                            }}
                                          >
                                            20:00
                                          </div>
                                          <div
                                            className="vis-text vis-minor  vis-today  vis-odd"
                                            style={{
                                              transform: "translate(657.823px, 0px)",
                                              width: "54.0833px"
                                            }}
                                          >
                                            20:15
                                          </div>
                                        </div>
                                      </div>
                                      <div
                                        className="vis-rolling-mode-btn"
                                        style={{ visibility: "hidden" }}
                                      />
                                    </div>
                                  </div>
                                  {/*end::Timeline*/}
                                </div>
                              </div>
                              {/*end::Tab pane*/}
                              {/*begin::Tab pane*/}
                              <div
                                className="tab-pane blockui"
                                id="kt_timeline_widget_4_tab_week"
                                role="tabpanel"
                                aria-labelledby="week-tab"
                                data-kt-timeline-widget-4-blockui="true"
                                style={{ overflow: "hidden" }}
                              >
                                <div className="table-responsive pb-10">
                                  {/*begin::Timeline*/}
                                  <div
                                    id="kt_timeline_widget_4_2"
                                    className="vis-timeline-custom h-350px min-w-700px"
                                    data-kt-timeline-widget-4-image-root="/keen/demo3/assets/media/"
                                  />
                                  {/*end::Timeline*/}
                                </div>
                                <div
                                  className="blockui-overlay bg-body"
                                  style={{ zIndex: 1 }}
                                >
                                  <span className="spinner-border text-primary" />
                                </div>
                              </div>
                              {/*end::Tab pane*/}
                              {/*begin::Tab pane*/}
                              <div
                                className="tab-pane blockui"
                                id="kt_timeline_widget_4_tab_month"
                                role="tabpanel"
                                aria-labelledby="month-tab"
                                data-kt-timeline-widget-4-blockui="true"
                                style={{ overflow: "hidden" }}
                              >
                                <div className="table-responsive pb-10">
                                  {/*begin::Timeline*/}
                                  <div
                                    id="kt_timeline_widget_4_3"
                                    className="vis-timeline-custom h-350px min-w-700px"
                                    data-kt-timeline-widget-4-image-root="/keen/demo3/assets/media/"
                                  />
                                  {/*end::Timeline*/}
                                </div>
                                <div
                                  className="blockui-overlay bg-body"
                                  style={{ zIndex: 1 }}
                                >
                                  <span className="spinner-border text-primary" />
                                </div>
                              </div>
                              {/*end::Tab pane*/}
                              {/*begin::Tab pane*/}
                              <div
                                className="tab-pane blockui"
                                id="kt_timeline_widget_4_tab_2022"
                                role="tabpanel"
                                aria-labelledby="week-tab"
                                data-kt-timeline-widget-4-blockui="true"
                                style={{ overflow: "hidden" }}
                              >
                                <div className="table-responsive pb-10">
                                  {/*begin::Timeline*/}
                                  <div
                                    id="kt_timeline_widget_4_4"
                                    className="vis-timeline-custom h-350px min-w-700px"
                                    data-kt-timeline-widget-4-image-root="/keen/demo3/assets/media/"
                                  />
                                  {/*end::Timeline*/}
                                </div>
                                <div
                                  className="blockui-overlay bg-body"
                                  style={{ zIndex: 1 }}
                                >
                                  <span className="spinner-border text-primary" />
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
                    </div>
                    {/*end::Row*/}
                  </div>
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
    </>
  );
};

export default TableauDeBord;
