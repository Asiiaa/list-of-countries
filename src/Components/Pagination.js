import React from 'react'

function Pagination({countriesPerPage, totalCountries, pagination, setCurrentPage, currentPage}) {
    const pageNumbers = []
    for(let i = 1; i <= Math.floor(totalCountries / countriesPerPage); i++) {
        pageNumbers.push(i)
    }
    return (
    <div>
        {/* <ul className="pagination">
          {
            pageNumbers.map((_, i) => (
              <li key={Math.random()} onClick={() => setCurrentPage(i+1)} className={currentPage === i+1 ? 'active' : ''}>{i+1}</li>
            ))
          }
        </ul> */}
        <ul className='pagination'>
            {
            pageNumbers.map(number => (
              <li onClick={() => setCurrentPage(number+1)} className={currentPage === number+1 ? 'active' : ''} key={number}>
                <a href='!#' className='page-link' onClick={() => pagination(number)}>
                    {number}
                </a>
              </li>
            ))
            }
        </ul>
    </div>
  )
}

export default Pagination