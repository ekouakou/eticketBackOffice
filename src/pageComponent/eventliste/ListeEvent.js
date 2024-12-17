import React, { useEffect, useState } from 'react';
import { crudData } from '../../services/apiService';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import Dropdown from 'react-bootstrap/Dropdown';
import DataTable from '../DataTable';


const ListeEvent = () => {
    const urlBaseImage = localStorage.getItem("urlBaseImage");
    const paths = JSON.parse(localStorage.getItem("appPaths"));

    const columns = [
        // {
        //     title: 'Photo',
        //     dataKey: 'STR_EVEPIC',
        //     className: 'w-250px',
        //     render: (imagePath) => {
        //         // Assurez-vous que imagePath est bien une chaîne de caractères
        //         const imageUrl = `${urlBaseImage + imagePath.STR_EVEPIC}`;
        //         console.log('Image URL:', imagePath.STR_EVEPIC); // Vérifiez l'URL complète
        //         return (
        //             <img 
        //                 src={imageUrl} 
        //                 alt="Utilisateur" 
        //                 style={{ width: 'auto', height: '40px' }} 
        //             />
        //         );
        //     }
        // },

        {
            title: 'Name',
            field: 'STR_UTIFIRSTLASTNAME',
            className: 'p-0 min-w-650px',
            render: (imagePath) => (
              <div className="d-flex ms-5 align-items-center">
                <div className="symbol symbol- symbol-40px me-3">
                  <img src={urlBaseImage +  imagePath.STR_EVEPIC} alt="" />
                </div>
                <div className="d-flex justify-content-start flex-column">
                  <a className="text-gray-800 fw-bold text-hover-primary mb-1 fs-6">
                    {imagePath.STR_EVENAME}
                  </a>
                  <span className="text-gray-500 fw-semibold d-block fs-7">{imagePath.STR_EVEDESCRIPTION.length > 100 ? imagePath.STR_EVEDESCRIPTION.substring(0, 100) + '...' : imagePath.STR_EVEDESCRIPTION}</span>
                </div>
              </div>
            ),
        },
        // { title: 'DT_UTICREATED', dataKey: 'DT_UTICREATED', className: 'w-150px' },
        // { title: 'LG_AGEID', dataKey: 'LG_AGEID', className: 'min-w-100px' },
        // { title: 'LG_PROID', dataKey: 'LG_PROID', className: 'text-center' },
        // { title: 'Titre de la bannière', dataKey: 'STR_EVENAME', className: 'w-250px' },
        // { title: 'Description', dataKey: 'STR_EVEDESCRIPTION', className: 'w-650px' },
        {
            title: 'Date Début/Fin',
            field: 'DT_EVEBEGIN',
            className: 'p-0 min-w-150px text-start',
            render: (item) => (
            <div className="">
                {/* <div className="symbol symbol- symbol-40px me-3">
                <img src={urlBaseImage +  item.STR_UTIPIC} alt={value} />
                </div> */}
                <div className="d-flex justify-content-start flex-column">
                <a  className="text-gray-800 fw-bold text-hover-primary mb-1 fs-6">
                    {item.DT_EVEBEGIN}
                </a>
                <span className="text-gray-500 fw-semibold d-block fs-7">{item.DT_EVEEND}</span>
                </div>
            </div>
            ),
        },

        {
            title: 'H. Début/Fin',
            field: 'HR_EVEBEGIN',
            className: 'p-0 min-w-150px text-start',
            render: (item) => (
            <div className="">
                {/* <div className="symbol symbol- symbol-40px me-3">
                <img src={urlBaseImage +  item.STR_UTIPIC} alt={value} />
                </div> */}
                <div className="d-flex justify-content-start flex-column">
                <a href={item.HR_EVEBEGIN} className="text-gray-800 fw-bold text-hover-primary mb-1 fs-6">
                    {item.HR_EVEBEGIN}
                </a>
                <span className="text-gray-500 fw-semibold d-block fs-7">{item.HR_EVEEND}</span>
                </div>
            </div>
            ),
        },
        // { title: 'Date de debut', dataKey: 'HR_EVEBEGIN', className: 'min-w-100px' },
        // { title: 'Date de fin', dataKey: 'DT_EVEEND', className: 'min-w-100px' },
        // { title: 'Heure de debut', dataKey: 'HR_EVEBEGIN', className: 'min-w-100px' },
        // { title: 'Heure de fin', dataKey: 'HR_EVEEND', className: 'min-w-100px' },
        
        // { title: 'Téléphone', dataKey: 'STR_UTIPHONE', className: 'text-center' },
        
        {
            title: 'Statut',
            dataKey: 'STR_EVESTATUT',
            className: 'w-50px',
            render: (status) => {
                let badgeClass = 'badge-light-warning'; // Par défaut
                let statusText = status.STR_EVESTATUT; // Valeur par défaut
                console.log(statusText);

                if (typeof statusText === 'string') {
                    // Définir les classes selon le statut
                    switch (statusText) {
                        case 'enable':
                            badgeClass = 'badge-light-success';
                            break;
                        case 'disable':
                            badgeClass = 'badge-light-danger';
                            break;
                        default:
                            badgeClass = 'badge-light-warning';
                            break;
                    }
                }

                return (
                    <span className={`badge py-3 px-4 fs-7 ${badgeClass}`}>
                        {statusText==='disable'? 'Désectivé':'Activé'}
                    </span>
                );
            }
        },
        { title: 'Action', dataKey: 'actions', className: 'text-center w-50px' }
    ];


    const filterOptions = {
        category: ['Category1', 'Category2', 'Category3'],
        status: ['Active', 'Inactive'],
        // Ajoutez d'autres filtres ici
    };

    const apiUrl = "TicketManager.php";
    const [searchTerm, setSearchTerm] = useState('');
    const [eventData, setEventData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [user, setUser] = useState(null); // Add state for user
    const navigate = useNavigate();

    const fetchData = (params, url, setData) => {
        crudData(params, url)
            .then(response => {
                const events = response.data.data;
                setEventData(events);
                setFilteredData(events);
                setLoading(false);
            })
            .catch(error => {
                console.error('Erreur lors de la récupération des données:', error);
                setLoading(false);
            });
    };

    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem('userConnectedData'));
        if (!storedUser) {
            navigate(paths.signIn); // Redirige vers la page d'accueil si l'utilisateur est vide
        } else {
            setUser(storedUser); // Set user in state
            fetchData({ mode: 'listEvenement', STR_UTITOKEN: storedUser.STR_UTITOKEN, DT_BEGIN: "2020-01-01", DT_END: "2025-08-31" }, apiUrl, setEventData);
            //fetchData({ mode: 'listBanniere', STR_UTITOKEN: storedUser.STR_UTITOKEN, LG_AGEID: storedUser.LG_AGEID, DT_BEGIN: "2020-01-01", DT_END: "2027-08-31" }, apiUrl, setEventData);
        }
    }, [navigate]);

    const handleSearch = (e) => {
        const value = e.target.value.toLowerCase();
        setSearchTerm(value);

        const filtered = eventData.filter((event) => {
            return (
                (event.STR_LSTDESCRIPTION && event.STR_LSTDESCRIPTION.toLowerCase().includes(value)) ||
                (event.STR_EVENAME && event.STR_EVENAME.toLowerCase().includes(value)) ||
                (event.STR_LSTDESCRIPTION_OTHER && event.STR_LSTDESCRIPTION_OTHER.toLowerCase().includes(value))
            );
        });

        setFilteredData(filtered);
        setCurrentPage(1);  // Reset à la première page après la recherche
    };

    const actions = [
        // {
        //   title: 'Voir',
        //   icon: 'fa-eye',
        //   handler: (id) => console.log(`Voir ${id}`),
        // },
        {
          title: 'Modifier',
          icon: 'fa-edit ',
          styleClass:"text-warning",
          handler: (LG_EVEID) => {
            navigate('/save-event', { state: { LG_EVEID } });   // Redirige vers la page de modification en passant l'ID
          }
        },
        {
          title: 'Supprimer',
          icon: 'fa-trash',
          styleClass:"text-danger",
          handler: (LG_EVEID) => {
            if (user) {
                Swal.fire({
                    title: 'Êtes-vous sûr de vouloir effectuer la supression de l\'évenement ?' + LG_EVEID,
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonText: 'Oui',
                    cancelButtonText: 'Annuler',
                    reverseButtons: true
                }).then((result) => {
                    if (result.isConfirmed) {
                        crudData({ mode: 'deleteEvenement', LG_EVEID: LG_EVEID,STR_EVESTATUT: 'delete', STR_UTITOKEN:user.STR_UTITOKEN }, apiUrl)
                            .then(() => {

                                fetchData({ mode: 'listEvenement', STR_UTITOKEN: user.STR_UTITOKEN, DT_BEGIN: "2020-01-01", DT_END: "2025-08-31" }, apiUrl, setEventData);

                            })
                            .catch(error => console.error('Erreur lors de la suppression:', error));
                    }
                });
            }
        }
        },
        {
          title: 'Activer/Désactiver',
          icon: 'fa-ban', // ou fa-check selon l'état
          styleClass:"text-primary",
          handler: (LG_EVEID, STR_EVESTATUT, isActive) => {

            alert(STR_EVESTATUT);
            
            const action = STR_EVESTATUT === 'enable' ? 'disable' : 'enable';
            Swal.fire({
                title: `Êtes-vous sûr de vouloir ${isActive ? 'désactiver' : 'activer'} cet événement ?`,
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Oui',
                cancelButtonText: 'Annuler',
                reverseButtons: true
            }).then((result) => {
                if (result.isConfirmed) {
                    crudData({
                        mode: 'deleteEvenement',
                        LG_EVEID: LG_EVEID,
                        STR_EVESTATUT: action,
                        STR_UTITOKEN: user.STR_UTITOKEN,
                    }, apiUrl)
                    .then(response => {
                        if (response.data.code_statut === "1") {
                            fetchData({ mode: 'listEvenement', STR_UTITOKEN: user.STR_UTITOKEN, DT_BEGIN: "2020-01-01", DT_END: "2025-08-31" }, apiUrl, setEventData);

                        } else {
                            Swal.fire('Erreur', 'Le changement de statut a échoué.', 'error');
                        }
                    })
                    .catch(error => {
                        console.error('Erreur lors du changement de statut:', error);
                        Swal.fire('Erreur', 'Une erreur est survenue. Veuillez réessayer.', 'error');
                    });
                }
            });
        },
        },
      ];

    return (
        <>
        
            <div className="app-main flex-column flex-row-fluid" id="kt_app_main">
                <div className="d-flex flex-column flex-column-fluid">
                    <div id="kt_app_content" className="app-content flex-column-fluid">
                        <div id="kt_app_content_container" className="app-container container-fluid">
                            <div>
                                <div className='row'>
                                    <div className='col-lg-12'>
                                    </div>

                                    <div className='col-lg-12'>
                                        <div className="card mb-7">
                                        <DataTable
                                                columns={columns}
                                                data={eventData}
                                                itemsPerPageOptions={[2,5, 10, 15]}
                                                defaultItemsPerPage={10}
                                                // filterOptions={filterOptions}
                                                // dateFilters={{ startDate: '', endDate: '' }}
                                                actions = {actions}
                                                idKey="LG_EVEID"
                                                statusKey="STR_EVESTATUT"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
        
    );
};

export default ListeEvent;