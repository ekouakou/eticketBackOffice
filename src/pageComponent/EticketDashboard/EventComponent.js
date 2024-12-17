import React, { useState, useEffect } from 'react';
import { crudData } from '../../services/apiService';
import { useNavigate } from 'react-router-dom';

const EventComponent = () => {
  const [eventData, setEventData] = useState([]);
  const [user, setUser] = useState(null); // Add state for user
  const urlBaseImage = localStorage.getItem("urlBaseImage");
  const paths = JSON.parse(localStorage.getItem("appPaths"));
  const apiUrl = "TicketManager.php";
  const navigate = useNavigate();

  const fetchData = (params, url, setData) => {
    crudData(params, url)
      .then(response => {
        console.log('Réponse de l\'API:', response);
        const events = response.data;
        setData(events);
      })
      .catch(error => {
        console.error('Erreur lors de la récupération des données:', error);
      });
  };
  

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('userConnectedData'));
    if (!storedUser) {
      navigate(paths.signIn); // Redirige vers la page d'accueil si l'utilisateur est vide
    } else {
      setUser(storedUser); // Set user in state
      fetchData({
        mode: 'getEvenement',
        STR_UTITOKEN: storedUser.STR_UTITOKEN,
        LG_EVEID: "g4da5KodEWHuuCIZuijtrV4i23pDHv99rJL79ACT",
        DT_BEGIN: "2020-01-01",
        DT_END: "2025-08-31"
      }, apiUrl, setEventData);
    }
  }, []);

  return (
    <div className="col-xxl-6">
      <div className="card card-flush h-md-100">
        <div className="card-body py-9">
          <div className="row gx-9 h-100">
            <div className="col-sm-6 mb-10 mb-sm-0">
              <div
                className="bgi-no-repeat bgi-position-center bgi-size-cover card-rounded min-h-400px min-h-sm-100 h-100"
                style={{
                  backgroundSize: '100% 100%',
                  backgroundImage: `url(${urlBaseImage + eventData?.STR_EVEBANNER})`, // Remplacez par la clé d'image de votre événement
                }}
              ></div>
            </div>
            <div className="col-sm-6">
              <div className="d-flex flex-column h-100">
                <div className="mb-7">
                  <div className="d-flex flex-stack mb-6">
                    <div className="flex-shrink-0 me-5">
                      <span className="text-gray-500 fs-7 fw-bold me-2 d-block lh-1 pb-1">
                        {eventData?.category}
                      </span>
                      <span className="text-gray-800 fs-1 fw-bold">
                        {eventData?.STR_EVEDESCRIPTION}
                      </span>
                    </div>
                    <span className="badge badge-light-primary flex-shrink-0 align-self-center py-3 px-4 fs-7">
                      {eventData?.status}
                    </span>
                  </div>
                  <div className="d-flex align-items-center flex-wrap d-grid gap-2">
                    <div className="d-flex align-items-center me-5 me-xl-13">
                      <div className="symbol symbol-30px symbol-circle me-3">
                        <img src={eventData?.managerAvatar} alt="Manager Avatar" />
                      </div>
                      <div className="m-0">
                        <span className="fw-semibold text-gray-500 d-block fs-8">
                          Manager
                        </span>
                        <a href="#" className="fw-bold text-gray-800 text-hover-primary fs-7">
                          {eventData?.managerName}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mb-6">
                  <span className="fw-semibold text-gray-600 fs-6 mb-8 d-block">
                    {eventData?.description}
                  </span>
                  <div className="d-flex">
                    <div className="border border-gray-300 border-dashed rounded min-w-100px w-100 py-2 px-4 me-6 mb-3">
                      <span className="fs-6 text-gray-700 fw-bold">
                        {eventData?.date && new Date(eventData.date).toLocaleDateString()}
                      </span>
                      <div className="fw-semibold text-gray-500">Date</div>
                    </div>
                    <div className="border border-gray-300 border-dashed rounded min-w-100px w-100 py-2 px-4 mb-3">
                      <span className="fs-6 text-gray-700 fw-bold">
                        {eventData?.budget}
                      </span>
                      <div className="fw-semibold text-gray-500">Budget</div>
                    </div>
                  </div>
                </div>
                <div className="d-flex flex-stack mt-auto bd-highlight">
                  <div className="symbol-group symbol-hover flex-nowrap">
                    {(eventData?.participants || []).map((participant, index) => (
                      <div key={index} className="symbol symbol-35px symbol-circle">
                        <img src={participant.avatar} alt={participant.name} />
                      </div>
                    ))}
                  </div>
                  <a href={eventData?.link} className="d-flex align-items-center text-primary opacity-75-hover fs-6 fw-semibold">
                    Voir l'événement
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventComponent;
