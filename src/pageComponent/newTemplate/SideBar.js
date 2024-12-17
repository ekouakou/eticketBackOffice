import React, { useState } from 'react';
import  './style.css';

const SignIn = () => {
  const [openSubMenuIndex, setOpenSubMenuIndex] = useState(null);

  const handleSubMenuClick = (index) => {
    setOpenSubMenuIndex(openSubMenuIndex === index ? null : index);
  };

  const menuItems = [
    { name: 'Dashboard', icon: 'bi-columns-gap', link: 'investment-dashboard.html' },
    { name: 'Wallet', icon: 'bi-wallet', link: 'investment-wallet.html' },
    { name: 'My Goals', icon: 'bi-bullseye', link: 'investment-goals.html' },
    {
      name: 'Investment',
      icon: 'bi-piggy-bank',
      subMenu: [
        { name: 'Company Share', icon: 'bi-bank', link: 'investment-company-shares.html' },
        { name: 'Mutual Fund', icon: 'bi-cash-coin', link: 'investment-mutual-funds.html' },
        { name: 'Deposit', icon: 'bi-percent', link: 'investment-deposit.html' },
      ],
    },
    { name: 'Explore', icon: 'bi-search', link: 'investment-explore.html' },
    { name: 'Statistics', icon: 'bi-bar-chart-line', link: 'investment-statistics.html' },
    { name: 'Calculators', icon: 'bi-calculator', link: 'investment-calculator.html' },
    { name: 'Pages', icon: 'bi-layers', link: 'investment-pages.html', badge: '40+' },
    { name: 'Personalize ❤️', icon: 'bi-palette', link: 'investment-personalization.html' },
    { name: 'Components', icon: 'bi-cpu', link: 'components.html' },
  ];

  return (
    <div className="adminuiux-sidebar">
      <div className="adminuiux-sidebar-inner">
        <ul className="nav flex-column menu-active-line">
          {menuItems.map((item, index) => (
            <li
              className={`nav-item ${item.subMenu ? 'dropdown' : ''}`}
              key={index}
            >
              {item.subMenu ? (
                <>
                  <a
                    href="#!"
                    className={`nav-link dropdown-toggle ${openSubMenuIndex === index ? 'active' : ''}`}
                    onClick={() => handleSubMenuClick(index)}
                  >
                    <i className={`menu-icon bi ${item.icon}`} />{" "}
                    <span className="menu-name">{item.name}</span>
                    <span className="submenu-indicator">{openSubMenuIndex === index ? '▾' : '▸'}</span>
                  </a>
                  {openSubMenuIndex === index && (
                    <ul className="submenu">
                      {item.subMenu.map((subItem, subIndex) => (
                        <li key={subIndex} className="nav-item">
                          <a href={subItem.link} className="nav-link">
                            <i className={`menu-icon bi ${subItem.icon}`} />{" "}
                            <span className="menu-name">{subItem.name}</span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              ) : (
                <a href={item.link} className="nav-link">
                  <i className={`menu-icon bi ${item.icon}`} />{" "}
                  <span className="menu-name">{item.name}</span>
                  {item.badge && <span className="badge text-bg-primary mx-2">{item.badge}</span>}
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SignIn;
