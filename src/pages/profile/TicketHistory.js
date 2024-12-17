import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const TicketHistory = ({ tickets, searchTerm }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const ticketsPerPage = 3;
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    const paths = JSON.parse(localStorage.getItem("appPaths"));
    if (!user) {
      navigate(paths.signIn); // Redirige vers la page d'accueil si l'utilisateur est vide
    } else {
      setUserData(user);
    }
  }, [navigate]);

  // Filtrage des tickets en fonction du terme de recherche
  const filteredTickets = tickets.filter(ticket => 
    ticket.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    ticket.date.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Calcul du nombre total de tickets commandés
  const totalTickets = filteredTickets.reduce((acc, ticket) => {
    const quantity = Number(ticket.quantity);
    return acc + (isNaN(quantity) ? 0 : quantity);
  }, 0);

  // Pagination logic
  const indexOfLastTicket = currentPage * ticketsPerPage;
  const indexOfFirstTicket = indexOfLastTicket - ticketsPerPage;
  const currentTickets = filteredTickets.slice(indexOfFirstTicket, indexOfLastTicket);
  const totalPages = Math.ceil(filteredTickets.length / ticketsPerPage);

  const handleClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="ticket-history mt-5 pt-5">
      <div className="ticket-list container">
        <div className="row">
          <div className="col-lg-12">
            <div className="profile card card-body bg-white px-3 pt-3 pb-0">
              <div className="profile-head">
                <div className="photo-content">
                  <div className="cover-photo" style={{ backgroundImage: `url(assets/images/event04.jpg)`, backgroundSize: "cover" }}></div>
                </div>
                <div className="profile-info d-flex">
                  <div className="profile-photo">
                    <img src="assets/images/user.svg" className="img-fluid rounded-circle" alt=""/>
                  </div>
                  <div className="profile-details">
                    {userData && (
                      <>
                        <div className="profile-name px-3 pt-2">
                          <h4 className="text-primary mb-0">{userData.UTIFIRSTLASTNAME}</h4>
                          <p>{userData.SOCNAME}</p>
                        </div>
                        <div className="profile-email px-2 pt-2">
                          <h4 className="text-muted mb-0">{userData.UTIFIRSTLASTNAME}</h4>
                          <p>Email</p>
                        </div>
                      </>
                    )}
                    <div className="dropdown ms-auto">
                      <ul className="dropdown-menu dropdown-menu-right">
                        <li className="dropdown-item"><i className="fa fa-user-circle text-primary me-2"></i> View profile</li>
                        <li className="dropdown-item"><i className="fa fa-users text-primary me-2"></i> Add to close friends</li>
                        <li className="dropdown-item"><i className="fa fa-plus text-primary me-2"></i> Add to group</li>
                        <li className="dropdown-item"><i className="fa fa-ban text-primary me-2"></i> Block</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-xl-4">
            <div className="card bg-white">
              <div className="card-body bg-white">
                <div className="profile-statistics mb-5">
                  <div className="text-center">
                    <div className="row">
                      <div className="col">
                        <h3 className="m-b-0">{totalTickets}</h3><span>Tickets</span>
                      </div>
                      <div className="col">
                        <h3 className="m-b-0">140</h3><span>Place Stay</span>
                      </div>
                      <div className="col">
                        <h3 className="m-b-0">45</h3><span>Reviews</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-8">
            <div className="card bg-white">
              <div className="card-body bg-white">
                <div className="profile-tab">
                  <div className="custom-tab-1">
                    <h4 className="mb-3">Historique des Tickets</h4>
                    <div className="row">
                      {currentTickets.length > 0 ? (
                        currentTickets.map(ticket => (
                          <div key={ticket.id} className="col-xl-6 col-xxl-6 col-lg-6">
                            <div className="card bg-card border-1 pb-0">
                              <div className="card-body bg-car0 px-0"> 
                                <div id="dlab_W_Todo3" className="widget-media dlab-scroll height370 ps ps--active-y">
                                  <ul className="timeline p-2">
                                    <li>
                                      <div className="timeline-panel">
                                        <div className="media me-2 ">
                                          <img src={ticket.image} alt={ticket.title} className="img-fluid" />
                                        </div>
                                        <div className="media-body ml-3">
                                          <h5 className="mb-1">{ticket.title}</h5>
                                          <p className="mb-1">I shared this on my fb wall a few months back..</p>
                                          <div className="social-and-duration mt-1">
                                            <div className="duration-area row">
                                              <div className="col-lg-12 fs-12 lh-2">
                                                <i className="fas fa-calendar-alt text-dabger"></i><span className="text-muted">{ticket.date}</span> &nbsp; | &nbsp; <i className="far fa-clock"></i><span> 2:50</span>
                                              </div>
                                              <div className="col-lg-12 fs-12 lh-2">
                                                <i className="fas fa-map-pin"></i><span> Jacqueville</span>
                                              </div>
                                            </div>
                                          </div>
                                          <p>Prix: {ticket.price} {ticket.currency}</p>
                                          <p>Quantité: {ticket.quantity}</p>
                                          <a href="#" className="btn btn-primary btn-xxs shadow mr-2">Reply</a>
                                          <a href="#" className="btn btn-outline-danger btn-xxs">Delete</a>
                                        </div>
                                      </div>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))
                      ) : (
                        <p>Aucun ticket trouvé.</p>
                      )}
                    </div>
                    <div className="pagination-area text-center">
                      <a href="#0" onClick={() => handleClick(currentPage - 1)} disabled={currentPage === 1}>
                        <i className="fas fa-angle-double-left"></i><span>Prev</span>
                      </a>
                      {[...Array(totalPages)].map((_, index) => (
                        <a 
                          href="#0" 
                          key={index + 1} 
                          onClick={() => handleClick(index + 1)} 
                          className={index + 1 === currentPage ? 'active' : ''}
                        >
                          {index + 1}
                        </a>
                      ))}
                      <a href="#0" onClick={() => handleClick(currentPage + 1)} disabled={currentPage === totalPages}>
                        <span>Next</span><i className="fas fa-angle-double-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default TicketHistory;
