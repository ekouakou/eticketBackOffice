import React, { useState } from 'react';

const PaymentOption = ({ options }) => {
    const [activeOption, setActiveOption] = useState(0);

    const handleOptionClick = (index) => {
        setActiveOption(index);
    };

    return (
        <div className="checkout-widget checkout-card bg-white  mb-0">
            <h5 className="title">Payment Option</h5>
            <ul className="payment-option">
                {options.map((option, index) => (
                    <li key={index} className={activeOption === index ? 'active' : ''}>
                        <a href="#0" onClick={() => handleOptionClick(index)}>
                            <img src={option.image} alt={option.alt} />
                            <span>{option.name}</span>
                        </a>
                    </li>
                ))}
            </ul>
            <h6 className="subtitle">Enter Your Card Details</h6>
            <form class="payment-card-form">
                <div class="form-group w-100">
                    <label for="card1">Card Details</label>
                    <input type="text" id="card1"/>
                    <div class="right-icon">
                        <i class="flaticon-lock"></i>
                    </div>
                </div>
                <div class="form-group w-100">
                    <label for="card2"> Name on the Card</label>
                    <input type="text" id="card2"/>
                </div>
                <div class="form-group">
                    <label for="card3">Expiration</label>
                    <input type="text" id="card3" placeholder="MM/YY"/>
                </div>
                <div class="form-group">
                    <label for="card4">CVV</label>
                    <input type="text" id="card4" placeholder="CVV"/>
                </div>
                <div class="form-group check-group">
                    <input id="card5" type="checkbox" checked/>
                    <label for="card5">
                        <span class="title">QuickPay</span>
                        <span class="info">Save this card information to my Boleto  account and make faster payments.</span>
                    </label>
                </div>
                <div class="form-group">
                    <input type="submit" class="custom-button" value="make payment"/>
                </div>
            </form>
            <p className="notice">
                By Clicking "Make Payment" you agree to the <a href="#0">terms and conditions</a>
            </p>
        </div>
    );
};

export default PaymentOption;
