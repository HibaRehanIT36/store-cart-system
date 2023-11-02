import React from "react";
import { paginationPropsType } from "../types";

function Pagination(props: paginationPropsType) {
  const { currentPage, setCurrentPage, totalNumber } = props;
  if (totalNumber < 4) return <></>;
  return (
    <div className="pagination-container">
      <button
        className={`prev-button ${currentPage === 1 ? "disabled" : ""} `}
        onClick={() => setCurrentPage((prev: number) => prev - 4)}
        disabled={currentPage === 1}
      />
      <button
        className={`next-button ${currentPage >= 40 ? "disabled" : ""} `}
        onClick={() => setCurrentPage((prev: number) => prev + 4)}
        disabled={currentPage >= 40}
      />
    </div>
  );
}

export default Pagination;
