import React, { useState, useEffect } from 'react';
import { Menu } from 'antd';
import './SidebarMenu.css';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt, faList, faCalendarAlt, faFileAlt, faUser, faEllipsisH } from '@fortawesome/free-solid-svg-icons';

const { SubMenu } = Menu;

// Mappez les noms de classe aux icônes FontAwesome
const iconMapping = {
  faTachometerAlt: faTachometerAlt,
  faList: faList,
  faCalendarAlt: faCalendarAlt,
  faFileAlt: faFileAlt,
  faUser: faUser,
  faEllipsisH: faEllipsisH,
};

const SidebarMenu = () => {
  const [openKeys, setOpenKeys] = useState([]);
  const location = useLocation();

  const userConnectedData = JSON.parse(localStorage.getItem('userConnectedData'));
  const menu = userConnectedData?.groupmenu[0]?.menu || [];

  useEffect(() => {
    const path = location.pathname;
    menu.forEach(item => {
      const activeSubMenu = item.sousmenu.some(subItem => subItem.str_url === path);
      if (activeSubMenu) {
        setOpenKeys([item.str_name]);
      }
    });
  }, [location, menu]);

  const handleOpenChange = (keys) => {
    const latestKey = keys.find(key => openKeys.indexOf(key) === -1);
    setOpenKeys(latestKey ? [latestKey] : []);
  };

  const renderSubMenu = (subItems) => {
    return subItems.map((item) => (
      <Menu.Item key={item.str_name} icon={<FontAwesomeIcon icon={iconMapping[item.str_class]} />}>
        <Link to={item.str_url}>{item.str_name}</Link>
      </Menu.Item>
    ));
  };

  return (
    <Menu
      mode="inline"
      openKeys={openKeys}
      onOpenChange={handleOpenChange}
      className='px-5'
    >
      {menu.map((subMenu) => (
        subMenu.sousmenu.length > 0 ? (
          <SubMenu
            key={subMenu.str_name}
            title={
              <span>
                <FontAwesomeIcon icon={iconMapping[subMenu.str_class]} className='me-4' />
                <span>{subMenu.str_name}</span>
              </span>
            }
          >
            {renderSubMenu(subMenu.sousmenu)}
          </SubMenu>
        ) : (
          <Menu.Item key={subMenu.str_name} icon={<FontAwesomeIcon className='me-4' icon={iconMapping[subMenu.str_class]} />}>
            <Link to={subMenu.str_url}>{subMenu.str_name}</Link>
          </Menu.Item>
        )
      ))}
    </Menu>
  );
};

export default SidebarMenu;
