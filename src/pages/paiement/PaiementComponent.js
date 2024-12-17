import React, { useState, useEffect } from 'react';
import { useTheme } from '../../components-/ThemeProvider';
import PaymentForm from './PaymentForm';
import { NavLink } from 'react-router-dom';
import Modal from 'react-modal'; // Import du composant Modal de react-modal

import { useParams } from 'react-router-dom';
import axios from 'axios'; // Assurez-vous d'avoir installé axios pour l'utiliser
import Header from '../components/Header';
import { fetchEvenements } from '../../services/apiService';



// Assurez-vous de définir le style pour la modal
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

function PaiementComponent() {
    const { theme } = useTheme();
    const [timeLeft, setTimeLeft] = useState(300); // initialisé à 300 secondes (5 minutes)
    const [showModal, setShowModal] = useState(false); // État pour afficher la modal
    const [eventDetails, seteventDetails] = useState(null);
    const { id } = useParams();


    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(prevTime => (prevTime > 0 ? prevTime - 1 : 0));
        }, 1000);

        return () => clearInterval(timer); // Nettoyer l'intervalle à la destruction du composant
    }, []);

    useEffect(() => {
        if (timeLeft === 0) {
            setShowModal(true); // Afficher la modal lorsque le temps est écoulé
        }
    }, [timeLeft]);

    const handleCloseModal = () => {
        setShowModal(false); // Fonction pour fermer la modal
    };

    // Récupération des détails de l'événement
    useEffect(() => {
        const params = {
            mode: 'getEvenement',
            STR_UTITOKEN: 'wzpjku2dvokriz3phgop',
            LG_EVEID: localStorage.getItem('LG_EVEID')
        };

        fetchEvenements(params)
            .then(response => {
                seteventDetails(response.data.data);
            })
            .catch(error => {
                console.error('Erreur lors de la récupération des données:', error);
            });
    }, [id]);

    if (!eventDetails) {
        return <div>Loading...</div>;
    }

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    };

    //////////////////////////////////////////////////




    return (
        <>
            <Header />
            <div className={` content ${theme}`}>
                {eventDetails.map(evenement => (
                    <div key={evenement.id}>
                        <section className="details-banner hero-area bg_img seat-plan-banner" style={{ backgroundImage: `url(assets/images/${evenement.STR_EVENPICTURE})`, backgroundSize: "cover" }}>
                            <div className="container">
                                <div className="details-banner-wrapper">
                                    <div className="details-banner-content style-two">
                                        <h3 className="title">Venus</h3>
                                        <div className="tags">
                                            <a href="#0">City Walk</a>
                                            <a href="#0">English - 2D</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section className="page-title bg-one">
                            <div className="container">
                                <div className="row">
                                    <div className="item col-lg-2">
                                        <NavLink to="/detail-event">
                                            <span href="movie-ticket-plan.html" className="custom-button back-button mr-2">
                                                <i className="flaticon-double-right-arrows-angles"></i>
                                            </span>
                                            Retour
                                        </NavLink>
                                    </div>

                                    <div className="item col-lg-3">
                                        <NavLink to="/">
                                            <span href="movie-ticket-plan.html" className="custom-button back-button mr-2">
                                                <i className="flaticon-double-right-arrows-angles"></i>
                                            </span>
                                            Retour à la recherche
                                        </NavLink>
                                    </div>
                                    <div className="item date-item col-lg-4">
                                        {/* <span className="date">MON, SEP 09 2020</span>
                                        <select className="select-bar">
                                            <option value="sc1">09:40</option>
                                            <option value="sc2">13:45</option>
                                            <option value="sc3">15:45</option>
                                            <option value="sc4">19:50</option>
                                        </select> */}
                                    </div>
                                    <div className="item col-lg-3">
                                        <div className='pull-right'>
                                            <h5 className="title">{formatTime(timeLeft)}</h5>
                                            <p>Temps restant </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <Modal
                            isOpen={showModal}
                            onRequestClose={handleCloseModal}
                            style={customStyles}
                            contentLabel="Temps écoulé"
                        >
                    <h2>Le temps est écoulé!</h2>
                    <button onClick={handleCloseModal}>Fermer</button>
                    </Modal>
                        <div className='mt-5'>
                            <PaymentForm />
                        </div>
                    </div>
                ))}
            </div>
        </>
       
    );
}

export default PaiementComponent;
