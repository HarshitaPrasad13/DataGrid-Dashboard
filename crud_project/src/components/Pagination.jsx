// src/components/Pagination.jsx
import React from 'react';

const Pagination = ({ table }) => {
  const {
    getCanPreviousPage,
    getCanNextPage,
    previousPage,
    nextPage,
    setPageIndex,
    getPageCount,
    getState,
  } = table;

  const handleChange = (e) => {
    const page = e.target.value ? Number(e.target.value) - 1 : 0;
    setPageIndex(page);
  };

  return (
    <div className="pagination-controls">
      <button onClick={() => table.setPageIndex(0)} disabled={!getCanPreviousPage()}>
        {'<<'}
      </button>
      <button onClick={previousPage} disabled={!getCanPreviousPage()}>
        {'<'}
      </button>
      <input
        type="number"
        value={getState().pagination.pageIndex + 1}
        onChange={handleChange}
        style={{ width: '50px', textAlign: 'center' }}
        min={1}
        max={getPageCount()}
      />
      <span> of {getPageCount()}</span>
      <button onClick={nextPage} disabled={!getCanNextPage()}>
        {'>'}
      </button>
      <button onClick={() => table.setPageIndex(getPageCount() - 1)} disabled={!getCanNextPage()}>
        {'>>'}
      </button>
    </div>
  );
};

export default Pagination;
