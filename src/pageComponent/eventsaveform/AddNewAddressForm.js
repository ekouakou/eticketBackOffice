import React, { useContext, useEffect, useState, useCallback } from 'react';
import Switch from 'react-switch';
import { toast, ToastContainer } from 'react-toastify';
import Tippy from '@tippyjs/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTrash, faInfoCircle, faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import { EventContext } from '../../contexts/EventProvider';
import { handleCreate, handleUpdate, handleToggleSwitch } from '../../utils/formHandlers';
import { useNavigate } from 'react-router-dom';
import { crudData } from '../../services/apiService';
import { Modal, Button, Form } from 'react-bootstrap';
import FileUploader from './FileUploader'
import EventSummary from './EventSummary'
import Swal from 'sweetalert2'; // Importation de la bibliothèque pour afficher des boîtes de dialogue



import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import TextField from '@mui/material/TextField';
import { format } from 'date-fns';
import Select from 'react-select'

import { useLocation } from 'react-router-dom';
import { Calendar } from 'primereact/calendar';

const AddNewAddressForm = () => {
  const { selectedEvent } = useContext(EventContext);
  const [eventDetails, setEventDetails] = useState(null);
  const [requestResponse, setRequestResponse] = useState(null);
  const [categories, setCategories] = useState([{ LG_LSTID: '', INT_ELINUMBER: '', INT_ELINUMBERMAX: '', DBL_ELIAMOUNT: '' }]);
  const [ticketCategories, setTicketCategories] = useState([]);
  const [typeActivite, setTypeActiviteData] = useState([]);
  
  const [showSeat, setShowSeat] = useState(false);

  const [showPrice, setShowPrice] = useState(true);
  const [showBanner, setShowBanner] = useState(false);
  const [previewPic, setPreviewPic] = useState(null);
  const [previewAnnoncerPic, setPreviewAnnonceurPic] = useState(null);

  const [previewBanner, setPreviewBanner] = useState(null);
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();

  const [categorieData, setcategorieData] = useState([]);
  const [lieuActiviteData, setlieuActiviteData] = useState([]);

  const apiUrl = "TicketManager.php";
  const apiCategorieTicketUrl = "ConfigurationManager.php";
  const urlBaseImage  = localStorage.getItem("urlBaseImage");

  const [showModal, setShowModal] = useState(false);


  const handleEditClick = (ticket) => {
    //setSelectedTicket(ticket); // Mettez à jour l'état avec l'élément cliqué
    setShowModal(true);
  };

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('userConnectedData'));
    const paths = JSON.parse(localStorage.getItem("appPaths"));
    if (!user) {
      navigate(paths.signIn);
    } else {
      setUserData(user);
    }
  }, [navigate]);


  const [formData, setFormData] = useState({
    STR_EVENAME: '', LG_LSTPLACEID: '', DT_EVEBEGIN: '',  DT_BANBEGIN: '',  DT_BANEND: '',    STR_EVEDESCRIPTION: '', STR_LSTDESCRIPTION_OTHER:'', LG_LSTID:"",
    HR_EVEBEGIN: '', DT_EVEEND: '', HR_EVEEND: '', STR_EVEANNONCEUR: '', STR_ANNONCEUR:"",
    LG_AGEID: userData?.LG_AGEID || 1, LG_AGEREQUESTID: userData?.LG_AGEID || 1, STR_EVESTATUTFREE: 1,
    STR_EVETOBANNER:0, STR_EVEDISPLAYROOM: 0,
    STR_EVEBANNER: null, STR_EVEPIC: null, STR_EVEANNONCEURPIC: null
  });


  const resetForm = () => {
    setFormData({
      STR_EVENAME: '', LG_LSTPLACEID: '', DT_EVEBEGIN: '', HR_EVEBEGIN: '', DT_EVEEND: '',   DT_BANBEGIN: '',  DT_BANEND: '',  HR_EVEEND: '',
      STR_EVEANNONCEUR: '', STR_EVEDESCRIPTION: '', mode: 'createEvenement', STR_LSTDESCRIPTION_OTHER:'', LG_LSTID:"", STR_ANNONCEUR:'',
      STR_UTITOKEN: userData?.STR_UTITOKEN || '',
      STR_EVETOBANNER:0, STR_EVEDISPLAYROOM: 0,
      STR_EVESTATUTFREE: 1, LG_AGEREQUESTID: userData?.LG_AGEID || 1, LG_AGEID: userData?.LG_AGEID || 1,
      STR_EVEBANNER: null, STR_EVEPIC: null, STR_EVEANNONCEURPIC: null
    });

    setCategories([]);
    setPreviewPic(null);
    setPreviewAnnonceurPic(null);
    setPreviewBanner(null);
  };

  useEffect(() => {
    if (!showBanner) {
      setPreviewBanner(null);
      setFormData(prevData => ({
        ...prevData,
        STR_EVEBANNER: null
      }));
    }
  }, [showBanner]);


  // ++++++++++++++++++++++++++++++++++++++++++ CONVERTION DES DATE ET HEURE ++++++++++++++++++++++++++++++++++++++++++

  const formatDate = (date) => {
    return format(date, 'yyyy-MM-dd');
  };

  const formatTime = (date) => {
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
  };

  const convertTimeToFullDate = (timeString) => {
    const [hours, minutes] = timeString.split(':').map(Number);
    const currentDate = new Date(); // Utilisez la date actuelle ou une autre date spécifique
    currentDate.setHours(hours, minutes, 0, 0); // Réglez les heures et les minutes
    
    return currentDate;
  };

  const convertToFullDate = (dateString, timeString = '00:00') => {
    if (!dateString || !timeString) {
      console.error("Date or time string is undefined:", { dateString, timeString });
      return null; // or handle the error as needed
    }
  
    const [day, month, year] = dateString.split('/').map(Number);
    const [hours, minutes] = timeString.split(':').map(Number);
    const fullDate = new Date(year, month - 1, day, hours, minutes, 0);
  
    return fullDate;
  };
  


   // ++++++++++++++++++++++++++++++++++++++++++ FONCTION GLOBALLE ++++++++++++++++++++++++++++++++++++++++++

  const fetchData = (params, url, setData) => {
    crudData(params, url)
      .then(response => {
        setData(response.data.data);
      })
      .catch(error => {
        console.error('Erreur lors de la récupération des données:', error);
      });
  };

  const loadStore = (params, url, setData) => {
    crudData(params, url)
      .then(response => {
        const data = response.data.data;
        const mappedOptions = data.map(item => ({
          value: item.LG_LSTID,
          label: item.STR_LSTDESCRIPTION,
        }));

        setData(mappedOptions);

      })
      .catch(error => {
        console.error('Erreur lors de la récupération des données:', error);
      });
  };

  const handleDateChange = (e, fieldName) => {
    setFormData({ ...formData, [fieldName]: e.value });
  };
  
  const handleTimeChange = (e, fieldName) => {
    setFormData({ ...formData, [fieldName]: e.value });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSelectChange = (selectedOption, actionMeta) => {
    setFormData({
      ...formData,
      [actionMeta.name]: selectedOption ? selectedOption.value : '',
    });
  };


  const handleToggleSwitch = (setFunction, data, setData, key, value) => {
    setFunction(value);
    setData({
      ...data,
      [key]: value ? 1 : 0,
    });
  };

  //++++++++++++++++++++++++++++++++++++++++++ GESTION D4AJOUT DES CATEGORIE DE PLACE DANS LE FORMULAIRE ++++++++++++++++++++++++++++++++++++++++++
  
  
  const handleAddCategory = () => {
    setCategories([...categories, { LG_LSTID: '', INT_ELINUMBER: '', INT_ELINUMBERMAX: '', DBL_ELIAMOUNT: '' }]);
  };

  const handleRemoveCategory = (index) => {
    const newCategories = categories.filter((_, i) => i !== index);
    setCategories(newCategories);
  };

const handleCategoryChange = (selectedOption, index,field) => {
  const newCategories = [...categories];
  newCategories[index][field] = selectedOption.value;
  setCategories(newCategories);
};
const handleCategoryInput = (e, index, field) => {
  const newCategories = [...categories];
  newCategories[index][field] = e.target.value;
  setCategories(newCategories);
};


// Function to handle file changes and manage preview
const handleFileChange = (fieldName, fileOrUrl) => {
  // Si fileOrUrl est un fichier, on utilise createObjectURL
  if (fileOrUrl instanceof File || fileOrUrl instanceof Blob) {
    
    setFormData(prevData => ({
      ...prevData,
      [fieldName]: fileOrUrl,  // Stocker le fichier
    }));

    // Mettre à jour les aperçus basés sur le fichier sélectionné
    switch (fieldName) {
      case 'STR_EVEPIC':
        setPreviewPic(URL.createObjectURL(fileOrUrl));
        break;
      case 'STR_EVEBANNER':
        setPreviewBanner(URL.createObjectURL(fileOrUrl));
        break;
      case 'STR_EVEANNONCEURPIC':
        setPreviewAnnonceurPic(URL.createObjectURL(fileOrUrl));
        break;
      default:
        break;
    }
  } else if (typeof fileOrUrl === 'string') {
    // Si fileOrUrl est une chaîne (URL), on l'utilise directement
    setFormData(prevData => ({
      ...prevData,
      [fieldName]: fileOrUrl,  // Stocker le chemin de l'image
    }));

    // Mettre à jour les aperçus basés sur l'URL existante
    switch (fieldName) {
      case 'STR_EVEPIC':
        setPreviewPic(urlBaseImage + "/images/product/" + fileOrUrl);
        break;
      case 'STR_EVEBANNER':
        setPreviewBanner(urlBaseImage + "/images/product/" + fileOrUrl);
        break;
      case 'STR_EVEANNONCEURPIC':
        setPreviewAnnonceurPic(urlBaseImage + "/images/product/" + fileOrUrl);
        break;
      default:
        break;
    }
  }
};


// ++++++++++++++++++++++++++++++++++++++++++ GESTION DES MODIFICATION D'UN EVENEMENT ++++++++++++++++++++++++++++++++++++++++++

const location = useLocation();
const [eventId, setEventId] = useState(null);

useEffect(() => {
  if (location.state && location.state.LG_EVEID) {
      setEventId(location.state.LG_EVEID);
      // LISTES DES CATEGORIE DE TICKET DE L'EVENEMENT
      crudData({ mode: 'getEvenement', LG_EVEID: location.state.LG_EVEID }, apiUrl)
      .then(response => {
        setEventDetails(response.data);
      })
      .catch(error => {
        console.error('Erreur lors de la récupération des données:', error);
      });
      fetchData({ mode: 'listCategorieplaceEvenement', LG_EVEID: location.state.LG_EVEID }, apiUrl, setCategories) // LISTES DES CATEGORIE DE TICKET DE L'EVENEMENT

  }
}, [location.state]);


// ++++++++++++++++++++++++++++++++++++++++++ GESTION DES COMBOBOX ++++++++++++++++++++++++++++++++++++++++++

//LISTE DES TYPE D'ACTIVITE
useEffect(() => {
  //if (userData && userData.UTITOKEN) { }STR_UTITOKEN: userData.UTITOKEN,
  loadStore({ mode: 'listListe',  LG_TYLID: "CATEGORIE"}, apiCategorieTicketUrl, setTypeActiviteData);
  
}, [userData, apiCategorieTicketUrl]);

//LISTE DES TYPE DE PLACE
useEffect(() => {
  //if (userData && userData.UTITOKEN) { } STR_UTITOKEN: userData.UTITOKEN,
  loadStore({ mode: 'listListe',  LG_TYLID: "TYPEPLACE"}, apiCategorieTicketUrl, setcategorieData);
  
}, [userData, apiCategorieTicketUrl]);

console.log(categorieData);
//LISTE DES LIEU D'EVENT
useEffect(() => {
  //if (userData && userData.UTITOKEN) { }  STR_UTITOKEN: userData.UTITOKEN,
  loadStore({ mode: 'listListe', LG_TYLID: "7" }, apiCategorieTicketUrl, setlieuActiviteData);
  
}, [userData, apiCategorieTicketUrl]);



const urlToFile = async (imageUrl, fileName = 'image.jpg') => {
  try {
    const response = await fetch(imageUrl);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const blob = await response.blob();
    const file = new File([blob], fileName, { type: blob.type });
    return file;
  } catch (error) {
    console.error('Erreur lors de la conversion de l\'URL en fichier:', error);
    return null;
  }
};



useEffect(() => {
  if (eventDetails != null) {
    const eventData = eventDetails;

    const extractFileName = (path) => {
      if (!path) return '';
      const parts = path.split('/');
      return parts[parts.length - 1];
    };

    // Mise à jour des données du formulaire
    setFormData({
      STR_EVENAME: eventData?.STR_EVENAME || '',
      LG_LSTPLACEID: eventData?.LG_LSTPLACEID || '',
      DT_EVEBEGIN: convertToFullDate(eventData?.DT_EVEBEGIN) || '',
      HR_EVEBEGIN: convertTimeToFullDate(eventData?.HR_EVEBEGIN) || '',
      DT_EVEEND: convertToFullDate(eventData?.DT_EVEEND) || '',
      HR_EVEEND: convertTimeToFullDate(eventData?.HR_EVEEND) || '',
      DT_BANBEGIN: convertToFullDate(eventData?.DT_BANBEGIN) || '',
      DT_BANEND: convertToFullDate(eventData?.DT_BANEND) || '',
      STR_EVEANNONCEUR: eventData?.STR_EVEANNONCEUR || '',
      LG_AGEID: eventData?.LG_AGEID || 1,
      LG_AGEREQUESTID: eventData?.LG_AGEID || 1,
      STR_EVEDESCRIPTION: eventData?.STR_EVEDESCRIPTION || '',
      mode: 'updateEvenement',
      LG_LSTID: eventData?.LG_LSTID || '',
      STR_LSTDESCRIPTION_OTHER: eventData?.STR_LSTDESCRIPTION_OTHER || '',
      STR_ANNONCEUR: eventData?.STR_ANNONCEUR || '',
      STR_UTITOKEN: userData?.UTITOKEN || '',
      STR_EVEDISPLAYROOM: Number(eventData?.STR_EVEDISPLAYROOM) || 0,
      STR_EVESTATUTFREE: Number(eventData?.STR_EVESTATUTFREE) || 0,
      STR_EVETOBANNER: Number(eventData?.STR_EVETOBANNER) || 0,
    });

    // Convertir les images en fichiers et appeler handleFileChange
    if (eventData?.STR_EVEPIC) {
      const imageUrl = "http://guineeticket.com/backoffice/" + eventData?.STR_EVEPIC;
      urlToFile(imageUrl, extractFileName(eventData.STR_EVEPIC)).then((file) => {
        if (file) handleFileChange('STR_EVEPIC', file);
      });
    }

    if (eventData?.STR_EVEBANNER) {
      const bannerUrl = "http://guineeticket.com/backoffice/" + eventData?.STR_EVEBANNER;
      urlToFile(bannerUrl, extractFileName(eventData.STR_EVEBANNER)).then((file) => {
        if (file) handleFileChange('STR_EVEBANNER', file);
      });
    }

    if (eventData?.STR_EVEANNONCEURPIC) {
      const announcerPicUrl = "http://guineeticket.com/backoffice/" + eventData?.STR_EVEANNONCEURPIC;
      urlToFile(announcerPicUrl, extractFileName(eventData.STR_EVEANNONCEURPIC)).then((file) => {
        if (file) handleFileChange('STR_EVEANNONCEURPIC', file);
      });
    }

    // Mise à jour des autres éléments du formulaire
    setShowPrice(Number(eventData?.STR_EVESTATUTFREE) || 0);
    setShowSeat(Number(eventData?.STR_EVEDISPLAYROOM) || 0);
    setShowBanner(Number(eventData?.STR_EVETOBANNER) || 0);

    if (categories.length > 0) {
      setCategories(categories);
    } else {
      setCategories([]);
    }
  }
}, [eventDetails]);

console.log("------------------formData.DT_EVEBEGIN-----------");
// console.log(formatDate(formData.DT_EVEBEGIN));


// Function to handle form submission
const handleSubmit = async (e) => {
  e.preventDefault();

  const formDataToSend = new FormData();

  // Convert dates and times to the desired format
  const categoryArray = categories.map(cat => ({
    LG_LSTID: cat.LG_LSTID,
    INT_ELINUMBER: cat.INT_ELINUMBER,
    INT_ELINUMBERMAX: cat.INT_ELINUMBERMAX,
    DBL_ELIAMOUNT: cat.DBL_ELIAMOUNT,
  }));

  // Convert dates and times to the desired format
  const formattedData = {
      ...formData,
      DT_EVEBEGIN: formData.DT_EVEBEGIN ? new Date(formData.DT_EVEBEGIN).toISOString().split('T')[0] : '',
      HR_EVEBEGIN: formData.HR_EVEBEGIN ? formatTime(formData.HR_EVEBEGIN) : '',
      DT_EVEEND: formData.DT_EVEEND ? new Date(formData.DT_EVEEND).toISOString().split('T')[0] : '',
      DT_BANBEGIN: formData.DT_BANBEGIN ? new Date(formData.DT_BANBEGIN).toISOString().split('T')[0] : '',
      DT_BANEND: formData.DT_BANEND ? new Date(formData.DT_BANEND).toISOString().split('T')[0] : '',
      HR_EVEEND: formData.HR_EVEEND ? formatTime(formData.HR_EVEEND) : '',
      STR_UTITOKEN: userData?.STR_UTITOKEN || '',
      LG_LSTCATEGORIEPLACEID : JSON.stringify(categoryArray),
      
  };

  Object.keys(formattedData).forEach(key => {
      if (!(formattedData[key] instanceof File)) {
          formDataToSend.append(key, formattedData[key]);
      }
  });

  // Append files or keep existing paths
  if (formData.STR_EVEPIC instanceof File) {
      formDataToSend.append('STR_EVEPIC', formData.STR_EVEPIC);
  }

  if (formData.STR_EVEBANNER instanceof File) {
      formDataToSend.append('STR_EVEBANNER', formData.STR_EVEBANNER);
  }

  if (formData.STR_EVEANNONCEURPIC instanceof File) {
      formDataToSend.append('STR_EVEANNONCEURPIC', formData.STR_EVEANNONCEURPIC);
  }

  if (eventId) {
    // Handle update
    formDataToSend.append('mode', 'updateEvenement');
    formDataToSend.append('LG_EVEID', eventId);
    //await crudData(formDataToSend, apiUrl, resetForm, true);  // true to indicate multipart form data

    Swal.fire({
      title: "Êtes-vous sûr de modifié de l'évenement : " + formData.STR_EVENAME, // Titre de la boîte de dialogue
      //text: "Vous ne pourrez pas revenir en arrière!", // Texte de la boîte de dialogue
      icon: 'warning', // Icône d'avertissement
      showCancelButton: true, // Afficher le bouton d'annulation
      confirmButtonColor: '#3085d6', // Couleur du bouton de confirmation
      cancelButtonColor: '#d33', // Couleur du bouton d'annulation
      cancelButtonText:'Non',
      confirmButtonText: 'Oui, Modifier!' // Texte du bouton de confirmation
    }).then((result) => {
      if (result.isConfirmed) { // Si l'utilisateur confirme la suppression
        // Envoi des paramètres de suppression à l'API
        crudData(formDataToSend, apiUrl)
        .then(response => {
          const { desc_statut, code_statut } = response.data; // Extraction des informations de la réponse de l'API
          if (code_statut === "1") { // Vérification si l'opération a réussi
            //Affichage d'une notification de succès
            toast.success(desc_statut,{
              position: "top-center",
              autoClose: 3000,
            }); // Afficher une notification de succès
            setTimeout(() => {
              navigate('/liste-evenement');
            }, 4000);

            resetForm()
          } else {
            toast.success(desc_statut,{
              position: "top-center",
              autoClose: 3000,
            }); // Afficher une notification de succès
            //navigate(paths.signIn);
          }
        })
        .catch(error => {
          console.error('Erreur lors de la récupération des données:', error);
        });
      }
    });
} else {
    // Handle creation
    formDataToSend.append('mode', 'createEvenement');
    //await crudData(formDataToSend, apiUrl, resetForm, true);  // true to indicate multipart form data

    Swal.fire({
      title: "Êtes-vous sûr de l'enregistrement de l'évenement : " + formData.STR_EVENAME, 
      text: "Vous ne pourrez pas revenir en arrière!", // Texte de la boîte de dialogue
      icon: 'warning', // Icône d'avertissement
      showCancelButton: true, // Afficher le bouton d'annulation
      confirmButtonColor: '#3085d6', // Couleur du bouton de confirmation
      cancelButtonColor: '#d33', // Couleur du bouton d'annulation
      cancelButtonText:'Non',
      confirmButtonText: 'Oui, Enregistrer!' // Texte du bouton de confirmation
    }).then((result) => {
      if (result.isConfirmed) { // Si l'utilisateur confirme la suppression
        // Envoi des paramètres de suppression à l'API
        crudData(formDataToSend, apiUrl)
        .then(response => {
          const { desc_statut, code_statut } = response.data; // Extraction des informations de la réponse de l'API
          if (code_statut === "1") { // Vérification si l'opération a réussi
            //Affichage d'une notification de succès
            toast.success(desc_statut,{
              position: "top-center",
              autoClose: 3000,
            }); // Afficher une notification de succès
            setTimeout(() => {
              navigate('/liste-evenement');
            }, 4000);

            resetForm()
          } else {
            toast.success(desc_statut,{
              position: "top-center",
              autoClose: 3000,
            }); // Afficher une notification de succès
            //navigate(paths.signIn);
          }
        })
        .catch(error => {
          console.error('Erreur lors de la récupération des données:', error);
        });
      }
    });
}
};

  return (

    <>
        <div className="app-main flex-column flex-row-fluid " id="kt_app_main">
          <div className="d-flex flex-column flex-column-fluid">
            <div id="kt_app_content" className="app-content  flex-column-fluid ">
              <div id="kt_app_content_container" className="app-container  container-fluid ">
                  <>
                  <div className='row'>
                  <div className='col-lg-9'>
                      <ToastContainer />
                      <h1>{selectedEvent ? 'Modifier l\'événement' : 'Ajouter un nouvel événement'}</h1>
                      <Form onSubmit={handleSubmit}>
                        {/* FORMULMAIRE GENERAL */}
                              
                        <div className="card card-flush py-4">
                          <div className="card-header">
                            <a className="btn btn-sm btn-light btn-active-light-primary" onClick={() => handleEditClick()}> Edit </a>
                            <div className="card-title">
                              <h2>Information géenerale sur l'évènement</h2>
                            </div>
                          </div>
                          <div className="card-body pt-0">
                            <div className="row">
                              <div className="col-lg-12">
                                <div className="form-group">
                                  <label className="required fs-6 form-label fw-bold text-gray-900">Titre de l'évenement</label>
                                  <div className="input-group mb-3">
                                    <input
                                      type="text"
                                      id="STR_EVENAME"
                                      name="STR_EVENAME"
                                      className="form-control"
                                      placeholder="Saisir le titre de l'événement"
                                      value={formData.STR_EVENAME}
                                      onChange={handleChange}
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="col-lg-6">

                              <div className="form-group mb-2">
                                <label className="required fs-6 form-label fw-bold text-gray-900">Type d'activité</label>
                                <Select options={typeActivite} 
                                onChange={handleSelectChange}
                                name="LG_LSTID"
                                id="LG_LSTID"
                                value={typeActivite.find(option => option.value === formData.LG_LSTID)}
                                />
                                </div>
                              </div>
                              <div className="col-lg-6">

                              <div className="form-group mb-2">
                                <label className="required fs-6 form-label fw-bold text-gray-900">Lieu de l'évenement</label>
                                <Select options={lieuActiviteData} 
                                  onChange={handleSelectChange}
                                  name="LG_LSTPLACEID"
                                  id="LG_LSTPLACEID"
                                  value={lieuActiviteData.find(option => option.value === formData.LG_LSTPLACEID)}
                                />
                                </div>
                              </div>
                                  
                            </div>

                            <div className="row">
                              <div className="col-lg-6">
                                <div>
                                  <div className="form-group">
                                    <label className="required fs-6 form-label fw-bold text-gray-900">Date de début</label>

                                    <Form.Group controlId="formDate" className='w-100'>
                                      <Calendar
                                        value={formData.DT_EVEBEGIN}
                                        onChange={(e) => handleDateChange(e, 'DT_EVEBEGIN')}
                                        dateFormat="dd/mm/yy"
                                        placeholder="Date de début de l'événement"
                                        showButtonBar
                                      />
                                    </Form.Group>
                                  </div>
                                </div>
                              </div>
                              <div className='col-lg-6'>
                                <div className="form-group">
                                      <label className=" fs-6 form-label fw-bold text-gray-900">Date de fin</label>
                                      <Form.Group controlId="formDateEnd">
                                        {/* <Form.Label>Date de fin</Form.Label> */}
                                        <Calendar
                                          value={formData.DT_EVEEND}
                                          onChange={(e) => handleDateChange(e, 'DT_EVEEND')}
                                          dateFormat="dd/mm/yy"
                                          placeholder="Date de fin de l'événement"
                                          showButtonBar
                                        />
                                      </Form.Group>
                                </div>
                              </div>

                              <div className='col-lg-6'>
                              <Form.Group controlId="formTime">
                                <Form.Label>Heure de début</Form.Label>
                                <Calendar
                                  value={formData.HR_EVEBEGIN}
                                  onChange={(e) => setFormData({ ...formData, HR_EVEBEGIN: e.value })}
                                  timeOnly
                                  showButtonBar
                                />
                              </Form.Group>
                              </div>

                              <div className='col-lg-6'>
                                <Form.Group controlId="formTimeEnd">
                                  <Form.Label>Heure de fin</Form.Label>
                                  <Calendar
                                    value={formData.HR_EVEEND}
                                    onChange={(e) => setFormData({ ...formData, HR_EVEEND: e.value })}
                                    timeOnly
                                    placeholder="Heure de fin de l'événement"
                                    showButtonBar
                                  />
                                </Form.Group>
                              </div>
                            </div>

                            <div className="row">
                              <div className="col-lg-12">
                                <div className="form-group">
                                  <label className="required fs-6 form-label fw-bold text-gray-900">Description de l'évènement</label>
                                  <textarea type="text" id="STR_EVEDESCRIPTION" name="STR_EVEDESCRIPTION" className="form-control" rows="4"
                                    placeholder="Saisir la description de l'événement"
                                    value={formData.STR_EVEDESCRIPTION} onChange={handleChange}
                                  ></textarea>
                                </div>
                                <div className="text-muted fs-7">
                                  A product name is required and recommended to be
                                  unique.
                                </div>
                                {/*end::Description*/}
                                <div className="fv-plugins-message-container fv-plugins-message-container--enabled invalid-feedback" />
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* GESTION DES IMAGES */}

                        <div className="card card-flush py-4 mb-10 mt-10">
                          <div className="card-header">
                            <div className="card-title">
                              <h2>Gestion des images</h2>
                            </div>
                          </div>

                          <div className="card-body pt-0 row d-flex align-items-stretch">
                            <div className="fv-row mb-2 col-lg-6 d-flex align-items-stretch">
                              <div className="dropzone dz-clickable w-100" id="kt_ecommerce_add_product_media">
                                <div className="dz-message needsclick">
                                  <i className="ki-duotone ki-file-up text-primary fs-3x">
                                    <span className="path1" />
                                    <span className="path2" />
                                  </i>
                                  <div className="ms-4">
                                    <h3 className="fs-5 fw-bold text-gray-900 mb-1"> Image de l'évènement</h3>
                                    <span className="fs-7 fw-semibold text-gray-500"> Cette image sera placée sur le détail de l'événement</span>
                                  </div>
                                </div>
                                <FileUploader 
                                  previewImage={previewPic} 
                                  onFileSelect={(file) => handleFileChange('STR_EVEPIC', file)} 
                                />
                              </div>
                            </div>

                            <div className="fv-row mb-2 col-lg-6 d-flex align-items-stretch">
                              <div className={`notice ${showBanner ? 'bg-light-success border-success' : 'bg-light-warning border-warning'} align-items-center rounded border border-dashed mb-5 px-5 py-3 h-100 w-100`} id="kt_ecommerce_add_product_media">
                                <div className="dz-message needsclick d-flex">
                                  <Switch
                                    onColor="#049437"
                                    offColor="#e78b2f"
                                    id="STR_EVETOBANNER"
                                    name='STR_EVETOBANNER'
                                    height={20}
                                    width={48}
                                    handleDiameter={16}
                                    className="ki-duotone ki-information text-warning me-5 mt-2"
                                    onChange={(checked) => handleToggleSwitch(setShowBanner, formData, setFormData, 'STR_EVETOBANNER', checked)}
                                    checked={showBanner}
                                  />
                                  <div className="ms-4">
                                    <h3 className="fs-5 fw-bold text-gray-900 mb-1"> Bannière de publicité</h3>
                                    <span className="fs-7 fw-semibold text-gray-500"> {showBanner ? 'Cet évènement sera utilisé comme bannière de publicité' : 'Si vous souhaitez que votre événement passe en bannière de publicité, cliquez pour activer'} </span>
                                  </div>
                                </div>
                                <div className={showBanner ? '' : 'disabled'}>
                                  <FileUploader 
                                    previewImage={previewBanner} 
                                    onFileSelect={(file) => handleFileChange('STR_EVEBANNER', file)} 
                                  />
                                  <div className="row">
                                    <div className="col-lg-6">
                                      <div>
                                        <div className="form-group">
                                          <label className="required fs-6 form-label fw-bold text-gray-900">Date de début</label>
                                          <Form.Group controlId="formDate" className='w-100'>
                                            <Calendar
                                              value={formData.DT_BANBEGIN}
                                              onChange={(e) => handleDateChange(e, 'DT_BANBEGIN')}
                                              dateFormat="dd/mm/yy"
                                              placeholder="Date de début de l'événement"
                                              showButtonBar
                                            />
                                          </Form.Group>
                                        </div>
                                      </div>
                                    </div>
                                    <div className='col-lg-6'>
                                      <div className="form-group">
                                        <label className="fs-6 form-label fw-bold text-gray-900">Date de fin</label>
                                        <Form.Group controlId="formDateEnd">
                                          <Calendar
                                            value={formData.DT_BANEND}
                                            onChange={(e) => handleDateChange(e, 'DT_BANEND')}
                                            dateFormat="dd/mm/yy"
                                            placeholder="Date de fin de l'événement"
                                            showButtonBar
                                          />
                                        </Form.Group>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                        </div>

                        {/* GESTION DES PRIX */}

                        <div className="card card-flush py-4 mb-10">
                          <div className="card-header">
                            <div className="card-title">
                              <h2>Gestion des catégories de tickets</h2>
                            </div>
                          </div>
                          <div className="card-body pt-0">

                          <div className="col-xl-12 col-lg-12 d-flex flex-column">
                            <div className={`notice d-flex ${showPrice ? 'bg-light-danger border-danger' : 'bg-light-success border-success'} align-items-center rounded border border-dashed mb-5 p-6 h-100`}>
                              <Switch
                                onColor="#f14c41" offColor="#049437"
                                id="STR_EVESTATUTFREE" name='STR_EVESTATUTFREE'
                                height={20} width={48} handleDiameter={16}
                                className="ki-duotone ki-information text-warning me-5 mt-2"
                                onChange={(checked) => handleToggleSwitch(setShowPrice, formData, setFormData, 'STR_EVESTATUTFREE', checked)}
                                checked={showPrice}
                              />
                              <div className="d-flex flex-stack flex-grow-1 ">
                                <div className="fw-semibold ms-3">
                                  <h4 className="text-gray-900 fw-bold m-0 fs-6">
                                    Attention, cette offre sera
                                    <a href="#" className={`fw-bold badge me-3 ${showPrice ? 'badge-danger' : 'badge-success'}`}>
                                      {showPrice ? 'Payante' : 'Gratuite'}
                                    </a>
                                    <Tippy className="custom-tooltip" content="Création d'événement" arrow={true}>
                                      <FontAwesomeIcon className='text-primary' icon={faInfoCircle} />
                                    </Tippy>
                                  </h4>
                                  <div className="fs-7 text-gray-700">
                                    ce evenement est payé. Désactivé s'il est gratuit.
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* GESTION DES TYPE DE BILLETS */}

                          {showPrice > 0 &&  (
                            <div className='mt-3 '>
                              <div className='notice rounded border-primary border border-dashed mb-9 p-6'>
                                  <div className="d-flex flex-stack flex-wrap align-items-end mb-9">
                                    <div className="d-flex flex-column">
                                      <div className="d-flex align-items-center mb-2">
                                        <a href="#" className="text-gray-800 text-hover-primary fs-2 fw-bolder me-1" >  Catégorie de ticket </a>
                                        <Tippy className="custom-tooltip" content="Création de catégorie" arrow={true}>
                                          <FontAwesomeIcon className='text-primary' icon={faInfoCircle} />
                                        </Tippy>
                                      </div>
                                      <span className="fw-bold text-gray-600 fs-6 mb-2 d-block">
                                        Cliquez sur le bouton ajouté pour ajouté une catégorie de ticket
                                      </span>
                                    </div>
                                    <div className="d-flex">
                                      <div className="btn btn-sm btn-primary" id="kt_user_follow_button"  onClick={handleAddCategory}>
                                        <i className="fa fa-plus"></i>
                                        <span className="indicator-label">Ajouter</span>
                                      </div>
                                    </div>
                                  </div>
                                  <div className='row '>
                                    {categories.map((cat, index) => (
                                      <div key={index} className=" col-lg-4 ">
                                        <div key={index} className=" bg-light mb-10 rounded-4">
                                          {index > 0 && (
                                            <Tippy className="custom-tooltip" content="Suprimer ce champ" arrow={true}>
                                              {/* <FontAwesomeIcon icon={faInfoCircle} /> */}
                                              <i className="fas fa-trash-alt  deleteCategorie-input" onClick={() => handleRemoveCategory(index)}></i>
                                            </Tippy>
                                          )}
                                          <div className=" p-9">
                                          <img alt="Logo" src="assets/media/billet.png" class="h-65px theme-light-show d-block mx-auto"/>
                                            <div className="form-group mb-2">
                                            <label className="required fs-6 form-label fw-bold text-gray-900">Sélectionner une catégorie de place </label>
                                            <Select
                                            name="LG_LSTID"
                                            value={categorieData.find(option => option.value === cat.LG_LSTID)}
                                            onChange={selectedOption => handleCategoryChange(selectedOption, index, "LG_LSTID")}
                                            options={categorieData}
                                        />
                                            </div>

                                            <div className="form-group mb-2">
                                              <label className="required fs-6 form-label fw-bold text-gray-900">Prix de la catégorie</label>
                                              <div className="input-group mb-3">
                                                <input
                                                  type="text" className="form-control"
                                                  placeholder="Prix de la catégorie"
                                                  value={cat.DBL_ELIAMOUNT}
                                                  onChange={(e) => handleCategoryInput(e, index, 'DBL_ELIAMOUNT')}
                                                />
                                              </div>
                                            </div>
                                            <div className='row'>
                                              <div className='col-6'>
                                                <div className="form-group mb-2">
                                                  <label className="fs-6 form-label fw-bold text-gray-900">Nbre de place</label>
                                                  <div className="input-group mb-3">
                                                    <input
                                                      type="text" className="form-control"
                                                      placeholder="Nbre de place"
                                                      value={cat.INT_ELINUMBER}
                                                      onChange={(e) => handleCategoryInput(e, index, 'INT_ELINUMBER')}
                                                    />
                                                  </div>
                                                </div>
                                              </div>
                                              <div className='col-6'>
                                                <div className="form-group mb-2">
                                                  <label className="fs-6 form-label fw-bold text-gray-900">Nbre / Achat</label>
                                                  <div className="input-group mb-3">
                                                    <input
                                                      type="number" className="form-control"
                                                      placeholder="Nombre de place par achat"
                                                      value={cat.INT_ELINUMBERMAX}
                                                      onChange={(e) => handleCategoryInput(e, index, 'INT_ELINUMBERMAX')}   
                                                    />
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    ))}
                                  </div>
                              </div>
                              <div className="separator separator-dashed mt-9 mb-6"></div>
                              {/* DESTION DE SIEGES */}
                              <div className={`notice d-flex ${showSeat ? 'bg-light-primary border-default' : 'border-default'} align-items-center rounded border border-dashed  px-5 h-100`}>
                                  <Switch
                                    onColor="#86d3ff" offColor="#ff7f7f"
                                    id="STR_EVEDISPLAYROOM" name='STR_EVEDISPLAYROOM'
                                    height={20} width={48} handleDiameter={16}
                                    onChange={(checked) => handleToggleSwitch(setShowSeat, formData, setFormData, 'STR_EVEDISPLAYROOM', checked)}
                                    checked={showSeat}
                                  />
                                  <div className="d-flex flex-stack flex-grow-1 ">
                                    <div className="fw-semibold ms-3">
                                      <h4 className="text-gray-900 fw-bold m-0">
                                        <a href="#" className={`fw-bold fs-6 ${showSeat ? 'text-primary' : 'text-danger'}`}>
                                          {showSeat ? 'Attention, le client ne pourra pas choisir son siège' : 'Attention, le client pourra choisir son siège'}
                                        </a>
                                      </h4>
                                      <div className="fs-7 text-gray-700">
                                        Vous donnez la possibilité au client de choisir une place.
                                      </div>
                                    </div>
                                  </div>
                              </div>
                            </div>
                          )}
                          </div>
                        </div>
                        

                        {/* DESTION DE ANNONCERS */}

                        <div className="card card-flush py-4 mb-10">
                            <div className="card-header">
                              <div className="card-title">
                                <h2>Annonceurs</h2>
                              </div>
                            </div>
                            <div className="card-body pt-0">
                              <div className="row">
                                  <div className="col-lg-6">
                                    <div className='row'>
                                      <div className="col-lg-12">
                                          <div>
                                            <div className="form-group">
                                              <label className="required fs-6 form-label fw-bold text-gray-900">Nom de l'annonceur</label>
                                              <div className="input-group mb-3">
                                                <input
                                                  name="STR_EVEANNONCEUR" id="STR_EVEANNONCEUR"
                                                  className="form-control" placeholder="Annonceur de l'événement"
                                                  value={formData.STR_EVEANNONCEUR} onChange={handleChange}
                                                />
                                              </div>
                                            </div>
                                          </div>
                                      </div>

                                      <div className="col-lg-12 mb-10">
                                        <div className="form-group">
                                          <label className="required fs-6 form-label fw-bold text-gray-900">Description de l'évènement</label>
                                          <textarea type="text" id="STR_ANNONCEUR" name="STR_ANNONCEUR" className="form-control" rows="4"
                                            placeholder="Saisir la description de l'événement"
                                            value={formData.STR_ANNONCEUR} onChange={handleChange}
                                          ></textarea>
                                        </div>
                                        <div className="fv-plugins-message-container fv-plugins-message-container--enabled invalid-feedback" />
                                      </div>
                                    </div>
                                  </div>
                                

                                <div className="fv-row mb-2 col-lg-6">
                                  <div className="dropzone dz-clickable" id="kt_ecommerce_add_product_media">
                                    <div className="dz-message needsclick">
                                      <i className="ki-duotone ki-file-up text-primary fs-3x">
                                        <span className="path1" />
                                        <span className="path2" />
                                      </i>
                                      <div className="ms-4">
                                        <h3 className="fs-5 fw-bold text-gray-900 mb-1"> Ajouter une image 2ème de l'evenement</h3>
                                        <span className="fs-7 fw-semibold text-gray-500"> Cette image sera placé sur le detaille de l'évenement</span>
                                      </div>
                                    </div>
                                    <FileUploader onFileSelect={(file) => handleFileChange('STR_EVEANNONCEURPIC', file)} />
                                    {/* {previewPic && <img src={URL.createObjectURL(previewPic)} alt="Preview" className="mt-2" />} */}
                                  </div>
                                </div>
                              </div>
                              <div className="separator separator-dashed mt-9 mb-6"></div>
                              <div className="form-group mt-2"> </div>
                              <div className="text-muted fs-7">
                                Set the product media gallery.
                              </div>
                            </div>
                          </div>

                        <Button variant="primary" type="submit">
                          Enregistrer
                        </Button>
                      </Form>
                    </div>
                    {/* PARTIE DE GAUCHE */}
                    <EventSummary
                      formData={formData}
                      previewPic={previewPic}
                      showPrice={showPrice}
                      previewAnnoncerPic={previewAnnoncerPic}
                    />
                  </div>
                  </>
    
              </div>
            </div>
          </div>
        </div>

    </>
    
  );
};

export default AddNewAddressForm;