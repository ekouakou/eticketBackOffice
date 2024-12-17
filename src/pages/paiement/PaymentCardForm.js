import React, { useState } from 'react';

const CardDetailsForm = () => (
    <div className="form-group w-100">
        <label htmlFor="card1">Card Details edmond</label>
        <input type="text" id="card1" />
        <div className="right-icon">
            <i className="flaticon-lock"></i>
        </div>
    </div>
);

const NameOnCardForm = () => (
    <div className="form-group w-100">
        <label htmlFor="card2">Name on the Card</label>
        <input type="text" id="card2" />
    </div>
);

const ExpirationForm = () => (
    <div className="form-group">
        <label htmlFor="card3">Expiration</label>
        <input type="text" id="card3" placeholder="MM/YY" />
    </div>
);

const CVVForm = () => (
    <div className="form-group">
        <label htmlFor="card4">CVV</label>
        <input type="text" id="card4" placeholder="CVV" />
    </div>
);

const QuickPayCheckbox = () => (
    <div className="form-group check-group">
        <input id="card5" type="checkbox" checked />
        <label htmlFor="card5">
            <span className="title">QuickPay</span>
            <span className="info">Save this card information to my Boleto account and make faster payments.</span>
        </label>
    </div>
);

const PaymentCardForm = ({ selectedOption }) => {
    const [formData, setFormData] = useState({
        cardDetails: '',
        nameOnCard: '',
        expiration: '',
        cvv: '',
        quickPay: false
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Effectuer des actions de soumission du formulaire ici
    };

    return (
        <form className="payment-card-form" onSubmit={handleSubmit}>
            {selectedOption === 'creditCard' && <CardDetailsForm />}
            {selectedOption === 'debitCard' && <NameOnCardForm />}
            {selectedOption === 'paypal' && <ExpirationForm />}
            <CVVForm />
            <QuickPayCheckbox />
            <div className="form-group">
                <input type="submit" className="custom-button" value="Make Payment" />
            </div>
        </form>
    );
};

export default PaymentCardForm;
