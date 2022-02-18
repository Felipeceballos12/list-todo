import React from "react";
import { TodoIcon } from "../TodoIcon";
import './TodoItem.css';

const btnsDeleteOrCheck = {
    check: {
        class: "btnCheckTask",
        width: 25,
        height: 25,
        viewBox: "0 0 30 30",
        path: "M 26.980469 5.9902344 A 1.0001 1.0001 0 0 0 26.292969 6.2929688 L 11 21.585938 L 4.7070312 15.292969 A 1.0001 1.0001 0 1 0 3.2929688 16.707031 L 10.292969 23.707031 A 1.0001 1.0001 0 0 0 11.707031 23.707031 L 27.707031 7.7070312 A 1.0001 1.0001 0 0 0 26.980469 5.9902344 z",
    },
    delete: {
        class: "btnDeleteTask",
        width: 18,
        height: 18,
        viewBox: "0 0 128 128",
        path: "M 49 1 C 47.34 1 46 2.34 46 4 C 46 5.66 47.34 7 49 7 L 79 7 C 80.66 7 82 5.66 82 4 C 82 2.34 80.66 1 79 1 L 49 1 z M 24 15 C 16.83 15 11 20.83 11 28 C 11 35.17 16.83 41 24 41 L 101 41 L 101 104 C 101 113.37 93.37 121 84 121 L 44 121 C 34.63 121 27 113.37 27 104 L 27 52 C 27 50.34 25.66 49 24 49 C 22.34 49 21 50.34 21 52 L 21 104 C 21 116.68 31.32 127 44 127 L 84 127 C 96.68 127 107 116.68 107 104 L 107 40.640625 C 112.72 39.280625 117 34.14 117 28 C 117 20.83 111.17 15 104 15 L 24 15 z M 24 21 L 104 21 C 107.86 21 111 24.14 111 28 C 111 31.86 107.86 35 104 35 L 24 35 C 20.14 35 17 31.86 17 28 C 17 24.14 20.14 21 24 21 z M 50 55 C 48.34 55 47 56.34 47 58 L 47 104 C 47 105.66 48.34 107 50 107 C 51.66 107 53 105.66 53 104 L 53 58 C 53 56.34 51.66 55 50 55 z M 78 55 C 76.34 55 75 56.34 75 58 L 75 104 C 75 105.66 76.34 107 78 107 C 79.66 107 81 105.66 81 104 L 81 58 C 81 56.34 79.66 55 78 55 z",
    }
}


export function TodoItem(props) {

    return (
        <li className={`todoItem  ${ props.completed && 'todoItem-active' }`}>
            
            <TodoIcon
                type="check"
                btns={ btnsDeleteOrCheck }
                onTaskTodo={ props.onCompleteTaskTodo }
                completed={ props.completed }
            />
            <p>{props.text}</p>
            <TodoIcon
                type="delete"
                btns={ btnsDeleteOrCheck }
                onTaskTodo={ props.onDeleteTaskTodo }
                completed={ props.completed }
            />
        </li>
    );
}