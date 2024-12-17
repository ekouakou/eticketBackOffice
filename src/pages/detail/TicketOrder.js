import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

const TicketOrder = ({ eventDetails }) => {
  // Définition des données des tickets avec la quantité disponible, le maximum à acheter et la devise
  const ticketCategories = [
    { id: 1, title: 'Standard Ticket', price: 49, image: 'assets/images/event/ticket/ticket01.png', available: 10, maxPurchase: 5, currency: 'FCFA' },
    { id: 2, title: 'Premium Ticket', price: 2000, image: 'assets/images/event/ticket/ticket02.png', available: 5, maxPurchase: 2, currency: 'FCFA' },
    { id: 3, title: 'VIP Ticket', price: 99, image: 'assets/images/event/ticket/ticket03.png', available: 2, maxPurchase: 1, currency: 'FCFA' },
  ];

  // États pour les quantités et le montant total
  const [quantities, setQuantities] = useState(ticketCategories.reduce((acc, category) => {
    acc[category.id] = 0;
    return acc;
  }, {}));
  const [totalAmount, setTotalAmount] = useState(0);
  const [availableTickets, setAvailableTickets] = useState(ticketCategories.reduce((acc, category) => {
    acc[category.id] = category.available;
    return acc;
  }, {}));

  // Fonction pour gérer le changement de quantité
  const handleQuantityChange = (id, change) => {
    const newQuantities = { ...quantities };
    const newAvailableTickets = { ...availableTickets };
    const category = ticketCategories.find(cat => cat.id === id);

    // Vérifier la disponibilité des tickets avant d'ajouter
    if (change > 0 && (newAvailableTickets[id] === 0 || newQuantities[id] >= category.maxPurchase)) {
      toast.error(`Vous ne pouvez pas acheter plus de ${category.maxPurchase} tickets pour ${category.title}.`);
      return;
    }

    newQuantities[id] = (newQuantities[id] || 0) + change;
    if (newQuantities[id] < 0) newQuantities[id] = 0; // Empêcher les quantités négatives

    // Mettre à jour la disponibilité des tickets
    newAvailableTickets[id] -= change;
    if (newAvailableTickets[id] < 0) newAvailableTickets[id] = 0;

    setQuantities(newQuantities);
    setAvailableTickets(newAvailableTickets);

    // Calcul du montant total
    const newTotalAmount = ticketCategories.reduce((total, category) => {
      return total + (newQuantities[category.id] * category.price);
    }, 0);

    setTotalAmount(newTotalAmount);
  };

  // Fonction pour enregistrer le montant total dans le localStorage lors du clic sur le bouton de paiement
  const handlePaymentClick = () => {
    // Récupérer les données actuelles du localStorage
    const existingTotalAmount = parseFloat(localStorage.getItem('totalAmount')) || 0;
    const existingCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
  
    // Ajouter le montant total actuel au montant total calculé
    const updatedTotalAmount = existingTotalAmount + totalAmount;
  
    // Construire et ajouter les nouveaux éléments au panier
    const newCartItems = [
      ...existingCartItems,
      ...ticketCategories
        .filter(category => quantities[category.id] > 0)
        .map(category => ({
          eventId: eventDetails.id,
          eventName: eventDetails.STR_EVENAME,
          eventDate: eventDetails.DT_EVEBEGIN, // Ajoutez des informations supplémentaires de l'événement si nécessaire
          category: category.title,
          quantity: quantities[category.id],
          price: category.price,
          totalPrice: quantities[category.id] * category.price,
          currency: category.currency,
          image: category.image,
        }))
    ];
  
    // Mettre à jour le localStorage avec les nouvelles données
    localStorage.setItem('totalAmount', updatedTotalAmount.toFixed(2));
    localStorage.setItem('cartItems', JSON.stringify(newCartItems));
  };

  // Calcul du nombre total de tickets commandés
  const totalTickets = Object.values(quantities).reduce((acc, curr) => acc + curr, 0);

  return (
    <div className="checkout-widget checkout-contact bg-white br-15">
      <ToastContainer />
      <h5 className="title">Achetez vos billets pour {eventDetails.STR_EVENAME}</h5>
      <div className="ticket--area row justify-content-center">
        {ticketCategories.filter(category => availableTickets[category.id] > 0).map(category => (
          <div className="col-sm-6 col-md-4" key={category.id}>
            <div className="ticket-item">
              <div className="ticket-thumb">
                <img src={category.image} alt={category.title} />
              </div>
              <div className="ticket-content">
                <span className="ticket-title">{category.title}</span>
                <h2 className="amount">{quantities[category.id] * category.price} {category.currency}</h2>
                <p>{category.price} {category.currency}</p>
                <div className='w-100'>
                  <div className="cart-plus-minus text-dark d-block mx-auto">
                    <div className="dec qtybutton" onClick={() => handleQuantityChange(category.id, -1)}>-</div>
                    <input className="cart-plus-minus-box text-dark w-100" type="text" value={quantities[category.id]} readOnly />
                    <div className={`inc qtybutton ${quantities[category.id] >= category.maxPurchase ? 'disabled' : ''}`} onClick={() => handleQuantityChange(category.id, 1)}>+</div>
                  </div>
                </div>
                {quantities[category.id] >= category.maxPurchase && (
                  <p className="text-orange"><FontAwesomeIcon icon={faExclamationTriangle} /> Quantité maximale de tickets atteinte.</p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      {totalAmount > 0 && (
        <div className="row mb-30-none">
          <div className="col-md-6 col-xl-4">
            <form className="cart-button bg-white event-cart">
                <div className='d-block'>
                  <span className="d-inline-block">Nombre de places choisies : {totalTickets}</span>
                  <h4 className=""><span>Montant total</span><span>{totalAmount.toFixed(2)} FCFA</span></h4>
                </div>
            </form>
          </div>
          <div className="col-md-6 col-xl-4">
            <form className="checkout-contact-form mb-0">
              <div className="form-group">
                <input type="text" placeholder="Entrez votre code promo" />
              </div>
            </form>
          </div>
          <div className="col-md-6 col-xl-4">
            <div className="form-group w-100">
              <NavLink to="/paiement" className="d-flex">
                <span className="btn-tags-inline-badge btn-paiement p-3 align-items-center">
                  <span className="w-100" onClick={handlePaymentClick}>Paiement</span>
                </span>
              </NavLink>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};


export default TicketOrder;
