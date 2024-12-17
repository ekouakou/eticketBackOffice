import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Modal from 'react-modal';
import { NavLink } from 'react-router-dom';
import { fetchEvenements } from '../../services/apiService';
import PaymentForm from './PaymentForm';
import Header from '../components/Header';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

function AchatComponents() {
    const paths = JSON.parse(localStorage.getItem("appPaths"));
    const navigate = useNavigate();
    const [timeLeft, setTimeLeft] = useState(300);
    const [showModal, setShowModal] = useState(false);
    const [eventDetails, setEventDetails] = useState(null);
    const { id } = useParams();
    const [cartItems, setCartItems] = useState([]);
    const [quantities, setQuantities] = useState({});
    const [selectionDetails, setSelectionDetails] = useState([]);
    const [totalAmount, setTotalAmount] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(prevTime => (prevTime > 0 ? prevTime - 1 : 0));
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    useEffect(() => {
        if (timeLeft === 0) {
            setShowModal(true);
        }
    }, [timeLeft]);

    const handleCloseModal = () => {
        setShowModal(false);
    };

    useEffect(() => {
        const params = {
            mode: 'getEvenement',
            STR_UTITOKEN: 'wzpjku2dvokriz3phgop',
            LG_EVEID: localStorage.getItem('LG_EVEID')
        };

        fetchEvenements(params)
            .then(response => {
                setEventDetails(response.data.data);
            })
            .catch(error => {
                console.error('Erreur lors de la récupération des données:', error);
            });
    }, [id]);

    useEffect(() => {
        const storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        if (storedCartItems.length === 0) {
            navigate(paths.signIn);
        } else {
            setCartItems(storedCartItems);

            const quantities = {};
            const selectionDetails = storedCartItems.map(item => {
                quantities[item.category] = item.quantity;
                return {
                    category: item.category,
                    quantity: item.quantity,
                    price: item.price,
                    totalPrice: item.totalPrice,
                };
            });

            setQuantities(quantities);
            setSelectionDetails(selectionDetails);

            const total = storedCartItems.reduce((acc, item) => acc + item.totalPrice, 0);
            setTotalAmount(total);
        }
    }, [navigate]);

    if (!eventDetails) {
        return <div>Loading...</div>;
    }

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    };

    return (
        <>
            <Header /> 
            <div className={`content`}>
                {eventDetails.map(evenement => (
                    <div key={evenement.id}>
                        <section className="details-banner bg_img" style={{ backgroundImage: `url(eticketbackend/${evenement.STR_EVEBANNER})`, backgroundSize: "cover", backgroundPosition: "center" }}>
                            <div className="container">
                                <div className="details-banner-wrapper">
                                    <div className="details-banner-thumb">
                                        <img src={`eticketbackend/${evenement.STR_EVEPIC}`} alt={evenement.STR_EVEPIC} />
                                    </div>
                                    <div className="details-banner-content offset-lg-3">
                                        <h3 className="title">{evenement.STR_EVENAME}</h3>
                                        <div className="tags">
                                            <a href="#0">{evenement.STR_EVEDESCRIPTION}</a>
                                        </div>
                                        <a href="#0" className="button">horror</a>
                                        <div className="social-and-duration">
                                            <div className="duration-area">
                                                <div className="item">
                                                    <i className="fas fa-calendar-alt"></i><span>{evenement.DT_EVEBEGIN} </span>
                                                </div>
                                                <div className="item">
                                                    <i className="far fa-clock"></i><span>{evenement.HR_EVEBEGIN} </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="book-section bg-white">
                            <div className="container">
                                <div className="book-wrapper offset-lg-3">
                                    <div className="left-side">
                                        <div className="item">
                                            <NavLink to="/detail-event">
                                                <span className="btn-tags-inline-badge inline-badge mr-2">
                                                    <span> <i className="flaticon-double-right-arrows-angles"></i> Retour</span>
                                                </span>
                                            </NavLink>
                                            <NavLink to="/">
                                                <span className="btn-tags-inline-badge inline-badge mr-2">                                                
                                                    <span> <i className="flaticon-double-right-arrows-angles"></i> Retour à la recherche</span>
                                                </span>
                                            </NavLink>
                                        </div>
                                    </div>
                                    <h5 className="title mb-4">
                                        <span className="btn-tags-inline-badge inline-badge mr-2 bg-danger">                                                
                                            <span> <i className="far fa-clock"></i> {formatTime(timeLeft)}</span>
                                        </span>
                                    </h5>
                                </div>
                            </div>
                        </section>
                        <div className="movie-details-section padding-top padding-bottom mt-5 pt-5">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-8">
                                        <Modal
                                            isOpen={showModal}
                                            onRequestClose={handleCloseModal}
                                            style={customStyles}
                                            contentLabel="Temps écoulé"
                                        >
                                            <h2>Le temps est écoulé!</h2>
                                            <button onClick={handleCloseModal}>Fermer</button>
                                        </Modal>
                                        <PaymentForm />
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="booking-summery bg-one">
                                            <h4 className="title">Résumé panier</h4>
                                            <ul>
                                                <li>
                                                    <div className="info"><span>Nbre billets</span> <span>{Object.values(quantities).reduce((acc, curr) => acc + curr, 0)} Tickets</span></div>
                                                </li>
                                            </ul>
                                            <ul className="side-shape"></ul>
                                            <ul>
                                                {selectionDetails.filter(detail => detail.quantity > 0).map((detail, index) => (
                                                    <li key={index}>
                                                        <h6 className="subtitle"><span>CAT</span><span>{detail.category}</span></h6>
                                                        <div className="info"><span>Quantité</span> <span>{detail.quantity}</span></div>
                                                        <div className="info"><span>Tarif</span> <span>{detail.price} FCFA</span></div>
                                                    </li>
                                                ))}
                                            </ul>
                                            <ul>
                                                <li>
                                                    <div className="total">
                                                        <h6 className="subtitle"><span>Total</span><span>{totalAmount} FCFA</span></h6>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default AchatComponents;
