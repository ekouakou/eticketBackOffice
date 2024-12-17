import React, { useEffect, useState } from 'react';
import { crudData } from '../../services/apiService';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import Dropdown from 'react-bootstrap/Dropdown';
import DataTable from './DataTable';


const ListeUtilisateur = () => {
    const urlBaseImage = localStorage.getItem("urlBaseImage");
    const paths = JSON.parse(localStorage.getItem("appPaths"));

    const columns = [
        {
            title: 'Photo',
            dataKey: 'STR_UTIPIC',
            className: 'w-250px',
            render: (imagePath) => {
                // Assurez-vous que imagePath est bien une chaîne de caractères
                const imageUrl = `${urlBaseImage + imagePath.STR_UTIPIC}`;
                console.log('Image URL:', imagePath.STR_UTIPIC); // Vérifiez l'URL complète
                return (
                    <img 
                        src={imageUrl} 
                        alt="Utilisateur" 
                        style={{ width: 'auto', height: '40px' }} 
                    />
                );
            }
        },
        // { title: 'DT_UTICREATED', dataKey: 'DT_UTICREATED', className: 'w-150px' },
        // { title: 'LG_AGEID', dataKey: 'LG_AGEID', className: 'min-w-100px' },
        // { title: 'LG_PROID', dataKey: 'LG_PROID', className: 'text-center' },
        { title: 'Nom et prénom', dataKey: 'STR_UTIFIRSTLASTNAME', className: 'w-250px' },
        { title: 'Login', dataKey: 'STR_UTILOGIN', className: 'w-150px' },
        { title: 'Email', dataKey: 'STR_UTIMAIL', className: 'min-w-100px' },
        { title: 'Téléphone', dataKey: 'STR_UTIPHONE', className: 'text-center' },
        
        {
            title: 'Statut',
            dataKey: 'STR_UTISTATUT',
            className: 'w-250px',
            render: (status) => {
                let badgeClass = 'badge-light-warning'; // Par défaut
                let statusText = status.STR_UTISTATUT; // Valeur par défaut
                console.log(status.STR_UTISTATUT);

                if (typeof status === 'string') {
                    statusText = status;
                    // Définir les classes selon le statut
                    switch (status.STR_UTISTATUT) {
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
                        {statusText}
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

    const apiUrl = "ConfigurationManager.php";
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
            fetchData({ mode: 'listUtilisateur', STR_UTITOKEN: storedUser.STR_UTITOKEN, LG_PROID: storedUser.LG_PROID}, apiUrl, setEventData);
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
          handler: (LG_UTIID) => {
            navigate('/save-utilisateur', { state: { LG_UTIID } });  // Redirige vers la page de modification en passant l'ID
            }
        },
        {
          title: 'Supprimer',
          icon: 'fa-trash',
          styleClass:"text-danger",
          handler: (LG_UTIID) => {
            if (user) {
                Swal.fire({
                    title: 'Êtes-vous sûr de vouloir effectuer la supression de l\'évenement ?' + LG_UTIID,
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonText: 'Oui',
                    cancelButtonText: 'Annuler',
                    reverseButtons: true
                }).then((result) => {
                    if (result.isConfirmed) {
                        crudData({ mode: 'deleteUtilisateur', LG_UTIID: LG_UTIID, STR_EVESTATUT: 'delete', STR_UTITOKEN: user.STR_UTITOKEN }, apiUrl)
                            .then(() => {
                                fetchData({ mode: 'listUtilisateur', STR_UTITOKEN: user.STR_UTITOKEN, LG_PROID: user.LG_PROID}, apiUrl, setEventData);
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
          handler: (LG_UTIID, STR_EVESTATUT, isActive) => {
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
                        LG_UTIID: LG_UTIID,
                        STR_EVESTATUT: action,
                        STR_UTITOKEN: user.STR_UTITOKEN,
                    }, apiUrl)
                    .then(response => {
                        if (response.data.code_statut === "1") {
                            fetchData({ mode: 'listUtilisateur', STR_UTITOKEN: user.STR_UTITOKEN, LG_PROID: user.LG_PROID}, apiUrl, setEventData);
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
                                                idKey="LG_UTIID"
                                                statusKey="STR_UTISTATUT"
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

export default ListeUtilisateur;