import React, { useState } from 'react';
import { Dropdown } from 'react-bootstrap'; // Importer le composant Dropdown de react-bootstrap


const DataTableStyle2 = ({
    columns,
    data,
    idKey = 'id', // Clé par défaut pour l'identifiant
    statusKey = 'status', // Clé par défaut pour le statut
    itemsPerPageOptions = [5, 10, 15, 20],
    defaultItemsPerPage = 10,
    filterOptions = false,
    actionDropdownMenu,
    onSearch, onFilter, pagination,
    dateFilters, // Ne pas initialiser ici pour le rendre optionnel
    actions, // Tableau des actions à passer
  }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(defaultItemsPerPage);
    const [searchTerm, setSearchTerm] = useState('');
    const [startDate, setStartDate] = useState(dateFilters?.startDate || '');
    const [endDate, setEndDate] = useState(dateFilters?.endDate || '');
    const [selectedFilter, setSelectedFilter] = useState('');
  
    const filteredData = data
      .filter(item => {
        const itemName = item.name ? item.name.toLowerCase() : '';
        const itemDate = item.date ? new Date(item.date) : new Date();
        const itemCategory = item.category || '';
  
        const dateInRange = (!startDate || itemDate >= new Date(startDate)) &&
                            (!endDate || itemDate <= new Date(endDate));
  
        return (
          itemName.includes(searchTerm.toLowerCase()) &&
          dateInRange &&
          (!selectedFilter || itemCategory === selectedFilter)
        );
      });
  
    const totalPages = Math.ceil(filteredData.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentData = filteredData.slice(startIndex, startIndex + itemsPerPage);

    //const [searchTerm, setSearchTerm] = useState('');
    //const [filteredData, setFilteredData] = useState(data);
  
    console.log(data)
  
    
  
    const handleSearch = (e) => {
      setSearchTerm(e.target.value);
      if (onSearch) {
        onSearch(e.target.value);
      }
    };
  
    const handleFilter = (filters) => {
      if (onFilter) {
        onFilter(filters);
      }
    };
  
    const renderActions = (item) => {
      return actions.map((action, index) => (
        <button key={index}  onClick={() =>  action.handler(item[idKey])}  className={`btn  p-7 btn-sm btn-icon btn-bg-light btn-active-color-primary me-5 w-25px h-25px`}>
          <i className={action.icon+ " " + action.styleClass} />
        </button>
      ));
    };

    const DropdownActions = ({ item }) => {
        return (
          <>
          {actions && (
            <Dropdown>
              <Dropdown.Toggle variant="light" id="dropdown-basic">
                <i className="ki-duotone ki-more-vertical fs-2 text-gray-500" />
              </Dropdown.Toggle>
        
              <Dropdown.Menu>
                {actions.map((action, index) => (
                  <Dropdown.Item
                    key={index}
                    onClick={() =>  action.handler(item[idKey])} 
                    className={action.styleClass}
                  >
                    <i className={action.icon + ' me-2 '  + action.styleClass}></i>
                    {action.title}
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
          )}
          </>
        );
      };

  return (
    <>
        <div className="card-header pt-7" data-select2-id="select2-data-146-4bib">
            <div className='d-flex'>
                <div className="ms-3">
                    <select
                        className="form-select"
                        value={itemsPerPage}
                        onChange={(e) => setItemsPerPage(parseInt(e.target.value))}
                    >
                        {itemsPerPageOptions.map(option => (
                        <option key={option} value={option}>{option} items per page</option>
                        ))}
                    </select>
                </div>
            </div>
            <div className="card-toolbar" data-select2-id="select2-data-145-y5xw">
                <div className="d-flex flex-stack flex-wrap gap-4" data-select2-id="select2-data-144-f2uk" >
                {dateFilters && (
                <div className="d-flex align-items-center fw-bold" data-select2-id="select2-data-158-hiel" >
                    <div className="text-gray-500 fs-7 me-2">Cateogry</div>
                    <span className="select2 select2-container select2-container--bootstrap5 select2-container--below" dir="ltr" data-select2-id="select2-data-2-qazh" style={{ width: "100%" }}
                    >
                        <div className="mb-4">
                            <div className="d-flex mt-2">
                                <input type="date" className="form-control me-2" placeholder="Date début" value={startDate} onChange={(e) => setStartDate(e.target.value)}/>
                                <input type="date" className="form-control" placeholder="Date fin" value={endDate} onChange={(e) => setEndDate(e.target.value)}/>
                            </div>
                        </div>
                    <span className="dropdown-wrapper" aria-hidden="true" />
                    </span>
                </div>
                )}
                {filterOptions && (
                    <div className="d-flex align-items-center fw-bold" data-select2-id="select2-data-143-h4uq" >
                        <div className="text-gray-500 fs-7 me-2">Status</div>
                        <span className="select2 select2-container select2-container--bootstrap5 select2-container--below" dir="ltr" data-select2-id="select2-data-5-w61k" style={{ width: "100%" }}>
                            <div className="mb-4">
                                <div className="mt-2">
                                    <select className="form-select" value={selectedFilter} onChange={(e) => setSelectedFilter(e.target.value)}>
                                    <option value="">Toutes les catégories</option>
                                    <option value="Category1">Catégorie 1</option>
                                    <option value="Category2">Catégorie 2</option>
                                    </select>
                                </div>
                            </div>
                                
                            <span className="dropdown-wrapper" aria-hidden="true" />
                        </span>
                    </div>
                )}
                <div className="position-relative my-1">
                    <i className="ki-duotone ki-magnifier fs-2 position-absolute top-50 translate-middle-y ms-4">
                    <span className="path1" />
                    <span className="path2" />
                    </i>{" "}
                    <input
                        type="text"
                        placeholder="Rechercher..."
                        className="form-control w-150px fs-7 ps-12"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                </div>
            </div>
        </div>
        <div className="card-body pt-3 pb-4">

        <div className="table-responsive">
            <table className="table table-row-dashed align-middle gs-0 gy-4 my-0">
            <thead>
                <tr className="fs-7 fw-bold text-gray-500 border-bottom-0">
                {columns.map((col, index) => (
                    <th key={index} className={col.className}>
                    {col.title}
                    </th>
                ))}
                </tr>
            </thead>
            <tbody>
                {currentData.map((item, index) => (
                <tr key={index}>
                    {columns.map((col, colIndex) => (
                    <td key={colIndex} className={col.className}>
                        {col.render ? col.render(item[col.field], item) : item[col.field]}
                    </td>
                    ))}
                    
                    {actions && <td className="text-end">
                        {/* {renderActions(item)} */}
                        {actionDropdownMenu ? (
                          <DropdownActions item={item} />
                        ) : (
                          renderActions(item)
                        )}


                    </td>}
                </tr>
                ))}
            </tbody>
            </table>
        </div>

        <div className="d-flex flex-stack flex-wrap pt-10">
            <div className="fs-6 fw-semibold text-gray-700">
            Showing {(currentPage - 1) * itemsPerPage + 1} to {Math.min(currentPage * itemsPerPage, filteredData.length)} of {filteredData.length} entries
            </div>
            
            <ul className="pagination">
            <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                <a className="page-link" onClick={() => setCurrentPage(currentPage - 1)} >
                <i className="previous" />
                </a>
            </li>
            {[...Array(totalPages).keys()].map(page => (
                <li key={page + 1} className={`page-item ${currentPage === page + 1 ? 'active' : ''}`}>
                <a className="page-link" onClick={() => setCurrentPage(page + 1)} >
                    {page + 1}
                </a>
                </li>
            ))}
            <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                <a className="page-link" onClick={() => setCurrentPage(currentPage + 1)} >
                <i className="next" />
                </a>
            </li>
            </ul>
        </div>
        </div>
    </>
    
  );
};

export default DataTableStyle2;
