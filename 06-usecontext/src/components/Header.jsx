import React from "react";
import Filter from "./Filters";

const Header = ({setFilters}) => {
  return (
    <>
      <h1>React SHOPPING</h1>
      <Filter setFilters={setFilters}/>
    </>
  );
};

export default Header;
