import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentPage, setPageSize } from '../redux/actions';

const Pagination = () => {
  const dispatch = useDispatch();
  const { movies, pageSize, currentPage } = useSelector(state => state);

  const totalPages = Math.ceil(movies.length / pageSize);

  return (
    <>
      <button 
        disabled={currentPage === 1}
        onClick={() => dispatch(setCurrentPage(currentPage - 1))}
      >
        Précédent
      </button>
      <button 
        disabled={currentPage === totalPages}
        onClick={() => dispatch(setCurrentPage(currentPage + 1))}
      >
        Suivant
      </button>
      <select onChange={(e) => dispatch(setPageSize(Number(e.target.value)))}>
        <option value={4}>4</option>
        <option value={8}>8</option>
        <option value={12}>12</option>
      </select>
    </>
  );
};

export default Pagination;
