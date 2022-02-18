import React, { useContext } from "react";
import './TodoSearch.css';
import { TodoContext } from "../TodoContext";

export function TodoSearch() {
    
    const { searchValue, setSearchValue } = useContext(TodoContext);

    const searchInputValue = (e) => {
        setSearchValue(e.target.value);
    }

    return (
        <input 
            className="inputTodoSearch" 
            placeholder="Encuentra la tarea mas popular"
            value={ searchValue }
            onChange={ searchInputValue }
        />
    );
}