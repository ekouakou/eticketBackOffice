import React, { useContext, useEffect, useState, useCallback } from 'react';
import Switch from 'react-switch';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Tippy from '@tippyjs/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTrash, faInfoCircle, faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import { EventContext } from '../../contexts/EventProvider';
import { useNavigate } from 'react-router-dom';
import { crudData } from '../../services/apiService';
import { Modal, Button, Form } from 'react-bootstrap';
import FileUploader from '../FileUploader/FileUploader'
import Loader from '../Loader'; // Importer le composant Loader

// import EventSummary from './EventSummary'
import Swal from 'sweetalert2'; // Importation de la bibliothèque pour afficher des boîtes de dialogue
import { useLocation } from 'react-router-dom';
import { Calendar } from 'primereact/calendar';

const AddBannerForm = () => {
  const { selectedEvent } = useContext(EventContext);
  const [eventDetails, setEventDetails] = useState(null);
  const [previewPic, setPreviewPic] = useState(null);
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();
  const apiUrl = "ConfigurationManager.php";
  const urlBaseImage  = localStorage.getItem("urlBaseImage");

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
    STR_BANNAME: '', DT_BANBEGIN: '',STR_BANDESCRIPTION: '',STR_BANPATH: null,LG_AGEREQUESTID: '', 
    BOOL_BANEVENT:1,  DT_BANEND: '',
    LG_AGEID: '', STR_EVESTATUTFREE: 1,
  });

  useEffect(() => {
      if (userData) {
          setFormData((prevFormData) => ({
              ...prevFormData,
              LG_AGEID: userData.LG_AGEID || '',
              LG_AGEREQUESTID: userData.LG_AGEID || '',
              STR_UTITOKEN: userData.STR_UTITOKEN || ''
          }));
      }
  }, [userData]);


  const resetForm = () => {
    setFormData({
      STR_BANNAME: '', DT_BANBEGIN: '',  DT_BANEND: '',
      STR_UTITOKEN: userData?.STR_UTITOKEN || '',
      BOOL_BANEVENT:1,  STR_EVESTATUTFREE: 1,
      LG_AGEREQUESTID: userData?.LG_AGEID || 1, LG_AGEID: userData?.LG_AGEID || '',
      STR_BANDESCRIPTION: '', mode: 'createBanniere',STR_BANPATH: null,
    });

    setPreviewPic(null);
  };


  // ++++++++++++++++++++++++++++++++++++++++++ CONVERTION DES DATE ET HEURE ++++++++++++++++++++++++++++++++++++++++++


  const convertToFullDate = (dateString, timeString = '00:00') => {
    // Check if dateString is valid
    if (!dateString) {
      throw new Error("Invalid date string");
    }
  
    const dateParts = dateString.split('/').map(Number);
    const timeParts = timeString.split(':').map(Number);
  
    // Validate dateParts and timeParts
    if (dateParts.length !== 3 || timeParts.length !== 2) {
      throw new Error("Invalid date or time format");
    }
  
    const [day, month, year] = dateParts;
    const [hours, minutes] = timeParts;
  
    // Check if month is within the valid range (1-12)
    if (month < 1 || month > 12) {
      throw new Error("Month must be between 1 and 12");
    }
  
    // Check if day is within the valid range for the given month
    const daysInMonth = new Date(year, month, 0).getDate();
    if (day < 1 || day > daysInMonth) {
      throw new Error("Day must be within the valid range for the month");
    }
  
    const fullDate = new Date(year, month - 1, day, hours, minutes, 0);
    return fullDate;
  };
  
   // ++++++++++++++++++++++++++++++++++++++++++ FONCTION GLOBALLE ++++++++++++++++++++++++++++++++++++++++++

  const handleDateChange = (e, fieldName) => {
    setFormData({ ...formData, [fieldName]: e.value });
  };
  
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  //++++++++++++++++++++++++++++++++++++++++++ GESTION D4AJOUT DES CATEGORIE DE PLACE DANS LE FORMULAIRE ++++++++++++++++++++++++++++++++++++++++++
  
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
      case 'STR_BANPATH':
        setPreviewPic(URL.createObjectURL(fileOrUrl));
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
      case 'STR_BANPATH':
        setPreviewPic(urlBaseImage +"http://guineeticket.com/backoffice/images/product/" + fileOrUrl);
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
  if (location.state && location.state.LG_BANID) {
      setEventId(location.state.LG_BANID);
      // LISTES DES CATEGORIE DE TICKET DE L'EVENEMENT
      crudData({ mode: 'getBanniere', LG_BANID: location.state.LG_BANID }, apiUrl)
      .then(response => {
        setEventDetails(response.data);
      })
      .catch(error => {
        console.error('Erreur lors de la récupération des données:', error);
      });

  }
}, [location.state]);


// ++++++++++++++++++++++++++++++++++++++++++ GESTION DES COMBOBOX ++++++++++++++++++++++++++++++++++++++++++


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
      STR_BANNAME: eventData?.STR_BANNAME || '',
      LG_LSTPLACEID: eventData?.LG_LSTPLACEID || '',
      DT_BANBEGIN: convertToFullDate(eventData?.DT_BANBEGIN) || '',
      DT_BANEND: convertToFullDate(eventData?.DT_BANEND) || '',
      LG_AGEID: eventData?.LG_AGEID || 1,
      LG_AGEREQUESTID: eventData?.LG_AGEID || 1,
      STR_BANDESCRIPTION: eventData?.STR_BANDESCRIPTION || '',
      mode: 'updateEvenement',
      STR_UTITOKEN: userData?.UTITOKEN || '',
    });

    // Convertir les images en fichiers et appeler handleFileChange
    if (eventData?.STR_BANPATH) {
      const imageUrl = "http://guineeticket.com/backoffice/" + eventData?.STR_BANPATH;
      urlToFile(imageUrl, extractFileName(eventData.STR_BANPATH)).then((file) => {
        if (file) handleFileChange('STR_BANPATH', file);
      });
    }
  }
}, [eventDetails]);

// Function to handle form submission
const handleSubmit = async (e) => {
  e.preventDefault();

  const formDataToSend = new FormData();

  // Convert dates and times to the desired format
  const formattedData = {
      ...formData,
      DT_BANBEGIN: formData.DT_BANBEGIN ? new Date(formData.DT_BANBEGIN).toISOString().split('T')[0] : '',
      DT_BANEND: formData.DT_BANEND ? new Date(formData.DT_BANEND).toISOString().split('T')[0] : '',
      STR_UTITOKEN: userData?.STR_UTITOKEN || '',
  };

  Object.keys(formattedData).forEach(key => {
      if (!(formattedData[key] instanceof File)) {
          formDataToSend.append(key, formattedData[key]);
      }
  });

  // Append files or keep existing paths
  if (formData.STR_BANPATH instanceof File) {
      formDataToSend.append('STR_BANPATH', formData.STR_BANPATH);
  }
  try{
    if (eventId) {
      // Handle update
      formDataToSend.append('mode', 'updateBanniere');
      formDataToSend.append('LG_BANID', eventId);
      //await crudData(formDataToSend, apiUrl, resetForm, true);  // true to indicate multipart form data

      Swal.fire({
        title: "Êtes-vous sûr de modifié de l'évenement : " + formData.STR_BANNAME, // Titre de la boîte de dialogue
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
                navigate('/liste-banniere');
              }, 4000);

              resetForm()
            } else {
              toast.success(desc_statut,{
                position: "top-center",
                autoClose: 3000,
              });
            }
          })
          .catch(error => {
            console.error('Erreur lors de la récupération des données:', error);
          });
        }
      });
    } else {
        // Handle creation
        formDataToSend.append('mode', 'createBanniere');
        //await crudData(formDataToSend, apiUrl, resetForm, true);  // true to indicate multipart form data

        Swal.fire({
          title: "Êtes-vous sûr de l'enregistrement de l'évenement : " + formData.STR_BANNAME, 
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
                  navigate('/liste-banniere');
                }, 4000);

                resetForm()
              } else {
                toast.success(desc_statut,{
                  position: "top-center",
                  autoClose: 3000,
                }); // Afficher une notification de succès
                //navigate(paths.signIn);

                // Affichage d'une notification d'erreur
              }
            })
            .catch(error => {
              console.error('Erreur lors de la récupération des données:', error);
            });
          }
        });
    }

  } catch (error) {
    console.error('Erreur lors de la soumission du formulaire:', error);
  } finally {
    // setLoading(false); // Cacher le loader
  }

};

  return (

    <>
        {/* {loading && <Loader />} */}
        <div className="app-main flex-column flex-row-fluid " id="kt_app_main">
          <div className="d-flex flex-column flex-column-fluid">
            <div id="kt_app_content" className="app-content  flex-column-fluid ">
              <div id="kt_app_content_container" className="app-container  container-fluid ">
                  <>
                  <div className='row'>
                  <div className='col-lg-12'>
                      <ToastContainer />
                      <h1>{selectedEvent ? 'Modifier l\'événement' : 'Ajouter un nouvel événement'}</h1>
                      <Form onSubmit={handleSubmit}>
                        {/* FORMULMAIRE GENERAL */}
                        <div className="card card-flush py-4">
                          <div className="card-header">
                            <div className="card-title">
                              <h2>Information générale sur la bannière publicitaire</h2>
                            </div>
                          </div>
                          <div className="card-body pt-0">
                            <div className="row mt-5">
                              <div className="col-lg-12">
                                <div className="form-group">
                                  <label className="required fs-6 form-label fw-bold text-gray-900">Titre de la bannère</label>
                                  <div className="input-group ">
                                    <input
                                      type="text" id="STR_BANNAME" name="STR_BANNAME" className="form-control" placeholder="Saisir le titre de l'événement"
                                      value={formData.STR_BANNAME}
                                      onChange={handleChange}
                                    />
                                  </div>
                                </div>
                              </div>
                                  
                            </div>

                            <div className="row mt-5">
                            <div className="col-lg-6">
                                <div>
                                  <div className="form-group">
                                    <label className="required fs-6 form-label fw-bold text-gray-900">Date de début d'affichage</label>

                                    <Form.Group controlId="formDate" className='w-100'>
                                      <Calendar
                                        value={formData.DT_BANBEGIN}
                                        onChange={(e) => handleDateChange(e, 'DT_BANBEGIN')}
                                        dateFormat="dd/mm/yy" placeholder="Date de début de l'événement"
                                        showButtonBar
                                      />
                                    </Form.Group>
                                  </div>
                                </div>
                              </div>
                              <div className='col-lg-6'>
                                <div className="form-group">
                                      <label className=" fs-6 form-label fw-bold text-gray-900">Date de fin d'affichage</label>
                                      <Form.Group controlId="formDateEnd">
                                        {/* <Form.Label>Date de fin</Form.Label> */}
                                        <Calendar
                                          value={formData.DT_BANEND}
                                          onChange={(e) => handleDateChange(e, 'DT_BANEND')}
                                          dateFormat="dd/mm/yy" placeholder="Date de fin de l'événement"
                                          showButtonBar
                                        />
                                      </Form.Group>
                                </div>
                              </div>
                            </div>

                            <div className="row mt-5">
                              <div className="col-lg-12">
                                <div className="form-group">
                                  <label className="required fs-6 form-label fw-bold text-gray-900">Description de la bannière</label>
                                  <textarea type="text" id="STR_BANDESCRIPTION" name="STR_BANDESCRIPTION" className="form-control" rows="4"
                                    placeholder="Saisir la description de l'événement"
                                    value={formData.STR_BANDESCRIPTION} onChange={handleChange}
                                  ></textarea>
                                </div>
                                {/* <div className="text-muted fs-7"> A product name is required and recommended to be unique. </div> */}
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

                          <div className="card-body pt-0 row">
                            <div className="fv-row mb-2 col-lg-12">
                              <div className="dropzone dz-clickable" id="kt_ecommerce_add_product_media">
                                <div className="dz-message needsclick">
                                  <i className="ki-duotone ki-file-up text-primary fs-3x">
                                    <span className="path1" />
                                    <span className="path2" />
                                  </i>
                                  <div className="ms-4">
                                    <h3 className="fs-5 fw-bold text-gray-900 mb-1"> Image de la bannière</h3>
                                    <span className="fs-7 fw-semibold text-gray-500"> Cette image sera utilisé comme bannière de publicité</span>
                                  </div>
                                </div>
                                <FileUploader 
                                previewImage={previewPic} 
                                onFileSelect={(file) => handleFileChange('STR_BANPATH', file)} />
                              </div>
                            </div>
                          </div>
                        </div>        
                        <Button variant="primary" type="submit">
                          Enregistrer
                        </Button>
                      </Form>
                    </div>
                  </div>
                  </>
    
              </div>
            </div>
          </div>
        </div>


    </>
    
  );
};

export default AddBannerForm;
