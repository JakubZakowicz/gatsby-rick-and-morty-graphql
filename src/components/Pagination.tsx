import { PaginationProps } from '@/types';
import React from 'react';
import ReactPaginate from 'react-paginate';
import '../styles/paginationStyle.css';

const Pagination: React.FC<PaginationProps> = ({
  pageCount,
  page,
  handlePageClick,
}) => (
  <ReactPaginate
    pageCount={pageCount}
    initialPage={page - 1}
    previousLabel="<"
    nextLabel=">"
    pageLinkClassName="link"
    previousLinkClassName="link"
    nextLinkClassName="link"
    breakLabel="..."
    breakLinkClassName="link"
    marginPagesDisplayed={2}
    pageRangeDisplayed={5}
    containerClassName="container"
    activeLinkClassName="active-link"
    onPageChange={handlePageClick}
  />
);

export default Pagination;
