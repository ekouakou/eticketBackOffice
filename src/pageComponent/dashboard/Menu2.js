
import React, { useState } from 'react';

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

  const SidebarMenu = () => {
    const [activeMenus, setActiveMenus] = useState({});
  
    const toggleSubMenu = (index) => {
      setActiveMenus(prevState => ({
        ...prevState,
        [index]: !prevState[index]
      }));
    };
  
    const toggleSubSubMenus = (parentIndex, subIndex) => {
      setActiveMenus(prevState => ({
        ...prevState,
        [parentIndex]: {
          ...prevState[parentIndex],
          [subIndex]: !prevState[parentIndex][subIndex]
        }
      }));
    };
  
    return (
      <div className="app-sidebar-menu app-sidebar-menu-arrow overflow-hidden flex-column-fluid mb-5" id="kt_app_sidebar_menu">
        <div id="kt_app_sidebar_menu_wrapper" className="app-sidebar-wrapper hover-scroll-y my-5 mx-3" data-kt-scroll="true" data-kt-scroll-activate="true" data-kt-scroll-height="auto" data-kt-scroll-dependencies="#kt_app_sidebar_logo, #kt_app_sidebar_footer" data-kt-scroll-wrappers="#kt_app_sidebar_menu" data-kt-scroll-offset="5px" style={{ height: '594px' }}>
          <div className="menu menu-column menu-rounded menu-sub-indention menu-active-bg" id="#kt_app_sidebar_menu" data-kt-menu="true" data-kt-menu-expand="false">
            {menuItems.map((item, index) => (
              <div key={index} data-kt-menu-trigger="click" className={`menu-item menu-accordion ${activeMenus[index] ? 'hover show' : ''}`} onClick={() => toggleSubMenu(index)}>
                <span className="menu-link">
                  <span className="menu-icon"><i className={item.icon} /></span>
                  <span className="menu-title">{item.title}</span>
                </span>
                {item.subItems && (
                  <div className={`menu-sub menu-sub-accordion ${activeMenus[index] ? 'show' : ''}`}>
                    {item.subItems.map((subItem, subIndex) => (
                      <div key={subIndex} data-kt-menu-trigger="click" className={`menu-item menu-accordion ${subItem.subItems ? 'menu-sub-accordion' : ''}`}>
                        <span className="menu-link" onClick={(e) => {
                          e.stopPropagation(); // Stop event bubbling to prevent toggling parent accordion
                          toggleSubSubMenus(index, subIndex);
                        }}>
                          <span className="menu-bullet"><span className="bullet bullet-dot" /></span>
                          <span className="menu-title">{subItem.title}</span>
                          {subItem.subItems && <span className="menu-arrow" />}
                        </span>
                        {subItem.href && <a className="menu-link" href={subItem.href}><span className="menu-title">{subItem.title}</span></a>}
                        {subItem.subItems && (
                          <div className={`menu-sub menu-sub-accordion ${activeMenus[index] && activeMenus[index][subIndex] ? 'show' : ''}`}>
                            {subItem.subItems.map((nestedSubItem, nestedSubIndex) => (
                              <div key={nestedSubIndex} className="menu-item">
                                <a className="menu-link" href={nestedSubItem.href}>
                                  <span className="menu-bullet"><span className="bullet bullet-dot" /></span>
                                  <span className="menu-title">{nestedSubItem.title}</span>
                                </a>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default SidebarMenu;
  

