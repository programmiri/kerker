import React from "react";

function ListOptions(props) {
  return (
    <div className="ListOptions text-right pr-1">
      <button className="ListOptions-sorting mr-2" href="" alt="sort by date asc">
        <i className="fas fa-2x fa-angle-up" />
      </button>
      <button className="ListOptions-sorting" href="" alt="sort by date desc">
        <i className="fas fa-2x fa-angle-down" />
      </button>
    </div>
  );
}

export default ListOptions;
