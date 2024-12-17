// src/components/Accueil.js
import React, { useState, useEffect, useContext } from 'react'; // Importation de React et des hooks useState et useEffect
import { Link } from 'react-router-dom'; // Importation de Link de react-router-dom pour la navigation
import Slider from 'react-slick'; // Importation du composant Slider de react-slick
import SliderComponent from './SliderComponent'; // Importation d'un composant personnalisé SliderComponent
import Header from '../components/Header'; // Importation du composant Header
import Footer from '../components/Footer'; // Importation du composant Header

import { fetchEvenements } from '../../services/apiService'; // Importation de la fonction fetchEvenements depuis le fichier apiService
import { HeaderContext } from '../../contexts/HeaderContext'; // Importer le contexte

// Définition des images pour le slider
const images = [
  { id: 1, STR_SLIDERIMAGE: 'banner03.jpg' },
  { id: 2, STR_SLIDERIMAGE: 'banner04.jpg' },
  { id: 3, STR_SLIDERIMAGE: 'banner03.jpg' },
];

const ModelCard = ({ evenement }) => {
  const handleClick = () => {
    localStorage.setItem('LG_EVEID', evenement.LG_EVEID);
  };
  return (
    <div className="item mx-1 event-item">
      <Link className='w-100' to={`/detail-event?id=${evenement.STR_EVENPICTURE}`} onClick={handleClick}>
        <div className="event-grid">
          <div className="movie-thumb c-thumb">
            <a href="#0">
              <img src={`eticketbackend/${evenement.STR_EVEPIC}`} alt="movie" />
            </a>
            <div className="event-date">
              <span className="badge badge-danger">Gratuit</span>
            </div>
          </div>
          <div className="movie-content bg-white pb-2">
            <h5 className="title m-0 text-uppercase">
              <a href="#0">{evenement.STR_EVENAME}</a>
            </h5>
            <p className='event-home-desc text-color mt-1 mb-1 text-left'>
              {evenement.STR_EVEDESCRIPTION}
            </p>
            <div className="social-and-duration mt-1">
              <div className="duration-area row">
                <div className="col-lg-12 fs-12 lh-2">
                  <i className="fas fa-calendar-alt text-dabger"></i><span>{evenement.STR_EVENNAME} {evenement.DT_EVEBEGIN}</span> &nbsp; | &nbsp; <i className="far fa-clock"></i><span> {evenement.HR_EVEBEGIN}</span>
                </div>
                <div className="col-lg-12 fs-12 lh-2">
                  <i className="fas fa-map-pin"></i><span> {evenement.STR_EVEPLACE}</span>
                </div>
              </div>
            </div>
            <div className='pull-right'>
              <span className='event-home-desc'>Prix: </span><span className="badge badge-info ">{evenement.STR_EVEPLACE} FCFA</span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

const CustomArrow = ({ onClick, direction, iconClass }) => {
  return (
    <div className={`cast-${direction}`} onClick={onClick}>
      <i className={iconClass}></i>
    </div>
  );
};

const ModelSlider = ({ evenements, title }) => {
  const groupedModelsByGenre = evenements.reduce((acc, evenement) => {
    if (!acc[evenement.STR_EVENAME]) {
      acc[evenement.STR_EVENAME] = [];
    }
    acc[evenement.STR_EVENAME].push(evenement);
    return acc;
  }, {});

  const nbreLigneAfficher = 1; 
  const nbreColloneAfficher = 4; 

  return (
    <div>
      <div className="section-header-1">
        <h5 className="title mt-2">{title}</h5>
      </div>
      {Object.entries(groupedModelsByGenre).map(([STR_EVENAME, evenements]) => {
        const rows = [];
        for (let i = 0; i < evenements.length; i += nbreLigneAfficher) {
          rows.push(evenements.slice(i, i + nbreLigneAfficher));
        }

        const sliderSettings = {
          dots: false,
          infinite: evenements.length > nbreColloneAfficher,
          speed: 500,
          slidesToShow: evenements.length >= 1 ? nbreColloneAfficher : evenements.length,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
          responsive: [
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
              },
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              },
            },
          ],
          prevArrow: <CustomArrow iconClass="flaticon-double-right-arrows-angles" direction="prev" />,
          nextArrow: <CustomArrow iconClass="flaticon-double-right-arrows-angles" direction="next" />
        };

        return (
          <div className="model-slider" key={STR_EVENAME}>
            <h6 className='border-dashed pb-2'>{STR_EVENAME}</h6>
            <Slider className='mt-5' {...sliderSettings}>
              {rows.map((row, rowIndex) => (
                <div key={rowIndex} className="model-row">
                  {row.map((evenement, colIndex) => (
                    <div key={colIndex}>
                      <ModelCard evenement={evenement} />
                    </div>
                  ))}
                </div>
              ))}
            </Slider>
          </div>
        );
      })}
    </div>
  );
};

const Accueil = () => {
  const [activitesData, setData] = useState([]); 
  const { searchTerm } = useContext(HeaderContext); 

  useEffect(() => {
    const params = {
      mode: 'listEvenementFront',
      STR_UTITOKEN: 'wzpjku2dvokriz3phgop',
      DT_BEGIN: '2024-05-01',
      DT_END: '2024-06-27',
    };

    fetchEvenements(params)
      .then(response => {
        setData(response.data.data); 
      })
      .catch(error => {
        console.error('Error fetching data:', error); 
      });
  }, []);

  const filteredBlocks = activitesData.map((activite) => {
    const filteredModels = activite.evenements.filter((evenement) =>
      searchTerm
        .toLowerCase()
        .split(/\s+/)
        .some((word) => evenement.STR_EVENAME.toLowerCase().includes(word) || evenement.STR_EVEDESCRIPTION.toLowerCase().includes(word))
    );

    return filteredModels.length > 0 ? { ...activite, evenements: filteredModels } : null;
  }).filter((activite) => activite !== null);

  return (
    <>
      <Header /> 
      <div className='container pt-5 mt-5 homeslider-section'>
        <SliderComponent sliderData={images} numberSlidesToShow={1} /> 
      </div>
      <div className="app container">
        {filteredBlocks && filteredBlocks.map((activite) => (
          <ModelSlider key={activite.LG_LSTID} title={activite.STR_LSTDESCRIPTION} evenements={activite.evenements} />
        ))}
      </div>
      <Footer /> 
    </>
  );
};

export default Accueil;
