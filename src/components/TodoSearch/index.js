import React from "react";
import "./TodoSearch.css";

export function TodoSearch({ searchValue, setSearchValue }) {
  const searchInputValue = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <input
      className="inputTodoSearch"
      placeholder="Encuentra la tarea mas popular"
      value={searchValue}
      onChange={searchInputValue}
    />
  );
}
