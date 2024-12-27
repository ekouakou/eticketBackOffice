import { Link } from 'react-router-dom';
import { format } from 'date-fns';


function EventSummary({ formData, previewPic, showPrice, previewAnnoncerPic }) {

    const formatDate = (date) => {
      return format(date, 'yyyy-MM-dd');
    };
  
    const formatTime = (date) => {
      const hours = date.getHours().toString().padStart(2, '0');
      const minutes = date.getMinutes().toString().padStart(2, '0');
      return `${hours}:${minutes}`;
    };

  return (
    <div className='col-lg-3'>
      <div className="d-flex flex-column gap-7 gap-lg-10 w-100  mb-7 me-lg-10">
        <div className="card card-flush py-4">
          <div className="card-header">
            <div className="card-title">
              <h2>Résumé événement</h2>
            </div>
          </div>
          <div className="card-body pt-0">
            <div className="bgi-no-repeat bgi-position-center bgi-size-cover card-rounded min-h-250px" style={{ backgroundSize: 'auto calc(100% + 10rem)', backgroundPositionX: '50%', backgroundImage: `url(${previewPic || 'assets/media/svg/files/blank-image.svg'})` }}>
              <div className="event-date">
                <span className={`fw-bold p-2 m-4 badge ${showPrice ? 'badge-danger' : 'badge-success'}`}>{showPrice ? 'Payant' : 'Gratuit'}</span>
              </div>
            </div>
            <div className="card-body p-0">
              <h5 className="card-title"></h5>
              <p className="card-text"></p>
              <div className="d-flex flex-column h-100">
                <div className="mb-0">
                  <div className="d-flex flex-stack mb-6">
                    <div className="flex-shrink-0 me-5">
                      <span className="text-gray-500 fs-7 fw-bold me-2 d-block lh-1 pb-1">
                        Featured
                      </span>
                      <span className="text-gray-800 fs-1 fw-bold">{formData.STR_EVENAME}</span>
                    </div>
                    <Link to="/event-details" state={{ formData , previewPic}}>
                      <span className="badge badge-light-primary flex-shrink-0 align-self-center py-3 px-4 fs-7">
                        In Process
                      </span>
                    </Link>
                  </div>
                </div>
                {/* Rest of the code... */}
                <div className="mb-6">
                    <span className="fw-semibold text-gray-600 fs-6 mb-8 d-block">
                        {formData.STR_EVEDESCRIPTION}
                    </span>
                    <div className="d-flex">
                        {/* Check if the start date exists before rendering */}
                        {formData.DT_EVEBEGIN && (
                            <div className="border border-gray-300 border-dashed rounded min-w-100px w-100 py-2 px-4 me-6 mb-3">
                                <span className="fs-6 text-gray-700 fw-bold">
                                    {formatDate(formData.DT_EVEBEGIN)}
                                </span>
                                <div className="fw-semibold text-gray-500">Date de début</div>
                            </div>
                        )}
                        {/* Check if the end date exists before rendering */}
                        {formData.DT_EVEEND && (
                            <div className="border border-gray-300 border-dashed rounded min-w-100px w-100 py-2 px-4 mb-3">
                                <span className="fs-6 text-gray-700 fw-bold">
                                    {formatDate(formData.DT_EVEEND)}
                                </span>
                                <div className="fw-semibold text-gray-500">Date de fin</div>
                            </div>
                        )}
                    </div>
                </div>


                <div className="d-flex align-items-center flex-wrap d-grid gap-2">
                    <div className="d-flex align-items-center me-5 me-xl-13">
                        <div className="symbol symbol-30px symbol-circle me-3">
                        <img src={previewAnnoncerPic} className="" alt="" />
                        </div>
                        <div className="m-0">
                        <span className="fw-semibold text-gray-500 d-block fs-8">
                            Annonceur
                        </span>
                        <a href="../pages/user-profile/overview.html" className="fw-bold text-gray-800 text-hover-primary fs-7" >
                            {formData.STR_EVEANNONCEUR}
                        </a>
                        </div>
                    </div>
                    <div className="d-flex align-items-center">
                        <div className="symbol symbol-30px symbol-circle me-3">
                        <span className="symbol-label bg-success">
                            <i className="ki-duotone ki-abstract-41 fs-5 text-white">
                            <span className="path1" />
                            <span className="path2" />
                            </i>{" "}
                        </span>
                        </div>
                        <div className="m-0">
                        {/* <span className="fw-semibold text-gray-500 d-block fs-8">Budget</span> */}
                        {/* <span className="fw-bold text-gray-800 fs-7">{formData.LG_LSTPLACEID}</span> */}
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
}

export default EventSummary;
