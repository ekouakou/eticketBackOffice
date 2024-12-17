import React, { useContext, useEffect, useState } from 'react';
import { crudData } from '../../services/apiService';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import Dropdown from 'react-bootstrap/Dropdown';

const ITEMS_PER_PAGE = 5; // Nombre d'éléments par page

const ListeClient = () => {
    const apiUrl = "ConfigurationManager.php";
    const urlBaseImage  = localStorage.getItem("urlBaseImage");
    const paths = JSON.parse(localStorage.getItem("appPaths"));
    const [searchTerm, setSearchTerm] = useState('');
    const [eventData, setEventData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
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
        const user = JSON.parse(localStorage.getItem('userConnectedData'));
        if (!user) {
            navigate(paths.signIn); // Redirige vers la page d'accueil si l'utilisateur est vide
        } else {
            fetchData({ mode: 'listBanniere', STR_UTITOKEN: user.STR_UTITOKEN, LG_AGEID: user.LG_AGEID, DT_BEGIN: "2020-01-01", DT_END: "2027-08-31" }, apiUrl, setEventData);
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


    const handleEdit = (LG_EVEID) => {
        navigate('/detail-client', { state: { LG_EVEID } });
    };

    // Pagination
    const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
    const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
    const currentData = filteredData.slice(indexOfFirstItem, indexOfLastItem);

    const renderPagination = () => {
        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(filteredData.length / ITEMS_PER_PAGE); i++) {
            pageNumbers.push(i);
        }

        return (
            <nav>
                <ul className="pagination">
                    {pageNumbers.map(number => (
                        <li key={number} className="page-item">
                            <button onClick={() => setCurrentPage(number)} className="page-link">
                                {number}
                            </button>
                        </li>
                    ))}
                </ul>
            </nav>
        );
    };

    return (
        <>
            <div className="app-main flex-column flex-row-fluid" id="kt_app_main">
                        <div className="d-flex flex-column flex-column-fluid">
                            <div id="kt_app_content" className="app-content flex-column-fluid">
                                <div id="kt_app_content_container" className="app-container container-fluid">
                                    <div>
                                        <div className='row'>
                                            <div className='col-lg-12'>
                                                <form action="#">
                                                    <div className="card mb-7">
                                                        <div className="card-body">
                                                            <div className="d-flex align-items-center">
                                                                <div className="position-relative w-md-400px me-md-2">
                                                                    <i className="ki-duotone ki-magnifier fs-3 text-gray-500 position-absolute top-50 translate-middle ms-6"></i>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control form-control-solid ps-10"
                                                                        name="search"
                                                                        placeholder="Search"
                                                                        value={searchTerm}
                                                                        onChange={handleSearch}
                                                                    />
                                                                </div>
                                                                <div className="d-flex align-items-center">
                                                                    <button type="button" className="btn btn-primary me-5">
                                                                        Search
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>

                                            <div className='col-lg-12'>
                                                <div className="card mb-7">
                                                    <div className="card-body">
                                                        <div className="row">
                                                            {currentData.map((event, index) => (

                                                                <>
                                                                    <div className="card card-dashed h-xl-100 flex-row flex-stack flex-wrap p-6 mb-10">
                                                                        <div className="d-flex flex-column py-2">
                                                                            <div className="d-flex align-items-center">
                                                                            <img src={urlBaseImage +"/" + event.STR_BANPATH} width={80} alt="" className="me-4" />
                                                                            <div>
                                                                                <div className="fs-4 fw-bold">{event.STR_BANNAME}</div>
                                                                                <div className="fs-6 fw-semibold text-gray-500">
                                                                                Email : {event.STR_BANNAME}
                                                                                </div>
                                                                                <div className="fs-6 fw-semibold text-gray-500">
                                                                                Tél. : {event.STR_BANNAME}
                                                                                </div>
                                                                                <div className="fs-6 fw-semibold text-gray-500">
                                                                                Date d'inscription :    {event.DT_BANBEGIN}
                                                                                </div>
                                                                            </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="d-flex align-items-center py-2">
                                                                            <Dropdown>
                                                                                <Dropdown.Toggle variant="light" id="dropdown-basic">
                                                                                    <i className="fas fa-edit fs-1x"></i>
                                                                                </Dropdown.Toggle>
                                                                                <Dropdown.Menu>
                                                                                    <Dropdown.Item onClick={() => handleEdit(event.LG_BANID)}>
                                                                                        <i className="fas fa-edit me-2"></i> Detail
                                                                                    </Dropdown.Item>
                                                                                </Dropdown.Menu>
                                                                            </Dropdown>
                                                                        </div>
                                                                    </div>
                                                                </>
                                                            ))}
                                                        </div>
                                                        {renderPagination()}
                                                    </div>
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

export default ListeClient;
