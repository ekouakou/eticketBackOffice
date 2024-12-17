import React, { useContext, useEffect, useState, useCallback } from 'react';
import Switch from 'react-switch';
import { toast, ToastContainer } from 'react-toastify';
import Tippy from '@tippyjs/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTrash, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { EventContext } from '../../contexts/EventProvider';
import { handleCreate, handleUpdate, handleToggleSwitch } from '../../utils/formHandlers';
import { useNavigate } from 'react-router-dom';
import { crudData } from '../../services/apiService';
import { Modal, Button, Form } from 'react-bootstrap';
import FileUploader from './FileUploader'


import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import TextField from '@mui/material/TextField';


const AddNewAddressForm = () => {
  const { selectedEvent } = useContext(EventContext);
  const [eventDetails, setEventDetails] = useState(null);
  const [categories, setCategories] = useState([]);
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

  useEffect(() => {
    if (!showBanner) {
      setPreviewBanner(null);
      setFormData(prevData => ({
        ...prevData,
        STR_EVEBANNER: null
      }));
    }
  }, [showBanner]);

  useEffect(() => {
    if (selectedEvent) {
      fetchData({ mode: 'getEvenement', LG_EVEID: selectedEvent }, apiUrl, setEventDetails);
    }
  }, [selectedEvent]);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('userConnectedData'));
    const paths = JSON.parse(localStorage.getItem("appPaths"));
    if (!user) {
      navigate(paths.signIn);
    } else {
      setUserData(user);
    }
  }, [navigate]);

  //LISTE DES TYPE D'ACTIVITE
  useEffect(() => {
    if (userData && userData.UTITOKEN) { 
      fetchData({ mode: 'listListe', STR_UTITOKEN: userData.UTITOKEN, LG_TYLID: "CATEGORIE"}, apiCategorieTicketUrl, setTypeActiviteData);
    }
  }, [userData, apiCategorieTicketUrl]);

  //LISTE DES TYPE DE PLACE
  useEffect(() => {
    if (userData && userData.UTITOKEN) { 
      fetchData({ mode: 'listListe', STR_UTITOKEN: userData.UTITOKEN, LG_TYLID: "TYPEPLACE"}, apiCategorieTicketUrl, setcategorieData);
    }
  }, [userData, apiCategorieTicketUrl]);

  console.log(categorieData);
  //LISTE DES LIEU D'EVENT
  useEffect(() => {
    if (userData && userData.UTITOKEN) { 
      fetchData({ mode: 'listListe', STR_UTITOKEN: userData.UTITOKEN, LG_TYLID: "7" }, apiCategorieTicketUrl, setlieuActiviteData);
    }
  }, [userData, apiCategorieTicketUrl]);

  

  const fetchData = (params, url, setData) => {
    crudData(params, url)
      .then(response => {
        setData(response.data.data);

      })
      .catch(error => {
        console.error('Erreur lors de la récupération des données:', error);
      });
  };

  const [formData, setFormData] = useState({
    STR_EVENAME: '',
    LG_LSTPLACEID: '',
    DT_EVEBEGIN: '',
    HR_EVEBEGIN: '',
    DT_EVEEND: '',
    HR_EVEEND: '',
    STR_EVEANNONCEUR: '',
    STR_ANNONCER_EVEDESCRIPTION:"",
    LG_AGEID: userData?.LG_AGEID || 1,
    LG_AGEREQUESTID: userData?.LG_AGEID || 1,
    STR_EVEDESCRIPTION: '',
    STR_LSTDESCRIPTION_OTHER:'',
    LG_LSTID:"",
    STR_EVESTATUTFREE: 1,
    STR_EVETOBANNER:0,
    STR_EVEDISPLAYROOM: 0,
    STR_EVEBANNER: null,
    STR_EVEPIC: null,
    STR_EVEANNONCEURPIC: null

  });


  const resetForm = () => {
    setFormData({
      STR_EVENAME: '',
      LG_LSTPLACEID: '',
      DT_EVEBEGIN: '',
      HR_EVEBEGIN: '',
      DT_EVEEND: '',
      HR_EVEEND: '',
      STR_EVEANNONCEUR: '',
      LG_AGEID: userData?.LG_AGEID || 1,
      LG_AGEREQUESTID: userData?.LG_AGEID || 1,
      STR_EVEDESCRIPTION: '',
      mode: 'createEvenement',
      STR_LSTDESCRIPTION_OTHER:'',
      LG_LSTID:"",
      STR_ANNONCER_EVEDESCRIPTION:'',
      STR_UTITOKEN: userData?.UTITOKEN || '',
      STR_EVESTATUTFREE: 1,
      STR_EVETOBANNER:0,
      STR_EVEDISPLAYROOM: 0,
      STR_EVEBANNER: null,
      STR_EVEPIC: null,
      STR_EVEANNONCEURPIC: null
    });
    setCategories([]);
    setPreviewPic(null);
    setPreviewAnnonceurPic(null);
    
    setPreviewBanner(null);
  };


  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleToggleSwitch = (setFunction, data, setData, key, value) => {
    setFunction(value);
    setData({
      ...data,
      [key]: value ? 1 : 0,
    });
  };

  const handleFileChange = (fieldName, file) => {
    if (file) {
      setFormData(prevData => ({
        ...prevData,
        [fieldName]: file,
      }));

      switch (fieldName) {
        case 'STR_EVEPIC':
          setPreviewPic(URL.createObjectURL(file));
          break;
        case 'STR_EVEBANNER':
          setPreviewBanner(URL.createObjectURL(file));
          break;
        case 'STR_EVEANNONCEURPIC':
          setPreviewAnnonceurPic(URL.createObjectURL(file));
          break;
        default:
          break;
      }
    } else {
      setFormData(prevData => ({
        ...prevData,
        [fieldName]: null,
      }));

      switch (fieldName) {
        case 'STR_EVEPIC':
          setPreviewPic(null);
          break;
        case 'STR_EVEBANNER':
          setPreviewBanner(null);
          break;
        case 'STR_EVEANNONCEURPIC':
          setPreviewAnnonceurPic(null);
          break;
        default:
          break;
      }
    }
  };

  const handleAddCategory = () => {
    setCategories([...categories, { LG_LSTID: '', INT_ELINUMBER: '', INT_ELINUMBERMAX: '', DBL_ELIAMOUNT: '' }]);
  };

  const handleRemoveCategory = (index) => {
    const newCategories = categories.filter((_, i) => i !== index);
    setCategories(newCategories);
  };

  const handleCategoryChange = (e, index, field) => {
    const newCategories = [...categories];
    newCategories[index][field] = e.target.value;
    setCategories(newCategories);
  };


  const formatDate = (dateString) => {
    if (!dateString) return '';
    const [month, day, year] = dateString.split('/');
    return `${year}-${month}-${day}`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const categoryArray = categories.map(cat => ({
      LG_LSTID: cat.LG_LSTID,
      INT_ELINUMBER: cat.INT_ELINUMBER,
      INT_ELINUMBERMAX: cat.INT_ELINUMBERMAX,
      DBL_ELIAMOUNT: cat.DBL_ELIAMOUNT,
    }));

    const formDataToSubmit = new FormData();
    formDataToSubmit.append('LG_LSTID', formData.LG_LSTID);
    formDataToSubmit.append('STR_UTITOKEN', userData?.UTITOKEN || '');
    formDataToSubmit.append('STR_EVENAME', formData.STR_EVENAME);
    formDataToSubmit.append('LG_LSTPLACEID', formData.LG_LSTPLACEID);
    formDataToSubmit.append('DT_EVEBEGIN', formData.DT_EVEBEGIN);
    formDataToSubmit.append('HR_EVEBEGIN', formData.HR_EVEBEGIN);
    formDataToSubmit.append('DT_EVEEND', formData.DT_EVEEND);
    formDataToSubmit.append('HR_EVEEND', formData.HR_EVEEND);
    formDataToSubmit.append('STR_EVEANNONCEUR', formData.STR_EVEANNONCEUR);
    formDataToSubmit.append('LG_AGEID', formData.LG_AGEID);
    formDataToSubmit.append('LG_AGEREQUESTID', formData.LG_AGEREQUESTID);
    formDataToSubmit.append('STR_EVEDESCRIPTION', formData.STR_EVEDESCRIPTION);
    formDataToSubmit.append('STR_EVESTATUTFREE', formData.STR_EVESTATUTFREE);
    formDataToSubmit.append('LG_LSTCATEGORIEPLACEID', JSON.stringify(categoryArray));
    formDataToSubmit.append('STR_EVETOBANNER', formData.STR_EVETOBANNER);
    formDataToSubmit.append('STR_EVEDISPLAYROOM', formData.STR_EVEDISPLAYROOM);

    if (formData.STR_EVEPIC) {
      formDataToSubmit.append('STR_EVEPIC', formData.STR_EVEPIC);
    } else if (eventDetails?.STR_EVEPIC) {
      formDataToSubmit.append('STR_EVEPIC', eventDetails.STR_EVEPIC);
    }

    if (formData.STR_EVEBANNER) {
      formDataToSubmit.append('STR_EVEBANNER', formData.STR_EVEBANNER);
    } else if (eventDetails?.STR_EVEBANNER) {
      formDataToSubmit.append('STR_EVEBANNER', eventDetails.STR_EVEBANNER);
    }

    if (formData.STR_EVEANNONCEURPIC) {
      formDataToSubmit.append('STR_EVEANNONCEURPIC', formData.STR_EVEANNONCEURPIC);
    } else if (eventDetails?.STR_EVEANNONCEURPIC) {
      formDataToSubmit.append('STR_EVEANNONCEURPIC', eventDetails.STR_EVEANNONCEURPIC);
    }

    try {
      if (selectedEvent) {
        formDataToSubmit.append('LG_EVEID', selectedEvent);
        formDataToSubmit.set('mode', 'updateEvenement');
        handleUpdate(formDataToSubmit, apiUrl, resetForm, navigate, toast);
      } else {
        formDataToSubmit.set('mode', 'createEvenement');
        handleCreate(formDataToSubmit, apiUrl, resetForm, navigate, toast);
      }
    } catch (error) {
      console.error('Erreur lors de la soumission du formulaire:', error);
      toast.error('Une erreur s\'est produite lors de la soumission du formulaire.');
    }
  };
  

  useEffect(() => {
    if (eventDetails && eventDetails.length > 0) {
      const eventData = eventDetails[0];

      setFormData({
        STR_EVENAME: eventData?.STR_EVENAME || '',
        LG_LSTPLACEID: eventData?.LG_LSTPLACEID || '',
        DT_EVEBEGIN: formatDate(eventData?.DT_EVEBEGIN) || '',
        HR_EVEBEGIN: eventData?.HR_EVEBEGIN || '',
        DT_EVEEND: formatDate(eventData?.DT_EVEEND) || '',
        HR_EVEEND: eventData?.HR_EVEEND || '',
        STR_EVEANNONCEUR: eventData?.STR_EVEANNONCEUR || '',
        LG_AGEID: eventData?.LG_AGEID || 1,
        LG_AGEREQUESTID: eventData?.LG_AGEID || 1,
        STR_EVEDESCRIPTION: eventData?.STR_EVEDESCRIPTION || '',
        mode: 'updateEvenement',
        LG_LSTID:"000000000000000000000000000000000000085",
        STR_LSTDESCRIPTION_OTHER: eventData?.STR_LSTDESCRIPTION_OTHER || '',
        STR_ANNONCER_EVEDESCRIPTION: eventData?.STR_ANNONCER_EVEDESCRIPTION || '',
        STR_UTITOKEN: userData?.UTITOKEN || '',
        STR_EVEDISPLAYROOM: eventData?.STR_EVEDISPLAYROOM || 0,
        STR_EVESTATUTFREE: eventData?.STR_EVESTATUTFREE || 0,
        STR_EVETOBANNER: eventData?.STR_EVETOBANNER || 0,
        STR_EVEBANNER: eventData?.STR_EVEBANNER || null,
        STR_EVEPIC: eventData?.STR_EVEPIC || null,
        STR_EVEANNONCEURPIC:eventData?.STR_EVEANNONCEURPIC || null,
      });

      setPreviewPic(eventData?.STR_EVEPIC || null);
      setPreviewBanner(eventData?.STR_EVEBANNER || null);
      
      setShowPrice(eventData?.STR_EVESTATUTFREE || 0);
      setShowSeat(eventData?.STR_EVEDISPLAYROOM || 0);
      setShowBanner(eventData?.STR_EVETOBANNER || 0);
      

      if (eventData.categories && eventData.categories.length > 0) {
        setCategories(eventData.categories);
      } else {
        setCategories([]);
      }
    }
  }, [eventDetails]);


  return (

    <>

    
        <div className="app-main flex-column flex-row-fluid " id="kt_app_main">
          <div className="d-flex flex-column flex-column-fluid">
            <div id="kt_app_content" className="app-content  flex-column-fluid ">
              <div id="kt_app_content_container" className="app-container  container-fluid ">

                
                  <>
                    <ToastContainer />
                    <h1>{selectedEvent ? 'Modifier l\'événement' : 'Ajouter un nouvel événement'}</h1>
                    <Form onSubmit={handleSubmit}>
                      {/* <Form.Group controlId="formEventName">
                        <Form.Label>Nom de l'événement</Form.Label>
                        <Form.Control 
                          type="text" 
                          name="STR_EVENAME" 
                          value={formData.STR_EVENAME} 
                          onChange={handleChange} 
                          placeholder="Nom de l'événement" 
                          required 
                        />
                      </Form.Group> */}

                      {/* <Form.Group controlId="formEventLocation">
                        <Form.Label>Lieu</Form.Label>
                        <Form.Control 
                          as="select" 
                          name="LG_LSTPLACEID" 
                          value={formData.LG_LSTPLACEID} 
                          onChange={handleChange} 
                          required
                        >
                          <option value="">Sélectionner le lieu</option>
                          {lieuActiviteData.map(lieu => (
                            <option key={lieu.LG_LSTID} value={lieu.LG_LSTID}>{lieu.STR_LSTNAME}</option>
                          ))}
                        </Form.Control>
                      </Form.Group> */}

                      {/* <Form.Group controlId="formEventDate">
                        <Form.Label>Date de début</Form.Label>
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                          <DatePicker
                            value={formData.DT_EVEBEGIN}
                            onChange={(date) => setFormData(prevData => ({ ...prevData, DT_EVEBEGIN: date }))}
                            renderInput={(params) => <TextField {...params} />}
                          />
                        </LocalizationProvider>
                      </Form.Group> */}

                      

                      

                      

                      {/* <Form.Group controlId="formEventDescription">
                        <Form.Label>Description de l'événement</Form.Label>
                        <Form.Control 
                          as="textarea" 
                          name="STR_EVEDESCRIPTION" 
                          value={formData.STR_EVEDESCRIPTION} 
                          onChange={handleChange} 
                          rows={3} 
                          required 
                        />
                      </Form.Group> */}


                      {/* FORMULMAIRE GENERAL */}
                            
                      <div className="card card-flush py-4">
                              <div className="card-header">
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
                                          <Form.Control
                                            as="select"
                                            name="LG_LSTID"
                                            id="LG_LSTID"
                                            value={formData.LG_LSTID}
                                            onChange={handleChange}
                                          >
                                            <option value="">Sélectionnez le lieu</option>
                                            {typeActivite.map((typeactivite) => (
                                              <option key={typeactivite.LG_LSTID} value={typeactivite.LG_LSTID}>
                                                {typeactivite.STR_LSTDESCRIPTION_OTHER}
                                              </option>
                                            ))}
                                          </Form.Control>
                                          </div>
                                        </div>
                                        <div className="col-lg-6">

                                        <div className="form-group mb-2">
                                          <label className="required fs-6 form-label fw-bold text-gray-900">Lieu de l'évenement</label>
                                          <Form.Control
                                            as="select"
                                            name="LG_LSTPLACEID"
                                            id="LG_LSTPLACEID"
                                            value={formData.LG_LSTPLACEID}
                                            onChange={handleChange}
                                          >
                                            <option value="">Sélectionnez le lieu</option>
                                            {lieuActiviteData.map((lieuevent) => (
                                              <option key={lieuevent.LG_LSTID} value={lieuevent.LG_LSTID}>
                                                {lieuevent.STR_LSTDESCRIPTION_OTHER}
                                              </option>
                                            ))}
                                          </Form.Control>
                                          </div>
                                        </div>
                                        
                                  </div>

                                  <div className="row">
                                  <div className="col-lg-6">
                                      <div>
                                        <div className="form-group">
                                          <label className="required fs-6 form-label fw-bold text-gray-900">Date de début</label>
                                            {/* <input
                                              name="DT_EVEBEGIN"
                                              className="datepicker-default form-control"
                                              id="DT_EVEBEGIN"
                                              type='text'
                                              placeholder="Date de début de l'événement"
                                              value={formData.DT_EVEBEGIN}
                                              onChange={handleChange}
                                            /> */}
                                            <Form.Group controlId="formEventDate">
                                            {/* <Form.Label>Date de début</Form.Label> */}
                                            <LocalizationProvider dateAdapter={AdapterDateFns}>
                                              <DatePicker
                                              className="datepicker-imput"
                                                value={formData.DT_EVEBEGIN}
                                                onChange={(date) => setFormData(prevData => ({ ...prevData, DT_EVEBEGIN: date }))}
                                                renderInput={(params) => <TextField {...params} />}
                                              />
                                            </LocalizationProvider>
                                          </Form.Group>
                                        </div>
                                      </div>
                                    </div>
                                    <div className='col-lg-6'>
                                      <div className="form-group">
                                            <label className=" fs-6 form-label fw-bold text-gray-900">Date de fin</label>
                                            {/* <div className="input-group mb-3">
                                              <input
                                                name="DT_EVEEND"
                                                className="datepicker-default form-control"
                                                id="DT_EVEEND"
                                                placeholder="Date de fin de l'événement"
                                                value={formData.DT_EVEEND}
                                                onChange={handleChange}
                                              />
                                            </div> */}
                                            <Form.Group controlId="formEventEndDate">
                                              {/* <Form.Label>Date de fin</Form.Label> */}
                                              <LocalizationProvider dateAdapter={AdapterDateFns}>
                                                <DatePicker
                                                  className="datepicker-imput"
                                                  value={formData.DT_EVEEND}
                                                  onChange={(date) => setFormData(prevData => ({ ...prevData, DT_EVEEND: date }))}
                                                  renderInput={(params) => <TextField {...params} />}
                                                />
                                              </LocalizationProvider>
                                            </Form.Group>
                                      </div>
                                    </div>

                                    <div className='col-lg-6'>
                                    <Form.Group controlId="formEventTimeBegin">
                                      <Form.Label>Heure de début</Form.Label>
                                      <Form.Control 
                                        type="time" 
                                        name="HR_EVEBEGIN" 
                                        value={formData.HR_EVEBEGIN} 
                                        onChange={handleChange} 
                                        required 
                                      />
                                    </Form.Group>
                                    </div>

                                    <div className='col-lg-6'>
                                      {/* <div>
                                        <div className="form-group">
                                          <label className="required fs-6 form-label fw-bold text-gray-900">Heure de début</label>
                                          <div className="input-group clockpicker mb-3" data-placement="bottom" data-align="top" data-autoclose="true">
                                            <input
                                              name="HR_EVEBEGIN" className="form-control" id="HR_EVEBEGIN" placeholder="Heure de début de l'événement"
                                              value={formData.HR_EVEBEGIN} onChange={handleChange}
                                            />
                                          </div>
                                        </div>
                                      </div> */}
                                      <Form.Group controlId="formEventTimeEnd">
                                        <Form.Label>Heure de fin</Form.Label>
                                        <Form.Control 
                                          type="time" 
                                          name="HR_EVEEND" 
                                          value={formData.HR_EVEEND} 
                                          onChange={handleChange} 
                                          required 
                                        />
                                      </Form.Group>
                                    </div>
                                   
                                    {/* <div className="col-lg-6">
                                      <div>
                                        <div className="form-group">
                                          <label className=" fs-6 form-label fw-bold text-gray-900">Heure de fin</label>
                                          <div className="input-group clockpicker mb-3" data-placement="bottom" data-align="top" data-autoclose="true">
                                            <input
                                              name="HR_EVEEND"
                                              className="form-control"
                                              id="HR_EVEEND"
                                              placeholder="Heure de fin de l'événement"
                                              value={formData.HR_EVEEND}
                                              onChange={handleChange}
                                            />
                                          </div>
                                        </div>
                                      </div>
                                    </div> */}
                                    
                                  </div>

                                  <div className="row">
                                    <div className="col-lg-12 mb-10">
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

                      {/* <Form.Group controlId="formEventCategory">
                        <Form.Label>Catégories</Form.Label>
                        {categories.map((category, index) => (
                          <div key={index} className="d-flex mb-2">
                            <Form.Control 
                              as="select" 
                              value={category.LG_LSTID} 
                              onChange={(e) => handleCategoryChange(e, index, 'LG_LSTID')}
                            >
                              <option value="">Sélectionner une catégorie</option>
                              {categorieData.map(cat => (
                                <option key={cat.LG_LSTID} value={cat.LG_LSTID}>{cat.STR_LSTNAME}</option>
                              ))}
                            </Form.Control>
                            <Form.Control 
                              type="number" 
                              placeholder="Nombre min"
                              value={category.INT_ELINUMBER} 
                              onChange={(e) => handleCategoryChange(e, index, 'INT_ELINUMBER')} 
                              className="ml-2"
                            />
                            <Form.Control 
                              type="number" 
                              placeholder="Nombre max"
                              value={category.INT_ELINUMBERMAX} 
                              onChange={(e) => handleCategoryChange(e, index, 'INT_ELINUMBERMAX')} 
                              className="ml-2"
                            />
                            <Form.Control 
                              type="number" 
                              placeholder="Montant"
                              value={category.DBL_ELIAMOUNT} 
                              onChange={(e) => handleCategoryChange(e, index, 'DBL_ELIAMOUNT')} 
                              className="ml-2"
                            />
                            <Button 
                              variant="danger" 
                              className="ml-2" 
                              onClick={() => handleRemoveCategory(index)}
                            >
                              <FontAwesomeIcon icon={faTrash} />
                            </Button>
                          </div>
                        ))}
                        <Button 
                          variant="secondary" 
                          onClick={handleAddCategory}
                        >
                          <FontAwesomeIcon icon={faPlus} /> Ajouter une catégorie
                        </Button>
                      </Form.Group> */}

                      <Form.Group>
                        <Form.Check 
                          type="switch" 
                          id="showSeatSwitch" 
                          label="Afficher le siège" 
                          checked={showSeat} 
                          onChange={() => handleToggleSwitch(setShowSeat, formData, setFormData, 'STR_EVESTATUTFREE', !showSeat)} 
                        />
                      </Form.Group>

                      <Form.Group>
                        <Form.Check 
                          type="switch" 
                          id="showPriceSwitch" 
                          label="Afficher le prix" 
                          checked={showPrice} 
                          onChange={() => handleToggleSwitch(setShowPrice, formData, setFormData, 'STR_EVEDISPLAYROOM', !showPrice)} 
                        />
                      </Form.Group>

                      {/* <Form.Group>
                        <Form.Check 
                          type="switch" 
                          id="showBannerSwitch" 
                          label="Afficher la bannière" 
                          checked={showBanner} 
                          onChange={() => handleToggleSwitch(setShowBanner, formData, setFormData, 'STR_EVETOBANNER', !showBanner)} 
                        />
                      </Form.Group> */}

                      

                      {/* {showBanner && (
                        <Form.Group>
                          <FileUploader 
                            fieldName="STR_EVEBANNER" 
                            onFileChange={(file) => handleFileChange('STR_EVEBANNER', file)} 
                            previewImage={previewBanner} 
                          />
                        </Form.Group>
                      )} */}

                      {/* GESTION DES IMAGES */}

                      <div className="card card-flush py-4 mb-10">
                        <div className="card-header">
                          <div className="card-title">
                            <h2>Gestion des images</h2>
                          </div>
                        </div>

                        <div className="card-body pt-0 row">
                          <div className="fv-row mb-2 col-lg-6">
                            <div className="dropzone dz-clickable" id="kt_ecommerce_add_product_media">
                              <div className="dz-message needsclick">
                                <i className="ki-duotone ki-file-up text-primary fs-3x">
                                  <span className="path1" />
                                  <span className="path2" />
                                </i>
                                <div className="ms-4">
                                  <h3 className="fs-5 fw-bold text-gray-900 mb-1"> Image de l'évènement</h3>
                                  <span className="fs-7 fw-semibold text-gray-500"> Cette image sera placé sur le detaille de l'évenement</span>
                                </div>
                              </div>
                              <FileUploader previewImage={previewPic} onFileSelect={(file) => handleFileChange('STR_EVEPIC', file)} />
                            </div>
                          </div>

                          <div className="fv-row mb-2 col-lg-6">
                            <div className={`notice ${showBanner ? 'bg-light-success border-success' : 'bg-light-warning  border-warning'} align-items-center rounded border border-dashed mb-5 px-5 py-3 h-100`} id="kt_ecommerce_add_product_media">
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
                                  <span className="fs-7 fw-semibold text-gray-500"> {showBanner ? 'Cet évènement sera image sera utilisé comme bannière de publicité' : 'Si vous souhaitez que votre évenement passe en banière de publicité, cliquez pour activez'} </span>
                                </div>
                              </div>
                              <div className={showBanner ? '' : 'disabled'}>
                                <FileUploader 
                                  previewImage={previewBanner} 
                                  onFileSelect={(file) => handleFileChange('STR_EVEBANNER', file)} 
                                />
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
                                <div className={`notice d-flex ${showPrice ? 'bg-light-warning border-warning' : 'bg-light-success border-success'} align-items-center rounded border border-dashed mb-5 p-6 h-100`}>
                                  <Switch
                                    onColor="#e78b2f" offColor="#049437"
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
                                        <a href="#" className={`fw-bold badge me-3 ${showPrice ? 'badge-warning' : 'badge-success'}`}>
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

                              {showPrice && (
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
                                                  <label className="required fs-6 form-label fw-bold text-gray-900">Sélectionner une catégorie</label>
                                                  <Form.Control
                                                    as="select"
                                                    value={cat.LG_LSTID}
                                                    onChange={(e) => handleCategoryChange(e, index, 'LG_LSTID')}
                                                  >
                                                      <option value="">Sélectionnez une catégorie</option>
                                                      {categorieData.map((categorie) => (
                                                        <option key={categorie.LG_LSTID} value={categorie.LG_LSTID}>
                                                          {categorie.STR_LSTDESCRIPTION_OTHER}
                                                        </option>
                                                      ))}
                                                  </Form.Control>
                                                  </div>

                                                  <div className="form-group mb-2">
                                                    <label className="required fs-6 form-label fw-bold text-gray-900">Prix de la catégorie</label>
                                                    <div className="input-group mb-3">
                                                      <input
                                                        type="text" className="form-control"
                                                        placeholder="Prix de la catégorie"
                                                        value={cat.DBL_ELIAMOUNT}
                                                        onChange={(e) => handleCategoryChange(e, index, 'DBL_ELIAMOUNT')}
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
                                                            onChange={(e) => handleCategoryChange(e, index, 'INT_ELINUMBER')}
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
                                                            onChange={(e) => handleCategoryChange(e, index, 'INT_ELINUMBERMAX')}   
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
                                        <textarea type="text" id="STR_ANNONCER_EVEDESCRIPTION" name="STR_ANNONCER_EVEDESCRIPTION" className="form-control" rows="4"
                                          placeholder="Saisir la description de l'événement"
                                          value={formData.STR_ANNONCER_EVEDESCRIPTION} onChange={handleChange}
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
                  </>
    
              </div>
            </div>
          </div>
        </div>

        <ToastContainer />
    </>
    
  );
};

export default AddNewAddressForm;
