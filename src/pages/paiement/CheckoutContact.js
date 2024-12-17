import React from 'react';

const CheckoutContact = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Logique pour gérer la soumission du formulaire ici
    };

    return (
        <div className="checkout-widget checkout-contact">
            <h5 className="title">Share your Contact Details</h5>
            <form className="checkout-contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <input type="text" placeholder="Full Name" />
                </div>
                <div className="form-group">
                    <input type="text" placeholder="Enter your Mail" />
                </div>
                <div className="form-group">
                    <input type="text" placeholder="Enter your Phone Number" />
                </div>
                <div className="form-group">
                    <input type="submit" value="Continue" className="custom-button" />
                </div>
            </form>
        </div>
    );
};

export default CheckoutContact;
