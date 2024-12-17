import React, { useState } from 'react';
import PaymentOption from './PaymentOption';
import PaymentCardForm from './PaymentCardForm';

const CheckoutPement = () => {
    const [selectedOption, setSelectedOption] = useState('');

    const handleOptionChange = (option) => {
        setSelectedOption(option);
    };

    const options = [
        { name: 'Credit Card', image: 'assets/images/payment/card.png', alt: 'payment' },
        { name: 'Debit Card', image: 'assets/images/payment/card.png', alt: 'payment' },
        { name: 'Paypal', image: 'assets/images/payment/paypal.png', alt: 'payment' }
    ];

    return (
        <div className="checkout">
            <PaymentOption options={options} onChange={handleOptionChange} />
            <PaymentCardForm selectedOption={selectedOption} />
        </div>
    );
};

export default CheckoutPement;
