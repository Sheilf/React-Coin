import React from 'react';
import './Pagination.css';
import PropTypes from 'prop-types';

const Pagination = (props) =>{
    //leftArrow and &rightArrow}
    const { page, totalPages, handlePaginationClick } = props;
    return(
        <div id="Pagination">
            
            <button
             className = "Pagination-button"
             onClick={() => handlePaginationClick('prev')}
             disabled={page <=1}
            >
                &larr;
            </button>

            <span className="Pagination-info">
            Page <b>{page}</b> of <b>{totalPages} </b> 
            </span>

            <button 
            className = "Pagination-button"
            onClick={() => handlePaginationClick('next')}
            disabled={page >= totalPages}
            >
                &rarr;
            </button>
        </div>

    )
}

Pagination.PropTypes = {
    page: PropTypes.number.isRequired,
    totalPages: PropTypes.number.isRequired,
    handlePaginationClick: PropTypes.func.isRequired,
}
export default Pagination;
