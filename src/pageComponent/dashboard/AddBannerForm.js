import React, { useContext, useEffect, useState } from 'react';
import Switch from 'react-switch';
import { toast, ToastContainer } from 'react-toastify';
import Tippy from '@tippyjs/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTrash, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { EventContext } from '../../contexts/EventProvider';
import { handleCreate, handleFileChange, handleUpdate, handleToggleSwitch } from '../../utils/formHandlers';
import { useNavigate } from 'react-router-dom';
import { crudData } from '../../services/apiService';
import { Modal, Button, Form } from 'react-bootstrap';

const AddNewAddressForm = () => {
  const apiUrl = "TicketManager.php";
  const apiCategorieTicketUrl = "ConfigurationManager.php";
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);
  const { selectedEvent } = useContext(EventContext);
  const [categorieData, setcategorieData] = useState([]);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('userConnectedData'));
    const paths = JSON.parse(localStorage.getItem("appPaths"));
    if (!user) {
      navigate(paths.signIn);
    } else {
      setUserData(user);
    }
  }, [navigate]);

  const [showPrice, setShowPrice] = useState(true);
  const [showSeat, setShowSeat] = useState(false);
  const [previewPic, setPreviewPic] = useState('');
  const [previewBanner, setPreviewBanner] = useState('');
  const [extratEditEventPicName, setextratEditEventPicName] = useState('');
  const [extratEditEventBannerName, setextratEditEventBannerName] = useState('');
  const [showBanner, setShowBanner] = useState(false);
  const [categories, setCategories] = useState([{ category: '', price: '' , ndrplace: '' }]);


  const initialFormData = {
    STR_EVENAME: '',
    CATEGORIE: '',
    STR_EVEPLACE: '',
    DT_EVEBEGIN: '',
    HR_EVEBEGIN: '',
    DT_EVEEND: '',
    HR_EVEEND: '',
    LG_LSTPLACEID: '0000000000000000000000000000000000000804',
    STR_EVEANNONCEUR: '',
    STR_EVEDISPLAYROOM: 0,
    STR_EVEPRICE: '',
    LG_AGEID: '',
    LG_AGEREQUESTID: userData?.LG_AGEID,
    STR_EVEDESCRIPTION: '',
    LG_LSTID: "000000000000000000000000000000000000085",
    mode: "createEvenement",
    STR_UTITOKEN: userData?.UTITOKEN || '',
    LG_LSTCATEGORIEPLACEID:[
      {"LG_LSTID": "0000000000000000000000000000000000000802", "INT_ELINUMBER": 100, "INT_ELINUMBERMAX": 3, "DBL_ELIAMOUNT": 5000},
      {"LG_LSTID": "0000000000000000000000000000000000000801", "INT_ELINUMBER": 50, "INT_ELINUMBERMAX": 2, "DBL_ELIAMOUNT": 30000},
      {"LG_LSTID": "0000000000000000000000000000000000000800", "INT_ELINUMBER": 20, "INT_ELINUMBERMAX": 1, "DBL_ELIAMOUNT": 15000}
],
    STR_EVESTATUTFREE: 1,
    STR_EVEBANNER: null,
    STR_EVEPIC: null,
  };

  const [formData, setFormData] = useState(initialFormData);

  useEffect(() => {
    if (selectedEvent) {
      const extractFileName = (path) => {
        if (!path) return '';
        const parts = path.split('/');
        return parts[parts.length - 1];
      };

      if (!previewPic) {
        setPreviewPic(selectedEvent.STR_EVEPIC);
      }
      if (!previewBanner) {
        setPreviewBanner(selectedEvent.STR_EVEBANNER);
      }

      if (!extratEditEventPicName) {
        setextratEditEventPicName(extractFileName(selectedEvent.STR_EVEPIC));
      }
      if (!extratEditEventBannerName) {
        setextratEditEventBannerName(extractFileName(selectedEvent.STR_EVEBANNER));
      }

      setFormData({
        STR_EVENAME: selectedEvent.STR_EVENAME,
        STR_EVEDESCRIPTION: selectedEvent.STR_EVEDESCRIPTION,
        DT_EVEBEGIN: selectedEvent.DT_EVEBEGIN,
        DT_EVEEND: selectedEvent.DT_EVEEND,
        HR_EVEBEGIN: selectedEvent.HR_EVEBEGIN,
        HR_EVEEND: selectedEvent.HR_EVEEND,
        STR_EVEPLACE: selectedEvent.STR_EVEPLACE,
        // STR_EVEPIC: extratEditEventPicName,
        // STR_EVEBANNER: extratEditEventBannerName,
        DT_EVECREATED: selectedEvent.DT_EVECREATED,
        DT_EVEUPDATED: selectedEvent.DT_EVEUPDATED,
        LG_AGEREQUESTID: selectedEvent.LG_AGEID,
        LG_EVEID: selectedEvent.LG_EVEID,
        LG_LSTID: selectedEvent.LG_LSTID,
        LG_LSTPLACEID: selectedEvent.LG_LSTPLACEID,
        LG_UTICREATEDID: selectedEvent.LG_UTICREATEDID,
        STR_EVEANNONCEUR: selectedEvent.STR_EVEANNONCEUR,
        STR_EVEDISPLAYROOM: selectedEvent.STR_EVEDISPLAYROOM,
        STR_EVESTATUTFREE: selectedEvent.STR_EVESTATUTFREE,
      });

      setShowPrice(selectedEvent.STR_EVESTATUTFREE === "1");
      setShowSeat(selectedEvent.STR_EVEDISPLAYROOM === "1");
    }
  }, [selectedEvent]);

  const formatDate = (dateString) => {
    const [month, day, year] = dateString.split('/');
    return `${year}-${month}-${day}`;
  };

  const handleCreateEvent = async () => {
    try {
      const formDataToSend = new FormData();
      formDataToSend.append("STR_UTITOKEN", userData.UTITOKEN);
      formDataToSend.append("mode", "createEvenement");
      Object.keys(formData).forEach((key) => {
        const value =
          key === "DT_EVEBEGIN" || key === "DT_EVEEND"
            ? formatDate(formData[key])
            : formData[key];
        formDataToSend.append(key, value);
      });

      if (formData.STR_EVEPIC instanceof File) {
        formDataToSend.append("STR_EVEPIC", formData.STR_EVEPIC);
      }
      if (formData.STR_EVEBANNER instanceof File) {
        formDataToSend.append("STR_EVEBANNER", formData.STR_EVEBANNER);
      }

      const response = await handleCreate(formDataToSend, apiUrl);
      //toast.success("Form submitted successfully");
      resetForm();
    } catch (error) {
      toast.error("Failed to submit form");
    }
  };
  

  const handleUpdateEvent = async () => {
    try {
      const formDataToSend = new FormData();
      formDataToSend.append("STR_UTITOKEN", userData.UTITOKEN);
      formDataToSend.append("LG_EVEID", selectedEvent.LG_EVEID);
      formDataToSend.append("mode", "createEvenement");
  
      Object.keys(formData).forEach((key) => {
        const value =
          key === "DT_EVEBEGIN" || key === "DT_EVEEND"
            ? formatDate(formData[key])
            : formData[key];
        formDataToSend.append(key, value);
      });
  
      if (formData.STR_EVEPIC instanceof File) {
        formDataToSend.append("STR_EVEPIC", formData.STR_EVEPIC);
      }
      if (formData.STR_EVEBANNER instanceof File) {
        formDataToSend.append("STR_EVEBANNER", formData.STR_EVEBANNER);
      }
  
      const response = await handleUpdate(formDataToSend, apiUrl);
      // Handle success toast or state update
    } catch (error) {
      toast.error("Failed to update form");
    }
  };

  useEffect(() => {
    if (userData && userData.UTITOKEN) { // Vérifiez que userData et UTITOKEN sont définis
      fetchData({ mode: 'listListe', STR_UTITOKEN: userData.UTITOKEN, LG_TYLID: "5", STR_LSTOTHERVALUE: "0000000000000000000000000000000000000783" }, apiCategorieTicketUrl, setcategorieData);
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
  
  const handleCategoryChange = (e, index, field) => {
    const { value } = e.target;
    const newCategories = [...categories];
    newCategories[index][field] = value;
    setCategories(newCategories);
  };

  const handleAddCategory = () => {
    setCategories([...categories, { category: '', price: '' }]);
  };

  const handleRemoveCategory = (index) => {
    if (categories.length > 1) {
      const newCategories = [...categories];
      newCategories.splice(index, 1);
      setCategories(newCategories);
    }
  };


  const resetForm = () => {
    setFormData({
      ...initialFormData,
      STR_UTITOKEN: userData?.UTITOKEN || "",
      STR_EVESTATUTFREE: 1,
    });
    setPreviewPic("");
    setPreviewBanner("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedEvent) {
      handleUpdateEvent();
    } else {
      handleCreateEvent();
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="" style={{ backgroundSize: 'auto calc(100% + 10rem)', backgroundPositionX: '100%' }}>
      <div className='row'>
        <div className='col-lg-9'>
          <div className='card card-flush pb-0 bgi-position-y-center bgi-no-repeat mb-10'>
            <div className="card-header pt-10">
              <div className="d-flex align-items-center">
                <div className="d-flex align-items-center">
                
                  <h2 className="mb-1 me-3">Création d'événement</h2>
                  <Tippy className="custom-tooltip" content="Création d'événement" arrow={true}>
                    <FontAwesomeIcon icon={faInfoCircle} />
                  </Tippy>
                
                </div>
              </div>
            </div>
            <div className="card-body pb-0">
              <div className="d-flex">
                <form id="save_event" encType="multipart/form-data" onSubmit={handleSubmit}>

                <div className="row">
                  <div className="col-xl-4 col-lg-6 d-flex flex-column">
                    <div className={`notice d-flex ${showPrice ? 'bg-light-warning border-warning' : 'bg-light-success border-success'} align-items-center rounded border border-dashed mb-5 p-6 h-100`}>
                      <Switch
                        onColor="#e78b2f"
                        offColor="#049437"
                        id="STR_EVESTATUTFREE"
                        name='STR_EVESTATUTFREE'
                        height={20}
                        width={48}
                        handleDiameter={16}
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

                  <div className="col-xl-4 col-lg-6 d-flex flex-column">
                    <div className={`notice d-flex ${showSeat ? 'bg-light-primary border-primary' : 'border-primary'} align-items-center rounded border border-dashed mb-5 p-6 h-100`}>
                      <Switch
                        onColor="#86d3ff"
                        offColor="#ff7f7f"
                        id="STR_EVEDISPLAYROOM"
                        name='STR_EVEDISPLAYROOM'
                        height={20}
                        width={48}
                        handleDiameter={16}
                        onChange={(checked) => handleToggleSwitch(setShowSeat, formData, setFormData, 'STR_EVEDISPLAYROOM', checked)}
                        checked={showSeat}
                      />
                      <div className="d-flex flex-stack flex-grow-1 ">
                        <div className="fw-semibold ms-3">
                          <h4 className="text-gray-900 fw-bold m-0">
                            <a href="#" className={`fw-bold fs-6 ${showSeat ? 'text-primary' : 'text-danger'}`}>
                              {showSeat ? 'Attention, le client pourra choisir son siège' : 'Attention, le client ne pourra pas choisir son siège'}
                            </a>
                          </h4>
                          <div className="fs-7 text-gray-700">
                            Vous donnez la possibilité au client de choisir une place.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-xl-4 col-lg-6 d-flex flex-column">
                    <div className={`notice d-flex ${showBanner ? 'bg-light-warning border-warning' : 'bg-light-success border-success'} align-items-center rounded border border-dashed mb-5 p-6 h-100`}>
                      <Switch
                        onColor="#e78b2f"
                        offColor="#049437"
                        id="STR_EVETOBANNER"
                        name='STR_EVETOBANNER'
                        height={20}
                        width={48}
                        handleDiameter={16}
                        className="ki-duotone ki-information text-warning me-5 mt-2"
                        onChange={(checked) => handleToggleSwitch(setShowBanner, formData, setFormData, 'STR_EVETOBANNER', checked)}
                        checked={showBanner}
                      />
                      <div className="d-flex flex-stack flex-grow-1">
                        <div className="fw-semibold ms-3">
                          <h4 className="text-gray-900 fw-bold m-0 fs-6">
                            <a href="#" className={`fw-bold`}>
                              {showBanner ? 'Attention, cette offre sera mise comme bannier sur le site' : 'Gratuite'}
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
                </div>

                  {showPrice && (
                    <div className=''>
                      
                        <div className='notice rounded border-primary border border-dashed mb-9 p-6'>

                            <div className="d-flex flex-stack flex-wrap align-items-end mb-9">
                              <div className="d-flex flex-column">
                                <div className="d-flex align-items-center mb-2">
                                  <a href="#" className="text-gray-800 text-hover-primary fs-2 fw-bolder me-1" >  Catégorie de ticket </a>
                                  <Tippy className="custom-tooltip" content="Création d'événement" arrow={true}>
                                    <FontAwesomeIcon className='text-primary' icon={faInfoCircle} />
                                  </Tippy>
                                </div>
                                <span className="fw-bold text-gray-600 fs-6 mb-2 d-block">
                                  Cliquez sur le bouton ajouté pour ajouté une catégorie de ticket
                                </span>
                                {/* <div className="d-flex align-items-center flex-wrap fw-semibold fs-7 pe-2">
                                  <a href="#" className="d-flex align-items-center text-gray-500 text-hover-primary" >
                                    UI/UX Design
                                  </a>
                                  <span className="bullet bullet-dot h-5px w-5px bg-gray-500 mx-3" />
                                  <a href="#" className="d-flex align-items-center text-gray-500 text-hover-primary">
                                    Austin, TX
                                  </a>
                                  <span className="bullet bullet-dot h-5px w-5px bg-gray-500 mx-3" />
                                  <a href="#" className="text-gray-500 text-hover-primary">
                                    3,450 Followers
                                  </a>
                                </div> */}
                              </div>
                              <div className="d-flex">
                                <a href="#" className="btn btn-sm btn-light me-3" d="kt_drawer_chat_toggle" >
                                  Send Message
                                </a>
                                <div className="btn btn-sm btn-primary" id="kt_user_follow_button"  onClick={handleAddCategory}>
                                <i className="fas fa-plus"></i>
                                  <span className="indicator-label">Ajouter</span>
                                  <span className="indicator-progress">
                                    Please wait...{" "}
                                    <span className="spinner-border spinner-border-sm align-middle ms-2" />
                                  </span>
                                </div>
                              </div>
                              {/*end::Actions*/}
                            </div>

                            <div className='row '>
                              {categories.map((item, index) => (
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

                                      <h6 className=" text-center text-gray-600 text-center fw-semibold mb-7 lh-base">
                                        Our support team is available <br /> to give you answers fast
                                      </h6>
                                      <div className="form-group mb-2">
                                      <label className="required fs-6 form-label fw-bold text-gray-900">Sélectionner une catégorie</label>
                                      <Form.Control
                                        as="select"
                                        // value={editItem ? editItem.LG_FAMILLEID : newMarque.LG_FAMILLEID}
                                        onChange={(e) => handleCategoryChange(e, index, 'category')}
                                        // onChange={(e) => handleInputChange(e, editItem ? setEditItem : setNewMarque, editItem ? editItem : newMarque)}
                                        name={`CATEGORIE-${index}`}
                                        value={item.category}
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
                                            type="number"
                                            className="form-control"
                                            name={`PRICE-${index}`}
                                            placeholder="Prix"
                                            value={item.price}
                                            onChange={(e) => handleCategoryChange(e, index, 'price')}
                                          />
                                        </div>
                                      </div>
                                      <div className='row'>
                                        <div className='col-6'>
                                          <div className="form-group mb-2">
                                            <label className="fs-6 form-label fw-bold text-gray-900">Nbre de place</label>
                                            <div className="input-group mb-3">
                                              <input
                                                type="number"
                                                className="form-control"
                                                name={`PRICE-${index}`}
                                                placeholder="Prix"
                                                value={item.price}
                                                onChange={(e) => handleCategoryChange(e, index, 'price')}
                                              />
                                            </div>
                                          </div>
                                        </div>
                                        <div className='col-6'>
                                          <div className="form-group mb-2">
                                            <label className="fs-6 form-label fw-bold text-gray-900">Nbre / Achat</label>
                                            <div className="input-group mb-3">
                                              <input
                                                type="number"
                                                className="form-control"
                                                name={`PRICE-${index}`}
                                                placeholder="Prix"
                                                value={item.price}
                                                onChange={(e) => handleCategoryChange(e, index, 'price')}
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

                      <div className="col-lg-4">
                        <div>
                          <div className="form-group">
                            <label className="text-label">Prix de l'événement</label>
                            <div className="input-group mb-3">
                              <input
                                name="STR_EVEPRICE"
                                className="form-control"
                                id="STR_EVEPRICE"
                                placeholder="Prix de l'événement"
                                value={formData.STR_EVEPRICE}
                                onChange={handleChange}
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                    </div>
                  )}

                  <div className="separator separator-dashed mt-9 mb-6"></div>

                  <div className="row">
                  <div className="col-lg-4">
                        <div className="form-group">
                        <label className="text-label">Titre</label>
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
                    <div className="col-lg-4">
                      <div>
                        <div className="form-group">
                          <label className="text-label">Date de début</label>
                          <div className="input-group mb-3">
                            <input
                              name="DT_EVEBEGIN"
                              className="datepicker-default form-control"
                              id="DT_EVEBEGIN"
                              type='date'
                              placeholder="Date de début de l'événement"
                              value={formData.DT_EVEBEGIN}
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div>
                        <div className="form-group">
                          <label className="text-label">Date de fin</label>
                          <div className="input-group mb-3">
                            <input
                              name="DT_EVEEND"
                              className="datepicker-default form-control"
                              id="DT_EVEEND"
                              placeholder="Date de fin de l'événement"
                              value={formData.DT_EVEEND}
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-4">
                    <div className="form-group">
                          <label className="text-label">Heure de fin</label>
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

                    <div className="col-lg-4">
                      <div>
                        <div className="form-group">
                          <label className="text-label">LG_LSTPLACEID</label>
                          <div className="input-group mb-3">
                            <input
                              name="LG_LSTPLACEID"
                              className="form-control"
                              id="LG_LSTPLACEID"
                              placeholder="Identifiant du lieu de l'événement"
                              value={formData.LG_LSTPLACEID}
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div>
                        <div className="form-group">
                          <label className="required text-label">Annonceur</label>
                          <div className="input-group mb-3">
                            <input
                              name="STR_EVEANNONCEUR"
                              className="form-control"
                              id="STR_EVEANNONCEUR"
                              placeholder="Annonceur de l'événement"
                              value={formData.STR_EVEANNONCEUR}
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="form-group">
                        <label className="text-label">Description</label>
                        <textarea type="text" id="STR_EVEDESCRIPTION" name="STR_EVEDESCRIPTION" className="form-control" rows="4"
                          placeholder="Saisir la description de l'événement"
                          value={formData.STR_EVEDESCRIPTION} onChange={handleChange}
                        ></textarea>
                      </div>
                    </div>
                  </div>

                  <div className='notice mt-9 rounded border-primary border border-dashed mb-9 p-6'>
                    <div className='d-flex gap-5'>
                          <div class="image-input image-input-empty image-input-outline image-input-placeholder" data-kt-image-input="true">
                            <div class="image-input-wrapper w-125px h-125px" style={{ backgroundSize: 'auto calc(0% + 10rem)', backgroundPositionX: '100%', backgroundImage: `url(${previewPic || 'assets/media/svg/files/blank-image.svg'})` }}>
                              {/* {previewBanner && <img src={previewBanner} alt="Poster Preview" style={{ width: '100px', height: 'auto', marginTop: '10px' }} />} */}
                            </div>
                              <label class="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow" data-kt-image-input-action="change" data-bs-toggle="tooltip" aria-label="Change avatar" data-bs-original-title="Change avatar" data-kt-initialized="1">
                                  <i class="ki-duotone ki-pencil fs-7"><span class="path1"></span><span class="path2"></span></i>
                                  <input type="file" 
                                  id="STR_EVEPIC" name="STR_EVEPIC"  accept=".png, .jpg, .jpeg"
                                  onChange={(e) => handleFileChange(e, setFormData, formData, 'STR_EVEPIC', setPreviewPic)}/>
                                  <input type="hidden" name="avatar_remove"/>
                                  

                              </label>
                              <span class="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow" data-kt-image-input-action="cancel" data-bs-toggle="tooltip" aria-label="Cancel avatar" data-bs-original-title="Cancel avatar" data-kt-initialized="1">
                                  <i class="ki-duotone ki-cross fs-2"><span class="path1"></span><span class="path2"></span></i>                </span>
                              <span class="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow" data-kt-image-input-action="remove" data-bs-toggle="tooltip" aria-label="Remove avatar" data-bs-original-title="Remove avatar" data-kt-initialized="1">
                                  <i class="ki-duotone ki-cross fs-2"><span class="path1"></span><span class="path2"></span></i>
                              </span>
                          </div>

                          <div class="image-input image-input-empty image-input-outline image-input-placeholder" data-kt-image-input="true">
                            <div class="image-input-wrapper w-125px h-125px" style={{ backgroundSize: 'auto calc(0% + 10rem)', backgroundPositionX: '100%', backgroundImage: `url(${previewBanner || 'assets/media/svg/files/blank-image.svg'})` }}>
                              {/* {previewBanner && <img src={previewBanner} alt="Poster Preview" style={{ width: '100px', height: 'auto', marginTop: '10px' }} />} */}
                            </div>
                              <label class="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow" data-kt-image-input-action="change" data-bs-toggle="tooltip" aria-label="Change avatar" data-bs-original-title="Change avatar" data-kt-initialized="1">
                                  <i class="ki-duotone ki-pencil fs-7"><span class="path1"></span><span class="path2"></span></i>
                                  <input type="file" 
                                  id="STR_EVEBANNER" name="STR_EVEBANNER"  accept=".png, .jpg, .jpeg"
                                  onChange={(e) => handleFileChange(e, setFormData, formData, 'STR_EVEBANNER', setPreviewBanner)}/>
                                  <input type="hidden" name="avatar_remove"/>
                                  

                              </label>
                              <span class="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow" data-kt-image-input-action="cancel" data-bs-toggle="tooltip" aria-label="Cancel avatar" data-bs-original-title="Cancel avatar" data-kt-initialized="1">
                                  <i class="ki-duotone ki-cross fs-2"><span class="path1"></span><span class="path2"></span></i>                </span>
                              <span class="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow" data-kt-image-input-action="remove" data-bs-toggle="tooltip" aria-label="Remove avatar" data-bs-original-title="Remove avatar" data-kt-initialized="1">
                                  <i class="ki-duotone ki-cross fs-2"><span class="path1"></span><span class="path2"></span></i>
                              </span>
                          </div>
                    </div>
                  </div>

                  <div className="form-group mt-2">
                    <button type="submit" className="btn btn-primary mr-2" >
                      Enregistrer
                    </button>
                    
                    <button type="reset" className="btn btn-light">Annuler</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
       <ToastContainer />
    </div>
  );
};

export default AddNewAddressForm;
