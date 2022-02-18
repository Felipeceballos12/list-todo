import React from 'react';
import './TodoIcon.css';

const colorBtnCheck = {
    btnColorDefault: {
        fill: '#ffffff',
    },
    btnColorCheck: {
        fill: '#548c2f',
    }
}

const colorBtnTrash = {
    btnColorDefault: {
        fill: '#000000',
    },
    btnColorTaskDone: {
        fill: '#212529',
    },
}


function TodoIcon({ type, btns, onTaskTodo, completed }) {
    return (
        <React.Fragment>
            { 
                type === "check" ?  
                    <svg 
                        onClick={ onTaskTodo } 
                        className={ btns.check.class } 
                        xmlns="http://www.w3.org/2000/svg" 
                        x="0px" y="0px"
                        width={ btns.check.width } height={ btns.check.height }
                        viewBox={ btns.check.viewBox }
                        style={ completed ? colorBtnCheck.btnColorCheck : colorBtnCheck.btnColorDefault }
                    >
                        <path d={ btns.check.path }></path>
                    </svg>
                :
                    <svg 
                        onClick={ onTaskTodo } 
                        className={ btns.delete.class } 
                        xmlns="http://www.w3.org/2000/svg" 
                        x="0px" y="0px"
                        width={ btns.delete.width } height={ btns.delete.height }
                        viewBox={ btns.delete.viewBox }
                        style={ completed ? colorBtnTrash.btnColorTaskDone : colorBtnTrash.btnColorDefault }
                    >
                        <path d={ btns.delete.path }></path>
                    </svg>

            }
        </React.Fragment>
    );
}

export { TodoIcon }; 


/*

    if (completed) {
        do something
    }

    {completed && }
*/