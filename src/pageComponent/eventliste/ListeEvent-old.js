import React, { useEffect, useState, useContext } from 'react';
import { crudData } from '../../services/apiService';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle, faThumbsUp, faThumbsDown, faShare, faEllipsisH, faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { Card, Dropdown, Pagination } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { EventContext } from '../../contexts/EventProvider';

import { DataGrid } from '@mui/x-data-grid';


import {
    handleCreate,
    handleUpdate,
    handleDelete,
    handleInputChange,
    handleFileChange
  } from '../../utils/formHandlers';

  const ListeEvent = () => {
    const apiUrl = "TicketManager.php";
    const [eventData, setEventData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState('');
    const itemsPerPage = 4;
  
    const { setSelectedEvent } = useContext(EventContext);
    const navigate = useNavigate();
    const [previewPic, setPreviewPic] = useState('');
    const [previewBanner, setPreviewBanner] = useState('');
    const [userData, setUserData] = useState(null);
  
    useEffect(() => {
      const user = JSON.parse(localStorage.getItem('userConnectedData'));
      if (!user) {
        navigate(paths.signIn); // Redirige vers la page d'accueil si l'utilisateur est vide
      } else {
        setUserData(user);
      }
    }, [navigate]);
  
    useEffect(() => {
      if (userData && userData.UTITOKEN) { // Vérifiez que userData et UTITOKEN sont définis
        fetchData({ mode: 'listEvenement', STR_UTITOKEN: userData.UTITOKEN, DT_BEGIN: "2024-01-01", DT_END: "2024-07-01" }, apiUrl, setEventData);
      }
    }, [userData, apiUrl]);
  
    const refreshData = () => {
      if (userData && userData.UTITOKEN) { // Assurez-vous que userData et UTITOKEN sont définis avant de rafraîchir les données
        fetchData({ mode: 'listEvenement', STR_UTITOKEN: userData.UTITOKEN, DT_BEGIN: "2024-01-01", DT_END: "2024-07-01" }, apiUrl, setEventData);
      }
    };
  
    const fetchData = (params, url, setData) => {
      crudData(params, url)
        .then(response => {
          setData(response.data.data);
        })
        .catch(error => {
          console.error('Erreur lors de la récupération des données:', error);
        });
    };
  
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = eventData
      .filter(event => event.STR_EVENAME.toLowerCase().includes(searchTerm.toLowerCase()))
      .slice(indexOfFirstItem, indexOfLastItem);
  
    const paginate = (pageNumber) => setCurrentPage(pageNumber);
  
    const [showMenuIndex, setShowMenuIndex] = useState(-1);
  
    const toggleMenu = (index) => {
      setShowMenuIndex(showMenuIndex === index ? -1 : index);
    };
  
    const handleEdit = (event) => {
      setSelectedEvent(event);
      navigate('/dashboard');
    };
  
    if (!userData || !userData.UTITOKEN) {
      return null; // Ou afficher un message d'erreur ou une indication de chargement
    }



    const columns = [
      { field: 'id', headerName: 'ID', width: 90 },
      { field: 'firstName', headerName: 'First name', width: 150, editable: true },
      { field: 'lastName', headerName: 'Last name', width: 150, editable: true },
      { field: 'age', headerName: 'Age', type: 'number', width: 110, editable: true },
      // { field: 'fullName', headerName: 'Full name', description: 'This column has a value getter and is not sortable.', sortable: false, width: 160, valueGetter: (params) => `${params.row.firstName || ''} ${params.row.lastName || ''}` },
    ];
    
    const rows = [
      { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
      { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
      { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
      { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
      { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
      { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
      { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
      { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
      { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    ];



  return (
    <>




<div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>


      <div className="app-main flex-column flex-row-fluid " id="kt_app_main">
        <div className="d-flex flex-column flex-column-fluid">
          <div id="kt_app_content" className="app-content  flex-column-fluid ">
            <div id="kt_app_content_container" className="app-container  container-fluid ">
            
              <div>
                <div className='row'>
                  <div className='col-lg-12'>
                    <form action="#">
                      <div className="card mb-7">
                        <div className="card-body">
                          <div className="d-flex align-items-center">
                            <div className="position-relative w-md-400px me-md-2">
                              <i className="ki-duotone ki-magnifier fs-3 text-gray-500 position-absolute top-50 translate-middle ms-6">
                                <span className="path1"></span>
                                <span className="path2"></span>
                              </i>
                              <input
                                type="text"
                                className="form-control form-control-solid ps-10"
                                name="search"
                                placeholder="Search"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                              />
                            </div>
                            <div className="d-flex align-items-center">
                              <button type="submit" className="btn btn-primary me-5">
                                Search
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>

                  <div className='row'>
                    {currentItems.map((event, index) => (
                      <div className='col-lg-3' key={event.LG_EVEID}>
                        <Card className="h-md-100">
                          <Card.Header className="d-flex justify-content-between align-items-center">
                            <h2 className="mb-0">Event Details</h2>
                            <div className="d-flex align-items-center">
                              <Dropdown.Toggle variant="link" className="btn-icon btn-color-gray-500 btn-light visibility-none"/>
                              <FontAwesomeIcon
                                icon={faEllipsisH}
                                className="text-muted pull-right"
                                onClick={() => toggleMenu(index)}
                              />
                            </div>
                          </Card.Header>
                          {showMenuIndex === index && (
                            <Dropdown show={true} >
                              <Dropdown.Menu className="menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-semibold w-200px px-3">
                                <Dropdown.Header className="menu-content fs-6 text-gray-900 fw-bold px-3 py-4">Actions</Dropdown.Header>
                                <div className='menu-item'>
                                  <Dropdown.Divider className="separator mb-3 opacity-75" />
                                  <Dropdown.Item className="menu-link px-3" onClick={() => handleEdit(event)}>
                                    <FontAwesomeIcon icon={faEdit} style={{ cursor: 'pointer' }} /> Modifier
                                  </Dropdown.Item>
                                  <Dropdown.Item className="menu-link px-3">
                                    <a href="#0" className="remove-btn" onClick={() => handleDelete(
                                        { mode: 'deleteEvenement', LG_EVEID: event.LG_EVEID, STR_UTITOKEN: userData.UTITOKEN },
                                        apiUrl,
                                        refreshData)
                                    }>
                                      <FontAwesomeIcon icon={faTrashAlt} style={{ cursor: 'pointer' }} /> Supprimer
                                    </a>
                                  </Dropdown.Item>
                                  <Dropdown.Item className="menu-link px-3">Détail</Dropdown.Item>
                                  <Dropdown.Divider className="separator mt-3 opacity-75" />
                                </div>
                                <Dropdown.Item className="menu-item px-3">
                                  <a className="btn btn-primary btn-sm px-4" href="#">Generate Reports</a>
                                </Dropdown.Item>
                              </Dropdown.Menu>
                            </Dropdown>
                          )}
                          <Card.Body>
                            <div className="bgi-no-repeat bgi-position-center bgi-size-cover card-rounded min-h-250px" style={{ backgroundImage: `url(${event.STR_EVEPIC || 'assets/media/svg/files/blank-image.svg'})` }}></div>
                            <div className="p-3">
                              <h5 className="card-title">{event.STR_EVENAME}</h5>
                              <p className="card-text">{event.STR_EVEDESCRIPTION}</p>
                              <div className="social-and-duration mt-1">
                                <div className="duration-area row">
                                  <div className="col-lg-12 fs-12 lh-2">
                                    <i className="fas fa-calendar-alt text-danger"></i>
                                    <span>{event.DT_EVEBEGIN}</span> &nbsp; | &nbsp; <i className="far fa-clock"></i><span> {event.DT_EVEEND}</span>
                                  </div>
                                  <div className="col-lg-12 fs-12 lh-2">
                                    <i className="fas fa-calendar-alt text-danger"></i>
                                    <span>{event.HR_EVEBEGIN}</span> &nbsp; | &nbsp; <i className="far fa-clock"></i><span> {event.HR_EVEEND}</span>
                                  </div>
                                  <div className="col-lg-12 fs-12 lh-2">
                                    <i className="fas fa-map-pin"></i><span> {event.STR_EVEPLACE}</span>
                                  </div>
                                </div>
                              </div>
                              <div className="d-flex justify-content-between">
                                <div>
                                  <button className="btn btn-light">
                                    <FontAwesomeIcon icon={faThumbsUp} /> 1.2K
                                  </button>
                                  <button className="btn btn-light">
                                    <FontAwesomeIcon icon={faThumbsDown} /> 100
                                  </button>
                                </div>
                                <div>
                                  <button className="btn btn-light">
                                    <FontAwesomeIcon icon={faShare} />
                                  </button>
                                  <button className="btn btn-light">
                                    <FontAwesomeIcon icon={faEllipsisH} />
                                  </button>
                                </div>
                              </div>
                            </div>
                          </Card.Body>
                        </Card>
                      </div>
                    ))}
                  </div>

                  <div className='col-lg-12 mt-4'>
                    <Pagination>
                      {eventData.map((event, index) => (
                        <Pagination.Item key={index} active={index + 1 === currentPage} onClick={() => paginate(index + 1)}>
                          {index + 1}
                        </Pagination.Item>
                      ))}
                    </Pagination>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


        
        {/*end::Footer*/}{" "}
      </div>
    </>
  );
};

export default ListeEvent;
