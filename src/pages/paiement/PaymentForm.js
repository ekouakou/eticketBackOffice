import React, { useState } from 'react';

const PaymentForm = () => {
  // Tableau d'objets pour les options de paiement
  const paymentOptions = [
    { id: 1, name: 'Carte de Crédit', image: 'assets/images/payment/card.png',
      formFields: ['Détails de la Carte', 'Nom sur la Carte', 'Expiration', 'CVV']
    },
    { id: 2, name: 'Orange Money', image: 'assets/images/payment/om.png',
      formFields: ['Détails de la Carte de Débit', 'Nom sur la Carte de Débit', 'Expiration', 'CVV']
    },
    // { id: 3, name: 'Paypal', image: 'assets/images/payment/paypal.png',
    //   formFields: ['Email Paypal', 'Mot de passe Paypal']
    // }
  ];

  // État pour suivre l'option de paiement sélectionnée, initialisée avec l'ID de l'option par défaut
  const [selectedOption, setSelectedOption] = useState(paymentOptions[0].id);

  // Gestionnaire d'événements pour changer l'option de paiement sélectionnée
  const handleOptionClick = (optionId) => {
    setSelectedOption(optionId);
  };

  return (
    <>
      <div className='container'>
      <div className=" checkout-widget checkout-card bg-white card-corner-radius mb-5">
        <h5 className="title">Option de Paiement</h5>
        <ul className="payment-option">
          {paymentOptions.map(option => (
            <li key={option.id} className={selectedOption === option.id ? 'active' : ''} onClick={() => handleOptionClick(option.id)}>
              <a href="#0">
                <img src={option.image} alt={option.name} />
                <span>{option.name}</span>
              </a>
            </li>
          ))}
        </ul>
        {selectedOption && (
          <div>
            <h6 className="subtitle">Entrez les détails de votre {paymentOptions.find(option => option.id === selectedOption).name}</h6>
            <form className="payment-card-form">
              <div className='row w-100'>
                {paymentOptions.find(option => option.id === selectedOption).formFields.map((field, index) => (
                  <div key={index} className="form-group col-lg-6">
                    <label htmlFor={`field${index}`}>{field}</label>
                    <input type="text" className='form-control' id={`field${index}`} placeholder={field} />
                  </div>
                ))}
              </div>
              <div className="form-group">
                <button className="custom-button back-button px-5" >Effectuer le Paiement</button>
              </div>
            </form>
          </div>
        )}
        <p className="notice">En cliquant sur "Effectuer le Paiement", vous acceptez les <a href="#0">termes et conditions</a></p>
      </div>
      </div>
    </>
  );
};

export default PaymentForm;
