import React from "react";

function ListOptions(props) {
  return (
    <div className="ListOptions text-right pr-2">
      <button className="ListOptions-sorting" href="" alt="sort by date asc">
        <i class="fas fa-angle-up" />
      </button>
      <button className="ListOptions-sorting" href="" alt="sort by date desc">
        <i class="fas fa-angle-down" />
      </button>
    </div>
  );
}

export default ListOptions;
