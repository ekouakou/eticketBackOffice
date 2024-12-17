import React from 'react';

const FileManagerCard = () => {
  return (
    <div className="card card-flush pb-0 bgi-position-y-center bgi-no-repeat mb-10" style={{ backgroundSize: 'auto calc(100% + 10rem)', backgroundPositionX: '100%', backgroundImage: "url('../../assets/media/illustrations/sketchy-1/4.png')" }}>
      
      {/* Card header */}
      <div className="card-header pt-10">
        <div className="d-flex align-items-center">
          
          {/* Icon */}
          <div className="symbol symbol-circle me-5">
            <div className="symbol-label bg-transparent text-primary border border-secondary border-dashed">
              <i className="ki-duotone ki-abstract-47 fs-2x text-primary"><span className="path1"></span><span className="path2"></span></i>
            </div>
          </div>
          
          {/* Title */}
          <div className="d-flex flex-column">
            <h2 className="mb-1">File Manager</h2>
            <div className="text-muted fw-bold">
              <a href="#">Keenthemes</a> <span className="mx-3">|</span> <a href="#">File Manager</a> <span className="mx-3">|</span> 2.6 GB <span className="mx-3">|</span> 758 items
            </div>
          </div>
          
        </div>
      </div>
      
      {/* Card body */}
      <div className="card-body pb-0">
        
        {/* Navs */}
        <div className="d-flex overflow-auto h-55px">
          <ul className="nav nav-stretch nav-line-tabs nav-line-tabs-2x border-transparent fs-5 fw-semibold flex-nowrap">
            
            {/* Nav item */}
            <li className="nav-item">
              <a className="nav-link text-active-primary me-6 active" href="folders.html">
                Files
              </a>
            </li>
            
            {/* Nav item */}
            <li className="nav-item">
              <a className="nav-link text-active-primary me-6" href="settings.html">
                Settings
              </a>
            </li>
            
          </ul>
        </div>
        {/* Navs */}
        
      </div>
      {/* Card body */}
      
    </div>
  );
};

export default FileManagerCard;
