import React, { useEffect, useState } from 'react';
import { crudData } from '../../services/apiService';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import Dropdown from 'react-bootstrap/Dropdown';
import DataTable from '../DataTable';

const ListeBanner = () => {
    // Définition des colonnes pour le tableau
    const columns = [
        {
            title: 'Photo',
            dataKey: 'STR_BANPATH',
            className: 'w-250px',
            render: (imagePath) => {
                // Génère l'URL complète de l'image
                const imageUrl = `${process.env.REACT_APP_BACKEND_URL}${imagePath.STR_BANPATH}`;
                console.log('Image URL:', imagePath.STR_BANPATH);
                return (
                    <img 
                        src={imageUrl} 
                        alt="Bannière" 
                        style={{ width: 'auto', height: '40px' }} 
                    />
                );
            }
        },
        { title: 'Titre de la bannière', dataKey: 'STR_BANNAME', className: 'w-250px' },
        { title: 'Description', dataKey: 'STR_BANDESCRIPTION', className: 'w-650px' },
        {
            title: 'Statut',
            dataKey: 'STR_BANSTATUT',
            className: 'w-50px',
            render: (status) => {
                let badgeClass = 'badge-light-warning';
                let statusText = status.STR_BANSTATUT;

                if (typeof status === 'string') {
                    switch (status.STR_BANSTATUT) {
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

    // Options de filtre pour la table (exemple de structure, non utilisée ici)
    const filterOptions = {
        category: ['Category1', 'Category2', 'Category3'],
        status: ['Active', 'Inactive']
    };

    // États de composant
    const [searchTerm, setSearchTerm] = useState('');
    const [eventData, setEventData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    // Fonction pour récupérer les données depuis l'API
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

    // Chargement initial des données et vérification de l'utilisateur connecté
    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem('userConnectedData'));
        const paths = JSON.parse(localStorage.getItem("appPaths"));

        if (!storedUser) {
            navigate(paths.signIn); // Redirige vers la page de connexion si aucun utilisateur connecté
        } else {
            setUser(storedUser);
            fetchData({ 
                mode: 'listBanniere', 
                STR_UTITOKEN: storedUser.STR_UTITOKEN, 
                LG_AGEID: storedUser.LG_AGEID, 
                DT_BEGIN:  process.env.REACT_APP_DT_BEGIN, 
                DT_END:  process.env.REACT_APP_DT_END 
            }, process.env.REACT_APP_CONFIGURATION_MANAGER_API_URL, setEventData);
        }
    }, [navigate]);

    // Gestion de la recherche
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
        setCurrentPage(1);  // Réinitialise à la première page après la recherche
    };

    // Actions disponibles sur les bannières
    const actions = [
        {
            title: 'Modifier',
            icon: 'fa-edit',
            styleClass: "text-warning",
            handler: (LG_BANID) => {
                navigate('/save-banner', { state: { LG_BANID } });
            }
        },
        {
            title: 'Supprimer',
            icon: 'fa-trash',
            styleClass: "text-danger",
            handler: (LG_BANID) => {
                if (user) {
                    Swal.fire({
                        title: `Êtes-vous sûr de vouloir supprimer la bannière ${LG_BANID} ?`,
                        icon: 'warning',
                        showCancelButton: true,
                        confirmButtonText: 'Oui',
                        cancelButtonText: 'Annuler',
                        reverseButtons: true
                    }).then((result) => {
                        if (result.isConfirmed) {
                            crudData({ 
                                mode: 'updateBanniereStatut', 
                                LG_BANID: LG_BANID, 
                                STR_BANSTATUT: 'delete', 
                                STR_UTITOKEN: user.STR_UTITOKEN 
                            }, process.env.REACT_APP_CONFIGURATION_MANAGER_API_URL)
                                .then(() => {
                                    fetchData({ 
                                        mode: 'listBanniere', 
                                        STR_UTITOKEN: user.STR_UTITOKEN, 
                                        LG_AGEID: user.LG_AGEID, 
                                        DT_BEGIN:  process.env.REACT_APP_DT_BEGIN, 
                                        DT_END:  process.env.REACT_APP_DT_END 
                                    }, process.env.REACT_APP_CONFIGURATION_MANAGER_API_URL, setEventData);
                                })
                                .catch(error => console.error('Erreur lors de la suppression:', error));
                        }
                    });
                }
            }
        },
        {
            title: 'Activer/Désactiver',
            icon: 'fa-ban',
            styleClass: "text-primary",
            handler: (LG_BANID, STR_BANSTATUT, isActive) => {
                const action = STR_BANSTATUT === 'enable' ? 'disable' : 'enable';

                Swal.fire({
                    title: `Êtes-vous sûr de vouloir ${isActive ? 'désactiver' : 'activer'} cette bannière ?`,
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonText: 'Oui',
                    cancelButtonText: 'Annuler',
                    reverseButtons: true
                }).then((result) => {
                    if (result.isConfirmed) {
                        crudData({
                            mode: 'updateBanniereStatut',
                            LG_BANID: LG_BANID,
                            STR_EVESTATUT: action,
                            STR_UTITOKEN: user.STR_UTITOKEN
                        }, process.env.REACT_APP_CONFIGURATION_MANAGER_API_URL)
                        .then(response => {
                            if (response.data.code_statut === "1") {
                                fetchData({ 
                                    mode: 'listBanniere', 
                                    STR_UTITOKEN: user.STR_UTITOKEN, 
                                    LG_AGEID: user.LG_AGEID, 
                                    DT_BEGIN:  process.env.REACT_APP_DT_BEGIN, 
                                    DT_END:  process.env.REACT_APP_DT_END 
                                }, process.env.REACT_APP_CONFIGURATION_MANAGER_API_URL, setEventData);
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
            }
        }
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
                                                idKey="LG_BANID"
                                                statusKey="STR_BANSTATUT"
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

export default ListeBanner;