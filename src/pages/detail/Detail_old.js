import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios'; // Assurez-vous d'avoir installé axios pour l'utiliser
import SeatPlan from './SeatPlan';
import SeanceDetails from './SeanceDetails';
import SeatMap from '../components/SeatMap';



function Detail() {

    // Données des sièges
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


  const [activitesData, setData] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');


    const getRootUrl = (port) => {
      const originWithoutPort = window.location.protocol + '//' + window.location.hostname;
      const defaultPort = "8080";
      const baseUrl = "/01-NKM-TECHNOLOGY/eticket/eticket_web/backend/movies/";
      const finalPort = port ? port : defaultPort;
      //return `${origin}:${finalPort}${baseUrl}`;
      return `${originWithoutPort}:${finalPort}${baseUrl}`;
    };


    const port = "8888"; // Port que vous voulez passer
    const rootUrl = getRootUrl(port);





    //////////////////////////////////////////////////
    const { id } = useParams();
    const [eventDetails, seteventDetails] = useState(null);

    useEffect(() => {
        // Données à envoyer dans la requête POST
        const postData = {
            LG_EVENID: localStorage.getItem('LG_EVENID'), // Vous pouvez ajouter d'autres données nécessaires ici
            // ...
        };
        //192.168.1.69
        axios.post(`${rootUrl}/detailEvent.php`, postData)
            .then(response => {
                seteventDetails(response.data);
                
            })
            .catch(error => {
                console.error('Erreur lors de la récupération des données:', error);
            });
    }, [id]);

    // 
    console.log( localStorage.getItem('eventId'));

    

    //////////////////////////////////////////////////

    const seanceData = {
        "idseanc": 3557526,
        "idmanif": 543440,
        "nameManif": null,
        "dateSeance": "2024-06-01T20:00:00.000+02:00",
        "idNatcl": null,
        "nameNatcl": null,
        "codcatpl": null,
        "llgcatpl": null,
        "llccatpl": null,
        "codtypcatpl": null,
        "llctypcatpl": null,
        "llgtypcatpl": null,
        "hasPlacesDispo": true,
        "contingent": "LIB",
        "dateAnnonce": null,
        "dateOuvte": null,
        "infoCategories": [
            {
                "nbPlaces": 90,
                "codCatPl": "01",
                "llgCatPl": "CATEGORIE 1",
                "llcCatPl": "CAT1",
                "codeTypePlace": "STD",
                "priceMin": 48.3,
                "priceOrdre": 69,
                "infoNatCliTarifs": [
                    {
                        "idNatCl": 1,
                        "nameNatCl": "TARIF NORMAL",
                        "price": 69,
                        "min": 1,
                        "max": 20,
                        "increment": 1,
                        "maxPlaceForSameNatCli": false,
                        "limit": false,
                        "isPackage": 0,
                        "inddispo": true,
                        "tarifPromo": false,
                        "tarifPromoPartner": false
                    },
                    // {
                    //     "idNatCl": 25,
                    //     "nameNatCl": "TARIF PROMOTION",
                    //     "price": 48.3,
                    //     "min": 1,
                    //     "max": 20,
                    //     "increment": 1,
                    //     "maxPlaceForSameNatCli": false,
                    //     "limit": true,
                    //     "isPackage": 0,
                    //     "inddispo": true,
                    //     "tarifPromo": true,
                    //     "tarifPromoPartner": false
                    // }
                ],
                "zones": [
                    {
                        "idzone": "1498",
                        "llczone": "AV2C",
                        "eticket": false,
                        "placementeticket": null,
                        "placementcatpl": "N",
                        "nbplaces": 1
                    },
                    {
                        "idzone": "1506",
                        "llczone": "BD",
                        "eticket": false,
                        "placementeticket": null,
                        "placementcatpl": "N",
                        "nbplaces": 45
                    },
                    {
                        "idzone": "1507",
                        "llczone": "BE",
                        "eticket": false,
                        "placementeticket": null,
                        "placementcatpl": "N",
                        "nbplaces": 4
                    },
                    {
                        "idzone": "1508",
                        "llczone": "BF",
                        "eticket": false,
                        "placementeticket": null,
                        "placementcatpl": "N",
                        "nbplaces": 33
                    },
                    {
                        "idzone": "1492",
                        "llczone": "P2",
                        "eticket": false,
                        "placementeticket": null,
                        "placementcatpl": "N",
                        "nbplaces": 1
                    },
                    {
                        "idzone": "1494",
                        "llczone": "P4",
                        "eticket": false,
                        "placementeticket": null,
                        "placementcatpl": "N",
                        "nbplaces": 6
                    }
                ]
            },
            {
                "nbPlaces": 457,
                "codCatPl": "02",
                "llgCatPl": "CATEGORIE 2",
                "llcCatPl": "CAT2",
                "codeTypePlace": "STD",
                "priceMin": 39.9,
                "priceOrdre": 57,
                "infoNatCliTarifs": [
                    {
                        "idNatCl": 1,
                        "nameNatCl": "TARIF NORMAL",
                        "price": 57,
                        "min": 1,
                        "max": 20,
                        "increment": 1,
                        "maxPlaceForSameNatCli": false,
                        "limit": false,
                        "isPackage": 0,
                        "inddispo": true,
                        "tarifPromo": false,
                        "tarifPromoPartner": false
                    },
                    // {
                    //     "idNatCl": 25,
                    //     "nameNatCl": "TARIF PROMOTION",
                    //     "price": 39.9,
                    //     "min": 1,
                    //     "max": 20,
                    //     "increment": 1,
                    //     "maxPlaceForSameNatCli": false,
                    //     "limit": true,
                    //     "isPackage": 0,
                    //     "inddispo": true,
                    //     "tarifPromo": true,
                    //     "tarifPromoPartner": false
                    // }
                ],
                "zones": [
                    {
                        "idzone": "1523",
                        "llczone": "GC",
                        "eticket": false,
                        "placementeticket": null,
                        "placementcatpl": "N",
                        "nbplaces": 111
                    },
                    {
                        "idzone": "1524",
                        "llczone": "HD",
                        "eticket": false,
                        "placementeticket": null,
                        "placementcatpl": "N",
                        "nbplaces": 78
                    },
                    {
                        "idzone": "1525",
                        "llczone": "HE",
                        "eticket": false,
                        "placementeticket": null,
                        "placementcatpl": "N",
                        "nbplaces": 94
                    },
                    {
                        "idzone": "1526",
                        "llczone": "HF",
                        "eticket": false,
                        "placementeticket": null,
                        "placementcatpl": "N",
                        "nbplaces": 62
                    },
                    {
                        "idzone": "1527",
                        "llczone": "IG",
                        "eticket": false,
                        "placementeticket": null,
                        "placementcatpl": "N",
                        "nbplaces": 112
                    }
                ]
            },
            {
                "nbPlaces": 192,
                "codCatPl": "03",
                "llgCatPl": "CATEGORIE 3",
                "llcCatPl": "CAT3",
                "codeTypePlace": "STD",
                "priceMin": 35,
                "priceOrdre": 35,
                "infoNatCliTarifs": [
                    {
                        "idNatCl": 1,
                        "nameNatCl": "TARIF NORMAL",
                        "price": 35,
                        "min": 1,
                        "max": 20,
                        "increment": 1,
                        "maxPlaceForSameNatCli": false,
                        "limit": false,
                        "isPackage": 0,
                        "inddispo": true,
                        "tarifPromo": false,
                        "tarifPromoPartner": false
                    }
                ],
                "zones": [
                    {
                        "idzone": "1530",
                        "llczone": "J",
                        "eticket": false,
                        "placementeticket": null,
                        "placementcatpl": "N",
                        "nbplaces": 14
                    },
                    {
                        "idzone": "1531",
                        "llczone": "K",
                        "eticket": false,
                        "placementeticket": null,
                        "placementcatpl": "N",
                        "nbplaces": 124
                    },
                    {
                        "idzone": "1532",
                        "llczone": "L",
                        "eticket": false,
                        "placementeticket": null,
                        "placementcatpl": "N",
                        "nbplaces": 54
                    }
                ]
            }
        ],
        "hasZoning": true,
        "status": "D",
        "llgseanc": "BERNADETTE DE LOURDES",
        "afficheDateSeance": true,
        "openPass": false,
        "descriptionFR": null,
        "descriptionEN": null,
        "image": null,
        "nbPlacesCommandable": 20,
        "basketPlan": "statics/ism/pm_543440_petit.png",
        "needMireCodeFanClub": false,
        "urlCodeFanClub": null
    };


    return (
      <div className={`content `}>

            {/* <SeanceDetails seanceData={seanceData} /> */}
            <SeatMap seatRows={seatData} />

       
        
         
      </div>
    );
}

export default Detail;
