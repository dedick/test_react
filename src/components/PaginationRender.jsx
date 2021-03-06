import React from 'react';
import { Pagination } from 'react-bootstrap';
import PropTypes from 'prop-types';

const PaginationRender = ({ page, callback, elementsFiltered, numberElementToDisplay }) => {

  const totalPage = Math.ceil(elementsFiltered / numberElementToDisplay);

  const displayPagination = () => {
    if (totalPage > 1) {
      return (
        <Pagination className="container_pagination">
          <Pagination.First onClick={ () => callback(1) }/>
          <Pagination.Prev onClick={ () => {if (page > 1) callback(page - 1); }}/>
          <Pagination.Item>{page}</Pagination.Item>
          <Pagination.Next onClick={ () => {if (page < totalPage) callback(page + 1); }} />
          <Pagination.Last onClick={ () => callback(totalPage) }/>
        </Pagination>
      );
    }
  };
  
  return (
    <div className="margin_top">
      { displayPagination() }    
    </div>
  );
};

PaginationRender.propTypes = {
  callback: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  elementsFiltered: PropTypes.number.isRequired,
  numberElementToDisplay: PropTypes.number.isRequired
};

export default PaginationRender;