import React from 'react';

const ActionDropdown = ({ item, handleEdit, handleDelete, handleToggleActivation }) => {
    return (
        <div className="me-0">
            <button 
                className="btn btn-sm btn-icon btn-bg-light btn-active-color-primary dropdown-toggle" 
                type="button" 
                id={`dropdownMenuButton-${item.LG_EVEID}`} 
                data-bs-toggle="dropdown" 
                aria-expanded="false">
                <i className="fas fa-edit fs-1x" />
            </button>
            <ul className="dropdown-menu" aria-labelledby={`dropdownMenuButton-${item.LG_EVEID}`}>
                <li>
                    <a className="dropdown-item" onClick={() => handleEdit(item.LG_EVEID)}>
                        <i className="fas fa-edit me-2"></i> Modifier
                    </a>
                </li>
                <li>
                    <a className="dropdown-item" onClick={() => handleDelete(item.LG_EVEID)}>
                        <i className="fas fa-trash me-2"></i> Supprimer
                    </a>
                </li>
                <li>
                    <a className="dropdown-item" onClick={() => handleToggleActivation(item.LG_EVEID, item.isActive)}>
                        <i className={`fas ${item.isActive ? 'fa-ban' : 'fa-check'} me-2`}></i>
                        {item.isActive ? 'Désactiver' : 'Activer'}
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default ActionDropdown;
