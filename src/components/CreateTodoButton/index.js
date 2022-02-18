import React from "react";
import './CreateTodoButton.css';

export function CreateTodoButton(props) {

    const onClickBtnCreateTodo = () => {
       props.setModalOpen(prevStateModal => !prevStateModal);
    };

    return (
        <button 
            className="btnCreateTodo"
            onClick={ () => onClickBtnCreateTodo() }
        >
            <svg className="iconBtnCreateTodo" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                width="20" height="20"
                viewBox="0 0 24 24">
                    <path d="M 11 2 L 11 11 L 2 11 L 2 13 L 11 13 L 11 22 L 13 22 L 13 13 L 22 13 L 22 11 L 13 11 L 13 2 Z"></path>
            </svg>
        </button>
    );
}