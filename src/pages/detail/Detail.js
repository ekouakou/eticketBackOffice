import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
//import { useTheme } from '../../components/ThemeProvider';
import { HeaderContext } from '../../contexts/HeaderContext';
import axios from 'axios';
import SeatPlan from './SeatPlan';
import SeanceDetails from './SeanceDetails';
import TicketOrder from './TicketOrder';
import CheckoutContact from '../paiement/CheckoutContact';
import PaymentForm from '../paiement/PaymentForm';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { fetchEvenements } from '../../services/apiService';
import { NavLink } from 'react-router-dom';
import SeatMap from '../components/SeatMap';


// Images pour le slider
const images = [
    { id: 1, STR_SLIDERIMAGE: 'assets/images/banner/banner01.jpg' },
    { id: 2, STR_SLIDERIMAGE: 'assets/images/banner/banner01.jpg' },
    { id: 3, STR_SLIDERIMAGE: 'assets/images/banner/banner01.jpg' },
];

// Options de paiement
const options = [
    { name: 'Carte de crédit', image: 'assets/images/payment/card.png', alt: 'payment' },
    { name: 'Orange Money', image: 'assets/images/payment/om.jpg', alt: 'payment' },
    { name: 'Paypal', image: 'assets/images/payment/paypal.png', alt: 'payment' }
];

// Données de la séance
const seatData = [
    {
      rowLabel: 'G',
      seats: [
        { isFree: false },
        { isFree: false },
        { isFree: false },
        { isFree: false },
        { isFree: false },
        { isFree: false },
        { isFree: false },
      ],
    },
    {
      rowLabel: 'f',
      seats: [
        { isFree: false },
        { isFree: false },
        { isFree: true, seatNumber: 'f7' },
        { isFree: true, seatNumber: 'f8' },
        { isFree: false },
        { isFree: false },
      ],
    },
    {
        rowLabel: 'G',
        seats: [
          { isFree: false },
          { isFree: false },
          { isFree: true, seatNumber: 'f7' },
          { isFree: true, seatNumber: 'f8' },
          { isFree: false },
          { isFree: false },
          { isFree: false },
          { isFree: false },
          { isFree: false },
          { isFree: false },
          { isFree: false },
          { isFree: false },
        ],
      },
    // Ajoutez d'autres lignes de sièges au besoin...
  ];

function Detail() {
    //const { theme } = useTheme();
    //const { id } = useParams();
    const [eventDetails, seteventDetails] = useState(null);

    // Récupération des détails de l'événement
    useEffect(() => {
        const params = {
            mode: 'getEvenement',
            STR_UTITOKEN: 'AfsvjcsLCHJ68PVdF9ZF',
            LG_EVEID: localStorage.getItem('LG_EVEID')
        };

        fetchEvenements(params)
            .then(response => {
                seteventDetails(response.data.data);
            })
            .catch(error => {
                console.error('Erreur lors de la récupération des données:', error);
            });
    }, []);

    if (!eventDetails) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <Header /> 
            <div className={`content `}>
                {eventDetails.map(evenement => (
                    <div key={evenement.id}>
                        {/* Bannière */}
                        <section className="details-banner bg_img" style={{ backgroundImage: `url(eticketbackend/${evenement.STR_EVEBANNER})`, backgroundSize: "cover", backgroundPosition: "center" }}>
                            <div className="container">
                                <div className="details-banner-wrapper">
                                    <div className="details-banner-thumb">
                                        <img src={`eticketbackend/${evenement.STR_EVEPIC}`}  alt={evenement.STR_EVEPIC} />
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
                        {/* Section de réservation */}
                        <section className="book-section bg-white">
                            <div className="container">
                                {/* ... */}


                                <div class="book-wrapper offset-lg-3">
                                    <div class="left-side">
                                        <div class="item">
                                            <NavLink to="/">
                                                <span class="btn-tags-inline-badge inline-badge ">                                                
                                                    <span class=""> <i className="flaticon-double-right-arrows-angles"></i> Retour à la recherche</span>
                                                </span>
                                            </NavLink>
                                        </div>
                                        <div class="item">
                                            <NavLink to="/paiement">
                                                <span class="btn-tags-inline-badge inline-badge mr-1">                                                
                                                    <span class="">  Retour au paiement  <i className="flaticon-double-right-arrows-angles  ml-2"></i></span>
                                                </span>
                                            </NavLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        {/* Détails de l'événement */}
                        <div className="movie-details-section padding-top padding-bottom mt-5  pt-5">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-8">
                                        <TicketOrder eventDetails={evenement} />

                                        {/* <SeatMap  /> */}
                                    </div>
                                    <div className="col-lg-4">
                                        {/* Annonceur */}
                                        <div className="booking-summery bg-white br-15">
                                            {/* <h4 className="title">Annonceur</h4> */}
                                            <ul>
                                                <li>
                                                    <h6 className="subtitle"><span>A propos de l'évenement</span></h6>
                                                </li>
                                                <li>
                                                    {evenement.STR_EVEDESCRIPTION}
                                                </li>
                                            </ul>
                                            

                                            <ul className="side-shape"> </ul>
                                            

                                            <ul>
                                                <li>
                                                    <h6 className="subtitle"><span>Annonceur</span></h6>
                                                </li>
                                                <li>
                                                    <div className="offer-item">
                                                        <div className="thumb">
                                                            <img src={`eticketbackend/${evenement.STR_EVEPIC}`} width={70} alt="sidebar"/>
                                                        </div>
                                                        <div className="content mt-4">
                                                            <h6 className=''>
                                                                <a href="#0">{evenement.STR_EVEANNONCEUR}</a>
                                                            </h6>
                                                            <p className='mt-2'>{evenement.STR_EVEANNONCEURDESC}</p>
                                                        </div>
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

            <Footer />
        </>
    );
}

export default Detail;
