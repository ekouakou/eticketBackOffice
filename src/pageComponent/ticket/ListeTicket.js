import React, { useEffect, useState } from 'react';
import { crudData } from '../../services/apiService';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import Dropdown from 'react-bootstrap/Dropdown';
import DataTableStyle2 from '../DataTableStyle2';


const ListeTicket = () => {
    const urlBaseImage = localStorage.getItem("urlBaseImage");
    const paths = JSON.parse(localStorage.getItem("appPaths"));
    const actionDropdownMenu = true;

    const columns = [
        {
          title: 'Name',
          field: 'STR_EVENAME',
          className: 'p-0 min-w-200px',
          render: (value, item) => (
            <div className="d-flex align-items-center">
              <div className="symbol symbol- symbol-40px me-3">
                <img src={urlBaseImage +  item.STR_EVEPIC} alt={value} />
              </div>
              <div className="d-flex justify-content-start flex-column">
                <a href={item.STR_EVENAME} className="text-gray-800 fw-bold text-hover-primary mb-1 fs-6">
                  {value}
                </a>
                <span className="text-gray-500 fw-semibold d-block fs-7">{item.STR_TICNAME}</span>
              </div>
            </div>
          ),
        },
        {
        //   title: 'Agence / Profil',
          field: 'STR_TICNAME',
          className: 'p-0 min-w-150px text-start',
          render: (value, item) => (
            <div className="">
              {/* <div className="symbol symbol- symbol-40px me-3">
                <img src={urlBaseImage +  item.STR_UTIPIC} alt={value} />
              </div> */}
              <div className="d-flex justify-content-start flex-column">
                <a href={item.STR_TICNAME} className="text-gray-800 fw-bold text-hover-primary mb-1 fs-6">
                  {value}
                </a>
                <span className="text-gray-500 fw-semibold d-block fs-7">N° du ticket</span>
              </div>
            </div>
          ),
        },
        {
        //   title: 'Agence / Profil',
            field: 'STR_TICPHONE',
            className: 'p-0 min-w-150px text-start',
            render: (value, item) => (
            <div className="">
                {/* <div className="symbol symbol- symbol-40px me-3">
                <img src={urlBaseImage +  item.STR_UTIPIC} alt={value} />
                </div> */}
                <div className="d-flex justify-content-start flex-column">
                <a href={item.STR_TICPHONE} className="text-gray-800 fw-bold text-hover-primary mb-1 fs-6">
                    {value}
                </a>
                <span className="text-gray-500 fw-semibold d-block fs-7">Client</span>
                </div>
            </div>
            ),
        },{
        //   title: 'Agence / Profil',
            field: 'STR_EVEANNONCEUR',
            className: 'p-0 min-w-150px text-start',
            render: (value, item) => (
            <div className="">
                {/* <div className="symbol symbol- symbol-40px me-3">
                <img src={urlBaseImage +  item.STR_UTIPIC} alt={value} />
                </div> */}
                <div className="d-flex justify-content-start flex-column">
                <a href={item.STR_EVEANNONCEUR} className="text-gray-800 fw-bold text-hover-primary mb-1 fs-6">
                    {value}
                </a>
                <span className="text-gray-500 fw-semibold d-block fs-7">Annoncer</span>
                </div>
            </div>
            ),
        },
        {
            title: 'Date d\'achat',
            field: 'DT_TCICREATED',
            className: 'p-0 min-w-150px text-start text-gray-800 fw-bold ',
        },


        
        {
        //   title: 'Earnings',
          field: 'DT_TCIVALIDATED',
          className: 'p-0 min-w-125px text-start',
          render: (value, item) => (
            <div className="">
              {/* <div className="symbol symbol- symbol-40px me-3">
                <img src={urlBaseImage +  item.STR_UTIPIC} alt={value} />
              </div> */}
              <div className="d-flex justify-content-start flex-column">
                <a href={item.DT_TCIVALIDATED} className="text-gray-800 fw-bold text-hover-primary mb-1 fs-6">
                  {value}
                </a>
                <span className="text-gray-500 fw-semibold d-block fs-7">{item.LG_TICID} </span>
              </div>
            </div>
          ),
        },
        // {
        //   title: 'Rating',
        //   field: 'STR_UTIFIRSTLASTNAME',
        //   className: 'p-0 min-w-125px text-end',
        //   render: (value) => (
        //     <div className="rating">
        //       {[...Array(5)].map((_, index) => (
        //         <div key={index} className={`rating-label ${index < value ? 'checked' : ''}`}>
        //           <i className="ki-duotone ki-star fs-6" />
        //         </div>
        //       ))}
        //     </div>
        //   ),
        // },
      ];
      

    const columnss = [
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
            //fetchData({ mode: 'listUtilisateur', STR_UTITOKEN: storedUser.STR_UTITOKEN, LG_PROID: storedUser.LG_PROID}, apiUrl, setEventData);
            fetchData({ mode: 'listTicket', STR_UTITOKEN: storedUser.STR_UTITOKEN, LG_AGEREQUESTID: storedUser.LG_AGEREQUESTID, DT_BEGIN: "2020-01-01", DT_END: "2027-08-31" }, apiUrl, setEventData);
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
          icon: 'fas fa-eye ',
          styleClass:"text-warning",
          handler: (LG_UTIID) => {
            navigate('/detail-ticket', { state: { LG_UTIID } });  // Redirige vers la page de modification en passant l'ID
            }
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
                                        <DataTableStyle2
                                                columns={columns}
                                                data={eventData}
                                                itemsPerPageOptions={[2,5, 10, 15]}
                                                defaultItemsPerPage={10}
                                                actionDropdownMenu = {false}
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

export default ListeTicket;