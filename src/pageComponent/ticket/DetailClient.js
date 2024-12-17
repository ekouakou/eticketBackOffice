import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap';
import { doConnexion, crudData } from '../../services/apiService';
import html2pdf from 'html2pdf.js';
import SidebarMenu from '../dashboard/SidebarMenu'
import Footer from '../dashboard/Footer'

import AppHeader from '../dashboard/AppHeader'

const DetailClient = ({ tickets, searchTerm }) => {
  const urlBaseImage = localStorage.getItem("urlBaseImage");
  const [currentPage, setCurrentPage] = useState(1);
  const ticketsPerPage = 3;
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();
  const [response, setResponse] = useState([]);
  const apiUrl = "TicketManager.php";
  const [showModal, setShowModal] = useState(false);
  const [selectedTicket, setSelectedTicket] = useState(null); // Nouvel état pour l'élément sélectionné



  useEffect(() => {
    // if (userData && userData.STR_CLILOGIN) { // Vérifiez que userData et UTITOKEN sont définis
    //   fetchData({ mode: 'listTicket',LG_CLIID: "0749345289", DT_BEGIN: "2024-01-01", DT_END: "2024-10-06" }, apiUrl, setResponse);
    // }
    fetchData({ mode: 'listTicket',LG_CLIID: "0749345289", DT_BEGIN: "2024-01-01", DT_END: "2024-10-06" }, apiUrl, setResponse);
  }, [userData, apiUrl]);

  const fetchData = (params, url, setData) => {
    crudData(params, url)
      .then(response => {
        setData(response.data.data);
      })
      .catch(error => {
        console.error('Erreur lors de la récupération des données:', error);
      });
  };




  const handleEditClick = (ticket) => {
    setSelectedTicket(ticket); // Mettez à jour l'état avec l'élément cliqué
    setShowModal(true);
  };

  const handleExportPdf = () => {
    const element = document.getElementById('ticket-details');
    html2pdf(element);
  };


  const generateWhatsAppLink = () => {
    if (!selectedTicket) return '';
    const ticketName = encodeURIComponent(selectedTicket.STR_EVENAME);
    const ticketDate = encodeURIComponent(selectedTicket.DT_EVENT);
    const ticketUrl = encodeURIComponent("http://guineeticket.com/?id="+ticketName); // Ou un lien direct vers l'affichage du ticket en ligne
    //const ticketUrl = encodeURIComponent(window.location.href+"?id="+selectedTicket.DT_EVENT); // Ou un lien direct vers l'affichage du ticket en ligne
    const message = `Check out this event: *${ticketName}* on ${ticketDate}. View your ticket here: ${ticketUrl}`;
    return `https://wa.me/?text=${message}`;
  };

  return (
    <>


<div className={`d-flex flex-column flex-root app-root`} id="kt_app_root">
            <div class="app-page  flex-column flex-column-fluid " id='kt_app_page'>
                <AppHeader />
               
                <div class="app-wrapper  flex-column flex-row-fluid  " id='kt_app_page'>
                    <div id="kt_app_sidebar" class="app-sidebar flex-column" data-kt-drawer="true" data-kt-drawer-name="app-sidebar" data-kt-drawer-activate="{default: true, lg: false}" data-kt-drawer-overlay="true" data-kt-drawer-width="250px" data-kt-drawer-direction="start" data-kt-drawer-toggle="#kt_app_sidebar_mobile_toggle">
                        
                        <SidebarMenu />
                    </div>
                    <>
                    <div className="d-flex flex-column flex-column-fluid">
                                <div id="kt_app_content" className="app-content flex-column-fluid">
                                    <div id="kt_app_content_container" className="app-container container-fluid">
                                        <div>
                                            <div className='row'>

                                                <div className='col-lg-12'>
                                                    <div className="card mb-7">
                                                        <div className="card-body">
                                                            <div className="row gx-9 gy-6">
                                                            {response.map((ticket, index) => (
                                                            <div className="col-xl-6" data-kt-billing-element="card" key={index}>
                                                                <div className="card card-dashed h-xl-100 flex-row flex-stack flex-wrap p-6">
                                                                <div className="d-flex flex-column py-2">
                                                                    <div className="d-flex align-items-center fs-4 fw-bold mb-5">
                                                                    <h5 className='historique-ticket-event-tilte me-5'>{ticket.STR_EVENAME}</h5>
                                                                    {/* <span className="badge badge-light-success fs-7 ms-2">Primary</span> */}
                                                                    <span className={`badge ${ticket.STR_EVESTATUTFREE === "1" ? 'badge-light-danger' : 'badge-light-success'} `}>
                                                                        {ticket.STR_EVESTATUTFREE === "1" ? 'Payant' : 'Gratuit'}
                                                                        </span>
                                                                    </div>
                                                                    
                                                                    <div className="d-flex align-items-center">
                                                                    <img src={urlBaseImage + ticket.STR_EVEPIC} alt="" width={50} className="me-4" />
                                                                    <div>
                                                                        <div className="fs-4 fw-bold">Visa **** 1679</div>
                                                                        <div className="fs-6 fw-semibold text-gray-500">
                                                                        Card expires at 09/24
                                                                        </div>
                                                                    </div>
                                                                    </div>
                                                                </div>
                                                                <div className="d-flex align-items-center py-2">
                                                                    <button
                                                                    className="btn btn-sm btn-light btn-active-light-primary"
                                                                    onClick={() => handleEditClick(ticket)}
                                                                    >
                                                                    Edit
                                                                    </button>
                                                                </div>
                                                                </div>
                                                            </div>
                                                            ))}
                                                            </div>

                                                        {/* Modal */}
                                                        <Modal size='lg' className='' show={showModal} onHide={() => setShowModal(false)} centered>
                                                            <Modal.Header closeButton>
                                                            <Modal.Title>Edit Ticket</Modal.Title>
                                                            </Modal.Header>
                                                            <Modal.Body size="lg" className=''>
                                                            {selectedTicket && (
                                                                <>
                                                                    <div id="ticket-details" style={{ minHeight: "400px", width: "100%", margin: "auto" }}>
                                                                        <div style={{ display: "flex", height: "100%", alignItems: "stretch" }}>
                                                                            <div id="affiche" style={{
                                                                            position: "relative", minHeight: 400, width: "100%", padding: "0 15px",
                                                                            flex: "0 0 66.6667%", maxWidth: "66.6667%", display: "flex", flexDirection: "column"
                                                                            }}>
                                                                            <div className="flyer" style={{
                                                                                padding: 25, height: "100%", position: "relative", backgroundSize: "cover",
                                                                                backgroundPosition: "center", backgroundImage: `url(${urlBaseImage + selectedTicket.STR_EVEPIC})`
                                                                            }}>
                                                                                <div style={{ display: "flex", flexWrap: "wrap", height: "100%" }}>
                                                                                <div style={{
                                                                                    flex: "0 0 58%", maxWidth: "58%", display: "flex", flexDirection: "column",
                                                                                    marginRight: 2
                                                                                }}>
                                                                                    <div id="image2" style={{
                                                                                    backgroundImage: `url(${urlBaseImage + selectedTicket.STR_EVEPIC})`,
                                                                                    backgroundPosition: "center", backgroundSize: "cover", opacity: 0.4,
                                                                                    borderRadius: 10, minHeight: 100, height: "100%", position: "relative"
                                                                                    }}>
                                                                                    <div style={{
                                                                                        content: '""', position: "absolute", top: 0, left: 0, width: "100%",
                                                                                        height: "100%", borderRadius: 10, background: "linear-gradient(90deg, rgba(0, 18, 50, 0.134891) 10%, #110b0a 80%)", zIndex: 1
                                                                                    }} />
                                                                                    </div>
                                                                                </div>
                                                                                <div style={{
                                                                                    flex: "0 0 41.6667%", maxWidth: "41.6667%", display: "flex",
                                                                                    flexDirection: "column", zIndex: 1000
                                                                                }}>
                                                                                    <div className="c">
                                                                                    <img src={urlBaseImage + selectedTicket.STR_EVEPIC}
                                                                                        style={{ maxWidth: "100%", height: "auto" }} alt="Image 2" />
                                                                                    </div>
                                                                                    <div style={{ width: "100%", padding: 0, borderBottom: "1px dotted #fff" }}>
                                                                                    <div style={{ fontSize: "1.5rem", color: "#fff", fontFamily: "Arial, sans-serif", fontWeight: "bold" }}>
                                                                                        Lipsum generator: Lorem Ipsum - All the facts
                                                                                    </div>
                                                                                    <div className="description" style={{
                                                                                        marginTop: 5, fontStyle: "oblique", marginBottom: 10, color: "#fff",
                                                                                        fontFamily: "Arial, sans-serif"
                                                                                    }}>
                                                                                        Evenement d'humour national
                                                                                    </div>
                                                                                    </div>
                                                                                    <div style={{ width: "100%", padding: 0 }}>
                                                                                    <div style={{
                                                                                        fontSize: "0.875rem", fontWeight: "bold", fontFamily: "Arial, sans-serif",
                                                                                        marginTop: "0.25rem", display: "flex", justifyContent: "space-between"
                                                                                    }}>
                                                                                        <span style={{ fontSize: "0.875rem", fontWeight: "bold", color: "#fff", fontFamily: "Arial, sans-serif" }}>
                                                                                        <i className="fas fa-calendar-alt" style={{ fontSize: "0.875rem", color: "#fff" }} />
                                                                                        <span style={{ fontSize: "0.875rem", color: "#ffd214" }}> 27/07/2024</span>
                                                                                        &nbsp; | &nbsp;
                                                                                        <i className="far fa-clock" style={{ fontSize: "0.875rem" }} />
                                                                                        <span style={{ fontSize: "0.875rem", color: "#ffd214" }}> 08:00</span>
                                                                                        &nbsp; | &nbsp;
                                                                                        <span style={{ fontSize: "0.875rem", color: "#ffd214" }}> Stade national</span>
                                                                                        </span>
                                                                                    </div>
                                                                                    <div style={{
                                                                                        fontSize: "2rem", borderBottom: "1px dotted #fff", color: "#fc0001",
                                                                                        fontFamily: "Arial, sans-serif", fontWeight: "bold"
                                                                                    }}>
                                                                                        7.000.000 GNF
                                                                                    </div>
                                                                                    <div style={{ display: "flex" }}>
                                                                                        <div style={{ marginTop: 10 }}>
                                                                                        <img src={urlBaseImage + selectedTicket.STR_EVEPIC} width="40" style={{ height: "auto" }} alt="Image 2" />
                                                                                        </div>
                                                                                        <div style={{ marginTop: 10, marginLeft: 10 }}>
                                                                                        <div className="title" style={{ color: "#fff", fontFamily: "Arial, sans-serif", fontWeight: "bold" }}>
                                                                                            Ylou le boss
                                                                                        </div>
                                                                                        <div className="description" style={{ color: "#fff", fontFamily: "Arial, sans-serif", fontWeight: "bold" }}>
                                                                                            0749345289
                                                                                        </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    </div>
                                                                                </div>
                                                                                </div>
                                                                            </div>
                                                                            <img src={urlBaseImage + selectedTicket.STR_EVEPIC} style={{
                                                                                position: "absolute", top: 0, left: 0, width: "100%", height: "100%",
                                                                                objectFit: "cover", opacity: 0.5, zIndex: 2
                                                                            }} alt="Overlay Image" />
                                                                            </div>
                                                                            <div id="qr-code" style={{
                                                                            display: "flex", flexDirection: "column", flex: "0 0 33.3333%", maxWidth: "33.3333%",
                                                                            justifyContent: "space-between"
                                                                            }}>
                                                                            <img src="http://guineeticket.com/backoffice/images/product/4s36fuFKPx8OSWovL6Sk.png" style={{
                                                                                display: "block", marginLeft: "auto", marginRight: "auto", width: 300
                                                                            }} alt="QR Code" />
                                                                            <div style={{ width: "100%", marginTop: 0, border: "1px dotted #6c757d" }}>
                                                                                <p style={{ fontSize: "0.5rem", lineHeight: 10, marginTop: 0, fontFamily: "Arial, sans-serif", fontWeight: "bold" }}>
                                                                                Ce billet est valable pour une entrée unique à l'événement. Chaque billet possède un QR code unique qui sera scanné à l'entrée. Conservez ce billet en bon état jusqu'à la fin de l'événement, car il sera nécessaire pour toute ré-entrée ou pour toute vérification éventuelle.
                                                                                </p>
                                                                                <div className="flight-details">
                                                                                <div style={{
                                                                                    fontSize: "0.875rem", fontWeight: "bold", marginTop: "0.25rem",
                                                                                    display: "flex", justifyContent: "space-between", fontFamily: "Arial, sans-serif"
                                                                                }}>
                                                                                    <span style={{ fontSize: "0.875rem", fontWeight: "bold", color: "#6c757d", fontFamily: "Arial, sans-serif" }}>
                                                                                    <i className="fas fa-calendar-alt" style={{ fontSize: "0.875rem", color: "#dc3545" }} />
                                                                                    <span style={{ fontSize: "0.875rem", color: "#6c757d" }}> 27/07/2024</span>
                                                                                    &nbsp; | &nbsp;
                                                                                    <i className="far fa-clock" style={{ fontSize: "0.875rem" }} />
                                                                                    <span style={{ fontSize: "0.875rem", color: "#6c757d" }}> 08:00</span>
                                                                                    </span>
                                                                                </div>
                                                                                </div>
                                                                                <div style={{ position: "relative", width: "100%", display: "flex", justifyContent: "center" }}>
                                                                                <img src="http://guineeticket.com/guineeeticket/assets/images/logo/logo_light.svg" style={{
                                                                                    display: "block", marginLeft: "auto", marginRight: "auto"
                                                                                }} height="30" width="40" alt="Barcode" />
                                                                                </div>
                                                                            </div>
                                                                            </div>
                                                                        </div>
                                                                    </div> 



                                                                {/* <div id="ticket-details">
                                                                    <div className='container'>
                                                                    <div className="row d-flex align-items-stretch">
                                                                        <div className="col-md-8 col-xs-12">
                                                                        <div className="p-7 left flyer"
                                                                            style={{
                                                                            backgroundSize: "cover",
                                                                            backgroundPosition: "center",
                                                                            backgroundImage: `url(${urlBaseImage + selectedTicket.STR_EVEPIC})`
                                                                            }}>
                                                                            <div className="row d-flex">
                                                                            <div className="col-7 d-flex flex-column">
                                                                                <div className="bgi-no-repeat bgi-position-center min-h-100px min-h-sm-100 bgi-size-cover h-100"
                                                                                style={{
                                                                                    backgroundImage: `url(${urlBaseImage + selectedTicket.STR_EVEPIC})`,
                                                                                    backgroundPosition: "center",
                                                                                    backgroundSize: "cover",
                                                                                    opacity: "0.4",
                                                                                    borderRadius: 10
                                                                                }}>
                                                                                </div>
                                                                            </div>
                                                                            <div className="col-5 d-flex flex-column">
                                                                                <div className="c">
                                                                                <img src={urlBaseImage + selectedTicket.STR_EVEPIC} className="img-fluid" alt="Image 2" />
                                                                                </div>
                                                                                <div className="col-md-12 p-0">
                                                                                <div className="title fs-2">{selectedTicket.STR_EVENAME}</div>
                                                                                <div className="description">{selectedTicket.STR_EVEDESCRIPTION}</div>
                                                                                </div>
                                                                                <div className="col-md-12 p-0">
                                                                                <div class="fs-6 fw-bold mt-1 d-flex flex-stack"><span class="badge fs-2 fw-bold text-gray-900 fs-8 p-0 text-theme"><i class="fas fa-calendar-alt fs-8 text-danger"></i><span class="fs-8 text-theme"> 27/07/2024</span> &nbsp; | &nbsp; <i class="far fa-clock fs-8"></i><span class="fs-8 text-theme"> 08:00</span></span></div>
                                                                                <div className="title">{selectedTicket.STR_EVEANNONCEUR}</div>
                                                                                <div className="description">{selectedTicket.STR_TICPHONE}</div>
                                                                                </div>
                                                                            </div>
                                                                            </div>
                                                                        </div>
                                                                        </div>
                                                                        <div className="col-md-4 col-xs-12 qr-code-zone d-flex flex-column align-items-stretch">
                                                                        <div className="row flex-grow-1">
                                                                            <div className="col-lg-12 col-md-6 col-6 p-0 qr-code d-flex align-items-end">
                                                                            <img src="assets/media/eventpicture/bgYLUQ0e6AWr0C5Qmylq83ZUj70N49A3hPnits7X.png" className="d-block mx-auto" alt="QR Code" />
                                                                            </div>
                                                                            <div class="col-lg-12 col-md-6 col-6 d-flex align-items-center">
                                                                            <div className='row h-100'>
                                                                                <div className="col-md-12 footer-text mt-0 ps-8"> </div>
                                                                                <div className="col-md-12 footer-text mt-0 px-10">
                                                                                <span className='fs-10 '> Ce billet est valable pour une entrée unique à l'événement. Chaque billet possède un QR code unique qui sera scanné à l'entrée. Conservez ce billet en bon état jusqu'à la fin de l'événement, car il sera nécessaire pour toute ré-entrée ou pour toute vérification éventuelle.
                                                                                </span>
                                                                                <div class="flight-details">
                                                                                <div class="fs-6 fw-bold mt-1 d-flex flex-stack "><span class="badge fs-2 fw-bold text-gray-900 fs-8 p-0 text-theme"><i class="fas fa-calendar-alt fs-8 text-danger"></i><span class="fs-8 text-theme"> 27/07/2024</span> &nbsp; | &nbsp; <i class="far fa-clock fs-8"></i><span class="fs-8 text-theme"> 08:00</span></span></div>
                                                                                </div>
                                                                                </div>
                                                                            </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-md-12 barcode d-flex justify-content-center">
                                                                            <img src="assets/images/logo/logo_light.svg" className="d-block mx-auto" height="30px" width="40px" alt="Barcode" />
                                                                        </div>
                                                                        </div>
                                                                    </div>
                                                                    </div>
                                                                </div> */}
                                                                </>
                                                            )}
                                                            </Modal.Body>
                                                            <Modal.Footer>
                                                            <Button variant="secondary" onClick={() => setShowModal(false)}>
                                                                Close
                                                            </Button>
                                                            <Button variant="success" onClick={() => window.open(generateWhatsAppLink(), '_blank')}>Share on WhatsApp</Button>
                                                            <Button variant="primary" onClick={handleExportPdf}>
                                                                Télécharger
                                                            </Button>
                                                            </Modal.Footer>
                                                        </Modal>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </>
                    <Footer />
                </div>
            </div>
        </div>
    </>
  );
};

export default DetailClient;