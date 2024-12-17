import React, { useState, useRef, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { doDisConnexion } from '../../services/apiService';

const DropdownMenu = () => {
  const paths = JSON.parse(localStorage.getItem("appPaths"));
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(null);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  const handleLogout = async () => {
    try {
      const params = new URLSearchParams();
      params.append('mode', 'doDisConnexion');
      params.append('STR_UTITOKEN', user?.UTITOKEN);

      await doDisConnexion(params);
      localStorage.removeItem('user');
      setUser(null);
      navigate(paths.signIn); // Rediriger vers la page d'accueil ou la page de connexion
    } catch (error) {
      console.error('Erreur de déconnexion:', error);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    setUser(storedUser);
  }, []);

  return (
    <div className={`dropdown ${isOpen ? 'open' : ''}`} ref={dropdownRef}>
      <a onClick={toggleDropdown} className="dropdown-toggle">
        <i className='fas fa-user' style={{ cursor: 'pointer' }}></i>
        <span className='ml-3'>{user ? user.UTIFIRSTLASTNAME : 'Compte'}</span>
      </a>
      <ul className="dropdown-menu">
        {!user && <li><NavLink to="/login">Connexion</NavLink></li>}
        {user && (
          <>
            <li><NavLink to="/mon-profile">Mes tickets</NavLink></li>
            {/* <li><NavLink to="/profile">Profile</NavLink></li>
            <li><NavLink to="/settings">Settings</NavLink></li> */}
            <li><a href="#0" onClick={handleLogout}>Logout</a></li>
          </>
        )}
      </ul>
    </div>
  );
};

export default DropdownMenu;
