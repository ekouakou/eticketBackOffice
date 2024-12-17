import React from 'react';
import Menu from '../dashboard/SidebarMenu';
import AppHeader from '../dashboard/AppHeader';
// import AddNewAddressForm from './AddBannerForm';
import FormBanner from './FormBanner';
// import AddBannerForm from './AddBannerForm';

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

const SaveBanner = () => {
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
              <Menu menuItems={menuItems} />
            </div>
            <FormBanner />
          </div>
        </div>
      </div>
    </>
  );
};

export default SaveBanner;
