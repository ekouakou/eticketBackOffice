import React, { useState, useRef, useEffect, useContext } from 'react';
import { useTheme } from '../../contexts/ThemeProvider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import LogoHeader from './LogoHeader';
import { HeaderContext } from '../../contexts/HeaderContext'; // Importer le contexte
import DropdownMenu from './DropdownMenu'; // Importer le composant DropdownMenu

function Header() {
  const { theme, toggleTheme } = useTheme();
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [isCartVisible, setIsCartVisible] = useState(false); // Nouvel état pour le panier
  const [cartItems, setCartItems] = useState([]); // État local pour les éléments du panier
  const searchInputRef = useRef(null);
  const searchIconRef = useRef(null);
  const cartIconRef = useRef(null); // Référence pour l'icône du panier

  const { searchTerm, setSearchTerm, handleSearchSubmit } = useContext(HeaderContext); // Utiliser le contexte

  const toggleButton = () => {
    toggleTheme();
  };

  const toggleSearchVisibility = (event) => {
    event.preventDefault();
    setIsSearchVisible(!isSearchVisible);
    if (!isSearchVisible) {
      setTimeout(() => {
        searchInputRef.current.focus();
      }, 500); // delay to match the CSS transition duration
    }
    if (isCartVisible) {
      setIsCartVisible(false);
    }
  };

  const toggleCartVisibility = (event) => {
    event.preventDefault();
    setIsCartVisible(!isCartVisible);
    if (isSearchVisible) {
      setIsSearchVisible(false);
    }
  };

  const handleBlur = () => {
    // Add a timeout to allow click event on search icon to register before hiding the form
    setTimeout(() => {
      if (document.activeElement !== searchInputRef.current) {
        setIsSearchVisible(false);
      }
    }, 200);
  };

  const handleClickOutside = (event) => {
    if (
      searchInputRef.current &&
      !searchInputRef.current.contains(event.target) &&
      !searchIconRef.current.contains(event.target) &&
      cartIconRef.current &&
      !cartIconRef.current.contains(event.target)
    ) {
      setIsSearchVisible(false);
      setIsCartVisible(false); // Fermer le panier si clic en dehors
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    setCartItems(storedCartItems);
  }, []);

  const isActiveFunc = (match, location) => {
    return match !== null;
  };

  return (
    <header className={"header-section " + theme}>
      <div className="container">
        <div className="header-wrapper">
          <div className="logo">
            <NavLink exact to="/" isActive={isActiveFunc}>
              <LogoHeader theme={theme} />
            </NavLink>
          </div>
          <ul className="menu">
            {/* <li><NavLink exact to="/" isActive={isActiveFunc}>Accueil</NavLink></li>
            <li><NavLink to="/about" isActive={isActiveFunc}>À propos</NavLink></li>
            <li><NavLink to="/contact" isActive={isActiveFunc}>Contact</NavLink></li> */}
            {/* <li><NavLink to="login" isActive={isActiveFunc}>Mes tickets</NavLink></li> */}
          </ul>

          <div className="pr-0 d-flex">
            <DropdownMenu /> {/* Utiliser le composant DropdownMenu */}
            <div className='mx-4'>
              <i
                className='fas fa-search'
                onClick={toggleSearchVisibility}
                style={{ cursor: 'pointer' }}
                ref={searchIconRef}
              ></i>
            </div>
            <div className='mr-4'>
              <i
                className='fas fa-shopping-cart'
                onClick={toggleCartVisibility}
                style={{ cursor: 'pointer' }}
                ref={cartIconRef}
              ></i>
              <span className="position-absolute topbar-badge fs-10 translate-middle badge rounded-pill bg-danger">
                {cartItems.reduce((total, item) => total + item.quantity, 0)}
              </span>
            </div>
            <div id="themeToggle" onClick={toggleButton}>
              {theme === 'light' ? <FontAwesomeIcon icon={faMoon} /> : <FontAwesomeIcon icon={faSun} />}
            </div>
          </div>
          <div className="header-bar d-lg-none">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <div className={`header-wrapper m-0 zone-recherche ${isSearchVisible ? 'show' : ''}`}>
          <form className="ticket-search-form w-100" onSubmit={handleSearchSubmit}>
            <div className="form-group mt-3 w-100 header-search">
              <input
                type="text"
                className='inputSearch w-100'
                placeholder="Rechercher un evenement"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                ref={searchInputRef}
                onBlur={handleBlur}
              />
              <button className='desabled' type="submit"><i className="fas fa-search mr-5"></i></button>
            </div>
          </form>
        </div>

        <div className={`header-wrapper m-0 zone-panier ${isCartVisible ? 'show' : ''}`}>
          <div className="cart-content">
            {cartItems.length === 0 ? (
              <p>Vous n'avez pas de commande en attente.</p>
            ) : (
              <ul>
                {cartItems.map((item, index) => (
                  <li key={index}>
                    {item.name} - {item.quantity} x {item.category} - {item.totalPrice} {item.currency}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

      </div>
    </header>
  );
}

export default Header;
