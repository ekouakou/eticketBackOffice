import React, { useContext, useEffect, useState, useCallback } from 'react';
import Switch from 'react-switch';
import { toast, ToastContainer } from 'react-toastify';
import { EventContext } from '../../contexts/EventProvider';
import { useNavigate } from 'react-router-dom';
import { crudData } from '../../services/apiService';
import { Modal, Button, Form } from 'react-bootstrap';
import FileUploader from './FileUploader'
// import EventSummary from './EventSummary'
import Swal from 'sweetalert2'; // Importation de la bibliothèque pour afficher des boîtes de dialogue
import { format } from 'date-fns';

import { useLocation } from 'react-router-dom';

const AddBannerForm = () => {
  const { selectedEvent } = useContext(EventContext);
  const [eventDetails, setEventDetails] = useState(null);
  const [previewPic, setPreviewPic] = useState(null);
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();
  const apiUrl = "ConfigurationManager.php";

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
    STR_UTIPIC: null, 
    STR_UTIMAIL:'', STR_UTILOGIN: '',STR_UTIPHONE:'', STR_UTIFIRSTLASTNAME:'',
    LG_AGEREQUESTID: userData?.LG_AGEID || 1,  LG_AGEID: userData?.LG_AGEID || 1, LG_PROID:userData?.LG_PROID || 1,
  });

  const resetForm = () => {
    setFormData({
      STR_UTIPIC: null,
      STR_UTIMAIL:'', STR_UTILOGIN: '',STR_UTIPHONE:'', STR_UTIFIRSTLASTNAME:'',
      STR_UTITOKEN: userData?.STR_UTITOKEN || '',      
      LG_AGEREQUESTID: userData?.LG_AGEID || 1, LG_AGEID: userData?.LG_AGEID || 1,LG_PROID:userData?.LG_AGEID || 1,
      
      mode: 'createUtilisateur',
    });

    setPreviewPic(null);
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
      case 'STR_UTIPIC':
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
      case 'STR_UTIPIC':
        setPreviewPic("http://guineeticket.com/backoffice/images/product/" + fileOrUrl);
        break;
      default:
        break;
    }
  }
};


// ++++++++++++++++++++++++++++++++++++++++++ GESTION DES MODIFICATION D'UN EVENEMENT ++++++++++++++++++++++++++++++++++++++++++

const location = useLocation();
const [utilisateurId, setutilisateurId] = useState(null);

useEffect(() => {
  if (location.state && location.state.LG_UTIID) {
      setutilisateurId(location.state.LG_UTIID);
      // LISTES DES CATEGORIE DE TICKET DE L'EVENEMENT
      crudData({ mode: 'getUtilisateur', LG_UTIID: location.state.LG_UTIID }, apiUrl)
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
      STR_UTIPHONE: eventData?.STR_UTIPHONE || '',
      STR_UTIMAIL: eventData?.STR_UTIMAIL || '',
      STR_UTILOGIN: eventData?.STR_UTILOGIN || '',
      STR_UTIFIRSTLASTNAME: eventData?.STR_UTIFIRSTLASTNAME || '',
      LG_AGEID: eventData?.LG_AGEID || 1,
      LG_PROID: eventData?.LG_PROID || 1,
      LG_AGEREQUESTID: eventData?.LG_AGEID || 1,
      mode: 'updateUtilisateur',
      STR_UTITOKEN: userData?.UTITOKEN || '',
    });

   
    // Convertir les images en fichiers et appeler handleFileChange
    if (eventData?.STR_UTIPIC) {
      const imageUrl = "http://guineeticket.com/backoffice/" + eventData?.STR_UTIPIC;
      urlToFile(imageUrl, extractFileName(eventData.STR_UTIPIC)).then((file) => {
        if (file) handleFileChange('STR_UTIPIC', file);
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
      STR_UTITOKEN: userData?.STR_UTITOKEN || '',
      
  };

  Object.keys(formattedData).forEach(key => {
      if (!(formattedData[key] instanceof File)) {
          formDataToSend.append(key, formattedData[key]);
      }
  });

  // Append files or keep existing paths
  if (formData.STR_UTIPIC instanceof File) {
      formDataToSend.append('STR_UTIPIC', formData.STR_UTIPIC);
  }

  if (utilisateurId) {
    // Handle update
    formDataToSend.append('mode', 'updateUtilisateur');
    formDataToSend.append('LG_UTIID', utilisateurId);
    //await crudData(formDataToSend, apiUrl, resetForm, true);  // true to indicate multipart form data

    Swal.fire({
      title: "Êtes-vous sûr de modifié de l'évenement : " + formData.STR_UTIFIRSTLASTNAME, // Titre de la boîte de dialogue
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
              navigate('/liste-utilisateur');
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
    formDataToSend.append('mode', 'createUtilisateur');
    //await crudData(formDataToSend, apiUrl, resetForm, true);  // true to indicate multipart form data

    Swal.fire({
      title: "Êtes-vous sûr de l'enregistrement de l'évenement : " + formData.STR_UTIFIRSTLASTNAME, 
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
              navigate('/liste-utilisateur');
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
                  <div className='col-lg-12'>
                      <ToastContainer />
                      <h1>{selectedEvent ? 'Modifier l\'événement' : 'Ajouter un nouvel événement'}</h1>
                      <Form onSubmit={handleSubmit}>
                        {/* FORMULMAIRE GENERAL */}
                        <div className="card card-flush py-4">
                          <div className="card-header">
                            <div className="card-title">
                              <h2>Information générale sur l'utilisateur</h2>
                            </div>
                          </div>
                          <div className="card-body pt-0">
                            <div className="row">
                              <div className="col-lg-6">
                                <div className="form-group">
                                  <label className="required fs-6 form-label fw-bold text-gray-900">Nom utilisateur</label>
                                  <div className="input-group mb-3">
                                    <input
                                      type="text" id="STR_UTIFIRSTLASTNAME" name="STR_UTIFIRSTLASTNAME" className="form-control" placeholder="Saisir le nom de l'utilisateur"
                                      value={formData.STR_UTIFIRSTLASTNAME}
                                      onChange={handleChange}
                                    />
                                  </div>
                                </div>
                              </div>

                              <div className="col-lg-6">
                                <div className="form-group">
                                  <label className="required fs-6 form-label fw-bold text-gray-900">N° de l'utilisateur</label>
                                  <div className="input-group mb-3">
                                    <input
                                      type="text" id="STR_UTIPHONE" name="STR_UTIPHONE" className="form-control" placeholder="Saisir le N° de l'utilisateur"
                                      value={formData.STR_UTIPHONE}
                                      onChange={handleChange}
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="col-lg-6">
                                <div className="form-group">
                                  <label className="required fs-6 form-label fw-bold text-gray-900">Email de l'utilisateur</label>
                                  <div className="input-group mb-3">
                                    <input
                                      type="text" id="STR_UTIMAIL" name="STR_UTIMAIL" className="form-control" placeholder="Saisir l'e-mail de l'utilisateur"
                                      value={formData.STR_UTIMAIL}
                                      onChange={handleChange}
                                    />
                                  </div>
                                </div>
                              </div>

                              <div className="col-lg-6">
                                <div className="form-group">
                                  <label className="required fs-6 form-label fw-bold text-gray-900">Login de l'utilisateur</label>
                                  <div className="input-group mb-3">
                                    <input
                                      type="text" id="STR_UTILOGIN" name="STR_UTILOGIN" className="form-control" placeholder="Saisir le login de l'utilisateur"
                                      value={formData.STR_UTILOGIN}
                                      onChange={handleChange}
                                    />
                                  </div>
                                </div>
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
                                    <h3 className="fs-5 fw-bold text-gray-900 mb-1"> Photo de l'utilisateur</h3>
                                    <span className="fs-7 fw-semibold text-gray-500"> Cette image sera utiliser comme photo de profil de l'utilisateur</span>
                                  </div>
                                </div>
                                <FileUploader 
                                previewImage={previewPic} 
                                onFileSelect={(file) => handleFileChange('STR_UTIPIC', file)} />
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